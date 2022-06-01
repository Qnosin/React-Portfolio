import React from 'react'
import ProjectSecond from './ProjectSecond'
import ProjectFirst from './ProjectFirst'
import ProjectThird from './ProjectThird'
function ProjectSection({className}) {
  return (
    <section className={className}>
        <div className='wrapper'>
        <ProjectFirst/>
        <ProjectSecond />
        <ProjectThird />
        <h1>...And more on Github</h1>
        </div>
    </section>
  )
}

export default ProjectSection