import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { MapPin, Clock, TrendingUp } from "lucide-react";

interface TrailCardProps {
  name: string;
  location: string;
  duration: string;
  difficulty: "Fácil" | "Moderado" | "Difícil";
  imageUrl: string;
}

export default function TrailCard({
  name,
  location,
  duration,
  difficulty,
  imageUrl,
}: TrailCardProps) {
  const difficultyColors = {
    Fácil: "bg-emerald-100 text-emerald-700",
    Moderado: "bg-amber-100 text-amber-700",
    Difícil: "bg-red-100 text-red-700",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-40 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
