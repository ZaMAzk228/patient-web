import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import './patientPage.css';

import CardPatient from '../cardPatient';
import LeaveWindow from '../leaveWindow';

import getTimetableForPatient from '../../utils/getTimetableForPatient';

const PatientPage = ({ login }) => {

  const [isLeaving, ChangeIsLeaving] = useState(false);
  const [isPatientFormActive, turnPatientForm] = useState(false);
  const [loading, turnLoading] = useState(true);
  const [items, changeItems] = useState('');

  // useEffect( () => {
  //   (async () => {
  //     let res = await getTimetableForPatient(login);
  //     changeItems(res.ans);
  //     turnLoading(false);
  //   })()
  // }, []);

  // if (loading) {
  //   return <p>Пожалуйста подождите...</p>
  // }

  return (
    <>

      <Modal
        className="modal__wrap-black"
        isOpen={isLeaving}
        onAfterOpen={() => document.body.style.overflow = 'hidden'}
        onAfterClose={() => document.body.style.overflow = 'visible'}
      >
        <div className="modal__container">
          <div className="modal__wrap">
            <LeaveWindow backFunc={ChangeIsLeaving}/>
          </div>
        </div>
      </Modal>

      <div className="patientPage__wrapper">
        <button className="patientPage__icon-return--wrap" onClick={ChangeIsLeaving}>
          <img src="../../../assets/svg/returnBtnRight.svg"/>
        </button>

        {/* {
          items.map((item) => {
            return <CardPatient key={item.id} time={`${item.timestart} ${item.data}`} cabinet={item.room} doctor={item.doctor} />
          })
        } */}

        <button className="patientPage__btn"> Записаться к врачу </button>
      </div>
    </>
  )
}

const mapStateToProps = ({login}) => {
  return {
    login
  }
}

export default connect(mapStateToProps)(PatientPage);