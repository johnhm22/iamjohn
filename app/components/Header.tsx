import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="relative flex justify-between py-5 px-3 z-100 bg-slate-50 min-w-full">
        <Link href="/" className="flex flex-row gap-3">
          <img src="/home.png" height={10} width={20} />

          <div>johnmorgan</div>
        </Link>

        <div className="flex gap-5">
          <Link
            href="mailto:johnhowardmorgan@outlook.com?subject=Query from your website"
            target="_blank"
          >
            <img src="/inbox.png" height={20} width={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/john-morgan-a6a1632"
            target="_blank"
          >
            <img src="/linkedin.png" height={20} width={20} />
          </Link>
          <Link href="https://github.com/johnhm22" target="_blank">
            <img src="/github.png" height={20} width={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
