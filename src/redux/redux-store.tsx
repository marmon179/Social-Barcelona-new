import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {ProfileActionsTypes} from './profile-reducer';
import dialogsReducer, {DialogsActionsTypes} from './dialogs-reducer';
import usersReducer, {UserActionType} from './users-reducer';
import authReducer, {AuthActionType} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
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

export type AppActionType = DialogsActionsTypes | ProfileActionsTypes | AuthActionType |UserActionType

export type AppThunk= ThunkAction<void, AppStateType, unknown, AppActionType>




