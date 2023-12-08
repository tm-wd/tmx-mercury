import React from 'react';
import { RenderResult } from './Render';
import { render } from '@testing-library/react';

test('Should render component <State     />', async () => {
    const { getByTestId } = render(
        <RenderResult>
            <div></div>
        </RenderResult>
    );
    const element = getByTestId('render-result');
    expect(element).toBeTruthy();
});
