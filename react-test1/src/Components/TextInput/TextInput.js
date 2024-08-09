import React, { useState } from 'react';

const TextInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="pa4 black-80">
      <div className="measure center">
        <input
          id="wallet address"
          placeholder="enter your ethereum wallet address here"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default TextInput;
