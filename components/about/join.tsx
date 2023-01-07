import React from "react";
import Container from "../ui/container";
import { motion } from "framer-motion";
import CardTitle from "../ui/text/cardTitle";
import CardSubTitle from "../ui/text/cardSubTitle";
import { jobList } from "../../constant";
import HeaderWithSubtitle from "../common/headerWithSubtitle";
function Join() {
  return (
    <Container>
      <HeaderWithSubtitle
        animate
        title="Join our team"
        subTitle="Interested in learning more? We’d love for you to join us."
      />
      <motion.div
        id="careers"
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-3xl space-y-8 bg-white lg:p-10 md:p-10 p-8 mx-auto border-main-black border-solid border-2 rounded-xl"
      >
        {jobList.map((list) => {
          return (
            <div
              className="border-solid pb-4 border-b flex flex-col lg:flex-row md:flex-row  lg:items-start md:items-start items-center text-center lg:text-left md:text-left lg:gap-0 md:gap-2 gap-4 lg:justify-between md:justify-between justify-center"
              key={list.id}
            >
              <div className="space-y-2">
                <CardTitle text={list.title} />
                <CardSubTitle text={list.country} />
              </div>
              <button className="border text-xl font-semibold border-main-black border-solid rounded-full w-full lg:w-auto md:w-auto py-2 px-4 hover:bg-main-black hover:text-white transition-all">
                APPLY
              </button>
            </div>
          );
        })}
      </motion.div>
    </Container>
  );
}

export default Join;
