import React, {Component} from 'react';
import {Tag} from 'antd';
import {Draggable} from 'react-beautiful-dnd';

const uuidv4 = require('uuid/v4');
let i = 0;

export default class Brief extends Component {
  constructor (props) {
    super(props);
    this.state = {i : i}
    i += 1;
  }

  handleClick = () => {

  }

  render () {
    return (
      <Draggable draggableId={this.state.i} index={this.state.i}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
            <Tag color='green' onClick={this.handleClick} style={{
              marginBottom: 10,
              userSelect: 'none',
              MozUserSelect: 'none',
              WebkitUserSelect: 'none'
            }}>
              participated actively
            </Tag>
          </div>
        )}
      </Draggable>
    );
  }
}
