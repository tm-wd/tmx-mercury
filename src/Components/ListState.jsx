import React from 'react';
import RequestAPI from '../service/RequestAPI';
import Cards from './Cards';
import Loading from './Loading';
import Search from './Search';
import City from './City';
import listing from '../model/listing';

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
                return this.setState({
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
                return this.setState({
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
                return this.setState({
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
                <div className="row">
                    {this.state.amount}                    
                </div>
            </>
        )
    }
}

export default ListState;