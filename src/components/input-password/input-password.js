import React, {PropTypes} from 'react';

const InputPassword = (props) => {
  const {
    id,
    onBlur,
    isValidPassword
  } = props;

  return <div>
    <input id={id} type="password" onBlur={onBlur}/>
    {isValidPassword ? null : <span>Invalid Input</span>}
  </div>
};

InputPassword.propTypes = {
  id: PropTypes.string.isRequired
};

export default InputPassword;
