import React from 'react'
import FileUpload from '../FileUpload/FileUpload'
import DragAndDrop from '../DragAndDrop/DragAndDrop'
import DragAndDropImg from '../../../assets/image.svg'

function UploadHome() {
  return (
    <>
      <h1 className={'upload-title'}>Upload your Image</h1>
      <p className={'upload-description'}>File should be Jpeg, Png,...</p>
      <DragAndDrop imgSrc={DragAndDropImg} />
      <p>Or</p>
      <FileUpload />
    </>
  )
}

export default UploadHome
