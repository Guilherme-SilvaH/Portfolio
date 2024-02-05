import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { BsLink45Deg, BsGithub } from 'react-icons/bs'
import Gallery from "../../assets/Gallery SASS.jpg"
import Todo from "../../assets/Todo - react.png"
import Portifolio from "../../assets/Portifolio-img.jpg"
import Crud from "../../assets/CRUD- 2.png"
import "./Projeto.sass"
import { Link } from 'react-router-dom'
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
                        <div className={`card-activated ${openModalCard1 ? 'modal-open' : ''}`} id="card-1">
                            <img src={Gallery} alt="Gallery" className="img-project"/>
                                <div className="intro">
                                    <h1>Gallery</h1>
                                </div>     
                                <div className="links">
                                    <button className="button-site">
                                        <Link className="lk" to='https://gallery-hazel-phi.vercel.app/' target="_blanck">
                                            <BsLink45Deg/> Site
                                        </Link>
                                    </button>
                                   

                                    <button className="button-github">
                                        <Link  className="lk" to="https://github.com/Guilherme-SilvaH/Gallery-Sass" target="_blanck">
                                            <BsGithub/> GitHub
                                        </Link>
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
                        <div className={`card-activated ${openModalCard2 ? 'modal-open' : ''}`} id="card-2">
                            <img src={Todo} alt="Todo-List" className="img-project"/>
                                <div className="intro">
                                    <h1>Todo-List</h1>
                                   
                                </div>   
                                <div className="links">
                                        <button className="button-site">
                                            <Link className="lk" to="https://todo-react-nine-omega.vercel.app/" target="_blanck">
                                                <BsLink45Deg/> Site
                                            </Link>
                                        </button>
        
                                        <button className="button-github">
                                            <Link  className="lk" to="https://github.com/Guilherme-SilvaH/TODO-REACT" target="_blanck">
                                                <BsGithub/> GitHub
                                            </Link>
                                        </button>
                                </div>
                                        
                                <div className="div-modal">
                                    <button className="btn-container-modal" onClick={() => setOpenModalCard2(true)}>
                                        Ler Mais
                                    </button>
                                    <Modal isOpen={openModalCard2} setModalOpen={() => setOpenModalCard2(!openModalCard2)}>
                                            <div className="inside-modal">
                                            <h1>Todo-List</h1>
                                            <h2>Lista de Tarefas em React</h2>   
                                            <p>Projeto de Lista de Tarefas em React! Esta iniciativa foi criada com o intuito de oferecer uma experiência de usuário eficiente e agradável no gerenciamento diário de tarefas, utilizando a poderosa biblioteca JavaScript, React.
                                            </p>

                                            <span>Objetivos do Projeto:</span>
                                            <p>
                                                Criação de Tarefas: Adicione facilmente suas tarefas diárias, mantendo a simplicidade no processo.
        
                                                Remoção de Tarefas: Elimine tarefas concluídas ou que não são mais relevantes com apenas um clique.
                                                    
                                                Alteração de Status: Marque tarefas como completas ou incompletas, proporcionando uma visão clara do progresso.
                                                    
                                                Filtro por Status: Utilize filtros intuitivos para visualizar apenas tarefas completas, incompletas ou todas, conforme sua necessidade.
                                                    
                                                Ordenação Alfabética: Organize suas tarefas em ordem alfabética, facilitando a localização e gestão.
                                                    
                                                Pesquisa de Tarefas: Encontre rapidamente as tarefas desejadas através da funcionalidade de pesquisa.
                                            </p>

                                            <span>Tecnologias Utilizadas:</span>
                                            <div className="div-tec-utils">
                                               
                                                <p>
                                                    React

                                                </p>
                                                    
                                                <p>
                                                    JavaScript
                                                </p>

                                                <p>Hooks</p>
                                                <p>LocalStorage</p>
                                                <p>Vite</p>
                                            </div>


                                        </div>                              
                                    </Modal>
                                </div>
                                        
                                
                        </div>
                    {/* Terceiro Card*/}
                        <div className={`card-activated ${openModalCard3 ? 'modal-open' : ''}`} id="card-3">
                            <img src={Portifolio} alt="Gallery" className="img-project"/>
                                <div className="intro">
                                    <h1>Portfolio</h1> 
                                </div>
    
                                <div className="links">
                                        <button className="button-site">
                                            <Link className="lk" to="https://portfolio-q1iiiowdm-guilherme-henrique-da-silvas-projects.vercel.app/" target="_blanck">
                                                <BsLink45Deg/> Site
                                            </Link>
                                        </button>
        
                                        <button className="button-github">
                                            <Link className="lk" to="https://github.com/Guilherme-SilvaH/Portfolio" target="_blanck">
                                                <BsGithub/> GitHub
                                            </Link>
                                        </button>
                                </div>

                                <div className="div-modal">
                                    <button className="btn-container-modal" onClick={() => setOpenModalCard3(true)}>
                                        Ler Mais
                                    </button>
                                    <Modal isOpen={openModalCard3} setModalOpen={() => setOpenModalCard3(!openModalCard3)}>
                                    <div className="inside-modal" id="inside-modal-port">
                                            <h1>Portfolio</h1>
                                            <h2>Portfólio Pessoal</h2>   

                                       
                                            <p>Este projeto foi criado com o objetivo de me apresentar e destacar as habilidades que domino. O portfólio consiste em quatro páginas principais: Home, Sobre, Projetos e Fale Comigo.
                                            </p>

                                        
                                        <div className="responsivo-modal-inside-none">  
                                            <span>Objetivos do Projeto:</span>
                                            <p>
                                                <span>Home:</span> Na página inicial, apresento uma breve introdução sobre mim e destaco minhas principais habilidades. Essa seção proporciona uma visão geral das tecnologias e competências que possuo.
                                            </p>
                                                <span>Sobre:</span> Na página "Sobre", compartilho uma narrativa mais detalhada sobre minha jornada e como desenvolvi meu vínculo com a tecnologia. É uma oportunidade para os visitantes conhecerem minha trajetória e motivações.
                                            <p>                
                                                <span>Projetos:</span> A seção de "Projetos" destaca alguns dos projetos que já realizei. Cada projeto é apresentado de forma clara e inclui detalhes sobre as tecnologias utilizadas, desafios enfrentados e soluções implementadas.
                                            </p>

                                            <p>
                                                <span>Fale Comigo: </span> A página "Fale Comigo" oferece a possibilidade de os recrutadores ou clientes entrarem em contato comigo. Implementei um formulário conectado ao backend no Firebase para facilitar o envio de mensagens.
                                            </p>
                                        </div> 

                                        <div className="responsivo-modal-inside-on">
                                            <span>Objetivos do Projeto:</span>
                                            <p>
                                                
                                                O projeto tem como objetivos principais criar um site com quatro seções principais: Home, Sobre, Projetos e Fale Comigo. 
                                                Na página inicial, o foco é uma breve introdução sobre o autor e suas habilidades. 
                                                A seção "Sobre" oferece uma narrativa mais detalhada sobre a jornada do autor na tecnologia. 
                                                A parte de "Projetos" destaca projetos realizados, incluindo detalhes sobre tecnologias, desafios e soluções. 
                                                Por fim, a página "Fale Comigo" 
                                                disponibiliza um formulário conectado ao backend no Firebase para facilitar o contato de recrutadores ou cliente

                                            </p>
                                        </div>

                                            <span>Tecnologias Utilizadas:</span>
                                            <div className="div-tec-utils" id="responsivo-div-tec-utils">
                                               
                                                <p>
                                                    React

                                                </p>
                                                    
                                                <p>
                                                    Typescript
                                                </p>

                                                <p>Node</p>
                                                <p>Sass</p>
                                                <p>FireBase</p>
                                            </div>

                                            <span>Biblotecas Utilizadas:</span>
                                            <div className="div-tec-utils" id="responsivo-div-tec-utils">
                                               
                                                <p>
                                                    Swiper

                                                </p>
                                                <p>
                                                    Reactstrap
                                                </p>
                                                <p>Framer Motion</p>
                                                <p>Chakra UI</p>
                                                <p>Vite</p>
                                            </div> 

                                        </div>                            
                                    </Modal>
                                </div>   
                        </div>
                    {/* Quarto Card */}
                        <div className={`card-activated ${openModalCard4 ? 'modal-open' : ''}`} id="card-4">
                            <img src={Crud} alt="Crud" className="img-project"/>
                                <div className="intro">
                                    <h1>Crud</h1>
                                    
                                </div>    

                                <div className="links">
                                        <button className="button-site">
                                            <Link className="lk" to={"https://cadastro-clientes-crud.vercel.app/"} target="_black">
                                                <BsLink45Deg/> Site
                                            </Link>
                                        </button>
        
                                        <button className="button-github">
                                            <Link className="lk" to={"https://github.com/Guilherme-SilvaH/Cadastro-Clientes-Crud"} target="_black">
                                                <BsGithub/> GitHub
                                            </Link>
                                        </button>
                                </div>

                                <div className="div-modal">
                                        <button className="btn-container-modal" onClick={() => setOpenModalCard4(true)}>
                                            Ler Mais

                                        </button>
                                        <Modal isOpen={openModalCard4} setModalOpen={() => setOpenModalCard4(!openModalCard4)}>
                                        <div className="inside-modal" >
                                            <h1>Crud</h1>
                                            <h2>Projeto de Interface Responsiva para Cadastro de Clientes com CRUD</h2>   
                                            <p>Um Projeto de Interface Responsiva para Cadastro de Clientes com CRUD (Create, Read, Update, Delete) 
                                                é uma aplicação web que visa oferecer uma experiência de usuário fluida e consistente em diferentes dispositivos, 
                                                como desktops, tablets e smartphones. O CRUD refere-se às operações básicas de manipulação 
                                                de dados em um sistema: criar, ler, atualizar e excluir
                                            </p>

                                            <span>Objetivos do Projeto:</span>
                                            <p>
                                                Este projeto tem como objetivo criar uma interface responsiva para o cadastro de clientes, 
                                                utilizando o armazenamento local (localStorage) como banco de dados. Implementa as operações CRUD para oferecer 
                                                funcionalidades completas, incluindo cadastro, edição e exclusão de clientes. Os dados são apresentados em uma tabela 
                                                atualizada em tempo real. A aplicação é desenvolvida em HTML, CSS e JavaScript, proporcionando uma experiência de usuário 
                                                consistente em diferentes dispositivos. Os clientes são armazenados localmente para garantir persistência das informações. 
                                                O projeto visa simplificar o gerenciamento de clientes com uma abordagem intuitiva e eficiente
                                            </p>

                                            <span>Tecnologias Utilizadas:</span>
                                            <div className="div-tec-utils">
                                               
                                                <p>
                                                    HTML e CSS
                                                </p>
                                                    
                                                <p>
                                                    JavaScript
                                                </p>

                                                <p>CRUD</p>
                                                <p>LocalStorage</p>
                                            </div>


                                        </div>                         
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