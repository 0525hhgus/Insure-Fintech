import React from "react";
import StyledButton from "./StyledButton";

const ListUser = ({ user }) => {
  return (
    <div>
      {user.name} 님의 나이는 {user.age} 이고 키는 {user.height}
      <StyledButton></StyledButton>
    </div>
  );
};

export default ListUser;
