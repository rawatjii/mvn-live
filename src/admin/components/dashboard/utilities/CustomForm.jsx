import React, { useState } from "react";
import { Form } from "./CutomTags"; // assuming your styled form wrapper
import CustomFormField from "./CustomFormField";
import CustomButton from "./CutomButton";

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
  initialData = {}, // for edit mode
}) => {
  const Fields = isBanner ? defaultBannerFields : dynamicFields;

  const visibleFields = Fields.map((field) => {
    const visibilityConfig = fieldVisibility[field.name];
    return {
      ...field,
      condition: visibilityConfig?.visible !== false,
      label: visibilityConfig?.label || field.label,
      col: visibilityConfig?.isLeft ? 12 : field.col,
    };
  });

  const initialState = {};
  Fields.forEach((field) => {
    const initValue = initialData[field.name];
    initialState[field.name] =
      field.type === "file" ? null : initValue || "";
  });

  const [formData, setFormData] = useState(initialState);
  const [resetKey, setResetKey] = useState(Date.now());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();
    visibleFields
      .filter((field) => field.condition)
      .forEach((field) => {
        const value = formData[field.name];
        if (value !== null && value !== undefined) {
          payload.append(field.name, value);
        }
      });

    if (onSubmit) onSubmit(payload);

    setFormData(initialState);
    setResetKey(Date.now());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className={formType === "block" ? "" : "row"}>
        {visibleFields
          .filter((field) => field.condition !== false)
          .map((field) => (
            <div className={field.isLeft === true ? '' : `col-${field.col || 12}`} key={resetKey + field.name}>
              <CustomFormField
                {...field}
                id={`${field.name}_${resetKey}`}
                name={field.name}
                value={formData[field.name]}
                onChange={field.type === "file" ? handleFileChange : handleChange}
                resetKey={resetKey}
              />
            </div>
          ))}
      </div>
      <CustomButton text={buttonLabel} type="submit" />
    </Form>
  );
};

export default CustomForm;
