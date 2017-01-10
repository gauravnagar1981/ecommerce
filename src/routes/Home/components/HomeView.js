import React from 'react'
import InputText from '../../../components/input-text/input-text';
import InputPassword from '../../../components/input-password/input-password';
import {validate} from './form.validation';
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
      inputError: {},
      isValidPassword: true,

    };
  }

  render() {
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

    return (
      <div>
        <form>
          <div className="mdl-textfield mdl-js-textfield is-upgraded is-invalid is-dirty">
            <input className="mdl-textfield__input" type="text" id="sample3" />
              <label className="mdl-textfield__label" for="sample3">Text...</label>
          </div>
        </form>
        <form>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4" />
              <label className="mdl-textfield__label" for="sample4">Number...</label>
              <span className="mdl-textfield__error">Input is not a number!</span>
          </div>
        </form>
      </div>
  );
  }

  }
