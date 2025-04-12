import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CustomFile = ({ id, rest, name, onCustomChange }) => {
  const [fileName, setFileName] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setImagePreviews((prev) => [...prev, ...imageUrls]);
  };

  const handleRemoveImage = (urlToRemove) => {
    setImagePreviews((prev) => {
      const updated = prev.filter((image) => image.url !== urlToRemove);
      URL.revokeObjectURL(urlToRemove); // Clean up memory
      return updated;
    });
  };

  return (
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
          multiple
          accept="image/*, .pdf, .doc, .docx"
          name={name}
          id={id}
          onChange={handleFileChange}
          className="d-none"
          {...rest}
        />
      </div>

      <div
        className="inner-box"
        style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}
      >
        {imagePreviews.map((imgSrc, index) => (
          <div class="img-box" style={{ position: "relative", borderRadius:'5px', border: '1px solid rgba(255, 255, 255, 0.2)', overflow:'hidden', padding:'2px' }} key={index}>
            <img
              key={index}
              src={imgSrc.url}
              alt={`preview-${index}`}
              height="50"
              width="50"
            />
            <IoClose
              onClick= {() => handleRemoveImage(imgSrc.url)}
              style={{
                position:'absolute',
                top:'2px',
                right:'2px',
                background:'#fff',
                borderRadius:'50%',
                padding:'2px',
                cursor:'pointer',
                color:'red',
                fontSize:'16px',
                zIndex:'9999',
              }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomFile;
