import React, { lazy } from 'react';
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
