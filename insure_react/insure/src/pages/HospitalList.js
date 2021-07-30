import React, { useState } from 'react'
import axios from "axios";
import Header from '../components/Header'
import HospitalListItem from '../components/hospital/HospitalCardItem';
import Key from "../Key"

export const HospitalList = () => {

    const [searchInput, setsearchInput] = useState("산월동");
    const [searchResultList, setSearchResultList] = useState([]);
    

    const handleSearchInput = (e) => {
        const { value } = e.target;
        console.log("사용자 입력값 : ", value);
        setsearchInput(value);
    }

    const getHospitalData = () => {

        const option = {
            method: "GET",
            url: "/B551182/hospInfoService1/getHospBasisList1",
            headers: {},
            params: {
              ServiceKey: Key.hospitalKey,
              pageNo: "1",
              numOfRows: "10",
              clCd: "31",
              emdongNm: searchInput,
            },
        }

        axios(option).then((response) => {
            console.log(response.data);
            const hospitalData = response.data.response.body.items.item;
            console.log(hospitalData);
            setSearchResultList(hospitalData);
          });
      };

    
    return (
        <div>
            <Header title="병원검색"></Header>
            <input onChange={handleSearchInput}></input>
            <button onClick={getHospitalData}>병원 조회하기</button>
            <div>
            {/* { searchResultList && searchResultList.map((hospital) => {
                return (
                <>
                <HospitalListItem addr={hospital.addr} clCd={hospital.clCd} 
                clCdNm={hospital.clCdNm} yadmNm={hospital.yadmNm}
                ykiho={hospital.ykiho}></HospitalListItem>
                </>
                );
            })} */}

            {searchResultList && searchResultList.map(({ addr, clCd, clCdNm, yadmNm, ykiho }) => {
                    return (
                    <HospitalListItem
                        key={ykiho}
                        addr={addr}
                        clCd={clCd}
                        clCdNm={clCdNm}
                        yadmNm={yadmNm}
                        ykiho={ykiho}
                    ></HospitalListItem>
                    );
                })}
            </div>       
            
        </div>
    )
}
