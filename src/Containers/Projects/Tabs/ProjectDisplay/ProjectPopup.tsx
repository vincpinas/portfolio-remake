import { useRef } from 'react';
import { ParsedProject } from '../../../../interfaces';
import { GrClose, GrGithub as Github } from 'react-icons/gr';
import { VscVmRunning as LiveVersion } from "react-icons/vsc";
import placeholder from '../../../../Assets/Default_Image_Thumbnail.png';

interface PopProps {
  project: ParsedProject;
  close: () => void;
}

function ProjectPopup({ project, close }: PopProps) {

  const window = useRef<HTMLDivElement>(null);
  const blur = useRef<HTMLDivElement>(null);

  const closeAnim = () => {
    if (!window.current || !blur.current) return;
    const timeout = 350;

    window.current.style.animation = 'none';
    window.current.style.animation = '';
    blur.current.style.animation = 'none';
    blur.current.style.animation = '';
    window.current.style.animation = `s-out-w-r ${timeout}ms ease-in-out 1 forwards`
    blur.current.style.animation = `f-in-w-r ${timeout}ms ease-in-out 1 forwards`

    setTimeout(() => close(), timeout + 10);
  }

  const typeTag = (() => {
    if (project.categories.includes("personal")) {
      return "Personal"
    } else if (project.categories.includes("work")) {
      return "Work"
    } else if (project.categories.includes("school")) {
      return "School"
    }
  })()

  return (
    <section id='popupWindowContainer'>
      <div className='window' ref={window}>
        <GrClose id='close' onClick={closeAnim} />
        <section className='introduction'>
          <div className='popupImages'>
            <img src={placeholder} alt="Project thumbnail" />
            <ul>
              <li><img src={placeholder} alt="project" /></li>
              <li><img src={placeholder} alt="project" /></li>
              <li><img src={placeholder} alt=" project" /></li>
              <li><img src={placeholder} alt=" project" /></li>
            </ul>
          </div>
          <div className='title'>
            <h2>{project.title}</h2>
            <p>{project.introduction}</p>
            <hr />

            <h4>Skills</h4>
            <ul className='tagList'>
              {project.skills.map((skill) => {
                return (
                  <li key={skill} className='tag'>{skill}</li>
                )
              })}
            </ul>

            <h4>Project Type</h4>
            <ul className='tagList'>
              <li className='tag'>{project.team}</li>
              <li className='tag'>{typeTag}</li>
            </ul>

            <h4>Useful Links</h4>
            <ul className='tagList'>
              <li className='tag'><a href={project.links.github} target='_blank' rel="noreferrer" className={project.links.live === "#" ? "disabled" : ""}>Github <Github></Github></a></li>
              <li className='tag'><a href={project.links.live} target='_blank' rel="noreferrer" className={project.links.live === "#" ? "disabled" : ""}>Live Version<LiveVersion></LiveVersion></a></li>
            </ul>
          </div>
        </section>
        <h4>About {project.title}</h4>
        <p>{project.description}</p>

        <h4>What I learned from {project.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: project.learned }}></p>
      </div>
      <div className='blur' ref={blur} onClick={closeAnim} />
    </section>
  )
}

export default ProjectPopup