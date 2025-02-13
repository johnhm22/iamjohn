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
      <div className="relative flex justify-between py-5 px-3 z-100 bg-slate-50 min-w-full">
        <Link href="/" className="flex flex-row gap-3">
          <Image
            className="object-contain"
            alt="home page icon"
            src="/home.png"
            height={20}
            width={20}
          />
          <div>johnmorgan</div>
        </Link>

        <div className="flex gap-5 cursor-pointer">
          <div className="flex flex-row gap-2 mr-3" onClick={handleOnClick}>
            <p className="text-sm italic hover:font-semibold">Free help</p>
            <Image
            alt="giftbox"
              className="object-contain"
              src="/giftbox.png"
              height={20}
              width={20}
            />
          </div>

          <Link
            href="mailto:johnhowardmorgan@outlook.com?subject=Query from your website"
            target="_blank"
          >
            <Image alt='inbox' src="/inbox.png" height={20} width={20} />
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
      <dialog ref={dialogRef} className="relative w-2/5 backdrop-blur-xl">
        <button
          onClick={closeDialog}
          className="absolute border text-gray-400 font-normal text-sm top-1 right-1 rounded-md px-2 py-1 text-md bg-gray-200"
        >
          esc
        </button>
        <FreeStuff />
      </dialog>
    </nav>
  );
};

export default Header;
