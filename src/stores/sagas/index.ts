import { all } from 'redux-saga/effects'
import uploadSaga from './uploadSaga';
export default function* roodSaga() {
  yield all([
    uploadSaga(),
  ])
}