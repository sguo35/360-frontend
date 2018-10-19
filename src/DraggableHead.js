import React, { Component } from 'react';
import './App.css';
import Draggable from 'react-draggable';

class DraggableHead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleStop = this.handleStop.bind(this);
  }

  handleStop(e, data) {
    var width = 1000;
    var counts = this.props.counts,
    goal = data.x / width * 5;
    console.log(goal);
    var closest = counts.reduce(function(prev, curr) {
      return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });
    this.setState({x: width * closest / 5 + 50, y:data.y, position: true});
    this.setState({ position: false})
  }

  render() {
    const dragHandlers = {onStart: this.onStart};
    return (
        <Draggable
          bounds="parent"
          onStop={this.handleStop}
          defaultPosition={{x: 0, y: 0}}
          position={this.state.position ? {x:this.state.x, y:this.state.y} : undefined}
          //{...dragHandlers}
          >
          <p style={{ display: 'table'}}>Sample head</p>
        </Draggable>
    );
  }
}

export default DraggableHead;
