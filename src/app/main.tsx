import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "../router"; // Importa a configuração de rotas
import "./index.css";

// Em vez de renderizar o App, agora renderizamos o RouterProvider,
// que gerencia qual página exibir com base na URL.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
