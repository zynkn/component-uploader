import { handleActions } from 'redux-actions';
import produce from "immer";

export const PUT_IMAGE = 'upload/PUT_IMAGE';
export const PUT_IMAGE_SUCCESS = 'upload/PUT_IMAGE_SUCCESS';
export const PUT_IMAGE_FAILED = 'upload/PUT_IMAGE_FAILED'

export interface UploadState {

}
const intialState: UploadState = {

}

export default handleActions({
  [PUT_IMAGE_SUCCESS]: (state, action: any) => {
    return produce(state, draft => {

    });
  }
}, intialState);