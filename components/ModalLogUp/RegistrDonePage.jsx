import Image from 'next/image';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../ui/Logo/Logo';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import RegistrDonePageSliderItem from './RegistrDonePageSliderItem';

const RegistrDonePage = () => {
  const [pass, setPass] = useState('uyr54$ponM');
  const [numContract, setNumContract] = useState('14587452');

  function copy(text) {
    navigator.clipboard.writeText(`${text}`);
  }

  return (
    <>
      <div className="w-full flex justify-center items-center pb-8 ">
        <Logo />
      </div>

      <p className=" font-montserrat font-normal text-22px leading-140% text-center">
        Вы зарегистрированы!
      </p>

      <div className="w-full flex items-center justify-center h-5 relative mt-4">
        <p className="bg-white font-noto-sans font-light text-sm leading-140% text-black-70pe z-10 px-2">
          Данные для входа
        </p>

        <div className="h-px bg-green-ocean w-full absolute"></div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <div className="font-noto-sans font-normal text-13px leading-120% h-11 w-full bg-gray-light px-2.5 flex flex-row items-center">
          <span className=" mr-2.5">Телефон:</span>
          <span className=" text-gray-quick-silver">+7 920 352 00 00</span>
        </div>

        <div className="font-noto-sans font-normal text-13px leading-120% h-11 w-full bg-gray-light px-2.5 flex flex-row justify-between items-center">
          <div>
            <span className=" mr-2.5">№ контракта:</span>
            <span className=" text-gray-quick-silver">{numContract}</span>
          </div>

          <div
            onClick={() => copy(numContract)}
            className="flex cursor-pointer"
          >
            <Image
              src={require('../../images/Icons/copyIcon.svg')}
              quality={100}
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="font-noto-sans font-normal text-13px leading-120% h-11 w-full bg-gray-light px-2.5 flex flex-row justify-between items-center">
          <div>
            <span className=" mr-2.5">Пароль:</span>
            <span className=" text-gray-quick-silver">{pass}</span>
          </div>

          <div onClick={() => copy(pass)} className="flex cursor-pointer">
            <Image
              src={require('../../images/Icons/copyIcon.svg')}
              quality={100}
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      <p className=" text-primary font-montserrat font-medium text-13px leading-100% mt-2 cursor-pointer">
        Изменить пароль
      </p>

      <div className="w-full flex items-center justify-center h-5 relative mt-6">
        <p className="bg-white font-noto-sans font-light text-sm leading-140% text-black-70pe z-10 px-2">
          Данные для входа
        </p>

        <div className="h-px bg-green-ocean w-full absolute"></div>
      </div>

      <div className=" h-11 w-full flex items-center mt-2">
        <input
          className="w-full h-full inputForm bg-white border border-gray-quick-silver px-2.5 focus:border-primary"
          type="text"
          placeholder="Введите email"
        />
        <div className="h-full w-12 flex justify-center items-center bg-gray-light border border-l-0 border-gray-quick-silver">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.35424 6.84928C5.99485 6.56177 5.47044 6.62004 5.18293 6.97942C4.89543 7.33881 4.9537 7.86322 5.31308 8.15072L8.95917 11.0676C9.56787 11.5546 10.4328 11.5546 11.0415 11.0676L14.6876 8.15072C15.047 7.86322 15.1052 7.33881 14.8177 6.97942C14.5302 6.62004 14.0058 6.56177 13.6464 6.84928L10.0003 9.76615L6.35424 6.84928Z"
              fill="#949792"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.83366 2.5C3.53247 2.5 1.66699 4.36548 1.66699 6.66667V13.3333C1.66699 15.6345 3.53247 17.5 5.83366 17.5H14.167C16.4682 17.5 18.3337 15.6345 18.3337 13.3333V6.66667C18.3337 4.36548 16.4682 2.5 14.167 2.5H5.83366ZM3.33366 6.66667C3.33366 5.28595 4.45295 4.16667 5.83366 4.16667H14.167C15.5477 4.16667 16.667 5.28595 16.667 6.66667V13.3333C16.667 14.714 15.5477 15.8333 14.167 15.8333H5.83366C4.45295 15.8333 3.33366 14.714 3.33366 13.3333V6.66667Z"
              fill="#949792"
            />
          </svg>
        </div>
      </div>

      <div className=" mt-11">
        <div className="flex flex-row justify-between items-center">
          <p className=" font-montserrat font-normal text-22px leading-140%">
            Вам понравится!
          </p>
          <p className=" font-montserrat font-medium text-13px leading-100% border-b border-green-ocean pb-1 cursor-pointer">
            Все выгоды
          </p>
        </div>

        <Swiper
          className=" h-96 w-full mt-3"
          modules={[Navigation]}
          // slidesPerView={1.3}
          spaceBetween={20}
        >
          <SwiperSlide>
            <RegistrDonePageSliderItem />
          </SwiperSlide>

          <SwiperSlide>
            <RegistrDonePageSliderItem />
          </SwiperSlide>

          <SwiperSlide>
            <RegistrDonePageSliderItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default RegistrDonePage;
