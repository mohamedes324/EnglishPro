import { Star } from "lucide-react";

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={16} className="fill-accent text-accent" />
    ))}
  </div>
);

export default StarRating;
