import React,{Component} from 'react';
import InputText from '../../components/input-text/input-text';
import InputPassword from '../../components/input-password/input-password';
import validateEmail from './register-user-form-email-validator';
import validatePassword from './register-user-form-password-validator';
import validateForename from './register-user-form-forename-validator';
import validateSurname from './register-user-form-surname-validator';
import validateOrganizationName from './register-user-form-organization-validator';
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
      const inputValue = e.target.value;
      validateEmail({email: inputValue}).then(() => this.setState({inputEmailError: {}})).catch((error) => {
        this.setState({inputEmailError: error})
      });
    };

    const validatePasswordInput = (e) => {
      const inputValue = e.target.value;
      validatePassword({password: inputValue}).then(() => this.setState({inputPasswordError: {}})).catch((error) => {
        this.setState({inputPasswordError: error})
      });
    };

    const validateForenameInput = (e) => {
      const inputValue = e.target.value;
      validateForename({forename: inputValue}).then(() => this.setState({inputForenameError: {}})).catch((error) => {
        this.setState({inputForenameError: error})
      });
    };

    const validateSurnameInput = (e) => {
      const inputValue = e.target.value;
      validateSurname({surname: inputValue}).then(() => this.setState({inputSurnameError: {}})).catch((error) => {
        this.setState({inputSurnameError: error})
      });
    };

    const validateOrganizationNameInput = (e) => {
      const inputValue = e.target.value;
      validateOrganizationName({organizationName: inputValue}).then(() => this.setState({inputOrganizationError: {}})).catch((error) => {
        this.setState({inputOrganizationError: error})
      });
    };
    return(
      <div className="mainContent">
        <div className="textInput">
          <label for="emailAddress" className="label-text" >E-mail</label>
          <InputText
            id='emailAddress'
            type='email'
            onBlur={validateEmailInput.bind(this)}
            placeholder='you@yourdomain.com'
            error={this.state.inputEmailError} />
        </div>
        <div className="password">
          <label for="password-text" className="label-text">Password</label>
          <InputPassword
            id="password"
            onBlur={validatePasswordInput.bind(this)}
            error={this.state.inputPasswordError} />
        </div>
        <div className="textInput">
          <label for="forename" className="label-text">Name</label>
          <InputText
            id='forename'
            onBlur={validateForenameInput.bind(this)}
            placeholder='First'
            error={this.state.inputForenameError} />
        </div>
        <div className="textInput">
          <label for="surname" className="label-text"></label>
          <InputText
            id='surname'
            onBlur={validateSurnameInput.bind(this)}
            placeholder='Last'
            error={this.state.inputSurnameError} />
        </div>
        <div className="textInput">
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
