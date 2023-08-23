import React from 'react'
import { projects } from '../../Data'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {

  return (
    <div className='flex md:justify-center items-center gap-2 container mx-auto'>
        {
            projects.map((project)=>{
                return <ProjectCard key={project.id} data = {project} />
            })
        }
    </div>
  )
}

export default ProjectsList