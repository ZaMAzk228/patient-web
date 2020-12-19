import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './login.css';

import checkAuthorization from '../../utils/checkAuthorization';

const Login = ({ checkAuthorization, history }) => {
  
  const [emailValue, ChangeEmailValue] = useState('');
  const [passwordValue, ChangePasswordValue] = useState('');

  return (
    <div className="login__wrapper">
      <Link to="/" className="login__return-btn" >
        <img src="../../../assets/svg/returnBtnLeft.svg" />
      </Link>
      <div className="login__form-wrap">
        <label className="login__form-text" htmlFor="login__email" >Почта</label>
        <input className="login__form-input" type="email" required placeholder="example@mail.com" id="login__email" onChange={(e) => ChangeEmailValue(e.target.value)} />
      </div>
      <div className="login__form-wrap">
        <label className="login__form-text" htmlFor="login__password">Пароль</label>
        <input className="login__form-input" type="password" required placeholder="********" id="login__password" onChange={(e) => ChangePasswordValue(e.target.value)} />
      </div>

      {
        (() => {
          if (emailValue != '' && passwordValue != '') {
            return (
              <button className="login__link login__link-active" onClick={() => {
                (async ()  => {
                  let res = await checkAuthorization(emailValue, passwordValue);
    
                  if (res.ans) {
                    if (res.type) {
                      history.push('/doctorsTimetable');
                    } else {
                      history.push('/timetable');
                    }
                  } else {
                    history.push('/');
                  }
                })()
              }}>Войти</button>
            )
          } else {
            return <button className="login__link">Войти</button>
          }
        })()
      }

    </div>
  )
}

const mapDispatchToProps = {
  checkAuthorization
}

export default connect(null, mapDispatchToProps)(withRouter(Login));