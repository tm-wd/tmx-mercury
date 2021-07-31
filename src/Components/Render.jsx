import React from 'react';
import PropTypes from 'prop-types';

const RenderResult = ({ children }) => {
    return <div className="row">{children}</div>;
};

RenderResult.propTypes = {
    children: PropTypes.string,
};

export default RenderResult;
