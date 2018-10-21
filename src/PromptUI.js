import React, {Component} from 'react';
import {Icon, Tag} from 'antd';
import './PromptUI.css';

import PromptFillIn from './PromptFillIn';

class PromptUI extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gradedName : props.gradedName,
      startedEditing : false,
      elements : [
        {
          type : 'gradedName',
          placeholder : 'An outstanding student',
          value : props.gradedName
        },
        {
          type : 'text',
          value :'\u00A0was willing to go above and beyond in their work output, including\u00A0'
        },
        {
          type : 'fillIn',
          placeholder : 'producing a high quality product that exceeded expectations',
          hint : 'example of great work',
          value : ''
        },
        {
          type : 'text',
          value : '. They were also really good at\u00A0'
        },
        {
          type : 'fillIn',
          placeholder : 'producing a high quality product that exceeded expectations',
          hint : 'example of great work',
          value : ''
        },
        {
          type : 'text',
          value : '.'
        }
      ]
    };
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
          nextElement = <span className="prompt-element prompt-element__name" {...opts}>{element.value}</span>;
        } else {
          nextElement = <span className="prompt-element prompt-element__name" {...opts}>{element.placeholder}</span>;
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
    return (
      <Tag closable={true}className="prompt-oval">
        {this.yieldElement(this.state.elements[2])}
      </Tag>
    );
  }
}
// <div className="prompt-oval">
//   <Icon type='close' style={{float:'right'}}></Icon>
//   <div>
//
//   </div>
// </div>

export default PromptUI;
