import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./component/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
