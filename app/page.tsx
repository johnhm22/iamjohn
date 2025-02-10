import Image from "next/image";
import Card from "./components/card";
import Link from "next/link";
import Myskills from "./components/myskills";
import Myprojects from "./components/myprojects";

export default function Home() {
  return (
    <>
    <div className="container  mx-auto min-h-screen flex items-center">
      <div className="flex flex-col">
      <h1 className="text-7xl mb-11">Welcome to my web page</h1>      
      <div className="h-80 ">
        <h2 className="text-5xl mb-9 font-normal">My name is John...</h2>
      <p className="text-3xl leading-10">I am a UK-based fullstack developer. My career so far has involved working on different continents in customer-facing roles delivering business-critical software systems. Some years ago I put myself through a tough software engineering bootcamp with <Link href='https://www.springboard.com/courses/software-engineering-career-track/' target='_blank' >Springboard.</Link> Today, I enjoy the satisfaction of delivering web apps to clients.</p>
      </div>
      </div>
      </div>

<Myskills />

<Myprojects/>
          </>
          
  );
}
