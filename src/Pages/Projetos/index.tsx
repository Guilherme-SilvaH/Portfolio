import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { BsLink45Deg, BsGithub } from 'react-icons/bs'
import Gallery from "../../assets/Gallery SASS.jpg"
import Todo from "../../assets/Todo - react.png"
import Portifolio from "../../assets/Portifolio-img.jpg"
import Crud from "../../assets/CRUD- 2.png"
import "./Projeto.sass"
import { Link } from "react-router-dom"
import Modal from "../../Components/modal/Modal"
import { useState } from "react"


export default function Projetos(){

    const [openModalCard1, setOpenModalCard1] = useState(false)
    const [openModalCard2, setOpenModalCard2] = useState(false)
    const [openModalCard3, setOpenModalCard3] = useState(false)
    const [openModalCard4, setOpenModalCard4] = useState(false)

    return(
        <main>
            <Header/>
                <div className="projeto-container">
                    <div className="project"> {/* main-project*/}

                    {/* Primeiro Card*/}
                        <div className="card-activated" id="card-1">
                            <img src={Gallery} alt="Gallery" className="img-project"/>
                                <div className="intro">
                                    <h1>Gallery</h1>
                                </div>     
                                <div className="links">
                                    <button className="button-site">
                                        <Link to={""} target="_black"/>
                                            <BsLink45Deg/> Site
                                    </button>

                                    <button className="button-github">
                                        <Link to={""} target="_black"/>
                                            <BsGithub/> GitHub
                                    </button>
                                </div>

                                <div className="div-modal">
                                    <button className="btn-container-modal" onClick={() => setOpenModalCard1(true)}>
                                        Ler Mais
                                    </button>
                                    <Modal isOpen={openModalCard1} setModalOpen={() => setOpenModalCard1(!openModalCard1)}>
                                        <div className="inside-modal">
                                            <h1>Gallery</h1>
                                            <h2>Projeto de Aprendizado em SASS</h2>   
                                            <p>O projeto Gallery foi concebido como uma plataforma de prática dedicada ao aprimoramento das 
                                                habilidades em SASS (Syntactically Awesome Stylesheets) e ao aprofundamento prático no desenvolvimento web utilizando HTML. 
                                                A iniciativa surgiu da necessidade de expandir o conhecimento e a proficiência nestas tecnologias, 
                                                oferecendo uma aplicação real para consolidar os conceitos aprendidos.
                                            </p>

                                            <span>Objetivos do Projeto:</span>
                                            <p>

                                                Prática Intensiva em SASS: O foco principal do Gallery é proporcionar um ambiente de aprendizado centrado no uso e domínio do SASS. 
                                                A linguagem de folha de estilo CSS pré-processada oferece recursos poderosos que visam tornar o desenvolvimento mais eficiente e modular.
                                                Aprofundamento Prático em HTML: Além do SASS, o projeto também visa fortalecer as habilidades em HTML.
                                                A combinação eficaz de SASS e HTML é crucial para a construção de interfaces web modernas e responsivas.
                                                Recursos Destacados:
                                                Estilização Avançada com SASS: Explore as capacidades avançadas do SASS, como variáveis, mixins, aninhamento e muito mais para criar estilos robustos e de fácil manutenção.
                                                Layout Responsivo com HTML: Implementação de um layout responsivo utilizando as melhores práticas de HTML, 
                                                garantindo uma experiência de usuário consistente em diferentes dispositivos.
                                            </p>

                                            <span>Tecnologias Utilizadas:</span>
                                            <div className="div-tec-utils">
                                               
                                                <p>
                                                    SASS

                                                </p>
                                                    
                                                <p>
                                                    HTML
                                                </p>
                                            </div>


                                        </div>
                                        
                                    </Modal>
                                </div>
                                       
                                
                        </div>

                    {/* Segundo Card*/}
                        <div className="card-activated" id="card-2">
                            <img src={Todo} alt="Todo-List" className="img-project"/>
                                <div className="intro">
                                    <h1>Todo-List</h1>
                                   
                                </div>   
                                <div className="links">
                                        <button className="button-site">
                                            <Link to={""} target="_black"/>
                                                <BsLink45Deg/> Site
                                        
                                        </button>
        
                                        <button className="button-github">
                                            <Link to={""} target="_black"/>
                                                <BsGithub/> GitHub
                                            
                                        </button>
                                </div>
                                        
                                <div className="div-modal">
                                    <button className="modal-container" onClick={() => setOpenModalCard2(true)}>
                                        Ler Mais
                                    </button>
                                    <Modal isOpen={openModalCard2} setModalOpen={() => setOpenModalCard2(!openModalCard2)}>
                                            <p>Ola esse aqui é um modal</p>                            
                                    </Modal>
                                </div>
                                        
                                
                        </div>
                    {/* Terceiro Card*/}
                        <div className="card-activated" id="card-3">
                            <img src={Portifolio} alt="Gallery" className="img-project"/>
                                <div className="intro">
                                    <h1>Portfolio</h1> 
                                </div>
    
                                <div className="links">
                                        <button className="button-site">
                                            <Link to={""} target="_black"/>
                                                <BsLink45Deg/> Site
                                            
                                        </button>
        
                                        <button className="button-github">
                                            <Link className="" to={""} target="_black"/>
                                                <BsGithub/> GitHub
                                           
                                        </button>
                                </div>

                                <div className="div-modal">
                                    <button className="modal-container" onClick={() => setOpenModalCard3(true)}>
                                        Ler Mais
                                    </button>
                                    <Modal isOpen={openModalCard3} setModalOpen={() => setOpenModalCard3(!openModalCard3)}>
                                            <p>Ola esse aqui é um modal</p>                            
                                    </Modal>
                                </div>   
                        </div>
                    {/* Quarto Card */}
                        <div className="card-activated" id="card-4">
                            <img src={Crud} alt="Crud" className="img-project"/>
                                <div className="intro">
                                    <h1>Crud</h1>
                                    
                                </div>    

                                <div className="links">
                                        <button className="button-site">
                                            <Link to={""} target="_black"/>
                                                <BsLink45Deg/> Site
                                            
                                        </button>
        
                                        <button className="button-github">
                                            <Link to={""} target="_black"/>
                                                <BsGithub/> GitHub
                                           
                                        </button>
                                </div>

                                <div className="div-modal">
                                        <button className="modal-container" onClick={() => setOpenModalCard4(true)}>
                                            Ler Mais

                                        </button>
                                        <Modal isOpen={openModalCard4} setModalOpen={() => setOpenModalCard4(!openModalCard4)}>
                                                <p>Ola esse aqui é um modal</p>                            
                                        </Modal>
                                </div>       
                                
                        </div>
                        

                   

                    {/* Quinto Card */}
                        <div className="em-breve" >
                            <p>EM BREVE!</p>
                        </div>

                    {/* Sexto Card */}
                        <div className="em-breve" >
                            <p>EM BREVE!</p>
                        </div>
                    </div>
                </div>
            <Footer/>
        </main>
    )
}