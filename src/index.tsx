import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/state/state';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}

                 addPost={store.addPost.bind(store)}

                 updateNewPostText={store.updateNewPostText.bind(store)}
                 addPostDialog={store.addPostDialog.bind(store)}
                 updateNewPostTextDialogs={store.updateNewPostTextDialogs.bind(store)}/>,
        </React.StrictMode>,
        document.getElementById('root')
    );


    reportWebVitals();
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)