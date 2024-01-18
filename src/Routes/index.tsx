import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from "../Pages/Sobre"


function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sobre-mim" element={<About/>} />
    </Routes>
  );
}

export default RoutesApp;