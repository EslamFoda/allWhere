import { motion } from "framer-motion";
interface Props {
  text: string;
  animate?: boolean;
  className?:string
}
const Title = ({ text, animate,className }: Props) => {
  return (
    <>
      {animate ? (
        <motion.h1
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className={`lg:text-6xl text-3xl !leading-tight font-bold" ${className}`}
        >
          {text}
        </motion.h1>
      ) : (
        <h1 className={`lg:text-6xl text-3xl !leading-tight font-bold" ${className}`}>
          {text}
        </h1>
      )}
    </>
  );
};

export default Title;
