import React, { useState } from "react";
import ListUser from "../components/ListUser";
// var QRCode = require("qrcode.react");

const ListPage = () => {
  const [array, setarray] = useState([
    { name: "홍길동", age: "32", height: "184" },
    { name: "고길동", age: "42", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
  ]);
  return (
    <div>
      {array.map((user) => {
        return (
          <>
            <ListUser user={user}></ListUser>
          </>
        );
      })}
    </div>
  );
};

export default ListPage;
//rafce
