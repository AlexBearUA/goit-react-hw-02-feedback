import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackWidget/FeedbackWidget.module.css';

class FeedbackWidget extends Component {
  handlePositiveFeedback = () => {
    console.log('clik in good');
  };

  handleNegativeFeedback = () => {
    console.log('clik in bad');
  };

  handleNeutralFeedback = () => {
    console.log('clik in neutral');
  };
  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type="button" onClick={this.handlePositiveFeedback}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleNeutralFeedback}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleNegativeFeedback}>
              Bad
            </button>
          </li>
        </ul>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              Good: <span>0</span>
            </li>
            <li>
              Neutral: <span>0</span>
            </li>
            <li>
              Bad: <span>0</span>
            </li>
          </ul>
          <p>
            Positibe feedback: <span>0</span>%
          </p>
        </div>
      </>
    );
  }
}
export default FeedbackWidget;
