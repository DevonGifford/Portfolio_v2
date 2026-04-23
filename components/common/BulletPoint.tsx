import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  headingText: string;
  contentText: string;
}

export default function BulletPoint({ headingText, contentText }: Props) {
  return (
    <li className="gap-2 text-base">
      <div className="flex flex-row text-textGreen">
        <BsArrowRightShort /> &ensp;
        <span className="leading-tight">{headingText}:</span>
      </div>

      <em>{contentText}</em>
    </li>
  );
}
