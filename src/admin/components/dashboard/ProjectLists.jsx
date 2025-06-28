import React from "react";
import generateApi from "../../api/generateApi";
import useCrud from "../../hooks/useCrud";

const ProjectLists = ({ items }) => {
  const verticalApi = generateApi("project");
  const { data, loading, error, createItem, editItem, deleteItem } =useCrud(verticalApi);

  return (
    <div className="box">
      <h6>
        <i className="fa fa-building" aria-hidden="true"></i> Project List
      </h6>
      <div className="inner-table switch-table">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Hide / Show</th> */}
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td
                  className={
                    item.name === "Godrej Properties" ? "name-heading" : ""
                  }
                >
                  {item.name}
                </td>
                {/* <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={item.hot}
                      onChange={() => handleToggle(item.id, "hot")}
                    />
                    <span className="slider round"></span>
                  </label>
                </td> */}
                {/* <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={item.calculator}
                      onChange={() => handleToggle(item.id, "calculator")}
                    />
                    <span className="slider round"></span>
                  </label>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectLists;
