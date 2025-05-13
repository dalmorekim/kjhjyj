import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/weddingphoto_01.jpeg";
import GalleryPhoto2 from "../assets/weddingphoto_02.jpeg"
import GalleryPhoto3 from "../assets/weddingphoto_03.jpeg"
import GalleryPhoto4 from "../assets/weddingphoto_04.jpeg"
import GalleryPhoto5 from "../assets/weddingphoto_05.jpeg"
import GalleryPhoto6 from "../assets/weddingphoto_06.jpeg"
import GalleryPhoto7 from "../assets/weddingphoto_07.jpeg"
import GalleryPhoto8 from "../assets/weddingphoto_08.jpeg"
import GalleryPhoto9 from "../assets/weddingphoto_09.jpeg"
import GalleryPhoto10 from "../assets/weddingphoto_10.jpeg"
import GalleryPhoto11 from "../assets/weddingphoto_11.jpeg"
import GalleryPhoto12 from "../assets/weddingphoto_12.jpeg"
import GalleryPhoto13 from "../assets/weddingphoto_13.jpeg"
import GalleryPhoto14 from "../assets/weddingphoto_14.jpeg"
import GalleryPhoto15 from "../assets/weddingphoto_15.jpeg"
import GalleryPhoto16 from "../assets/weddingphoto_16.jpeg"
import GalleryPhoto17 from "../assets/weddingphoto_17.jpeg"


const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhot13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>사진첩</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
