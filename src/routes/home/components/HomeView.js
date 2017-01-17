import React from 'react';
import {Link} from 'react-router';
import RegisterUserForm from '../../register/components/registration-form/register-user-form';
import './HomeView.scss';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Welcome!</h4>
        <h2>Please register</h2>
        <Link to="/register">
          <button className="button--red">Register</button>
        </Link>
      </div>
    );
  }

}
