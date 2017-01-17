import React,{Component} from 'react';
import InputText from './../../../../components/input-text/input-text';
import InputPassword from './../../../../components/input-password/input-password';
import {validate, getErrorMessage} from './register-user-form-validation';
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
      this.formModel = {
        email: 'sample@sample.com',
        forename: 'Forename',
        surname: 'Surname',
        password: 'password',
        organizationName: 'OrganizationName',
      }
  }
  render(){
    const validateEmailInput = (e) => {
      this.formModel.email = e.target.value;
       validate(this.formModel).then(() => this.setState({inputEmailError: {}})).catch((error) => {
        // debugger;
         const mappedError = getErrorMessage(error);
         this.setState({inputEmailError: mappedError['email']})
      });
    };

    const validatePasswordInput = (e) => {
      this.formModel.password = e.target.value;
      validate(this.formModel).then(() => this.setState({inputPasswordError: {}})).catch((error) => {
        const mappedError = getErrorMessage(error);
        this.setState({inputPasswordError: mappedError['password']})
      });
    };

    const validateForenameInput = (e) => {
      this.formModel.forename = e.target.value;
      validate(this.formModel).then(() => this.setState({inputForenameError: {}})).catch((error) => {
        const mappedError = getErrorMessage(error);
        this.setState({inputForenameError: mappedError['forename']})
      });
    };

    const validateSurnameInput = (e) => {
      this.formModel.surname = e.target.value;
      validate(this.formModel).then(() => this.setState({inputSurnameError: {}})).catch((error) => {
        const mappedError = getErrorMessage(error);
        this.setState({inputSurnameError: mappedError['surname']})
      });
    };

    const validateOrganizationNameInput = (e) => {
      this.formModel.organizationName = e.target.value;
      validate(this.formModel).then(() => this.setState({inputOrganizationError: {}})).catch((error) => {
        const mappedError = getErrorMessage(error);
        this.setState({inputOrganizationError: mappedError['organizationName']})
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
