import React from "react";
import Container from "../../ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import Paragraph from "../../ui/text/paragraph";
import CardTitle from "../../ui/text/cardTitle";
interface Props {
  title: string;
  userName: string;
  position: string;
}

function Found({ title, userName, position }: Props) {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        className="text-center flex flex-col gap-10 max-w-4xl justify-center items-center mx-auto"
      >
        <Image src="/found.svg" alt="found word" width={156} height={44} />
        <Paragraph
          text={title}
          // text="“As an IT professional, my job is to deliver the hardware and software you need to do your job. allwhere makes it easy by understanding our business needs, end-to-end. It’s a complete lift off my side, and a fun, magical experience for our team.”"
        />
        <div>
          <CardTitle
            text={userName}
            //   "Joe Hurshman"
          />
          <Paragraph
            text={position}
            //   "IT Manager, Found"
          />
        </div>
      </motion.div>
    </Container>
  );
}

export default Found;
