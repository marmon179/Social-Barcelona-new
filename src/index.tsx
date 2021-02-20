import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Sascha'},
    {id: 2, name: 'Maksim'},
    {id: 3, name: 'Katia'},
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi!'},
    {id: 3, message: 'hello'},
]


ReactDOM.render(
    <React.StrictMode>
        <App messages={messages} dialogs={dialogs}/>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
