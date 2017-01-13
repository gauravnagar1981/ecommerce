import React,{Component} from 'react';
import InputText from '../../components/input-text/input-text';
import InputPassword from '../../components/input-password/input-password';
import {validate} from './register-user-form-validation';
import './register-user-from.scss';

export default class RegisterUser extends Component{
  constructor(props) {
    super(props);
    this.state =
      {
        inputEmailError: {},
        inputPasswordError: {},
        inputForenameError: {},
        inputSurnameError: {},
        inputOrganizationError: {}
      };
  }
  render(){
    const validateEmailInput = (e) => {
      debugger;
      const inputValue = e.target.value;
       validate({email: inputValue}).then(() => this.setState({inputEmailError: {}})).catch((error) => {
        this.setState({inputEmailError: error})
      });
    };

    const validatePasswordInput = (e) => {
      const inputValue = e.target.value;
      validate({password: inputValue}).then(() => this.setState({inputPasswordError: {}})).catch((error) => {
        this.setState({inputPasswordError: error})
      });
    };

    const validateForenameInput = (e) => {
      const inputValue = e.target.value;
      validate({forename: inputValue}).then(() => this.setState({inputForenameError: {}})).catch((error) => {
        this.setState({inputForenameError: error})
      });
    };

    const validateSurnameInput = (e) => {
      const inputValue = e.target.value;
      validate({surname: inputValue}).then(() => this.setState({inputSurnameError: {}})).catch((error) => {
        this.setState({inputSurnameError: error})
      });
    };

    const validateOrganizationNameInput = (e) => {
      const inputValue = e.target.value;
      validate({organizationName: inputValue}).then(() => this.setState({inputOrganizationError: {}})).catch((error) => {
        this.setState({inputOrganizationError: error})
      });
    };
    return(
      <div className="main-content">
        <div className="form-row">
          <label for="emailAddress" className="label-text" >E-mail</label>
          <InputText
            id='emailAddress'
            type='email'
            onBlur={validateEmailInput.bind(this)}
            placeholder='you@yourdomain.com'
            error={this.state.inputEmailError} />
        </div>
        <div className="form-row">
          <label for="password-text" className="label-text">Password</label>
          <InputPassword
            id="password"
            onBlur={validatePasswordInput.bind(this)}
            error={this.state.inputPasswordError} />
        </div>
        <div className="form-row">
          <label for="forename" className="label-text">Name</label>
          <InputText
            id='forename'
            onBlur={validateForenameInput.bind(this)}
            placeholder='First'
            error={this.state.inputForenameError} />
        </div>
        <div className="form-row">
          <label for="surname" className="label-text"></label>
          <InputText
            id='surname'
            onBlur={validateSurnameInput.bind(this)}
            placeholder='Last'
            error={this.state.inputSurnameError} />
        </div>
        <div className="form-row">
          <label for="surname" className="label-text">Organisation name</label>
          <InputText
            id='organisationName'
            onBlur={validateOrganizationNameInput.bind(this)}
            placeholder='Organisation name'
            error={this.state.inputOrganizationError} />
        </div>
      </div>
    );
  };
}
