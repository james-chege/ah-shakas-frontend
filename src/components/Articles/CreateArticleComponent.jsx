import React from 'react';
import { Row, Col } from 'react-materialize';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import EditorComponent from './EditorComponent';

class CreateArticleComponent extends React.Component {
  componentDidUpdate(prevProps) {
    const { history, postArticle, alert } = this.props;
    if (!prevProps.success && postArticle.success) {
      alert.show('Successfully published article!');
      history.push(`/article/${postArticle.article.slug}`);
    }
  }

  onPublish = () => {
    const { publish } = this.props;
    publish(this.state);
  };

  onArticleChange = (article) => {
    this.setState(article);
  };

  render() {
    const defaultContent = {
      blocks: [{ text: '', type: 'header-two' }], entityMap: {},
    };
    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginTop: '20px' }}>
          <Row>
            <Col s={12}>
              { /* eslint-disable-next-line */ }
              <p onClick={this.onPublish} className="publish-btn teal-text">Publish </p> 
            </Col>
            <Col s={12} className="editor">
              <EditorComponent
                spellcheck
                content={defaultContent}
                onChange={this.onArticleChange}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

CreateArticleComponent.propTypes = {
  alert: PropTypes.shape({}).isRequired,
  publish: PropTypes.func.isRequired,
  postArticle: PropTypes.shape({}),
  history: PropTypes.shape({}).isRequired,
};

CreateArticleComponent.defaultProps = {
  postArticle: {},
};

export default CreateArticleComponent;
