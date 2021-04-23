import React, { Suspense, lazy } from 'react';
import RequestAPI from '../service/RequestAPI';
import { Loading, Warning } from './Feedback';
import axios from 'axios';

const Cards = lazy( () => import('./Cards') )
const Search = lazy( () => import('./Search') )
const RenderResult = lazy( () => import('./Render') )
class ListState extends React.Component{

    constructor(props){
        super(props)
        this.searchAction = this.searchAction.bind(this);
        this.dataList = [];
        this.state = { amount: <Loading /> }
    }

    componentDidMount(){
        axios.get(RequestAPI)
            .then(res => {
                res.data.sort((a, b) =>  a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0  );
                res.data.forEach((el, idx) => {
                    this.dataList.push(
                        <Cards 
                            key={idx} 
                            nome={el.nome}
                            sigla={el.sigla} 
                            regiao={el.regiao.nome} 
                        />
                    )
                });
                this.setState({ amount: this.dataList })
            }) 
    }

    searchAction(e){
        axios.get(RequestAPI)
        .then(list => {
            this.dataList = [];
            list.data = list.data.filter((el) => el.nome.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 );
            list.data.sort((a, b) =>  a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0  );

            list.data.forEach((el, idx) => {
                let dataMount = <Cards 
                        key={idx} 
                        nome={el.nome}
                        sigla={el.sigla} 
                        regiao={el.regiao.nome} 
                    />
                this.dataList.push(dataMount);
            });

            this.setState({ amount: this.dataList })
            
        })
    }


    render(){
        const mount = (this.state.amount.length <= 0 ? <Warning /> : this.state.amount)
        return(
            <Suspense fallback={ <Loading /> } >
                <>
                    <h1 className="py-3">Estados do Brasil</h1>
                    <Search search={this.searchAction} />
                    <RenderResult>{ mount }</RenderResult>
                </>
            </Suspense>
        )
    }
}

export default ListState;