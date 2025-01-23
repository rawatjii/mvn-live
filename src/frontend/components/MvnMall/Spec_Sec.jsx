import React from "react";
import Diamond from "../../assets/images/mvn-mall/diamond.png";

const loc_arr = [
  {
    id: 1,
    content: "A Premier Family And Tourist Destination",
  },
  {
    id: 2,
    content:
      "Located at the first and only DROP of the elevated Dwarka Expressway At 22 Km Stone",
  },
  {
    id: 3,
    content:
      " At Downtown New Gurugram ensuring higher footfalls & excellent connectivity",
  },
  {
    id: 4,
    content: "Seamless entry & exit points",
  },
  {
    id: 5,
    content: "Extremely close to NCR's major landmarks",
  },
  {
    id: 6,
    content: "Green spaces, and serene water bodies",
  },
];

const Spec_Sec = () => {
  return (
    <section className="section specifications-section">
      <div className="container">
        <div className="specs-head">
          <h2>SPECIFICATIONS</h2>
          <h4>A Premier Family And Tourist Destination</h4>
        </div>
        <div className="specifications-details">
          {loc_arr?.map((item) => (
            <div className="spec-points" key={item.id}>
              <img src={Diamond} alt="diamond-img" />
              <p>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spec_Sec;
