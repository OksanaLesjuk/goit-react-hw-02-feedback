import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.countTotalFeedback();
    const percentage = Math.round((this.state.good / sum) * 100);
    return percentage;
  };

  handleCategoriesFeedback = ({ target }) => {
    this.setState(prev => ({
      [target.textContent]: prev[target.textContent] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleCategoriesFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
