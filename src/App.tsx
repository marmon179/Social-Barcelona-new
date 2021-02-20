import React from 'react';
import s from './App.module.css'
import Header from './components/./Header/Header';
import Navbar from './components/./Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {state} from './index';


function App() {
    let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages
    let dialogsData = state.profilePage.dialogsData
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile'} render={() => <Profile dialogsData={dialogsData}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
