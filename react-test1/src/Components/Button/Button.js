import React from 'react';

const Button = ({ handleSubmit }) => {
  return (
    <input
      type="submit"
      value="Submit"
      name="submit"
      onClick={handleSubmit}
      className="bg-white pa3 hover grow pointer"
    />
  );
};

export default Button;
