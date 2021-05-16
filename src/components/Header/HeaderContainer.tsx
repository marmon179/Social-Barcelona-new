import React from 'react';
import {Header} from './Header';
import {connect, ConnectedProps} from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';


class HeaderContainer extends React.Component<HeaderPropsType> {


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

const connector = connect(mapStateToProps, {logout})

export default connector(HeaderContainer);
//types
export type HeaderPropsType = ConnectedProps<typeof connector>

