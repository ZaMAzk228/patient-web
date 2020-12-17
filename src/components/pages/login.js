import React from 'react';
import {Link} from 'react-router-dom';

import './login.css';

const Login = () => {
    return (
        <div className="login__wrapper">
            <div className="login__form-wrap">
                <label className="login__form-text" htmlFor="login__email" >Почта</label>
                <input className="login__form-input" type="email" required placeholder="example@mail.com" id="login__email" />
            </div>
            <div className="login__form-wrap">
                <label className="login__form-text" htmlFor="login__password">Пароль</label>
                <input className="login__form-input" type="password" required placeholder="********" id="login__password" />
            </div>
            <Link to="/priem" className="login__link">Войти</Link>
        </div>
    )
}

export default Login;