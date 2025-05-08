import { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";

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
  setValueVia,
  selectedVal,
  options = [],
  info = '',
  dataError,
  isWebpAllowed = true,
  isRequired = false, // Add required prop with default false
  ...rest
}) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
    onChange(e, isWebpAllowed);
  };

  useEffect(() => {
    if (type === "file") {
      if (value instanceof File) {
        setFileName(value.name);
      } else if (typeof value === "string" && value) {
        const parts = value.split("/");
        setFileName(parts[parts.length - 1]);
      } else {
        setFileName("");
      }
    }
  }, [resetKey, value, type]);

  const getValue = (e) => {
    setValueVia(e.target.value);
  };

  return (
    <div className={`FieldContainer mb-3 ${isLeft ? "row" : ""}`}>
      <div className={isLeft ? "col-3" : undefined}>
        <label htmlFor={name} className="label">{`${label}${isLeft ? ":" : ""}`}</label>
      </div>
      <div className={isLeft ? "col-9" : undefined}>
        <div className="InputContain">
          {type === "textarea" ? (
            <>
              <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`form-control ${className}`}
                required={isRequired} // Pass required prop
                {...rest}
              />
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          ) : type === "file" ? (
            <>
              <div className="custom-file-wrapper form-control d-flex justify-content-between align-items-center">
                <label htmlFor={id} className="d-flex align-items-center gap-2 m-0 cursor-pointer">
                  <FaUpload />
                  <span>{fileName || "Upload File"}</span>
                </label>
                <input
                  type="file"
                  name={name}
                  id={id}
                  onChange={handleFileChange}
                  className="d-none"
                  required={isRequired} // Pass required prop
                  {...rest}
                />
              </div>
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          ) : type === "select" ? (
            <>
              <select
                name={name}
                className="form-control w-100"
                onChange={(e) => getValue(e)}
                required={isRequired} // Pass required prop
              >
                <option value="">--Select--</option>
                {options?.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                    selected={selectedVal === option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          ) : type === "radioFields" ? (
            <>
              <div className="d-flex">
                {options.map((option, index) => (
                  <div className="me-3 d-flex" key={index}>
                    <input
                      type="radio"
                      className="me-1"
                      id={option.value}
                      name={name} // Use name prop for radio group
                      value={option.value}
                      required={isRequired} // Pass required prop
                    />
                    <label className="custom-control-label" htmlFor={option.value}>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          ) : (
            <>
              <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`form-control ${className}`}
                required={isRequired} // Pass required prop
                {...rest}
              />
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomFormField;