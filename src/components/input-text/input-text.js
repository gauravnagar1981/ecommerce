import React, {PropTypes} from 'react';
import './input-text.scss';

const InputText = (props) => {
  const {
    id,
    onBlur,
    error,
  } = props;

  const hasError = error && error.message && error.message.length > 0;
  const inputClassName = `mdl-textfield__input`;

  return <div>
    <label class="mdl-textfield__label" for="sample4">Input...</label>
    <input className={inputClassName} id={id} onBlur={onBlur}/>

    {hasError ? <span className="mdl-textfield__error show">{error.message}</span> : null}
  </div>
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.object,
};

export default InputText;

