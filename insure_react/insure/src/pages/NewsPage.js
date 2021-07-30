import React, { useState } from 'react'
import axios from "axios";
import NewsHeader from "../components/NewsHeader"
import NewsList from "../components/NewsList"
import Key from "../Key"

export const NewsPage = () => {
    const [searchInput, setsearchInput] = useState("삼성");
    const [searchResultList, setSearchResultList] = useState([]);

    const getData = () => {
        // let getData = "데이터 입력입니다.";
        let newsApi = `https://newsapi.org/v2/everything?q=${searchInput}&from=2021-06-29&sortBy=popularity&apiKey=${Key.newsKey}&language=ko`;
        axios
          .get(newsApi)
          .then(function ({data}) {
            const newsData = data;
            console.log(newsData);
            setSearchResultList(newsData.articles);
          });
      };

    const handleSearchInput = (e) => {
        const { value } = e.target;
        console.log("사용자 입력값 : ", value);
        setsearchInput(value);
    }

    return <div>
            <NewsHeader title="뉴스 검색"></NewsHeader>
            <input onChange={handleSearchInput}></input>
            <button onClick={getData}>검색</button>
            <NewsList newsData={searchResultList}></NewsList>
        </div>;
}
