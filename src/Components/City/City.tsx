import React, { useEffect } from 'react';

interface CityProps {
    nome: string;
    mesorregiao: string | undefined;
}

const City: React.FC<CityProps> = ({ nome, mesorregiao }): JSX.Element => {
    return (
        <div className="municipios border border-primary alert alert-secondary" data-testid="city">
            <strong className="text-primary">{nome}</strong> <sup className="text-muted">{mesorregiao}</sup>
        </div>
    );
};

export { City };
