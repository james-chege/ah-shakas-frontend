import constants from '../../constants';
import articlesReducer from '../../reducers/articles.reducer';
import state from '../../reducers/initialState';

const initialState = state.articles;
const { POST_ARTICLE } = constants;

const action = { payload: {} };

describe('Test post articles reducer', () => {
  it('should return the initial state with no action', () => {
    expect(articlesReducer(initialState, action).postArticle).toEqual(initialState);
  });

  it('should handle POST_ARTICLE_PENDING', () => {
    action.type = `${POST_ARTICLE}_PENDING`;
    action.payload = initialState;
    expect(articlesReducer(initialState, action).postArticle.loading).toEqual(true);
  });

  it('should handle POST_ARTICLE_FULFILLED', () => {
    action.type = `${POST_ARTICLE}_FULFILLED`;
    action.payload.data = initialState.article;
    expect(articlesReducer(initialState, action).postArticle.success).toEqual(true);
  });

  it('should handle POST_ARTICLE_REJECTED', () => {
    action.type = `${POST_ARTICLE}_REJECTED`;
    action.payload.response = initialState;
    expect(articlesReducer(initialState, action).postArticle.success).toEqual(false);
  });
});
