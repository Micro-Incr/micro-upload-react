import React, { useState } from 'react';
import FileUpload from '../FileUpload/FileUpload';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import ProgressBar from '../../Uploading/ProgressBar/ProgressBar';
import DragAndDropImg from '../../../assets/image.svg';

function UploadHome() {
  const [uploading, setUploading] = useState<Boolean>(false);

  const displayScreen = () => {
    if(uploading){
      return <ProgressBar width={5} percent={5} setUploading={setUploading} />;
    }
    else{
      return(
        <>
          <h1 className={'upload-title'}>Upload your Image</h1>
          <p className={'upload-description'}>File should be Jpeg, Png,...</p>
          <DragAndDrop imgSrc={DragAndDropImg} />
          <p>Or</p>
          <FileUpload  setUploading={setUploading} />
        </>
      );
    }
  };
  return (
    <>
      {displayScreen()}
    </>
  );
}

export default UploadHome;
