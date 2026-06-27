import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  headingText: string;
  contentText: string;
}

/**
 * Renders a styled bullet point with a heading and body text.
 *
 * @param props - Bullet point content.
 * @returns A bullet point list item.
 */
export default function BulletPoint({ headingText, contentText }: Props) {
  return (
    <li className="text-base">
      <div className="text-textGreen flex flex-row gap-x-2">
        <BsArrowRightShort />
        <span className="leading-tight">{headingText}:</span>
      </div>

      <em>{contentText}</em>
    </li>
  );
}
