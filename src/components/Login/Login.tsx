import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect, ConnectedProps} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import style from './Login.module.scss'
import {getIsAuth} from '../../redux/auth-selectors';


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}

            <div>
                <button className={style.button}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/users'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: getIsAuth(state)
})
const connector = connect(mapStateToProps, {login})
export default connector(Login);
//types
type LoginPropsType = ConnectedProps<typeof connector>
type FormDataType = {
    email: string
    password: number
    rememberMe: boolean
}