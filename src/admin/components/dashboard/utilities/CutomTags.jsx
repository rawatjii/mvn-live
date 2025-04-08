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
  
