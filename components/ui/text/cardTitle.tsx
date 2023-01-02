import React from "react";
interface Props {
  text: string;
  className?: string;
}
function CardTitle({ text, className }: Props) {
  return <h3 className={`font-bold text-xl ${className}`}>{text}</h3>;
}

export default CardTitle;
