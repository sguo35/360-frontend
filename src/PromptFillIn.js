import React, {Component} from 'react';

class PromptFillIn extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate');
      event.preventDefault();
    }
  }

  handleChange(event) {
    console.log(event.nativeEvent.data);
    if(event.nativeEvent.data != null)
    {
      this.setState({value: event.target.value});
      this.props.startEditing();
    }
  }

  hintText() {
    if (this.state.value !== '') {
      return this.props.hint;
    } else {
      return "\u00A0";
    }
  }

  render () {
    return (
      <span className="prompt-element prompt-element__fillIn">
        <span contentEditable={true} placeholder={this.props.placeholder} value={this.state.value} onKeyPress={this.handleKeyPress} onInput={this.handleChange}></span>
      </span>
    );
  }
}

export default PromptFillIn;
