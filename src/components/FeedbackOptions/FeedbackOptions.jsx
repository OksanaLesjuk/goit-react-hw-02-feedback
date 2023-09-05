import { Component } from 'react';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        {options.map(option => (
          <button type="button" onClick={onLeaveFeedback} key={option}>
            {option}
          </button>
        ))}
      </>
    );
  }
}
