import "./style.sass";
import { Link } from "react-router-dom";
import {BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'


export default function Footer() {
    return(

        <footer>
            <div className="copy-container">
                <p><span>&copy; 2024 </span>- Guilherme Henrique </p>
            </div>

            <div className="links-footer">
                <Link to="https://github.com/Guilherme-SilvaH" target='_blank'><BsGithub/></Link>
                <Link to='https://www.linkedin.com/in/guilherme-silva-5a39b51b2/' target='_blank'><BsLinkedin/></Link> 
                <Link to="https://github.com/Guilherme-SilvaH" target='_blank'><BsWhatsapp/></Link> 
                <Link to='mailto:guidevsilva@gmail.com' target='_blank'><MdOutlineEmail/></Link> 
            </div>
        </footer>
    )
}