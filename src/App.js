import React, { Component } from 'react';

import Display from './Display';
import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      startTime: 0,
      elapsedTime: 0,
      isRunning: false,
      animationFrameId: null,
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  formatTime(milliseconds) {
    return new Date(milliseconds).toISOString().slice(-13, -2);
  }

  start() {
    if (this.state.isRunning) { return; }

    this.setState((prevState) => {
      return {
        isRunning: true,
        startTime: Date.now() - prevState.elapsedTime
      };
    }, this.run);
  }

  run() {
    this.setState(prevState => {
      return {
        elapsedTime: Date.now() - prevState.startTime,
        animationFrameId: requestAnimationFrame(this.run.bind(this))
      };
    });
  }

  pause() {
    if (!this.state.isRunning) { return; }
    this.setState({
      isRunning: false
    });
    cancelAnimationFrame(this.state.animationFrameId);
  }

  reset() {
    this.setState({
      isRunning: false,
      elapsedTime: 0
    });
    cancelAnimationFrame(this.state.animationFrameId);
  }

  render() {
    return (
      <main className="app">

        <Display elapsedTime={this.formatTime(this.state.elapsedTime)}/>

        <section className="controls">
          <Button handleTimer={this.start}>start</Button>
          <Button handleTimer={this.pause}>pause</Button>
          <Button handleTimer={this.reset}>reset</Button>
        </section>

      </main>
    );
  }
}

export default App;
