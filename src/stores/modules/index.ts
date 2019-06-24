import { combineReducers } from 'redux';
import upload, { UploadState } from './upload';

export default combineReducers({
  upload,
});

export interface StoreState {
  upload: UploadState,
}