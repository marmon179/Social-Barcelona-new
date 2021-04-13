import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

