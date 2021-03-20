import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/redux-store';
import StoreContext, {Provider} from './StoreContext';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />,
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );


    reportWebVitals();
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)