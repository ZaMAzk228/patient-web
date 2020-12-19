import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './register.css';

const RegisterFirstStep = ({ funcToChangeData }) => {

  const [lastNameValue, changeLastNameValue] = useState('');
  const [firstNameValue, changeFirstNameValue] = useState('');
  const [patronymicValue, changePatronymicValue] = useState('');
  const [birthDayValue, changeBirthDayValue] = useState('');
  const [polisValue, changePolisValue] = useState('');
  const [snilsValue, changeSnilsValue] = useState('');
  const [genderValue, changeGenderValue] = useState('');

  return (
    <div className=" intro__register">
      <Link to="/" className="register__return-btn" >
        <img src="../../../assets/svg/returnBtnLeft.svg" />
      </Link>
      <div className="register__form-wrap">
        <label className="register__form-text" htmlFor="register__name-last">Фамилия</label>
        <input className="register__form-input" required placeholder="Иванов" id="register__name-last" onChange={(e) => changeLastNameValue(e.target.value)} />
      </div>
      <div className="register__form-wrap">
        <label className="register__form-text" htmlFor="register__name">Имя</label>
        <input className="register__form-input" required placeholder="Иван" id="register__name" onChange={(e) => changeFirstNameValue(e.target.value)} />
      </div>
      <div className="register__form-wrap">
        <label className="register__form-text" htmlFor="register__potronomic">Отчество</label>
        <input className="register__form-input" required placeholder="Иванович" id="register__potronomic" onChange={(e) => changePatronymicValue(e.target.value)} />
      </div>
      <div className="register__form-wrap">
        <label className="register__form-text" htmlFor="register__birth">Дата рождения</label>
        <input className="register__form-input" required placeholder="ДД.ММ.ГГ" id="register__birth" onChange={(e) => changeBirthDayValue(e.target.value)} />
      </div>
      <div className="register__form-wrap">
        <label className="register__form-text" htmlFor="register__snils">Снилс</label>
        <input className="register__form-input" required placeholder="12345678912" id="register__snils" onChange={(e) => changeSnilsValue(e.target.value)} />
      </div>
      <div className="register__form-wrap">
        <label className="register__form-text" htmlFor="register__polis">Полис</label>
        <input className="register__form-input" required placeholder="1234567891234567" id="register__polis" onChange={(e) => changePolisValue(e.target.value)} />
      </div>
      <div className="register__wrap-gender">
        <div className="form-wrap">
          <label className="form-label" onClick={() => changeGenderValue("Мужской")} >
            <input type="radio" className="form-input" name="form-gender" />
            <span className="form--radio-btn" />
            <span className="gender__text" >Мужской</span>
          </label>
        </div>
        <div className="form-wrap">
          <label className="form-label" onClick={() => changeGenderValue("Женский")} >
            <input type="radio" className="form-input" name="form-gender" />
            <span className="form--radio-btn" />
            <span className="gender__text" >Женский</span>
          </label>
        </div>
      </div>

      {
        (() => {
          if (lastNameValue != '' && firstNameValue != '' && patronymicValue != '' && genderValue != '' && snilsValue.length === 11 && polisValue.length === 16 && birthDayValue.length === 10) {
            return (
              <button className="register__link register__link-active" onClick={() => {
                funcToChangeData({
                  surname: lastNameValue,
                  name: firstNameValue,
                  patronymic: patronymicValue,
                  gender: genderValue,
                  snils: snilsValue,
                  polis: polisValue,
                  birth: birthDayValue
                })
              }}>Продолжить</button>
            )
          } else {
            return <button className="register__link">Продолжить</button>
          }
        })()
      }
    </div>
  )
}

export default RegisterFirstStep;