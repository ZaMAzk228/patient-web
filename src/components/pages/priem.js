import React from 'react';
import {Link} from 'react-router-dom';

import './register.css';

const Priem = () => {
    return (
        <div className=" intro__register">
            <div className="register__form-wrap">
                <label className="register__form-text" htmlFor="register__email">Почта</label>
                <input className="register__form-input" type="email" required placeholder="exemple@gail.com" id="register__email" />
            </div>
            <div className="register__form-wrap">
                <label className="register__form-text" htmlFor="register__password">Пароль</label>
                <input className="register__form-input" type="password" required placeholder="*******" id="register__password" />
            </div>
            <div className="register__form-wrap">
                <label className="register__form-text" htmlFor="register__password-repeated">Повторите пароль</label>
                <input className="register__form-input" type="password" required placeholder="******" id="register__password-repeated" />
            </div>
            <Link to="/priem" className="register__link">Зарегистрироваться</Link>
        </div>
    )
}

export default Priem;