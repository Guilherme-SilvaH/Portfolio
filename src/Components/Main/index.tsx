import './style.sass'
import curriculo from '../../assets/Guilherme Dev - 2024.pdf'

import { IoLogoWhatsapp } from 'react-icons/io' 
import { FaDownload } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'




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
                    </div>
                </Col>

                <Col id='col-2'>
                    <img src={''} alt='1'></img>
                </Col>
            </Row>
        </main>
    )
}