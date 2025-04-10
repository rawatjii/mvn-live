import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const CustomFile = ({id, rest, name, onCustomChange})=>{
  const [fileName, setFileName] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => ({
      url: URL.createObjectURL(file),
      name: file.name
    }));
    setImagePreviews(prev => [...prev, ...imageUrls]);
  };

  const handleRemoveImage = (urlToRemove) => {
    setImagePreviews(prev => {
      const updated = prev.filter(image => image.url !== urlToRemove);
      URL.revokeObjectURL(urlToRemove); // Clean up memory
      return updated;
    });
  };

  return(
    <div className="custom-file-wrapper form-control d-flex justify-content-between align-items-center">
      <label htmlFor={id} className="d-flex align-items-center gap-2 m-0 cursor-pointer">
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
      
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
        {imagePreviews.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`preview-${index}`}
            style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '10px', marginBottom: '10px' }}
          />
        ))}
      </div>

    </div>
  )
}

export default CustomFile;