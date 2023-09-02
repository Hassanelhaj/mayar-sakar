import React, { useState } from 'react'

const Contact = () => {
  const [lable,setLable] = useState(null)
  const handleSend = ()=>{
    setLable('you request is under proccess');
    setTimeout(()=>{setLable('')},4000)
  }
  return (
    <div className=" flex flex-col items-center w-fit bg-white
     justify-center gap-3 p-6 
     shadow-[0_3px_10px_rgb(0,0,0,0.05)]  shadow-slate-500 rounded-lg ">
       <div className="flex flex-col justify-start items-start gap-2 mb-4">
        <p className="text-sm text-white">Name</p>
        <input
          type="text"
          className="w-64 sm:w-72 mt-1 px-3 py-2 bg-slate-50 border
   shadow-sm border-white shadow-slate-500 focus:outline-none 
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm text-white focus:ring-1"
          placeholder=" Name"
        />
      </div> 
      <div className="flex flex-col justify-start items-start gap-2 mb-4">
        <p className="text-sm text-white">Email</p>
        <input
          type="text"
          className="w-64 sm:w-72 mt-1 px-3 py-2 bg-slate-50 border
   shadow-sm border-white shadow-slate-500 focus:outline-none 
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm text-white focus:ring-1"
          placeholder=" Email"
        />
      </div>                   
      <div className="flex flex-col justify-start items-start gap-2 mb-4 text-white">
        <p lassName="text-sm text-white">Details</p>
        <textarea          
          
          className="w-64 sm:w-72 mt-1 px-3 py-2 bg-slate-50 border
   shadow-sm border-white shadow-slate-500 focus:outline-none 
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm text-white focus:ring-1"
          placeholder=" Details"
        />
      </div>
    
      <p onClick={handleSend} className=" bg-purple-700 poster  cursor-pointer text-white
       font-medium py-2 w-64 sm:w-72 text-center rounded-lg text-transparent">Send</p>
       {
        lable &&
       <p className='text-purple-700 font-semibold text-sm p-3 bg-purple-200 rounded-lg mt-2'>{lable}</p>

       }
    </div>


  )
}

export default Contact