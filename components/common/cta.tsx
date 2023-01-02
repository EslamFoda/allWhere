import React from "react";
import { motion } from "framer-motion";
import Title from "../ui/text/title";
import Paragraph from "../ui/text/paragraph";

interface Props {
  title: string;
  paragraph: string;
  smallBtn?: boolean;
  titleClassName?:string
}
function Cta({ title, paragraph, smallBtn,titleClassName }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-center space-y-4"
    >
      <Title
        className={`lg:!text-7xl text-4xl  max-w-3xl leading-tight mx-auto ${titleClassName}`}
        text={title}
      />
      <Paragraph className="max-w-2xl mx-auto" text={paragraph} />
      {smallBtn ? (
        <button className="bg-[#f9c54d] transition-all drop-shadow-md w-full sm:w-auto md:w-auto lg:w-auto py-2 hover:bg-[#131414] hover:text-white px-4 rounded-full font-bold text-lg">
          BOOK A DEMO
        </button>
      ) : (
        <button className="bg-[#f9c54d] transition-all drop-shadow-md w-full sm:w-auto md:w-auto lg:w-auto py-4 hover:bg-[#131414] hover:text-white px-8 rounded-full font-bold text-xl">
          BOOK A DEMO
        </button>
      )}
    </motion.div>
  );
}

export default Cta;
