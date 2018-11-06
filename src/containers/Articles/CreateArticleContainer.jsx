import { connect } from 'react-redux';
import CreateArticleComponent from '../../components/Articles/CreateArticleComponent';
import { postArticle } from '../../actions/articles.action';

export const mapStateToProps = ({ article }) => ({
  postArticle: article.postArticle,
});

export default connect(mapStateToProps, {
  publish: postArticle,
})(CreateArticleComponent);
