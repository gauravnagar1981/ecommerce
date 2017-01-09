import React, {PropTypes} from 'react';
import './input-text.scss';

const InputText = (props) => {
  const {
    id,
    type,
    onBlur,
    isValidInput
  } = props;
  const inputClassName = `text-input ${isValidInput ? '' : ' text-input--error'}`;

  return <div>
    <input className={inputClassName} id={id} onBlur={onBlur}
    />
    {isValidInput ? null : <span className="span--error">invalid input</span>}
  </div>
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default InputText;

