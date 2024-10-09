import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./main-route";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <Dashboard />
  </RouterProvider>
);
