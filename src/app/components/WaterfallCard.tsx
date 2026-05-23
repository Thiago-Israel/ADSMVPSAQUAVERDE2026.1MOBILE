import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Droplets, Navigation } from "lucide-react";

interface WaterfallCardProps {
  name: string;
  height: string;
  distance: string;
  imageUrl: string;
}

export default function WaterfallCard({
  name,
  height,
  distance,
  imageUrl,
}: WaterfallCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex gap-4 p-4"
    >
      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Droplets className="w-4 h-4 text-blue-600" />
            <span>Altura: {height}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Navigation className="w-4 h-4 text-blue-600" />
            <span>{distance} do centro</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
