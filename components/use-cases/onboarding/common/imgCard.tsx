import { motion } from "framer-motion";
import Image from "next/image";
interface Props {
  data: { imgCard?: { img: string; title: string; subTitle: string } };
}
function ImgCard({ data }: Props) {
  return (
    <>
      {data.imgCard ? (
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ marginTop: 30 }}
          animate={{ marginTop: 0 }}
          className="w-[80%] rounded-xl drop-shadow-lg lg:p-4 md:p-4 p-2 flex items-center gap-5 bg-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="bg-[#f9c54d] min-w-max rounded-xl">
            {/* @ts-ignore */}
            <Image
              src={data.imgCard?.img}
              alt={data.imgCard?.title}
              width="62"
              height="62"
            />
          </div>
          <div>
            <h3 className="font-bold lg:text-base md:text-base text-sm">
              {data.imgCard?.title}
            </h3>
            <span className="lg:text-sm md:text-sm text-xs">
              {data.imgCard?.subTitle}
            </span>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}

export default ImgCard;
