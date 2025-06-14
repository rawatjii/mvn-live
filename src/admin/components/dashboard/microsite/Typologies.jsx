import { useEffect, useState } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomFormMicrosite from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import { useLocation, useParams } from "react-router-dom";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";
import StatusOrder from "../utilities/Status-order";

const Typologies = () => {
  const [editData, setEditData] = useState(null);
  const [edittypologiesData, setEdittypologiesData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  const projectSectionsApi = generateApi("projec-sections",0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const typologiesApi = generateApi(`project-typologies`);
  
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const { data: typologiesItems, createItem: typologiesCreateItem, editItem: typologiesEditItem, deleteItem,getItems: fetchtypologiesItems} = useCrud(typologiesApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const metaFields = [
    { name: "heading", label: "Heading", type: "text", col: 6 },
  ];

  const typologiesFields = [
    { name: "heading", label: "Title", type: "text", col: 6,isRequired:true },
    { name: "image", label: "Image", type: "file", col: 6,isRequired:true },
    { name: "alternative_image", label: "Alternate Image", type: "file", col: 6 },
    { name: "alt", label: "Alt", type: "text", col: 6, placeholder: "Enter Alt text",isRequired:true },
    { name: "json", label: "Upload JSON", type: "file", col: 6,isRequired:true },
    { name: "short_description", label: "Description", type: "textarea", col: 6,isRequired:true },
  ];

  const fetchMetadata = async () => {
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

  const fetchAlltypologiesItems = async () => {
    try {
      await fetchtypologiesItems({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching typologies items:", error);
    }
  };

  const handleCreateMeta = async (formData) => {
    try {
      await createItem(formData);
      await fetchMetadata();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  const handleEditMeta = async (formData) => {
    try {
      await editItem(editData.id, formData);
      await fetchMetadata();
    } catch (error) {
      console.error("Error updating project section:", error);
    }
  };

  const handleCreatetypologies = async (formData) => {
    try {
      formData.append("is_type", "typologies");
      await typologiesCreateItem(formData);
      await fetchAlltypologiesItems();
      setEdittypologiesData(null);
    } catch (error) {
      console.error("Error creating typologies item:", error);
    }
  };

  const handleEdittypologies = async (formData) => {
    try {
            formData.append("is_type", "typologies");
      await typologiesEditItem(edittypologiesData.id, formData);
      await fetchAlltypologiesItems();
      setEdittypologiesData(null);
    } catch (error) {
      console.error("Error updating typologies item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAlltypologiesItems();
    } catch (error) {
      console.error("Error deleting typologies item:", error);
    }
  };

  const handleCancelEdit = () => {
    setEdittypologiesData(null);
  };

  useEffect(() => {
    fetchMetadata();
    fetchAlltypologiesItems();
  }, []);

  const columns = [
    { key: "", label: "S.No." },
    { key: "heading", label: "Title", type: "text" },
    { key: "image", label: "Image", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "text" },
  ];

  const paginatedData = typologiesItems?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
  return (
    <CustomSection>
      <StatusOrder sectionId={editData?.id} editData={editData} fetchEditData={fetchMetadata}/>
      <MicroBox>

        <CustomTitle title="Overview" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={metaFields}
          defaultData={editData}
          onSubmit={editData ? handleEditMeta : handleCreateMeta}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title={edittypologiesData ? "Edit typologies Details" : "Add typologies Details"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={typologiesFields}
          defaultData={edittypologiesData}
          onSubmit={edittypologiesData ? handleEdittypologies : handleCreatetypologies}
          submitButtonText={edittypologiesData ? "Update" : "Create"}
          cancelButton={edittypologiesData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="typologies Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEdittypologiesData(row);
          }}
          onDelete={(row) => handleDeleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((typologiesItems?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default Typologies;