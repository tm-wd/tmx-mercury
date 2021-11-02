import { MouseEventHandler, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import React from 'react';
import PropTypes from 'prop-types';

interface CardsProps {
    nome: string;
    sigla: string;
    regiao: string;
    link: MouseEventHandler<HTMLAnchorElement>;
}

const Cards: React.FC<CardsProps> = ({
    nome,
    sigla,
    regiao,
    link,
}): JSX.Element => {
    useEffect(() => ScrollReveal().reveal('.cards'), []);

    return (
        <div className="col-lg-4 mb-3 cards">
            <div className="card ">
                <div className="card-header">
                    <strong>{nome}</strong> |{' '}
                    <span className="text-primary">
                        {sigla}
                    </span>
                </div>
                <div className="card-body text-secondary">
                    <p className="card-text">
                        Região <strong> {regiao} </strong>{' '}
                        do Brasil.
                    </p>
                    <Link
                        to={`/estado/${sigla.toLowerCase()}`}
                        className="btn btn-primary"
                        onClick={link}
                    >
                        Cidades do {sigla}
                    </Link>
                </div>
            </div>
        </div>
    );
};
Cards.propTypes = {
    nome: PropTypes.string.isRequired,
    sigla: PropTypes.string.isRequired,
    regiao: PropTypes.string.isRequired,
    link: PropTypes.any.isRequired,
};

export default Cards;
