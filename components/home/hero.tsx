import React from "react";
import Image from "next/image";
import Container from "../ui/container";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Container>
      <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-1 gap-10 items-center">
        <div className="space-y-6 self-center text-center lg:text-left ">
          <motion.h1
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:text-6xl text-3xl !leading-tight font-bold"
          >
            Everything you need to work from anywhere.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: 90 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:text-xl text-lg !leading-loose"
          >
            Save on time and cost by trusting allwhere with procurement,
            logistics, and deployment.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, translateY: 80 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f9c54d] transition-all drop-shadow-md w-full sm:w-auto md:w-auto lg:w-auto py-4 hover:bg-[#131414] hover:text-white px-8 rounded-full font-bold text-xl"
          >
            BOOK A DEMO
          </motion.button>
        </div>
        <div className=" lg:justify-self-end justify-self-center h-auto max-w-[590px] w-full">
          <Image
            sizes="(max-width: 479px) 89vw, (max-width: 767px) 94vw, (max-width: 991px) 87vw, 42vw"
            alt="hero img"
            src="/lg-hero-img.png"
            width="1024"
            height="594"
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
