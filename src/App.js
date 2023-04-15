import "./styles.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./pages/home";
import Batchs from "./pages/batchs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} exact />
        <Route path="/batches" element={<Batchs />} exact />
        <Route path="/students" element={<Home />} exact />
        <Route path="/accounts" element={<Home />} exact />
        <Route path="/dues" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}
