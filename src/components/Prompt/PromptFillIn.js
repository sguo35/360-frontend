import React, { Component } from 'react';
import ContentEditable from "react-contenteditable";

function placeCaretAtEnd(el) {
  el.focus();
  if (typeof window.getSelection != "undefined"
          && typeof document.createRange != "undefined") {
      var range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
  } else if (typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
  }
}
class PromptFillIn extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.placeholder };
    this.handleChange = this.handleChange.bind(this);
    this.spanRef = React.createRef()
  }

  componentDidMount = () => {
    this.spanRef.current.textContent = this.props.placeholder
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === 'Paste') {
      console.log('do validate');
      event.preventDefault();
    }
  }

  handleChange(event) {
    console.log(event.nativeEvent)
    this.props.startEditing();
    this.props.edit(this.props.idx, event.nativeEvent.srcElement.textContent)
    this.setState({ value: event.nativeEvent.srcElement.textContent });
    //placeCaretAtEnd(event.target)
  }

  hintText() {
    if (this.state.value !== '') {
      return this.props.hint;
    } else {
      return "\u00A0";
    }
  }

  render() {
    console.log(this.spanRef)
    return (
      <span className="prompt-element prompt-element__fillIn">
        <span contentEditable={true}
          onInput={this.handleChange}
          onPaste={(event) => { event.preventDefault() }}
          onCut={(event) => { event.preventDefault() }}
          onCopy={(event) => { event.preventDefault() }}
          onClick={(event) => {
            if (this.spanRef.current.textContent === this.props.placeholder) {
              this.spanRef.current.textContent = ''
            }

            this.setState({
              value: this.state.value !== this.props.placeholder ? this.state.value : ''
            })
          }}
          onBlur={(event) => {
            if (this.spanRef.current.textContent === '') {
              this.spanRef.current.textContent = this.props.placeholder
            }
            this.setState({
              value: this.state.value === '' ? this.props.placeholder : this.state.value
            })
          }}
          ref={this.spanRef}
          html={this.props.placeholder}
          tagName="span"
          style={{ //TODO Check that this code actually makes sense - I made some edits
            color: this.state.value ? 'grey' : 'rgb(200, 200, 200)',
            display: this.state.value === '' ? 'inline-block' : 'inline',
            textDecoration: 'underline',
            minWidth: 100
          }}
        >
        {""}
        </span>
      </span>
    );
  }
}

export default PromptFillIn;
