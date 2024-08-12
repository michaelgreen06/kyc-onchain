import React from 'react';

const StepInfo = ({ currentStep }) => {
  return (
    <div>
      {currentStep === 1 ? (
        <h1 className="f5 white">Enter your wallet address</h1>
      ) : currentStep === 2 ? (
        <h1 className="f5 white">Click Below to Verify your identity</h1>
      ) : currentStep === 3 ? (
        <div>
          <h1 className="f5 white">
            It turns out KYC providers won't work with hackathon projects 😂
          </h1>
          <h1 className="f5 white">
            Your simulated KYC verification process will be complete soon.
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="f5 white">
            Your identity has been successfully verified!
          </h1>
          <p>
            You can see your KYC attestation
            <a href="https://easscan.org">here</a>
          </p>
          <p>You may now use any dApp that accepts our KYC attestations.</p>
        </div>
      )}
    </div>
  );
};

export default StepInfo;
