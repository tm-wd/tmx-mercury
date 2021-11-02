import React from 'react';
import PropTypes from 'prop-types';

declare interface RenderResultProps {
    children: any;
}

const RenderResult: React.FC<RenderResultProps> = ({
    children,
}) => <div className="row">{children}</div>;

RenderResult.propTypes = {
    children: PropTypes.node,
};

export default RenderResult;
