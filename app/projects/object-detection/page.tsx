import React from "react";
import Image from "next/image";
import Pill from "@/app/components/Pill";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-11/12 pl-3 min-h-max">
          <h1 className="pt-7 text-5xl mb-9 font-normal">AI Image Detection</h1>
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
              Provide an image and the model will analyse it and return the
              image with identified objects highlighted; simple, but truly
              impressive.
            </p>
            <p>
              Currently, the image is a file in the code, but an option will be
              developed to allow the user to upload an image for analysis.
            </p>

            <p className="mb-7">
              Below are a few screen shots of the key pages:
            </p>
            <p className="mb-5 text-xl">Hands-free driving!</p>
            <div className="flex mt-5  justify-center">
              <Image
                alt="road scene"
                width={750}
                height={750}
                className="object-contain"
                src="/ai-object-detection-cars.png"
              />
            </div>

            <p className="my-5 text-xl">Fruit display</p>
            <div className="mt-5  flex justify-center">
              <Image
                alt="fruit display"
                width={750}
                height={750}
                className="object-contain"
                src="/ai-object-detection-fruit.png"
              />
            </div>
          </div>

          <div className="mb-7">
            <p className="text-4xl mb-3">Tech used</p>
            <div>
              <Pill text="HTML/css" />
              <Pill text="JavaScript" />
            </div>
            <div>
              <Pill text="Transformers.js" />
              <Pill text="Xenova/yolos-tiny" />
            </div>
          </div>
          <p className="text-4xl my-3">Lessons learnt</p>
          <p className="mb-7">
            This provided an insight into the one of the real world applications
            that AI is the key to, driverless cars. I've not yet put this in my
            car, but at least I've taken the first step!
          </p>
          <div className="flex justify-end gap-3 pb-3 pr-3 font-medium">
            <Link
              href="https://github.com/johnhm22/ai-object-detection-transformersjs"
              target="_blank"
            >
              <button className="rounded-md py-2 px-4 bg-green-500">
                Code
              </button>{" "}
            </Link>
            <Link href="" target="_blank">
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
