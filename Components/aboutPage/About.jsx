import Image from 'next/image'
import React from 'react'
import logo from '../../public/imgs/mayarLogo.png'

const About = ({data}) => {
  return (
    <div className=' 
    flex items-center justify-center overflow-hidden
     arabic p-6 gap-x-8 gap-y-4 flex-wrap'>
      <section className='border-8 border-purple-700 rounded-lg border-10'>
        <Image src={logo} className='w-48 h-48 rounded-lg border '/>
      </section>
      <section className='w-72 h-72 bg-purple-700 text-white p-4 rounded-lg leading-6 flex flex-col justify-center items-center gap-3'>
        <h3 className='text-lg font-semibold'>About</h3>
        <p className='flex flex-col gap-3 capitalize items-center'>
        <span className='font-medium text-lg'> hey there i'm mayar sakara ,</span>
        <span className='text-sm font-medium'>
          ui/ux designer with a foucus on creating exptional user interfaces and websites.
          with speciallized training and hands-on experience ,
          i excel at crafting proessional designs that enhance user experiance .
          skilled at conducting through case studies from start to finsh .
        </span>

        </p>
      </section>

   
    </div>
  )
}

export default About