import React, { useRef } from 'react';
import './FileUpload.scss';
import { RootState } from '../../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { uploadFile } from '../../../actions/uploadActions';
import { connect } from 'react-redux';

interface IFileUpload {
  setFiles: (files: Blob[]) => void
  isLoading: (loading: boolean) => void
}

const FileUpload = (
  {
    setFiles,
    isLoading
  }: IFileUpload
) => {
  const fileInputField = useRef(null);
  //const { setFiles } = useFile(uploadFile);

  const onFileUpload = (e: any) => {
    setFiles(e.target.files);
    isLoading(true);
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

const mapStateToProps = (state: RootState) => {
  return {
    uploadState: state.uploadState
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    uploadFile: (formData: FormData) => dispatch(uploadFile(formData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
