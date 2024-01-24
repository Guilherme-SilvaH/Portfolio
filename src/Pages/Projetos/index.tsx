import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { BsLink45Deg, BsGithub } from 'react-icons/bs'
import Gallery from "../../assets/Gallery SASS.jpg"
import Todo from "../../assets/Todo - react.png"
import Portifolio from "../../assets/Portifolio.png"
import Crud from "../../assets/Crud.png"


import "./Projeto.sass"
import { Link } from "react-router-dom"


export default function Projetos(){
    return(
        <main>
            <Header/>
                <div className="projeto-container">
                    

                    <div className="project"> {/* main-project*/}
                    {/* Primeiro Card*/}
                        <div className="card-activated" id="card-1">
                            <img src={Gallery} alt="Gallery" className="img-project"/>
                            <div className="overlay">
                                <h1></h1>
                                <h2> </h2>
                            </div>
                            <span>Gallery</span> {/* texto projeto*/}
                            <span>Tecnologias: Sass, Html </span> {/* tecnologias usadas*/}

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
                        </div>

                    {/* Segundo Card*/}
                        <div className="card-activated" id="card-2">
                            <img src={Todo} alt="Todo-List" className="img-project"/>
                            <div className="overlay">
                                <h1></h1>
                                <h2></h2>
                            </div>
                            <span>Todo-List</span> {/* texto projeto*/}
                            <span>Tecnologias: React, JavaScript, Git, LocalStorage</span> {/* tecnologias usadas*/}

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
                        </div>

                    {/* Terceiro Card */}
                        <div className="card-activated" id="card-3">
                            <img src={Portifolio} alt="Portifolio" className="img-project"/>
                            <div className="overlay">
                                <h1></h1>
                                <h2></h2>
                            </div>
                            <span>Portifolio</span> {/* texto projeto*/}
                            <span>Tecnologias: React, Reactstrap, TypeScript, Sass, Vite, Swiper, Chakra-ui </span> {/* tecnologias usadas*/}

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
                        </div>


                    {/* Quarto Card */}
                        <div className="card-activated" id="card-4">
                            <img src={Crud} alt="Crud" className="img-project"/>
                            <div className="overlay">
                                <h1></h1>
                                <h2></h2>
                            </div>
                            <span>Crud</span> {/* texto projeto*/}
                            <span>Tecnologias: Javascript, Html, Css, LocalStorage, Crud </span> {/* tecnologias usadas*/}

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