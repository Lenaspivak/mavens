import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}> {/* ✅ Wrap App with ThemeProvider */}
            <App />
        </ThemeProvider>
    </StrictMode>
);