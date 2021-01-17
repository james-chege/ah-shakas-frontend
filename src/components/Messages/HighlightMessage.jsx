import React, { Component } from 'react';
import { Button, Input, Col, Card } from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/articles.action';
import highlightRequest from '../../actions/highlight.action';
import StoreHighlightRequest from '../../actions/storeHighlightSnippet.action';
import authUser from '../../utils/authUser.util';
import GetHighlightRequest from '../../actions/getHighlight.action';

export class HighlightMessage extends Component {
  state = {
    data: {
      highlightComment: '',
    },
    isButtonDisabled: false,
    highlightedText: '',
  };

  componentDidMount() {
    this.setState({
      isButtonDisabled: false,
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { highlighting, getHighlight } = this.props;
    const { fetchState: { article: { slug } } } = this.props;
    const { data } = this.state;
    this.setState({
      isButtonDisabled: true,
    });
    const { highlightedText } = this.state;
    const { highlightComment } = data;
    if (highlightComment.length < 1) {
      const highlight = {
        highlight: {
          snippet: highlightedText,
          index: 0,
        },
      };
      await highlighting(slug, highlight);
      document.getElementById('highlightMessage').style.display = 'none';
      await getHighlight(slug);
      window.location.reload();
      // eslint-disable-next-line
    }
    else if (highlightComment.length > 1) {
      const highlight = { highlight: {
        snippet: highlightedText,
        index: 0,
        comment: highlightComment,
      },
      };
      highlighting(slug, highlight);
    }
  };

  onFocus = () => {
    this.setState({
      isButtonDisabled: false,
    });
  };

  onChange = (e) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [e.target.name]: e.target.value },
    });
  };

  cancelHighlight = () => {
    this.setState({ highlightedText: '' }, () => {
      document.getElementById('highlightMessage').style.display = 'none';
    });
  };


  render() {
    const { data } = this.state;
    const { isButtonDisabled } = this.state;
    if ((authUser() !== null) && authUser().username) {
      document.onmouseup = (e) => {
        const elementsFromPoint = document.elementsFromPoint(e.clientX, e.clientY);
        const isSelectedElementInDante = elementsFromPoint[2].classList.toString().indexOf('Draft') >= 0;
        if (!isSelectedElementInDante) return;
        const selectedDocTagName = elementsFromPoint[3].tagName;
        // if selection is probably title
        if (['H1', 'H2', 'H3'].includes(selectedDocTagName)) return;
        const highlightModal = document.getElementById('highlightMessage').style;
        highlightModal.display = 'block';
        highlightModal.position = 'absolute';
        highlightModal.top = `${window.pageYOffset + 150}px`;
        const highlightedText = window.getSelection().toString();
        if (highlightedText.length > 1) {
          this.setState({ highlightedText });
          const { highlightStore } = this.props;
          highlightStore(highlightedText);
        } else {
          this.setState({ highlightedText: '' }, () => {
            document.getElementById('highlightMessage').style.display = 'none';
          });
        }
      };
    }
    const initialProps = { ...this.props };
    const initialHighlightedText = initialProps.highlightedText;
    const currentState = { ...this.state };
    const userHighlight = currentState.highlightedText;
    return (
      <div className="HighlightComponent container floating" id="highlightMessage">
        <Card className="container">
          <Col className="highlighted container">
            <p>{ !userHighlight ? initialHighlightedText : userHighlight }</p>
          </Col>
          <Col className="container">
            <Input
              placeholder="comment(optional)"
              name="highlightComment"
              type="text"
              s={12}
              value={data.highlightComment}
              onChange={this.onChange}
              onFocus={this.onFocus}
            />
            <Col>
              <Button
                disabled={isButtonDisabled}
                className="waves-effect waves-light highlighting"
                onClick={this.onSubmit}
              >
                  Highlight
                <i className="large material-icons">highlight </i>
              </Button>
              <Button
                className="red dismiss"
                onClick={this.cancelHighlight}
              >
                  Dismiss
              </Button>
            </Col>
          </Col>
        </Card>
      </div>
    );
  }
}

HighlightMessage.propTypes = {
  highlighting: PropTypes.func.isRequired,
  highlightStore: PropTypes.func.isRequired,
  fetchState: PropTypes.shape({
    loading: PropTypes.bool,
    success: PropTypes.bool,
  }).isRequired,
};

export const mapStateToProps = ({ article, highlighting, highlightStore }) => ({
  fetchState: article.fetchArticle, ...highlighting, ...highlightStore,
});

export default connect(mapStateToProps, {
  fetch: fetchArticle,
  highlighting: highlightRequest,
  highlightStore: StoreHighlightRequest,
  getHighlight: GetHighlightRequest,
})(HighlightMessage);
