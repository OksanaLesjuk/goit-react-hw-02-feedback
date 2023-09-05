import { Component } from 'react';

export default class Statistic extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: </li>
        <li>Positive feedback: %</li>
      </ul>
    );
  }
}
