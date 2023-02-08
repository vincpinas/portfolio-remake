import React from 'react';
import { ParsedProject } from '../../../../interfaces';
import { GrClose } from 'react-icons/gr';

interface PopProps {
  project: ParsedProject;
  close: () => void;
}

function ProjectPopup({ project, close }: PopProps) {
  return (
    <div id='popupWindowContainer'>
      <div className='window'>
        <GrClose id='close' onClick={close} />
        <div className=''>
          
        </div>
      </div>
    </div>
  )
}

export default ProjectPopup