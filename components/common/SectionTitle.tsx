"use client";

interface Props {
  titleNumber: string;
  titleName: string;
}

export default function SectionTitle({ titleName, titleNumber }: Props) {
  return (
    <div>
      <h2 className="pt-50 flex items-center font-titleFont text-2xl font-semibold">
        <span className="text-case md: mr-2 text-lg text-textGreen">{titleNumber}.</span>{" "}
        {titleName}
        <span className="ml-7 hidden h-[0.5px] bg-gray-700 md:inline-flex md:w-60 lgl:w-72"></span>
      </h2>
    </div>
  );
}
