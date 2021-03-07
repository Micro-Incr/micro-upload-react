import React, { useEffect } from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ percent }: { percent: number }) => {
  // set the value for the progress bar
  useEffect(() => {

  }, []);

  return (
    <div className={'progress-bar'}>
      <div className={'progress-bar-outer'}>
        <div className={'progress-bar-inner'} style={{ width: `${percent}%` }}>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
