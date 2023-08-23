import Link from 'next/link'
import React from 'react'
import Writer from '../../Writer'
import SocialIcons from '../../contactPage/SocialIcons'

const TextSection = () => {
  return (
    <div className='flex flex-col justify-center  gap-4'>
        <h1 className='text-lg font-bold capitalize '>
             hello I'm mayar sakar
             <span className='text-purple-700 text-xl font-extrabold'>
              <Writer/>
             </span>
        </h1>
        <p className='w-64'>
           ui/ux desinger with specialized training and experiance to create user interfaces and
           websites that enhance user experiance
        </p>
        <div className='flex items-center gap-3'>
          <p className='capitalize text-purple-700 text-lg font-medium'>Follow me  :</p>
          <SocialIcons/>
        </div>
        <div className='capitalize flex items-center gap-2 mt-4'>
        <a href='#projects' className='px-2 py-2  rounded-lg shadow-md  border border-purple-700 text-purple-700 bg-white'>
              browse my projects
            </a>
            <a href='/' className='px-2 py-2  rounded-lg shadow-md bg-purple-700 text-white'>
              download cV
            </a>
          
        </div>
    </div>
  )
}

export default TextSection