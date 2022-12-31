import { motion } from "framer-motion";
import Image from "next/image";
import Paragraph from "../../ui/text/paragraph";
import Title from "../../ui/text/title";

interface DataProps {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  btn:string
}
interface Props {
  data: DataProps;
}
function DisturbuteCard({ data }: Props) {
  return (
    <div key={data.id} className="flex  lg:flex-row flex-col-reverse gap-10">
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="space-y-6 flex-1"
      >
        <Title className="font-bold" animate text={data.title} />
        <Paragraph animate text={data.subTitle} />
        <button className="border text-xl font-semibold border-main-black border-solid rounded-full py-2 px-4 hover:bg-main-black hover:text-white transition-all">
          {data.btn}
        </button>
      </motion.div>
      <div className="w-full shadow-main-black shadow-sm h-full flex-1 overflow-hidden rounded-lg border-2 border-solid border-main-black ">
        <Image
          sizes="(max-width: 479px) 89vw, (max-width: 767px) 94vw, (max-width: 991px) 87vw, 42vw"
          src={data.img}
          alt={data.title}
          width="1024"
          height="594"
        />
      </div>
    </div>
  );
}

export default DisturbuteCard;
