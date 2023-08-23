import React from 'react'
import img from '../../../public/imgs/mayarLogo.png'
import mayar from '../../../public/imgs/mayar.jpg'
import Image from 'next/image'

const ImgSection = () => {
  return (
    <div>
        <Image src={ img} alt = 'hero-logo' className='w-80 xl:w-96 xl:h-96 h-80 rounded-full bg-transparent'/>
    </div>
  )
}

export default ImgSection