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
import { MdEdit, MdDelete, MdOpenInNew } from "react-icons/md";
import CustomModal from "../custom-modal/CustomModal";
import { BACKEND_IMAGE_URL } from "../../../../../config/config";
import imagejson from "../../../../assets/images/json-file.png";
import video_icon from "../../../../assets/images/icon_video.png";
import image_preview from "../../../../assets/images/img_preview.png";
import link_image from "../../../../assets/images/link.png";
import iframe_icon from "../../../../assets/images/link.png"; 
const CustomTable = ({ columns, data, onEdit, onDelete, startIndex = 0, textLength=50 }) => {
  const [modalImage, setModalImage] = React.useState(null);
  const [modalText, setModalText] = React.useState(null);
  const [modalIframe, setModalIframe] = React.useState(null);

  const truncateText = (text) => {
    if (typeof text !== "string") return text;
    const words = text.split(" ");
    if (words.length > textLength) {
      return words.slice(0, textLength).join(" ") + " ...";
    }
    return text;
  };

  const stripHtml = (html)=>{
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || ''
  }

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
                  {columns.map((col, colIndex) => {
                    return (
                      <TableBodyColum key={colIndex}>
                        {/* Handle S.No. column */}
                        {colIndex === 0 ? (
                          startIndex + rowIndex + 1
                        ) : // Handle columns with a render function
                        col.render ? (
                          col.render(row)
                        ) : // Handle file type columns
                        col.type === "file" ? (
                          row[col.key] ? (
                            row?.is_type == "image" || row.is_type === 1 ? (
                              <img
                                src={image_preview}
                                alt="thumbnail"
                                width="30"
                                height="30"
                                style={{
                                  cursor: "pointer",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                }}
                                onClick={() => setModalImage(row['image'])}
                              />
                            ) : row.is_type === "video" || row.is_type === 3 ? (
                              <img
                                src={video_icon}
                                alt="video"
                                height="35"
                                width="35"
                                style={{ cursor: "pointer" }}
                                onClick={() => setModalImage(row['video'])}
                              />
                            ) : row.is_type === "json" ? (
                              <a href={`${BACKEND_IMAGE_URL}${row['json']}`} target="_blank" rel="noopener noreferrer">
                                <img src={imagejson} alt="JSON file" height="30" width="30"/>
                              </a>
                            ) : row.is_type === "iframe" || row.is_type === 2 ? (
                              <img
                                src={iframe_icon || link_image} // Use iframe_icon if available, otherwise fallback to link_image
                                alt="iframe"
                                width="30"
                                height="30"
                                style={{
                                  cursor: "pointer",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                }}
                                onClick={() => setModalIframe(row['iframe'] || row[col.key])}
                                title="Click to preview iframe"
                              />
                            ) : (
                              <img
                                src={`${BACKEND_IMAGE_URL}${row[col.key]}`}
                                alt="default"
                                width="30"
                                height="30"
                                style={{
                                  cursor: "default",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                }}
                                title={`Unknown is_type: ${row.is_type}`}
                              />
                            )
                          ) : (
                            row[col.key] ? <img
                              src={`${BACKEND_IMAGE_URL}${row[col.key]}`}
                              alt="default"
                              width="30"
                              height="30"
                              style={{
                                cursor: "default",
                                objectFit: "cover",
                                borderRadius: "4px",
                              }}
                              title="No content available"
                            /> : '-'
                          )
                        ) : 
                        typeof row[col.key] === "string" &&
                          row[col.key].split(" ").length > textLength ? (
                          <span
                            style={{ cursor: "pointer", color: "#eee" }}
                            onClick={() => setModalText(row[col.key])}
                          >
                            {truncateText(stripHtml(row[col.key]))}
                          </span>
                        ) : (
                          stripHtml(row[col.key]) ?? "-"
                        )}
                      </TableBodyColum>
                    );
                  })}
                  <TableBodyColum customClass="ActionColum">
                    <button onClick={() => onEdit?.(row)} className="edit">
                      <MdEdit />
                    </button>
                    <button onClick={() => onDelete?.(row)} className="delete">
                      <MdDelete />
                    </button>
                    {(row.is_type === "iframe" || row.is_type === 2) && row.iframe && (
                      <button
                        onClick={() => window.open(`${BACKEND_IMAGE_URL}${row.iframe}`, '_blank')}
                        className="open-link"
                        title="Open in new tab"
                      >
                        <MdOpenInNew />
                      </button>
                    )}
                  </TableBodyColum>
                </TableRow>
              ))
            ) : (
              <TableRow className="text-center">
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

      {/* Image/Video Modal */}
      {modalImage && (
        <CustomModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          title="Preview"
        >
          {modalImage.endsWith(".mp4") ? (
            <video
              src={`${BACKEND_IMAGE_URL}${modalImage}`}
              controls
              className="w-100"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            <img
              src={`${BACKEND_IMAGE_URL}${modalImage}`}
              alt="full-size"
              style={{ maxWidth: "100%" }}
            />
          )}
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

      {/* Iframe Modal */}
      {modalIframe && (
        <CustomModal
          isOpen={!!modalIframe}
          onClose={() => setModalIframe(null)}
          title="Iframe Preview"
          maxWidth="80vw"
        >
          <div style={{ position: "relative", width: "100%", height: "500px" }}>
            <iframe
              src={`${modalIframe}`}
              title="iframe content"
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              allowFullScreen
            />
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <a 
                href={`${BACKEND_IMAGE_URL}${modalIframe}`} 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "8px 12px",
                  background: "#4a90e2",
                  color: "white",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontSize: "14px"
                }}
              >
                <MdOpenInNew style={{ marginRight: "6px" }} /> Open in New Tab
              </a>
            </div>
          </div>
        </CustomModal>
      )}
    </>
  );
};

export default CustomTable;