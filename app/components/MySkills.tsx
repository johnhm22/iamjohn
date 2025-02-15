import React from "react";
import Pill from "./Pill";
import Link from "next/link";

const MySkills = () => {
  // INTRO <div className="w-11/12 mx-auto md:min-h-screen flex items-center mb-11"></div>
  // PROJECTS <div className="w-11/12 mx-auto min-h-screen">
  //MY SKILLS <div className="w-11/12 mx-auto min-h-screen">
  return (
    <div className="mb-11">
      <div className="w-11/12 mx-auto min-h-screen">
        {/* <div className="contain"> */}
        <div className="flex flex-col">
          <div className="min-h-max">
            <h2 className="heading">My Skills</h2>
            <div className=" flex justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 lg:gap-y-24 w-5/6">
                <div className="mb-7">
                  <p className="ml-3 grid grid-cols-3 gap-3 text-xl font-semibold text-black">
                    Languages
                  </p>
                  <Pill text="JavaScript" />
                  <Pill text="TypeScript" />
                  <Pill text="HTML/css" />
                </div>
                <div className="mb-7">
                  {/* <div>
        <Skills header='Languages'>
          <><Pill text='JavaScript'/></>
          <><Pill text='TypeScript'/></>
          <><Pill text='HTML/css'/></>
        </Skills>   
      <div> */}
                  <p className="ml-3 grid grid-cols-3 gap-3 text-xl font-semibold whitespace-nowrap">
                    Frameworks and Libraries
                  </p>
                  <Pill text="React" />
                  <Pill text="Vercel AI SDK" />
                  <Link href="https://openai.com/api/" target="_blank">
                    <Pill text="Open AI" />
                  </Link>
                  <Link href="https://huggingface.co/" target="_blank">
                    <Pill text="Hugging Face" />
                  </Link>
                  <Link href="https://nextjs.org/" target="_blank">
                    <Pill text="Next.js v15" />
                  </Link>
                  <Pill text="Tailwindcss" />
                </div>
                <div>
                  <p className="ml-3 grid grid-cols-3 gap-3 text-xl font-semibold whitespace-nowrap">
                    Backend
                  </p>

                  <Link href="</Link>" target="_blank">
                    <Pill text="Prisma ORM" />
                  </Link>
                  <Pill text="PostgreSQL" />
                  <Pill text="SQL" />
                </div>

                <div>
                  <p className="ml-3 grid grid-cols-3 gap-3 text-xl font-semibold whitespace-nowrap">
                    Tools etc.
                  </p>
                  <Pill text="Git and GitHub" />
                  <Link href="https://www.figma.com/" target="_blank">
                    <Pill text="Figma" />
                  </Link>
                  <Link href="https://www.shortcut.com/" target="_blank">
                    <Pill text="Shortcut" />
                  </Link>
                  <Pill text="Linux CLI" />
                </div>

                <div>
                  <p className="ml-3 grid grid-cols-3 gap-3 text-xl font-semibold whitespace-nowrap">
                    Other stuff...
                  </p>
                  <Pill text="Working in a team" />
                  <Pill text="Talking to clients" />
                  <Pill text="Being human" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
