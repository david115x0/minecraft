import './style.css';

const Comprar = (props) => {
    return (
        <section id="banner">
            <h1>BEM-VINDO AO MINECRAFT</h1>
            {props.children}
            <button>{props.comprar}</button>
        </section>
    )
}

function Banner() {
    return (
        <Comprar comprar="OBTER MINECRAFT">
            <p>Com novos jogos, novas atualizações e novas maneiras de jogar, junta-te a uma das maiores comunidades no mundo do gaming e começa a criar hoje</p>
        </Comprar>
    )
}

export default Banner;
