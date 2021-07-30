import React, { useState } from 'react'
import axios from "axios";
import Key from "../Key"

const ApiExample = () => {
    // 행정동명으로 약국을 조회한 후 console.log로 해당하는 데이터 리스폰스 받아 출력
    const [searchInput, setsearchInput] = useState("아산");
    const [searchResultList, setSearchResultList] = useState([]);
    const handleSearchInput = (e) => {
        const { value } = e.target;
        console.log("사용자 입력값 : ", value);
        setsearchInput(value);
    }
    const getParmacyData = () => {
        const option = {
            method: "GET",
            url: "/B551182/pharmacyInfoService/getParmacyBasisList",
            headers: {},
            params: {
              ServiceKey: Key.parmacyKey,
              pageNo: "1",
              numOfRows: "10",
              emdongNm: searchInput,
            },
        }

        axios(option)
          .then(function ({data}) {
            const parmacyData = data;
            console.log(parmacyData);
          });
      };

     


    return (
        <div>
            <input onChange={handleSearchInput}></input>
            <button onClick={getParmacyData}>약국 조회하기</button>
        </div>
    )
}

export default ApiExample
