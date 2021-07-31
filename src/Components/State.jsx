import React from 'react';
import { Loading } from './Feedback';
import City from './City';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import RequestAPI from '../service/RequestAPI';

class State extends React.Component {
    constructor(props) {
        super(props);
        this.estado = this.props.match.params.estado;
        this.state = { datas: <Loading /> };
        this.dataList = [];
    }

    componentDidMount() {
        axios
            .get(`${RequestAPI}/${this.estado}/municipios`)
            .then(res => {
                res.data.forEach((el, idx) => {
                    this.dataList.push(
                        <City
                            key={idx}
                            nome={el.nome}
                            mesorregiao={
                                el.microrregiao.nome
                            }
                        />
                    );
                });
                this.setState({ datas: this.dataList });
            });
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
