import { Component } from 'react';
import Section from './Section/Section';
import Categories from './Categories/Categories';
import Statistic from './Statistic/Statistic';

// export const App = () => {
//   return (
//     <div>
//       <p>Please leave feedback</p>
//       <div>
//         <button type="button"></button>
//         <button type="button"></button>
//         <button type="button"></button>
//       </div>
//       <h3>Statistics</h3>
//       <p>Good: </p>
//       <p>Neutral: </p>
//       <p>Bad: </p>
//     </div>
//   );
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterValues = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  counterPositivePercentage = () => {
    const sum = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );

    const percentage = (this.state.good / sum) * 100;

    return percentage;
  };

  render() {
    console.log(Object.values(this.state));
    return (
      <>
        <Section title="Please leave feedback">
          <Categories categories={Object.keys(this.state)}></Categories>
        </Section>
        <Section title="Statistics">
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.counterValues()}
            positivePercentage={this.counterPositivePercentage()}
          ></Statistic>
        </Section>
      </>
    );
  }
}
