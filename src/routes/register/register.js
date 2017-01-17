import React from 'react';
import RegisterUserForm from './components/registration-form/register-user-form';

export default class RegisterView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RegisterUserForm />
    );
  }

}
