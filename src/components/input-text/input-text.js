import React, {PropTypes} from 'react';
import './input-text.scss';

const InputText = (props) => {
  const {
    id,
    onBlur,
    error,
    placeholder,
  } = props;

  const hasError = error && error.message && error.message.length > 0;
  const inputClassName = hasError? 'text-input--error' : 'text-input';

  return <div>

    <input className={inputClassName} id={id} onBlur={onBlur} placeholder={placeholder}/>
    {hasError ? <span className="span--error">{error.message}</span> : null}
  </div>
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.object,
};

export default InputText;

