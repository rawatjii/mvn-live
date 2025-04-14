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
  ...rest
}) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
    onChange(e); // call parent onChange
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

  return (
    <div className={`FieldContainer mb-3 ${isLeft ? "row" : ""}`}>
      <div className={isLeft ? "col-3" : undefined}>
        <label htmlFor={name} className="label">{`${label}${isLeft ? ":" : ""}`}</label>
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
                {...rest}
              />
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

        {/* Image Preview */}
        {value && type === "file" && (
          <div className="mt-2">
            <img
              src={value instanceof File ? URL.createObjectURL(value) : value}
              alt="Preview"
              height="80"
              style={{ borderRadius: "8px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomFormField;
