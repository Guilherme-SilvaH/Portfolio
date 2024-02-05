import './style.sass'
import curriculo from '../../assets/Guilherme Dev - 2024.pdf'
import { FaDownload } from 'react-icons/fa'
import { Col,Container,Row } from 'reactstrap'
import im from '../../assets/Programming-amico.svg'






export default function Main() {
    return(
        <main className='landing-page'>
            <Container className="container-row">
                <Row xs={2}>
                    <Col id='col-1-ab'>
                        <h1>Olá!</h1>
                        <p>Eu sou o <span>Guilherme</span></p>
                        <p><span>Desenvolvedor   </span>Web</p>

                        <div className='info'>
                            <a download='curriculo.pdf' href={curriculo} className='contact'>
                            <FaDownload/> Baixar CV
                            </a>
                            <a href="#archor" className='contact'>
                                Habilidades
                            </a>
                        </div>
                    </Col>

                    <Col id='col-2-ab'>

                        <img src={im} alt='1'></img>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}