import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const ListState = lazy(() => import('./ListState'));
const State = lazy(() => import('./State'));

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={ListState} />
            <Route
                path="/estado/:estado"
                component={State}
            />
        </Switch>
    );
};

export { Router as default };
