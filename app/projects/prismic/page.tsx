import React from "react";
import Image from "next/image";
import Pill from "@/app/components/Pill";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-11/12 pl-3 border border-blue-500 min-h-max">
          <h1 className="pt-7 text-5xl mb-9 font-normal">Prismic CMS</h1>
          <div className="mb-7 ">
            <p className="text-4xl">Purpose</p>
            <p className="my-3">
              The app was built to demonstrate and learn how a headless CMS can
              be used in conjunction with Next.js. Key to this was appreciating
              the flexibility and independence it provided to non-dev
              colleagues. With this setup they can move sections, or slices in
              Prismic parlance, in and out of the app as seasons and offers
              change.
            </p>
          </div>
          <div className="mb-12">
            <p className="text-4xl">What does it do?</p>
            <p className="my-3">
           It is a non-interactive site; there is no means of engaging with user input. The purpose is simply to define a series of pages that are comprise of one or more slices. The user can navigate through these pages. The non-developer can update the pages when required.
            </p>
       
            <p className="mb-7">
              Below are a few screen shots of the key pages:
            </p>
            <p className="mb-5 text-xl">Home page</p>
            <div className="flex mt-5  justify-center">
              <Image
                alt="prismic app home page"
                width={800}
                height={800}
                className=""
                src="/prismic-home.png"
              />
            </div>

            <p className="my-5 text-xl">About page</p>
            <div className="mt-5  flex justify-center">
              <Image
                alt="prismic app about page"
                width={800}
                height={800}
                className=" "
                src="/prismic-about.png"
              />
            </div>

            <p className="my-5 text-xl">Features</p>
            <div className="mt-5  flex justify-center">
              <Image
                alt="prismic features page"
                width={800}
                height={800}
                className=" "
                src="/prismic-features.png"
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
              <Pill text="Prismic" />
              <Pill text="Figma" />
            </div>
            <div>
              <Pill text="React" />
              <Pill text="Next.js v13" />
            </div>
          </div>
          <p className="text-4xl my-3">Lessons learnt</p>
          <p className="mb-7">
            This was the first venture into coding with a CMS and Next.js. Being used to developing in Next.js, it was, at first, tricky to understand how Prismic fitted in. However, after some practice it seemed logical. It was applied to a later project, a case study for a property rental business. Here difficulties were found when trying to enable front-end sorting of properties. To overcome this, a PostgreSQL database was introduced to store links to property photos held in the Prismic media library.
          </p>
          <div className="flex justify-end gap-3 pb-3 pr-3 font-medium">
            <Link
              href="https://github.com/johnhm22/prismic-nextjs-v14"
              target="_blank"
            >
              <button className="rounded-md py-2 px-4 bg-green-500">
                Code
              </button>{" "}
            </Link>
            <Link href="https://prismic-nextjs-v14.vercel.app/" target="_blank">
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
