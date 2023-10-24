import { useState } from 'react';

export default function WindowInfoPlus({ vis, windowInfo }) {
  const [hov, setHov] = useState('#337202');

  return (
    <>
      {vis && (
        <div className="absolute -left-5 bottom-9">
          <div className="windowInfo flex flex-col justify-between p-6 w-390px h-196px">
            <div className="">
              <svg
                width="88"
                height="16"
                viewBox="0 0 88 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3247_1159916)">
                  <path
                    d="M8 1.3335L9.49676 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8 10.5466L4.08143 13.3936L5.57819 8.78706L1.65962 5.94005H6.50324L8 1.3335Z"
                    stroke="#337202"
                  />
                </g>
                <g clip-path="url(#clip1_3247_1159916)">
                  <path
                    d="M26 1.3335L27.4968 5.94005H32.3404L28.4218 8.78706L29.9186 13.3936L26 10.5466L22.0814 13.3936L23.5782 8.78706L19.6596 5.94005H24.5032L26 1.3335Z"
                    stroke="#337202"
                  />
                </g>
                <g clip-path="url(#clip2_3247_1159916)">
                  <path
                    d="M44 1.3335L45.4968 5.94005H50.3404L46.4218 8.78706L47.9186 13.3936L44 10.5466L40.0814 13.3936L41.5782 8.78706L37.6596 5.94005H42.5032L44 1.3335Z"
                    stroke="#337202"
                  />
                </g>
                <g clip-path="url(#clip3_3247_1159916)">
                  <path
                    d="M62 1.3335L63.4968 5.94005H68.3404L64.4218 8.78706L65.9186 13.3936L62 10.5466L58.0814 13.3936L59.5782 8.78706L55.6596 5.94005H60.5032L62 1.3335Z"
                    stroke="#337202"
                  />
                </g>
                <g clip-path="url(#clip4_3247_1159916)">
                  <path
                    d="M80 1.3335L81.4968 5.94005H86.3404L82.4218 8.78706L83.9186 13.3936L80 10.5466L76.0814 13.3936L77.5782 8.78706L73.6596 5.94005H78.5033L80 1.3335Z"
                    stroke="#337202"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3247_1159916">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_3247_1159916">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(18)"
                    />
                  </clipPath>
                  <clipPath id="clip2_3247_1159916">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(36)"
                    />
                  </clipPath>
                  <clipPath id="clip3_3247_1159916">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(54)"
                    />
                  </clipPath>
                  <clipPath id="clip4_3247_1159916">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(72)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex flex-row justify-between">
              <div className=" flex flex-col gap-1">
                <p className=" font-montserrat font-semibold leading-140% text-sm">
                  {windowInfo.title}
                </p>
                <p className=" font-montserrat font-normal text-13px leading-140% text-gray-quick-silver">
                  {windowInfo.text}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className=" whitespace-nowrap font-montserrat font-medium text-base text-label-pink-2 leading-120%">
                  {windowInfo?.price.new}
                </p>
                <p className=" whitespace-nowrap font-montserrat font-medium text-base leading-120% line-through">
                  {windowInfo?.price.old}
                </p>
                <p className=" text-end whitespace-nowrap font-normal text-base leading-140% text-label-orange font-montserrat">
                  {windowInfo?.price.De} <span className=" font-lora">De</span>
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex items-center">
                <div className="w-100px flex justify-center border-b-9px border-primary border-opacity-30 ">
                  <p className="-mb-1.5 font-montserrat font-medium leading-100% text-13px">
                    Подробнее
                  </p>
                </div>
              </div>
              <button
                onMouseEnter={() => setHov('white')}
                onMouseLeave={() => setHov('#337202')}
                className="flex flex-row items-center font-montserrat font-medium leading-100% text-12px text-primary px-5 py-4 bg-gray-light2 hover:bg-primary hover:text-white"
              >
                <svg
                  className=" mr-1.5"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 2.50016C8.8494 2.50016 7.91667 3.4329 7.91667 4.5835V5.00016H12.0833V4.5835C12.0833 3.4329 11.1506 2.50016 10 2.50016ZM13.75 5.00016V4.5835C13.75 2.51243 12.0711 0.833496 10 0.833496C7.92893 0.833496 6.25 2.51243 6.25 4.5835V5.00016H4.16667C3.24619 5.00016 2.5 5.74635 2.5 6.66683V17.5002C2.5 18.4206 3.24619 19.1668 4.16667 19.1668H15.8333C16.7538 19.1668 17.5 18.4206 17.5 17.5002V6.66683C17.5 5.74635 16.7538 5.00016 15.8333 5.00016H13.75ZM12.0833 6.66683V7.50016C12.0833 7.9604 12.4564 8.3335 12.9167 8.3335C13.3769 8.3335 13.75 7.9604 13.75 7.50016V6.66683H15.8333V17.5002H4.16667V6.66683H6.25V7.50016C6.25 7.9604 6.6231 8.3335 7.08333 8.3335C7.54357 8.3335 7.91667 7.9604 7.91667 7.50016V6.66683H12.0833Z"
                    fill={hov}
                  />
                </svg>
                Добавить в корзину
              </button>
            </div>
          </div>
          <div className=" w-full h-4"></div>
        </div>
      )}
    </>
  );
}
