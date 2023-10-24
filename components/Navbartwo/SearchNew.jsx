import { useState } from 'react';

export default function SearchNew() {
  const [colorSearch, setColorSearch] = useState('black');

  return (
    <>
      <div
        className=" cursor-pointer ml-6 ..5x2:hidden"
        onMouseEnter={() => setColorSearch('#1F5201')}
        onMouseLeave={() => setColorSearch('black')}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4176_757187)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.75 11C3.75 6.99594 6.99594 3.75 11 3.75C15.0041 3.75 18.25 6.99594 18.25 11C18.25 15.0041 15.0041 18.25 11 18.25C6.99594 18.25 3.75 15.0041 3.75 11ZM11 2.25C6.16751 2.25 2.25 6.16751 2.25 11C2.25 15.8325 6.16751 19.75 11 19.75C13.1462 19.75 15.112 18.9773 16.6342 17.6949L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L17.6949 16.6342C18.9773 15.112 19.75 13.1462 19.75 11C19.75 6.16751 15.8325 2.25 11 2.25Z"
              fill={colorSearch}
            />
          </g>
          <defs>
            <clipPath id="clip0_4176_757187">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="hidden ..5x2:block absolute right-14">
        <svg
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
            fill="#DBDCDA"
          />
        </svg>
      </div>
    </>
  );
}
