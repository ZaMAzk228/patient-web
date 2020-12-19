import React, { useState } from 'react';
import Modal from 'react-modal';

import './doctorPage.css';

import CardDoctor from '../cardDoctor';
import LeaveWindow from '../leaveWindow';

const DoctorPage = () => {

  const [isLeave, changeIsleave] = useState(false);

  return (
    <>

      <Modal
        className="modal__wrap-black"
        isOpen={isLeave}
        onAfterOpen={() => document.body.style.overflow = 'hidden'}
        onAfterClose={() => document.body.style.overflow = 'visible'}
      >
        <div className="modal__container">
          <div className="modal__wrap">
            <LeaveWindow backFunc={changeIsleave}/>
          </div>
        </div>
      </Modal>

      <div className="doctorPage__wrapper">
        <div className="doctorPage__icon-return--wrap" onClick={() => changeIsleave(true)}>
          <img src="../../../assets/svg/returnBtnRight.svg" />
        </div>
        <CardDoctor />
        <CardDoctor />
      </div>
    </>
  ) 
}

export default DoctorPage;