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
        <div className="f5 white">
          <h1>Your identity has been successfully verified!</h1>
          <p>
            You can see your KYC attestation&nbsp;
            <a
              className="white"
              href="https://sepolia.easscan.org/attestation/view/0xfc9a3418b27f55f897faf0a96ba126ef8869aa445ded46c75ef1254725fecb2b"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
          <p>You may now use any dApp that accepts our KYC attestations.</p>
        </div>
      )}
    </div>
  );
};

export default StepInfo;
