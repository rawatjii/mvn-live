import React, { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useParams } from "react-router-dom";

const BasicMicroSite = () => {
  const [platter, setplatter] = useState([]);
  const { project_id } = useParams();
  const editData = generateApi(`project/${project_id}`);
  const basicApi = generateApi(`project`);
  const { data } = useCrud(editData);
  const { createItem, editItem, deleteItem, editGet } = useCrud(basicApi);

  useEffect(() => {
    generateApi("platter").get().then(itm => setplatter(itm.data.data));
  }, []);

  const formFields = {
    sectionName: "Basic Details",
    sectionApi: "meta-micro-site",
    visible: true,
    fields: [
      { label: "Platter", type: "select", col: 6, selectedVal: "select", name: "platter_id", options: platter?.map(item => ({ value: item.id, label: item.name })), isRequired: true },
      { label: "Theme", type: "select", col: 6, selectedVal: "select", name: "is_theme", options: [{ value: "1", label: "Theme type 1" },{ value: "2", label: "Theme type 2" }], isRequired: true },
      { name: "name", label: "Project Name", Placeholder: "Enter Project Name", type: "text", col: 6, isRequired: true },
      { name: "slug", label: "Project Slug", Placeholder: "project-slug", type: "text", col: 6, isRequired: true },
      { name: "image", label: "Project image", Placeholder: "Enter Project Typology", type: "file", col: 6 },
      { name: "batch", label: "Upload Badge", type: "file", col: 6 },
      { name: "brochure", label: "Upload Brochure", type: "file", col: 6 },
      { name: "alternative_image", label: "Alternate Project image",type: "file", col: 6 },
      { name: "phone_ivr", label: "Phone IVR", Placeholder: "xxxxxxxxxx", type: "text", col: 6, isRequired: true },
      { name: "rera_no", label: "RERA NO", Placeholder: "EX/MM/MM/MM", type: "text", col: 6, isRequired: false },
      { name: "meta_title", label: "Meta Title", Placeholder: "Enter Meta Title", type: "text", col: 6 },
      { name: "meta_keyword", label: "Meta Keyword", Placeholder: "Enter Meta Keyword", type: "text", col: 6 },
      { name: "meta_description", label: "Meta Description", Placeholder: "Enter Meta Description", type: "text", col: 6 }
    ]
  };

  const handleCreate = formData => createItem(formData, "basic");
  const handleEditSubmit = formData => editItem(project_id, formData);

  if (project_id && data.length === 0) return null;

  return (
    <CustomSection customClass="d-block">
      <MicroBox>
        <CustomTitle title={formFields.sectionName} />
        <CustomForm
          dynamicFields={formFields.fields}
          isBanner={false}
          onSubmit={project_id ? handleEditSubmit : handleCreate}
          defaultData={data}
          buttonLabel={project_id ? "Update" : "Save"}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default BasicMicroSite;