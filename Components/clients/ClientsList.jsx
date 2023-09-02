import React from 'react'
import ClientCard from './ClientCard'

const ClientsList = ({data}) => {
  return (
    <div className='flex items-center justify-center lg:justify-start gap-2 container mx-auto flex-wrap' id = 'clients'>
        {
            data.map((client)=>{
                return <ClientCard key={client.id} data ={client} />
            })
        }
    </div>
  )
}

export default ClientsList