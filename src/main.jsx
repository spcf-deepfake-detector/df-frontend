import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Mantine
import { MantineProvider } from "@mantine/core";
import theme from "./plugins/mantine.js";
import "@mantine/core/styles.css";

// React Router
import { createBrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      
    </MantineProvider>
  </StrictMode>
);
