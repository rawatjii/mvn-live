import React from "react";

const arr = [
  "Luxury Hotel | Luxury Brands | Fine Dining | Jewellery | Kids Z |",
  "Luxury Hotel | Luxury Brands | Fine Dining | Jewellery | Kids Z |",
  "Luxury Hotel | Luxury Brands | Fine Dining | Jewellery | Kids Z |",
  "Luxury Hotel | Luxury Brands | Fine Dining | Jewellery | Kids Z |",
];

const Lux_Scrolling = () => {
  return (
    <div className=" key-features">
      <div className="horizontal-scrolling-items">
        {arr.map((item, i) => (
          <div className="horizontal-scrolling-items__item" key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lux_Scrolling;
