import "./styles.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}
