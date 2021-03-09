import React from 'react';
import FileUpload from '../FileUpload/FileUpload';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import DragAndDropImg from '../../../assets/images/image.svg';

function UploadHome({ setFiles, isLoading }: { setFiles: (files: Blob[]) => void, isLoading: (loading: boolean) => void }) {
  return (
    <>
      <h1 className={'upload-title'}>Upload your Image</h1>
      <p className={'upload-description'}>File should be Jpeg, Png,...</p>
      <DragAndDrop imgSrc={DragAndDropImg} setFiles={setFiles} isLoading={isLoading} />
      <p>Or</p>
      <FileUpload setFiles={setFiles} isLoading={isLoading} />
    </>
  );
}

export default UploadHome;
