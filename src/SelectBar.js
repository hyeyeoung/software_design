import React, {useState}from "react";

function SelectBar(props) {
    const [Selected, setSelected] = useState("");
    // 서울시 행정구역
    const boroughOfSeoul = ["종로구","중구","용산구","성동구","광진구","동대문구","중랑구","성북구","강북구",
        "도봉구","노원구","은평구","서대문구","마포구","양천구","강서구","구로구","금천구","영등포구","동작구",
        "관악구","서초구","강남구","송파구","강동구"]

    function sendData(){ // input.js로 Selected 값 전달(자식 컴포넌트 -> 부모 컴포넌트)
        props.setSearch(Selected);
    }

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    return (
        <div>
            <select onChange={handleSelect} value={Selected}>
            <option defaultValue="서울시" key="서울시">서울시</option>
            {boroughOfSeoul.map((item) => (
                <option value={item} key={item}>
                {item}
                </option>
            ))}
            </select>
            <button onClick={sendData}>검색</button>
        </div>
    );
}

export default SelectBar;