import React from 'react'
import Card from './card'

const myprojects = () => {
  return (
    <div>
    <div className="container mx-auto min-h-screen">
         
             
         <div className="">
           <h2 className="text-5xl mb-9 font-normal">Projects</h2>
       <div className="h-full justify-items-center grid grid-cols-2 border border-orange-400">
         
         
         <Card  src='/projects/finance-app' title='Finance App' description='Next.js 13 had come out recently and I was keen to use this, make lots of mistakes, get confused and so learn. Also, I had not used Tailwind to any great degree so this was a great opportunity to do so.'/>
         <Card  src='/projects/finance-app' title='Finance App' description='Next.js 13 had come out recently and I was keen to use this, make lots of mistakes, get confused and so learn. Also, I had not used Tailwind to any great degree so this was a great opportunity to do so.'/>
         <Card  src='/projects/finance-app' title='Finance App' description='Next.js 13 had come out recently and I was keen to use this, make lots of mistakes, get confused and so learn. Also, I had not used Tailwind to any great degree so this was a great opportunity to do so.'/>
         
      
   
       </div>
         </div>
         
         </div>
   
       </div>
  )
}

export default myprojects