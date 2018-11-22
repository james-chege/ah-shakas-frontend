import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Chip } from 'react-materialize';
import Navbar from '../Navbar';
import EditorComponent from './EditorComponent';
import authUser from '../../utils/authUser.util';
import MyRatingContainer from '../../containers/Rating/MyRatingContainer';
import AverageRatingContainer from '../../containers/Rating/AverageRatingContainer';
import TagsComponent from './TagsComponent';
import Bookmark from '../../containers/Articles/BookmarkContainer';

class ReadUpdateArticleComponent extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { slug } = match.params;
    this.state = {
      slug,
      readOnly: true,
      visible: false,
    };
  }

  componentDidMount() {
    const { fetch } = this.props;
    const { slug } = this.state;
    const { getRatings } = this.props;
    fetch(slug);
    getRatings(slug);
  }

  componentDidUpdate(prevProps) {
    const { updateState, alert } = this.props;
    const { loading: currentLoading, success } = updateState;
    const wasLoading = (prevProps.updateState.loading && !currentLoading);
    if (wasLoading && success) {
      alert.show('Successfully updated...');
    }
  }

  onPublish = () => {
    const { update } = this.props;
    update(this.state);
    this.setReadOnly(true);
  };

  onTagsChange = (tags) => {
    this.setState({ tags });
  };

  onArticleChange = (article) => {
    this.setState(article);
  };

  setReadOnly = (readOnly) => {
    const { alert } = this.props;
    if (!readOnly) {
      alert.show('Edit enabled!');
    }
    this.setState({ readOnly });
  };

  handleDropDown = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  reorderTags = (arr) => {
    const data = [];
    arr.forEach((tag) => {
      data.push({ tag });
    });
    return data;
  };

  render() {
    const { readOnly, visible } = this.state;
    const { fetchState, updateState, alert } = this.props;
    const { article } = fetchState;
    const { loading: updateLoading } = updateState;
    const { slug } = this.state;
    const myRate = slug === '' || slug === undefined ? '' : (
      <div className="ratings">
        <MyRatingContainer alert={alert} slug={slug} />
      </div>
    );
    const averageRate = slug === '' || slug === undefined ? '' : (
      <div>
        <AverageRatingContainer />
      </div>
    );
    return (
      <div>
        <Navbar />
        <div className="container navigation">
          <Row>
            <Col s={11}>
              {(article.body
                  && article.author.username === authUser.username
                  && readOnly)
                  && (
                  <React.Fragment>
                    { /* eslint-disable-next-line */ }
                    <p onClick={() => this.setReadOnly(false)} className="publish-btn teal-text"> Edit </p>
                  </React.Fragment>
                  )
                }
              {!readOnly && !updateLoading
                  && (
                  <React.Fragment>
                    { /* eslint-disable-next-line */ }
                  <p onClick={this.handleDropDown} className='publish-btn teal-text'>Edit Tags </p>
                    <TagsComponent
                      visible={visible}
                      onPublish={this.onPublish}
                      onTagsChange={this.onTagsChange}
                      tags={this.reorderTags(article.tags)}
                    />
                  </React.Fragment>
                  )
                }
            </Col>
            <div id="tag-chips">
              <Col s={12}>
                {article.tags && article.tags.map(tag => <Chip>{tag}</Chip>)}
              </Col>
            </div>
            <div className="article">
              <Col s={11}>
                {article.body
                  && (
                    <EditorComponent
                      spellcheck
                      readOnly={readOnly}
                      content={JSON.parse(article.body)}
                      onChange={this.onArticleChange}
                    />
                  )
                }
              </Col>
            </div>
            {(article.body
              && article.author.username !== authUser.username)
              ? (
                <div id="bookmark">
                  <Bookmark bookmarked={article.favourited} slug={slug} />
                </div>
              ) : ''
            }
          </Row>
          <div className="col s12 card-content">
            <div className="col s6">
              {(article.body
                && article.author.username !== authUser.username)
                ? <p>How did you find this article?</p> : ''
              }
              <Row>
                <Col s={3} m={2} className="rating">
                  {averageRate}
                </Col>
                <Col s={9} m={10} className="rate">
                  {(article.body
                      && article.author.username !== authUser.username)
                  && (
                  <React.Fragment>
                    { /* eslint-disable-next-line */ }
                      {myRate}
                  </React.Fragment>
                  )
                  }
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReadUpdateArticleComponent.propTypes = {
  alert: PropTypes.func,
  getRatings: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
  updateState: PropTypes.shape({
    loading: PropTypes.bool,
    success: PropTypes.bool,
  }),
  fetchState: PropTypes.shape({
    loading: PropTypes.bool,
    success: PropTypes.bool,
  }),
};

ReadUpdateArticleComponent.defaultProps = {
  alert: () => { },
  match: { params: { slug: '' } },
  updateState: {
    loading: false,
    success: false,
  },
  fetchState: {
    loading: false,
    success: false,
  },
};

export default ReadUpdateArticleComponent;
