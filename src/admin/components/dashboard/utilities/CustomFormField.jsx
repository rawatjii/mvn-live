import { useState, useEffect } from "react";
import CustomFile from "./CustomFile";

const CustomFormField = ({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder = "",
  className = "",
  resetKey,
  isLeft,
  options = [],
  info = '',
  ...rest
}) => {
  

  // useEffect(() => {
  //   if (type === "file") {
  //     setFileName("");
  //   }
  // }, [resetKey, type]);

  return (
    <div className={`FieldContainer mb-3 ${isLeft ? "row" : undefined}`}>
      <div className={isLeft ? "col-3" : undefined}>
        <label htmlFor={name} className="label">{`${label}${isLeft ? ':' : ''}`}</label>
        {info && <small>{info}</small>}
      </div>
      <div className={isLeft ? "col-9" : undefined}>
      <div className="InputContain">
        {type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`form-control ${className}`}
            {...rest}
          />
        ) : type === "file" ? (
          <CustomFile id={id} name={name} rest={rest} onCustomChange={onChange} />
        ) : type === 'radioFields' ? (
            <div className="d-flex">
              {options.map((option, index) => (
                <div className="me-3" key={index}> 
                  <input type="radio" className="me-1" id={option.value} name="example" value={option.value} />
                  <label className="custom-control-label" htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`form-control ${className}`}
            {...rest}
          />
        )}
        </div>
      </div>
      

      {/* Optional: Display image preview for file input
      {value && type === "file" && value instanceof File && value.type.startsWith("image/") && (
        <div className="mt-2">
          <img
            src={URL.createObjectURL(value)}
            alt="Preview"
            height="80"
            style={{ borderRadius: "8px" }}
          />
        </div>
      )} */}
    </div>
  );
};

export default CustomFormField;
