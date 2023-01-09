import React from 'react';
import { Entry } from './Entry';
import { act, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

test('Should render component <Entry />', async () => {
    await act(async () => {
        render(
            <Router>
                <Entry />
            </Router>
        );
    });
});
