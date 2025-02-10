import React from 'react';
import Image from 'next/image'

const page = () => {
  return (
    <>
    <section className='h-screen bg-red-200 flex justify-center'>
    <div className='w-11/12 pl-3 border border-blue-500'>
    <h1 className='pt-7 text-5xl mb-9 font-normal'>Finance App</h1>
    <div className='mb-7 bg-gray-200'>
    <p className='text-4xl'>Purpose</p>
    <p className='my-3'>The app was built partly as a training exercise, partly as a demonstration to potential employers of what I can do and partly to allow a family member to record his shareholdings rather than relying on the traditional pen and paper.</p>
        <p>
    Next.js 13 had come out recently and I was keen to use this, make lots of mistakes, get confused and so learn. Also, I had not used Tailwind to any great degree so this was a great opportunity to do so. In addition, having recently worked on a team building an app that took a thoroughly professional approach in terms of code structure and user verification I was keen to replicate it.
    </p>
    </div>
    <div className='mb-7 bg-gray-200'>
    <p className='text-4xl'>What does it do?</p>
    <p className='my-3'>The core functionality allows a user to add into a table shares they own, inserting purchase price, and quantity. The app will then retrieve the closing price from the previous trading day (end-of-day) and display the value of each shareholding. A summary table shows the total value and cost and the overall profit/loss.</p>
    <p className='mb-3'>To use the above, the user needs to create an account; just a simple username, first and last name, and password. For some wanting to have the price of an invdividual share, and avoid account creation, there is a soon-to-be-released 'quick quote' feature where the user searches for the company stock and a price is displayed.</p>
    <p>
    Below are a few screen shots of the key pages:
    </p>
    <div className='flex flex-col mt-5 border border-red-500 justify-center'>
      <p className='mb-5 text-xl'>Home page</p>
    <Image alt='finance app home page' width={800} height={800} className='' src='/finance-home.png'/>
    </div>
  
    <div className='mt-5 border border-red-500 flex flex-col justify-center'>
    <p className='mb-5 text-xl'>Ceate account</p>
    <Image alt='finance app home page' width={800} height={800} className=' ' src='/finance-create-account.png'/>
    </div>
    <div className='mt-5 border border-red-500 flex justify-center'>
      
    <Image alt='finance app home page' width={800} height={800} className=' ' src='/finance-portfolio.png'/>
    </div>
    
    </div>
    <div className='mb-7 bg-gray-200'>
    <p className='text-4xl'>Tech used</p>
    </div>
    <p className='text-4xl'>Lessons learnt</p>
    </div>
    </section>
    
    </>
  )

}

export default page