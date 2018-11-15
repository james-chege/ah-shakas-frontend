import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Chip } from 'react-materialize';
import Slider from 'react-animated-slider';
import Navbar from './Navbar';
import EmptyArticlesComponent from './EmptyArticlesComponent';
import '../assets/styles/HomePageComponent.scss';

class HomePageComponent extends React.Component {
  componentDidMount() {
    const { fetchAll } = this.props;
    fetchAll();
  }

  render() {
    const { articles, history } = this.props;
    const articlesAvailable = (articles && articles.results && articles.results.length);

    let bannerArticles = [];
    let recentArticles = [];
    let popularArtilces = [];

    if (articlesAvailable) {
      const results = [...articles.results];
      recentArticles = [...results].splice(0, 4);
      bannerArticles = results.splice(0, 3);
      popularArtilces = results.length ? results.splice(0, 4) : bannerArticles;
    }

    return (
      <>
        <Navbar />
        {(!articlesAvailable)
          ? (
            <EmptyArticlesComponent />
          ) : (
            <>
              <Slider autoplay duration={4000} className="slider-wrapper">
                {bannerArticles.map(item => (
                  <div
                    key={item.slug}
                    className="slider-content"
                    style={{ background: `url('${item.image_url}') no-repeat center center` }}
                  >
                    <div className="inner">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <button onClick={() => history.push(`article/${item.slug}`)} type="button">Read More</button>
                    </div>
                    <section>
                      <img src={item.author.image_url} alt="" />
                      <span>
                        Posted by
                        {' '}
                        <strong>{item.author.username}</strong>
                      </span>
                    </section>
                  </div>
                ))}
              </Slider>
              <div className="container-fluid home-articles">
                <Row>
                  <Col m={9} s={12} className="recommended">
                    <h5 className="header">Popular Reads</h5>
                    {popularArtilces.map(article => (
                      <div key={article.slug} className="article">
                        {article.image_url
                          && <div className="img-wrapper" style={{ background: `url('${article.image_url}') center center` }}>&nbsp;</div>
                        }
                        <a href={`/article/${article.slug}`}>{article.title}</a>
                        <p style={{ margin: 0 }}>
                          <i className="grey-text">
                            By
                            {' '}
                            {article.author.username}
                          </i>
                        </p>
                        <p>{article.description}</p>
                        {article.tags
                            && article.tags.map(tag => <Chip key={tag}>{tag}</Chip>)
                          }
                      </div>
                    ))}
                  </Col>
                  <Col m={3} s={12} className="featured">
                    <h5 className="header">Recent Articles</h5>
                    {recentArticles.map(article => (
                      <div key={article.slug} className="article card">
                        <a href={`/article/${article.slug}`}>
                          {article.image_url
                            && <div className="img-wrapper" style={{ background: `url('${article.image_url}') center center` }}>&nbsp;</div>
                          }
                          <div className="inner">
                            <a className="title" href={`/article/${article.slug}`}>{article.title}</a>
                            <span>
                              <i className="grey-text">
                                By
                                {' '}
                                {article.author.username}
                              </i>
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </Col>
                </Row>
              </div>
            </>
          )
        }
      </>
    );
  }
}

HomePageComponent.propTypes = {
  history: PropTypes.shape({}),
  fetchAll: PropTypes.func.isRequired,
  articles: PropTypes.shape({}),
};

HomePageComponent.defaultProps = {
  history: {},
  articles: {},
};

export default HomePageComponent;
