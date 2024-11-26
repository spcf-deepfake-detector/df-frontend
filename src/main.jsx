import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Mantine
import { MantineProvider } from "@mantine/core";
import theme from "./plugins/mantine.js";
import "@mantine/core/styles.css";

// React Router
import AppRouter from "./router/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <AppRouter />
    </MantineProvider>
  </StrictMode>
);
