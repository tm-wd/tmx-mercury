import React, { lazy } from 'react';
import '../App.scss';
const Router = lazy(() => import('./Router'));

class Entry extends React.Component {
    render() {
        return (
            <div className="container">
                <Router />
            </div>
        );
    }
}

export default Entry;
