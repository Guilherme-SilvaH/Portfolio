import './sass/style.sass';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Design_a_logo_for_my_personal_portfolio_as_a_Web-PhotoRoom.png-PhotoRoom (1).png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';

import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      {/* Navbar HEADER */}
      <Navbar color='none' dark={true} expand="lg" container="fluid" className='navbar-header'>
        <NavbarBrand href="/"><img src={logo} alt='1' className='img-logo'/></NavbarBrand>
        
        {/* Abrir a Navbar */}
        <NavbarToggler onClick={toggle}/>
        
        <Collapse isOpen={isOpen} navbar>
          {/* Dados NavBar */}
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link to="/" className='nav-link active'>HOME</Link>
            </NavItem>
            <NavItem>
              <Link to="/sobre-mim" className='nav-link'>SOBRE</Link>
            </NavItem>
            <NavItem>
              <Link to="/projetos" className='nav-link'>PROJETOS</Link>
            </NavItem>
            <NavItem>
              <Link to="/fale-comigo" className='nav-link'>FALE COMIGO</Link>
            </NavItem>
          </Nav>

          <NavbarText>
            <div className='socials'>
              <a href='https://github.com/Guilherme-SilvaH' target='_blank' rel='noopener noreferrer'><BsGithub/></a>
              <a href='https://www.linkedin.com/in/guilherme-silva-5a39b51b2/' target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
              <a href='https://api.whatsapp.com/send?phone=seu_numero_de_telefone' target='_blank' rel='noopener noreferrer'><BsWhatsapp/></a>
              <a href='mailto:guidevsilva@gmail.com' target='_blank' rel='noopener noreferrer'><MdOutlineEmail/></a>
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </nav>
  );
}
