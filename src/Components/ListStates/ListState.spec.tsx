import React from 'react';
import {
    act,
    render,
    screen,
} from '@testing-library/react';

import { ListState } from './ListState';

jest.useFakeTimers();

test('Should render component <StateList />', async () => {
    await act(async () => {
        render(<ListState dataList={[]} />);
    });
});
