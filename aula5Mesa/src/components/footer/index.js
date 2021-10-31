import './style.css';

function App(props){
    return(
        <footer id="footer">
            <div>
                <ul>
                    <li>{props.name}</li>
                </ul>
            </div>
        </footer>
    )

}

function Footer(){
    return(
        <App name="MOJANG, GAMES EDUU 2009-2021">
        </App>
    )
}

export default Footer;