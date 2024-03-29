// @ts-nocheck
import { useEffect, useState } from "react";
import HotTopics from "../../components/hot_topics/HotTopics.js";
import NewsCard from "../../components/latest_news/NewsCard.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchTechnologyNews } from "./TechnologySlice";
import { RootState, AppDispatch } from "../../store/store";
import { MoonLoader } from "react-spinners";

type CardInfo = {
  title: String;
  urlToImage: URL;
  source: { name: String };
  publishedAt: Date;
  url: URL;
};

function Technology(): JSX.Element {
  const [showMoreCount, setShowMoreCount] = useState(5);
  const technologyNews = useSelector(
    (state: RootState) => state.technologyNews.news.articles
  );
  const isLoading = useSelector(
    (state: RootState) => state.technologyNews.loading
  );
  const dispatch: AppDispatch = useDispatch();

  let firstNews = technologyNews?.slice(0, 1)[0];

  useEffect(() => {
    dispatch(fetchTechnologyNews());
  }, []);

  return (
    <>
      <HotTopics>
        <div className="flex flex-col gap-3 lg:gap-7 px-5 xl:px-[8.31rem] py-5">
          <span className="text-2xl md:text-[2.2rem] lg:text-5xl font-semibold">
            Hot Topics
          </span>
          {isLoading === true ? (
            <MoonLoader />
          ) : (
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
              <div className="w-full h-full lg:w-3/4 lg:h-[25rem] overflow-hidden m-auto rounded-md cursor-pointer">
                <a href={`${firstNews?.url}`}>
                  <div className="relative">
                    <img
                      className="w-full rounded-md object-cover"
                      src={firstNews?.image}
                    />
                    <div className="absolute top-[45%] md:top-[50%] left-[38%] translate-y-[-50%] translate-x-[-50%] leading-relaxed bottom-0 text-white">
                      <span className="font_playfair text-[1.1rem] md:text-[2.2rem] weight-bold drop-shadow-xl">
                        {firstNews?.title}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="hidden lg:block lg:w-1/4 lg:pt-7 font_playfair text-[1rem] md:text-[1.125rem] font-light leading-relaxed text-[#444444]">
                {firstNews?.description}
              </div>
            </div>
          )}
        </div>
      </HotTopics>
      <div className="flex flex-col gap-5 px-5 xl:px-[8.31rem]">
        <span className="text-xl md:text-[2rem] lg:text-[2.25rem] font-semibold">
          Latest News
        </span>
        {isLoading === true ? (
          <MoonLoader />
        ) : (
          <div className="pb-10">
            <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-4 xl:gap-2 ">
              {technologyNews
                ?.slice(0, showMoreCount)
                ?.map(
                  (
                    {
                      publishedAt,
                      title,
                      image,
                      url,
                      source: { name },
                    }: CardInfo,
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
            <div className="flex justify-center ">
              {technologyNews?.length < showMoreCount ? (
                <h1 className="text-gray-500">No more to show</h1>
              ) : (
                <button
                  className="p-2 text-white bg-black rounded-md"
                  onClick={() => setShowMoreCount(showMoreCount + 10)}
                >
                  Show More
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Technology;
