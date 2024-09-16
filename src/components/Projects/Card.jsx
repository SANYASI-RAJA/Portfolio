// import React from "react";
// import { CiShare1 } from "react-icons/ci";
// import { IoLogoGithub } from "react-icons/io";

// const Card = ({ name, desc, github, image, demo, tech }) => {
//   return (
//     <div className="flex flex-row gap-14">
//       <div className="Card w-[70%] flex flex-row items-start gap-10 h-72 shadow-sm shadow-blue-200 transform hover:translate-y-3 hover:duration-200 p-5 bg-blue-950">
//         <div>
//           <div className="flex flex-col gap-4 h-56">
//             <img src={image} alt="" className="w-[100%]" />
//           </div>
//         </div>
//         <div>
//           <div className="icons flex flex-col gap-3 justify-between ">
//             <div className="name text-xl font-bold">{name}</div>
//             <div className="desc flex items-start gap-3 font-semibold text-justify">
//               {desc}
//             </div>
//             <div className="techStack flex gap-3">
//             {
//                 tech.map((ele, ind) => (
//                   <div key={ind}>{ele}</div>
//                 ))
//               }
//             </div>
//             <div className="links flex justify-end gap-4">
//               <a className="text-3xl" href={github} target="_blank">
//                 <IoLogoGithub />
//               </a>
//               <a className="text-3xl"  target="_blank">
//                 <CiShare1 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


// const Card = ({name, desc, github, image, demo, tech, flag }) => {
//   return (
//     <div>
//       <div className={`card flex ${flag ? "flex-row-reverse": "flex-row" } justify-center gap-6`}>
//         <div className="group"><img className="transition-opacity duration-300 filter brightness-50 group-hover:brightness-100" src={image} alt="" /></div>
//         <div className="flex flex-col gap-3">
//           <h1 className="text-2xl font-bold text-blue-200">{name}</h1>
//           <p className="bg-[#172a45] w-[70%] p-5">{desc}</p>
//           <div className="flex flex-row gap-2 text-[#64ffda]">
//             {
//               tech.map((ele,ind)=>(
//                 <div >{ele}</div>
//               ))
//             }
//           </div>
//           <div className="flex flex-row gap-3 mt-2 text-3xl">
//             <a href={github}><IoLogoGithub /></a>
//             <a href={github}><CiShare1 /></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card

import React from "react";
import { CiShare1 } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";

const Card = ({name, desc, github, image, demo, tech, flag }) => {
  return (
    <div className="mt-5">
      <div className={`card flex flex-col-reverse ${flag ? "lg:flex-row-reverse": "lg:flex-row" } justify-between gap-6 md:gap-9 mb-10`}>
        <div className="group lg:w-[50%]"><img className="transition-opacity duration-300 filter brightness-50 group-hover:brightness-100" src={image} alt="" /></div>
        <div className="flex flex-col gap-3 lg:w-[50%]">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-200">{name}</h1>
          <p className="bg-[#172a45] md:text-2xl lg:text-xl lg:w-[100%] p-5">{desc}</p>
          <div className="flex flex-row gap-2 flex-wrap md:text-xl text-[#64ffda]">
            {
              tech.map((ele,ind)=>(
                <div key={ind}>{ele}</div>
              ))
            }
          </div>
          <div className="flex flex-row gap-3 mt-2 text-3xl md:text-4xl lg:text-3xl">
            <a href={github}><IoLogoGithub /></a>
            <a href={demo} target="_blank"><CiShare1 /></a>
          </div>
        </div>
      </div>
      <hr className="text-gray-900 border-gray-700"/>
    </div>
  )
}

export default Card