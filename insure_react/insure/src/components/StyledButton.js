import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
    color: rgb(255, 255, 255);
    font-size: 21px;
    line-height: 21px;
    padding: 18px;
    border-radius: 13px;
    background-image: linear-gradient(
    to right,
    rgb(28, 110, 164) 0%,
    rgb(35, 136, 203) 50%,
    rgb(20, 78, 117) 100%
    );
    box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
    border: 2px solid rgb(28, 110, 164);
    display: inline-block;
`;

const StyledButton = () => {
  return <MyButton>내가만든버튼</MyButton>;
};

export default StyledButton;
