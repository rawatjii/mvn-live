import { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";

const ThreesixtyView = () => {
  const [editData, setEditData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  const projectSectionsApi = generateApi("projec-sections",0);
  const getEditDataApi= generateApi("show-by-project-with-sectionType",0);
  const { getEditData } = useCrud(getEditDataApi);
  const { editItem,createItem } = useCrud(projectSectionsApi);
  const [successVia,setSuccessVia]=useState(false)

  const fields = [
    { name: "heading", label: "Heading", type: "text", col: 6 },
    { name: "sub_heading", label: "Sub Heading", type: "text", col: 6 },
    { name: "json", label: "Upload JSON", type: "file", col: 12 },
    // { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 12 }
  ];



   const fetchEditData = async () => {
    const formData = new FormData();
    formData.append("section_type", locationType);
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
      <MicroBox>
        <CustomTitle title="Overview" />
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

export default ThreesixtyView;