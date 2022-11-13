import React, { useState, Component } from "react";
import Map from "../Map/Map";

function Radio(){
    const [x, setx] = useState("0");
    const isClick = (e) => {
        setx(e.target.value)
    }
    // input 태그는 자식을 가지면 안된다.
    return(
        <div>
        <div className="check">
            <input type="radio" value = "1" checked={x === "1"} onChange={isClick}></input>
            0 ~ 10
            <input type="radio" value = "2" checked={x === "2"} onChange={isClick}></input>
            11 ~ 20
            <input type="radio" value = "3" checked={x === "3"} onChange={isClick}></input>
            21 ~ 30
            <input type="radio" value = "4" checked={x === "4"} onChange={isClick}></input>
            31 ~ 40
            <input type="radio" value = "5" checked={x === "5"} onChange={isClick}></input>
            41 ~ 50
            <input type="radio" value = "6" checked={x === "6"} onChange={isClick}></input>
            51 ~ 60
            <input type="radio" value = "7" checked={x === "7"} onChange={isClick}></input>
            61 ~ 70
            <input type="radio" value = "8" checked={x === "8"} onChange={isClick}></input>
            71 ~ 80
            <input type="radio" value = "9" checked={x === "9"} onChange={isClick}></input>
            81 ~ 90
            <input type="radio" value = "10" checked={x === "10"} onChange={isClick}></input>
            91 ~ 100
        </div>
        <div className="Map"> <Map x = {x}></Map></div>
        </div>
    )
}
export default Radio