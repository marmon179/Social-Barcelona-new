import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';


type MapStatePropsType = {
    isAuth: boolean
    login: null
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}


type AuthPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthPropsType> {
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

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);