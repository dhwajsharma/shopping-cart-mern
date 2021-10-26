import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Banner = () => {
  return (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        showState={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://image.freepik.com/free-photo/black-t-shirts-with-copy-space_53876-102012.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://image.freepik.com/free-photo/young-man-black-glasses-wearing-grey-polo-shirt-looking-aside-with-serious-face-standing-blue-wall_141793-57048.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://image.freepik.com/free-psd/white-t-shirt-mockup_125540-617.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </Container>
  );
};

export default Banner;
