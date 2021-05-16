import React from 'react';
import {InjectedFormProps, Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect, ConnectedProps} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import style from '../common/FormsControls/FormsControls.module.css'


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/>
            </div>

            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button>Login</button>
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
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
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