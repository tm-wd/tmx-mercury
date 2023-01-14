import React, {
    Suspense,
    lazy,
    useEffect,
    useState,
    SetStateAction,
} from 'react';
import { instanceAPI } from '../../service/RequestAPI';
import { Loading, Warning } from '../Feedback';

const Cards = lazy(() => import('../Cards'));
const Search = lazy(() => import('../Search'));
const RenderResult = lazy(() => import('../Render'));

const ListState = () => {
    const [data, setData] = useState<[]>([]);
    const [renderData, setRenderData] = useState<[] | any>(
        []
    );

    const getCards = (e: any) => (
        <Cards
            key={e.id}
            nome={e.nome}
            sigla={e.sigla}
            regiao={e.regiao.nome}
            link={() => e}
        />
    );

    useEffect(() => {
        (async () => {
            const { data } = await instanceAPI.get(
                'estados'
            );
            setData(data);
            data.sort(
                (  a: { nome: number }, b: { nome: number } ) =>
                    a.nome < b.nome  ? -1 : a.nome > b.nome 
                        ? 1 : 0
            );
            setRenderData(
                data.map((info: any) => getCards(info))
            );
        })();
    }, []);

    const searchAction = (e: any) => {
        const searchCards = data.filter((el: any) => {
            const search = new RegExp(e.target.value, 'gi');
            const input = el.nome;
            return search.test(input);
        });

        setRenderData(
            searchCards.map(info => getCards(info))
        );
    };

    return (
        <Suspense fallback={<Loading />}>
            <h1
                className="py-3"
                data-testid="title-list-state"
            >
                {' '}
                Estados do Brasil{' '}
            </h1>
            <Search search={searchAction} />
            <RenderResult>
                {!renderData.length ? (
                    <Warning />
                ) : (
                    renderData
                )}
            </RenderResult>
        </Suspense>
    );
};

export { ListState };
