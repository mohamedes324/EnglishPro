import clsx from "clsx";

const Badge = ({ children, className = "" }) => (
  <span
    className={clsx(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20",
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
