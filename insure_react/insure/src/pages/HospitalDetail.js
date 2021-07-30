import React, {useState, useEffect} from "react";
import axios from "axios";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Key from "../Key"

const HospitalDetail = () => {
    const { search } = useLocation();
    // console.log(search);
    const { ykiho } = queryString.parse(search);
    // console.log(ykiho);

    const [loading, setLoading] = useState(true);
    const [hospitaltopData, setHospitaltopData] = useState([]);

    //useEffect 사용해서  <-- 검색을해서 작성을 부탁드립니다.
    //시작하자마자 api 요청을 만들기
    useEffect(() => {
        getHospitalDetailData();
    }, []);

    const getHospitalDetailData = () => {
        const option = {
            method: "GET",
            url: "/B551182/hospDiagInfoService1/getClinicTop5List1",
            headers: {},
            params: {
            ServiceKey: Key.hospitalDetailKey,
            pageNo: "1",
            numOfRows: "10",
            ykiho: ykiho,
            },
        }

        axios(option).then((response) => {
            // console.log(response.data);
            const hospitaltopData = response.data.response.body.items.item;
            // console.log(hospitaltopData);
            setHospitaltopData(hospitaltopData);
            setLoading(false);
        });
    };

    if (loading) return <div>Loading...</div>;
    if (hospitaltopData === undefined) return <p>현재 등록된 데이터가 없습니다.</p>
    return 
        (<div>
        <Header title={hospitaltopData.yadmNm}></Header>
            <p>국민관심질병명1: {hospitaltopData.mfrnIntrsIlnsCdNm1}</p>
            <p>국민관심질병명2: {hospitaltopData.mfrnIntrsIlnsCdNm2}</p>
            <p>국민관심질병명3: {hospitaltopData.mfrnIntrsIlnsCdNm3}</p>
            <p>국민관심질병명4: {hospitaltopData.mfrnIntrsIlnsCdNm4}</p>
            <p>국민관심질병명5: {hospitaltopData.mfrnIntrsIlnsCdNm5}</p>
        </div>);
    
    // {loading != false && hospitaltopData !== undefined && (
    //     <>
    //     <Header title={hospitaltopData.yadmNm}></Header>
    //         <p>국민관심질병명1: {hospitaltopData.mfrnIntrsIlnsCdNm1}</p>
    //         <p>국민관심질병명2: {hospitaltopData.mfrnIntrsIlnsCdNm2}</p>
    //         <p>국민관심질병명3: {hospitaltopData.mfrnIntrsIlnsCdNm3}</p>
    //         <p>국민관심질병명4: {hospitaltopData.mfrnIntrsIlnsCdNm4}</p>
    //         <p>국민관심질병명5: {hospitaltopData.mfrnIntrsIlnsCdNm5}</p>
    //     </>)});
};

export default HospitalDetail;
