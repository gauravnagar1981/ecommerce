import React from 'react'
import InputText from '../../../components/input-text/input-text';
import InputPassword from '../../../components/input-password/input-password';
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
      isValidPassword: true,
      inputVal: ''
    };
  }

  render() {
    const validateInput = (e) => {
      const error = validateEmail(e.target.value);
      this.setState({isValidInput: error});
    };

    const validatePassword = (e) => {
      const error = e.target.value.length < 8 ? false:true;
      this.setState({isValidPassword: error});
    };

    return (
      <div>
        <InputText
          id='input1'
          inputVal={this.state.inputVal} //todo
          type='email'
          isValidInput={this.state.isValidInput}
          onBlur={validateInput.bind(this)}
        />
        <InputPassword
          id="inputPassword"
          isValidPassword={this.state.isValidPassword}
          onBlur={validatePassword.bind(this)}/>

        <h4>Welcome!</h4>
      </div>);
  }

}
