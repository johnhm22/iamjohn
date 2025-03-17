import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <div className="px-2 mx-auto flex max-h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl lg:text-4xl mb-2 lg:mb-8 font-extrabold text-blue-600">
          John Morgan
        </h1>

        <h2 className="heading">Full-Stack Developer</h2>
        <div className="text-base lg:text-lg leading-6 lg:leading-8">
          <p className="intro-p">
            I am a UK-based fullstack developer focussing on{" "}
            <span className="font-semibold">
              React/Next.js, tailwindcss, JavaScript, and PostgreSQL
            </span>
            .
          </p>
          <p className="intro-p">
            My career so far has involved working on different continents in
            customer-facing roles delivering business-critical software systems.
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
  );
};

export default Intro;
