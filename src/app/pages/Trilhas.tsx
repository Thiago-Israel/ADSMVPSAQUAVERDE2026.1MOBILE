import { motion } from "motion/react";
import BottomNav from "../components/BottomNav";
import TrailCard from "../components/TrailCard";
import { Search, Filter } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Trilhas() {
  const trails = [
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
    {
      name: "Trilha da Restinga",
      location: "Saquarema",
      duration: "1.5h",
      difficulty: "Fácil" as const,
      imageUrl: "https://images.unsplash.com/photo-1541637593725-923467404d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRvdXJpc20lMjBncmVlbnxlbnwxfHx8fDE3Nzk1NjYxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Trilha da Serra da Sapiatiba",
      location: "Saquarema",
      duration: "4h",
      difficulty: "Difícil" as const,
      imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3Nzk1NjYxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Trilha do Costão",
      location: "Saquarema",
      duration: "2.5h",
      difficulty: "Moderado" as const,
      imageUrl: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGVjbyUyMHRvdXJpc218ZW58MXx8fHwxNzc5NTY2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Trilha da Praia Deserta",
      location: "Saquarema",
      duration: "1h",
      difficulty: "Fácil" as const,
      imageUrl: "https://images.unsplash.com/photo-1639618650311-59aa5840e695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHRyYWlsJTIwbmF0dXJlJTIwYnJhemlsfGVufDF8fHx8MTc3OTU2NjEyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-bold mb-2"
        >
          Trilhas
        </motion.h1>
        <p className="text-emerald-100">Explore as trilhas de Saquarema</p>
      </div>

      <div className="px-6 -mt-4 space-y-6 pb-6">
        {/* Search and Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex gap-3"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Buscar trilhas..."
              className="pl-10 rounded-full border-gray-200 bg-white"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-gray-200 bg-white"
          >
            <Filter className="w-5 h-5 text-gray-600" />
          </Button>
        </motion.div>

        {/* Trail List */}
        <div className="space-y-4">
          {trails.map((trail, index) => (
            <motion.div
              key={trail.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <TrailCard {...trail} />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
