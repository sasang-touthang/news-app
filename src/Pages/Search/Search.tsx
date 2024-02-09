// @ts-nocheck
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchSearchNews } from "./SearchSlice";
import NewsCard from "../../components/latest_news/NewsCard";
import { MoonLoader } from "react-spinners";

type CardInfo = {
  title: String;
  urlToImage: URL;
  source: { name: String };
  publishedAt: Date;
  url: URL;
};

function Search() {
  const [searchWord, setSearchWord] = useState("");
  const searchNews = useSelector((state: RootState) => state.searchNews);
  const dispatch: AppDispatch = useDispatch();

  function searchHandler() {
    dispatch(fetchSearchNews(searchWord));
    setSearchWord("");
  }

  return (
    <div className="flex flex-col gap-3 lg:gap-7 px-5 xl:px-[8.31rem] py-5">
      <div className="flex gap-5 px-5">
        <input
          type="text"
          name="search"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          className=" w-full ring-2 ring-black active:ring-black rounded-md"
        />
        <button
          className="bg-black text-white font_playfair rounded-md p-1"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
      <div>
        {searchNews.loading === true ? (
          <MoonLoader />
        ) : (
          <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-4 xl:gap-2 ">
            {searchNews.news.articles?.map(
              (
                { publishedAt, title, image, url, source: { name } }: CardInfo,
                index
              ) => (
                <NewsCard
                  key={index}
                  title={title}
                  image={image}
                  source={name}
                  url={url}
                  publishedAt={publishedAt}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
