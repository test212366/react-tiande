import { useState } from 'react';

export default function SliderBtnPrev({ onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="z-10 "
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
            d="M16.0001 22L24.3001 30L25.3301 29L21.3301 23L20.6301 22L21.3301 21L25.3301 15L24.3001 14L16.0001 22Z"
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
            d="M16.0001 22L24.3001 30L25.3301 29L21.3301 23L20.6301 22L21.3301 21L25.3301 15L24.3001 14L16.0001 22Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  );
}
