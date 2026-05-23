import { motion } from "motion/react";
import BottomNav from "../components/BottomNav";
import EventCard from "../components/EventCard";
import { Calendar as CalendarIcon, Filter } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Eventos() {
  const events = [
    {
      title: "Caminhada Ecológica da Primavera",
      date: "15 de Junho, 2026",
      location: "Trilha da Pedra do Elefante",
      participants: 45,
      imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMG1vdW50YWluc3xlbnwxfHx8fDE3Nzk1NjYxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Limpeza de Praia Sustentável",
      date: "22 de Junho, 2026",
      location: "Praia de Itaúna",
      participants: 78,
      imageUrl: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGVjbyUyMHRvdXJpc218ZW58MXx8fHwxNzc5NTY2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Observação de Aves Noturnas",
      date: "28 de Junho, 2026",
      location: "Reserva Ecológica",
      participants: 25,
      imageUrl: "https://images.unsplash.com/photo-1683090531378-774503de9b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9kaXZlcnNpdHklMjB3aWxkbGlmZSUyMG5hdHVyZXxlbnwxfHx8fDE3Nzk1NjYxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Workshop de Fotografia de Natureza",
      date: "5 de Julho, 2026",
      location: "Cachoeira da Madre de Deus",
      participants: 30,
      imageUrl: "https://images.unsplash.com/photo-1600656801344-b1ec70d4058d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBmb3Jlc3QlMjBicmF6aWx8ZW58MXx8fHwxNzc5NTY2MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Plantio de Mudas Nativas",
      date: "12 de Julho, 2026",
      location: "Serra da Sapiatiba",
      participants: 60,
      imageUrl: "https://images.unsplash.com/photo-1541637593725-923467404d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRvdXJpc20lMjBncmVlbnxlbnwxfHx8fDE3Nzk1NjYxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-bold mb-2"
        >
          Eventos
        </motion.h1>
        <p className="text-blue-100">Participe de atividades sustentáveis</p>
      </div>

      <div className="px-6 -mt-4 space-y-6 pb-6">
        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex gap-3 overflow-x-auto pb-2"
        >
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 flex-shrink-0">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Todos
          </Button>
          <Button variant="outline" className="rounded-full flex-shrink-0">
            Próximos
          </Button>
          <Button variant="outline" className="rounded-full flex-shrink-0">
            Meus Eventos
          </Button>
        </motion.div>

        {/* Event List */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
