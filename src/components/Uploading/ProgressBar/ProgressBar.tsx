import React, { useState, useEffect } from 'react';
import './ProgressBar.scss';

const ProgressBar = (props: {percent: number, width: number, setUploading: any}) => {
  // set the value for the progress bar
  const [value, setValue] = useState(props.width);
  useEffect(() => {
    if(value < 130){
      setValue(value * props.percent);
    }
    else{
      setTimeout(() => {
        props.setUploading(false);
      }, 2000);
    }
  }, [value]);
  return (
    <div className={'progress-bar'}>
      <div className={'progress-bar-outer'} >
        <div className={'progress-bar-inner'} style={{ width: `${value}px` }}>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;