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

const LandScape = () => {
  const [editData, setEditData] = useState(null);
  const [editLandscapeData, setEditLandscapeData] = useState(null);
  const { project_id } = useParams();
  const location = useLocation();
  const locationType = location.pathname.split("/").pop();

  const projectSectionsApi = generateApi("projec-sections", 0);
  const getEditDataApi = generateApi("show-by-project-with-sectionType", 0);
  const landScapeApi = generateApi("project-gallery", 0);
  const getApi = generateApi(`project-gallery/${project_id}/landscape`);

  const { editItem, createItem } = useCrud(projectSectionsApi);
  const { data: landscapeItems, fetchAll: fetchLandscapeItems } =
    useCrud(getApi);
  const {
    createItem: landscapeCreateItem,
    editItem: landscapeEditItem,
    deleteItem,
  } = useCrud(landScapeApi);

  const { getEditData } = useCrud(getEditDataApi);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const metaFields = [
    { name: "heading", label: "Heading", type: "text", col: 6 },
    { name: "sub_heading", label: "Sub Heading", type: "text", col: 6 },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter Description",
      col: 12,
    },
  ];

  const landscapeFields = [
    { name: "title", label: "Title", type: "text", col: 12 },
    { name: "image", label: "Image", type: "file", col: 6, isRequired: true },
    {
      name: "alternative_image",
      label: "Alternate Image",
      type: "file",
      col: 6,
    },
    { name: "sm_image", label: "Small Image", type: "file", col: 6 },
    {
      name: "sm_alternative_image",
      label: "Small Alternative Image",
      type: "file",
      col: 6,
    },
    {
      name: "alt",
      label: "Alt",
      type: "text",
      col: 12,
      placeholder: "Enter Alt text",
      isRequired: true,
    },
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

  const fetchAllLandscapeItems = async () => {
    try {
      await fetchLandscapeItems({ project_id, type: locationType });
    } catch (error) {
      console.error("Error fetching landscape items:", error);
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

  const handleCreateLandscape = async (formData) => {
    try {
      formData.append("is_type", "landscape");
      await landscapeCreateItem(formData);
      await fetchAllLandscapeItems();
      setEditLandscapeData(null);
    } catch (error) {
      console.error("Error creating landscape item:", error);
    }
  };

  const handleEditLandscape = async (formData) => {
    try {
      formData.append("is_type", "landscape");
      await landscapeEditItem(editLandscapeData.id, formData);
      await fetchAllLandscapeItems();
      setEditLandscapeData(null);
    } catch (error) {
      console.error("Error updating landscape item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      await fetchAllLandscapeItems();
    } catch (error) {
      console.error("Error deleting landscape item:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditLandscapeData(null);
  };

  useEffect(() => {
    fetchMetadata();
    // fetchAllLandscapeItems();
  }, []);

  const columns = [
    { key: "", label: "S.No." },
    { key: "title", label: "Title", type: "text" },
    { key: "image", label: "Image", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "text" },
  ];

  const paginatedData =
    landscapeItems?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ) || [];
  return (
    <CustomSection>
      <StatusOrder
        sectionId={editData?.id}
        editData={editData}
        fetchEditData={fetchMetadata}
      />
      <MicroBox>
        <CustomTitle title="Landscape" />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={metaFields}
          defaultData={editData}
          onSubmit={editData ? handleEditMeta : handleCreateMeta}
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle
          title={
            editLandscapeData ? "Edit Landscape Image" : "Add Landscape Images"
          }
        />
        <CustomFormMicrosite
          isBanner={false}
          dynamicFields={landscapeFields}
          defaultData={editLandscapeData}
          onSubmit={
            editLandscapeData ? handleEditLandscape : handleCreateLandscape
          }
          submitButtonText={editLandscapeData ? "Update" : "Create"}
          cancelButton={
            editLandscapeData
              ? { text: "Cancel", onClick: handleCancelEdit }
              : null
          }
        />
      </MicroBox>
      <MicroBox>
        <CustomTitle title="Landscape Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            window.scrollTo(0, 0);
            setEditLandscapeData(row);
          }}
          onDelete={(row) => handleDeleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((landscapeItems?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default LandScape;
