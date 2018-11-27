import { connect } from 'react-redux';
import { fetchArticle, updateArticle } from '../../actions/articles.action';
import { getRatings } from '../../actions/rating.action';
import ReadUpdateArticleComponent from '../../components/Articles/ReadUpdateArticleComponent';
import { getComments } from '../../actions/getComments.action';

export const mapStateToProps = ({ article }) => ({
  fetchState: article.fetchArticle,
  updateState: article.updateArticle,
});

export default connect(mapStateToProps, {
  fetch: fetchArticle,
  update: updateArticle,
  getRatings,
  getComments,
})(ReadUpdateArticleComponent);
