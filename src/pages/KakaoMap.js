// 지도 자체를 띄우는 js
import React from "react";
// import "../pages/kakaomap.css";
import Map from "./Map/Map";

function KakaoMap() {
  return (
    <div className="kakaomap">
      <Map />
    </div>
  );
}

export default KakaoMap;