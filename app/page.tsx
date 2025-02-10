import Image from "next/image";
import Card from "./components/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="container text-gray-500 mx-auto min-h-screen border border-red-500 flex items-center">
      <div className="border border-orange-400 flex flex-col">
      <h1 className="text-7xl mb-11">Welcome to my web page</h1>      
      <div className="border border-blue-500 h-80 ">
        <h2 className="text-5xl mb-9">My name is John...</h2>
      <p className="text-3xl text-gray-400">I am a UK-based fullstack developer. My career so far has involved working in different continents and countries in customer-facing roles delivering business-critical software systems. Today, I enjoy the satisfaction of delivering web apps to clients.</p>
      </div>
      </div>
      </div>

   <div className="container text-gray-500 mx-auto min-h-screen border border-red-500 flex">
      <div className="border border-orange-400 flex flex-col">
          
      <div className="border border-blue-500 h-80 ">
        <h2 className="text-5xl mb-9">My Skills</h2>
      <p className="text-3xl text-gray-400">I am a UK-based fullstack developer. My career so far has involved working in different continents and countries in customer-facing roles delivering business-critical software systems. A few years ago I put myself through an intensive software engineer bootcamp with <Link href='https://www.springboard.com/courses/software-engineering-career-track/'>Springboard</Link>. Today, I enjoy the satisfaction of delivering web apps to clients.</p>
      </div>
      </div>
      </div>
      {/* <Card  src='/projects/finance-app' title='Finance App' description='Next.js 13 had come out recently and I was keen to use this, make lots of mistakes, get confused and so learn. Also, I had not used Tailwind to any great degree so this was a great opportunity to do so.'/> */}
          
         
          </>
          
  );
}
