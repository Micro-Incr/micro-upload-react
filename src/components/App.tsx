import React from 'react'
import './App.scss'
import UploadSuccess from './Upload/UploadSuccess/UploadSuccess'

function App() {
  return (
    <div className={'upload-wrapper'}>
      <div className={'upload'}>
        <UploadSuccess />
      </div>
    </div>
  )
}

export default App
