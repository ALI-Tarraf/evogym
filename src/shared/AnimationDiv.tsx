import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
};

const AnimationDiv = ({ children, className, delay, x, y }: Props) => {
  return (
    <motion.div
      className={`${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: x, y: y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationDiv;
