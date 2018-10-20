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
      ]
    };
    this.yieldElement = this.yieldElement.bind(this);
    this.startedEditing = this.startedEditing.bind(this);
    this.createMessage();
  }

  startedEditing () {
    this.startedEditing = true;
  }

  yieldElement (element, index) {
    let nextElement;
    var opts = {
      key : index
    };

    switch (element.type) {
      case 'gradedName':
        if (this.state.startedEditing) {
          nextElement = <p className="prompt-element prompt-element__name" {...opts}>{element.value}</p>;
        } else {
          nextElement = <p className="prompt-element prompt-element__name" {...opts}>{element.hint}</p>;
        }
        break;
      case 'fillIn':
        nextElement = <PromptFillIn hint={element.hint}></PromptFillIn>;
        break;
      case 'text':
      default:
        nextElement = <p className="prompt-element prompt-element__text" {...opts}>{element.value}</p>
        break;
    }
    this.state.elements.push(nextElement);
  }

  createMessage () {
    //Basically we grab this from wherever we store Kelly's templates
    let messageTemplate = [
      {
        type : 'gradedName',
        hint : 'An outstanding student',
        value : this.state.gradedName
      },
      {
        type : 'text',
        value :'\u00A0did a really great job of tying in all of the needed things, like when she\u00A0'
      },
      {
        type : 'fillIn',
        hint : 'did a lot of great work',
        value : ''
      },
      {
        type : 'text',
        value : '.'
      }
    ];
    messageTemplate.forEach(this.yieldElement);
  }

  render () {
    return (
      <span>
        <div className="prompt-oval">
          {this.state.elements}
        </div>
      </span>
    );
  }
}

export default PromptUI;
