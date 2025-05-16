import React from "react";
import { Box, TopBox } from "./utilities/CutomTags";
import CustomTitle from "./utilities/CustomTitle";
import { FaIdCard, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCrud from "../../hooks/useCrud";
import generateApi from "../../api/generateApi";


export default function Testimonials() {
  const aboutsApi = generateApi("testimonials");
  const { data } = useCrud(aboutsApi);

  return (
    <Box>
      <div className="box-review">
        <CustomTitle icon={<FaIdCard />} title="Testimonials" />
        {data.map((review, index) => {
          if(index < 3){
            return <div key={review.id} className="review">
            <div className="l-review">
              <span>{review.name.split('')[0]}</span>
            </div>
            <div className="r-review">
              <h4>{review.name}</h4>
              <p>
                {review.description}
              </p>
              <ul>
                <li>
                  <FaCalendar className="icon" /> {new Date(review.created_at).toDateString()}
                </li>
              </ul>
            </div>
          </div>
          }
        })}
      </div>
    </Box>
  );
}
