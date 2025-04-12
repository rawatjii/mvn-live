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

const CustomTable = ({ columns, data, onEdit, onDelete }) => {
  return (
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
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <TableBodyColum key={colIndex}>{row[col.key]}</TableBodyColum>
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
  );
};

export default CustomTable;
