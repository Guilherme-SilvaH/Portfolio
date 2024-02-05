import { Col, Container, Row } from "reactstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { SiGooglemaps } from 'react-icons/si'
import "./Style.sass"
import img from "../../assets/logo-new3.jpg"

export default function About (){
    return(
        <main className="landing-page">
            
            <Header/>  {/* Componente Header */}
            <Container className="container-row">
                <Row xs={2}>
                    <Col id="col-1-ab">
                        <div className="div-name-ab">
                            <h4>Guilherme Henrique</h4>
                        </div>
                        <div className="div-city-ab">
                            <h4> <SiGooglemaps/>
                                Paulinia - <span className="span-ab"> São Paulo</span></h4>
                        </div>   
                       
                        <Col id='img-mobile-ab'> {/* Coluna para imagem responsiva */}
                            <img src={img} alt='cover'/>
                        </Col> 
                         
                        <div className="col-conteudo-ab">{/* Texto a ser exibido */}
                            <p className="primerio-p">
                                Desde a minha infância, sempre estive imerso no fascinante mundo da tecnologia,    
                                explorando jogos e fazendo descobertas no meu próprio computador. Contudo, ao longo do tempo e diante de diferentes escolhas, 
                                acabei seguindo por caminhos distintos. Foi somente mais tarde que percebi a necessidade de investir no antigo sonho que sempre carreguei:   
                                trabalhar com tecnologia. 
                            </p>

                            <p className="segundo-p">
                                Minha busca por meu lugar na tecnologia começou com uma profunda pesquisa, levando-me à programação web. Apesar de estar em transição de carreira, 
                                atuando em uma área diferente de TI, 
                                essa mudança só fortaleceu minha determinação. Dedicando-me diariamente ao desenvolvimento de habilidades, 
                                tanto na faculdade como em cursos especializados, 
                                busco constantemente aprender mais e estou ansioso por uma oportunidade para demonstrar minhas habilidades na prática.
                            </p>
                        </div>
                    </Col>


                    <Col id="col-2-ab" >
                        <img src={img} alt='1'/>
                    </Col>
                </Row>  
            </Container>
            
             
            <Footer/>{/* Componente Footer */}
        </main>
    )
}