import React from 'react';
import './App.scss';
import Router from './Router';

function App() {
  return (
    <div className={'upload-wrapper'}>
      <div className={'upload'}>
        <Router />
      </div>
    </div>
  );
}

export default App;
