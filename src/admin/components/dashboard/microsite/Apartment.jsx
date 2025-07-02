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
import { setDeleteId, toggleModal } from "../../../../redux/commonSlice";
import { useDispatch, useSelector } from "react-redux";

const Apartment = () => {
  const [editData, setEditData] = useState(null);
  const [editapartmentData, setEditapartmentData] = useState(null);
  const dispatch = useDispatch();
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();
  const {isDeleteConfirm, deleteId} = useSelector(state=>state.commonState)
  
  const projectSectionsApi = generateApi("projec-sections",0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const apartmentApi = generateApi("project-gallery",0);
  const getApi = generateApi(`project-gallery/${project_id}/apartment`);
  
  const { editItem, createItem } = useCrud(projectSectionsApi);
  const {data: apartmentItems,fetchAll: fetchapartmentItems} = useCrud(getApi);
  const { createItem: apartmentCreateItem,editItem: apartmentEditItem,deleteItem} = useCrud(apartmentApi);
  
  const { getEditData } = useCrud(getEditDataApi);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const metaFields = [
    { name: "heading", label: "Heading", type: "text", col: 6 },
    { name: "sub_heading", label: "Sub Heading", type: "text", col: 6 },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description", col: 12 }
  ];

  const apartmentFields = [
    { name: "title", label: "Title", type: "text", col: 12,isRequired:true },
    { name: "image", label: "Image", type: "file", col: 6,isRequired:true },
    { name: "alternative_image", label: "Alternate Image", type: "file", col: 6 },
        { name: "sm_image", label: "Small Image", type: "file", col: 6 },
    { name: "sm_alternative_image", label: "Small Alternative Image", type: "file", col: 6 },
        { name: "alt", label: "Alt", type: "text", col: 6, placeholder: "Enter Alt text",isRequired:true },

  ];

  useEffect(()=>{
    if(isDeleteConfirm){
      deleteItem(deleteId);
      dispatch(toggleModal(false));
    }
  }, [isDeleteConfirm])

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

  const fetchAllapartmentItems = async () => {
    try {
      await fetchapartmentItems({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching apartment items:", error);
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

  const handleCreateapartment = async (formData) => {
    try {
      formData.append("is_type", "apartment");
      await apartmentCreateItem(formData);
      await fetchAllapartmentItems();
      setEditapartmentData(null);
    } catch (error) {
      console.error("Error creating apartment item:", error);
    }
  };

  const handleEditapartment = async (formData) => {
    try {
            formData.append("is_type", "apartment");
      await apartmentEditItem(editapartmentData.id, formData);
      await fetchAllapartmentItems();
      setEditapartmentData(null);
    } catch (error) {
      console.error("Error updating apartment item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAllapartmentItems();
    } catch (error) {
      console.error("Error deleting apartment item:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditapartmentData(null);
  };

  const handleDelete = (row) => {
    dispatch(setDeleteId(row.id))
    dispatch(toggleModal(true));
    // (row) => handleDeleteItem(row.id)
  }

  useEffect(() => {
    fetchMetadata();
  }, []);

  const columns = [
    { key: "", label: "S.No." },
    { key: "title", label: "Title", type: "text" },
    { key: "image", label: "Image", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "text" },
  ];

  const paginatedData = apartmentItems?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
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
        <CustomTitle title={editapartmentData ? "Edit apartment Image" : "Add apartment Images"} />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={apartmentFields}
          defaultData={editapartmentData}
          onSubmit={editapartmentData ? handleEditapartment : handleCreateapartment}
          submitButtonText={editapartmentData ? "Update" : "Create"}
          cancelButton={editapartmentData ? { text: "Cancel", onClick: handleCancelEdit } : null}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="apartment Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditapartmentData(row);
          }}
          onDelete={handleDelete}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((apartmentItems?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default Apartment;