import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../types';

const apiUrl = process.env.REACT_APP_API_SERVER_BASE_URL + `article/get_all`;

/**
 * Send HTTP request, then get article data in json.
 * @returns Promise
 */
function getApi() {
  console.log(apiUrl);
  return fetch(apiUrl, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

/**
 * Fetch articles by API, then send to the store.
 * @param {*} action 
 */
function* fetchAllArticle(action) {
  try {
    const response = yield call(getApi);
    console.log("function* fetchAllArticle");
    console.log(response);
    yield put({ type: type.GET_ARTICLE_SUCCESS, articles: response.articles});
  } catch (e) {
    yield put({ type: type.GET_ARTICLE_FAILED, message: "Failed to fetch articles."});
  }
}

function* articleSaga() {
  yield takeEvery(type.GET_ALL_ARTICLE_REQUESTED, fetchAllArticle);
}

export default articleSaga;