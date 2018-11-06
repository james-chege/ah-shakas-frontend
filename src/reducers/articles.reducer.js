import { combineReducers } from 'redux';
import state from './initialState';
import constants from '../constants';
import createPromiseReducer from '../utils/createPromiseReducer.util';

const {
  POST_ARTICLE,
  FETCH_ARTICLE,
  UPDATE_ARTICLE,
  FETCH_ALL_ARTICLES,
} = constants;
const initialState = state.articles;

const postArticle = createPromiseReducer({
  initialState,
  actionName: POST_ARTICLE,
  dataField: 'article',
});

const fetchArticle = createPromiseReducer({
  initialState,
  actionName: FETCH_ARTICLE,
  dataField: 'article',
});

const updateArticle = createPromiseReducer({
  initialState,
  actionName: UPDATE_ARTICLE,
  dataField: 'article',
});

const fetchAllArticles = createPromiseReducer({
  initialState,
  actionName: FETCH_ALL_ARTICLES,
  dataField: 'article',
});

export default combineReducers({
  updateArticle,
  postArticle,
  fetchArticle,
  fetchAllArticles,
});
