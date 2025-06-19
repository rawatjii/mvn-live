import React from "react";
import GallerySlider from "./GallerySlider";
import useFetchData from "../utils/apiHelper";
import { Link } from "react-router-dom";
import { BACKEND_IMAGE_URL } from "../../config/config";

const OnlineMedia = () => {
  const { data, loading } = useFetchData("media/news");

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!loading && data && data.length === 0)
    return <div className="text-center py-5">No records found</div>;

  return (
    <>
      {data &&
        data.map((item, index) => (
          <article className="awa_card awa_shadow" key={`news-${index}`}>
            <div>
              <img src={BACKEND_IMAGE_URL + item.image} alt={item.alt} />
            </div>

            <div>
              <p>{item.heading}</p>
              <div className="awa_posted d-md-flex justify-content-between align-items-center">
                <span className="text-capitalize">
                  <time>{new Date(item.date_at).toLocaleDateString('default', {
                    day:'numeric',
                    month:'long',
                    year: 'numeric'
                  })}</time>
                </span>

                <Link
                  to={`${item.links}`}
                  className="text-capitalize  "
                  target="_blank"
                >
                  View Details
                </Link>
              </div>
            </div>
          </article>
        ))}
    </>
  );
};

export default OnlineMedia;
