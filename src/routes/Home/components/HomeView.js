import React from 'react'
import InputText from '../../../components/input-text/input-text';
import './HomeView.scss'

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};


export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      isValidInput: true,
      inputVal: ''
    };
  }

  render() {
    const validateInput = (e) => {
      const error = validateEmail(e.target.value);
      this.setState({isValidInput: error});
    };
    return (
      <div>
        <InputText
          id='input1'
          inputVal={this.state.inputVal}
          type='email'
          isValidInput={this.state.isValidInput}
          onBlur={validateInput.bind(this)}
        />
        <h4>Welcome!</h4>
      </div>);
  }

}
