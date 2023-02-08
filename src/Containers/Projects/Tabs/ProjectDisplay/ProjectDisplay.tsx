import React, { useEffect, useState } from 'react';
import { ParsedProject } from '../../../../interfaces';
import { GoCheck } from 'react-icons/go';
import { MdConstruction } from 'react-icons/md';
import placeholder from '../../../../Assets/Default_Image_Thumbnail.png';
import './ProjectDisplay.scss'
import ProjectPopup from './ProjectPopup';

interface PPRops {
  projects: ParsedProject[]
  filter: string;
}

function ProjectDisplay({ projects, filter }: PPRops) {
  const [filteredProjects, setFilteredProjects] = useState<ParsedProject[]>(projects);
  const [popupActive, setPopupActive] = useState<boolean>(false);
  const [popup, setPopup] = useState<number>(1);
  const mouseMove = (e: any) => {
    const { currentTarget: t } = e;

    const rect = t.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    t.style.setProperty('--mouse-x', `${x}px`);
    t.style.setProperty('--mouse-y', `${y}px`);
  }
  const showPopup = (id: number) => {
    setPopup(id);
    setPopupActive(true);
  }
  const closePopup = () => setPopupActive(false);
  useEffect(() => {
    if (projects.filter(project => project.categories.includes(filter.toLowerCase())).length > 0) {
      setFilteredProjects(
        projects.filter(project => project.categories.includes(filter.toLowerCase()))
      )
    } else {
      setFilteredProjects(projects)
    }
  }, [projects, filter])

  return (
    <div id='projectTabContainer'>
      {popupActive ? <ProjectPopup project={projects.filter(project => project.id === popup)[0]} close={closePopup} /> : null}
      <ul id='projectList'>
        {filteredProjects.length > 0 ? filteredProjects.map((project: ParsedProject, index: number) => {
          return (
            <li key={`project-card-id:${index}`} 
                className='projectCard' 
                onClick={() => showPopup(project.id)} 
                onMouseMove={(e) => mouseMove(e)}
            >
              <div className='cardContent'>
                <div className='imgWrapper'>
                  <img src={project.img_src !== '' ? project.img_src : placeholder} alt="project cover" />
                </div>
                <span>
                  <h3>{project.title}</h3>
                  <span>{project.status === 1 ? <figure>Finished <GoCheck className='finished' /></figure> : <figure>In Progress <MdConstruction className='in-progress' /></figure>}
                  </span>
                </span>
                <ul className='tagList'>
                  {project.categories.map((category: string, index: number) => { return (<li key={`${project.title}-tag-id:${index}`} className='tag'>{category}</li>) })}
                </ul>
              </div>
            </li>
          )
        }) : <h4>There are currently no projects available</h4>}
      </ul>
    </div>
  )
}

export default ProjectDisplay;
