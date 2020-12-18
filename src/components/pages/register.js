import React from 'react';
import {Link} from 'react-router-dom';

import './register.css';

const Register = () => {
    return (
        <div className=" intro__register">
            <Link to="/" className="register__return-btn" >
                <img src="../../../assets/svg/returnBtnLeft.svg" />
            </Link>
            <div className="register__form-wrap">
                <label className="register__form-text" htmlFor="register__email">Фамилия</label>
                <input className="register__form-input" type="email" required placeholder="Иванов" id="register__email" />
            </div>
            <div className="register__form-wrap">
                <label className="register__form-text" htmlFor="register__password">Имя</label>
                <input className="register__form-input" type="password" required placeholder="Иван" id="register__password" />
            </div>
            <div className="register__form-wrap">
                <label className="register__form-text" htmlFor="register__password-repeated">Отчество</label>
                <input className="register__form-input" type="password" required placeholder="Иванович" id="register__password-repeated" />
            </div>

            <div className="register__wrap-gender">
                <div className="form-wrap">
                    <label className="form-label">
                    <input type="radio" className="form-input" name="form-gender" />
                    <span className="form--radio-btn" />
                    <span className="gender__text" >Male</span>
                    </label>
                </div>
                <div className="form-wrap">
                    <label className="form-label">
                    <input type="radio" className="form-input" name="form-gender" />
                    <span className="form--radio-btn" />
                    <span className="gender__text" >Female</span>
                    </label>
                </div>

            </div>
            <Link to="/priem" className="register__link">Продолжить</Link>
        </div>
    )
}

export default Register;