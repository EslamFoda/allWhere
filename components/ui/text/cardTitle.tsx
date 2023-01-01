import React from "react";
interface Props {
  text: string;
}
function CardTitle({ text }: Props) {
  return <h3 className="font-bold text-xl">{text}</h3>;
}

export default CardTitle;
