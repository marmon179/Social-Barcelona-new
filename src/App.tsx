import React from 'react';
import s from './App.module.css'
import Header from './components/./Header/Header';
import Navbar from './components/./Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';

type PropsType = {

}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile'} render={() => <Profile />}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
