import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Paragraph from "../ui/text/paragraph";
import Title from "../ui/text/title";

function Parllel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="grid grid-cols-2 h-screen gap-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <div className="sticky top-12">
          <Image
            // style={{
            //   opacity: isInView ? 1 : 0,
            //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            // }}
            alt="asdas"
            src="https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e108d7a85b2_dashboard.webp"
            width={400}
            height={400}
          />
        </div>
      </motion.div>
      <div>
        <Title text="alskmalksmdlk amsdlkam sdlkmalskdm  asldn  asdas d" />
        <Paragraph text="aklsdlaksndlkasn l  aljs dja sdkjaskdjaskjd akjs dasa a" />
      </div>
    </div>
  );
}

export default Parllel;
