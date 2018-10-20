import React, {Component} from 'react';

class PromptFillIn extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.startEditing();
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
      <span>
       <input type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange}></input>
       <p className="prompt-element prompt-element__hint">{this.hintText()}</p>
      </span>
    );
  }
}

export default PromptFillIn;
