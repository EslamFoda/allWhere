import Image from "next/image";
import Container from "../ui/container";
import { motion } from "framer-motion";
import Title from "../ui/text/title";
import Paragraph from "../ui/text/paragraph";
interface Props {
  title: string;
  subTilte: string;
  btnText: string;
  img: string;
  titleClassName?: string;
}

const Success = ({ title, subTilte, btnText, img, titleClassName }: Props) => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute left-auto translate-x-[60%] translate-y-[-10%] top-2/4 right-0 bottom-0">
        <Image src="/red-arrow.png" alt="arrow img" height={646} width={455} />
      </div>
      <Container>
        <div className="grid items-center lg:grid-cols-2  grid-cols-1 gap-x-20 gap-y-10">
          <div className="rounded-full relative">
            <div className="rounded-full relative w-full h-full overflow-hidden border-2 border-main-black border-solid">
              <Image
                src={img}
                alt="success img"
                width="1024"
                height="594"
                className="aspect-square object-cover"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-4 text-left"
          >
            <Title className={`font-semibold ${titleClassName}`} text={title} />
            <Paragraph text={subTilte} />
            <motion.button
              initial={{ opacity: 0, translateY: 80 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f9c54d] block transition-all drop-shadow-md w-full sm:w-auto md:w-auto lg:w-auto py-2 hover:bg-[#131414] hover:text-white px-8 rounded-full font-bold text-lg"
            >
              {btnText}
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
export default Success;
