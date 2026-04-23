import { motion } from "framer-motion";
import clsx from "clsx";

const Card = ({ children, className = "", hover = true }) => (
  <motion.div
    whileHover={hover ? { y: -6, boxShadow: "0 20px 40px -8px rgba(0,0,0,0.12)" } : {}}
    transition={{ duration: 0.25 }}
    className={clsx(
      "bg-surface rounded-2xl shadow-card border border-border p-6",
      className
    )}
  >
    {children}
  </motion.div>
);

export default Card;
