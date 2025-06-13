import { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";
import StatusOrder from "../utilities/Status-order";
const MasterBedroom = () => {
  const [editData, setEditData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  const projectSectionsApi = generateApi("projec-sections");
  const getEditDataApi= generateApi("show-by-project-with-sectionType",0);
  const { editItem,createItem } = useCrud(projectSectionsApi);
  const { getEditData } = useCrud(getEditDataApi);


  const fields = [
    { name: "heading", label: "Heading", type: "text", col: 12 },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 12 },
    { name: "json", label: "Desktop JSON",  type: "file", col: 6},
    { name: "mb_json", label: "Mobile JSON",  type: "file", col: 6},
  ];
 const fetchEditData = async () => {
    const formData = new FormData();
    formData.append("section_type", 'masterbedroom');
    formData.append("project_id", project_id);
    try {
      const data = await getEditData(formData);
      setEditData(data.data);
    } catch (error) {
      console.error("Error fetching edit data:", error);
    }
  };

  const handleCreate = async (formData) => {
    try {
      formData.append("is_type", "json");
      await createItem(formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  const handleEdit = async (formData) => {
    try {
      await editItem(editData.id, formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error updating project section:", error);
    }
  };
  useEffect(()=>{
    fetchEditData()
  },[]) 
  return (
    <CustomSection>
      <StatusOrder sectionId={editData?.id} editData={editData} fetchEditData={fetchEditData}/>
      <MicroBox>
        <CustomTitle title="Master Bedroom" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={fields}
          defaultData={editData}
        onSubmit={editData ? handleEdit : handleCreate}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default MasterBedroom;