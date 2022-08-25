import React, {useContext} from 'react';
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault(event)
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="Введите логин"/>
                <Input type="password" placeholder="Введите пароль"/>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;