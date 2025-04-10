// CustomSection.jsx
export const CustomSection = ({ children ,customClass}) => (
    <section className="microsite-area">
      <div className={`inner-micro-structure ${customClass}`}>{children}</div>
    </section>
  );
  
  // LeftArea.jsx
  export const LeftArea = ({ children }) => (
    <div className="left-area">{children}</div>
  );
    // LeftArea.jsx
    export const MicroBox = ({ children }) => (
        <div className="microbox">{children}</div>
      );
  // RightArea.jsx
  export const RightArea = ({ children }) => (
    <div className="right-area">{children}</div>
  );

  // dashboard page
  export const TopBox = ({ children }) => (
    <div className="top-box">{children}</div>
  );
  export const  Box = ({ children }) => (
    <div className="box">{children}</div>
  );
  

  // Custom Form tag

  export const  FormContainer = ({ children }) => (
    <div className="box">{children}</div>
  );

  export const Form = ({ children, onSubmit }) => (
    <form onSubmit={onSubmit} className="CustomForm">{children}</form>
  );

  // custom table tag

  export const  TableContainer = ({ children }) => (
    <div className="CustomTableContainer">{children}</div>
  );
  export const  Table = ({ children }) => (
    <table className="CustomTable">{children}</table>
  );
  export const  TableHead = ({ children }) => (
    <thead className="CustomTableHead">{children}</thead>
  );
  export const  TableBody = ({ children }) => (
    <tbody className="CustomTableBody">{children}</tbody>
  );
  export const TableRow = ({children}) => (
    <tr className="CustomTableRow">{children}</tr>
  );
  export const  TableHeadColum = ({ children }) => (
    <th className="CustomHeadColumn">{children}</th>
  );
  export const  TableBodyColum = ({ children ,customClass}) => (
    <td className={`CustomBodyColumn ${customClass}`}>{children}</td>
  );

  
