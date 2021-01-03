import React from 'react';
import RequestAPI from '../service/RequestAPI';
import Cards from './Cards';
import Loading from './Loading';
import Search from './Search';
import City from './City';
import listing from '../model/listing';
import RenderResult from './Render';

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
        return(
            <>
                <Search search={this.searchAction} />
                <RenderResult> {this.state.amount} </RenderResult>
            </>
        )
    }
}

export default ListState;