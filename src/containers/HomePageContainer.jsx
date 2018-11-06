import { connect } from 'react-redux';
import { fetchAllArticles } from '../actions/articles.action';
import HomePageComponent from '../components/HomePageComponent';

export const mapStateToProps = ({ article }) => ({
  articles: article.fetchAllArticles.article,
});

export default connect(mapStateToProps, {
  fetchAll: fetchAllArticles,
})(HomePageComponent);
