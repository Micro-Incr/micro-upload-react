import { ThunkDispatch } from 'redux-thunk';
import { UPLOAD_FAIL, UPLOAD_IN_PROGRESS, UPLOAD_SUCCESS } from './types';
import axios from '../api/server';

export const uploadFile = (formData: FormData) => async (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch({ type: UPLOAD_IN_PROGRESS, payload: {} });
  try {
    const response = await axios.post('/images', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      },
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        dispatch({ type: UPLOAD_IN_PROGRESS, payload: { percentCompleted: percentCompleted } });
      }
    });

    if (response.status === 201) {
      console.log('good job');
      dispatch({ type: UPLOAD_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: UPLOAD_FAIL, payload: response.data });
      console.log(response.data);
    }
  } catch (e) {
    dispatch({ type: UPLOAD_FAIL, payload: e });
    console.log(e);
  }
};
