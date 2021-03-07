import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RootStateType} from './redux/state/state';


const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App />,
        </React.StrictMode>,
        document.getElementById('root')
    );


    reportWebVitals();
}

export default rerenderEntireTree