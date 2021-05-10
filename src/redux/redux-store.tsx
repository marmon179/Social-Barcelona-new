import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {addPostAC, setStatus, setUserProfile} from './profile-reducer';
import dialogsReducer, {addPostDialogAC, DialogsActionsTypes} from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppActionType = DialogsActionsTypes

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof addPostDialogAC> |
    ReturnType<typeof setStatus>


