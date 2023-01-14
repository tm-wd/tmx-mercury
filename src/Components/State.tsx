import React, { lazy, useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Loading } from './Feedback';
const City = lazy(() => import('./City'));

import { instanceAPI } from '../service/RequestAPI';

const State = () => {
    const [dataState, setDataStates] = useState<null>(null);
    const { estado } = useParams();

    useEffect(() => {
        (async () => {
            const { data } = await instanceAPI.get(`estados/${estado}/municipios`)
            setDataStates(data.map((info: any) => <City key={info.id} nome={info.nome} mesorregiao={info.microrregiao.nome} />))
        })()
    }, [estado]);

    return (
        <>
            <h1 className="mt-3"> Muncípios do {estado?.toUpperCase()} </h1>
            <Link to="/" className="btn btn-link mb-3"> &laquo;&nbsp;Voltar para os estados </Link>
            {dataState || <Loading />}
        </>
    );
};

export default State;
