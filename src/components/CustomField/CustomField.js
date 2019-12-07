import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

const CustomField = ({ name, validate, label, placeholder, required }) => (
  <Field name={name} validate={validate}>
    {({ input, meta }) => {
      const error = meta.error && meta.touched ? "error" : "";
      
      return (
        <div className="custom-field">
          <label>{label}</label>
          <input
            {...input}
            type="text"
            placeholder={placeholder}
            className={error}
            required={required}
          />
        </div>
      );
    }}
  </Field>
);

CustomField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validate: PropTypes.func
};

export default CustomField;
