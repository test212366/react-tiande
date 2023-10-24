import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const InputItemSearch = ({ scrollMenu, setShowSearch }) => {
  const [filter, setFilter] = useState({
      catal: true,
      news: false,
      article: false,
      currentFilter: 'Каталог',
    }),
    catal = useRef(null),
    news = useRef(null),
    article = useRef(null),
    [showFilter, setShowFilter] = useState(false);

  const showFilterL = () => setShowFilter(!showFilter);

  useEffect(() => {
    catal.current.checked = true;
  }, []);

  const setCatal = () => {
      setFilter({
        catal: !filter.catal,
        news: false,
        article: false,
        currentFilter: 'Каталог',
      });
      article.current.checked = false;
      news.current.checked = false;
      catal.current.checked = true;
      setShowFilter(false);
    },
    setNews = () => {
      setFilter({
        catal: false,
        news: !filter.news,
        article: false,
        currentFilter: 'Новости',
      });
      news.current.checked = true;
      article.current.checked = false;
      catal.current.checked = false;
      setShowFilter(false);
    },
    setArticle = () => {
      setFilter({
        catal: false,
        news: false,
        article: !filter.article,
        currentFilter: 'Статьи',
      });
      article.current.checked = true;

      news.current.checked = false;
      catal.current.checked = false;
      setShowFilter(false);
    },
    close = () => setShowSearch(false);

  return (
    <>
      <div className="absolute right-48 widthSearchDrop">
        <div className="w-full   mr-48  relative flex items-center">
          <section
            className={`absolute left-0  top-16 bg-white shadowFilter ${
              showFilter ? 'block' : 'hidden'
            }`}
          >
            <div className="px-4 pt-5">
              <div className="flex items-center mb-3" onClick={setCatal}>
                <input
                  ref={catal}
                  className="hidden inputRadio"
                  type="radio"
                  id="catal"
                />
                <label
                  htmlFor="catal"
                  className="cursor-pointer catalCurc h-4 w-4 border rounded-3xl border-gray-quick-silver"
                ></label>
                <label
                  htmlFor="catal"
                  className="text-13px font-noto-sans  ml-6px"
                >
                  Каталог
                </label>
              </div>
              <div className="flex items-center mb-3" onClick={setNews}>
                <input
                  ref={news}
                  className="hidden inputRadio"
                  type="radio"
                  id="news"
                />
                <label
                  htmlFor="news"
                  className="cursor-pointer catalCurc h-4 w-4 border rounded-3xl border-gray-quick-silver"
                ></label>

                <label
                  htmlFor="news"
                  className="text-13px font-noto-sans ml-6px"
                >
                  Новости
                </label>
              </div>
              <div className="flex items-center mb-3" onClick={setArticle}>
                <input
                  ref={article}
                  className="hidden inputRadio"
                  type="radio"
                  id="article"
                />
                <label
                  htmlFor="aritcle"
                  className=" catalCurc h-4 w-4 border rounded-3xl border-gray-quick-silver"
                ></label>

                <label
                  htmlFor="article"
                  className="text-13px font-noto-sans ml-6px"
                >
                  Статьи
                </label>
              </div>
            </div>
          </section>

          <button
            onClick={showFilterL}
            className="absolute top-4 z-20 left-4 flex items-center font-montserrat font-semibold text-black-70pe border-gray border-r pr-3.5"
          >
            {filter.currentFilter}{' '}
            <svg
              className="ml-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 6L8 11L13 6H3Z" fill="black" fillOpacity="0.7" />
            </svg>
          </button>
          <input
            type="text"
            className="z-10 h-14 w-full border border-primary outline-none rounded-md font-montserrat py-4 pl-32"
            placeholder="Название или артикул"
          />
          <button className="bg-primary -ml-2 h-14 w-20 flex items-center justify-center searchButton">
            <svg
              className="ml-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.75 11C3.75 6.99594 6.99594 3.75 11 3.75C15.0041 3.75 18.25 6.99594 18.25 11C18.25 15.0041 15.0041 18.25 11 18.25C6.99594 18.25 3.75 15.0041 3.75 11ZM11 2.25C6.16751 2.25 2.25 6.16751 2.25 11C2.25 15.8325 6.16751 19.75 11 19.75C13.1462 19.75 15.112 18.9773 16.6342 17.6949L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L17.6949 16.6342C18.9773 15.112 19.75 13.1462 19.75 11C19.75 6.16751 15.8325 2.25 11 2.25Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            onClick={close}
            className="absolute -right-32 top-5 font-montserrat text-13px text-black-70pe font-normal flex items-center "
          >
            <svg
              className="-mt-0.5 mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8L8 16M8 8L16 16"
                stroke="black"
                strokeWidth="1.5"
                stroke-linecap="round"
              />
            </svg>
            Закрыть
          </button>
        </div>
      </div>
    </>
  );
};
export default InputItemSearch;
