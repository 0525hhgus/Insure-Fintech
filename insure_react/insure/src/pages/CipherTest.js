import React, { useState } from "react";
import Cipher from "../lib/crypto_api";

const CipherTest = () => {
  const [message, setmessage] = useState("");
  const [enMessage, setenMessage] = useState("");
  const handleMessage = (e) => {
    const { value } = e.target;
    setmessage(value);
  };

  const handleClick = () => {
    setenMessage(Cipher.makeAES(message));
  };

  return (
    <div>
      <input onChange={handleMessage}></input>
      <br />
      <button onClick={handleClick}>암호화</button>
      <br />
      원본 메시지 : {message} <br></br>
      암호화 메시지 : {enMessage}
    </div>
  );
};

export default CipherTest;