import React from 'react'

const pill = ({text}: {text: string}) => {
  return (
    <div className=' inline-flex shadow-lg mx-3 my-3 w-md rounded-md py-2 px-3 bg-gray-300 font-normal text-black'>{text}</div>
  )
}

export default pill