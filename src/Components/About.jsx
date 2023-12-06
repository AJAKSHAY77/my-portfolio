import React from 'react'

const About = () => {
  return (
      <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
              <p className='text-4xl mt-3 font-bold inline border-b-4 border-gray-400'>About</p>
               </div>
          <p className='text-xl mt-20'>
              As an accomplished frontend developer, I specialize in crafting seamless and visually striking user interfaces. With a flair for design and a commitment to cutting-edge technologies, I transform creative concepts into high-performance web applications, ensuring a pixel-perfect user experience.
          </p>
          <br />
          
          <p className='text-xl'>
             Passionate about creating immersive digital experiences, I excel in optimizing performance and accessibility. Collaborating seamlessly with cross-functional teams, I bring ideas to life by leveraging the latest JavaScript frameworks and CSS techniques. My goal is to not just meet but exceed expectations, ensuring a lasting impact on every digital project. 
          </p>
        </div>
    </div>
  )
}

export default About