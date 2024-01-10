import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './healthy_body.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './state/store';

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    ,
document.getElementById("root")
);

