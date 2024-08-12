import React from 'react';

const Button = ({ handleSubmit, currentStep, handleKYC }) => {
  return (
    <input
      type="submit"
      value={currentStep === 1 ? 'Submit' : ''}
      name="submit"
      onClick={currentStep === 1 ? handleSubmit : handleKYC}
      className="bg-white pa3 hover grow pointer"
    />
  );
};

export default Button;
