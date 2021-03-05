import React, { useState, useRef, useEffect } from 'react'
import './FileUpload.scss'

const FileUpload = () => {
  const fileInputField = useRef(null)
  const [files, setFiles] = useState<FileList[]>([])

  useEffect(() => {
    if (files.length === 0) {
    } else {
      console.log(files)
      //TODO UploadHome to server
    }
  }, [files])

  const onFileUpload = (e: any) => {
    setFiles(e.target.files)
  }

  return (
    <div className={'file-upload'}>
      <input type='file' id='actual-btn'
        hidden
        ref={fileInputField}
        onChange={onFileUpload}
        multiple={true}
      />
      <label htmlFor='actual-btn'>Choose File</label>
    </div>

  )
}

export default FileUpload
