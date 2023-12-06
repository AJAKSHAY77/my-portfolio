import React from 'react'
import netflixlogo from "../assets/Netflix-Presentation.jpg"
import Munchmatelogo from "../assets/munchmate.png"
import youtubelogo from "../assets/youtube-logo.jpg"
import project from "..//assets/project.png"

const PortFolio = () => {

    const handleDemobutton = (demolink) => { window.open(demolink, "_blank") };
    const handleCodebutton = (Codelink) => {{ window.open(Codelink, "_blank") }};
        const PortFolios = [
            {
                id: 1,
                src: netflixlogo,
                demolink: "https://ajnetflixgpt.netlify.app",
                Codelink: "https://github.com/AJAKSHAY77/netflix-gpt.git"
            },
        
            {
                id: 2,
                src: Munchmatelogo,
                demolink: "https://ajmunchmate.netlify.app",
                Codelink: "https://github.com/AJAKSHAY77/react-3.0.git"
            },
        
            {
                id: 3,
                src: youtubelogo,
                demolink: "https://youtube-aj.netlify.app",
                Codelink: "https://github.com/AJAKSHAY77/youtube_app.git"
            },
        
            {
                id: 4,
                src: project,
                  demolink: "https://rideyourcar.netlify.app",
                Codelink: "https://lnkd.in/dj_Nf-EB"
            },
        
            {
                id: 5,
                src: project,
                  demolink: "https://yourcartonline.netlify.app",

                Codelink: "https://github.com/AJAKSHAY77/Remove-duplicates.git"
            },

            {
                id:6,
                src: project,
                  demolink: "https://lnkd.in/dXtr8HKD",
                Codelink: "https://lnkd.in/dmdiBAyv"
            }
        
        ]
        return (
            <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' >
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='p-8'>
                        <p className='text-4xl font-bold inline  border-b-4 border-gray-500'>Portfolio</p>
                        <p className='py-6'>Check out some  of my work right here </p>
                    </div>

              
              
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                  
                        {PortFolios.map(({ id, src, demolink, Codelink }) => (<div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt='' className='object-cover w-screen h-52 rounded-md duration-200 hover:scale-105 ' />
                   
                            <div className='flex items-center justify-center'>
                                <button onClick={() => (handleDemobutton(demolink))} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button onClick={() => (handleCodebutton(Codelink))} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>))}
                  
                    </div>
                </div>
            </div>
        )
    }


export default PortFolio