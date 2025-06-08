import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

// O MainLayout serve como a estrutura principal da página.
// Ele renderiza a Navbar no topo e, em seguida, o conteúdo
// da rota atual através do componente <Outlet />.
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
