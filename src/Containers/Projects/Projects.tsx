import React, { useState } from 'react';
import FilterHeader from '../../Components/FilterHeader/FilterHeader';
import Education from './Tabs/Education/Education';
import ProjectDisplay from './Tabs/ProjectDisplay/ProjectDisplay';
import Skills from './Tabs/Skills/Skills';
import projectsData from './Tabs/data';
import './Projects.scss';

function Projects() {
  const [tabState, setTabState] = useState<any>(null);
  const filters = ['Projects', 'Skills', 'Education']
  const subFilters = [
    { parent: 'Projects', headers: ['All', 'Work', 'Side'] },
  ]

  function tab() {
    if (tabState) {
      if (tabState?.main === filters[0]) return <ProjectDisplay projects={projectsData} filter={tabState.sub} />
      else if (tabState?.main === filters[1]) return <Skills />
      else if (tabState?.main === filters[2]) return <Education />
    }
    return null;
  }

  return (
    <div id='projectsContainer'>
      <FilterHeader
        setTabState={setTabState}
        filters={filters}
        subFilters={subFilters}
      />
      <div className="tabWrapper">
        {tab()}
      </div>
    </div>
  )
}

export default Projects;
