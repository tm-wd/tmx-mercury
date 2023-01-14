import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

interface CityProps {
    nome: string;
    mesorregiao: string | undefined;
}

const City: React.FC<CityProps> = ({
    nome,
    mesorregiao,
}): JSX.Element => {
    useEffect(() => ScrollReveal().reveal('.municipios'), []);
    
    return (
        <div
            className="municipios border border-primary alert alert-secondary"
            data-testid="city"
        >
            <strong className="text-primary">{nome}</strong>{' '}
            <sup className="text-muted">{mesorregiao}</sup>
        </div>
    );
};

export { City };
