import React, { Suspense, lazy } from 'react';
import { RequestService } from '../service/RequestAPI';
import { Loading, Warning } from './Feedback';

const Cards = lazy(() => import('./Cards'));
const Search = lazy(() => import('./Search'));
const RenderResult = lazy(() => import('./Render'));

interface ListStateProps {
    dataList: string[];
}
interface MyState {
    amount: any | any[];
}

class ListState extends React.Component<
    ListStateProps,
    MyState
> {
    dataList: JSX.Element[];
    constructor(props: any) {
        super(props);
        this.searchAction = this.searchAction.bind(this);
        this.dataList = [];
        this.state = { amount: <Loading /> };
    }

    componentDidMount() {
        RequestService((res: any) => {
            res.data.sort((a: any, b: any) =>
                a.nome < b.nome
                    ? -1
                    : a.nome > b.nome
                    ? 1
                    : 0
            );
            res.data.forEach((el: any, idx: number) => {
                this.dataList.push(
                    <Cards
                        key={idx}
                        nome={el.nome}
                        sigla={el.sigla}
                        regiao={el.regiao.nome}
                        link={() => el}
                    />
                );
            });
            this.setState({ amount: this.dataList });
        });
    }

    searchAction(e: any) {
        RequestService((list: any) => {
            this.dataList = [];
            list.data = list.data.filter(
                (el: any) =>
                    el.nome
                        .toLowerCase()
                        .indexOf(
                            e.target.value.toLowerCase()
                        ) !== -1
            );
            list.data.sort((a: any, b: any) =>
                a.nome < b.nome
                    ? -1
                    : a.nome > b.nome
                    ? 1
                    : 0
            );

            list.data.forEach((el: any, idx: number) => {
                let dataMount = (
                    <Cards
                        key={idx}
                        nome={el.nome}
                        sigla={el.sigla}
                        regiao={el.regiao.nome}
                        link={() => el}
                    />
                );
                this.dataList.push(dataMount);
            });

            this.setState({ amount: this.dataList });
        });
    }
    render() {
        const mount =
            this.state.amount.length <= 0 ? (
                <Warning />
            ) : (
                this.state.amount
            );
        return (
            <Suspense fallback={<Loading />}>
                <>
                    <h1 className="py-3">
                        Estados do Brasil
                    </h1>
                    <Search search={this.searchAction} />
                    <RenderResult>{mount}</RenderResult>
                </>
            </Suspense>
        );
    }
}

export default ListState;
