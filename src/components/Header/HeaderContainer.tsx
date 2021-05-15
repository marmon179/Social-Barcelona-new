import React from 'react';
import {Header} from './Header';
import {connect, ConnectedProps} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

const connector = connect(mapStateToProps, {getAuthUserData, logout})

export default connector(HeaderContainer);
//types
export type HeaderPropsType = ConnectedProps<typeof connector>
type MapStatePropsType = {
    isAuth: boolean
    login: null
}
