import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  src: string;
  link: string;
};

const Card = ({ title, description, src, link }: Props) => {
  return (
    <div className="p-3 w-2/3 bg-slate-200 rounded-md flex flex-col mb-7">
      <div className="place-items-center">
        <Image
          alt="App image"
          src={src}
          width={382}
          height={222}
          className="object-contain w-[250px] md:w-[400px] h-auto p-2 min-h-60 max-h-60 mb-1"
        />
      </div>
      <div className="min-h-40">
        <h2 className="text-xl font-semibold my-3">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex justify-end mt-3">
        <Link href={`/projects/${link}`}>
          <button className="font-normal text-base w-150 h-100 rounded-md bg-green-400 py-1 px-3">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
