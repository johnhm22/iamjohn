import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <div className="px-2 mx-auto flex mb-11 max-h-screen">
      <div className="flex flex-col">
        <h1 className="text-3xl lg:text-5xl mb-8 font-extrabold text-blue-600">
          John Morgan
        </h1>
        <div className="">
          <h2 className="heading">Full-Stack Developer</h2>
          <div className="text-xl lg:text-xl leading-8 lg:leading-10">
            <p className="mb-7">
              I am a UK-based fullstack developer focussing on{" "}
              <span className="font-semibold">
                React/Next.js, tailwindcss, JavaScript, and PostgreSQL
              </span>
              .
            </p>
            <p className="mb-7">
              My career so far has involved working on different continents in
              customer-facing roles delivering business-critical software
              systems.
            </p>
            <p>
              Some years ago I put myself through a tough software engineering
              bootcamp with{" "}
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
    </div>
  );
};

export default Intro;
