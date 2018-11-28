const CONSTANTS = {
  SIGNUP: 'SIGNUP',
  RESETTING_PASSWORD_ACTION: 'RESET_PASSWORD_ACTION',
  RESETTING_ERROR_ACTION: 'RESETTING_ERROR_ACTION',
  RESET_PASSWORD_ACTION: 'RESET_PASSWORD_ACTION',
  ERROR_ACTION: 'ERROR_ACTION',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SOCIALLOGIN: 'SOCIALLOGIN',
  POST_ARTICLE: 'POST_ARTICLE',
  UPDATE_ARTICLE: 'UPDATE_ARTICLE',
  FETCH_ARTICLE: 'FETCH_ARTICLE',
  FETCH_ALL_ARTICLES: 'FETCH_ALL_ARTICLES',
  FETCH_RECENT_ARTICLES: 'FETCH_ALL_ARTICLES',
  RATE_ARTICLE: 'RATE_ARTICLE',
  AVERAGE_RATING: 'AVERAGE_RATING',
  RATING_ERROR: 'RATING_ERROR',
  VERIFY: 'VERIFY',
  LOAD_PROFILE: 'LOAD_PROFILE',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  LOAD_USER_ARTICLES: 'LOAD_USER_ARTICLES',
  LOAD_FAVE_ARTICLES: 'LOAD_FAVE_ARTICLES',
  FAVOURITE: 'FAVORITE',
  UNFAVOURITE: 'UNFAVORITE',
  FAVORITE_UNFAVORITE_ERROR: 'FAVORITE_UNFAVORITE_ERROR',
  COMMENTS: {
    POST_COMMENT_SUCCESS: 'POST_COMMENT_SUCCESS',
    POST_COMMENT_LOADING: 'POST_COMMENT_LOADING',
    POST_COMMENT_FAILURE: 'POST_COMMENT_FAILURE',
    FETCH_COMMENT_LOADING: 'FETCH_COMMENT_LOADING',
    FETCH_COMMENT_SUCCESS: 'FETCH_COMMENT_SUCCESS',
    FETCH_COMMENT_FAILURE: 'FETCH_COMMENT_FAILURE',
    UPDATE_COMMENT_LOADING: 'UPDATE_COMMENT_LOADING',
    UPDATE_COMMENT_SUCCESS: 'UPDATE_COMMENT_SUCCESS',
    UPDATE_COMMENT_FAILURE: 'UPDATE_COMMENT_FAILURE',
    DELETE_COMMENT_LOADING: 'DELETE_COMMENT_LOADING',
    DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
    DELETE_COMMENT_FAILURE: 'UPDATE_COMMENT_FAILURE',
    REPLY_COMMENT_LOADING: 'REPLY_COMMENT_LOADING',
    REPLY_COMMENT_SUCCESS: 'REPLY_COMMENT_SUCCESS',
    REPLY_COMMENT_FAILURE: 'REPLY_COMMENT_FAILURE',
  },
  LIKE_DISLIKE: 'LIKE_DISLIKE',
  LIKES_COUNT: 'LIKES_COUNT',
};

export const TOKEN = localStorage.getItem('userToken');
export default CONSTANTS;
