import React from 'react';
import { act, render } from '@testing-library/react';

import { ListState } from './ListState';

test('Should render component <StateList />', async () => {
    await act(async () => {
        render(<ListState />);
    });
});
