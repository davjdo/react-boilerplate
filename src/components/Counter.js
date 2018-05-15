import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div>
        Salut<br />
        Compteur : {this.state.counter}
        <br />
        <button onClick={this.increment}>Incrementer</button>
      </div>
    );
  }
}

export default Counter;
