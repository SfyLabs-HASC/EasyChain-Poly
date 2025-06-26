import React from "react";
import { createRoot } from "react-dom/client";
import { ThirdwebProvider } from "thirdweb/react";
import { BrowserRouter } from "react-router-dom";
import { RpcCounterProvider } from "./context/RpcCounterContext"; // Importa il provider
import App from "./App";
import "./index.css";
import "./App.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <RpcCounterProvider> {/* Avvolgi l'app con il provider del contatore */}
      <ThirdwebProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThirdwebProvider>
    </RpcCounterProvider>
  </React.StrictMode>
);
