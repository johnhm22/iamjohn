import React from 'react';
import Image from 'next/image'
import Pill from '@/app/components/Pill';
import Link from 'next/link';

const page = () => {
  return (
    <>
    <section className='flex justify-center bg-red-300'>
    <div className='w-11/12 pl-3 border border-blue-500 bg-amber-300'>
    <h1 className='pt-7 text-5xl mb-9 font-normal'>Finance App</h1>
    <div className='mb-7 '>
    <p className='text-4xl'>Purpose</p>
    <p className='my-3'>The app was built partly as a training exercise, partly as a demonstration to potential employers of what I can do and partly to allow a family member to record his shareholdings rather than relying on the traditional pen and paper.</p>
        <p>
    Next.js 13 had come out recently and I was keen to use this, make lots of mistakes, get confused and so learn. Also, I had not used Tailwind to any great degree so this was a great opportunity to do so. In addition, having recently worked on a team building an app that took a thoroughly professional approach in terms of code structure and user verification I was keen to replicate it.
    </p>
    </div>
    <div className='mb-12'>
    <p className='text-4xl'>What does it do?</p>
    <p className='my-3'>The core functionality allows a user to add into a table shares they own, inserting purchase price, and quantity. The app will then retrieve the closing price from the previous trading day (end-of-day) and display the value of each shareholding. A summary table shows the total value and cost and the overall profit/loss.</p>
    <p className='mb-3'>To use the above, the user needs to create an account; just a simple username, first and last name, and password. For some wanting to have the price of an invdividual share, and avoid account creation, there is a soon-to-be-released 'quick quote' feature where the user searches for the company stock and a price is displayed.</p>
    <p className='mb-7'>
    Below are a few screen shots of the key pages:
    </p>
    <p className='mb-5 text-xl'>Home page</p>
    <div className='flex mt-5  justify-center'>
     
    <Image alt='finance app home page' width={800} height={800} className='' src='/finance-home.png'/>
    </div>
  
  <p className='my-5 text-xl'>Create account</p>
    <div className='mt-5  flex justify-center'>
    
    <Image alt='finance app home page' width={800} height={800} className=' ' src='/finance-create-account.png'/>
    </div>
    
    <p className='my-5 text-xl'>Portfolio</p>
    <div className='mt-5  flex justify-center'>      
    <Image alt='finance app home page' width={800} height={800} className=' ' src='/finance-portfolio.png'/>
    </div>    
    </div>

    <div className='mb-7'>
    <p className='text-4xl mb-3'>Tech used</p>
    <div>
    <Pill text='HTML/css'/>
    <Pill text='Tailwindcss'/>
    <Pill text='JavaScript'/>
    <Pill text='TypeScript'/>
    </div>
    <div>
    <Pill text='React'/>
    <Pill text='Next.js v13'/>
    </div>
    <div>
    <Pill text='Prisma ORM'/>
    <Pill text='PostgreSQL'/>
    </div>
    </div>
    <p className='text-4xl my-3'>Lessons learnt</p>
    <p className='mb-7'>This was as full-stack as it gets. I wanted to replicated the complexity and professionalism of a commercial project I had developed with a dev team. The difference was that I would do everything. The key learning experiences were tailwind, which I had not seriously used previously, ensuring modularity by using components, and testing with vitest.</p>
    <div className='flex justify-end gap-3 pb-3 pr-3 font-medium'>
      <Link href='https://github.com/johnhm22/finance-app' target='_blank'><button className='rounded-md py-2 px-4 bg-green-500'>Code</button> </Link>
      <Link href='https://finance-app-puce.vercel.app/' target='_blank'><button className='rounded-md py-2 px-4 bg-blue-500'>Website</button> </Link>
    </div>
    
    </div>
    </section>
    
    </>
  )

}

export default page