import React from 'react';
import {Link} from 'react-router-dom';

import './firstPages.css';

const FirstPages = () => {
    return (
        <div className="firstPages__wrapper">
            <img className="firstPages__img" src="../../../assets/img/doctor.png" />
            <div className="firstPages__content-wrapper">
                <Link to="/register" className="firstPages__btn">Зарегистрироваться</Link>
                <h1 className="firstPages__text">ИЛИ</h1>
                <Link to="/login" className="firstPages__btn">Войти</Link>
            </div>
        </div>
    )
}

export default FirstPages; 