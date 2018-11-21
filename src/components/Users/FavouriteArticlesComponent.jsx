import React, { Component } from 'react';
import { Col, Chip, Row } from 'react-materialize';
import PropTypes from 'prop-types';

class FavouriteArticlesComponent extends Component {
  componentDidMount() {
    const { favouriteArticlesAction, username } = this.props;
    favouriteArticlesAction(username);
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="profile-body">
        <div className="stories container">
          <Row>
            <Col m={12} s={12} className="user-articles">
              <div id="stories-title">
                <p>Latest</p>
              </div>
              {articles.map(article => (
                <div key={article.article.slug} className="article">
                  <div className="article-title">
                    <a href={`/article/${article.slug}`}>{article.title}</a>
                  </div>
                  <p style={{ margin: 0 }}>
                    <a className="grey-text user-name" href={`/profiles/${article.article.author.username}`}>
                      By
                      {' '}
                      {article.article.author.username}
                    </a>
                  </p>
                  {article.article.image_url
                    && <div className="img-wrapper" style={{ background: `url('${article.article.image_url}') center center` }}>&nbsp;</div>
                  }
                  <p>{article.article.description}</p>
                  {article.article.tags
                      && article.article.tags.map(tag => <Chip key={tag}>{tag}</Chip>)
                    }
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

FavouriteArticlesComponent.propTypes = {
  favouriteArticlesAction: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object),
  username: PropTypes.string.isRequired,
};

FavouriteArticlesComponent.defaultProps = {
  articles: [],
};

export default FavouriteArticlesComponent;
