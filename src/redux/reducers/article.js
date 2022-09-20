import * as type from '../types';

const initialState = {
  loading: false,
  articles: [],
  error: null
};

export default function article(state = initialState, action) {
  switch (action.type) {
    case type.GET_ALL_ARTICLE_REQUESTED:
    case type.GET_ARTICLE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case type.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.articles,
        error: null
      }
    case type.GET_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return {
        ...state,
        error: 'Did not match any case at article reducer.'
      };
  }
}
