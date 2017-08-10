import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render((
        <BrowserRouter>
            <Header />
        </BrowserRouter>),
    document.getElementById('root')
);

registerServiceWorker();
