import React, { useState, useEffect } from "react";
import { CustomSection, MicroBox } from "../utilities/CutomTags";
import CustomTitle from "../utilities/CustomTitle";
import CustomForm from "../utilities/CustomFormMicrosite";
import generateApi from "../../../api/generateApi";
import useCrud from "../../../hooks/useCrud";
import CustomTable from "../utilities/custom-table/CustomTable";
import CustomPagination from "../utilities/pagination/CustomPagination";

const HeroSection = () => {
  const bannerApi = generateApi("project-banner");
  const { data, createItem, editItem, deleteItem } = useCrud(bannerApi);
  const [formType, setFormType] = useState("image");
  const [editModalData, setEditModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeInputs, setTypeInputs] = useState([]);
  const itemsPerPage = 5;

  useEffect(() => {
    setTypeInputs(
      formType === "image"
        ? [
            { name: "image", label: "Image", type: "file", col: 12, isLeft: true },
            { name: "alternative_image", label: "Alternative Image", type: "file", col: 12, isLeft: true },
            { name: "alt", label: "Alt text", type: "text", col: 12, isLeft: true, isRequired: true },
          ]
        : formType === "iframe"
        ? [{ name: "iframe", label: "Iframe Link", type: "text", placeholder: "Enter Iframe Link", col: 12, isLeft: true, isRequired: true }]
        : formType === "json"
        ? [{ name: "json", label: "Upload JSON", type: "file", col: 12, isLeft: true }]
        : formType === "video"
        ? [{ name: "video", label: "Upload Video", type: "file", col: 12, isLeft: true }]
        : []
    );
  }, [formType]);

  const columns = [
    { key: "", label: "S.No." },
    { key: "is_type", label: "Type", type: "file" },
    { key: "alternative_image", label: "Alternative Image", type: "file" },
    { key: "alt", label: "Alt Text", type: "input" },
  ];

  const formFields = [
    {
      sectionName: "Upload Banner",
      visible: true,
      fields: [
        {
          label: "File type",
          type: "select",
          col: 12,
          selectedVal: formType,
          name: "is_type",
          isLeft: true,
          options: [
            { label: "Image", value: "image" },
            { label: "Iframe link", value: "iframe" },
            { label: "Video", value: "video" },
            { label: "JSON", value: "json" },
          ],
        },
        ...typeInputs,
      ],
    },
  ];

  const paginatedData = data?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <CustomSection customClass="d-block">
      {formFields.map(
        (section) =>
          section.visible && (
            <MicroBox key={section.sectionName}>
              <CustomTitle title={section.sectionName} />
              <CustomForm
                dynamicFields={section.fields}
                defaultData={editModalData}
                setValueVia={setFormType}
                onSubmit={
                  editModalData
                    ? (formData) => {
                        editItem(editModalData.id, formData);
                        setEditModalData(null);
                      }
                    : createItem
                }
              />
            </MicroBox>
          )
      )}
      <MicroBox>
        <CustomTitle title="Banner Items" />
        <CustomTable
          columns={columns}
          data={paginatedData}
          onEdit={(row) => {
            scrollTo(0, 0);
            setEditModalData(row);
            setFormType(row.is_type || "image");
          }}
          onDelete={(row) => deleteItem(row.id)}
          startIndex={(currentPage - 1) * itemsPerPage}
        />
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil((data?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </MicroBox>
    </CustomSection>
  );
};

export default HeroSection;