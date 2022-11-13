// 카카오 맵 자료 받아와서 마커 생성 마커는 foreach문 사용
/*global kakao */
import React, { useEffect, useState } from "react";
import { markerdata } from "../data/test";
import '../pages/KakaoMap'

// props는 Map의 부모인 input.js에서 받아오는 x값
export default function Map(props) {
  // useEffect => react hook기능 x값에 변화가 있을 때마다 지도 다시 로드 설정
  useEffect(() => {
    mapscript();
  }, [props.x]);
  // 지도 생성 초기 설정 생성, 초기 위치는 어디인지 어느 div에서 생성할 건지 등
  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.484277, 127.119382),
      level: 5,
    };

    //map 지도 생성 새로운 객체? 생성
    const map = new kakao.maps.Map(container, options);
    // 구간 검색 기능을 위한 배열 선언
    let result = [];
    switch(props.x){ //x값을 기준으로 10구간 설정 기본 값으로는 모든 핀을 보여준다.
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
      // 마커를 생성
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
  // 값: ~ 이 부분은 변화화는 x값을 확인하기 위해서 삽입(추후 삭제 예정)
  return (<div>
    <div> <b>값: {props.x}</b></div>
    <div id="map" className="map" style={{width: "80%", height: "80vh" }}></div>
  </div>);
}