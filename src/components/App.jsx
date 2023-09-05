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

  render() {
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
          ></Statistic>
        </Section>
      </>
    );
  }
}
