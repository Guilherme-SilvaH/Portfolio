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
                                            <p>Ola esse aqui é um modal</p>                            
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