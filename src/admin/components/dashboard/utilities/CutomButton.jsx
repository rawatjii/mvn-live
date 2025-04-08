// CustomButton.jsx
const CustomButton = ({ text = "Button", className = "", onClick }) => {
    return (
      <div className="btn-save">
        <button className={`save-btn ${className}`} onClick={onClick}>
          {text}
        </button>
      </div>
    );
  };
  
  export default CustomButton;
  