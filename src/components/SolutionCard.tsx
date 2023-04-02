import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface SolutionCardProps {
  isLeft: boolean;
  image: StaticImageData;
  title: string;
  description: string;
}

const SolutionCard: FC<SolutionCardProps> = ({
  isLeft,
  image,
  title,
  description,
}) => {
  const SolutionImage = (
    <Image
      className="rounded-lg md:rounded-2xl shadow-xl"
      src={image}
      alt="solution"
    />
  );

  return (
    <li className="flex items-center py-4 md:py-8">
      <div className={`${isLeft ? "w-1/2" : ""} md:w-1/3`}>
        {isLeft ? SolutionImage : ""}
      </div>
      <div
        className={`w-1/2 md:w-1/3  ${
          isLeft ? "pl-4 md:pl-16" : "pr-4 md:pr-16 text-right"
        }`}
      >
        <div className="text-sm md:text-3xl font-bold">{title}</div>
        <div className="text-xs md:text-base mt-4 md:mt-8">{description}</div>
      </div>
      <div className={`${!isLeft ? "w-1/2" : ""} md:w-1/3`}>
        {isLeft ? "" : SolutionImage}
      </div>
    </li>
  );
};

export default SolutionCard;
