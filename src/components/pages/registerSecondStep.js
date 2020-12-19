import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './register.css';

import getRegisteration from '../../utils/getRegisteration';

const RegisterSecondStep = ({ dataFromFirstStep, history, getRegisteration }) => {

  const [emailValue, ChangeEmailValue] = useState('');
  const [passwordValue, ChangePasswordValue] = useState('');
  const [passwordRepeatedValue, changePasswordRepeatedValue] = useState('');

  return (
    <div className=" intro__register">
      <div className="register__form-wrap">
        <label className="register__form-text" htmlFor="register__email">Почта</label>
        <input className="register__form-input" type="email" required placeholder="exemple@gail.com" id="register__email" onChange={(e) => ChangeEmailValue(e.target.value)} />
      </div>
      <div className="register__form-wrap">
        <label className="register__form-text" htmlFor="register__password">Пароль</label>
        <input className="register__form-input" type="password" required placeholder="*******" id="register__password" onChange={(e) => ChangePasswordValue(e.target.value)} />
      </div>
      <div className="register__form-wrap">
        <label className="register__form-text" htmlFor="register__password-repeated">Повторите пароль</label>
        <input className="register__form-input" type="password" required placeholder="******" id="register__password-repeated" onChange={(e) => changePasswordRepeatedValue(e.target.value)} />
      </div>
      
      {
        (() => {
          if (emailValue != '' && passwordValue != '' && passwordRepeatedValue != '' && passwordValue === passwordRepeatedValue) {
            return (
              <button className="register__link register__link-active" onClick={() => (async () => {
                let data = {
                  ...dataFromFirstStep,
                  login: emailValue,
                  password: passwordValue
                };
      
                let res = await getRegisteration(data);
                
                if (res) {
                  history.push('/timetable');
                }
              })()}>Зарегистрироваться</button>
            )
          } else {
            return <button className="register__link">Зарегистрироваться</button>
          }
        })()
      }

    </div>
  )
}

const mapDispatchToProps = {
  getRegisteration
}

export default connect(null, mapDispatchToProps)(withRouter(RegisterSecondStep));