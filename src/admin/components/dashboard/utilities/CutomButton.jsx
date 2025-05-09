const CustomButton = ({ text = "Button", className = "", onClick, isLoading = false, disabled = false }) => {
  return (
    <div className="btn-save">
      <button 
        className={`save-btn ${className} ${isLoading ? 'loading' : ''}`} 
        onClick={onClick}
        disabled={disabled}
      >
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          text
        )}
      </button>
      <style jsx>{`
        .save-btn {
          position: relative;
          padding: 8px 16px;
          cursor: pointer;
        }
        .save-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .loader {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CustomButton;