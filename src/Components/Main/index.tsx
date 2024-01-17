import './style.sass'
import curriculo from '../../assets/Guilherme Dev - 2024.pdf'

import { IoLogoWhatsapp } from 'react-icons/io' 
import { FaDownload } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'
import im from '../../assets/Programming-amico.svg'





export default function Main() {
    return(
        <main className='main'>
            <Row xs={2}>
                <Col id='col-1'>
                    <h1>Olá!</h1>
                    <p>Eu sou o <span>Guilherme</span></p>
                    <p><span>Desenvolvedor   </span>Web</p>

                    <div className='info'>
                       
                        <a download='curriculo.pdf' href={curriculo} className='contact'>
                        <FaDownload/> Baixar CV
                        </a>
                    </div>
                </Col>

                <Col id='col-2'>
                    
                    <img src={im} alt='1'></img>
                </Col>
            </Row>
        </main>
    )
}