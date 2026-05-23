import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Leaf } from "lucide-react";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export default function HeroBanner({ imageUrl, title, subtitle }: HeroBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-64 w-full overflow-hidden rounded-3xl"
    >
      <ImageWithFallback
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-2"
        >
          <Leaf className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">{subtitle}</span>
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h1>
      </div>
    </motion.div>
  );
}
