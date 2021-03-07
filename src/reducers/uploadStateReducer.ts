import {
  UPLOAD_IDLE,
  UPLOAD_IN_PROGRESS,
  UPLOAD_SUCCESS
} from '../actions/types';
import { UploadState } from '../models/UploadState';

export interface uploadStateType {
  state: UploadState,
  loading: boolean,
  error: any
}

const initialState: uploadStateType = {
  state: UploadState.IDLE,
  loading: false,
  error: null
};

interface UploadIDLE {
  type: typeof UPLOAD_IDLE,
  payload: any
}

interface UploadInProgress {
  type: typeof UPLOAD_IN_PROGRESS,
  payload: any
}
interface UploadSuccess {
  type: typeof UPLOAD_SUCCESS,
  payload: any
}

type UploadImageActionType = UploadIDLE | UploadInProgress | UploadSuccess

//Personal project reducer
export const uploadStateReducer = (state = initialState, action: UploadImageActionType) => {
  switch (action.type) {
  //Request to get projects
  case UPLOAD_IDLE:
    return {
      ...state,
      loading: false
    };
  case UPLOAD_IN_PROGRESS:
    return {
      ...state,
      loading: true
    };
  case UPLOAD_SUCCESS:
    return {
      ...state,
      loading: false
    };
  default:
    return state;
  }
};
