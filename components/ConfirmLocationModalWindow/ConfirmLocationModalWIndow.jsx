import { useState } from 'react';

const ConfirmLocationModalWindow = () => {
  const [show, setShow] = useState(false);

  const handleSet = () => setShow(!show);
  return (
    <section
      className={`absolute z-50  ..5x2:fixed ..6x6:bottom-16 ..6x6:h-40 ..6x5:bottom-24 ..5x2:bottom-24 ..5x2:h-44 ..5x2:!top-auto ..5x2:left-0 ..5x2:right-0 ..5x2:w-auto ..5x2:flex ..5x2:justify-center confirm p-8 w-96 h-36 bg-white top-10 left-14 z-9   ${
        show ? 'hiddenCustom' : 'block'
      }`}
    >
      <div className="relative">
        <p className="text-base ..5x2:text-center">
          Ваш город <span className="font-semibold">Москва?</span>
        </p>

        <div className="flex">
          <button className="px-10 font-medium font-montserrat ..7x11:px-8 ..7x11:h-8 ..7x01:px-6 ..7x11:p-0     py-3 mr-4  text-xs mt-4 text-primary border border-primary whitespace-nowrap">
            Нет, другой
          </button>
          <button
            onClick={handleSet}
            className="px-11 font-medium font-montserrat ..7x11:px-9 ..7x01:px-7 ..7x11:h-8 ..7x11:p-0  text-xs bg-primary text-white   py-3 mt-4   border-2 border-primary whitespace-nowrap"
          >
            Да, верно
          </button>
        </div>
        <button onClick={handleSet} className="absolute -top-3 -right-3">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 9M1 1L9 9"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
export default ConfirmLocationModalWindow;
