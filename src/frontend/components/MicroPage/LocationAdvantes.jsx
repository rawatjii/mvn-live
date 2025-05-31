import React from "react";
// Import Swiper styles
import "swiper/css";
import "yet-another-react-lightbox/styles.css";
import useFetchData from "../../utils/apiHelper";

const LocationAdvantes = React.memo(({ project_id }) => {

  const { data, loading:projectLoading } = useFetchData(`project/${project_id}/location-advantage`);

  console.log('kjsdf data',data);
  


  return (
    <div>
      {data && (
        <ul className="location_points">
          <span className="left_road"></span>
          <span className="top_road"></span>
          {data?.map((item, index) => (
            <li key={index}>
              <h3 className="distance">{item.distance}</h3>
              <p>{item.designation}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default LocationAdvantes;
