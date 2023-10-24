import { useEffect, useState } from 'react';
import Logo from '../ui/Logo/Logo';
import ava from '../../images/templates/avaLogIn.png';
import Link from 'next/link';
import Image from 'next/image';
import VerifPage from './VerifPage';
import RegistrDonePage from './RegistrDonePage';
import { useRef } from 'react';

export default function ModalLogUp({ show, setShow, setBoolLogIn }) {
  const [checkBoxRemember, setCheckBoxRemember] = useState(false);
  const [checkBoxConsult, setCheckBoxConsult] = useState(false);
  const [disBtn, setDisBtn] = useState(true);
  const [registrInputs, setRegistrInputs] = useState({
    name: '',
    lastName: '',
    phone: '',
    birthday: '',
    consult: '',
  });

  const [error, setError] = useState(false);
  const [registrPage, setRegistrPage] = useState(true);
  const [verifPage, setVerifPage] = useState(false);
  const [registrDonePage, setRegistrDonePage] = useState(false);

  const phInput = useRef(null);
  const birthInput = useRef(null);

  useEffect(() => {
    checkInputs();
  }, [registrInputs]);

  useEffect(() => {
    phInput?.current?.addEventListener('keydown', onPhoneKeyDown);
    phInput?.current?.addEventListener('paste', onPhonePaste, false);
  }, [show]);

  const checkInputs = () => {
    if (
      registrInputs.name.length > 0 &&
      registrInputs.lastName.length > 0 &&
      registrInputs.phone.length >= 10 &&
      registrInputs.birthday.length >= 10
    ) {
      return setDisBtn(false);
    } else {
      return setDisBtn(true);
    }
  };

  const registerInputHandler = (e) => {
    setRegistrInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearInputs = () => {
    setRegistrInputs({
      name: '',
      lastName: '',
      phone: '',
      birthday: '',
      consult: '',
    });
  };

  const errorFromB = () => {
    return setError(true);
  };

  const handlerSubmit = () => {
    setShow();
    setBoolLogIn(true);
    clearInputs();
  };

  let getInputNumbersValue = function (input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
  };

  let onPhonePaste = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    let pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  let onPhoneKeyDown = function (e) {
    // Clear input after remove last symbol
    let inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      setRegistrInputs((prev) => ({
        ...prev,
        phone: '',
      }));
    }
  };

  const reWritePhoneInput = (e) => {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = '';
    if (true) {
      // if (inputNumbersValue[0] == '9')
      //   inputNumbersValue = '7' + inputNumbersValue;
      // let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
      // formattedInputValue = input.value = firstSymbols + ' ';

      if (inputNumbersValue.length > 0) {
        formattedInputValue += '(' + inputNumbersValue.substring(0, 3);
      }
      if (inputNumbersValue.length >= 4) {
        formattedInputValue += ') ' + inputNumbersValue.substring(3, 6);
      }
      if (inputNumbersValue.length >= 7) {
        formattedInputValue += '-' + inputNumbersValue.substring(6, 8);
      }
      if (inputNumbersValue.length >= 9) {
        formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }

    setRegistrInputs((prev) => ({
      ...prev,
      [e.target.name]: formattedInputValue,
    }));
  };

  const reWriteBirthdayInput = (e) => {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = '';

    if (inputNumbersValue.length > 0) {
      formattedInputValue += inputNumbersValue.substring(0, 2);
    }
    if (inputNumbersValue.length > 2) {
      formattedInputValue += '.' + inputNumbersValue.substring(2, 4);
    }
    if (inputNumbersValue.length > 4) {
      formattedInputValue += '.' + inputNumbersValue.substring(4, 8);
    }

    setRegistrInputs((prev) => ({
      ...prev,
      [e.target.name]: formattedInputValue,
    }));
  };

  return (
    <>
      {show && (
        <>
          <div
            onClick={setShow}
            className="outModal bg-gray-light2 bg-opacity-60 w-full h-full fixed top-0 left-0 right-0 bottom-0 z-100"
          >
            <button
              onClick={setShow}
              className=" py-3.5 pl-5 pr-5 customCloseRight fixed top-10 right-448px z-100 bg-primary "
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L9 9M9 1L1 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="fixed top-0 right-0 z-110 bg-white w-448px h-full p-8 overflow-y-scroll">
            {verifPage && (
              <VerifPage
                phone={`+7 ${registrInputs.phone}`}
                setVerifPage={setVerifPage}
                setRegistrPage={setRegistrPage}
                setRegistrDonePage={setRegistrDonePage}
              />
            )}

            {registrDonePage && <RegistrDonePage />}

            {registrPage && (
              <>
                <div className="w-full flex justify-center items-center pb-8">
                  <Logo />
                </div>

                <div className="">
                  <div className=" flex flex-row justify-between items-center mb-3">
                    <div onClick={errorFromB} className="">
                      <p className=" font-montserrat font-normal text-22px leading-140%">
                        Регистрация
                      </p>
                    </div>
                    <div className=" flex flex-row items-center border-b border-primary pb-1 cursor-pointer">
                      <p className=" font-montserrat font-medium text-13px leading-100% mr-1">
                        Есть аккаунт
                      </p>
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_4208_864881)">
                          <path
                            d="M3.33335 10.0282L4.27335 10.792L11.3334 5.05574V8.62533H12.6667V3.20866H6.00002V4.29199H10.3934L3.33335 10.0282Z"
                            fill="#18202B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4208_864881">
                            <rect
                              width="16"
                              height="13"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="w-full h-11 flex flex-col mb-2.5">
                    <p className=" font-noto-sans font-normal text-11px leading-140% text-gray-quick-silver mb-1">
                      Заполнить из профиля социальных сетей
                    </p>
                    <div className="w-full h-11 flex flex-row">
                      <div className="h-full w-1/2 bg-gray-light2 flex items-center justify-center mr-1 cursor-pointer">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M26.8192 21.2723C26.2832 20.1927 25.5769 19.2065 24.7275 18.3516C24.4384 18.0155 24.0995 17.6839 23.8349 17.4251L23.798 17.389C23.6615 17.2553 23.5487 17.1445 23.4565 17.049C24.6179 15.4339 25.612 13.7046 26.423 11.8876L26.4557 11.8143L26.4787 11.7374C26.5852 11.3798 26.708 10.6997 26.2737 10.0851C25.8248 9.44988 25.106 9.33531 24.6247 9.33531H22.4102C21.9486 9.31416 21.4914 9.43896 21.1041 9.6927C20.7138 9.94834 20.4153 10.3212 20.2511 10.7572C19.7742 11.8931 19.1775 12.9736 18.4717 13.9806V11.3855C18.4717 11.05 18.4402 10.4889 18.081 10.0153C17.6509 9.44816 17.029 9.33531 16.5972 9.33531H13.0834C12.6307 9.32485 12.1904 9.48672 11.852 9.78889C11.5055 10.0983 11.2932 10.5306 11.26 10.994L11.2569 11.0379V11.0819C11.2569 11.5603 11.4465 11.9133 11.5979 12.1352C11.6658 12.2346 11.7383 12.325 11.7841 12.3822L11.7947 12.3954C11.8435 12.4563 11.8761 12.4969 11.9089 12.5415C11.9949 12.6586 12.1188 12.8391 12.1538 13.3063V14.7579C11.548 13.7621 10.909 12.4369 10.4282 11.0216L10.4208 10.9999L10.4126 10.9784C10.2927 10.6644 10.1004 10.2076 9.7153 9.85794C9.26539 9.4495 8.73325 9.33531 8.24929 9.33531H6.0024C5.5128 9.33531 4.92255 9.44986 4.48214 9.91444C4.04905 10.3713 4 10.9187 4 11.2098V11.341L4.02763 11.4693C4.64998 14.3579 5.93232 17.063 7.77392 19.373C8.60886 20.6896 9.74021 21.7932 11.078 22.5953C12.4371 23.4103 13.9704 23.8907 15.5515 23.9969L15.5927 23.9997H15.6341C16.3494 23.9997 17.0951 23.938 17.6558 23.5643C18.4123 23.0602 18.4717 22.286 18.4717 21.9002V20.7788C18.6659 20.9357 18.9067 21.147 19.2016 21.4309C19.558 21.7876 19.8419 22.0968 20.0853 22.3666L20.2152 22.5111L20.216 22.5119C20.405 22.7224 20.591 22.9296 20.7605 23.0999C20.9734 23.314 21.236 23.5499 21.566 23.7241C21.9233 23.9129 22.2984 23.9982 22.6969 23.9982H24.9453C25.4189 23.9982 26.0983 23.8861 26.576 23.3324C27.0965 22.7289 27.0568 21.9892 26.8931 21.4576L26.8636 21.362L26.8192 21.2723ZM21.1828 21.3764C20.9298 21.0958 20.6246 20.7632 20.2388 20.3776L20.2357 20.3744C18.8992 19.0859 18.2747 18.8614 17.8332 18.8614C17.5984 18.8614 17.3385 18.8878 17.1699 19.0978C17.0903 19.197 17.0485 19.3166 17.025 19.4413C17.0016 19.5657 16.9935 19.7119 16.9935 19.8783V21.9002C16.9935 22.1513 16.9522 22.2567 16.8361 22.3342C16.6814 22.4373 16.3507 22.5208 15.6424 22.5214C14.2978 22.4298 12.9941 22.0207 11.8381 21.3276C10.6799 20.6331 9.70316 19.6733 8.98846 18.5274L8.98068 18.515L8.97148 18.5035C7.25546 16.3676 6.05972 13.8621 5.47854 11.1849C5.4817 11.0558 5.50965 10.9792 5.55496 10.9314C5.60164 10.8822 5.71476 10.8136 6.0024 10.8136H8.24929C8.49923 10.8136 8.62859 10.8679 8.72169 10.9524C8.82723 11.0483 8.91878 11.211 9.02999 11.5015C9.58148 13.1236 10.3273 14.6406 11.0335 15.756C11.3865 16.3135 11.7339 16.7776 12.0469 17.1054C12.2031 17.2692 12.3563 17.4048 12.5026 17.5013C12.6441 17.5946 12.8046 17.6682 12.9696 17.6682C13.0567 17.6682 13.1585 17.6593 13.2566 17.6158C13.3621 17.5692 13.4439 17.4914 13.5018 17.387C13.604 17.2025 13.6321 16.9292 13.6321 16.5712V13.2563L13.6316 13.2485C13.5805 12.442 13.337 11.9884 13.0999 11.6659C13.0479 11.5952 12.9967 11.5313 12.9519 11.4755L12.9396 11.4602C12.8903 11.3988 12.8512 11.3492 12.819 11.302C12.76 11.2155 12.7371 11.1553 12.7353 11.0907C12.743 11.0141 12.7791 10.9429 12.8367 10.8915C12.8965 10.8381 12.9748 10.8102 13.0549 10.8136H16.5972C16.8003 10.8136 16.8687 10.8631 16.9031 10.9085C16.9517 10.9726 16.9935 11.1058 16.9935 11.3855V15.8484C16.9935 16.3785 17.2379 16.7374 17.5928 16.7374C18.0012 16.7374 18.2955 16.4897 18.8104 15.9749L18.8189 15.9663L18.8266 15.9568C19.9804 14.5498 20.9235 12.9823 21.6253 11.3034L21.6298 11.2909C21.6826 11.1425 21.7824 11.0155 21.9142 10.9292C22.0458 10.8429 22.2021 10.8021 22.3592 10.813L22.3678 10.8136H24.6247C24.9325 10.8136 25.0338 10.8919 25.0665 10.9382C25.1013 10.9875 25.1255 11.0931 25.0664 11.3003C24.2572 13.1101 23.2565 14.8279 22.0819 16.425L22.0745 16.4363C21.9605 16.6107 21.8354 16.8037 21.8173 17.0252C21.7979 17.2631 21.9009 17.4794 22.0809 17.7112C22.2122 17.9053 22.4829 18.1703 22.7576 18.4391L22.7835 18.4644C23.0714 18.7463 23.3834 19.0516 23.6338 19.3472L23.6405 19.355L23.6478 19.3623C24.3943 20.107 25.015 20.9678 25.4858 21.9111C25.561 22.1679 25.515 22.2992 25.4565 22.3669C25.3883 22.4461 25.2351 22.52 24.9453 22.52H22.6969C22.5212 22.52 22.3857 22.4854 22.2562 22.417C22.1213 22.3457 21.9826 22.2324 21.8085 22.0575C21.6684 21.9165 21.5152 21.746 21.3284 21.5382C21.2821 21.4867 21.2337 21.4327 21.1828 21.3764Z"
                            fill="#337202"
                          />
                        </svg>
                      </div>

                      <div className="h-full w-1/2 bg-gray-light2 flex items-center justify-center ml-1 cursor-pointer">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.7401 16.9714C23.0922 15.9763 21.5151 15.5985 19.9712 16.5533C19.9563 16.5626 18.4274 17.4854 16.0206 17.4854C13.6139 17.4854 12.085 16.5618 12.07 16.5533C10.5325 15.5977 8.94265 15.972 8.299 16.974C8.29687 16.9765 8.2958 16.979 8.29366 16.9824C7.33674 18.5227 8.91699 19.3252 10.1882 19.9705C10.9741 20.3684 11.9791 20.6687 13.1862 20.8672L9.7595 23.5693C7.69064 25.1937 10.9324 27.757 13.0226 26.1494L16.0313 23.7703C17.1892 24.6831 18.268 25.5353 19.0464 26.1586C21.1099 27.7528 24.3731 25.2341 22.316 23.5727C19.8622 21.6437 19.334 21.2273 18.87 20.8681C21.4317 20.4365 24.9953 19.0224 23.7401 16.9714ZM17.2983 19.7938C16.7445 19.5843 16.0089 20.3801 16.614 20.8748L16.6204 20.8798C16.6215 20.8807 16.6236 20.8824 16.6247 20.8832C16.6269 20.8849 16.6279 20.8866 16.6301 20.8874C16.938 21.1289 21.0811 24.3853 21.173 24.4585C21.7482 24.9237 20.7346 25.6926 20.1776 25.2652C19.1833 24.4694 17.6062 23.2269 16.5958 22.4303C16.2836 22.1838 15.7736 22.1821 15.4604 22.4303L11.8915 25.2518C11.3259 25.6867 10.3176 24.9102 10.8907 24.4602L15.4283 20.8832C15.4304 20.8815 15.4326 20.8798 15.4336 20.8782C15.9971 20.4424 15.4283 19.6348 14.7654 19.7888C13.1862 19.6432 11.9064 19.3395 11.0543 18.9088C9.40774 18.0718 9.49007 17.9246 9.7285 17.5401C10.4213 16.4961 11.6487 18.7473 16.0185 18.7473C19.0111 18.7473 20.8886 17.5906 20.9624 17.5443C21.4499 17.2432 22.0219 17.1027 22.3031 17.5325C22.5416 17.922 22.6303 18.0676 20.9795 18.9113C19.8526 19.4758 18.2595 19.7038 17.2983 19.7938Z"
                            fill="#337202"
                          />
                          <path
                            d="M15.9961 14.2151C17.7324 14.2151 19.1443 12.8005 19.1443 11.0625C19.1443 9.31737 17.7324 7.89746 15.9961 7.89746C14.2608 7.89746 12.8489 9.31737 12.8489 11.0625C12.848 12.8005 14.2599 14.2151 15.9961 14.2151ZM15.9961 9.23029C16.9967 9.23029 17.8115 10.0522 17.8115 11.0625C17.8115 12.0657 16.9967 12.8823 15.9961 12.8823C14.9956 12.8823 14.1808 12.0657 14.1808 11.0616C14.1808 10.0522 14.9947 9.23029 15.9961 9.23029Z"
                            fill="#337202"
                          />
                          <path
                            d="M15.9958 16.7803C19.1492 16.7803 21.7154 14.215 21.7154 11.0624C21.7145 7.9036 19.1492 5.33301 15.9958 5.33301C12.8423 5.33301 10.2761 7.9036 10.2761 11.0624C10.2761 14.215 12.8414 16.7803 15.9958 16.7803ZM15.9958 6.66584C18.4144 6.66584 20.3826 8.63844 20.3826 11.0624C20.3826 13.4802 18.4153 15.4474 15.9958 15.4474C13.5762 15.4474 11.609 13.4802 11.609 11.0624C11.609 8.63844 13.5762 6.66584 15.9958 6.66584Z"
                            fill="#337202"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 w-full mt-10 mb-11">
                    <div className="flex flex-col w-full gap-1">
                      <label
                        className=" font-noto-sans font-normal text-11px leading-140% text-gray-quick-silver"
                        for="name"
                      >
                        Имя*
                      </label>
                      <input
                        className="inputForm w-full h-11 border border-gray-quick-silver px-2.5 focus:border-primary "
                        type="text"
                        value={registrInputs.name}
                        onChange={registerInputHandler}
                        id="name"
                        name="name"
                        placeholder="введите"
                      />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                      <label
                        className=" font-noto-sans font-normal text-11px leading-140% text-gray-quick-silver"
                        for="lastName"
                      >
                        Фамилия *
                      </label>
                      <input
                        className="inputForm w-full h-11 border border-gray-quick-silver px-2.5 focus:border-primary"
                        type="text"
                        value={registrInputs.lastName}
                        onChange={registerInputHandler}
                        id="lastName"
                        name="lastName"
                        placeholder="введите"
                      />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                      <label
                        className=" font-noto-sans font-normal text-11px leading-140% text-gray-quick-silver"
                        for="phone"
                      >
                        Телефон *
                      </label>

                      <div className="flex relative">
                        <div className="flex flex-row items-center bg-gray-light2 px-2.5 border border-r-0 border-gray-quick-silver cursor-pointer focus:border-primary">
                          <div className=" bg-black w-18px h-18px mr-2 rounded-full "></div>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.875 3.75L5 6.875L8.125 3.75H1.875Z"
                              fill="#18202B"
                            />
                          </svg>
                        </div>

                        <span className="absolute top-2.5 left-66px">+7</span>

                        <input
                          ref={phInput}
                          className="inputForm w-full h-11 border border-gray-quick-silver px-38px focus:border-primary"
                          type="tel"
                          value={registrInputs.phone}
                          onChange={reWritePhoneInput}
                          id="phone"
                          name="phone"
                          // maxLength={10}
                          placeholder="(___) ___-__-__"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col w-full gap-1">
                      <label
                        className=" font-noto-sans font-normal text-11px leading-140% text-gray-quick-silver"
                        for="birthday"
                      >
                        Дата рождения *
                      </label>
                      <input
                        className="inputForm w-full h-11 border border-gray-quick-silver px-2.5 focus:border-primary"
                        type="text"
                        value={registrInputs.birthday}
                        onChange={reWriteBirthdayInput}
                        id="birthday"
                        name="birthday"
                        // maxLength={10}
                        placeholder="ДД.ММ.ГГГГ"
                      />
                      <p className="mt-2 flex items-center font-noto-sans font-normal text-13px leading-120% text-gray-quick-silver">
                        <svg
                          className="mr-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25 11.2509H3.75V8.25092C3.75 7.50092 4.5 6.75092 5.25 6.75092H18.75C19.5 6.75092 20.25 7.50092 20.25 8.25092V11.2509H18.75M5.25 11.2509V18.7509C5.25 19.5009 6 20.2509 6.75 20.2509H17.25C18 20.2509 18.75 19.5009 18.75 18.7509V11.2509M5.25 11.2509H18.75M12 6.75092L12 20.2509M12 6.75092C11 4.62592 8.925 1.20091 7.125 3.00091C5.325 4.80091 9.375 6.75091 12 6.75092ZM12 6.75092C12 3.37599 15.375 1.12593 16.875 2.6259C18.75 4.50087 15 6.75084 12 6.75092Z"
                            stroke="#B7C1AD"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Чтобы вовремя сделать Вам подарок
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center mb-6">
                    <p className=" font-montserrat font-normal text-base leading-140%">
                      У вас есть консультант?
                    </p>

                    <div
                      onClick={() => setCheckBoxConsult(!checkBoxConsult)}
                      className={` h-25px w-50px rounded-20px flex ${
                        checkBoxConsult ? '  bg-primary-hover' : ' bg-stroke'
                      } items-center cursor-pointer transition-all duration-300`}
                    >
                      <div
                        className={`h-30px w-30px rounded-full flex items-center justify-center switchConsult transition-all duration-300 ${
                          checkBoxConsult
                            ? ' bg-primary translate-x-3/4'
                            : ' bg-white translate-x-0'
                        }`}
                      >
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 23 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_4356_734359)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8572 -0.355957L13.16 6.79978H20.6124L14.5833 11.2223L16.8862 18.378L10.8572 13.9555L4.82809 18.378L7.13099 11.2223L1.10193 6.79978H8.55426L10.8572 -0.355957ZM10.8572 3.68913L9.45379 8.04978H4.91239L8.58646 10.7448L7.18309 15.1055L10.8572 12.4104L14.5312 15.1055L13.1278 10.7448L16.8019 8.04978H12.2605L10.8572 3.68913Z"
                              fill={checkBoxConsult ? 'white' : 'black'}
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_4356_734359">
                              <rect
                                width="19.8095"
                                height="20"
                                fill="white"
                                transform="translate(0.952393)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {checkBoxConsult && (
                    <>
                      <div className="flex flex-row items-center w-full relative">
                        <div className="absolute left-2.5">
                          {registrInputs.consult.length > 0 ? (
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.75 5.24988L6.75 14.2499L2.625 10.1249L3.6825 9.06738L6.75 12.1274L14.6925 4.19238L15.75 5.24988Z"
                                fill="#337202"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.25 9.16667C3.25 5.89898 5.89898 3.25 9.16667 3.25C12.4344 3.25 15.0833 5.89898 15.0833 9.16667C15.0833 12.4344 12.4344 15.0833 9.16667 15.0833C5.89898 15.0833 3.25 12.4344 3.25 9.16667ZM9.16667 1.75C5.07055 1.75 1.75 5.07055 1.75 9.16667C1.75 13.2628 5.07055 16.5833 9.16667 16.5833C10.9446 16.5833 12.5764 15.9577 13.854 14.9147L16.9697 18.0303C17.2626 18.3232 17.7374 18.3232 18.0303 18.0303C18.3232 17.7374 18.3232 17.2626 18.0303 16.9697L14.9147 13.854C15.9577 12.5764 16.5833 10.9446 16.5833 9.16667C16.5833 5.07055 13.2628 1.75 9.16667 1.75Z"
                                fill="black"
                              />
                            </svg>
                          )}
                        </div>

                        <input
                          className="inputForm w-full h-11 border border-gray-quick-silver px-10 focus:border-primary"
                          type="text"
                          name="consult"
                          value={registrInputs.consult}
                          onChange={registerInputHandler}
                          placeholder="ID консультанта"
                        />

                        {registrInputs.consult.length > 0 && (
                          <div
                            onClick={() =>
                              setRegistrInputs((prev) => ({
                                ...prev,
                                consult: '',
                              }))
                            }
                            className="absolute right-3 cursor-pointer"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.3334 6.66675L6.66675 13.3334M6.66675 6.66675L13.3334 13.3334"
                                stroke="#949792"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      {registrInputs.consult.length > 0 && (
                        <div className="mt-13px">
                          <div className="">
                            <div className=" bg-gray-100 flex flex-row pl-2 py-2 border border-stroke">
                              <div className="flex items-center mr-2">
                                <div className="flex w-10 h-10 ">
                                  <Image
                                    className="rounded-full"
                                    src={ava}
                                    width={40}
                                    height={40}
                                    quality={100}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="mb-1">
                                  <p className=" font-noto-sans font-medium text-sm leading-140%">
                                    Одинцова Марина Валентиновна
                                  </p>
                                </div>
                                <div className=" mb-2">
                                  <p className=" font-noto-sans font-normal text-13px leading-120% text-gray-quick-silver">
                                    Россия, №14501257
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  <div className="w-full h-11 mb-4 mt-6">
                    {disBtn ? (
                      <button
                        className="flex items-center justify-center h-full w-full bg-gray-light2 font-montserrat font-medium text-13px text-primary leading-100%"
                        disabled
                      >
                        Зарегистрироваться
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setRegistrPage(false);
                          setVerifPage(true);
                        }}
                        className="flex items-center justify-center h-full w-full bg-primary font-montserrat font-medium text-13px text-white leading-100%"
                      >
                        Зарегистрироваться
                      </button>
                    )}
                  </div>

                  <div className=" flex flex-row items-top mt-3">
                    <div className="mt-px mr-3">
                      {checkBoxRemember ? (
                        <svg
                          className=" cursor-pointer"
                          onClick={() => setCheckBoxRemember(!checkBoxRemember)}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1198_847758)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 0H0V16H16V4.94931L8.21193 12.54L4 8.32807L5.91945 6.40862L8.21193 8.70789L16 1V0Z"
                              fill="#3E7E0B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1198_847758">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg
                          className=" cursor-pointer"
                          onClick={() => setCheckBoxRemember(!checkBoxRemember)}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="15"
                            height="15"
                            stroke="#949792"
                          />
                        </svg>
                      )}
                    </div>

                    <p className=" font-montserrat font-normal text-13px leading-140%">
                      Я соглашаюсь с обработкой моих персональных данных на
                      условиях{' '}
                      <Link href="">
                        <a className=" text-gray-quick-silver underline-offset-2 underline">
                          политики кофиденциальности, пользовательского
                          соглашения
                        </a>
                      </Link>
                    </p>
                  </div>

                  <div className=" mt-48 w-416px flex justify-center">
                    <p className="border-b border-green-ocean w-fit pb-1 flex justify-center font-montserrat font-medium text-13px leading-100% cursor-pointer">
                      Все выгоды от сотрудничества
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
