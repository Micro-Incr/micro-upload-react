import React from 'react';
import CheckCircle from '../../svgs/CheckCircle';
import './UploadSuccess.scss';

interface IUploadSuccess {
  uploadedImage: string
}

function UploadSuccess({ uploadedImage }: IUploadSuccess) {

  const urlFormattedForImageUploaded = (): string => {
    return `${uploadedImage.slice(0, 40)}...`;
  };

  return (
    <div className={'upload-success'}>
      <CheckCircle size={1.5} fill={'#219653'} />
      <h1 className={'upload-success'}>Upload Successfully!</h1>
      <img
        className={'uploaded-image'}
        src={uploadedImage}
        alt={'dummy'} />
      <div className={'flex items-center clipboard-wrapper justify-space-between'}>
        <p className={'clipboard-text'}>{urlFormattedForImageUploaded()}</p>
        <button className={'btn btn-primary'} onClick={async () => {
          await navigator.clipboard.writeText(uploadedImage);
        }}>Copy Link
        </button>
      </div>
    </div>
  );
}

export default UploadSuccess;
