import React from 'react';

import './cardPatient.css';

const CardPatient = ({ time, cabinet, doctor}) => {
  return (
    <div className="cardPatient__wrapper">
      <div className="cardPatient__time"> 
        <h3 className="cardPatient__title">Дата приема:</h3>
        <p className="cardPatient__value">{time}</p>
      </div>
      <div className="cardPatient__kabinet">
        <h3 className="cardPatient__title">Кабинет:</h3>
        <p className="cardPatient__value">{cabinet}</p>
      </div>
      <div className="cardPatient__doctor">
        <h3 className="cardPatient__title">Врач:</h3>
        <p className="cardPatient__value">{doctor.split(' ')[0]}</p>
        <p className="cardPatient__value">{doctor.split(' ')[1]}</p>
        <p className="cardPatient__value">{doctor.split(' ')[2]}</p>
      </div>
      <button className="cardPatient__btn">Отменить запись</button>
    </div>  
  )
}

export default CardPatient;