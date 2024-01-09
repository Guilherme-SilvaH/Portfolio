{/* IMPORTS */}
import './sass/style.sass'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets//Design_a_logo_for_my_personal_portfolio_as_a_Web-PhotoRoom.png-PhotoRoom (1).png';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
  } from 'reactstrap';


{/* ICONS */}
import {BsInstagram, BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'



{/* EXPORT HEADER */}
export default function Header (){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)


    return (
        <nav>
           
         
            {/* Navbar HEADER */}
            <Navbar color='none' dark={true} expand="lg" container="fluid" className='navbar-header'>
            <NavbarBrand href="/"><img src={logo} alt='1' className='img-logo'/></NavbarBrand>
                  {/* abir a Navbar */}
              <NavbarToggler onClick={toggle}/>
              <Collapse isOpen={isOpen} navbar>
                {/* Dados NavBar */}
              <Nav>
                
                <NavItem>
                  <NavLink href="/">
                    HOME
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sobre-mim">
                    SOBRE MIM
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projetos">
                    PROJETOS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contato">
                      CONTATO
                  </NavLink>
                </NavItem>
                </Nav>
                <NavbarText>
                    <div className='socials'>
                        <Link to='https://www.instagram.com/guisilvvaa/?next=%2F' target='_blank'><BsInstagram/></Link>
                        <Link to='https://github.com/Guilherme-SilvaH' target='_blank'><BsGithub/></Link>
                        <Link to='https://www.linkedin.com/in/guilherme-silva-5a39b51b2/' target='_blank'><BsLinkedin/></Link>
                        <Link to='mailto:guidevsilva@gmail.com' target='_blank'><MdOutlineEmail/></Link>
                        <Link to='' target='_blank'><BsWhatsapp/></Link>
                    </div>
                </NavbarText>

                  </Collapse>
              </Navbar>
              </nav>
    )     
}     



