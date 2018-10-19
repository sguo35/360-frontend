import React, {Component} from 'react';

class PromptUI extends Component {
  createMessage () {
    //Basically we grab this from wherever we store Kelly's templates
    let message = {
      {
        type : 'text',
        value : ''
      },
    };

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
        <div style={style}>
          <p style={{margin : 0}}>BOBOBOB OBOBSD SDlhasd Sldajsdlaksd KSjdhasflkd aksdjhaslfkjashdfl</p>
        </div>
      </span>
    );
  }
}

export default PromptUI;
