import React, { Component, PropTypes } from 'react';

const LoginFormInput = ({
  name,
  inputType,
  value,
  onChange,
  onBlur,
  error,
  inProgress
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  
  const handleBlur = (e) => {
    typeof(onBlur) == "function" && onBlur(e.target.value);
  };
  
  const baseContainerClassName = "login-input-container";
  let placeholder = name.toUpperCase();
  let containerClassName = baseContainerClassName + (error ? ` ${baseContainerClassName}--error` : '');
  containerClassName += (inProgress ? ` ${baseContainerClassName}--in-progress` : '');
  let iconSrc=`../assets/images/${name}.png`;
  
  return (
    <div className={containerClassName}>
      <img className="login-input-container_icon" src={iconSrc}/>
      <input
        className="login-input-container_field"
        noValidate
        type={inputType}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur} />
    </div>
	);
};

LoginFormInput.propTypes = {
	name: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
	placeholder: PropTypes.string,
  error: PropTypes.string,
  inProgress: PropTypes.bool
};

export default LoginFormInput;
