import React from 'react';
import s from './App.module.css'
import Header from './components/./Header/Header';
import Navbar from './components/./Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, ProfilePageType} from './redux/state/store';
import {CombinedState, Store} from 'redux';
import {DialogPageType} from './redux/dialogs-reducer';

type PropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogPageType; }>, ActionsTypes>
    // dispatch: (action: ActionsTypes) => void

}

function App(props: PropsType) {
    const state = props.store.getState()

    const dialogs = state.dialogsPage.dialogs
    const messages = state.dialogsPage.messages
    const messageForNewPostDialog = state.dialogsPage.messageForNewPostDialog
    const dialogsData = state.profilePage.dialogsData
    const newPostText = state.profilePage.messageForNewPost
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile'}
                           render={() => <Profile  newPostText={newPostText}
                                                   store={props.store}/>}/>
                    {/*<Route path={'/dialogs'}*/}
                    {/*       render={() => <Dialogs dialogs={dialogs}*/}
                    {/*                              messages={messages}*/}
                    {/*                              dispatch={props.dispatch}*/}
                    {/*                              messageForNewPostDialog={messageForNewPostDialog}*/}
                    {/*       />}/>*/}
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
