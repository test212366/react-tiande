import { useState } from 'react';

export default function SliderBtnNext({ onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="z-10"
      onClick={onClick}
    >
      {hover ? (
        <svg
          className="..5x2:h-8 ..5x2:w-8"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22" cy="22" r="22" fill="black" />
          <path
            d="M28.33 22L20.03 30L19 29L23 23L23.7 22L23 21L19 15L20.03 14L28.33 22Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          className="..5x2:h-8 ..5x2:w-8"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22" cy="22" r="22" fill="white" />
          <path
            d="M28.33 22L20.03 30L19 29L23 23L23.7 22L23 21L19 15L20.03 14L28.33 22Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  );
}
