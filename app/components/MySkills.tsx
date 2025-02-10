import React from 'react'
import Pill from './Pill'

const MySkills = () => {
  return (
    <div>
 <div className="container mx-auto min-h-screen flex">
      <div className="flex flex-col">
          
      <div className="h-80 ">
        <h2 className="text-5xl mb-16 font-normal">My Skills</h2>
    <div className="grid grid-cols-3 gap-x-5 gap-y-16">
      <div className="mb-7">
      <p className="ml-3 grid grid-cols-3 gap-3 text-xl font-semibold text-black">Languages</p>
      <Pill text='JavaScript'/>
      <Pill text='TypeScript'/>
      <Pill text='HTML/css'/>      
      </div>
      <div className="mb-7">
      {/* <div>
        <Skills header='Languages'>
          <><Pill text='JavaScript'/></>
          <><Pill text='TypeScript'/></>
          <><Pill text='HTML/css'/></>
        </Skills>   
      <div> */}
      <p className="ml-3 grid grid-cols-3 gap-3 text-xl font-semibold whitespace-nowrap">Frameworks and Libraries</p>
      <Pill text='React'/>
      <Pill text='Next.js v15'/>
      <Pill text='Tailwindcss'/> 
      </div>
      <div>
      <p className="ml-3 grid grid-cols-3 gap-3 text-xl font-semibold whitespace-nowrap">Backend</p>
      
      <Pill text='Prisma ORM'/>
      <Pill text='PostgreSQL'/>
      <Pill text='SQL'/> 
      </div>
      
      <div>
      <p className="ml-3 grid grid-cols-3 gap-3 text-xl font-semibold whitespace-nowrap">Other stuff...</p>      
      <Pill text='Working in a team'/>
      <Pill text='Talking to clients'/>
      <Pill text='Being human'/>
      </div>
      
    </div>
      </div>
      </div>      
      </div>
    
    </div>
  )
}

export default MySkills