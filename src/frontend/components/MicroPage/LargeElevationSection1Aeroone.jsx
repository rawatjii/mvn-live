import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import { useMatches } from "../../../theme/theme";

function LargeElevationSection1Aeroone({title="Villas in the Sky", desc="Experience elevated living with unmatched luxury above the clouds.", image}) {
  const { isMobile } = useMatches();

  return (
    <div className="large-elevation mt_50" id="largeElevationSection">
      {/* view start */}

      <div
        className={`bottom_img_div ${isMobile ? "d_sm_block" : "d_lg_block"}`}
      >
        <div className={``}>
          <img
            src={isMobile ? image?.mobile : image?.desktop}
            alt={"LargeElevation Image"}
            className={`img-fluid img_in w-100 h-100 object-fit-cover ${
              isMobile ? " " : "d_lg_block"
            }`}
          />
        </div>
      </div>

      {/* view end */}

      <div className="content_section">
        <Container>
          <div className="about">
            <CustomCard
              className="px-0 pb-0"
              title={title}
              desc={desc}
              type="style1"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default React.memo(LargeElevationSection1Aeroone);
