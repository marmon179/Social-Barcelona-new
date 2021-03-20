import React from 'react';
import {CombinedState, Store} from 'redux';
import {DialogPageType} from './redux/dialogs-reducer';
import {ActionsTypes, ProfilePageType} from './redux/state/store';

const StoreContext = React.createContext({} as Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogPageType; }>, ActionsTypes>)

export type ProviderType = {
    store:Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogPageType; }>, ActionsTypes>
    children:React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContext