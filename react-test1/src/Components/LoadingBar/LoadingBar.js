import React from 'react';

const LoadingBar = ({ progress }) => (
  <div className="w-100 bg-light-gray">
    <div className="h1 bg-blue" style={{ width: `${progress}%` }}></div>
  </div>
);

export default LoadingBar;
