import React, {useState} from 'react';
import CustomTable from './components/dashboard/utilities/custom-table/CustomTable';
import generateApi from './api/generateApi';
import CustomTitle from './components/dashboard/utilities/CustomTitle';
import { CustomSection, MicroBox } from "./components/dashboard/utilities/CutomTags";
import useCrud from './hooks/useCrud';
import { useNavigate } from 'react-router-dom';
export default function ProjectList() {
    const [currentPage] = useState(1);
    const projectListApi=generateApi("project");
    const { data,deleteItem} =useCrud(projectListApi);
    const itemsPerPage = 5;
    const navigate=useNavigate()
    const columns = [
        { key: "", label: "S.No." },
        { key: "name", label: "Name", type: "input" },
        { key: "slug", label: "Project Slug", type: "input" },
        { key: "rera_no", label: "RERA NO.", type: "input" },
        { key: "phone_ivr", label: "Phone IVR", type: "input" },
      ];
      
     const paginatedData = data?.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
      );
      
      const handleEditSubmit = (formData) => {
        editItem(editModalData.id, formData); 
        setEditModalData(null); 
      };
      
      const handleEdit = (row) => {
        navigate(`/admin/microsite/${row.id}`)
      };
      
      const handleDelete = (row) => deleteItem(row.id);

  return (
    <CustomSection>
    <MicroBox>
          <CustomTitle title="Our Values Table" />
          <CustomTable
            columns={columns}
            data={paginatedData}
            onEdit={handleEdit} 
            onDelete={handleDelete}
          />
         
    </MicroBox>
    </CustomSection>
  )
}


