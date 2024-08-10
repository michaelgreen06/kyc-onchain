import './App.css';
import React, { useState } from 'react';
import Button from './Components/Button/Button';
import Logo from './Components/Logo';
import Step from './Components/Step/Step';
import StepInfo from './Components/StepInfo/StepInfo';
import AddressInput from './Components/AddressInput/AddressInput';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const handleWalletInput = (e) => {
    setWalletAddress(e.target.value.toLowerCase());
  };

  const handleSubmit = () => {
    console.log('handleSubmit called');
    localStorage.setItem('storedValue', walletAddress);
    console.log(walletAddress, 'stored in local memory');
    setCurrentStep(2);
  };

  return (
    <div className="App flex flex-column vh-100">
      <header className="w-100 pa3 ph5-ns">
        <Logo />
      </header>
      <div className="flex-auto w-100 pa3">
        <div className="mb4">
          <Step currentStep={currentStep} />
        </div>
        <div>
          <StepInfo />
        </div>
        {currentStep === 1 && (
          <>
            <div className="mt4">
              <AddressInput
                handleWalletInput={handleWalletInput}
                walletAddress={walletAddress}
              />
            </div>
          </>
        )}

        <Button handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
