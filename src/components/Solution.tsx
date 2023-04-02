import Image from "next/image";
import { FC } from "react";

import Solution1Img from "@/images/solution1.png";
import Solution2Img from "@/images/solution2.png";
import Solution3Img from "@/images/solution3.png";
import Solution4Img from "@/images/solution4.png";
import Solution5Img from "@/images/solution5.png";
import SolutionCard from "./SolutionCard";

interface SolutionProps {
  solution: string;
  solution1Title: string;
  solution1Desc: string;
  solution2Title: string;
  solution2Desc: string;
  solution3Title: string;
  solution3Desc: string;
  solution4Title: string;
  solution4Desc: string;
  solution5Title: string;
  solution5Desc: string;
}

const Solution: FC<SolutionProps> = ({
  solution,
  solution1Title,
  solution1Desc,
  solution2Title,
  solution2Desc,
  solution3Title,
  solution3Desc,
  solution4Title,
  solution4Desc,
  solution5Title,
  solution5Desc,
}) => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center text-main">
      <div className="w-full px-2 text-right">
        <div className="title">Our Solution</div>
        <div className="md:text-2xl inline-block border-t-2  py-2 md:py-4">
          {solution}
        </div>
      </div>
      <ul className="w-full mt-8 md:mt-16 px-12 md:px-24">
        <SolutionCard
          isLeft={false}
          image={Solution1Img}
          title={solution1Title}
          description={solution1Desc}
        />
        <SolutionCard
          isLeft={true}
          image={Solution2Img}
          title={solution2Title}
          description={solution2Desc}
        />
        <SolutionCard
          isLeft={false}
          image={Solution3Img}
          title={solution3Title}
          description={solution3Desc}
        />
        <SolutionCard
          isLeft={true}
          image={Solution4Img}
          title={solution4Title}
          description={solution4Desc}
        />
        <SolutionCard
          isLeft={false}
          image={Solution5Img}
          title={solution5Title}
          description={solution5Desc}
        />
      </ul>
    </div>
  );
};

export default Solution;
