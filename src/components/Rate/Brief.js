import React, { Component } from 'react';
import { Tag } from 'antd';

import { connect } from 'react-redux';

const uuidv4 = require('uuid/v4');
let i = 0;

export default
connect(null, (dispatch) => {
  return {
    addPromptToStore: (prompt) => dispatch({
      type: "ADD_PROMPT_TO_STORE",
      payload: prompt
    })
  }
})(
class Brief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: i
    }
    i += 1;
  }

  handleClick = (event) => {
    event.preventDefault()
    const prompt = JSON.parse(JSON.stringify(this.props.prompt))
    prompt['uniqueId'] = uuidv4()
    this.props.addPromptToStore(prompt)
  }

  render() {
    let color;
    switch (this.props.prompt.level) {
      case 1:
        color='red';
        break;
      case 2:
        color='gold';
        break;
      case 3:
        color='green';
        break;
    }
    return (
      <Tag color={color} onClick={this.handleClick} style={{
        marginBottom: 10,
        whiteSpace: 'normal',
        overflow: 'hidden',
        display: 'inline-flex',
        height: 'auto',
        lineHeight: 1,
        padding: 5,
        textAlign: 'center',
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none'
      }} >
        {this.props.prompt.shortForm}
      </Tag>
    );
  }
})
