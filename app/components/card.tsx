import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    description: string;
    src: string
}

const card = ({title, description, src}: Props) => {
  return (
    <div className='ml-5 p-3 w-1/2  md:w-1/3 h-1/3 bg-slate-200 rounded-md flex flex-col'>
        <img src='finance-app.png' className='p-2 min-h-60 max-h-60 border border-blue-500'/>
        <h2 className='text-xl font-semibold my-3'>{title}</h2>
        <p>{description}</p>
        <div className='flex justify-end mt-3'>
            <Link href='/projects/finance-app'>
        <button className='font-normal text-base w-150 h-100 rounded-md bg-green-400 py-1 px-3'>Details</button>
        </Link>      
        </div>
    </div>
  )
}

export default card