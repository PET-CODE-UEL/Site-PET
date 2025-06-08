import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import QuemSomosPage from "../pages/QuemSomosPage";
import ProjetosPage from "../pages/ProjetosPage";
import AcoesPage from "../pages/AcoesPage";
import EventosPage from "../pages/EventosPage";

// createBrowserRouter cria as rotas da aplicação.
// A rota pai '/' usa o MainLayout, garantindo que a Navbar
// apareça em todas as páginas filhas.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/quem-somos",
        element: <QuemSomosPage />,
      },
      {
        path: "/projetos",
        element: <ProjetosPage />,
      },
      {
        path: "/acoes",
        element: <AcoesPage />,
      },
      {
        path: "/eventos",
        element: <EventosPage />,
      },
    ],
  },
]);
