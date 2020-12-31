function Cards(props){
    const {nome, sigla, regiao, link} = props;
    return(
        <div className="col-lg-4 mb-3">
            <div className="card ">
                <div className="card-header"><strong>{nome}</strong> | <span className="text-primary">{sigla}</span></div>
                <div className="card-body text-secondary">

                    <p className="card-text">Região <strong> {regiao} </strong> do Brasil.</p>
                    <button className="btn btn-primary" onClick={link}>Saiba mais sobre {sigla}</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;