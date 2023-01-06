import React from "react";
import HeroCta from "../../common/heroCta";
import Container from "../../ui/container";
import CardSubTitle from "../../ui/text/cardSubTitle";
import CardTitle from "../../ui/text/cardTitle";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="bg-main-blue rounded-b-[50px]">
      <Container>
        <HeroCta
          containerClassName="!text-left"
          title="HR teams use allwhere to solve problems of the modern workplace"
          paragraph="In a work-from-anywhere world, HR professionals are racing to create the right environment for their teams to thrive. allwhere helps you bridge the gap, bringing you curated solutions for your globally distributed workplace."
          btnText="GET STARTED"
        />
        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="grid mt-16 max-w-4xl lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10"
        >
          <div className="space-y-4">
            <CardTitle
              className="lg:text-4xl md:text-3xl text-2xl"
              text="90%"
            />
            <CardSubTitle text="of employees say their onboarding experience has an outsized impact on their long term perception of their employer" />
          </div>
          <div className="space-y-4">
            <CardTitle
              className="lg:text-4xl md:text-3xl text-2xl"
              text="82%"
            />
            <CardSubTitle text="of knowledge workers think that employers should be doing more to improve the employee experience" />
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Hero;
