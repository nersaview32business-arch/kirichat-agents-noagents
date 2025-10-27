import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FrameUtamaHalaman } from "./screens/FrameUtamaHalaman";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FrameUtamaHalaman />
  </StrictMode>,
);
