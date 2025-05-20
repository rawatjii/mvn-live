const CustomButton = ({ text = "Button", className = "", onClick, isLoading = false, disabled = false }) => {
  return (
    <div className="btn-save">
      <button 
        className={`save-btn position-relative ${className} ${isLoading ? 'loading' : ''}`} 
        onClick={onClick}
        disabled={disabled}
      >
        {isLoading ? (
          <div className="d-flex  align-items-center">Loading...
          <div className="spinner-border m-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>
        ) : (
          text
        )}
      </button>
      
    </div>
  );
};

export default CustomButton;