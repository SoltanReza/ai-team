import React from "react";
import styled from "styled-components";
import HoverImage from "react-hover-image";

interface Component {
  image: any;
  image1?: any;
  name: string;
  job: string;
}
export default function ImageComponent({
  image,
  name,
  job,
  image1,
}: Component) {
  const Container = styled.div`
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
    .image-wrapper {
      /* background-image: url(image); */
      img {
        width: 300px;
        height: 300px;
        object-fit: cover;
      }
    }
    .text-container {
      padding: 0.5em;
      flex: 1;
      h4 {
        font-size: 1.2em;
      }
      p {
        font-family: "diodrum-semibold";
      }
    }
  `;

  return (
    <Container className="component-wrapper">
      <div className="image-wrapper">
        <HoverImage
          src={image}
          className="img"
          hoverSrc={image1 ? image1 : image}
        />
      </div>
      <div className="text-container">
        <h4>{name}</h4>
        <p>{job}</p>
      </div>
    </Container>
  );
}
