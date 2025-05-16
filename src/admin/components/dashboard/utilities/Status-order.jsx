import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomFormMicrosite from "./CustomFormMicrosite";
import useCrud from "../../../hooks/useCrud";
import generateApi from "../../../api/generateApi";
const StatusOrder = ({ sectionId,editData,fetchEditData }) => {
    if(!editData){
        return
    }
  const statusApi = generateApi(`project-section/${sectionId}/status`,0,1);
  const orderApi = generateApi(`project-section-sequence`,0,1);
  
  const { createItem: createStatus, editItem: editStatus} = useCrud(statusApi);
  const { createItem: createOrder, editItem: editOrder } = useCrud(orderApi);

  const fields = [
        { name: "seq", label: "Section Order", type: "text", col: 6,placeholder:"Enter Section order",isRequired:true },
        { label: "status", type: "select", col: 6, name: "status", options: [{ value: "1", label: "Active" },{ value: "0", label: "Inactive" }], isRequired: true },
  ];


  const handleCreateMeta = async (formData) => {
    try {
      formData.append("section_id", sectionId);
      await createStatus(formData);
      await createOrder(formData)
      await fetchEditData();
    } catch (error) {
      console.error("Error creating project section:", error);
    }
  };

  const handleEditMeta = async (formData) => {
        formData.append("section_id", sectionId);
    try {
      await editStatus(formData);
      await editOrder(formData);
      await fetchEditData();
    } catch (error) {
      console.error("Error updating project section:", error);
    }
  };


  return (
    <CustomSection customClass="d-block">
      <div className="row">
        <div className="col col-12">
          <MicroBox>
           <CustomFormMicrosite
          isBanner={false}
          dynamicFields={fields}
          defaultData={editData}
          onSubmit={editData ? handleEditMeta : handleCreateMeta}
        />
          </MicroBox>
        </div>
      </div>
    </CustomSection>
  );
};

export default StatusOrder;