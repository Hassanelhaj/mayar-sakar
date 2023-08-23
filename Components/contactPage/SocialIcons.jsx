import React from 'react'
import {BsBehance, BsFacebook} from 'react-icons/bs'
// import {BsGithub} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
// import {SiGmail} from 'react-icons/si'

const SocialIcons = () => {
  return (
    <div className='flex justify-center items-center gap-2 text-purple-700'>

       <h3><a href='https://mir-s3-cdn-cf.behance.net/project_modules/max_632/55f76a177710469.64dbc60ae1ce9.png'
       target='-blank'><BsFacebook className='text-2xl' /></a></h3>
       <h3><a target = '_blank' href='https://www.linkedin.com/in/mayarsakr'
       ><AiFillLinkedin className='text-3xl' /></a>
       </h3> 
       <h3><a href='https://www.behance.net/mayarsakr' target='-blank'><BsBehance className='text-3xl' /></a></h3>
       {/* <h3><a target='-blank' href='mailto:Sideegmohammednoor@gmail.com'><SiGmail/></a></h3> */}
    </div>
  )
}

export default SocialIcons