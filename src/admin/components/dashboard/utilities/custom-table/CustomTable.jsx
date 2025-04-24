import React from "react";
import "./custom-table.css";
import {
  Table,
  TableBody,
  TableBodyColum,
  TableContainer,
  TableHead,
  TableHeadColum,
  TableRow,
} from "../CutomTags";
import { MdEdit, MdDelete } from "react-icons/md";
import CustomModal from "../custom-modal/CustomModal";

const CustomTable = ({ columns, data, onEdit, onDelete, startIndex = 0 }) => {
  const [modalImage, setModalImage] = React.useState(null);
  const [modalText, setModalText] = React.useState(null);
  const textLength = 1;

  const truncateText = (text) => {
    const words = text?.split(" ");
    if (words?.length > textLength) {
      return words.slice(0, textLength).join(" ") + " ...";
    }
    return text;
  };

  return (
    <>
      <TableContainer className="CustomTableContainer">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col, index) => (
                <TableHeadColum key={index}>{col.label}</TableHeadColum>
              ))}
              <TableHeadColum>Action</TableHeadColum>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.length > 0 ? (
              data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((col, colIndex) => (
                    <TableBodyColum key={colIndex}>
                      {colIndex === 0 ? (
                        startIndex + rowIndex + 1
                      ) : col.type === "file" ? (
                        <img
                          src={row[col.key]}
                          alt="thumbnail"
                          width="50"
                          height="50"
                          style={{
                            cursor: "pointer",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                          onClick={() => setModalImage(row[col.key])}
                        />
                      ) : row[col.key].split(" ").length > textLength ? (
                        <span
                          style={{ cursor: "pointer", color: "#eee" }}
                          onClick={() => setModalText(row[col.key])}
                        >
                          {truncateText(row[col.key])}
                        </span>
                      ) : (
                        row[col.key]
                      )}
                    </TableBodyColum>
                  ))}
                  <TableBodyColum customClass="ActionColum">
                    <button onClick={() => onEdit?.(row)} className="edit">
                      <MdEdit />
                    </button>
                    <button onClick={() => onDelete?.(row)} className="delete">
                      <MdDelete />
                    </button>
                  </TableBodyColum>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableBodyColum
                  colSpan={columns.length + 1}
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  No data available
                </TableBodyColum>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Image Modal */}
      {modalImage && (
        <CustomModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          title="Image Preview"
        >
          <img src={modalImage} alt="full-size" />
        </CustomModal>
      )}

      {/* Text Modal */}
      {modalText && (
        <CustomModal
          isOpen={!!modalText}
          onClose={() => setModalText(null)}
          title="Full Content"
        >
          <p style={{ whiteSpace: "pre-wrap" }}>{modalText}</p>
        </CustomModal>
      )}
    </>
  );
};

export default CustomTable;
