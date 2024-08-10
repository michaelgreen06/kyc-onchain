import React from 'react';

const Step = ({ currentStep }) => {
  return (
    <div>
      <h1 className="f3 white">Step {`${currentStep}`}</h1>
    </div>
  );
};

export default Step;
