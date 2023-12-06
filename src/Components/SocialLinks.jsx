import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
const SocialLinks = () => {
    const Links = [
        {
            id: 1,
            child:( <>
                           LinkedIn <FaLinkedin size={30}/> 
            </>),
            href: "http://linkedin.com/in/akshay-jain77",
            style:"rounded-tr-md"
            
        },
        {
            id: 2,
            child:( <>
                           Github <FaGithub size={30}/> 
            </>),
            href: "https://github.com/AJAKSHAY77/",
           
            
        },
        {
            id: 3,
            child:( <>
                           Mail <HiOutlineMail size={30}/> 
            </>),
            href: "mailto:ajakshayjain11@gmail.com",
           
            
        },
        {
            id: 4,
            child:( <>
                           Resume <BsFillPersonLinesFill size={30}/> 
            </>),
            href: "/Akshay-Resume.pdf",
            style: "rounded-br-md",
            downlaod: true
            
        },
    ]
  return (
      <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
          <ul>
              {Links.map(({ id, child, href, style, downlaod}) => (<li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] duration-300 rounded-md' + " " + style}>
                  <a href={href} className="flex justify-between items-center w-full text-white"
                      download={downlaod}
                      target='_blank'
                      rel='noreferrer'                  >
                      
                      {child}
                      
                  </a>
                  
              </li>))}
             
             
          </ul>
    </div>
  )
}

export default SocialLinks  