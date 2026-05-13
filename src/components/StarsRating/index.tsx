import { FaStar } from "react-icons/fa";

interface StarsRatingProps {
    rating: number;
    reviews?: number;
    size?: number;
}


export default function StarsRating({ rating, reviews, size = 12 }: StarsRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => {
          return (
            <FaStar
              key={index}
              size={size}
              className={`
                ${
                    index < Math.floor(rating)
                     ? "fill-yellow-500"
                     : ""
                }
            `}
            />
          );
        })}
      </div>
      <span className="text-xs">
        {rating}
        {reviews && ` (${reviews})`}
      </span>
    </div>
  );
}
