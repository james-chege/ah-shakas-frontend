import api from '../api';
import CONSTANTS from '../constants';

const { HIGHLIGHT } = CONSTANTS;

const highlightRequest = (slug, highlight) => dispatch => api({
  url: `/articles/${slug}/highlight/`,
  method: 'POST',
  data: { ...highlight },
})
  .then((data) => {
    dispatch({
      type: HIGHLIGHT.HIGHLIGHTING_ACTION,
      payload: data.data,
    });
  }).catch((err) => {
    dispatch({
      type: HIGHLIGHT.HIGHLIGHTING_ERROR_ACTION,
      payload: err.response.data,
    });
  });

export default highlightRequest;
