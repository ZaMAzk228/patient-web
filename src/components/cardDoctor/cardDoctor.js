import React from 'react';

import './cardDoctor.css';

const СardDoctor = () => {
  return (
    <div className="cardDoctor__wrapper">
      <div className="cardDoctor__time"> 
        <h3 className="cardDoctor__title"> Дата приема: </h3>
        <p className="cardDoctor__value"> 19 : 00  12.12.2021</p>
      </div>
      <button className="cardDoctor__btn cardDoctor__btn--green">Увеличить время приема</button>
      <div className="cardDoctor__doctor">
        <h3 className="cardDoctor__title"> Пациент </h3>
        <p className="cardDoctor__value">Зубенко</p>
        <p className="cardDoctor__value">Михаил</p>
        <p className="cardDoctor__value">Петрович</p>
      </div>
      <button className="cardDoctor__btn cardDoctor__btn--red"> Окончить запись </button>
    </div>   
  )
}

export default СardDoctor;