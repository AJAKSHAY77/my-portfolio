import React from 'react'
import HTML from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";



const Experirence = () => {
  
    const tech = [
      {
        id: 1,
        src: react,
         title: "React js",
        style:"shadow-blue-600"    
      },
      {
        id: 2,
        src: javascript,
         tit:"JavaScript",
        style:"shadow-yellow-600"    
      },
      {
        id: 3,
        src: HTML,
         title: "HTML",
        style:"shadow-orange-600"    
      },
      {
        id: 4,
        src: css,
         title: "CSS",
        style:"shadow-blue-600"    
      },
      {
        id: 5,
        src: tailwind,
         title: "Tailwind CSS",
        style:"shadow-sky-600"    
      },
      {
        id: 6,
        src: node,
         title: "Node.js",
        style:"shadow-green-500"    
      },
      {
        id: 7,
        src: mongodb,
         title: "MongoDB",
        style:"shadow-green-500"    
      },
      {
        id: 8,
        src: github,
         title: "GitHub",
        style:"shadow-gray-400"    
      },
    ];
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full md:pt-44"
    >
      <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, style, title, src }) => (
            <div
              key={id}
              className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experirence