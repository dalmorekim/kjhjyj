import React, { useEffect } from "react";
import styled from "styled-components";
import { Divider } from "antd";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 360px;
  min-height: 360px;
`;

const Location = () => {
  useEffect(() => {
    const initMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(36.8150796, 127.113937),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

const marker = new window.kakao.maps.Marker({
  position: new window.kakao.maps.LatLng(36.8150796, 127.113937),
});
marker.setMap(map);
const infowindow = new window.kakao.maps.InfoWindow({
  content: `<div style="padding:5px;font-size:12px;">비렌티웨딩홀</div>`,
});
infowindow.open(map, marker);
      });
    };

    if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=fab35880c5a5e1f6b78fc0cd1cdedf4c&autoload=false";
      script.async = true;
      script.onload = () => {
        initMap();
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} alt="꽃 아이콘" />
      <Content>
        충남 천안시 서북구 천안대로 1198-30(신당동)
        <br />
        비렌티웨딩홀 비렌티빌 4층 매그넘홀
        <br />
        <br />
        <Title>대중교통 이용시</Title>
        <br />
        <br />
        천안아산역 도착시
        <br />
        패션2광장 정류장에서 2000번 버스 탑승
        <br />
        공주대 공과대학 하차 후 도보 5분
        <br />
        <br />
        천안버스터미널 도착시
        <br />
        맥도날드 앞 정류장에서 다양한 버스 탑승
        <br />
        주대 공과대학 하차 후 도보 5분
        <br />
        <br />
        <Title>셔틀버스 이용시</Title>
        <br />
        <br />
        천안종합터미널 → 신세계백화점 → 두정역 등 셔틀 경로
        <br />
        <br />
        <Title>광주에서 셔틀버스 이용시</Title>
        <br />
        <br />
        수정 예정
      </Content>
      <MapContainer id="map" />
    </Wrapper>
  );
};

export default Location;