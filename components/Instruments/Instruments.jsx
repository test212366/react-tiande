import * as icons from '../../images/constsIcons';
import Image from 'next/image';
import yandex from '../../images/templates/yandex.jpg';
import ozon from '../../images/templates/ozon.png';
import pochtaRF from '../../images/templates/pochta_rf.png';
import cdek from '../../images/templates/cdek.jpg';
import berry from '../../images/templates/berry.png';
import oneinsr from '../../images/templates/1instr.png';
import twoinsr from '../../images/templates/2instr.jpg';
import InstrumentItem from '../InstrumentItem/InstrumentItem';
import { useEffect, useRef, useState } from 'react';

import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Instrumensts({ refL }) {
  const slider = useRef(null);

  const [payments, setpayments] = useState({
    isHover: false,
    currentCountry: 'Россия',
  });

  const [delivery, setDelivery] = useState({
      isHover: false,
      currentCountry: 'Россия',
    }),
    cntrs = [
      'Россия',
      'Австрия',
      'Беларусь',
      'Бельгия',
      'Франция',
      'Германия',
      'Италия',
      'Казахстан',
    ];

  const setCurrentCountry = (country) =>
    setDelivery({ isHover: false, currentCountry: country });
  const setCurrentPaymentCountry = (country) =>
    setpayments({ isHover: false, currentCountry: country });

  return (
    <div className="relative" ref={refL} id="sec-8">
      <div className="absolute right-0 bottom-0 w-72 h-72 ..5x2:hidden ..6x2:w-40 ..6x2:h-40">
        <Image
          className="object-cover"
          width={486}
          height={486}
          src={twoinsr}
          alt="discountImg"
        />
      </div>
      <div className="absolute right-0 top-0 ..6x2:w-40 ..5x2:hidden ..6x2:h-40">
        <Image
          className="object-cover"
          width={231}
          height={231}
          src={oneinsr}
          alt="discountImg"
        />
      </div>
      <section className="..5x2:pt-20 ..5x1:pt-48 ..5x1:pb-6 ..5x3:mt-5 ..5x1:-mt-32  relative .1x1:-mt-20 .1 pt-32 ..5x2:-mt-40 pb-36 ">
        <p className="absolute left-1/2 top-28 ..5x2:top-12 ability text-2xl z-10 ..5x2:text-base font-montserrat font-medium">
          Сервисы
        </p>
        <div className="homeSVGINSTR">
          <svg
            width="140"
            className="absolute ..5x2:top-5  left-1/2 ability top-12"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M99.1666 63.0932L100.068 63.6351L101.145 64.2822C104.218 66.1259 107.593 67.2392 111.032 67.6226L112.588 67.7961L112.588 69.362L112.583 122.5L112.583 124.25H110.833H90.4166H88.6666V122.5V93.3333C88.6666 91.0782 86.8385 89.25 84.5833 89.25H55.467L54.8923 89.2832C52.8856 89.5394 51.3333 91.2563 51.3333 93.3333V122.5V124.25H49.5833H29.1666H27.4166L27.4166 122.5L27.4179 69.3611L27.4179 67.7958L28.9736 67.622C32.4105 67.238 35.784 66.1249 38.8552 64.2821L39.9318 63.6351L40.8333 63.0933L41.7348 63.6351L42.7915 64.2702L44.0104 64.9567C51.5515 68.9254 60.6579 68.7006 68.0219 64.2821L69.0985 63.6351L70 63.0933L70.9015 63.6351L71.9581 64.2702L73.1772 64.9567C80.7178 68.9252 89.8237 68.7006 97.1874 64.2828L99.1666 63.0932ZM99.1666 63.0932L98.2651 63.6351L97.1886 64.2821L99.1666 63.0932ZM116.619 39.0775L116.67 39.0805L116.714 39.0831C116.722 39.083 116.73 39.0829 116.738 39.0827L116.753 39.0825L116.768 39.0825L122.5 39.0833L124.25 39.0836V40.8333V55.0258V56.0135L123.405 56.5239L122.158 57.2768L122.154 57.2793C116.981 60.3829 110.519 60.3829 105.346 57.2793L101.268 54.8319C99.9744 54.056 98.3589 54.056 97.0658 54.8319L92.9868 57.2793C87.8143 60.3829 81.3524 60.3829 76.1798 57.2793L72.1008 54.8319C70.8077 54.056 69.1922 54.056 67.8991 54.8319L63.8202 57.2793C58.6476 60.3829 52.1857 60.3829 47.0132 57.2793L42.9342 54.8319C41.6411 54.056 40.0256 54.056 38.7325 54.8319L34.6535 57.2793L34.626 57.2958L34.598 57.3112L33.6596 57.8285L33.6315 57.844L33.6029 57.8585C28.6254 60.3689 22.6752 60.1761 17.8476 57.2799L116.619 39.0775ZM116.619 39.0775L116.567 39.0775L17.4999 39.0833L15.75 39.0834V40.8333V55.0317V56.0233L16.6006 56.5329L17.8466 57.2793L116.619 39.0775ZM19.252 68.0239L19.252 66.7864L18.0852 66.3739C16.9804 65.9833 15.897 65.511 14.8439 64.9567L13.6242 64.2698L9.56582 61.8348C8.33588 61.0968 7.58331 59.7677 7.58331 58.3333V35C7.58331 32.7448 9.41148 30.9167 11.6666 30.9167H11.6684L17.5017 30.9108L19.25 30.9091V29.1608V11.6667C19.25 9.58964 20.8022 7.87269 22.809 7.6165L23.3837 7.58334H116.667C118.744 7.58334 120.461 9.1356 120.717 11.1424L120.75 11.717V29.1608V30.9091L122.498 30.9108L128.332 30.9167H128.333C130.41 30.9167 132.127 32.4689 132.383 34.4757L132.417 35.0504V58.3333C132.417 59.7677 131.664 61.0968 130.434 61.8348L126.355 64.2821C124.934 65.1352 123.447 65.8317 121.92 66.372L120.754 66.7846L120.754 68.0216L120.75 128.333C120.75 130.41 119.198 132.127 117.191 132.384L116.616 132.417H23.3333C21.2563 132.417 19.5393 130.864 19.2831 128.858L19.25 128.283L19.252 68.0239ZM80.5 99.1667V97.4167H78.75H61.25H59.5V99.1667V122.5V124.25H61.25H78.75H80.5V122.5V99.1667ZM112.583 17.5V15.75H110.833H29.1666H27.4166V17.5V29.1608V30.9108H29.1666H110.833H112.583V29.1608V17.5Z"
              fill="#EFF5F0"
              stroke="white"
              strokeWidth="3.5"
            />
          </svg>
        </div>

        <p className="text-center font-montserrat font-medium text-3xl italic mb-3 absolute left-1/2 ability top-40 ..5x2:text-22px ..5x2:top-16 whitespace-nowrap">
          И ИНСТРУМЕНТЫ
        </p>

        <div className="..5x1:hidden flex flex-col .3x1:flex-row justify-center max-w-1600px w-full items-center mx-auto mt-20">
          <div className="flex .3x1:flex-col maxwidthCustom flex-row">
            <InstrumentItem
              icon={icons.ICON_LK}
              text="Управление профилем в понятном и удобном интерфейсе"
              title="Личный кабинет"
              btnText="Вход"
            />

            <InstrumentItem
              icon={icons.ICON_SKIDKA}
              text="Персональная скидка от 35% начиная с первого заказа!"
              title="Моя скидка"
            />

            <InstrumentItem
              icon={icons.ICON_MOB_APPS}
              text="Все доступные функции в вашем смартфоне!"
              title="Мобильное приложение"
              bottomImg1={icons.ICON_GOOGLE_PLAY}
              bottomImg2={icons.ICON_APP_STORE}
            />
          </div>

          <div className="flex .3x1:flex-col maxwidthCustom flex-row">
            <InstrumentItem
              icon={icons.ICON_ONLINE_BONUS}
              text="Вознаграждение консультантов с пятого уровня, 1-10%"
              title="Online-бонус"
            />
            <div className="relative">
              <InstrumentItem
                icon={icons.ICON_DOSTAVKA}
                country={delivery.currentCountry}
                textImg={[yandex, pochtaRF, ozon, cdek, berry]}
                variant="Dostavka"
                title="Доставка от 1000 ₽"
                underCountry="+ 31 страна"
                setDelivery={setDelivery}
                delivery={delivery}
              />
              <section
                onMouseLeave={() =>
                  setDelivery({
                    currentCountry: delivery.currentCountry,
                    isHover: false,
                  })
                }
                className={`dropmenuInstr ${
                  delivery.isHover ? 'block' : 'hidden'
                } z-10 absolute pb-5 pt-1 overflow-auto bg-white w-72 h-64 left-14 -bottom-40`}
              >
                {cntrs.map((ctr, i) => (
                  <p
                    key={i}
                    onClick={() => setCurrentCountry(ctr)}
                    className="px-5 cursor-pointer transition-all hover:bg-gray-light py-3 text-13px font-medium flex items-center justify-between"
                  >
                    {ctr}{' '}
                    {delivery.currentCountry === ctr ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 4.66656L6.00004 12.6666L2.33337 8.9999L3.27337 8.0599L6.00004 10.7799L13.06 3.72656L14 4.66656Z"
                          fill="#337202"
                        />
                      </svg>
                    ) : (
                      ''
                    )}
                  </p>
                ))}
              </section>
            </div>

            <div className="relative">
              <InstrumentItem
                icon={icons.ICON_OPLATA}
                title="Оплата"
                country={payments.currentCountry}
                underCountry="Услуга отсрочки платежа"
                variant="Oplata"
                setDelivery={setpayments}
                delivery={payments}
              />
              <section
                onMouseLeave={() =>
                  setpayments({
                    currentCountry: payments.currentCountry,
                    isHover: false,
                  })
                }
                className={`dropmenuInstr ${
                  payments.isHover ? 'block' : 'hidden'
                } z-10 absolute pb-5 pt-1 overflow-auto bg-white w-72 h-64 left-32 -bottom-40`}
              >
                {cntrs.map((ctr, i) => (
                  <p
                    key={i}
                    onClick={() => setCurrentPaymentCountry(ctr)}
                    className="px-5 cursor-pointer transition-all hover:bg-gray-light py-3 text-13px font-medium flex items-center justify-between"
                  >
                    {ctr}{' '}
                    {payments.currentCountry === ctr ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 4.66656L6.00004 12.6666L2.33337 8.9999L3.27337 8.0599L6.00004 10.7799L13.06 3.72656L14 4.66656Z"
                          fill="#337202"
                        />
                      </svg>
                    ) : (
                      ''
                    )}
                  </p>
                ))}
              </section>
            </div>
          </div>
        </div>

        <Swiper
          className="instrumentSlider !mt-3.5 !pb-4 hidden ..5x1:block"
          modules={[Navigation, Scrollbar]}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          slidesPerView={1.8}
          spaceBetween={-9}
          breakpoints={{
            1100: {
              slidesPerView: 5,
              spaceBetween: 17,
            },
            999: {
              slidesPerView: 5,
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
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <InstrumentItem
              icon={icons.ICON_LK}
              text="Управление профилем в понятном и удобном интерфейсе"
              title="Личный кабинет"
              btnText="Вход"
            />
          </SwiperSlide>

          <SwiperSlide>
            <InstrumentItem
              icon={icons.ICON_SKIDKA}
              text="Персональная скидка от 35% начиная с первого заказа!"
              title="Моя скидка"
            />
          </SwiperSlide>

          <SwiperSlide>
            <InstrumentItem
              icon={icons.ICON_MOB_APPS}
              text="Все доступные функции в вашем смартфоне!"
              title="Мобильное приложение"
              bottomImg1={icons.ICON_GOOGLE_PLAY}
              bottomImg2={icons.ICON_APP_STORE}
            />
          </SwiperSlide>

          <SwiperSlide>
            <InstrumentItem
              icon={icons.ICON_ONLINE_BONUS}
              text="Вознаграждение консультантов с пятого уровня, 1-10%"
              title="Online-бонус"
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <InstrumentItem
                icon={icons.ICON_DOSTAVKA}
                country={delivery.currentCountry}
                textImg={[yandex, pochtaRF, ozon, cdek, berry]}
                variant="Dostavka"
                title="Доставка от 1000 ₽"
                underCountry="+ 31 страна"
                setDelivery={setDelivery}
                delivery={delivery}
              />
              <section
                onMouseLeave={() =>
                  setDelivery({
                    currentCountry: delivery.currentCountry,
                    isHover: false,
                  })
                }
                className={`dropmenuInstr ${
                  delivery.isHover ? 'block' : 'hidden'
                } z-10 absolute pb-5 pt-1 overflow-auto bg-white w-11/12 h-64 left-3 -bottom-24`}
              >
                {cntrs.map((ctr, i) => (
                  <p
                    key={i}
                    onClick={() => setCurrentCountry(ctr)}
                    className="px-5 cursor-pointer transition-all hover:bg-gray-light py-3 text-13px font-medium flex items-center justify-between"
                  >
                    {ctr}{' '}
                    {delivery.currentCountry === ctr ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 4.66656L6.00004 12.6666L2.33337 8.9999L3.27337 8.0599L6.00004 10.7799L13.06 3.72656L14 4.66656Z"
                          fill="#337202"
                        />
                      </svg>
                    ) : (
                      ''
                    )}
                  </p>
                ))}
              </section>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <InstrumentItem
                icon={icons.ICON_OPLATA}
                title="Оплата"
                country={payments.currentCountry}
                underCountry="Услуга отсрочки платежа"
                variant="Oplata"
                setDelivery={setpayments}
                delivery={payments}
              />
              <section
                onMouseLeave={() =>
                  setpayments({
                    currentCountry: payments.currentCountry,
                    isHover: false,
                  })
                }
                className={`dropmenuInstr ${
                  payments.isHover ? 'block' : 'hidden'
                } z-10 absolute pb-5 pt-1 overflow-auto bg-white w-11/12 h-64 left-3 -bottom-24`}
              >
                {cntrs.map((ctr, i) => (
                  <p
                    key={i}
                    onClick={() => setCurrentPaymentCountry(ctr)}
                    className="px-5 cursor-pointer transition-all hover:bg-gray-light py-3 text-13px font-medium flex items-center justify-between"
                  >
                    {ctr}{' '}
                    {payments.currentCountry === ctr ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 4.66656L6.00004 12.6666L2.33337 8.9999L3.27337 8.0599L6.00004 10.7799L13.06 3.72656L14 4.66656Z"
                          fill="#337202"
                        />
                      </svg>
                    ) : (
                      ''
                    )}
                  </p>
                ))}
              </section>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
export default Instrumensts;
