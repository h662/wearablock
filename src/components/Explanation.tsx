import Image from "next/image";
import { FC } from "react";

import ExplanationImg from "@/images/explanation.png";

interface ExplanationProps {
  explanation1: string;
  explanation2: string;
  explanation3: string;
}

const Explanation: FC<ExplanationProps> = ({
  explanation1,
  explanation2,
  explanation3,
}) => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center text-main">
      <div className="md:w-1/2 px-2">
        <h1 className="text-2xl md:text-6xl font-bold py-4 md:py-8">
          Physical to Digital
        </h1>
        <div className="md:text-2xl">
          <div className="md:mb-4">{explanation1}</div>
          <div className="md:mb-4">{explanation2}</div>
          <div className="md:mb-4">{explanation3}</div>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image className="object-cover" src={ExplanationImg} alt="Wearablock" />
      </div>
    </div>
  );
};

export default Explanation;
