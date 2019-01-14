import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({type, name, label, onChange, placeholder, value}) => {

    return(
      <div className="form-group">
          <label htmlFor={name}>{label}</label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="form-control"
              />
      </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default TextInput;