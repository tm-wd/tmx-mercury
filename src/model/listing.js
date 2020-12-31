const listing = (APIRef, arrRef, cardRef, stateRef, filterRef) => {
    fetch(APIRef)
    .then(res => res.json())
    .then(list => {

        if(filterRef) list = list.filter((el) => el.nome.indexOf(filterRef.target.value) !== -1 ); 

        list.sort((a, b) =>  a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0  );
        list.forEach((el, idx) => {
            let dataMount = cardRef(el, idx);
            arrRef.push(dataMount);
        });

        return stateRef();
    })
}

export default listing;