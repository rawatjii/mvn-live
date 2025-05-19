import React, { useState, useEffect, useMemo } from "react";
import { Form } from "./CutomTags";
import CustomFormField from "./CustomFormField";
import CustomButton from "./CutomButton";
import { useParams } from "react-router-dom";
import isEqual from "lodash/isEqual";

const defaultBannerFields = [
  { name: "title", type: "text", label: "Title", col: 6 },
  { name: "alt_tag", type: "text", label: "Alt Tag", col: 6 },
  { name: "image", type: "file", label: "Upload Image", col: 6 },
  {
    name: "alternative_image",
    type: "file",
    label: "Alternative Upload Image",
    col: 6,
  },
  { name: "description", type: "textarea", label: "Description", col: 12 },
];

const CustomForm = ({
  fieldVisibility = {},
  onSubmit,
  onUpdate,
  formType = "",
  isBanner = false,
  dynamicFields = [],
  buttonLabel = "Save",
  initialData = {},
  defaultData,
  dataError,
  setValueVia,
  data,
}) => {
  const Fields = isBanner ? defaultBannerFields : Array.isArray(dynamicFields) ? dynamicFields : [];
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const [formData, setFormData] = useState(data || defaultData || {});
  const [resetKey, setResetKey] = useState(Date.now());
  const visibleFields = useMemo(() => {
    if(!Array.isArray(Fields)){
      console.warn("Fields is not an array:", Fields);
      return [];
    }
    return Fields.map((field) => {
      const visibilityConfig = fieldVisibility[field.name];
      return {
        ...field,
        condition: visibilityConfig?.visible !== false,
        label: visibilityConfig?.label || field.label,
        col: visibilityConfig?.isLeft ? 12 : field.col,
        dataError,
      };
    });
  }, [Fields, fieldVisibility, dataError]);

  useEffect(() => {
    if (data) {
      setFormData(data);
    } else if (Object.keys(initialData).length > 0) {
      const updatedForm = {};
      Fields.forEach((field) => {
        updatedForm[field.name] =
          field.type === "file"
            ? initialData[field.name] || null
            : initialData[field.name] || "";
      });

      if (!("is_theme" in updatedForm)) {
        updatedForm["is_theme"] = "1";
      }

      setFormData(updatedForm);
    } else if (!isEqual(formData, { ...defaultData, is_theme: formData.is_theme || "1" })) {
      setFormData((prev) => ({
        ...defaultData,
        is_theme: prev.is_theme || "1",
      }));
    }
  }, [data, defaultData, initialData, Fields, isBanner, dynamicFields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name == "is_type" && setValueVia(value);

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuillChange = (name, value, delta, source, editor) => {
    console.log("name", name, "value", value);
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

      visibleFields?.filter((field) => field.condition)
        .forEach((field) => {
          // if(field.name['description']){
          //   console.log('description value', field.name['description'])
          // }
          // return;
          const value = formData[field.name];
          if (value != null) {
            payload.append(field.name, value);
          }
        });

      if (data && onUpdate) {
        await onUpdate(payload);
      } else if (onSubmit) {
        await onSubmit(payload);
      }

      if (!data) {
        setFormData(defaultData || {});
        setResetKey(Date.now());
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
            <div
              className={`${field.isLeft ? "" : `col-${field.col || 12}`} ${
                field.type === "hidden" ? "d-none" : ""
              }`}
              key={`${resetKey}-${field.name}`}
            >
              <CustomFormField
                {...field}
                id={`${field.name}_${resetKey}`}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={
                  field.type === "file"
                    ? handleFileChange
                    : field.type === "editor"
                    ? handleQuillChange
                    : handleChange
                }
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
