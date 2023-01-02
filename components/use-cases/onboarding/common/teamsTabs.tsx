import { Tab } from "@headlessui/react";
import Image from "next/image";
import CardSubTitle from "../../../ui/text/cardSubTitle";
import CardTitle from "../../../ui/text/cardTitle";
import { motion } from "framer-motion";
import ImgCard from "./imgCard";
function TeamsTabs() {
  const teamTabsData = [
    {
      id: 1,
      title: "Zero-touch logistics",
      img: "/teamTab1.webp",
      subTitle:
        "Hardware upgrades are available at the touch of a button, creating a simple and streamlined process for retrieving and replacing devices.",
    },
    {
      id: 2,
      title: "Overnight replacements",
      img: "/teamTab2.webp",
      imgCard: {
        title: "You're eligible for an upgrade",
        subTitle:
          "You’ve had your laptop for a year now. It’s time to order a new one.",
        img: "/a.svg",
      },
      subTitle:
        "Accidents can happen. When hardware emergencies hit, we quickly facilitate repairs — and, in the meantime, fully re-equip your employees overnight, so your team can stay efficient and productive.",
    },
    {
      id: 3,
      title: "Maintenance and upgrade reminders",
      img: "/teamTab3.webp",
      imgCard: {
        title: "You're eligible for an upgrade",
        subTitle:
          "You’ve had your laptop for a year now. It’s time to order a new one.",
        img: "/a.svg",
      },
      subTitle:
        "From phones to laptops to desktops, lifespan is variable between hardware. Don’t worry, we’ll keep track for you, and send reminders when it’s time for any maintenance or upgrades.",
    },
    {
      id: 4,
      title: "Seamless retrievals",
      img: "/teamTab4.webp",
      subTitle:
        "Retrieving hardware can be difficult on both sides. We handle it with professionalism and ease, with average turnaround times of less than a week.",
    },
  ];
  return (
    <Tab.Group>
      <div className="grid my-20 lg:gap-20 gap-10 lg:grid-cols-2 grid-cols-1">
        <Tab.Panels>
          {teamTabsData.map((data) => {
            return (
              <Tab.Panel key={data.id}>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <ImgCard data={data} />
                  <Image
                    src={data.img}
                    alt={data.title}
                    width="1024"
                    height="1024"
                    className="rounded-full aspect-square object-cover relative  overflow-hidden border-2 border-main-black border-solid"
                  />
                </motion.div>
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
        <Tab.List className="flex  flex-col gap-8">
          {teamTabsData.map((data) => {
            return (
              <Tab
                key={data.id}
                className="text-left outline-none space-y-6 group"
              >
                {({ selected }) => (
                  <>
                    <div className="w-full bg-blue-400/60 h-[3px] relative">
                      <div
                        className={`absolute top-0 left-0  h-full group-hover:w-full transition-all bg-blue-700/60 ${
                          selected ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                    <div className="lg:space-y-2 ">
                      <CardTitle
                        className={`${
                          selected ? "text-main-black" : "text-main-black/60"
                        } group-hover:text-main-black transition-all lg:text-3xl md:Text-3xl text-xl font-bold`}
                        text={data.title}
                      />
                      <CardSubTitle
                        className={`${
                          selected ? "text-main-black" : "text-main-black/60"
                        } group-hover:text-main-black transition-all`}
                        text={data.subTitle}
                      />
                    </div>
                  </>
                )}
              </Tab>
            );
          })}
        </Tab.List>
      </div>
    </Tab.Group>
  );
}

export default TeamsTabs;
