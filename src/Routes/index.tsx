import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from "../Pages/Sobre"
import Projetos from '../Pages/Projetos';
import Contato from '../Pages/Fale-Comigo/Contato';


function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="sobre-mim" element={<About/>}/>
      <Route path="projetos" element={<Projetos/>}/>
      <Route path="fale-comigo" element={<Contato/>}/>
    </Routes>
  );
}

export default RoutesApp;