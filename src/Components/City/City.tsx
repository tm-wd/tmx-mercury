import React from 'react';
import { ICity } from '../../types';

const City: React.FC<ICity> = ({ nome, mesorregiao }): JSX.Element => {
    return (
        <div className="municipios border border-primary alert alert-secondary" data-testid="city">
            <strong className="text-primary">{nome}</strong> <sup className="text-muted">{mesorregiao}</sup>
        </div>
    );
};

export { City };
