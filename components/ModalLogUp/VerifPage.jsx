import React, { useEffect } from 'react';
import { useState } from 'react';

const VerifPage = ({
  phone,
  setVerifPage,
  setRegistrPage,
  setRegistrDonePage,
}) => {
  const [time, setTime] = useState('60');
  const [timeNew, setTimeNew] = useState('');
  const [requestCod, setRequestCod] = useState(false);
  const [cod, setCod] = useState('');

  const listenerFun = (e) => {
    if (e.code === 'Backspace') {
      e.preventDefault();
      let arrInputs = document.querySelectorAll('.verifInputs');
      let prevIdInput = +e.target.id - 1;

      e.target.value = '';
      arrInputs.forEach((el) => {
        if (+el.id == prevIdInput) {
          el.value = '';
          el.focus();
        }
      });
    }
  };

  useEffect(() => {
    startTime();

    let arrInputs = document.querySelectorAll('.verifInputs');
    arrInputs.forEach((el) => {
      el.addEventListener('keydown', listenerFun);
    });
  }, []);

  const changeInputs = (e) => {
    setCod((prev) => prev + e.target.value);
    let arrInputs = document.querySelectorAll('.verifInputs');
    let nextIdInput = +e.target.id + 1;

    if (+e.target.id == 4) {
      setVerifPage(false);
      setRegistrDonePage(true);
    }

    arrInputs.forEach((el) => {
      if (+el.id == nextIdInput) {
        el.focus();
      }
    });
  };

  const startTime = () => {
    function changeTime(setValue) {
      return setTimeNew(
        `${setValue.m < 10 ? `0${setValue.m}` : `${setValue.m}`}:${
          setValue.s < 10 ? `0${setValue.s}` : `${setValue.s}`
        }`
      );
    }

    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;

    changeTime({ m: minutes, s: seconds });

    let timerId = setInterval(() => {
      seconds -= 1;
      if (minutes <= 0 && seconds <= 0) {
        clearInterval(timerId);
        setRequestCod(true);
      }

      if (seconds < 0) {
        minutes -= 1;
        seconds = 59;
        changeTime({ m: minutes, s: seconds });
      } else {
        changeTime({ m: minutes, s: seconds });
      }
    }, 1000);
  };

  return (
    <>
      <div
        onClick={() => {
          setRegistrPage(true);
          setVerifPage(false);
        }}
        className="flex flex-row items-center gap-1 border-b border-green-ocean w-fit pb-1 cursor-pointer"
      >
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.9752 3.43604L6.9158 4.20386L4.73564 5.96696L13.8057 5.97438L13.8043 7.05771L4.75915 7.05032L6.90258 8.80003L5.95757 9.56426L2.19514 6.49299L5.9752 3.43604Z"
            fill="black"
          />
        </svg>
        <span className="font-montserrat font-medium text-13px leading-100%">
          Назад
        </span>
      </div>

      <div className="mt-2.5">
        <span className="font-montserrat font-normal text-22px leading-140%">
          Подтверждение номера
        </span>
      </div>

      <div className=" mt-6">
        <p className=" font-montserrat font-normal text-13px leading-140%">
          Мы отправили SMS с кодом на номер
        </p>
        <p className=" font-montserrat font-medium text-13px leading-140% mt-2">
          {phone}
        </p>
        <p className=" font-montserrat font-medium text-13px leading-100% text-primary mt-2 cursor-pointer">
          Изменить номер
        </p>
      </div>

      <div className=" mt-5">
        <p className=" font-montserrat font-normal text-13px leading-140% text-gray-quick-silver">
          Введите код
        </p>

        <div className=" flex flex-row items-center justify-between w-full mt-2">
          <input
            id="1"
            onChange={changeInputs}
            className="verifInputs"
            type="text"
            maxLength={1}
            autoFocus
          />
          <input
            id="2"
            onChange={changeInputs}
            className="verifInputs"
            type="text"
            maxLength={1}
          />
          <input
            id="3"
            onChange={changeInputs}
            className="verifInputs"
            type="text"
            maxLength={1}
          />
          <input
            id="4"
            onChange={changeInputs}
            className="verifInputs"
            type="text"
            maxLength={1}
          />
        </div>
      </div>

      {requestCod ? (
        <div
          onClick={() => {
            setRequestCod(false);
            startTime();
          }}
          className=" font-montserrat font-medium text-13px leading-100% text-primary text-center mt-8 cursor-pointer"
        >
          Получить новый код
        </div>
      ) : (
        <div className=" text-center font-noto-sans font-normal text-sm leading-140% text-gray-quick-silver mt-8">
          Получить новый код можно <br /> через {timeNew}
        </div>
      )}
    </>
  );
};

export default VerifPage;
