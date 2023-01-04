import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
function ProdGallery() {
  const prodData = [
    {
      type: "mp4",
      videoSrc: "/prod-video.mp4",
      id: 1,
      src: "/video-thumb.webp",
    },
    { type: "img", id: 2, src: "/prod1.webp" },
    { type: "img", id: 3, src: "/prod2.webp" },
    { type: "img", id: 4, src: "/prod3.webp" },
    { type: "img", id: 5, src: "/prod4.webp" },
    { type: "img", id: 6, src: "/prod5.webp" },
    { type: "img", id: 7, src: "/prod6.webp" },
    { type: "img", id: 8, src: "/prod7.webp" },
  ];
  const [pause, setPause] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const togglePause = () => {
    setPause(!pause);
    if (pause) {
      vidRef.current?.pause();
    } else {
      vidRef.current?.play();
    }
  };
  useEffect(() => {
    setPause(false);
    vidRef.current?.play();
    togglePause();
  }, []);
  return (
    <Tab.Group>
      <Tab.Panels className="mb-5">
        {prodData.map((img, i) => {
          return (
            <Tab.Panel key={img.id}>
              <motion.div
                className="border-2 relative border-main-black border-solid rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
              >
                {img.type === "mp4" && (
                  <div
                    onClick={togglePause}
                    className="absolute flex items-center justify-center bottom-6 left-6 w-12 h-12 cursor-pointer bg-white/40 rounded-full"
                  >
                    {pause ? <Pause /> : <Play />}
                  </div>
                )}
                {img.type === "img" ? (
                  <Image
                    alt="prod img"
                    width={1000}
                    height={800}
                    className="aspect-square"
                    src={img.src}
                  />
                ) : (
                  <video
                    ref={vidRef}
                    width={1000}
                    height={800}
                    className="aspect-square object-cover"
                    src={img.videoSrc}
                    autoPlay
                    loop
                  />
                )}
              </motion.div>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
      <Tab.List className="flex items-center gap-2 flex-wrap">
        {prodData.map((img, i) => {
          return (
            <Tab className="outline-none" key={img.id}>
              {({ selected }) => (
                <div
                  className={`hover:opacity-100 ${
                    selected
                      ? "outline-main-black opacity-100 outline outline-2 "
                      : "opacity-60"
                  } rounded-xl transition-all duration-75 overflow-hidden`}
                >
                  <Image
                    alt="prod img"
                    width={60}
                    height={60}
                    className={`aspect-square `}
                    src={img.src}
                  />
                </div>
              )}
            </Tab>
          );
        })}
      </Tab.List>
    </Tab.Group>
  );
}

export default ProdGallery;
export const Pause = () => {
  return (
    <svg
      width="13"
      height="18"
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="4"
        height="16"
        rx="1"
        fill="white"
        stroke="#131414"
        stroke-width="2"
      ></rect>
      <rect
        x="8"
        y="1"
        width="4"
        height="16"
        rx="1"
        fill="white"
        stroke="#131414"
        stroke-width="2"
      ></rect>
    </svg>
  );
};

export const Play = () => {
  return (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9333 9.2L2.6 2.2C1.94076 1.70557 1 2.17595 1 3V17C1 17.824 1.94076 18.2944 2.6 17.8L11.9333 10.8C12.4667 10.4 12.4667 9.6 11.9333 9.2Z"
        fill="white"
        stroke="#131414"
        stroke-width="2"
      ></path>
    </svg>
  );
};
