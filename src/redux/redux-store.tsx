import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionsTypes, profileReducer} from './profile-reducer';
import {DialogsActionsTypes, dialogsReducer} from './dialogs-reducer';
import {UserActionType, usersReducer} from './users-reducer';
import {AuthActionType, authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer, AppReducerActionType} from './app-reducer';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionType = DialogsActionsTypes | ProfileActionsTypes | AuthActionType | UserActionType | AppReducerActionType
export type AppThunk = ThunkAction<void, AppStateType, unknown, AppActionType>




