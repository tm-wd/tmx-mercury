import axios from 'axios';

const listing = (APIRef, arrRef, cardRef, stateRef, filterRef) => {

    axios.get(APIRef)
    .then(resp => resp.data)
    .then(list => {
        
        if(filterRef) list = list.filter((el) => el.nome.toLowerCase().indexOf(filterRef.target.value.toLowerCase()) !== -1 );

        list.sort((a, b) =>  a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0  );

        list.forEach((el, idx) => {
            let dataMount = cardRef(el, idx);
            arrRef.push(dataMount);
        });

        return stateRef();    
        
    })
    .catch(error => console.log(error))
}

export default listing;