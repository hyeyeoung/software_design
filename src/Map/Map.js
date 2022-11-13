// 카카오 맵 자료 받아와서 마커 생성 마커는 foreach문 사용
/*global kakao */
import React, { useEffect, useState } from "react";
import { markerdata } from "../data/test";
import '../pages/KakaoMap'

export default function Map(props) {
  useEffect(() => {
    mapscript();
  }, [props.x]);
  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.484277, 127.119382),
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    let result = [];
    switch(props.x){
      case '1':
        result = markerdata.filter(loc => loc.total_S>=0 && loc.total_S <= 10);
        break;
      case '2':
        result = markerdata.filter(loc => loc.total_S>=11 && loc.total_S <= 20);  
        break;
      case '3':
        result = markerdata.filter(loc => loc.total_S>=21 && loc.total_S <= 30);  
        break;
      case '4':
        result = markerdata.filter(loc => loc.total_S>=31 && loc.total_S <= 40);  
        break;
      case '5':
        result = markerdata.filter(loc => loc.total_S>=41 && loc.total_S <= 50);  
        break;
      case '6':
        result = markerdata.filter(loc => loc.total_S>=51 && loc.total_S <= 60);  
        break;
      case '7':
        result = markerdata.filter(loc => loc.total_S>=61 && loc.total_S <= 70);  
        break;
      case '8':
        result = markerdata.filter(loc => loc.total_S>=71 && loc.total_S <= 80);  
        break;
      case '9':
        result = markerdata.filter(loc => loc.total_S>=81 && loc.total_S <= 90);  
        break;
      case '10':
        result = markerdata.filter(loc => loc.total_S>=91 && loc.total_S <= 100);  
        break;
      default:
        result = markerdata.filter(()=> true);
    }


    result.forEach((el) => {
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
  return (<div>
    <div> <b>값: {props.x}</b></div>
    <div id="map" className="map" style={{width: "80%", height: "80vh" }}></div>
  </div>);
}