import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

const CustomSelect = ({ name, validate, label, placeholder, options }) => (
  <Field name={name} validate={validate} options={options}>
    {({ input, meta, options }) => {
      return (
        <Select 
        options={options}
        name={input.name}
        onChange={value => input.onChange(value)}
        meta={meta}
        label={label}
        placeholder={placeholder}
        />
      );
    }}
  </Field>
);

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

const Select = ({options, name, onChange, meta, label, placeholder}) => {
  const renderOption = option => (
    <option key={option.value} value={option.value}>
      {option.name}
    </option>
  );
  const error = meta.error && meta.touched ? "error" : "";
  const renderOptions = options ? options.map(renderOption) : null;

  return (
    <div className="custom-select">
      <label>{label}</label>
      <select name={name} onChange={onChange} className={error} placeholder={placeholder}>
            {renderOptions}
          </select>
    </div>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  meta: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default CustomSelect;
