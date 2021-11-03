import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import { Loading } from './Components/Feedback';
import { BrowserRouter } from 'react-router-dom';

const Entry = lazy(() => import('./Components/Entry'));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<Loading />}>
                <Entry />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
