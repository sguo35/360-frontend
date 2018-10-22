import React, { Component } from 'react';
import { Tag } from 'antd';

import { connect } from 'react-redux';

const uuidv4 = require('uuid/v4');
let i = 0;

export default 
connect((state) => {
  return {
    addPrompt: state.pane.addPrompt
  }
})(
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = { i: i }
    i += 1;
  }

  handleClick = () => {
    this.props.addPrompt()
  }

  render() {
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
})
