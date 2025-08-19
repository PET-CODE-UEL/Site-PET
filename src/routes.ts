import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  index("./pages/Home/Home.tsx"),
  route("projetos", "./pages/Projetos/Projetos.tsx"),

] satisfies RouteConfig;
