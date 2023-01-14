import React, { lazy } from 'react';
const Router = lazy(() => import('../Router'));

class Entry extends React.Component {
    render() {
        return (
            <section className="container">
                <Router />
            </section>
        );
    }
}

export { Entry };
