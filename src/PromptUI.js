import React, {Component} from 'react';
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
          value :'\u00A0did a  of the needed things, \u00A0'
        },
        {
          type : 'fillIn',
          placeholder : 'did a lot of great work',
          hint : 'example of great work',
          value : ''
        },
        {
          type : 'text',
          value :'test oweorbwotb'
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
      <div className="prompt-oval">
          {this.state.elements.map(this.yieldElement)}
      </div>
    );
  }
}

export default PromptUI;
