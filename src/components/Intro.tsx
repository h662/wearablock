import Image from "next/image";
import { FC } from "react";

import WBImg from "@/images/wearablock.png";

const Intro: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center bg-gray-50">
      <Image className="object-cover" src={WBImg} alt="Wearablock" />
    </div>
  );
};

export default Intro;
