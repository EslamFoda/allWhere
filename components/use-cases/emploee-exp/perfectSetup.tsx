import { useRef } from "react";
import { useInView } from "framer-motion";
import HeaderWithSubtitle from "../../common/headerWithSubtitle";
import Container from "../../ui/container";
import Image from "next/image";
import Title from "../../ui/text/title";
import Paragraph from "../../ui/text/paragraph";
import Parllel from "../../common/parllel";

function PerfectSetup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <Container>
      <HeaderWithSubtitle
        title="The perfect setup for success"
        subTitle="For distributed teams, the right equipment is key. We make sure you and your team are always prepared."
      />
      <Parllel />
      <Parllel />
      <Parllel />
      <Parllel />
      <Parllel />
      <Parllel />
      <Parllel />
      <Parllel />
       <Parllel />
    </Container>
  );
}

export default PerfectSetup;
