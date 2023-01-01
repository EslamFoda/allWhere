import React from "react";
interface Props {
  text: string;
}
function CardSubTitle({ text }: Props) {
  return <p className="text-sm leading-loose">{text}</p>;
}

export default CardSubTitle;
