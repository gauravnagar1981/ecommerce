import React from 'react'
import RegisterUserForm from '../../../containers/register-user-form/register-user-form';
import './HomeView.scss'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
          <RegisterUserForm/>

          <h4>Welcome!</h4>
        </div>
  );
  }

  }
