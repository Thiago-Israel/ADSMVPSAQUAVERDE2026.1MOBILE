import { motion } from "motion/react";
import BottomNav from "../components/BottomNav";
import HeroBanner from "../components/HeroBanner";
import TrailCard from "../components/TrailCard";
import WaterfallCard from "../components/WaterfallCard";
import { Leaf, TreePine, Fish, Bird, Sparkles } from "lucide-react";

export default function Home() {
  const featuredTrails = [
    {
      name: "Trilha da Pedra do Elefante",
      location: "Saquarema",
      duration: "3h",
      difficulty: "Moderado" as const,
      imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3Nzk1NjYxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Trilha do Morro da Cruz",
      location: "Saquarema",
      duration: "2h",
      difficulty: "Fácil" as const,
      imageUrl: "https://images.unsplash.com/photo-1639618650311-59aa5840e695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHRyYWlsJTIwbmF0dXJlJTIwYnJhemlsfGVufDF8fHx8MTc3OTU2NjEyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const waterfalls = [
    {
      name: "Cachoeira da Madre de Deus",
      height: "15m",
      distance: "8km",
      imageUrl: "https://images.unsplash.com/photo-1600656801344-b1ec70d4058d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBmb3Jlc3QlMjBicmF6aWx8ZW58MXx8fHwxNzc5NTY2MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Cachoeira do Tingui",
      height: "12m",
      distance: "5km",
      imageUrl: "https://images.unsplash.com/photo-1600656801344-b1ec70d4058d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBmb3Jlc3QlMjBicmF6aWx8ZW58MXx8fHwxNzc5NTY2MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const biodiversityStats = [
    { icon: TreePine, label: "Espécies de Plantas", count: "350+" },
    { icon: Bird, label: "Espécies de Aves", count: "120+" },
    { icon: Fish, label: "Espécies Aquáticas", count: "80+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 mb-2"
        >
          <Leaf className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Saquarema Verde Online</h1>
        </motion.div>
        <p className="text-emerald-100">Explore a natureza de forma sustentável</p>
      </div>

      <div className="px-6 -mt-8 space-y-8 pb-6">
        {/* Hero Banner */}
        <HeroBanner
          imageUrl="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGVjbyUyMHRvdXJpc218ZW58MXx8fHwxNzc5NTY2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          title="Descubra Saquarema"
          subtitle="Ecoturismo Sustentável"
        />

        {/* Environmental Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <h2 className="font-semibold text-gray-900">Informações Ambientais</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Saquarema preserva uma rica biodiversidade de Mata Atlântica, com
            ecossistemas costeiros únicos. Pratique turismo responsável e ajude a
            manter nosso patrimônio natural.
          </p>
        </motion.div>

        {/* Biodiversity Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-semibold text-gray-900 mb-4">Biodiversidade</h2>
          <div className="grid grid-cols-3 gap-3">
            {biodiversityStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 text-white text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-lg">{stat.count}</div>
                  <div className="text-xs text-emerald-100 mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Trails */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Trilhas em Destaque</h2>
            <a href="/trilhas" className="text-emerald-600 text-sm font-medium">
              Ver todas
            </a>
          </div>
          <div className="space-y-4">
            {featuredTrails.map((trail, index) => (
              <motion.div
                key={trail.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <TrailCard {...trail} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Waterfalls */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="font-semibold text-gray-900 mb-4">Cachoeiras</h2>
          <div className="space-y-3">
            {waterfalls.map((waterfall, index) => (
              <motion.div
                key={waterfall.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <WaterfallCard {...waterfall} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
