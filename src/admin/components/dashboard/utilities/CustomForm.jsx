import React, { useState, useEffect } from "react";
import { Form } from "./CutomTags"; // Assuming your styled form wrapper
import CustomFormField from "./CustomFormField";
import CustomButton from "./CutomButton";
import { useParams } from "react-router-dom";

const defaultBannerFields = [
  { name: "title", type: "text", label: "Title", col: 6 },
  { name: "alt_tag", type: "text", label: "Alt Tag", col: 6 },
  { name: "image", type: "file", label: "Upload Image", col: 6 },
  { name: "alternative_image", type: "file", label: "Alternative Upload Image", col: 6 },
  { name: "description", type: "textarea", label: "Description", col: 12 },
];

const CustomForm = ({
  fieldVisibility = {},
  onSubmit,
  formType = "",
  isBanner = false,
  dynamicFields = [],
  buttonLabel = "Save",
  initialData = {}, // For edit mode
  defaultData,
  dataError
}) => {
  const Fields = isBanner ? defaultBannerFields : dynamicFields;
  const [isLoading, setIsLoading] = useState(false);
  const params=useParams();

  const visibleFields = Fields.map((field) => {
    const visibilityConfig = fieldVisibility[field.name];
    return {
      ...field,
      condition: visibilityConfig?.visible !== false,
      label: visibilityConfig?.label || field.label,
      col: visibilityConfig?.isLeft ? 12 : field.col,
      dataError,
    };
  });
  const [formData, setFormData] = useState(defaultData || {});
  const [resetKey, setResetKey] = useState(Date.now());
  // console.log(,"defaultData 1212313211231")
  useEffect(()=>{
    setFormData(defaultData);
  },[])

  useEffect(() => {
    const currentFields = isBanner ? defaultBannerFields : dynamicFields;
    if (Object.keys(initialData).length > 0) {
      const updatedForm = {};
      currentFields.forEach((field) => {
        updatedForm[field.name] =
          field.type === "file" ? initialData[field.name] || null : initialData[field.name] || "";
      });
      if (!("is_theme" in updatedForm)) {
        updatedForm["is_theme"] = "1";
      }
      setFormData(updatedForm);
    } else {
      setFormData((prev) => ({ ...prev, is_theme: "1" }));
    }
  }, [ isBanner, dynamicFields]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, isWebpAllowed) => {
    const { name, files } = e.target;
    if (files.length > 0 && !isWebpAllowed && files[0].type !== "image/jpeg") {
      alert("Only JPEG images are allowed.");
      return;
    }
  
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const payload = new FormData();
  
      visibleFields
        .filter((field) => field.condition)
        .forEach((field) => {
          const value = formData[field.name];
          if (value != null) {
            payload.append(field.name, value);
          }
        });
  
  
      if (onSubmit) await onSubmit(payload);
  
      setFormData({});
      setResetKey(Date.now());
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <div className={formType === "block" ? "" : "row"}>
        {visibleFields
          .filter((field) => field.condition !== false)
          .map((field) => (
            <div className={`${(field.isLeft === true ? '' : `col-${field.col || 12}`)} ${field.type=="hidden"&&"d-none"}`} key={`${resetKey}-${field.name}`}>
              <CustomFormField
                {...field}
                id={`${field.name}_${resetKey}`}
                name={field.name}
                value={formData[field.name] || ""} // Ensure empty string for unset values
                onChange={field.type == "file" ? handleFileChange : handleChange}
                resetKey={resetKey}
              />
            </div>
          ))}
      </div>
      <CustomButton 
        text={buttonLabel} 
        type="submit" 
        isLoading={isLoading}
        disabled={isLoading}
      />
    </Form>
  );
};

export default CustomForm;