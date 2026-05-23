import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Trilhas from "./pages/Trilhas";
import Eventos from "./pages/Eventos";
import Perfil from "./pages/Perfil";
import AdminLogin from "./pages/AdminLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/trilhas",
    Component: Trilhas,
  },
  {
    path: "/eventos",
    Component: Eventos,
  },
  {
    path: "/perfil",
    Component: Perfil,
  },
  {
    path: "/admin",
    Component: AdminLogin,
  },
]);
