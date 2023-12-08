import React from 'react';
import { State } from './State';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

test('Should render component <State     />', async () => {
    const { getByText } = render(
        <Router>
            <State />
        </Router>
    );
    const element = getByText('Muncípios do');
    expect(element).toBeTruthy();

    const link = getByText('Voltar para os estados');
    expect(link).toBeTruthy();
});
