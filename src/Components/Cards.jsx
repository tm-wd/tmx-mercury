import { useEffect } from "react";
import ScrollReveal from 'scrollreveal'

function Cards({nome, sigla, regiao, link}){
    
    useEffect(() => {
        ScrollReveal().reveal('.cards');
    }, [])

    return(
        <div className="col-lg-4 mb-3 cards">
            <div className="card ">
                <div className="card-header"><strong>{nome}</strong> | <span className="text-primary">{sigla}</span></div>
                <div className="card-body text-secondary">

                    <p className="card-text">Região <strong> {regiao} </strong> do Brasil.</p>
                    <button className="btn btn-primary" onClick={link}>Cidades do {sigla}</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;