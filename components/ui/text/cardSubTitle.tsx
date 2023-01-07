import React from "react";
interface Props {
  text: string;
  className?: string;
}
function CardSubTitle({ text, className }: Props) {
  return <p className={`text-sm  leading-loose ${className}`}>{text}</p>;
}

export default CardSubTitle;
