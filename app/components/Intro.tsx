import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen flex items-center mb-11">
      <div className="flex flex-col">
        <h1 className="text-4xl lg:text-7xl mb-11">Welcome to my web page</h1>
        <div className="h-80 ">
          <h2 className="heading">My name is John...</h2>
          <p className="text-xl lg:text-3xl leading-8 lg:leading-10">
            I am a UK-based fullstack developer. My career so far has involved
            working on different continents in customer-facing roles delivering
            business-critical software systems. Some years ago I put myself
            through a tough software engineering bootcamp with{" "}
            <Link
              href="https://www.springboard.com/courses/software-engineering-career-track/"
              target="_blank"
              className="italic"
            >
              Springboard.
            </Link>{" "}
            Today, I enjoy the satisfaction of delivering web apps to clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
