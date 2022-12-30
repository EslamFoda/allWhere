import Image from "next/image";
import { useRef } from "react";
import Container from "../../ui/container";
import { motion } from "framer-motion";

const GlobalCoverage = () => {
  const planeRef = useRef<HTMLImageElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);
  return (
    <Container>
      <div
        onMouseMove={(e) => {
          const x = (window.innerWidth - e.pageX * -2) / 100;
          const y = (window.innerHeight - e.pageX * -2) / 100;
          
          //@ts-ignore
          planeRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
          //@ts-ignore
          arrowRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }}
        className="grid items-center lg:grid-cols-2  grid-cols-1 gap-x-32 gap-y-10"
      >
        <div className="rounded-full relative">
          <Image
            ref={planeRef}
            className="absolute top-0 lg:-left-16 md:-left-10 -left-6 z-10"
            src="/paper-plane.webp"
            alt="paper plane img"
            width={200}
            height={200}
          />
          <div className="rounded-full relative w-full h-full overflow-hidden border-2 border-main-black border-solid">
            <Image
              sizes="(max-width: 479px) 89vw, (max-width: 767px) 94vw, (max-width: 991px) 87vw, 42vw"
              src="/coverage.webp"
              alt="coverage img"
              width="1024"
              height="594"
            />
            <Image
              ref={arrowRef}
              className="absolute lg:bottom-4 md:bottom-20 bottom-4 -right-48 lg:-right-48 md:-right-42"
              src="/arrow.png"
              alt="arrow img"
              width={450}
              height={500}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-4 lg:text-left text-center"
        >
          <h2 className="lg:text-4xl text-2xl  leading-snug font-bold">
            Global coverage for procurement, retrieval, and storage of devices
          </h2>
          <button className="border w-full inline sm:w-auto md:w-auto lg:w-auto uppercase text-xl font-medium border-main-black border-solid rounded-full py-2 px-4 hover:bg-main-black hover:text-white transition-all">
            Start a retrieval
          </button>
        </motion.div>
      </div>
    </Container>
  );
};
export default GlobalCoverage;
