import { useRef } from 'react';
import { ParsedProject } from '../../../../interfaces';
import { GrClose } from 'react-icons/gr';
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

  return (
    <section id='popupWindowContainer'>
      <div className='window' ref={window}>
        <GrClose id='close' onClick={closeAnim} />
        <div className='popupImages'>
          <img src={placeholder} alt="Project thumbnail" />
          <ul>
            <li><img src={placeholder} alt="project image" /></li>
            <li><img src={placeholder} alt="project image" /></li>
            <li><img src={placeholder} alt=" project image" /></li>
            <li><img src={placeholder} alt=" project image" /></li>
          </ul>
        </div>
        <div className='title'>
          <a href={project.links.live} target='_blank'>
            <h2>{project.title}</h2>
          </a>
          <p>{project.introduction}</p>
        </div>
      </div>
      <div className='blur' ref={blur}></div>
    </section>
  )
}

export default ProjectPopup