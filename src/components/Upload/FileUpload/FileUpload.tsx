import React, { useRef } from 'react';
import './FileUpload.scss';
import useFile from '../../../hooks/useFile';

const FileUpload = (props: any) => {
  const fileInputField = useRef(null);
  const { setFiles } = useFile();

  const onFileUpload = (e: any) => {
    setFiles(e.target.files);
    props.setUploading(true);
  };
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

  );
};

export default FileUpload;
