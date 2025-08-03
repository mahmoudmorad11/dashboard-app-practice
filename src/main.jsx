import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SidebarProvider } from "./context/sidebarContext.jsx";

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <App />
  </SidebarProvider>
);
