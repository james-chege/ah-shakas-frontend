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
import CommentsContainer from '../../containers/Comments/CommentsContainer';
import LikeDislike from '../../containers/Articles/LikeDislikeContainer';
import SocialShare from './ShareComponent';
import '../../assets/styles/Highlight.scss';
// eslint-disable-next-line
import HighlightMessage from '../Messages/HighlightMessage';
import HighlightsComments from './HighlightsCommentsComponent';

class ReadUpdateArticleComponent extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { slug } = match.params;
    this.state = {
      slug,
      readOnly: true,
      highlightedText: '',
      visible: false,
    };
  }


  componentWillMount() {
    const { match } = this.props;
    const { params } = match;
    const { slug } = params;
    const { getHighlight } = this.props;
    getHighlight(slug);
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
    const comments = slug === '' || slug === undefined ? '' : (
      <div className="comments">
        <CommentsContainer slug={slug} />
      </div>
    );

    if ((authUser() !== null) && authUser().username) {
      document.onmouseup = () => {
        const highlightedText = window.getSelection().toString();
        if (highlightedText.length > 1) {
          document.getElementById('highlightMessage').style.display = 'block';
          this.setState({ highlightedText });
          const { highlightStore } = this.props;
          highlightStore(highlightedText);
        }
      };
    }

    const { data } = this.props;
    const { highlights } = data;

    let highlightedArticle = '';

    if (article.body) {
      highlightedArticle = JSON.parse(article.body);
    }
    if (highlights && article.body) {
      highlights.map(highlight => highlight.snippet).forEach((phrase) => {
        // eslint-disable-next-line
        for (const block of highlightedArticle.blocks) {
          if (block.type === 'unstyled') {
            const offset = block.text.indexOf(phrase);
            if (offset !== -1) {
              block.inlineStyleRanges.push({ offset, length: phrase.length, style: 'CUSTOM_COLOR_#59AA92' });
            }
          }
        }
      });
    }
    const { highlightedText } = this.state;
    return (
      <div>
        <Navbar {...this.props} />
        <HighlightMessage highlightedText={highlightedText} />
        <div className="container navigation">
          <Row>
            <Col s={11}>
              {(authUser() && highlightedArticle
                  && article.author.username === authUser().username
                  && readOnly)
                  && (
                  <React.Fragment>
                    { /* eslint-disable-next-line */}
                    <p onClick={() => this.setReadOnly(false)} className="publish-btn teal-text"> Edit </p>
                  </React.Fragment>
                  )
              }
              {!readOnly && !updateLoading
                && (
                  <React.Fragment>
                    { /* eslint-disable-next-line */}
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
                {article.tags && article.tags.map(tag => <Chip key={tag}>{tag}</Chip>)}
              </Col>
            </div>
            <div className="article">
              <Col s={11}>
                {highlightedArticle
                  && (
                    <EditorComponent
                      spellcheck
                      readOnly={readOnly}
                      content={highlightedArticle}
                      onChange={this.onArticleChange}
                    />
                  )
                }
              </Col>
            </div>
            {(authUser() && article.body
              && article.author.username !== authUser().username)
              ? (
                <React.Fragment>
                  <div id="bookmark">
                    <Bookmark bookmarked={article.favourited} slug={slug} />
                    <SocialShare title={article.title} slug={article.slug} />
                  </div>
                  <div id="likedislike">
                    <LikeDislike slug={slug} likeStatus={article.like_status} />
                  </div>
                </React.Fragment>
              ) : ''
            }

          </Row>
          <div className="col s12 card-content">
            <div className="col s6">
              {(authUser() && article.body
                && article.author.username !== authUser().username)
                ? <p>How did you find this article?</p> : ''
              }
              <Row>
                <Col s={3} m={2} className="rating">
                  {averageRate}
                </Col>
                <Col s={9} m={10} className="rate">
                  {(authUser() && article.body
                      && article.author.username !== authUser().username)
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
          {comments}
          <Col s={12}>
            <HighlightsComments highlights={highlights} />
          </Col>
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
  highlightStore: PropTypes.func.isRequired,
  getHighlight: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
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
