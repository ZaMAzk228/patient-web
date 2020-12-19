import React from 'react';
import { Link } from 'react-router-dom';

import './leaveWindow.css';

const LeaveWindow = ({ backFunc }) =>{
  return(
    <>
      <div className='leave__wrapper-content'>
        <span className="leave__text">Вы уверены, что хотите выйти из личного кабинета?</span>
      </div>
      <div className='leave__btns'>
        <Link to="/" className='leave__btn leave__btn-green'>Да</Link>
        <button className='leave__btn leave__btn-red' onClick={() => backFunc(false)}>Нет</button>
      </div>
    </>
  )
}

export default LeaveWindow;