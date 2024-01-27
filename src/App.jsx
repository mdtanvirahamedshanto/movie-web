import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import Home from "./components/Home";
import Movies from "./components/Movies";
import SinglePage from "./components/SinglePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SinglePage />} />
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
