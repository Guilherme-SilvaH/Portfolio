import './style.sass'
import curriculo from '../../assets/Guilherme Dev - 2024.pdf'

import { IoLogoWhatsapp } from 'react-icons/io' 
import { FaDownload } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'
import log from '../../assets/5f27cb92-9819-404e-b497-4b34f14d9e12-removebg-preview (1).png'




export default function Main() {
    return(
        <main className='main'>
            <Row xs={2}>
                <Col id='col-1'>
                    <h1>Olá!</h1>
                    <p>Eu sou o <span>Guilherme</span></p>
                    <p>Desenvolvedor Web</p>

                    <div className='info'>
                        <a target='_blanck' href='/' className='contact'>
                            <IoLogoWhatsapp/> Contatar
                        </a>
                        <a download='curriculo.pdf' href={curriculo} className='contact'>
                        <FaDownload/> Baixar CV
                        </a>
                    </div>
                </Col>

                <Col id='col-2'>
                    
                    <img src={log} alt='1'></img>
                </Col>
            </Row>
        </main>
    )
}