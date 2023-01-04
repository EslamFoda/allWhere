import Image from "next/image";
import Container from "../../ui/container";
import CardTitle from "../../ui/text/cardTitle";
import Paragraph from "../../ui/text/paragraph";
import { motion } from "framer-motion";
function Found() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        className="text-center flex flex-col gap-10 max-w-2xl justify-center items-center mx-auto"
      >
        <Image src="/found.svg" alt="found word" width={156} height={44} />
        <Paragraph text="“allwhere allows our teams to design their own workspaces, which is not only fun for them, but saves time for us.”" />
        <div>
          <CardTitle text="Brenda Rodriguez" />
          <Paragraph text="Director of People, Found" />
        </div>
      </motion.div>
    </Container>
  );
}

export default Found;
