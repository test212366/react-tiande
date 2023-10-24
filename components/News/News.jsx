import Image from 'next/image';
import Slider from 'react-slick';
import twoNew from '../../images/templates/2news.jpg';
import oneNew from '../../images/templates/1news.jpg';

import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../utils/useWindowSize';
import NewsPrev from './NewsPrev';
import NewsNext from './NewsNext';
import NewsDate from './NewsDate';

const News = ({ refL }) => {
  const divBlock = useRef(null),
    slider = useRef(null);

  const size = useWindowSize();

  const [kol, setKol] = useState();
  const [widthDot, setWidthDot] = useState();

  // Этот useEffect тоже самое если бы мы сеттили количество в appendDots просто убрали в консоли ошибку

  useEffect(() => {
    setWidthDot(divBlock?.current?.getBoundingClientRect()?.width / kol);
    if (slider.current) setKol(slider?.current.props?.children?.length);
  }, [size.width, slider?.current]);

  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <NewsPrev />,
    nextArrow: <NewsNext />,
    appendDots: (dots) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: -30,
          }}
        >
          <div
            ref={divBlock}
            style={{
              width: 200,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ul
              style={{
                margin: '0px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              {dots}
            </ul>
          </div>
        </div>
      );
    },
    customPaging: (i) => (
      <div
        style={{
          backgroundColor: ' rgb(218, 218, 218)',
          width: `${widthDot}px`,
          height: 4,
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,

          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };
  return (
    <article
      ref={refL}
      id="sec-5"
      className="container__special relative pb-24 ..5x1:pb-16"
    >
      <svg
        className="absolute ..6x2:h-32 z ..6x2:-top-2  ..6x2:mt-5 left-1/2 ability -top-8 "
        width="184"
        height="183"
        viewBox="0 0 184 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M151.013 93.73C151.013 93.73 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.058 15.8079 123.058C15.8079 123.058 39.851 57.2523 64.9368 42.373C90.0226 27.4936 133.618 51.8244 133.618 51.8244"
          stroke="#EFF5F0"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M168.192 59.8028C168.192 59.8028 132.964 80.5241 105.01 90.4961C77.0561 100.468 53.4366 100.74 53.4366 100.74"
          stroke="#EFF5F0"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M105.01 90.4961L71.0828 73.3172"
          stroke="#EFF5F0"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M105.01 90.496L91.1736 116.337"
          stroke="#EFF5F0"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="mt-32 absolute left-1/2 ability font-montserrat font-medium  -top-20 text-32px italic   ">
        НОВОСТИ
      </p>
      <button className="ability font-montserrat ..5x2:font-medium ..5x2:text-xs font-medium z-10 cursor-pointer left-1/2 absolute buttonY  top-32 text-primary border boder-primary py-2 h-11 ..5x2:h-auto px-7 text-sm ..6x6:py-10px ..6x6:px-5 ..6x6:text-xs transition-all hover:text-white hover:bg-primary">
        Смотреть все
      </button>
      <Slider
        {...settings}
        ref={slider}
        className="pt-48 ..6x6:pt-44 newsSlider ..7x001:px-3 "
      >
        <div className=" relative p-3  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
          <NewsDate title={'ВЧЕРА'} />
          <div>
            <Image
              className="object-cover"
              width={474}
              height={330}
              src={oneNew}
              alt="newsImg"
            />
          </div>
          <div className="border border-t-0 border-gray -mt-4 relative">
            <div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
              <p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">
                Онлайн-каталог
              </p>
              <p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">
                Промоушен
              </p>
            </div>
            <p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
              Возвращение легенды: косметический <br /> спонж для умывания
            </p>
            <p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
              Возвращение легенды: косметический спонж для умывания
            </p>
            <p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
              Все помнят тот самый косметический спонж, который под струей воды
              превращался из палочки в круглый диск Все помнят тот самый
              косметический спонж, который под струей воды превращался
            </p>
            <button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
              Читать
              <div className="animLine bg-primary absolute bottom-0.5 -left-1.5 opacity-40 h-9px ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
            </button>
          </div>
        </div>
        <div className=" relative p-3  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
          <NewsDate title={'ВЧЕРА'} />
          <div>
            <Image
              className="object-cover"
              width={474}
              height={330}
              src={oneNew}
              alt="newsImg"
            />
          </div>
          <div className="border border-t-0 border-gray -mt-4 relative">
            <div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
              <p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">
                Онлайн-каталог
              </p>
              <p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">
                Промоушен
              </p>
            </div>
            <p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
              Возвращение легенды: косметический <br /> спонж для умывания
            </p>
            <p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
              Возвращение легенды: косметический спонж для умывания
            </p>
            <p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
              Все помнят тот самый косметический спонж, который под струей воды
              превращался из палочки в круглый диск Все помнят тот самый
              косметический спонж, который под струей воды превращался
            </p>
            <button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
              Читать
              <div className="animLine bg-primary absolute bottom-0.5 -left-1.5 opacity-40 h-9px ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
            </button>
          </div>
        </div>
        <div className=" relative p-3  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
          <NewsDate title={'ВЧЕРА'} />
          <div>
            <Image
              className="object-cover"
              width={474}
              height={330}
              src={oneNew}
              alt="newsImg"
            />
          </div>
          <div className="border border-t-0 border-gray -mt-4 relative">
            <div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
              <p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">
                Онлайн-каталог
              </p>
              <p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">
                Промоушен
              </p>
            </div>
            <p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
              Возвращение легенды: косметический <br /> спонж для умывания
            </p>
            <p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
              Возвращение легенды: косметический спонж для умывания
            </p>
            <p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
              Все помнят тот самый косметический спонж, который под струей воды
              превращался из палочки в круглый диск Все помнят тот самый
              косметический спонж, который под струей воды превращался
            </p>
            <button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
              Читать
              <div className="animLine bg-primary absolute bottom-0.5 -left-1.5 opacity-40 h-9px ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
            </button>
          </div>
        </div>
        <div className=" relative p-3  ..6x04:p-1.5 transition-all   newsCardHover cursor-pointer hover:scale-95">
          <NewsDate title={'ВЧЕРА'} />
          <div>
            <Image
              className="object-cover"
              width={474}
              height={330}
              src={oneNew}
              alt="newsImg"
            />
          </div>
          <div className="border border-t-0 border-gray -mt-4 relative">
            <div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
              <p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">
                Онлайн-каталог
              </p>
              <p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">
                Промоушен
              </p>
            </div>
            <p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
              Возвращение легенды: косметический <br /> спонж для умывания
            </p>
            <p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
              Возвращение легенды: косметический спонж для умывания
            </p>
            <p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
              Все помнят тот самый косметический спонж, который под струей воды
              превращался из палочки в круглый диск Все помнят тот самый
              косметический спонж, который под струей воды превращался
            </p>
            <button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
              Читать
              <div className="animLine bg-primary absolute bottom-0.5 -left-1.5 opacity-40 h-9px ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
            </button>
          </div>
        </div>
      </Slider>
    </article>
  );
};
export default News;
