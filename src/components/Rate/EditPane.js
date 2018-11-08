import React from 'react';

import { Card, Tag, Button, message } from 'antd';
import Brief from './Brief';
import Prompt from '../Prompt/Prompt';
import debounce from 'lodash/throttle';


import { connect } from 'react-redux';
import { store } from '../../redux/store';

import { serverUrl } from '../../constants';
import { projects } from '../Rate/RateLeft';


let promptComponents = [];

export default
  connect((state) => {
    return {
      studentIndex: state.pane.studentIndex,
      questionIndex: state.pane.questionIndex,
      email: state.info.emails.length > 0 ? state.info.emails[0].value : ""
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
      }),
      setquestionIndex: (index) => dispatch({
        type: "SET_QUESTION_INDEX",
        index: index
      })
    }
  })(
    class EditPane extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          students: [],
          nextReady: false,
          opacity: 1,
          prompts: [],
          promptResponses: [],
          loading: false
        };
        this.props.initDeletePrompt(this.deletePrompt)
        this.props.initAddPrompt(this.addPrompt);
      }

      componentWillReceiveProps = (nextProps) => {
        const team = projects['projects']
          .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0]['teams'].filter((team) => team['memberEmails'].includes(this.props.email))
        this.setState({
          students: team[0]['memberNames'].filter((name, idx) => team[0]['memberEmails'][idx] !== nextProps.email)
        })
      }

      componentDidMount = () => {
        setTimeout(() => {
          const team = projects['projects']
          .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0]['teams'].filter((team) => team['memberEmails'].includes(this.props.email))
        this.setState({
          students: team[0]['memberNames'].filter((name, idx) => team[0]['memberEmails'][idx] !== this.props.email)
        })
        }, 100)
      }

      _submit = () => {
        message.success("Submitted!")
      }

      deletePrompt = (prompt) => {
        const team = projects['projects']
          .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0]['teams'].filter((team) => team['memberEmails'].includes(this.props.email))
        prompt = JSON.parse(JSON.stringify(prompt))
        console.log(prompt.shortForm)
        let prompts = JSON.parse(JSON.stringify(this.state.prompts))
        let index = 0

        for (let i = 0; i < prompts.length; i++) {
          if (prompts[i].uniqueId === prompt.uniqueId) {
            index = i
          }
        }

        prompts = prompts.filter((p) => p.uniqueId !== prompt.uniqueId)
        console.log(prompts.filter((p) => p.uniqueId !== prompt.uniqueId).map((p) => p.shortForm))

        let promptResponses = JSON.parse(JSON.stringify(this.state.promptResponses))
        promptResponses.splice(index, 1)

        const comps = []
        console.log("PROMPTS LENGTH" + prompts.length)
        for (let i = 0; i < prompts.length; i++) {
          comps.push(<Prompt gradedName={team[0]['memberNames'][this.props.studentIndex]} prompt={prompts[i]} updateEdit={(edit) => {
            let promptResponses = JSON.parse(JSON.stringify(this.state.promptResponses))
            promptResponses[index] = edit
            this.setState({
              promptResponses: promptResponses
            })
          }} />)
        }
        promptComponents = comps;
        this.setState({
          prompts: prompts,
          promptResponses: promptResponses
        })
        console.log(promptComponents)
      }

      addPrompt = (prompt) => {
        const team = projects['projects']
          .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0]['teams'].filter((team) => team['memberEmails'].includes(this.props.email))
        this.setState({
          students: team[0]['memberNames'].filter((name, idx) => team[0]['memberEmails'][idx] !== this.props.email)
        })

        const prompts = [...this.state.prompts, prompt]
        promptComponents = prompts.map((p, index) => {
          return (<Prompt gradedName={team[0]['memberNames'][this.props.studentIndex]} prompt={p}
            updateEdit={(edit) => {
              let promptResponses = JSON.parse(JSON.stringify(this.state.promptResponses))
              promptResponses[index] = edit
              this.setState({
                promptResponses: promptResponses
              })
            }}
          />)
        })
        this.setState({
          prompts: prompts,
          promptResponses: this.state.promptResponses.concat([{}])
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
        let text = ['Leadership', 'Productivity', 'Engagement'][this.props.questionIndex];
        return <h1 style={{ transition: '1s linear' }}>{text}</h1>;
      }

      onBottomButtonClick = async () => {
        if (this.state.prompts.length < 2) {
          return;
        }

        this.setState({
          loading: true
        })

        const team = projects['projects']
          .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0]['teams'].filter((team) => team['memberEmails'].includes(this.props.email))

        if (this.props.questionIndex == 2 && team[0]['memberNames'][this.props.studentIndex] == this.state.students[this.state.students.length - 1]) {
          this._submit();
          await fetch(`${serverUrl}/submitProjectGrade`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              grader: this.props.email,
              graded: team[0]['memberEmails'][this.props.studentIndex],
              project: this.props.match.params.projectId
            })
          })
          return;
        }

        console.log(team)

        console.log(team[0]['memberEmails'][this.props.studentIndex])

        try {
          await fetch(`${serverUrl}/updateProjectGrade`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              responses: {
                [this.props.questionIndex]: {
                  prompts: this.state.prompts,
                  promptResponses: this.state.promptResponses
                }
              },
              grader: this.props.email,
              project: this.props.match.params.projectId,
              graded: team[0]['memberEmails'][this.props.studentIndex],
              questionIndex: this.props.questionIndex
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
        } catch (e) {
          console.log(e)
        }

        if (this.props.questionIndex == 2) {
          this.props.setStudentIndex(this.props.studentIndex + 1)
          promptComponents = []
          this.props.setquestionIndex(0)
          this.setState({
            prompts: [],
            responses: []
          })
          await fetch(`${serverUrl}/submitProjectGrade`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              grader: this.props.email,
              graded: team[0]['memberEmails'][this.props.studentIndex],
              project: this.props.match.params.projectId
            })
          })
          message.info("Responses saved.")
          this.setState({
            loading: false
          })
          return
        }
        this.props.setquestionIndex(this.props.questionIndex == 2 ? this.props.questionIndex : this.props.questionIndex + 1)
        this.setState({
          opacity: 0,
          prompts: [],
          responses: [],
          loading: false
        })
        promptComponents = []
        message.info("Responses saved.")
        setTimeout(() => {
          this.setState({
            opacity: 1
          })
        }, 400)
      }

      renderBottomButton = () => {
        const team = projects['projects']
          .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0]['teams'].filter((team) => team['memberEmails'].includes(this.props.email))
        let type = 'primary', icon = 'down', text = '';
        let style = { flexGrow: 1 };
        if (this.state.prompts.length < 2) {
          type = 'disabled';
          icon = 'close';
        } else if (this.props.questionIndex == 2 && team[0]['memberNames'][this.props.studentIndex] == this.state.students[this.state.students.length - 1]) {
          icon = '';
          text = 'Submit';
          style['backgroundColor'] = '#52c41a';
          style['borderColor'] = '#52c41a';
        } else if (this.props.questionIndex == 2) {
          icon = '';
          text = 'Next Student';
        }
        return (
          <Button block type={type} style={style} icon={icon} loading={this.state.loading} onClick={async () => {
            await this.onBottomButtonClick()
          }}>
            {text}
          </Button>
        );
      }

      onTopButtonClick = async () => {
        if (this.props.questionIndex == 0 && this.props.studentIndex == 0) {
          return;
        }
        const team = projects['projects']
          .filter((project) => project['projectName'] === this.props.match.params.projectId.substring(1))
        [0]['teams'].filter((team) => team['memberEmails'].includes(this.props.email))

        if (this.props.questionIndex == 0) {
          this.props.setStudentIndex(this.props.studentIndex - 1)
          this.props.setquestionIndex(2)
          let projectGrade = await fetch(`${serverUrl}/getProjectGrade`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              grader: this.props.email,
              graded: team[0]['memberEmails'][this.props.studentIndex],
              project: this.props.match.params.projectId
            })
          })
          projectGrade = await projectGrade.json();
          projectGrade = projectGrade[0]['responses']
          let res = projectGrade[this.props.questionIndex]
          const comps = []
          console.log("PROMPTS LENGTH" + res.prompts.length)
          this.setState({
            promptResponses: res.promptResponses
          })
          for (let i = 0; i < res.prompts.length; i++) {
            comps.push(<Prompt gradedName={team[0]['memberNames'][this.props.studentIndex]} prompt={res.prompts[i]} updateEdit={(edit) => {
              let promptResponses = JSON.parse(JSON.stringify(this.state.promptResponses))
              promptResponses[i] = edit
              this.setState({
                promptResponses: promptResponses
              })
            }} />)
          }
          promptComponents = comps;
          this.setState({
            prompts: res.prompts
          })
          return
        }
        this.props.setquestionIndex(this.props.questionIndex == 0 ? this.props.questionIndex : this.props.questionIndex - 1)

        let projectGrade = await fetch(`${serverUrl}/getProjectGrade`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            grader: this.props.email,
            graded: team[0]['memberEmails'][this.props.studentIndex],
            project: this.props.match.params.projectId
          })
        })
        projectGrade = await projectGrade.json();
        projectGrade = projectGrade[0]['responses']
        let res = projectGrade[this.props.questionIndex]
        const comps = []
        this.setState({
          promptResponses: res.promptResponses
        })
        for (let i = 0; i < res.prompts.length; i++) {
          comps.push(<Prompt gradedName={team[0]['memberNames'][this.props.studentIndex]} prompt={res.prompts[i]} updateEdit={(edit) => {
            let promptResponses = JSON.parse(JSON.stringify(this.state.promptResponses))
            promptResponses[i] = edit
            this.setState({
              promptResponses: promptResponses
            })
          }} />)
        }
        promptComponents = comps;
        this.setState({
          prompts: res.prompts
        })

        this.setState({
          opacity: 0
        })
        setTimeout(() => {
          this.setState({
            opacity: 1
          })
        }, 400)
      }

      renderTopButton = () => {
        let type = 'primary', icon = 'up', text = '';
        if (this.props.questionIndex == 0 && this.props.studentIndex == 0) {
          icon = 'close';
          type = 'disabled';
        } else if (this.props.questionIndex == 0) {
          icon = '';
          text = 'Previous Student';
        }
        return (
          <Button block type={type} style={{ flexGrow: 1 }} icon={icon} onClick={this.onTopButtonClick}>
            {text}
          </Button>
        );
      }

      handleWheel = (event) => {
        if (event.deltaY > 10) {
          console.log('scroll down');
          this.onBottomButtonClick();
        } else if (event.deltaY < -10) {
          console.log('scroll up');
          this.onTopButtonClick();
        }
      };

      debounceEventHandler(...args) {
        const debounced = debounce(...args)
        return function (e) {
          e.persist()
          e.preventDefault();
          return debounced(e)
        }
      }

      render = () => {
        console.log(JSON.stringify(this.state.promptResponses))
        return (
          <div className="Rate-edit-pane">
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
