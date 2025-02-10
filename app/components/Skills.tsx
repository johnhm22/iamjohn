import React from 'react'

const Skills = ({header, children}: {header: string, children: React.JSX.Element}) => {
  return (
    <>
    <p className="grid grid-cols-3 gap-3 text-xl font-semibold text-black">{header}</p>
    {children}
    </>
  )
}

export default Skills