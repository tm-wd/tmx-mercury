import React from 'react';

const Loading = (): JSX.Element => {
    return (
        <div className="container">
            <div
                className="col-xs-12 container alert alert-info"
                role="alert"
            >
                Baixando os dados..
            </div>
        </div>
    );
};

const Warning = (): JSX.Element => {
    return (
        <div className="container">
            <div
                className="col-xs-12 container alert alert-warning"
                role="alert"
            >
                Nenhum dado coincide com a sua busca...
            </div>
        </div>
    );
};

export { Loading, Warning };
