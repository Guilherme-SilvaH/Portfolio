import './style.sass'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main'


export default function Home () {
    return(
        <main className='contain-fluid'>
            <Header/>
            <Main/>
        </main>
    )
}