import { useEffect, useState } from 'react';

export default function LinkItemNav({ id, title, setSelectWI, selectWI }) {
  const [moveDiv, setMoveDiv] = useState(false);
  const [hovS, setHovS] = useState(false);

  useEffect(() => {
    if (selectWI === id) {
      setHovS(true);
      setMoveDiv(true);
    } else {
      setHovS(false);
      setMoveDiv(false);
    }
  }, [selectWI]);

  return (
    <div
      onMouseEnter={() => {
        // setMoveDiv(true);
        setSelectWI(id);
      }}
      onMouseLeave={() => {
        // setMoveDiv(false);
        setSelectWI(false);
      }}
      className={`${
        hovS ? 'bg-gray-light' : 'bg-white'
      } relative whitespace-nowrap cursor-pointer transition-all duration-300 flex flex-nowrap items-center justify-between  rounded-32px py-1.5 px-4 font-montserrat text-sm leading-140% font-medium .1380:text-10px .1x01:text-9px`}
    >
      <p className={`${hovS ? 'text-primary-hover' : ''} mr-1`}>{title}</p>
      <div>
        <svg
          className={`${hovS ? 'rotate-180' : ''} transition-all duration-500`}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1092_706791)">
            <path
              d="M7.38542 3.625L5 6.02007L2.60937 3.625L1.875 4.36235L5 7.5L8.125 4.36235L7.38542 3.625Z"
              fill="#337202"
            />
          </g>
          <defs>
            <clipPath id="clip0_1092_706791">
              <rect width="10" height="10" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {moveDiv && (
        <div className="cursor-default absolute -bottom-10 left-0 h-10 w-full"></div>
      )}
    </div>
  );
}
