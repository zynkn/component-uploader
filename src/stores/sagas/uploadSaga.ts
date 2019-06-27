import { all, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { PUT_IMAGE, PUT_IMAGE_SUCCESS } from 'stores/modules/upload';

// c id : e6ee9e61d359314
// c s : 795323da9f092f9ad63db4abfac053e1abe51b0a
function* putImage(payload: any) {
  try {
    console.log(payload);
    const response = yield axios.post(
      `https://api.imgur.com/3/image`,
      payload,
      {
        headers: {
          Authorization: `Client-ID {{}}`
        }
      }
    )
    console.log(response);
    yield 0;
  } catch (e) { }
}
function* putImageSaga() {
  yield takeEvery(PUT_IMAGE, putImage);
}

export default function* uploadSaga() {
  yield all([
    putImageSaga(),
  ])
}