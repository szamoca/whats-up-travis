import React from 'react';
import DefaultButton from './DefaultButton/DefaultButton';
import BuilderDisplay from './BuilderDisplay/BuilderDisplay';

class SimpleCounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      builders: 0,
    };

    this.hireBuilder = this.hireBuilder.bind(this);
    this.fireBuilder = this.fireBuilder.bind(this);
  }

  hireBuilder() {
    this.setState(prevState => ({
      builders: prevState.builders + 1,
    }));
  }

  fireBuilder() {
    this.setState(prevState => ({
      builders: Math.max(prevState.builders - 1, 0),
    }));
  }

  render() {
    const { builders } = this.state;
    return (
      <div className="simple-counter-container">
        <DefaultButton className="builder-increase" handleClick={this.hireBuilder}>
          Hire Builder
        </DefaultButton>
        <BuilderDisplay className="builder-display" amount={builders} />
        <DefaultButton className="builder-decrease" handleClick={this.fireBuilder}>
          Fire Builder
        </DefaultButton>
      </div>
    );
  }
}

export default SimpleCounterApp;
