import React, { lazy, useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Loading } from './Feedback';
const City = lazy(() => import('./City'));

import {
    RequestAPI,
    RequestService,
} from '../service/RequestAPI';

const State = () => {

    const [dataState, setDataStates] = useState<null>(null)
    const dataList: any = []

    const { estado } = useParams()
    
    useEffect(() => {
        RequestService((res: any) => {
            res.data.forEach((el: any, idx: number) =>
                dataList.push(
                    <City
                        key={idx}
                        nome={el.nome}
                        mesorregiao={el.microrregiao.nome}
                    />
                )
            );
            setDataStates(dataList);
        }, `${RequestAPI}/${estado}/municipios`);
    }, [ estado ])

    return (
        <>
            <h1 className="mt-3">
                Muncípios do {estado?.toUpperCase()}
            </h1>
            <Link to="/" className="btn btn-link mb-3">
                &laquo;&nbsp;Voltar para os estados
            </Link>
            { dataState || <Loading /> }
        </>
    );
}

export default State;
