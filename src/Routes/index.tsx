import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from "../Pages/Sobre"
import Projetos from '../Pages/Projetos';


function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="sobre-mim" element={<About/>}/>
      <Route path="Projetos" element={<Projetos/>}/>
    </Routes>
  );
}

export default RoutesApp;