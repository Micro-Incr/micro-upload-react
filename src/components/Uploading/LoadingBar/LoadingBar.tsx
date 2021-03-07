import React from 'react';
import './LoadingBar.scss';

const LoadingBar = () => {
  return (
    <div className={'loading-bar'}>
      <div className={'loading-bar-outer'}>
        <div className={'loading-bar-inner'} />
      </div>
    </div>
  );
};

export default LoadingBar;
