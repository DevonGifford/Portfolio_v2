import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  headingText: string;
  contentText: string;
}

/**
 * Renders a styled bullet point with a heading and body text.
 *
 * @param props.headingText - Bold lead-in shown before the colon.
 * @param props.contentText - The achievement or detail text.
 * @returns A list item, for use inside a `<ul>`/`<ol>`.
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
