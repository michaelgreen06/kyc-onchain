import React from 'react';

const Step = ({ currentStep }) => {
  return (
    <div>
      {currentStep === 1 ? (
        <h1 className="f3 white">Step {`${currentStep}`}</h1>
      ) : currentStep === 2 ? (
        <h1 className="f3 white">Step {`${currentStep}`}</h1>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Step;
