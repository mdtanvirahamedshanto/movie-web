import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import SinglePage from "./components/SinglePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SinglePage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
