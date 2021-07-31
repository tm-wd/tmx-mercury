import React from 'react';
import ListState from './ListState';
import '../App.scss';
import { Route, Switch } from 'react-router-dom';
import State from './State';

class Entry extends React.Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={ListState}
                    />
                    <Route
                        path="/estado/:estado"
                        component={State}
                    />
                </Switch>
            </div>
        );
    }
}

export default Entry;
