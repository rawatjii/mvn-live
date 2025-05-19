import { useState, useEffect } from "react";
import CustomFile from "./CustomFile";
import ReactQuill from "react-quill";
import { FaUpload } from "react-icons/fa";
import { BACKEND_IMAGE_URL } from "../../../../config/config";
import { BsEye } from "react-icons/bs";
import CustomModal from "./custom-modal/CustomModal";

import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"], // remove formatting
    ["code-block"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

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
  info = "",
  dataError,
  isWebpAllowed = true,
  isRequired = false,
  ...rest
}) => {
  const [fileName, setFileName] = useState("");
  const [modalVia, setModalVia] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [quillContent, setQuillContent] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
    if (file) {
      // Generate a temporary URL for the selected file
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl("");
    }
    onChange(e, isWebpAllowed);
  };

  useEffect(() => {
    if (type === "file") {
      if (value instanceof File) {
        setFileName(value.name);
        setPreviewUrl(URL.createObjectURL(value));
      } else if (typeof value === "string" && value) {
        const parts = value.split("/");
        setFileName(parts[parts.length - 1]);
        setPreviewUrl(`${BACKEND_IMAGE_URL}${value}`);
      } else {
        setFileName("");
        setPreviewUrl("");
      }
    }

    // Cleanup preview URL to prevent memory leaks
    return () => {
      if (previewUrl && previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [resetKey, value, type]);

  return (
    <div className={`FieldContainer mb-3 ${isLeft ? "row" : ""}`}>
      <div className={isLeft ? "col-3" : undefined}>
        {type !== "hidden" && (
          <label htmlFor={name} className="label">{`${label}${
            isLeft ? ":" : ""
          }`}</label>
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
                rows="2"
                {...rest}
              />
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          ) : type === "file" ? (
            <>
              <div className="custom-file-wrapper form-control d-flex justify-content-between align-items-center">
                <label
                  htmlFor={id}
                  className="d-flex align-items-center gap-2 m-0 cursor-pointer"
                >
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
              {previewUrl && (
                <div
                  className="image_preview mt-2 position-relative"
                  style={{
                    width: "100px",
                    border: "1px solid #45464f",
                    borderRadius: "2px",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => setModalVia(true)}
                >
                  <img src={previewUrl} alt="Preview" className="w-100" />
                  <span
                    className="overlay position-absolute"
                    style={{
                      background: "rgba(0, 0, 0, 0.3)",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      top: "0",
                    }}
                  ></span>
                  <button
                    type="button"
                    className="bg-transparent p-0 position-absolute"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "9",
                    }}
                  >
                    <BsEye />
                  </button>
                </div>
              )}
              <CustomModal isOpen={modalVia} onClose={() => setModalVia(false)}>
                <img src={previewUrl} alt="Preview" className="w-100" />
              </CustomModal>
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          ) : type === "select" ? (
            <>
              <select
                name={name}
                className="form-control w-100"
                onChange={onChange}
                value={value}
                required
              >
                <option value="" selected>
                  Select value
                </option>
                {options?.map((option, index) => (
                  <option key={index} value={option.value}>
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
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={option.value}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              <span className="text-danger">{dataError?.[name]}</span>
            </>
          ) : type === "editor" ? (
            <>
              <ReactQuill
                name={name}
                theme="snow"
                value={value}
                modules={modules}
                onChange={(_) => onChange(name, _)}
              />
              <div dangerouslySetInnerHTML={{ __html: quillContent }} />
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
                value={
                  type === "date" && value
                    ? new Date(value).toISOString().split("T")[0]
                    : value
                }
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