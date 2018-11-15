import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-materialize';
import Navbar from '../Navbar';
import EditorComponent from './EditorComponent';
import authUser from '../../utils/authUser.util';

class ReadUpdateArticleComponent extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { slug } = match.params;
    this.state = {
      slug,
      readOnly: true,
    };
  }

  componentDidMount() {
    const { fetch } = this.props;
    const { slug } = this.state;
    fetch(slug);
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

  onArticleChange = (article) => {
    this.setState(article);
  }

  setReadOnly = (readOnly) => {
    const { alert } = this.props;
    if (!readOnly) {
      alert.show('Edit enabled!');
    }
    this.setState({ readOnly });
  }

  render() {
    const { readOnly } = this.state;
    const { fetchState, updateState } = this.props;
    const { article } = fetchState;
    const { loading: updateLoading } = updateState;
    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginTop: '20px' }}>
          <Row>
            <Col s={12}>
              {(article.body
                  && article.author.username === authUser.username
                  && readOnly)
                  && <>
                    { /* eslint-disable-next-line */ }
                    <p onClick={() => this.setReadOnly(false)} className="publish-btn teal-text"> Edit </p>
                  </>
                }
              {!readOnly && !updateLoading
                  && <>
                    { /* eslint-disable-next-line */ }
                    <p onClick={this.onPublish} className="publish-btn teal-text">Publish </p>
                  </>
                }
            </Col>
            <Col s={12}>
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
          </Row>
        </div>
      </div>
    );
  }
}

ReadUpdateArticleComponent.propTypes = {
  alert: PropTypes.func,
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
  alert: () => {},
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
