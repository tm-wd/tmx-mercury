import React from 'react';
declare interface RenderResultProps {
    children: any;
}

const RenderResult: React.FC<RenderResultProps> = ({ children }) => (
    <div className="row" data-testid="render-result">
        {children}
    </div>
);

export { RenderResult };
