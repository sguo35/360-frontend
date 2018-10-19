import React, { Component } from 'react';
import './App.css';
import DraggableHead from './DraggableHead'

class DraggablePane extends Component {
  constructor (props) {
    super(props);
    this.state = {headSpots : [[], [], [], [], []]};
  }
  render() {
    return (
      <div style={{height : 400, width : '75%', border : '1px solid'}}>
        <DraggableHead counts={[1, 2, 3, 4, 5]}>
        </DraggableHead>
      </div>
    )
  }
}

export default DraggablePane
