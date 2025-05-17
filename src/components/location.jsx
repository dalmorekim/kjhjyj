import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
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

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  <!-- * 카카오맵 - 지도퍼가기 -->
  <!-- 1. 지도 노드 -->
  <div id="daumRoughmapContainer1747501569953" class="root_daum_roughmap root_daum_roughmap_landing"></div>
  
  <!--
    2. 설치 스크립트
    * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
  -->
  <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
  
  <!-- 3. 실행 스크립트 -->
  <script charset="UTF-8">
    new daum.roughmap.Lander({
      "timestamp" : "1747501569953",
      "key" : "2o3zw",
      "mapWidth" : "640",
      "mapHeight" : "360"
    }).render();
  </script>


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
        맥도날드 앞 정류장에서 112번, 140번, 141번, 143번, 144번, 145번, 150번, 151번 탑승
        <br />
        주대 공과대학  하차 후 도보 5분
        <br />
        <br />
        <Title>셔틀버스 이용시</Title>
        <br />
        <br />
        천안종합터미널 - 신세계백화점(아라리오광장) - 올리브영&스타벅스 횡단보도
        <br />
        두정역 1번출구에서 나와 오른쪽으로 50M 지점 파란색 셔틀버스 승강장(U1대학교)
        <br />
        <br />
        <Title>광주에서 셔틀버스 이용시</Title>
        <br />
        <br />
        수정예정
      </Content>
      <Map>
        <div
          id="daumRoughmapContainer1747501569953"
          className="root_daum_roughmap root_daum_roughmap_landing"
        ></div>
      </Map>
    </Wrapper>
  );
};

export default Location;