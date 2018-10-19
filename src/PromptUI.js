import React, {Component} from 'react';

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
    this.createMessage();
  }

  yieldElement (element) {
    let nextElement;
    switch (element.type) {
      case 'gradedName':
        if (this.state.startedEditing) {
          nextElement = <p className="prompt-element__name" key={element.id}>{element.value}</p>;
        } else {
          nextElement = <p className="prompt-element__name" key={element.id}>{element.hint}</p>;
        }
        break;
      case 'fillIn':
        break;
      case 'text':
        nextElement = <p className="prompt-element__text" key={element.id}>{element.value}</p>
        break;
    }
    this.state.elements.push(nextElement);
  }

  createMessage () {
    //Basically we grab this from wherever we store Kelly's templates
    let messageTemplate = [
      {
        id : 0,
        type : 'gradedName',
        hint : 'An outstanding student',
        value : this.state.gradedName
      },
      {
        id : 1,
        type : 'text',
        value : 'did a really great job of tying in all of the needed things, like when she'
      },
      {
        id : 2,
        type : 'fillIn',
        hint : 'did a lot of great work',
        value : ''
      },
      {
        id : 3,
        type : 'text',
        value : '.'
      }
    ];
    messageTemplate.forEach(this.yieldElement);
  }

  render () {
    let style = {
      border : '1px solid',
      borderRadius : 15,
      padding : '5px 10px',
      margin : 5,
      display : 'flex',
      wordBreak : 'break-word'
    };
    return (
      <span>
        <div className="prompt-oval" style={style}>
          {this.state.elements}
        </div>
      </span>
    );
  }
}

export default PromptUI;
