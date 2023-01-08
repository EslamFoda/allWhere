import Image from "next/image";
import Container from "../ui/container";
import CardTitle from "../ui/text/cardTitle";
import Paragraph from "../ui/text/paragraph";
import { motion } from "framer-motion";
interface Props {
  how: {
    title: string;
    firsDesc: string;
    secDesc: string;
    howData: {
      id: number;
      title: string;
      img: string;
    }[];
  };
}
function LearnHow({ how }: Props) {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-10 gap-28">
        <div className="space-y-6">
          <CardTitle className="lg:text-3xl md:text-3xl text-xl" text={how.title} />
          <Paragraph text={how.firsDesc} />
          <Paragraph text={how.secDesc} />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="lg:p-8 md:p-8 p-4 space-y-8 border-main-black border-solid border-2 rounded-xl">
              <CardTitle text="Learn how to" />
              {how?.howData.map((item) => {
                return (
                  <div key={item.id} className="flex items-center gap-4">
                    <Image
                      loading="lazy"
                      src={item.img}
                      height={62}
                      width={62}
                      alt="how to img"
                    />
                    <Paragraph text={item.title} />
                  </div>
                );
              })}
            </div>
            <button className="bg-[#f9c54d] transition-all drop-shadow-md w-full mt-6 py-2 hover:bg-[#131414] hover:text-white px-4 rounded-full font-bold text-lg">
              DOWNLOAD GUIDE
            </button>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default LearnHow;
