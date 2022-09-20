import * as type from '../types';

export function getAllArticle() {
  return {
    type: type.GET_ALL_ARTICLE_REQUESTED
  };
}
