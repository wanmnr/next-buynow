import { StarIcon } from "./Icons";

// components/shared/Rating.tsx
interface RatingProps {
  readonly value: number;
  readonly max?: number;
}

export default function Rating({ value, max = 5 }: Readonly<RatingProps>) {
  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, index) => (
        <StarIcon
          key={`star-${index}-${max}`}
          className={`w-5 h-5 ${
            index < value ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
