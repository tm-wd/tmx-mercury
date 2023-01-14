import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import { Loading } from './Components/Feedback';
import { BrowserRouter } from 'react-router-dom';

const Entry = lazy(() => import('./Components/Entry'));

const container: HTMLElement | any =
    document.getElementById('root');

ReactDOM.createRoot(container).render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<Loading />}>
                <Entry />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);
