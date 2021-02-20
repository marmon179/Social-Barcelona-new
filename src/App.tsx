import React from 'react';
import s from './App.module.css'
import Header from './components/./Header/Header';
import Navbar from './components/./Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs, {DialogPageType} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


function App(props: DialogPageType) {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
