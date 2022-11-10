// 카카오 맵 자료 받아와서 마커 생성 마커는 foreach문 사용
/*global kakao */
import React, { useEffect } from "react";
import { markerdata } from "../data/test";
import '../pages/KakaoMap'

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.484277, 127.119382),
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    
    markerdata.forEach((el) => {
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.Y, el.X),
        //마커에 hover시 나타날 title
        title: el.total_S,
      });
    });
  };

  return <div id="map" className="map" style={{width: "80%", height: "80vh" }}></div>;
}