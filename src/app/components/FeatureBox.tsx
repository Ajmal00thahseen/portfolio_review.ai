import React from "react";
import Image from "next/image";
import {FeatureCardProps} from "@/types";
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  headline,
  content
}) => {
  return (
    <div className="flex flex-col rounded-xl border-1 border-black-200 mb-6 w-80 h-40">
      <div className="mb-2 mt-2 ml-2 p-2">
        <Image src={icon} width={24} height={24} alt="icon1" />
      </div>
      <div className="flex flex-col pl-1 pr-2 ml-2">
        <p className="font-bold text-xl">{headline}</p>

        <p className="text-sm font">{content}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
