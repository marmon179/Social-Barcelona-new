import React from 'react';

type LoginPropsType = {}

const LoginForm = (props: LoginPropsType) => {
    return (
        <form>
            <div>
                <input placeholder={'Login'}/>
            </div>
            <div>
                <input placeholder={'Password'}/>
            </div>
            <div>
                <input type={'checkbox'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const Login = (props: LoginPropsType) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
};

export default Login;