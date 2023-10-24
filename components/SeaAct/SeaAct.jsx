import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useTimerHook } from '../../hooks/useTimerHook';

import imgLSale from '../../images/templates/imgLSale.jpg';

import two from '../../images/templates/2seaAct.jpg';
import tree from '../../images/templates/3seaAct.jpg';
import four from '../../images/templates/4seaAct.jpg';
import five from '../../images/templates/5seaAct.jpg';
import six from '../../images/templates/6seaAct.jpg';
import NewSaleCardProduct from '../NewSaleCardProduct/NewSaleCardProduct';
import SeaActItem from '../SeaActItem/SeaActItem';
import useWindowSize from '../utils/useWindowSize';

import fullSc from '../../images/templates/FullScreen.jpg';
import naborN from '../../images/templates/naborN.png';
import tttt from '../../images/templates/tttt.png';

// import Swiper core and required modules
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const SeaAct = ({ refL }) => {
  const [data, setData] = useState([
    {
      img: [naborN, fullSc, fullSc],
      text: 'Для сенсационного  увлажнения и восстановления кожи',
      iText: 'Состав акции',
      balls: '1.4 Б',
      packS: '4=5',
      dateEnd: 'До 15.06.22',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
    {
      img: [tttt],
      text: 'Для сенсационного  увлажнения и восстановления кожи',
      iText: 'Состав акции',
      balls: '1.4 Б',
      packS: '4=5',
      dateEnd: 'До 15.06.22',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
    {
      img: [naborN, fullSc, fullSc],
      text: ' для очищения и тонизирования ',
      iText: 'Состав',
      balls: '1.4 Б',
      priceDe: '3 750',
      packLabel: '6',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
    {
      img: [naborN, fullSc, fullSc],
      text: 'Для сенсационного  увлажнения и восстановления кожи',
      iText: 'Состав акции',
      balls: '1.4 Б',
      packS: '4=5',
      dateEnd: 'До 15.06.22',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
    {
      img: [naborN, fullSc, fullSc],
      text: 'Для сенсационного  увлажнения и восстановления кожи',
      iText: 'Состав акции',
      balls: '1.4 Б',
      packS: '4=5',
      dateEnd: 'До 15.06.22',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
    {
      img: [naborN, fullSc, fullSc],
      text: 'Для сенсационного  увлажнения и восстановления кожи',
      iText: 'Состав акции',
      balls: '1.4 Б',
      packS: '4=5',
      dateEnd: 'До 15.06.22',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
    {
      img: [tttt],
      text: 'Для сенсационного  увлажнения и восстановления кожи',
      iText: 'Состав акции',
      balls: '1.4 Б',
      priceDe: '3 750',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
    {
      img: [naborN, fullSc, fullSc],
      text: 'Для сенсационного  увлажнения и восстановления кожи',
      iText: 'Состав акции',
      balls: '1.4 Б',
      packS: '4=5',
      dateEnd: 'До 15.06.22',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
    {
      img: [naborN, fullSc, fullSc],
      text: 'Для сенсационного  увлажнения и восстановления кожи',
      iText: 'Состав акции',
      balls: '1.4 Б',
      packS: '4=5',
      dateEnd: 'До 15.06.22',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
    {
      img: [naborN, fullSc, fullSc],
      text: 'Для сенсационного  увлажнения и восстановления кожи',
      iText: 'Состав акции',
      balls: '1.4 Б',
      packS: '4=5',
      dateEnd: 'До 15.06.22',
      prodDayLabel: true,
      newLabel: true,
      hitLabel: true,
      price: {
        old: '₽ 920.00',
        new: '₽ 764.00',
      },
    },
  ]);

  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    setInterval(() => {
      const timeLocal = useTimerHook(
        'Thu Dec 30 2022 17:43:29 GMT+0300 (Москва, стандартное время)'
      ); // Пример присылаемой даты с бека
      setTime(timeLocal);
    }, 1000);
  }, []);

  return (
    <div ref={refL} className="bg-gray-light" id="sec-6">
      <section className="container__special relative pb-24 pt-60 ..5x2:pb-6">
        <svg
          className="ability ..6x2:h-32 ..6x2:mt-5 absolute left-1/2  top-3 top-6 "
          width="184"
          height="183"
          viewBox="0 0 184 183"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M151.013 93.7301C151.013 93.7301 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.059 15.8079 123.059C15.8079 123.059 39.851 57.2524 64.9368 42.3731C90.0226 27.4937 133.618 51.8245 133.618 51.8245"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M168.192 59.8027C168.192 59.8027 132.964 80.524 105.01 90.496C77.0561 100.468 53.4366 100.739 53.4366 100.739"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.01 90.4961L71.0828 73.3172"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.01 90.496L91.1736 116.337"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="absolute left-1/2 ability titleSea    top-24 font-montserrat ..6x04:text-base  font-medium text-2xl  ">
          Каждый сезон
        </p>
        <p className="absolute left-1/2 w-full ability top-32  font-montserrat  ..6x3:text-22px ..6x03:top-32 text-center font-medium text-3xl italic ">
          НОВЫЕ АКЦИИ
        </p>
        <div className="mb-9 ..5x2:mb-14 text-center font-montserrat ..6x04:text-13px nabSea mt-20">
          Покупай в наборах и получай подарок
          <div className="w-24 h-3px ability absolute hrSea left-1/2  bg-white"></div>
        </div>
        <div className="timer absolute ability left-1/2 timerSea hidden ..5x2:block ..6x5:!pt-1 !pt-0 ..5x2:py-1 ..6x5:ml-0 bg-white px-2 text-primary border border-primary font-normal text-lg font-montserrat   ..6x5:font-noto-sans ..6x5:text-sm">
          {time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
        </div>

        <div className="max-w-1460px h-874px mx-auto flex flex-row justify-between .4x1:justify-center ..5x2:hidden">
          <div className="w-572px h-full relative .4x1:hidden">
            <div className="flex w-full h-full">
              <Image src={imgLSale} quality={100} />
            </div>

            <div className="absolute top-16 left-10 z-10">
              <p className=" text-primary font-montserrat font-medium text-22px leading-120% mb-2">
                АКЦИЯ ВЕСНЫ
              </p>
              <p className=" font-montserrat font-medium text-26px leading-120% mb-8">
                Получай подарки за покупки
              </p>
              <div className="timer bg-white-80pe px-2 text-primary border-2 border-primary font-normal text-lg font-montserrat">
                {time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
              </div>
            </div>

            <div className="absolute bottom-10 right-10 flex flex-row items-center">
              <p className=" font-montserrat font-medium text-13px leading-100%">
                Смотреть
              </p>
              <svg
                className="ml-1"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0252 3.93588L9.08463 4.70371L11.2648 6.46681L2.19476 6.47423L2.19611 7.55756L11.2413 7.55016L9.09785 9.29987L10.0429 10.0641L13.8053 6.99283L10.0252 3.93588Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className=" w-870px h-full flex flex-row flex-wrap gap-18px justify-between">
            {data?.map((el, index) => {
              if (index > 5) {
                return;
              } else {
                return <NewSaleCardProduct obj={el} />;
              }
            })}
          </div>
        </div>

        <Swiper
          className="newSaleSlider hidden ..5x2:block !pb-7 !ml-3"
          modules={[Navigation, Scrollbar]}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          slidesPerView={1.8}
          spaceBetween={17}
          breakpoints={{
            1470: {
              slidesPerView: 5,
              spaceBetween: 17,
            },
            1300: {
              slidesPerView: 4.5,
              spaceBetween: 17,
            },
            999: {
              slidesPerView: 3.5,
              spaceBetween: 17,
            },
            850: {
              slidesPerView: 4.5,
              spaceBetween: 17,
            },
            650: {
              slidesPerView: 3.5,
              spaceBetween: 17,
            },
            470: {
              slidesPerView: 2.5,
              spaceBetween: 17,
            },
            399: {
              slidesPerView: 2,
              spaceBetween: 17,
            },
          }}
        >
          {data?.map((el, index) => (
            <SwiperSlide>
              <NewSaleCardProduct obj={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};
export default SeaAct;
