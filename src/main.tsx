import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles/fonts.css";
import "./index.css";
import AppWrapper from "./hooks/AppWrapper.tsx";
import AppRouter from "./router/AppRouter.tsx";





createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <AppRouter />
    </AppWrapper>
  </StrictMode>
);
