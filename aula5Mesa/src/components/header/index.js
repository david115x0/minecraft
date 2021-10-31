import img from './img/logo1.webp';
import './style.css';



function Imagem(){
    
    return(
        <header id="header">
            <img src={img} alt="Imagem Steave" id="logo"></img>
            <nav id="menu">
                <li>GAMES</li>
                <li>COMMUNITY</li>
                <li>MERCH</li>
                <li>SUPPORT</li>
            </nav>
        </header>
    )
}


export default Imagem;
