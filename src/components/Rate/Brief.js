import React, {Component} from 'react';
import {Tag} from 'antd';

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
      <Tag color='green' onClick={this.handleClick} style={{
        marginBottom: 10,
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none'
      }}>
        participated actively
      </Tag>
    );
  }
}
