import React from "react";

const NewsList = ({ newsData }) => {
  return (
    <div>
      { newsData && newsData.map((news, index) => {
        return (
          <>
            <p key={index}>{news.title}</p>
            <a href={news.url}>기사로 이동하기</a>
          </>
        );
      })}
    </div>
  );
};

export default NewsList;
