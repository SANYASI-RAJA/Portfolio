import React from 'react'

const TextColorChange = ({text, color}) => {
  return (
    <div className={`text-[${color}] inline`}>
        {text}
    </div>
  )
}

export default TextColorChange