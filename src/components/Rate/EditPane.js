import React from 'react';

import { Card, Tag, Button } from 'antd';
import Brief from './Brief';
import Prompt from '../Prompt/Prompt';

import { connect } from 'react-redux';
import { store } from '../../redux/store';


export default
connect(null, null)(
class EditPane extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      students: ['Alex', 'Matt', 'Kelly', 'Jeff'],
      studentIndex: 3,
      questionIndex: 2,
      prompts: [],
      nextReady: false
    };
    store.dispatch({
      type: 'INIT_ADD_PROMPT',
      payload: this.addPrompt
    })
  }

  getInstructions = () => {
    let text, color;
    switch (this.state.prompts.length) {
      case 0:
        text = "Click a choice on the right side to start giving feedback.";
        color = 'grey';
        break;
      case 1:
        text = 'One more prompt required.';
        color = '#f5222d';
        break;
      default:
        text = 'Continue when ready.';
        color = '#52c41a';
    }
    return (
      <p onClick={this.addPrompt} style={{
        color: color,
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none'
      }}>
        {text}
      </p>
    );
  }

  addPrompt = (prompt) => {
    this.setState({
      prompts: this.state.prompts.concat([prompt.id]),
      nextReady: this.state.prompts.length > 0
    });
  }

  getQuestionHeader = () => {
    let text = ['Leadership', 'Productivity', 'Engagement'][this.state.questionIndex];
    return <h1>{text}</h1>;
  }

  renderBottomButton = () => {
    let type = 'primary', icon = 'down', text = '';
    let style = { flexGrow: 1 };
    if (!this.state.nextReady) {
      type = 'disabled';
      icon = 'close';
    } else if (this.state.questionIndex == 2 && this.state.studentIndex == this.state.students.length - 1) {
      icon = '';
      text = 'Submit';
      style['backgroundColor'] = '#52c41a';
      style['borderColor'] = '#52c41a';
    } else if (this.state.questionIndex == 2) {
      icon = '';
      text = 'Next Student';
    }
    return (
      <Button block type={type} style={style} icon={icon}>
        {text}
      </Button>
    );
  }

  renderTopButton = () => {
    let type = 'primary', icon = 'up', text = '';
    if (this.state.questionIndex == 0 && this.state.studentIndex == 0) {
      icon = 'close';
      type = 'disabled';
    } else if (this.state.questionIndex == 0) {
      icon = '';
      text = 'Previous Student';
    }
    return (
      <Button block type={type}  style={{ flexGrow: 1 }} icon={icon}>
        {text}
      </Button>
    );
  }

  handleWheel = (event) => {
    event.preventDefault()
    if (event.deltaY > 50) {
      console.log("up");
    } else if (event.deltaY < -50) {
      console.log("down");
    }
  }

  render = () => {
    return (
      <div onWheel={this.handleWheel} className="Rate-edit-pane">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          marginRight: 0,
          marginBottom: 10,
          marginLeft: 20,
          marginTop: 10
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: -13,
            marginLeft: -10,
            zIndex: 1
          }}>
            {this.renderTopButton()}
          </div>
          <Card
            style={{
              margin: 20,
              marginRight: 10,
              marginTop: 10,
              marginLeft: 0,
              height:'100%',
              marginBottom: 10
            }}
          >
            {
              this.getQuestionHeader()
            }
            {
              this.getInstructions()
            }
            {
              this.state.prompts.map( prompt => {
                  return (<Prompt gradedName={this.state.students[this.state.studentIndex]}></Prompt>)
            })}
          </Card>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: -20,
            marginLeft: -10
          }}>
            {this.renderBottomButton()}
          </div>
        </div>
      </div>
    )
  }
})
