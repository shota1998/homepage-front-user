import { all } from 'redux-saga/effects';
import article from './article';

/**
 * 
 */
export default function* rootSaga() {
  yield all([
    article()
  ])
}