const CustomTitle = ({ icon, title }) => {
    return (
      <div className="head-box ">
        <h6 className="CustomTitle">
          {icon} {title}
        </h6>
      </div>
    );
  };
  
  export default CustomTitle;