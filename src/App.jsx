import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

const theme = createTheme({
  palette: {
    orange: {
      main: "#F97316",
      light: "#F97316",
      dark: "#F97316",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    allVariants: {
      color: "#475569",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route index path="/" element={<MainPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
