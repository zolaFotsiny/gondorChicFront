import { useRoutes } from "react-router-dom";
import User from "./User";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([User]);
}
