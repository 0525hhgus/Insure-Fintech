import React, { useState } from "react";
import axios from "axios";

const AxiosTest = () => {
  const [htmlGet, setHtmlGet] = useState("initialState");

  const getData = () => {
    let getData = "데이터 입력입니다.";
    axios
      .get("https://naver.com")
      .then(function (response) {
        // handle success
        console.log(response);
        getData = response.data;
        setHtmlGet(getData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  getData();
  return <div>{htmlGet}</div>;
};

export default AxiosTest;
