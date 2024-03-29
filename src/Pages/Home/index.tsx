import './style.sass'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main'
import Skills from '../../Components/Skills/Skills'
import Footer from '../../Components/Footer/Footer'


export default function Home () {
    return(
        <main className='contain-fluid'>
            <Header/>
            <Main/>
            <Skills/>
            <Footer/>
        </main>
    )
}