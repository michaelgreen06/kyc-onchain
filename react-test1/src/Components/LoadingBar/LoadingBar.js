import React, { useState, useEffect } from 'react';

const LoadingBar = ({ handleLoadComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 2);
      } else {
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [progress]);

  useEffect(() => {
    if (!loading) {
      handleLoadComplete();
    }
  }, [loading, handleLoadComplete]);

  return (
    <div>
      <p className="white">Verifying your Identity {progress}%</p>
      <div className="center w-50 bg-light-gray">
        <div className="h1 bg-blue" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LoadingBar;
