import React from 'react';
import s from './App.module.css'
import Navbar from './components/./Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';


function App() {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
