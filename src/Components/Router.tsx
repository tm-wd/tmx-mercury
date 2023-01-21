import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListState from './ListStates';
import { State } from './State';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ListState />} />
            <Route path="/estado/:estado" element={<State />} />
        </Routes>
    );
};

export { Router as default };
