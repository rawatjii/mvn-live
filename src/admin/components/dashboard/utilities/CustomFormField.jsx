import { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import { BACKEND_IMAGE_URL } from "../../../../config/config";
import { BsEye } from "react-icons/bs";
import CustomModal from "./custom-modal/CustomModal";

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
  isRequired = false,
  ...rest
}) => {
  const [fileName, setFileName] = useState("");
  const [modalVia,setModalVia]=useState();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
    onChange(e, isWebpAllowed);
  };
// console.log(value,"defaultData defaultData defaultData")
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
// console.log(type)
  return (
    <div className={`FieldContainer mb-3 ${isLeft ? "row" : ""} `}>
      <div className={isLeft ? "col-3" : undefined}>
        {type !== "hidden" && (
          <label htmlFor={name} className="label">{`${label}${isLeft ? ":" : ""}`}</label>
        )}
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
                required={isRequired}
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
                  required={isRequired}
                  {...rest}
                />
              { value && <><button type="button" className="bg-transparent p-0" onClick={()=>setModalVia(true)}><BsEye  /></button>
                <CustomModal isOpen={modalVia} onClose={()=>setModalVia(false)}>
                  <img src={BACKEND_IMAGE_URL+value} alt="" className="w-100"/>
                </CustomModal>
              </>}
            </div>
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          ) : type === "select" ? (
            <>
              <select
                name={name}
                className="form-control w-100"
                onChange={onChange}
                value={value}
                required={isRequired}
              >
                {options?.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
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
                      name={name}
                      value={option.value}
                      required={isRequired}
                    />
                    <label className="custom-control-label" htmlFor={option.value}>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          ) : type === "hidden" ? (
            <input
              type="hidden"
              name={name}
              value={value}
              onChange={() => {}}
            />
          ) : (
            <>
              <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`form-control ${className}`}
                required={isRequired}
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