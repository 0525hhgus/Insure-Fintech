import axios from "axios";
import Key from "../Key"
import React, { useState } from "react";
import Cipher from "../lib/crypto_api";
import styled from "styled-components";

const InsureListItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  border: 1px solid;
`;

const LoginBlock = styled.div`
  display: inline-block;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  border: 1px solid;
`;


const InsurePage = () => {
  const [result, setResult] = useState(undefined);
  const [idInput, setidInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [bList, setbList] = useState([]);


  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    console.log("사용자 입력값 : ", value);
    if (name === "id") {
        setidInput(value);
    } else if (name === "password") {
        setpasswordInput(value);
    }
    setidInput(value);
  }

//   const handleIDInput = (e) => {
//     const { value } = e.target;
//     console.log("사용자 입력값 : ", value);
//     setidInput(value);
//   }

//   const handlePasswordInput = (e) => {
//     const { value } = e.target;
//     console.log("사용자 입력값 : ", value);
//     setpasswordInput(value);
//   }

  const getInsureInfo = () => {
    const option = {
      method: "POST",
      url: "/scrap/pfm/credit4u/IntegratedInquiry",
      headers: {
        Authorization: Key.apiToken,
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        LOGINID: idInput,
        LOGINPWD: Cipher.makeAES(passwordInput),
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      setResult(response.data);
      setbList(response.data.data.JLIST);
    });
  };
  return (
    <div>
        <LoginBlock>
        아이디 입력: <input name="id" onChange={handleLoginInput}></input> <br/>
        패스워드 입력: <input name="password" type='password' onChange={handleLoginInput} ></input> <br/>
        </LoginBlock>
        <button onClick={getInsureInfo}>보험 조회하기</button> <br/>
        
        {bList && bList.map((insure, index) => {
                    return (
                        <InsureListItemBlock>
                        <h3 key={index}>{insure.HOISAMYUNG}</h3>
                        <p> {insure.SANGPUMMYUNG}</p>
                        </InsureListItemBlock>
                    );
        })}
    </div>
  );
};

export default InsurePage;
