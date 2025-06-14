import React, { useState, useEffect } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";
import StatusOrder from "../utilities/Status-order";

const Elevation = () => {
  const [editData, setEditData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();


  const projectSectionsApi = generateApi("projec-sections", 0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType");

  const { editItem: editMetadata, createItem } = useCrud(projectSectionsApi);
  const { getEditData } = useCrud(getEditDataApi);

  const mainFields = [
    { name: "heading", label: "Heading", type: "text", col: 6 },
    { name: "sub_heading", label: "Sub Heading", type: "text", col: 6 },
    { name: "image", label: "Banner", type: "file", col: 6 },
    { name: "alternative_image", label: "Banner Alternate Image", type: "file", col: 6 },
    { name: "optional_images", label: "Small Image", type: "file", col: 6 },
    { name: "alt", label: "Alt", placeholder: "Enter Alt", type: "text", col: 6 },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 6 },
  ];

  const fetchEditData = async () => {
    const formData = new FormData();
    formData.append("section_type", 'elevation');
    formData.append("project_id", project_id);
    try {
      const data = await getEditData(formData);
      setEditData(data.data);
    } catch (error) {
      console.error("Error fetching edit data:", error);
    }
  };

  const handleCreateMeta = async (formData) => {
    try {
      formData.append("is_type", "image");
      await createItem(formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  const handleEditMeta = async (formData) => {
    try {
      await editMetadata(editData.id, formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error updating metadata:", error);
    }
  };

  useEffect(() => {
    fetchEditData();
  }, []);

  return (
    <CustomSection>
             <StatusOrder sectionId={editData?.id} editData={editData} fetchEditData={fetchEditData}/>

      <MicroBox>
        <CustomTitle title="Elevation" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={mainFields}
          defaultData={editData}
          onSubmit={editData ? handleEditMeta : handleCreateMeta}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default Elevation;