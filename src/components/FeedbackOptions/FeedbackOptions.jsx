import { Component } from 'react';
import { FeedbackButton, FeedbackButtons } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <FeedbackButtons>
        {options.map(option => (
          <FeedbackButton type="button" onClick={onLeaveFeedback} key={option}>
            {option}
          </FeedbackButton>
        ))}
      </FeedbackButtons>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
