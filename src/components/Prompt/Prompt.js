import React, {Component} from 'react';
import {Tag} from 'antd';
import './PromptUI.css';

import PromptFillIn from './PromptFillIn';

class Prompt extends Component {
  constructor (props) {
    super(props);
    this.state = {
      startedEditing : false,
      closing : false,
      elements : [
        {
          "type" : "gradedName",
          "placeholder" : "Outstanding Student"
        },
        {
          "type" : "text",
          "value" :"\u00A0stepped out of their comfort zone by taking on the challenge of\u00A0"
        },
        {
          "type" : "fillIn",
          "placeholder" : "learning to write JSON",
          "value" : ""
        },
        {
          "type" : "text",
          "value" : ", efficiently learning and working on a new skill even though it may have been new or hard for them."
        }
      ]
    };
  }

  handleClose = () => {
    this.setState({closing : true});
  }

  startEditing = () => {
    this.setState({startedEditing : true});
  }

  yieldElement = (element, index) => {
    let nextElement;
    var opts = {
      key : index
    };

    switch (element.type) {
      case 'gradedName':
        if (this.state.startedEditing) {
          nextElement = <span className="prompt-element prompt-element__name" {...opts}>{this.props.gradedName}</span>;
        } else {
          nextElement = <span className="prompt-element prompt-element__name prompt-element__name-placeholder" {...opts}>{element.placeholder}</span>;
        }
        break;
      case 'fillIn':
        nextElement = <PromptFillIn placeholder={element.placeholder} hint={element.hint} startEditing={this.startEditing}></PromptFillIn>;
        break;
      case 'text':
      default:
        nextElement = <span className="prompt-element prompt-element__text" {...opts}>{element.value}</span>
        break;
    }
    return nextElement;
  }

  render () {
    let tagStyle = {
      whiteSpace: 'normal',
      overflow: 'hidden',
      display: 'inline-flex',
      marginBottom: 15
    };
    if (!this.state.closing) {
      tagStyle['height'] = 'auto';
    }

    return (
      <Tag className="prompt-tag" closable='true'
        onClose={this.handleClose}
        style={tagStyle}>
        <div className="prompt-oval">
          {this.state.elements.map(this.yieldElement)}
        </div>
      </Tag>
    );
  }
}

export default Prompt;
