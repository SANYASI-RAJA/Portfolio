import React from 'react'
import {TypeAnimation} from "react-type-animation"

const TextAnimation = () => {
    const array = ["I'm a Full Stack Developer",1000, "I'm a MERN Developer", 1000, "I'm a Competitive Programmer", 1000]
  return (
    <div>
        <TypeAnimation 
            sequence={array}
            wrapper='span'
            speed={50}
            // style={{fontSize:"2em", display:"inline-block"}}
            className='text-[20px] md:text-5xl'
            repeat={Infinity}
        />
    </div>
  )
}

export default TextAnimation