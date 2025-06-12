import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_DATE2,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";

const GlobalStyle = createGlobalStyle`
  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Layout = styled.div`
  width: 70%;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
`;

const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.p`
  font-size: 2rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
  color: var(--title-color);
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
  color: var(--title-color);
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
  color: var(--title-color);
`;

const Title = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <TitleWrapper>
          <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
          <GroomBride>
            {GROOM_NAME} &#38; {BRIDE_NAME}
          </GroomBride>
          <Schedule>
            {WEDDING_DATE}
            <br />
            {WEDDING_DATE2}
            <br />
            {WEDDING_LOCATION}
          </Schedule>
        </TitleWrapper>
        <VideoBackground
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          role="presentation"
        >
          <source src="/videos/wdin.mp4" type="video/mp4" />
          비디오를 지원하지 않는 브라우저입니다.
        </VideoBackground>
      </Layout>
    </>
  );
};

export default Title;