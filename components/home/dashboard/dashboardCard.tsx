import React from "react";
import { motion } from "framer-motion";

interface itemData {
  title: string;
  desc: string;
  img: string;
  id: number;
}

interface Props {
  item: itemData;
  i: number;
}

function DashboardCard({ item, i }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      key={item.id}
      viewport={{ once: true, amount: 0.2 }}
      className="border border-[#8fc8cf] rounded-lg overflow-hidden border-solid"
    >
      <div
        className="bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${item.img})`,
          aspectRatio: 228 / 100,
        }}
      ></div>
      <div className="p-8 space-y-2">
        <h3 className="font-bold text-xl">{item.title}</h3>
        <p className="leading-loose">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default DashboardCard;
