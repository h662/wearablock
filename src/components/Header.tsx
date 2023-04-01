import Image from "next/image";
import { FC, useState } from "react";
import { GrLanguage } from "react-icons/gr";

import LogoImg from "@/images/logo.png";
import Link from "next/link";

const Header: FC = () => {
  const [ellipsisToggle, setEllipsisToggle] = useState<boolean>(false);

  return (
    <header className="sticky top-0 bg-white max-w-screen-xl mx-auto text-main shadow-sm">
      <div className="flex justify-between items-center p-2 md:p-4">
        <Image className="w-32 md:w-40 h-fit" src={LogoImg} alt="Wearablock" />
        <button
          className="w-4 md:w-8"
          onClick={() => setEllipsisToggle(!ellipsisToggle)}
        >
          <GrLanguage size="full" color="#444444" />
        </button>
      </div>
      <ul
        className={`${
          ellipsisToggle
            ? "absolute bg-white w-full left-1/2 -translate-x-1/2 text-right font-bold"
            : "hidden"
        }  `}
      >
        <Link href="/" locale="en">
          <li className="py-1 border-t border-main pr-2">English</li>
        </Link>
        <Link href="/" locale="kr">
          <li className="py-1 border-t pr-2">한국어</li>
        </Link>
        <Link href="/" locale="jp">
          <li className="py-1 border-t border-b border-b-main pr-2">日本語</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
