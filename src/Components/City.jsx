import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function City({ nome, mesorregiao }){

    useEffect(() => {
        ScrollReveal().reveal('.cards')
    },[])

    return(
        <div className="container">
            <div className="cards border border-primary alert alert-secondary" role="alert">
                <strong className="text-primary">{ nome }</strong> <sup className="text-muted">{ mesorregiao }</sup>
            </div>
        </div>
    )
}
export default City