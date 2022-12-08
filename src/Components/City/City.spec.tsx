import React from 'react';
import { City } from './City';
import { render } from '@testing-library/react';

test('Should render component <City />', async () => {
    const { getByTestId } = render(
        <City nome={''} mesorregiao={undefined} />
    );
    const element = getByTestId('city');
    expect(element).toBeTruthy();
});
