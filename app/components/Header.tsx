"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import FreeStuff from "./FreeStuff";

const Header = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleOnClick = () => {
    console.log("handleOnClick called");
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <nav>
      <div className="fixed flex justify-between py-5 px-3 z-100 bg-slate-50 min-w-full">
        <Link href="/" className="flex flex-row gap-3">
          <Image
            className="object-contain"
            alt="home page icon"
            src="/home.png"
            height={20}
            width={20}
          />
        </Link>

        <div className="flex gap-4 cursor-pointer">
          <Image
            alt="giftbox"
            className="object-contain"
            src="/giftbox.png"
            height={20}
            width={20}
            onClick={handleOnClick}
          />

          <Link
            href="mailto:johnhowardmorgan@outlook.com?subject=Query from your website"
            target="_blank"
          >
            <Image alt="inbox" src="/inbox.png" height={20} width={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/john-morgan-a6a1632"
            target="_blank"
          >
            <Image alt="linkedin" src="/linkedin.png" height={20} width={20} />
          </Link>
          <Link href="https://github.com/johnhm22" target="_blank">
            <Image alt="github" src="/github.png" height={20} width={20} />
          </Link>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="relative backdrop-blur-xl border w-4/5 md:w-1/2"
      >
        <button
          onClick={closeDialog}
          className="absolute text-gray-400 font-normal text-sm top-1 right-1 rounded-md px-2 py-1 text-md bg-gray-200"
        >
          esc
        </button>
        <FreeStuff />
      </dialog>
    </nav>
  );
};

export default Header;
