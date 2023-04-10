import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends Component {
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
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        <h2
          style={{
            marginBottom: 30,
          }}
        >
          Statistics
        </h2>

        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
