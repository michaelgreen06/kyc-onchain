import React from 'react';

const AddressInput = ({ handleWalletInput, walletAddress }) => {
  return (
    <form className="pa4 black-80">
      <div className="measure center">
        <input
          id="wallet address"
          placeholder="enter your ethereum wallet address here"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
          value={walletAddress}
          onChange={handleWalletInput}
        />
      </div>
    </form>
  );
};

export default AddressInput;
