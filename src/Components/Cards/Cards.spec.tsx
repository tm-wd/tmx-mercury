import React from 'react';
import { Cards } from './Cards';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

test('Should render component <Cards />', async () => {
    const { getByTestId } = render(
        <Router>
            <Cards
                nome={''}
                sigla={''}
                regiao={''}
                link={function (): void {}}
            />
        </Router>
    );
    const element = getByTestId('cards');
    expect(element).toBeTruthy();
});
