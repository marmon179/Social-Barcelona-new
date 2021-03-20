import React from 'react';
import s from './App.module.css'
import Header from './components/./Header/Header';
import Navbar from './components/./Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, ProfilePageType} from './redux/state/store';
import {CombinedState, Store} from 'redux';
import {DialogPageType} from './redux/dialogs-reducer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type PropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogPageType; }>, ActionsTypes>

}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile'} render={() => <Profile store={props.store}/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
