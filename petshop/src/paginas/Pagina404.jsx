import React from "react";
import Imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

const Pagina404 = () => {
    return(
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={Imagem} alt="Ilustracção doguito pagina não encotrada" />
            <p className="naoencontrado-texto">Ops, Pagina não encotrada!</p>
        </main>
    )
}

export default Pagina404