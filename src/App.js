import "./styles.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./pages/home";
import Batchs from "./pages/batchs";
import Students from "./pages/students";
import Accounts from "./pages/accounts";
import BatchView from "./pages/batch-view";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} exact />
        <Route path="/batches" element={<Batchs />} exact />
        <Route path="/batches/:id" element={<BatchView />} exact />
        <Route path="/students" element={<Students />} exact />
        <Route path="/accounts" element={<Accounts />} exact />
        <Route path="/dues" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}
