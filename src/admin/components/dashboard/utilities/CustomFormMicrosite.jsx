import React, { useState, useEffect } from "react";
import { Form } from "./CutomTags";
import CustomFormField from "./CustomFormField";
import CustomButton from "./CutomButton";
import { useParams, useLocation } from "react-router-dom";

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

const CustomFormMicrosite = ({
  fieldVisibility = {},
  onSubmit,
  formType = "",
  isBanner = false,
  dynamicFields = [],
  buttonLabel = "Save",
  initialData = {},
  defaultData,
  dataError,
  setValueVia,
}) => {
  const Fields = isBanner ? defaultBannerFields : dynamicFields;
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const locationNav = useLocation();
  const locationPathname = locationNav.pathname.split("/").pop();
  const project_Id = params["project_id"];
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
  useEffect(() => {
    setFormData(defaultData);
    // alert("in")

    console.log(defaultData);
  }, [defaultData]);

  useEffect(() => {
    const currentFields = isBanner ? defaultBannerFields : dynamicFields;
    if (Object.keys(initialData).length > 0) {
      const updatedForm = {};
      currentFields.forEach((field) => {
        console.log(field);
        updatedForm[field.name] =
          field.type === "file"
            ? initialData[field.name] || null
            : initialData[field.name] || "";
      });

      // if (!("is_theme" in updatedForm)) {
      //   updatedForm["is_theme"] = "1";
      // }
      if (!("project_id" in updatedForm)) {
        updatedForm["project_id"] = project_Id;
      }

      updatedForm["section_type"] = locationPathname;

      setFormData(updatedForm);
    } else {
      setFormData((prev) => ({
        ...prev,
        project_id: project_Id,
        section_type: "overview",
      }));
    }
  }, [isBanner, dynamicFields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name == "is_type" && setValueVia(value);

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
      if (project_Id) {
        payload.append("project_id", project_Id);
      }

      payload.append("section_type", locationPathname);
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
      // }
      setResetKey(Date.now());
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
              className={`${
                field.isLeft === true ? "" : `col-${field.col || 12}`
              } ${field.type == "hidden" && "d-none"}`}
              key={`${resetKey}-${field.name}`}
            >
              <CustomFormField
                {...field}
                id={`${field.name}_${resetKey}`}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={
                  field.type == "file" ? handleFileChange : handleChange
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

export default CustomFormMicrosite;
