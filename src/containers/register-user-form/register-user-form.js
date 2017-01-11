import React,{Component} from 'react';
import InputText from '../../components/input-text/input-text';
import InputPassword from '../../components/input-password/input-password';
import {validate} from './register-user-form-validation';

export default class RegisterUser extends Component{
  constructor(props) {
    super(props);
    this.state =
      {
        inputError: {},
        isValidPassword: true,

      };
  }
  render(){
    const validateInput = (e) => {
      const inputValue = e.target.value;
      validate({email: inputValue}).then(() => this.setState({inputError: {}})).catch((error) => {
        this.setState({inputError: error})
      });
    };

    const validatePassword = (e) => {
      const error = e.target.value.length < 8 ? false : true;
      this.setState({isValidPassword: error});
    };

    return(
      <div>
        <InputText
          id='input1'
          type='email'
          isValidInput={this.state.isValidInput}
          onBlur={validateInput.bind(this)}
          placeholder='you@yourdomain.com'
          error={this.state.inputError}
        />
        <InputPassword
          id="inputPassword"
          isValidPassword={this.state.isValidPassword}
          onBlur={validatePassword.bind(this)}/>
      </div>
    );
  };
}
