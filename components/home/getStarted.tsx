import Image from "next/image";
import React from "react";
import Container from "../ui/container";
import Paragraph from "../ui/text/paragraph";
import Title from "../ui/text/title";
import { motion } from "framer-motion";

function GetStarted() {
  return (
    <Container>
      <Image
        src="/get-started.png"
        alt="get started img"
        width={1080}
        height={293}
      />
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center space-y-4 mt-20"
      >
        <Title
          className="lg:!text-7xl text-4xl  max-w-3xl leading-tight mx-auto"
          text="Ready to get started?"
        />
        <Paragraph
          className="max-w-lg mx-auto"
          text="Learn how allwhere can help you give your team everything they need to excel."
        />
        <button className="bg-[#f9c54d] transition-all drop-shadow-md w-full sm:w-auto md:w-auto lg:w-auto py-4 hover:bg-[#131414] hover:text-white px-8 rounded-full font-bold text-xl">
          BOOK A DEMO
        </button>
      </motion.div>
    </Container>
  );
}

export default GetStarted;
