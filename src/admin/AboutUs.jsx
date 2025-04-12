import React, { useState } from 'react'
import { CustomSection, LeftArea, MicroBox, RightArea } from './components/dashboard/utilities/CutomTags';
import CustomTitle from './components/dashboard/utilities/CustomTitle';
import CustomForm from './components/dashboard/utilities/CustomForm';
import CustomTable from './components/dashboard/utilities/custom-table/CustomTable';
import CustomPagination from './components/dashboard/utilities/pagination/CustomPagination';
import generateApi from './api/generateApi';
import useCrud from './hooks/useCrud';
// Simulated backend response
const metaFields = [
  { name: "heading", label: "Title", type: "text", col: 12,isLeft : true  },
  { name: "alt", label: "Alt Tag", type: "text", col: 12,isLeft : true  },
  { name: "image", label: "Image", type: "file", col: 6 ,isLeft : true },
  { name: "alternative_image", label: "Alternative Image", type: "file", col: 6 ,isLeft : true },
];

const columns = [
  { key: 'id', label: 'S.No.' },
  { key: 'title', label: 'Title' },
  { key: 'image', label: 'Image' }
];

const oldData = [
  { id: 1, title: 'Enrich lives', image: 'image1.jpg' },
  { id: 2, title: 'Empower ambitions', image: 'image2.jpg' },
  { id: 3, title: 'Drive innovation', image: 'image2.jpg' },
  { id: 4, title: 'Inspire quality', image: 'image2.jpg' },
];




const AdminAboutUs = () => {
  
  
  const aboutsApi = generateApi('our-values'); // ✅ Adjust endpoint if needed
  const { data, loading, error,createItem ,updateItem,deleteItem} = useCrud(aboutsApi);

  
console.log(data,"data about");

const handleCreate = (formData) => createItem(formData);
const handleEdit = (row) => updateItem(row.id, row);
const handleDelete = (row) => deleteItem(row.id);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <CustomSection customClass="">
      <LeftArea>
        <MicroBox>
          <CustomTitle title="Our Values From" />
          <CustomForm isBanner={false} dynamicFields={metaFields}  onSubmit={handleCreate}/>
        </MicroBox>
      </LeftArea>
      <RightArea>
        <MicroBox>
          <CustomTitle title="Our Values Table" />
          <CustomTable
            columns={columns}
            data={paginatedData}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </MicroBox>
        <CustomPagination
      currentPage={currentPage}
      totalPages={Math.ceil(data.length / itemsPerPage)}
      onPageChange={(page) => setCurrentPage(page)}
    />
      </RightArea>
    </CustomSection>
  );
}

export default AdminAboutUs