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
            AI Image Transformation
          </h1>
          <div className="mb-7 ">
            <p className="text-4xl">Purpose</p>
            <p className="my-3">
              To test and demonstrate the ability of an AI model to receive an
              image as an input and transform it according to user instructions.
              In this case the scenario is to take a black and white image as an
              input and return a coloured version.
            </p>
          </div>
          <div className="mb-12">
            <p className="text-4xl">What does it do?</p>
            <p className="my-3">
              The app uses a Hugging Face Inference JavaScript library. We
              provide an image and give it to the library which calls an
              image-to-image model on the Hugging Face platform. An output will
              be returned according to our instructions (or prompt) to the
              model. It sounds simple, but is truly impressive.
            </p>
            <p className="mb-3">
              The image is black and white. The objective is to produce a
              coloured version.
            </p>
            <p className="mb-3">
              Currently, the image is a file in the code, but an option is
              planned to allow the user to upload an image for analysis.
            </p>
            <p className="mb-3">
              The user prompt used to instruct the model is as follows:{" "}
              <span className="italic">
                Make a color copy of this photograph. It shows an elderly couple
                walking away fro the camera down a gravel path bordered by grass
                and trees. The man, on the right, is carrying bags in both
                hands. The woman, on the left, is carrying a bag in her left
                hand and with her right hand is holding the arm of the man. It
                is a sunny day. The sun is shining on the heads of the couple
                and their shadows are cast behind them.
              </span>
            </p>

            <p className="mb-7">Below are the input and output images:</p>
            <p className="mb-5 text-xl">Starting image</p>
            <div className="flex mt-5  justify-center">
              <Image
                alt="black and white image"
                width={750}
                height={750}
                className="object-contain"
                src="/black-and-white.png"
              />
            </div>

            <p className="my-5 text-xl">Returned coloured image</p>
            <div className="mt-5  flex justify-center">
              <Image
                alt="colour image"
                width={750}
                height={750}
                className="object-contain"
                src="/colour-image.png"
              />
            </div>
            <p className="my-5 text-xl">Second attempt</p>
            <div className="mt-5  flex justify-center">
              <Image
                alt="colour image"
                width={750}
                height={750}
                className="object-contain"
                src="/colour-image-v2.png"
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
              <Link
                href="https://huggingface.co/ghoskno/Color-Canny-Controlnet-model"
                target="_blank"
              >
                <Pill text="ghoskno/Color-Canny-Controlnet model" />
              </Link>
            </div>
          </div>
          <p className="text-4xl my-3">Lessons learnt</p>
          <p className="mb-7">
            It is clear the models are not perfect and the same setup can
            produce a different result. Their effectiveness also depends on the
            user prompt. Another variable is the size of the image; as the size
            is reduced, the less information there is in the image which impacts
            the transformation ability of the AI. Visit the{" "}
            <Link
              href="https://huggingface.co/ghoskno/Color-Canny-Controlnet-model"
              target="_blank"
            >
              model card page
            </Link>{" "}
            to get more information about the configurable parameters. Experimentation is key.
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
            {/* <Link href="" target="_blank">
              <button className="rounded-md py-2 px-4 bg-blue-500">
                Website
              </button>{" "}
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
