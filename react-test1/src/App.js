import './App.css';
import React, { useState } from 'react';
import Button from './Components/Button/Button';
import Logo from './Components/Logo';
import Step from './Components/Step/Step';
import StepInfo from './Components/StepInfo/StepInfo';
import AddressInput from './Components/AddressInput/AddressInput';
import LoadingBar from './Components/LoadingBar/LoadingBar';
import Results from './Components/Results/Results';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');
  const handleWalletInput = (e) => {
    setWalletAddress(e.target.value.toLowerCase());
  };

  const handleSubmit = () => {
    setCurrentStep(2);
    console.log('handleSubmit called');
    localStorage.setItem('storedValue', walletAddress);
    console.log(walletAddress, 'stored in local memory');
    console.log('current step', currentStep);
  };

  const handleKYC = () => {
    setCurrentStep(3);
  };

  const handleLoadComplete = () => {
    setCurrentStep(4);
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
          <StepInfo currentStep={currentStep} />
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
        {(currentStep === 1 || currentStep === 2) && (
          <Button
            handleSubmit={handleSubmit}
            handleKYC={handleKYC}
            currentStep={currentStep}
          />
        )}
        {currentStep === 3 && (
          <LoadingBar handleLoadComplete={handleLoadComplete} />
        )}
        <>{currentStep === 4 && <Results />}</>
      </div>
    </div>
  );
}

export default App;
