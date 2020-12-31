function City(props){
    const { nome, mesorregiao } = props;
    return(
        <div className="container">
            <div className="border border-primary alert alert-secondary" role="alert">
                <strong className="text-primary">{ nome }</strong> <sup className="text-muted">{ mesorregiao }</sup>
            </div>
        </div>
    )
}
export default City