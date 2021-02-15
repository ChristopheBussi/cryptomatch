// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './field.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    // On récupére la valeur de l'input et son nom
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div>
      <input
        value={value}
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: null,
  type: 'text',
};

// == Export
export default Field;
