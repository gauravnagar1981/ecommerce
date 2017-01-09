import React, {PropTypes} from 'react';

const InputText = (props) => {
  const {
    id, type
  } = props;

  if(type.toLowerCase() === 'email') {

  }


  return <div>
    <input id={id}/>
  </div>
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default InputText;

