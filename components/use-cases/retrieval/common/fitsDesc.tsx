import Image from "next/image";
import React from "react";
import CardSubTitle from "../../../ui/text/cardSubTitle";
interface Props {
  text: string;
}
function FitsDesc({ text }: Props) {
  return (
    <div className="flex gap-4">
      <Image
        className="self-start mt-2"
        alt="done icon"
        src="https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e58157a856f_Checklist%20Check.svg"
        width={17}
        height={17}
      />
      <CardSubTitle className="text-xs" text={text} />
    </div>
  );
}

export default FitsDesc;
