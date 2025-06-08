import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AcoesPage from "../pages/AcoesPage";
import EmProgressoPage from "../pages/EmProgressoPage";

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
        element: <EmProgressoPage />,
      },
      {
        path: "/projetos",
        element: <EmProgressoPage />,
      },
      {
        path: "/acoes",
        element: <AcoesPage />,
      },
      {
        path: "/eventos",
        element: <EmProgressoPage />,
      },
    ],
  },
]);
