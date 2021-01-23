import React, { Suspense, lazy } from 'react';
import RequestAPI from '../service/RequestAPI';
import { Loading, Warning } from './Feedback';
import City from './City';
import listing from '../model/listing';

const Cards = lazy( () => import('./Cards') )
const Search = lazy( () => import('./Search') )
const RenderResult = lazy( () => import('./Render') )
class ListState extends React.Component{

    constructor(props){
        super(props)
        this.searchAction = this.searchAction.bind(this);
        this.linkReference = this.linkReference.bind(this);
        this.dataList = [];
        this.state = { amount: <Loading /> }
    }

    componentDidMount(){
        listing(
            RequestAPI,
            this.dataList = [], 
            (el, idx) => <Cards key={idx} nome={el.nome} sigla={el.sigla} regiao={el.regiao.nome} link={() => this.linkReference(el.sigla)} />,
            () => {
                this.setState({
                    amount: this.dataList,
                })
            }
        )    
    }

    linkReference(el){
        listing(
            `${RequestAPI}/${el}/municipios`,
            this.dataList = [], 
            (el, idx) => <City key={idx} nome={el.nome} mesorregiao={el.microrregiao.nome} />,
            () => {
                this.setState({
                    amount: this.dataList,
                })
            }
        )
    }

    searchAction(e){
        listing(
            RequestAPI,
            this.dataList = [], 
            (el, idx) => <Cards key={idx} nome={el.nome} sigla={el.sigla} regiao={el.regiao.nome} link={() => this.linkReference(el.sigla)} />,
            () => {
                this.setState({
                    amount: this.dataList,
                })
            },
            e,
        )    
    }


    render(){
        const mount = (this.state.amount.length <= 0 ? <Warning /> : this.state.amount)
        return(
            <Suspense fallback={ <Loading /> } >
                <>
                    <Search search={this.searchAction} />
                    <RenderResult> 
                        { mount } 
                    </RenderResult>
                </>
            </Suspense>
        )
    }
}

export default ListState;