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

const ConnectionMVNMall = () => {
  const [editData, setEditData] = useState(null);
  const [editConnectionmvnMallData, setEditConnectionmvnMallData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  
  const projectSectionsApi = generateApi("projec-sections");
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const ConnectionmvnMallApi = generateApi(`project/${project_id}/connection_mall`);
  
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const { data: ConnectionmvnMallItems, createItem: ConnectionmvnMallCreateItem, editItem: ConnectionmvnMallEditItem, deleteItem,fetchAll: fetchConnectionmvnMallItems} = useCrud(ConnectionmvnMallApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const metaFields = [
    { name: "heading", label: "Heading", type: "text", col: 6 },
  ];

  const ConnectionmvnMallFields = [
    { name: "heading", label: "Heading", type: "text", col: 6,isRequired:true },
    { name: "image", label: "Image", type: "file", col: 6,isRequired:true },
    { name: "alternative_image", label: "Alternate Image", type: "file", col: 6 },
    { name: "alt", label: "Alt", type: "text", col: 6, placeholder: "Enter Alt text",isRequired:true },
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

  const fetchAllConnectionmvnMallItems = async () => {
    try {
      await fetchConnectionmvnMallItems({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching ConnectionmvnMall items:", error);
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

  const handleCreateConnectionmvnMall = async (formData) => {
    try {
      formData.append("is_type", "connection_mall");
      await ConnectionmvnMallCreateItem(formData);
      await fetchAllConnectionmvnMallItems();
      setEditConnectionmvnMallData(null);
    } catch (error) {
      console.error("Error creating ConnectionmvnMall item:", error);
    }
  };

  const handleEditConnectionmvnMall = async (formData) => {
    try {
      formData.append("is_type", "connection_mall");
      await ConnectionmvnMallEditItem(editConnectionmvnMallData.id, formData);
      await fetchAllConnectionmvnMallItems();
      setEditConnectionmvnMallData(null);
    } catch (error) {
      console.error("Error updating ConnectionmvnMall item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAllConnectionmvnMallItems();
    } catch (error) {
      console.error("Error deleting ConnectionmvnMall item:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditConnectionmvnMallData(null);
  };

  useEffect(() => {
    fetchMetadata();
    fetchAllConnectionmvnMallItems();
  }, []);

  const columns = [
    { key: "", label: "S.No." },
    { key: "heading", label: "Title", type: "text" },
    { key: "image", label: "Image", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "text" },
  ];

  const paginatedData = ConnectionmvnMallItems?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
  return (
    <CustomSection>
      <StatusOrder sectionId={editData?.id} editData={editData} fetchEditData={fetchMetadata}/>  
      <MicroBox>
        <CustomTitle title="Connection With MVN Mall" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={metaFields}
          defaultData={editData}
          onSubmit={editData ? handleEditMeta : handleCreateMeta}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title={editConnectionmvnMallData ? "Edit Connection Mvn Mall Image" : "Add Connection mvn Mall Images"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={ConnectionmvnMallFields}
          defaultData={editConnectionmvnMallData}
          onSubmit={editConnectionmvnMallData ? handleEditConnectionmvnMall : handleCreateConnectionmvnMall}
          submitButtonText={editConnectionmvnMallData ? "Update" : "Create"}
          cancelButton={editConnectionmvnMallData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="Connection mvn Mall Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditConnectionmvnMallData(row);
          }}
          onDelete={(row) => handleDeleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((ConnectionmvnMallItems?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default ConnectionMVNMall;