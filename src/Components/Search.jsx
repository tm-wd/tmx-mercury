function Search({ search }){
    return(
        <input type="text" onKeyUp={ search } className="form-control form-control-lg mb-4" placeholder="Procure o seu estado aqui..." />
    )
}

export default Search;