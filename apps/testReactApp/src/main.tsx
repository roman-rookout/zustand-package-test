import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
console.log("React version:", React.version);
console.log("useState:", useState);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
