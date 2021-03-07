import { combineReducers } from 'redux';
import { uploadStateReducer } from './uploadStateReducer';

const RootReducer =  combineReducers({
  uploadState: uploadStateReducer
});

export type RootState = ReturnType<typeof RootReducer>
export default RootReducer;
