import React from 'react';
import RequestAPI from './RequestAPI';
import Cards from './Cards';
import Loading from './Loading';
import Search from './Search';
import City from './City';

class ListState extends React.Component{

    constructor(props){
        super(props)
        this.searchAction = this.searchAction.bind(this);
        this.linkReference = this.linkReference.bind(this);
        this.dataList = <Loading />;
        this.state = { amount: [] }
    }

    componentDidMount(){
        this.dataList = []
        fetch(RequestAPI)
        .then(res => res.json())
        .then(list => {
            list.sort((a, b) =>  a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0  );
            list.forEach((el, idx) => {
                let dataMount = <Cards key={idx} nome={el.nome} sigla={el.sigla} regiao={el.regiao.nome} link={() => this.linkReference(el.sigla)} />
                this.setState({
                    amount: this.dataList.push(dataMount),
                })
            });
        })
    }

    searchAction(e){
        fetch(RequestAPI)
        .then(res => res.json())
        .then(list => {
            let res = list.filter((el) => el.nome.indexOf(e.target.value) !== -1 );
            this.dataList = [];
            res.forEach((el, idx) => {
                let dataMount = <Cards key={idx} nome={el.nome} sigla={el.sigla} regiao={el.regiao.nome} link={() => this.linkReference(el.sigla)} />
                this.setState({
                    amount: this.dataList.push(dataMount),
                })
            });
        })
    }

    linkReference(el){
        this.dataList = []
        fetch(`${RequestAPI}/${el}/municipios`)
        .then(res => res.json())
        .then(list => {
            list.sort((a, b) =>  a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0  );
            list.forEach((el, idx) => {
                let dataMount = <City key={idx} nome={el.nome} mesorregiao={el.microrregiao.nome} />
                this.setState({
                    amount: this.dataList.push(dataMount),
                })
            });
        })
    }

    render(){
        return(
            <>
                <Search search={this.searchAction} />
                <div className="row">
                    {this.dataList}                    
                </div>
            </>
        )
    }
}

export default ListState;