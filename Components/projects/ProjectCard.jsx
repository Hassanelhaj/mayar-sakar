import Image from 'next/image'
import React from 'react'
import img from '../../public/imgs/clients/c2.webp'

const ProjectCard = ({data}) => {
  return (
    <main className='flex flex-col bg-white p-2'>
        <section>
            <img priority src='https://mir-s3-cdn-cf.behance.net/project_modules/max_632/55f76a177710469.64dbc60ae1ce9.png' 
            className='w-36 h-36 object-center ' />
        </section>
        <section className='flex justify-center items-center gap-2'> 
        <p>
            {data.title}
        </p>

        </section>


    </main>
  )
}

export default ProjectCard