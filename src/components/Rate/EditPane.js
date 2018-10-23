import React from 'react';

import { Card, Tag, Button } from 'antd';
import Brief from './Brief';
import Prompt from '../Prompt/Prompt';

import { connect } from 'react-redux';
import { store } from '../../redux/store';

let promptComponents = [];

export default
  connect((state) => {
    return {
      studentIndex: state.pane.studentIndex
    }
  }, (dispatch) => {
    return {
      setStudentIndex: (index) => dispatch({
        type: "SET_STUDENT_INDEX",
        index: index
      }),
      initDeletePrompt: (func) => dispatch({
        type: "INIT_DELETE_PROMPT",
        payload: func
      }),
      initAddPrompt: (func) => dispatch({
        type: "INIT_ADD_PROMPT",
        payload: func
      })
    }
  })(
    class EditPane extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          students: ['Alex', 'Matt', 'Kelly', 'Jeff'],
          questionIndex: 0,
          nextReady: false,
          opacity: 1,
          prompts: []
        };
        this.props.initDeletePrompt(this.deletePrompt)
        this.props.initAddPrompt(this.addPrompt)
      }

      _submit = () => {
        alert("submitted!")
      }

      deletePrompt = (prompt) => {
        prompt = JSON.parse(JSON.stringify(prompt))
        console.log(prompt.shortForm)
        let prompts = JSON.parse(JSON.stringify(this.state.prompts))
        prompts = prompts.filter((p) => p.uniqueId !== prompt.uniqueId)
        console.log(prompts.filter((p) => p.uniqueId !== prompt.uniqueId).map((p) => p.shortForm))

        const comps = []
        console.log("PROMPTS LENGTH" + prompts.length)
        for (let i = 0; i < prompts.length; i++) {
          comps.push(<Prompt gradedName={this.state.students[this.props.studentIndex]} prompt={prompts[i]} />)
        }
        promptComponents = comps;
        this.setState({
          prompts: prompts
        })
        console.log(promptComponents)
      }

      addPrompt = (prompt) => {
        const prompts = [...this.state.prompts, prompt]
        promptComponents = prompts.map((p) => {
          return (<Prompt gradedName={this.state.students[this.props.studentIndex]} prompt={p} />)
        })
        this.setState({
          prompts: prompts
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
          <p style={{
            color: color,
            userSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}>
            {text}
          </p>
        );
      }

      getQuestionHeader = () => {
        let text = ['Leadership', 'Productivity', 'Engagement'][this.state.questionIndex];
        return <h1 style={{ transition: '1s linear' }}>{text}</h1>;
      }

      renderBottomButton = () => {
        let type = 'primary', icon = 'down', text = '';
        let style = { flexGrow: 1 };
        if (this.state.prompts.length < 2) {
          type = 'disabled';
          icon = 'close';
        } else if (this.state.questionIndex == 2 && this.props.studentIndex == this.state.students.length - 1) {
          icon = '';
          text = 'Submit';
          style['backgroundColor'] = '#52c41a';
          style['borderColor'] = '#52c41a';
        } else if (this.state.questionIndex == 2) {
          icon = '';
          text = 'Next Student';
        }
        return (
          <Button block type={type} style={style} icon={icon} onClick={() => {
            if (this.state.prompts.length < 2) {
              return;
            }

            if (this.state.questionIndex == 2 && this.props.studentIndex == this.state.students.length - 1) {
              this._submit();
              return;
            }

            if (this.state.questionIndex == 2) {
              this.props.setStudentIndex(this.props.studentIndex + 1)
              this.setState({
                questionIndex: 0
              })
              return
            }

            this.setState({
              questionIndex: this.state.questionIndex == 2 ? this.state.questionIndex : this.state.questionIndex + 1,
              opacity: 0
            })
            setTimeout(() => {
              this.setState({
                opacity: 1
              })
            }, 400)
          }}>
            {text}
          </Button>
        );
      }

      renderTopButton = () => {
        let type = 'primary', icon = 'up', text = '';
        if (this.state.questionIndex == 0 && this.props.studentIndex == 0) {
          icon = 'close';
          type = 'disabled';
        } else if (this.state.questionIndex == 0) {
          icon = '';
          text = 'Previous Student';
        }
        return (
          <Button block type={type} style={{ flexGrow: 1 }} icon={icon} onClick={() => {
            if (this.state.questionIndex == 0 && this.props.studentIndex == 0) {
              return;
            }

            if (this.state.questionIndex == 0) {
              this.props.setStudentIndex(this.props.studentIndex - 1)
              this.setState({
                questionIndex: 2
              })
              return
            }

            this.setState({
              questionIndex: this.state.questionIndex == 0 ? this.state.questionIndex : this.state.questionIndex - 1,
              opacity: 0
            })
            setTimeout(() => {
              this.setState({
                opacity: 1
              })
            }, 400)
          }}>
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
              marginTop: 10,
              opacity: this.state.opacity,
              transition: 'opacity 0.5s'
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
                  height: '100%',
                  marginBottom: 10
                }}
              >
                {
                  this.getQuestionHeader()
                }
                {
                  this.getInstructions()
                }
                {(() => promptComponents)()}
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
