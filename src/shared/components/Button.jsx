import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  primary:
    "bg-primary hover:bg-primaryHover text-white shadow-md hover:shadow-glow",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:bg-primary/10",
  secondary:
    "bg-secondary hover:bg-secondary/90 text-white shadow-md",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
