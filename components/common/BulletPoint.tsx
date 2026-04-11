import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  headningText: string;
  contentText: string;
}

export default function BulletPoint({ headningText, contentText }: Props) {
  return (
    <li className="gap-2 text-base">
      <div className="flex flex-row text-textGreen">
        <BsArrowRightShort /> &ensp;
        <span className="leading-tight">{headningText}:</span>
      </div>

      <em>{contentText}</em>
    </li>
  );
}
