import { BrowserRouter, Routes } from "react-router-dom";
import "./styles.css";
import { config } from "./routes/config";

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      {config}
    </Routes>
    </BrowserRouter>
  )
}