"use client"

import React, { useEffect, useState } from 'react';

import Hero from '../../Components/homePage/hero/Hero';
import SubTitle from '../../Components/SubTitle';
import Services from '../../Components/homePage/services/Services';
import About from '../../Components/aboutPage/About';

import Contact from '../../Components/contactPage/Contact';
;
import ClientsList from '../../Components/clients/ClientsList';
import { clients } from '../../Data';
import ProjectsList from '../../Components/projects/ProjectsList';



const Home = () => {
 
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{setMounted(true)})
  if(!mounted)return null;
 
  return (
    <main className='overflow-hidden'>
    <div className=' p-4 w-screen  min-h[96dvh]
   ' >
    <div className=' overflow-hidden'>
    <main className=' flex flex-col  items-center flex-wrap gap-6 '>
      <section className=''>
      <Hero/>
      </section>
     
      <section className='' id='services'>
        <SubTitle title={"Services"} />
        
        <Services/>
      </section>
      <section className='' id='about'>
    <SubTitle title={'About Me'} />
      <About/>  
      </section>
      <section className=' flex flex-col gap-3' id='clients'>
    <SubTitle title={'clients '} />
      {/* <About/> */}
      <div className='flex justify-center items-center gap-2' >
     <ClientsList data = {clients} />
      </div>
      </section>
      <section className=' flex flex-col gap-3 mb-4' id='contact'>
    <SubTitle title={'contact me '} />
      {/* <About/> */}
     <Contact/>
      </section>

      <section className=' flex flex-col gap-3 mb-4' id='contact'>
    <SubTitle title={'projects '} />
      <ProjectsList/>
      </section>
      
      {/* <Menu/> */}
      
    </main>
    </div>
    </div>
    </main>
  )
}

export default Home