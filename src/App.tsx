import React from 'react';
import s from './App.module.css'
import Header from './components/./Header/Header';
import Navbar from './components/./Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';


function App() {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
