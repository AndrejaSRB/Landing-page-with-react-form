import React from "react";
import PropTypes from "prop-types";

const CustomPhoneField = ({ setPhone, phone, error, setError }) => {
  CustomPhoneField.propTypes = {
    setPhone: PropTypes.func.isRequired,
    phone: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    setError: PropTypes.func.isRequired
  };

  const formatNumber = (value, previousValue) => {
    if (!value) return "";
    const currentValue = value.replace(/[^\d]/g, "");
    if (!previousValue || value.length > previousValue.length) {
      if (currentValue.length <= 3) return currentValue;
      if (currentValue.length === 3) return `(${currentValue})`;
      if (currentValue.length <= 6)
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
      if (currentValue.length === 6)
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}-`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
        3,
        6
      )}-${currentValue.slice(6, 10)}`;
    }
  };

  const validatePhoneNumber = value => {
    let firstNumber = value.substr(1, 1);
    let lastFourNumbers = value.substr(value.length - 4, 4);
    if (!value) {
      setError(true);
    } else if (value < 15) {
      setError(true);
    } else if (firstNumber === "0" || firstNumber === "1") {
      setError(true);
    } else if (lastFourNumbers === "0000") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChangePhone = e => {
    const { value } = e.target;
    validatePhoneNumber(value);
    const formatedPhoneNumber = formatNumber(value, phone);
    const formated =
      formatedPhoneNumber !== undefined ? formatedPhoneNumber : value;
    setPhone(formated);
  };

  const showError = error ? "error" : "";

  return (
    <div className="custom-field">
      <label>Phone</label>
      <input
        name="phone"
        onChange={handleChangePhone}
        value={phone}
        placeholder="Phone"
        className={showError}
      />
    </div>
  );
};

export default CustomPhoneField;
