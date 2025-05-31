import React from "react";
import GallerySlider from "./GallerySlider";
import useFetchData from "../utils/apiHelper";

const OfflineMedia = ()=>{
  const { data, loading } = useFetchData("media-center/offline_news");

  if(loading) return <div className="text-center py-5">Loading...</div>;
  if(!loading && data && data.length === 0) return <div className="text-center py-5">No records found</div>;

  return(
    <>
      <GallerySlider
        data={data}
        slidesPerView={2}
        navigation={true}
      />
    </>
  )
}

export default OfflineMedia;