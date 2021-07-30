import axios from "axios";
import Key from "../Key"
import React, { useState } from "react";

const CarInfo = () => {
  const [result, setResult] = useState(undefined);
  const getCarInfo = () => {
    const option = {
      method: "POST",
      url: "/assist/common/carzen/CarAllInfoInquiry",
      headers: {
        Authorization: Key.apiToken,
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        REGINUMBER: "23사5678",
        OWNERNAME: "홍길동",
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      setResult(response.data);
    });
  };
  return (
    <div>
      <button onClick={getCarInfo}>차량 조회하기</button>
    </div>
  );
};

export default CarInfo;
