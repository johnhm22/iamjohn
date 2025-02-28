import React from "react";
import Image from "next/image";
import Pill from "@/app/components/Pill";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-11/12 pl-3">
          <h1 className="pt-7 text-5xl mb-9 font-normal">
            Property Rental App
          </h1>
          <div className="mb-7 ">
            <p className="text-4xl">Purpose</p>
            <p className="my-3">
              A proof-of-concept app developed for a client. The purpose was to
              demonstrate how a content management system could be used by
              non-developers to manage property details.
            </p>
            <p className="my-3">
              The pages are contructed of Prismic slices consisting of
              customisable photos and text which are managed via a Prismic
              interface.
            </p>
            <p>Also enabled as a PWA (Progessive Web App).</p>
          </div>
          <div className="mb-12">
            <p className="text-4xl">What does it do?</p>
            <p className="my-3">
              The app allows the user to view various properties for rent. An
              attractive feature using embla-carousel has been employed to allow
              photos to be horizontally scrolled.
            </p>
            <p className="mb-3">
              The header provides a link to an &apos;Add Property&apos; form.
              This is managed using the
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"
                className="italic"
              >
                {" "}
                dialog HTML element.{" "}
              </Link>
              It&apos;s only there for demo purposes. Click on the header link
              and the form appears. You can fill it out and submit, but an alert
              window appears to warn that the app is still in test mode.
            </p>
            <p className="mb-7">
              Below are a few screen shots of the key pages:
            </p>
            <p className="mb-5 text-xl">Home page</p>
            <div className="flex mt-5  justify-center">
              <Image
                alt="georgina app home page"
                width={800}
                height={800}
                className=""
                src="/georgina-home.png"
              />
            </div>

            <p className="my-5 text-xl">Properties</p>
            <div className="mt-5  flex justify-center">
              <Image
                alt="properties listing"
                width={800}
                height={800}
                className=" "
                src="/georgina-properties.png"
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
              <Pill text="React v18" />
              <Pill text="Next.js v14" />
            </div>
            <div>
              <Pill text="Prisma ORM" />
              <Pill text="PostgreSQL" />
            </div>
          </div>
          <p className="text-4xl my-3">Lessons learnt</p>
          <p className="mb-7">
            I struggled with Prismic to produce numerous repeat cards showing
            photos and details for each property. Finally, I settled on storing
            photos in the Prismic Media Library with a link held in a PostgreSQL
            database. Each property was represented by a record in the database.
            The intention was to develop a form, visible only to admin users,
            which could be used to add, update and delete properties in the
            database. This is the link in the header referred to above.
            <br /> The other advantage of Postgres would be the ease with which
            sql sort scripts could be written and presented in the front end as
            a simple button. It wasn&apos;t clear how this could be easily done
            in Prismic.
          </p>
          <div className="flex justify-end gap-3 pb-3 pr-3 font-medium">
            <Link
              href="https://github.com/johnhm22/georginahomes/"
              target="_blank"
            >
              <button className="rounded-md py-2 px-4 bg-green-500">
                Code
              </button>{" "}
            </Link>
            <Link href="https://georginahomes.vercel.app/" target="_blank">
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
