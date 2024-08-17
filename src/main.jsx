import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins", // Replace with your custom font family
      "Arial", // Backup font
      "sans-serif", // Fallback
    ].join(","),
  },
  palette: {
    primary: {
      main: "#fff", // Replace with your primary color
    },
    secondary: {
      main: "#dc004e", // Replace with your secondary color
    },
  },
  text: {
      primary: "#000", // Custom primary text color
      secondary: "#757575", // Custom secondary text color
      disabled: "#bdbdbd", // Custom disabled text color
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
