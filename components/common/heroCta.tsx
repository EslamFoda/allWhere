import React from "react";
import { motion } from "framer-motion";
import Title from "../ui/text/title";
import Paragraph from "../ui/text/paragraph";

interface Props {
  title: string;
  paragraph: string;
  btnText: string;
  containerClassName?:string
}
function HeroCta({ title, paragraph, btnText,containerClassName }: Props) {
  return (
    <div className={`space-y-6 self-center text-center lg:text-left ${containerClassName}`}>
      <Title className="font-bold" animate text={title} />
      <Paragraph animate text={paragraph} />
      <motion.button
        initial={{ opacity: 0, translateY: 80 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#f9c54d] transition-all drop-shadow-md w-full sm:w-auto md:w-auto lg:w-auto py-4 hover:bg-[#131414] hover:text-white px-8 rounded-full font-bold text-xl"
      >
        {btnText}
      </motion.button>
    </div>
  );
}

export default HeroCta;
