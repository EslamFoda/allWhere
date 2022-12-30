import { motion } from "framer-motion";
interface Props {
  text: string;
  animate?: boolean;
  className?: string;
}
const Paragraph = ({ text, animate, className }: Props) => {
  return (
    <>
      {animate ? (
        <motion.p
          initial={{ opacity: 0, translateY: 90 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          className={`lg:text-xl text-lg !leading-loose ${className}`}
        >
          {text}
        </motion.p>
      ) : (
        <p className={`lg:text-xl text-lg !leading-loose ${className}`}>
          {text}
        </p>
      )}
    </>
  );
};

export default Paragraph;
