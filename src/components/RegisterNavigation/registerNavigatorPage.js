import React, { useState } from 'react';

import { RegisterFirstStep, RegisterSecondStep } from '../pages';

const RegisterNavigatorPage = () => {

  const [dataFromFirstStep, changeDataFromFirstStep] = useState('');
  
  if (dataFromFirstStep == '') {
    return (
      <RegisterFirstStep funcToChangeData={changeDataFromFirstStep} />
    )
  } else {
    return (
      <RegisterSecondStep dataFromFirstStep={dataFromFirstStep} />
    )
  }
}

export default RegisterNavigatorPage;