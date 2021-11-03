import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Router = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={lazy(() =>
                    import('./ListState')
                )}
            />
            <Route
                path="/estado/:estado"
                component={lazy(() => import('./State'))}
            />
        </Switch>
    );
};

export { Router as default };
