import React, {PropTypes} from 'react';
import './input-password.scss';
const InputPassword = (props) => {
  const {
    id,
    onBlur,
    error
  } = props;

  const hasError = error && error.message && error.message.length > 0;
  const inputClassName = hasError? 'text-password text-password--error' :'text-password';

  return <div>
    <input id={id} type="password" onBlur={onBlur} className={inputClassName} />
    {hasError ? <span className="span--error">{error.message}</span> :null }
  </div>
};

InputPassword.propTypes = {
  id: PropTypes.string.isRequired
};

export default InputPassword;
