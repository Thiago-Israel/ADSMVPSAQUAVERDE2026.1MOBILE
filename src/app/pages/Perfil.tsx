import { motion } from "motion/react";
import BottomNav from "../components/BottomNav";
import {
  User,
  Settings,
  Heart,
  Award,
  MapPin,
  LogOut,
  Shield,
  Bell,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";

export default function Perfil() {
  const navigate = useNavigate();

  const stats = [
    { label: "Trilhas Feitas", value: "12", icon: MapPin },
    { label: "Eventos", value: "8", icon: Award },
    { label: "Favoritos", value: "15", icon: Heart },
  ];

  const menuItems = [
    { icon: Bell, label: "Notificações", color: "text-blue-600" },
    { icon: Heart, label: "Favoritos", color: "text-red-600" },
    { icon: Award, label: "Conquistas", color: "text-amber-600" },
    { icon: Settings, label: "Configurações", color: "text-gray-600" },
    {
      icon: Shield,
      label: "Admin Login",
      color: "text-emerald-600",
      action: () => navigate("/admin"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 pt-12 pb-16 rounded-b-3xl shadow-lg">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold mb-1">Maria Silva</h1>
          <p className="text-emerald-100">Exploradora Eco</p>
        </motion.div>
      </div>

      <div className="px-6 -mt-8 space-y-6 pb-6">
        {/* Stats Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid grid-cols-3 gap-3"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-sm text-center"
              >
                <Icon className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                <div className="font-bold text-xl text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                onClick={item.action}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <Icon className={`w-5 h-5 ${item.color}`} />
                <span className="flex-1 text-left text-gray-900">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.button>
            );
          })}
        </motion.div>

        {/* Logout Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            className="w-full rounded-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sair
          </Button>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
