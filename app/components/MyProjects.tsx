import React from "react";
import Card from "./Card";

const MyProjects = () => {
  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <div className="">
          <h2 className="text-5xl mb-9 font-normal">Projects</h2>
          <div className="h-full justify-items-center grid grid-cols-1 lg:grid-cols-2">
            <Card
              src="/finance-app.png"
              title="Finance App"
              description="Next.js 13 had come out recently and I was keen to use this, make lots of mistakes, get confused and so learn. Also, I had not used Tailwind to any great degree so this was a great opportunity to do so."
              link="finance-app"
            />
            <Card
              src="/prismic-home.png"
              title="Prismic CMS with Next.js"
              description="The application of the Prismic Content Management System along with Next.js to produce an app that can be customised by non-dev colleagues."
              link="prismic"
            />
            <Card
              src="/ai4.png"
              title="OpenAI Multi-Language Chatbot"
              description="An entertaining AI chatbot where you control the language of the reply. It uses the Vercel AI SDK and, in particular, the useChat hook. The AI model along with system prompt, maxTokens and temperature are coded into an api call"
              link="language-chatbot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
