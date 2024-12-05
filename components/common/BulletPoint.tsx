import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  headningText: string;
  contentText: string;
}

const BulletPoint = ({ headningText, contentText }: Props) => {
  return (
    <li className="gap-2 text-base">
      {/* HEADING SECTION */}
      <div className="flex flex-row text-textGreen">
        <BsArrowRightShort />
        &ensp;
        <span className="leading-tight">{headningText}:</span>
      </div>

      {/* CONTENT */}
      <em>{contentText}</em>
    </li>
  );
};

export default BulletPoint;
