import React from "react";
import Image from "next/image";
import Pill from "@/app/components/Pill";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-11/12 pl-3 min-h-max">
          <h1 className="pt-7 text-5xl mb-9 font-normal">
            Multi-Language AI Chatbot
          </h1>
          <div className="mb-7 ">
            <p className="text-4xl">Purpose</p>
            <p className="my-3">
              To provide an amusing app and, of course, practise coding with AI
              to gain a deeper understanding of the AI SDK from Vercel.
            </p>
          </div>
          <div className="mb-12">
            <p className="text-4xl">What does it do?</p>
            <p className="my-3">
              Ask a question, select a language for the reply by clicking on a
              flag and hit send. The AI will reply as requested. The model used
              is gpt-4o-mini, not the most powerful, but cheaper and faster than
              the more sophisticated alternatives. The system prompt simply
              requires the AI to respond in the defined language. The useChat
              hook retains the questions and responses so a conversation can be
              held with the AI.
            </p>

            <p className="mb-7">
              Below are a few screen shots of the key pages:
            </p>
            <p className="mb-5 text-xl">French</p>
            <div className="flex mt-5  justify-center">
              <Image
                alt="AI French response"
                width={400}
                height={400}
                className=""
                src="/ai-french.png"
              />
            </div>

            <p className="my-5 text-xl">Japanese</p>
            <div className="mt-5  flex justify-center">
              <Image
                alt="AI Japanese response"
                width={400}
                height={400}
                className=" "
                src="/ai-japanese.png"
              />
            </div>

            <p className="my-5 text-xl">Spanish</p>
            <div className="mt-5  flex justify-center">
              <Image
                alt="prismic features page"
                width={400}
                height={400}
                className=" "
                src="/ai-spanish.png"
              />
            </div>
          </div>

          <div className="mb-7">
            <p className="text-4xl mb-3">Tech used</p>
            <div>
              <Pill text="HTML/css" />
              <Pill text="Tailwindcss" />
              <Pill text="JavaScript" />
              <Pill text="TypeScript" />
            </div>
            <div>
              <Pill text="Vercel AI SDK" />
              <Pill text="gpt-4o-mini" />
            </div>
            <div>
              <Pill text="React" />
              <Pill text="Next.js v15" />
            </div>
          </div>
          <p className="text-4xl my-3">Lessons learnt</p>
          <p className="mb-7">
            This was an opportunity to build on the knowledge gained during the
            AI Engineering course that I had been taking. Practising with the AI
            SDK was useful in giving me an insight into the development
            flexibility available.
          </p>
          <div className="flex justify-end gap-3 pb-3 pr-3 font-medium">
            <Link
              href="https://github.com/johnhm22/openai-multi-language-chatbot"
              target="_blank"
            >
              <button className="rounded-md py-2 px-4 bg-green-500">
                Code
              </button>{" "}
            </Link>
            <Link
              href="https://openai-multi-language-chatbot.vercel.app/"
              target="_blank"
            >
              <button className="rounded-md py-2 px-4 bg-blue-500">
                Website
              </button>{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
