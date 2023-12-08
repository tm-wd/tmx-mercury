import React from 'react';
import { Warning, Loading } from './Feedback';
import { render } from '@testing-library/react';

test('Should render component <Feedback/>', async () => {
    const { getByText } = render(
        <>
            <Loading />
            <Warning />
        </>
    );
    const loading = getByText('Baixando os dados...');
    expect(loading).toBeTruthy();

    const warning = getByText('Nenhum dado coincide com a sua busca...');
    expect(warning).toBeTruthy();
});
