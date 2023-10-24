import useWindowSize from '../utils/useWindowSize';

export default function BtnsCardProduct({
  clickBtnR,
  clickBtnL,
  clickBtnBig,
  clickBtnRDesk,
  clickBtnLDesk,
  clickBtnBigDesk,
  showBtns,
  priceDe,
  setClickBtnR,
  setClickBtnL,
  setClickBtnBig,
  setClickBtnRDesk,
  setClickBtnLDesk,
  setClickBtnBigDesk,
}) {
  // let size = useWindowSize();
  return (
    <>
      {showBtns && (
        <>
          {priceDe ? (
            <div className=" absolute bottom-0 h-11 w-276px flex flex-row ..5x2:hidden">
              {clickBtnLDesk ? (
                <button className="w-1/2 h-full border-t border-r border-gray font-montserrat font-normal text-13px leading-150% bg-primary text-white">
                  В корзине
                </button>
              ) : (
                <button
                  onClick={() => setClickBtnLDesk(true)}
                  className="w-1/2 h-full border-t border-r border-gray text-primary font-montserrat font-normal text-13px leading-150% hover:bg-primary hover:text-white"
                >
                  Купить
                </button>
              )}

              {clickBtnRDesk ? (
                <button className="w-1/2 h-full border-t border-gray font-montserrat font-normal text-13px leading-150% bg-label-orange text-white">
                  В корзине
                </button>
              ) : (
                <button
                  onClick={() => setClickBtnRDesk(true)}
                  className="w-1/2 h-full border-t border-gray text-label-orange font-montserrat font-normal text-13px leading-150% hover:bg-label-orange hover:text-white"
                >
                  Купить за <span className=" font-lora">De</span>
                </button>
              )}
            </div>
          ) : (
            <>
              {clickBtnBigDesk ? (
                <button className="absolute bottom-0 h-11 w-276px border-t border-gray font-montserrat font-normal text-13px leading-150% bg-primary text-white ..5x2:hidden">
                  В корзине
                </button>
              ) : (
                <button
                  onClick={() => setClickBtnBigDesk(true)}
                  className="absolute bottom-0 h-11 w-276px border-t border-gray text-primary font-montserrat font-normal text-13px leading-150% hover:bg-primary hover:text-white ..5x2:hidden"
                >
                  Купить
                </button>
              )}
            </>
          )}
        </>
      )}

      {priceDe ? (
        <div className="hidden absolute bottom-2 left-7px h-8 w-40 ..5x2:flex flex-row">
          {clickBtnL ? (
            <button className="w-1/2 h-full bg-primary">
              <svg
                className="mx-auto"
                width="67"
                height="14"
                viewBox="0 0 67 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5 1.74999C21.6946 1.74999 21.0417 2.40291 21.0417 3.20833V3.5H23.9583V3.20833C23.9583 2.40291 23.3054 1.74999 22.5 1.74999ZM25.125 3.5V3.20833C25.125 1.75858 23.9497 0.583328 22.5 0.583328C21.0502 0.583328 19.875 1.75858 19.875 3.20833V3.5H18.4167C17.7723 3.5 17.25 4.02233 17.25 4.66666V12.25C17.25 12.8943 17.7723 13.4167 18.4167 13.4167H26.5833C27.2277 13.4167 27.75 12.8943 27.75 12.25V4.66666C27.75 4.02233 27.2277 3.5 26.5833 3.5H25.125ZM23.9583 4.66666V5.25C23.9583 5.57216 24.2195 5.83333 24.5417 5.83333C24.8638 5.83333 25.125 5.57216 25.125 5.25V4.66666H26.5833V12.25H18.4167V4.66666H19.875V5.25C19.875 5.57216 20.1362 5.83333 20.4583 5.83333C20.7805 5.83333 21.0417 5.57216 21.0417 5.25V4.66666H23.9583Z"
                  fill="#337202"
                  stroke="white"
                  stroke-width="0.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M49.7498 4.08333L42.7498 11.0833L39.5415 7.875L40.364 7.0525L42.7498 9.4325L48.9273 3.26083L49.7498 4.08333Z"
                  fill="white"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setClickBtnL(true)}
              className="w-1/2 h-full border border-gray text-primary font-montserrat font-normal text-12px leading-100% hover:bg-primary hover:text-white"
            >
              Купить
            </button>
          )}

          {clickBtnR ? (
            <button className="w-1/2 h-full bg-label-orange">
              <svg
                className="mx-auto"
                width="68"
                height="14"
                viewBox="0 0 68 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23 1.74999C22.1946 1.74999 21.5417 2.40291 21.5417 3.20833V3.5H24.4583V3.20833C24.4583 2.40291 23.8054 1.74999 23 1.74999ZM25.625 3.5V3.20833C25.625 1.75858 24.4497 0.583328 23 0.583328C21.5502 0.583328 20.375 1.75858 20.375 3.20833V3.5H18.9167C18.2723 3.5 17.75 4.02233 17.75 4.66666V12.25C17.75 12.8943 18.2723 13.4167 18.9167 13.4167H27.0833C27.7277 13.4167 28.25 12.8943 28.25 12.25V4.66666C28.25 4.02233 27.7277 3.5 27.0833 3.5H25.625ZM24.4583 4.66666V5.25C24.4583 5.57216 24.7195 5.83333 25.0417 5.83333C25.3638 5.83333 25.625 5.57216 25.625 5.25V4.66666H27.0833V12.25H18.9167V4.66666H20.375V5.25C20.375 5.57216 20.6362 5.83333 20.9583 5.83333C21.2805 5.83333 21.5417 5.57216 21.5417 5.25V4.66666H24.4583Z"
                  fill="#FF7F37"
                  stroke="white"
                  stroke-width="0.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M50.2501 4.08333L43.2501 11.0833L40.0417 7.875L40.8642 7.0525L43.2501 9.4325L49.4276 3.26083L50.2501 4.08333Z"
                  fill="white"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setClickBtnR(true)}
              className="w-1/2 h-full border border-l-0 border-gray text-label-orange font-montserrat font-medium text-12px leading-100% hover:bg-label-orange hover:text-white"
            >
              {priceDe} <span className=" font-lora font-medium">De</span>
            </button>
          )}
        </div>
      ) : (
        <>
          {clickBtnBig ? (
            <button className="absolute bottom-2 left-7px w-40 h-8 bg-primary ">
              <svg
                className="mx-auto"
                width="67"
                height="14"
                viewBox="0 0 67 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5 1.74999C21.6946 1.74999 21.0417 2.40291 21.0417 3.20833V3.5H23.9583V3.20833C23.9583 2.40291 23.3054 1.74999 22.5 1.74999ZM25.125 3.5V3.20833C25.125 1.75858 23.9497 0.583328 22.5 0.583328C21.0502 0.583328 19.875 1.75858 19.875 3.20833V3.5H18.4167C17.7723 3.5 17.25 4.02233 17.25 4.66666V12.25C17.25 12.8943 17.7723 13.4167 18.4167 13.4167H26.5833C27.2277 13.4167 27.75 12.8943 27.75 12.25V4.66666C27.75 4.02233 27.2277 3.5 26.5833 3.5H25.125ZM23.9583 4.66666V5.25C23.9583 5.57216 24.2195 5.83333 24.5417 5.83333C24.8638 5.83333 25.125 5.57216 25.125 5.25V4.66666H26.5833V12.25H18.4167V4.66666H19.875V5.25C19.875 5.57216 20.1362 5.83333 20.4583 5.83333C20.7805 5.83333 21.0417 5.57216 21.0417 5.25V4.66666H23.9583Z"
                  fill="#337202"
                  stroke="white"
                  stroke-width="0.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M49.7498 4.08333L42.7498 11.0833L39.5415 7.875L40.364 7.0525L42.7498 9.4325L48.9273 3.26083L49.7498 4.08333Z"
                  fill="white"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setClickBtnBig(true)}
              className="hidden absolute bottom-2 left-7px ..5x2:flex items-center justify-center w-40 h-8 border border-gray text-primary font-montserrat font-normal text-12px leading-100% hover:bg-primary hover:text-white"
            >
              Купить
            </button>
          )}
        </>
      )}
    </>
  );
}
