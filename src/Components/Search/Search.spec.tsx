import React from 'react';
import { Search } from './Search';
import { render } from '@testing-library/react';

test('Should render component <Search />', async () => {
    const { getByPlaceholderText } = render(<Search search={undefined} />);
    const element = getByPlaceholderText('Digite o nome de um estado aqui...');
    expect(element).toBeTruthy();
});
