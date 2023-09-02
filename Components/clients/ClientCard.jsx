import Image from 'next/image'
import React from 'react'

import img from '../../public/imgs/clients/c2.webp'


const ClientCard = ({data}) => {
  return (
    <main className=' bg-white p-3 w-[260px] rounded-lg shadow-lg h-[270px]
    flex flex-col justify-center items-center gap-2 first-letter'>
        <section className='flex flex-col justify-center items-center gap-2'>
            <Image src= {  img}  className='w-24 h-24 rounded-full' />
            <span className='font-semibold text-purple-800 text-lg'>{data?.name || 'mayar sakr'}</span>

        </section>
        <section>
            <p className='font-medium text-sm text-slate-900'>
              {
                data?.message ||`
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ea veritatis molestias laudantium neque sint, 
                iusto mollitia nemo soluta? Tempore officia eaque quas eveniet odio obcaecati 
                nostrum dolores aspernatur esse veniam!`
              }
            </p>
        </section>


    </main>
  )
}

export default ClientCard