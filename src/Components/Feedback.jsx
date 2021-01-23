const Loading = () => {
    return(
        <div className="container">
            <div className="col-xs-12 container alert alert-info" role="alert">
            Baixando os dados..
            </div>
        </div>
    )
}

const Warning = () => {
    return(
        <div className="container">
            <div className="col-xs-12 container alert alert-warning" role="alert">
            Nenhum dado coincide com a sua busca...
            </div>
        </div>
    )
}

export{ Loading, Warning }