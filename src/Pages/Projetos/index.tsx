import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { BsLink45Deg, BsGithub } from 'react-icons/bs'
import Gallery from "../../assets/Gallery SASS.jpg"
import Todo from "../../assets/Todo - react.png"
import Portifolio from "../../assets/Portifolio-img.jpg"
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
                                <div className="intro">
                                    <h1>Gallery</h1>
                                    <span>Tecnologias: Sass, Html</span> 
                                </div>
                                <div>
                                    <p>Gallery</p>
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
                        </div>

                    {/* Segundo Card*/}
                        <div className="card-activated" id="card-1">
                            <img src={Todo} alt="Gallery" className="img-project"/>
                                <div className="intro">
                                    <h1>Gallery</h1>
                                    <span>Tecnologias: Sass, Html</span> 
                                </div>
                                <div>
                                    <p>Gallery</p>
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
                        </div>
                    {/* Terceiro Card*/}
                        <div className="card-activated" id="card-1">
                            <img src={Portifolio} alt="Gallery" className="img-project"/>
                                <div className="intro">
                                    <h1>Gallery</h1>
                                    <span>Tecnologias: Sass, Html</span> 
                                </div>
                                <div>
                                    <p>Gallery</p>
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
                        </div>
                    {/* Quarto Card */}
                        <div className="card-activated" id="card-1">
                            <img src={Crud} alt="Gallery" className="img-project"/>
                                <div className="intro">
                                    <h1>Gallery</h1>
                                    <span>Tecnologias: Sass, Html</span> 
                                </div>
                                <div>
                                    <p>Gallery</p>
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