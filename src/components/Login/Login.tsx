import React from 'react';
import {InjectedFormProps, Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect, ConnectedProps} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import style from './Login.module.scss'
import {getIsAuth} from '../../redux/auth-selectors';


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={Input} validate={[required]}
                       className={style.superInput}
                />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input} validate={[required]}
                       className={style.superInput}
                />
            </div>
            <div>
                <Field className={style.checkbox} type={'checkbox'} name={'rememberMe'} component={Input}/>
            </div>

            {props.error && <div className={style.formSummaryError}>
                {props.error}
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