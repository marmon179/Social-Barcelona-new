import React from 'react';
import s from './App.module.css'
import Header from './components/./Header/Header';
import Navbar from './components/./Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {StoreType} from './redux/state/state';

type PropsType = {
    store: StoreType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addPostDialog: () => void
    updateNewPostTextDialogs: (newText: string) => void

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
                           render={() => <Profile dialogsData={dialogsData} newPostText={newPostText}
                                                  addPost={props.addPost}
                                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={dialogs} messages={messages}
                                                  messageForNewPostDialog={messageForNewPostDialog}
                                                  addPostDialog={props.addPostDialog}
                                                  updateNewPostTextDialogs={props.updateNewPostTextDialogs}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
