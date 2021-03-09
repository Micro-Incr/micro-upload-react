import React, { useEffect, useState } from 'react';
import './App.scss';
import UploadHome from './Upload/UploadHome/UploadHome';
import ProgressBar from './Uploading/ProgressBar/ProgressBar';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import UploadSuccess from './Upload/UploadSuccess/UploadSuccess';
import axios, { MODE, SERVER_URL } from '../api/server';
import { CSSTransition } from 'react-transition-group';


const Router = () => {

  const [files, setFiles] = useState<Blob[]>([]);
  const [percent, setPercent] = useState<number>(0);
  const [loading, isLoading] = useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = useState<string>('');

  useEffect(() => {
    const uploadFile = async () => {
      if (files.length === 0) {
      } else {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append('image', files[i]);
        }
        return await axios.post('/images', formData, {
          onUploadProgress: async function(progressEvent) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setPercent(percentCompleted);
          }
        });
      }
    };
    uploadFile().then(async (response) => {
      if (response?.status === 201) {
        isLoading(false);
        setFiles([]);
        if (response.data.uploadServer === 'server') {
          setUploadedImage(`${SERVER_URL}/${MODE === 'production' ? 'production' : 'development'}/${response.data.image}`);
        }
      }
    });
  }, [files]);

  return (
    <div className={'upload-wrapper'}>
      {
        percent === 0 && !loading && !uploadedImage && (
          <div className={'upload'}>
            <UploadHome setFiles={setFiles} isLoading={isLoading} />
          </div>
        )
      }
      <CSSTransition in={loading} timeout={500} classNames='my-node' unmountOnExit>
        <div className={'upload-loading'}>
          <ProgressBar percent={percent} />
        </div>
      </CSSTransition>
      <CSSTransition in={percent === 100 && uploadedImage !== ''} timeout={500} classNames='my-node' unmountOnExit>
        <div className={'upload'}>
          <UploadSuccess uploadedImage={uploadedImage} />
        </div>
      </CSSTransition>
    </div>
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
