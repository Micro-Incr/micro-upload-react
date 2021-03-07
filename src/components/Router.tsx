import React, { useEffect, useState } from 'react';
import './App.scss';
import UploadHome from './Upload/UploadHome/UploadHome';
import ProgressBar from './Uploading/ProgressBar/ProgressBar';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { uploadStateType } from '../reducers/uploadStateReducer';
import UploadSuccess from './Upload/UploadSuccess/UploadSuccess';
import axios, { MODE, SERVER_URL } from '../api/server';


const Router = ({ uploadState }: { uploadState: uploadStateType }) => {

  const [files, setFiles] = useState<Blob[]>([]);
  const [percent, setPercent] = useState<number>(0);
  const [loading, isLoading] = useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = useState<string>('');

  useEffect(() => {
    const uploadFile = async () => {
      if (files.length === 0) {
      } else {
        const formData = new FormData();
        formData.append('image', files[0]);
        return await axios.post('/images', formData, {
          headers: {
            'content-type': 'multipart/form-data'
          },
          onUploadProgress: function(progressEvent) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setPercent(percentCompleted);
          }
        });
      }
    };
    uploadFile().then((response) => {
      if (response?.status === 201) {
        setFiles([]);
        if (response.data.uploadServer === 'server') {
          setUploadedImage(`${SERVER_URL}/${MODE === 'production' ? 'production' : 'dev'}/${response.data.image}`);
        }
        isLoading(false);
      }
    });
  }, [files]);

  const render = () => {
    if (loading) {
      return <ProgressBar percent={percent} />;
    }
    if (percent === 100 && !loading) {
      return <UploadSuccess uploadedImage={uploadedImage} />;
    }
    return <UploadHome setFiles={setFiles} isLoading={isLoading} />;
  };

  return (
    <>
      {render()}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    uploadState: state.uploadState
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
