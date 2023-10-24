import Link from 'next/link';
import React from 'react';

export default function ShoppingBag({ scrollMenu, setIsHover, closeHover }) {
  return (
    <div
      className="relative mx-4 cursor-pointer"
      onMouseLeave={closeHover}
      onMouseEnter={setIsHover}
    >
      <Link href="/">
        <div className="flex flex-row justify-center">
          <div className=" flex flex-row h-6">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3C10.6193 3 9.5 4.11929 9.5 5.5V6H14.5V5.5C14.5 4.11929 13.3807 3 12 3ZM16.5 6V5.5C16.5 3.01472 14.4853 1 12 1C9.51471 1 7.5 3.01472 7.5 5.5V6H5C3.89543 6 3 6.89543 3 8V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V8C21 6.89543 20.1046 6 19 6H16.5ZM14.5 8V9C14.5 9.55228 14.9477 10 15.5 10C16.0523 10 16.5 9.55228 16.5 9V8H19V21H5V8H7.5V9C7.5 9.55228 7.94772 10 8.5 10C9.05228 10 9.5 9.55228 9.5 9V8H14.5Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="-mt-1 bg-primary rounded-2xl w-8 h-19px font-noto-sans font-medium text-10px leading-120% text-white flex justify-center items-center">
              <p className="mb-px">12</p>
            </div>
          </div>

          <span className=" ml-1 text-13px font-normal self-center">
            ₽ 22323.00
          </span>
        </div>
      </Link>
    </div>
  );
}
