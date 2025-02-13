import Link from "next/link";
import React from "react";
import Image from "next/image";

const FreeStuff = () => {
  return (
    <div
      id="free"
      className="container mx-auto min-h-maxborder border-red-500 flex flex-col items-center my-16 text-center"
    >
      <div className="flex flex-row gap-3">
        <img
          className="object-contain"
          src="/giftbox.png"
          height={30}
          width={30}
        />{" "}
        <h2 className="text-5xl font-semibold">Free Stuff</h2>
        <Image
          alt="giftbox"
          className="object-contain"
          src="/giftbox.png"
          height={30}
          width={30}
        />
      </div>
      <p className="w-1/2 mt-3 leading-6">
        If you need help on a project, a couple of days' coding for example,
        based on the skill set I can offer then{" "}
        <Link
          href="mailto:johnhowardmorgan@outlook.com?subject=Query from your website"
          target="_blank"
        >
          please get in touch.
          <>
            <img
              className="inline object-contain"
              src="/inbox.png"
              height={20}
              width={20}
            />
          </>
        </Link>
      </p>
    </div>
  );
};

export default FreeStuff;
