import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import css from 'components/FeedbackWidget/FeedbackWidget.module.css';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    switch (e.target.dataset.value) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;

      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;

      default:
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
    }
  };

  countTotalFeedback = () =>
    this.state.bad + this.state.good + this.state.neutral;

  countPositiveFeedbackPercentage = () =>
    Math.round(
      (this.state.good * 100) /
        (this.state.bad + this.state.good + this.state.neutral)
    ) || 0;

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button
              type="button"
              data-value="good"
              onClick={this.handleFeedback}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              data-value="neutral"
              onClick={this.handleFeedback}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              data-value="bad"
              onClick={this.handleFeedback}
            >
              Bad
            </button>
          </li>
        </ul>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              Good: <span>{this.state.good}</span>
            </li>
            <li>
              Neutral: <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad: <span>{this.state.bad}</span>
            </li>
            <li>
              Total: <span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              Positive feedback:{' '}
              <span>{this.countPositiveFeedbackPercentage()}</span>%
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default FeedbackWidget;
