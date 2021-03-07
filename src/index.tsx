import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RootStateType, state, subscribe} from './redux/state/state';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />,
        </React.StrictMode>,
        document.getElementById('root')
    );


    reportWebVitals();
}

rerenderEntireTree();

subscribe(rerenderEntireTree)