function City({ nome, mesorregiao }){
    return(
        <div className="municipios border border-primary alert alert-secondary" role="alert">
            <strong className="text-primary">{ nome }</strong> <sup className="text-muted">{ mesorregiao }</sup>
        </div>
    )
}
export default City