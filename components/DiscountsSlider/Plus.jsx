import { useState } from 'react';
import useWindowSize from '../utils/useWindowSize';
import WindowInfoPlus from '../WindowInfoPlus/WindowInfoPlus';

export default function Plus({
  styles,
  windowInfo,
  setWindowInfo,
  stopAutoPlay,
  startAutoPlay,
}) {
  const [vis, setVis] = useState(false);

  let size = useWindowSize();

  const handlerMobileClick = () => {
    stopAutoPlay();
    setWindowInfo(windowInfo);
    setInterval(() => {
      startAutoPlay();
    }, 20000);
  };

  return (
    <>
      {size.width > 1000 ? (
        <div
          onMouseEnter={() => {
            stopAutoPlay();
            setVis(true);
          }}
          onMouseLeave={() => {
            startAutoPlay();
            setVis(false);
          }}
          className={`${
            styles ? styles : ''
          } flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 bg-white-80pe hover:cursor-pointer hover:bg-label-green plus`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z"
              fill="black"
            />
          </svg>

          <WindowInfoPlus vis={vis} windowInfo={windowInfo} />
        </div>
      ) : (
        <div
          // onTouchStart={() => setWindowInfo(windowInfo)}
          onClick={() => handlerMobileClick()}
          className={`${
            styles ? styles : ''
          } flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500  bg-white-80pe hover:cursor-pointer hover:bg-label-green plus`}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.25 8.33329C4.25 8.74751 4.58578 9.08329 5 9.08329C5.41421 9.08329 5.75 8.74751 5.75 8.33329V5.74996H8.33333C8.74754 5.74996 9.08333 5.41417 9.08333 4.99996C9.08333 4.58575 8.74754 4.24996 8.33333 4.24996H5.75V1.66663C5.75 1.25241 5.41421 0.916626 5 0.916626C4.58578 0.916626 4.25 1.25241 4.25 1.66663V4.24996H1.66666C1.25245 4.24996 0.916664 4.58575 0.916664 4.99996C0.916664 5.41417 1.25245 5.74996 1.66666 5.74996H4.25V8.33329Z"
              fill="black"
            />
          </svg>
        </div>
      )}
    </>
  );
}
