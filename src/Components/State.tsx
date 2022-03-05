import React, { lazy } from 'react';

import {
    Link,
    RouteComponentProps,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from './Feedback';
const City = lazy(() => import('./City'));

import {
    RequestAPI,
    RequestService,
} from '../service/RequestAPI';

interface MyProps {
    datas: JSX.Element[];
    estado: string | React.ReactNode;
}

interface MyState {
    datas: JSX.Element | JSX.Element[];
}

class State extends React.Component<
    MyProps & RouteComponentProps,
    MyState
> {
    estado: string | any;
    dataList: JSX.Element[];
    param: any;
    static propTypes: {
        match: PropTypes.Requireable<string>;
    };
    constructor(props: any) {
        super(props);
        this.param = this.props;
        this.estado = this.param.match.params.estado;
        this.state = { datas: <Loading /> };
        this.dataList = [];
    }

    componentDidMount() {
        RequestService((res: any) => {
            res.data.forEach((el: any, idx: number) =>
                this.dataList.push(
                    <City
                        key={idx}
                        nome={el.nome}
                        mesorregiao={el.microrregiao.nome}
                    />
                )
            );
            this.setState({ datas: this.dataList });
        }, `${RequestAPI}/${this.estado}/municipios`);
    }

    render() {
        return (
            <>
                <h1 className="mt-3">
                    Muncípios do {this.estado.toUpperCase()}
                </h1>
                <Link to="/" className="btn btn-link mb-3">
                    &laquo;&nbsp;Voltar para os estados
                </Link>

                <section>{this.state.datas}</section>
            </>
        );
    }
}

State.propTypes = {
    match: PropTypes.string,
};

export default State;
