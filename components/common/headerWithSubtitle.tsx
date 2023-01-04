import React from "react";
import { motion } from "framer-motion";
import Title from "../ui/text/title";
import Paragraph from "../ui/text/paragraph";
interface Props {
  title: string;
  subTitle: string;
  animate?: boolean;
  paragraphClass?:string
}
function HeaderWithSubtitle({ title, subTitle, animate,paragraphClass }: Props) {
  return (
    <>
      {animate ? (
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-20"
        >
          <Title text={title} className="font-semibold" />
          <Paragraph text={subTitle} className={`${paragraphClass}`} />
        </motion.div>
      ) : (
        <div className="text-center mb-20">
          <Title text={title} className="font-semibold" />
          <Paragraph text={subTitle}  className={`${paragraphClass}`}/>
        </div>
      )}
    </>
  );
}

export default HeaderWithSubtitle;
