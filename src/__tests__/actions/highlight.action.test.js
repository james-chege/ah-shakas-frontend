import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import highlightRequest from '../../actions/getHighlight.action';
import CONSTANTS from '../../constants/index';
import RESPONSES from '../../mock/responses';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

const { HIGHLIGHT } = CONSTANTS;

describe('Highlight text Action tests', () => {
  store = mockStore({});
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch GET_HIGHLIGHT_ACTION when getting the highlights', () => {
    const data = RESPONSES.GET_HIGHLIGHT_SUCCESS_MESSAGE;
    store.dispatch(highlightRequest('time-management')).then(() => {
      expect(store.getActions()).toContainEqual({
        type: HIGHLIGHT.HIGHLIGHTING_ACTION,
        payload: data,
      });
    });
  });

  it('should dispatch HIGHLIGHTING_ERROR_ACTION if fail to highlight', () => {
    const err = RESPONSES.HIGHLIGHTING_ERROR_MESSAGE;
    store.dispatch(highlightRequest('time-management')).catch(() => {
      expect(store.getActions()).toContainEqual({
        type: HIGHLIGHT.HIGHLIGHTING_ERROR_ACTION,
        payload: err.response.data.errors.error,
      });
    });
  });
});
