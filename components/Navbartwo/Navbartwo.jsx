import { useState } from 'react';
import Logo from '../ui/Logo/Logo';
import LinkItemNav from './LinkItemNav';
import ScrollNavBtns from './ScrollNavBtns';
import SearchNew from './SearchNew';
import ShoppingBagNew from './ShoppingBagNew';

export default function Navbartwo({
  scrollMenu,
  logIn,
  boolLogIn,
  setSelectWI,
  selectWI,
  setShowBurger,
}) {
  return (
    <>
      {scrollMenu ? (
        <nav
          className={`!h-20 !mt-5 transition-all duration-300 bg-white w-full px-20 flex justify-between items-center .6x2:px-1`}
        >
          <div
            className={`${
              selectWI ? ' border-white' : ' border-stroke'
            } border-b h-full w-full flex justify-between items-center`}
          >
            <div className="">
              <Logo />
            </div>

            <div className="flex flex-row gap-4 -ml-28 .2x00:-ml-40 .1750:-ml-52 .1700:gap-1.5 .1x1:-ml-44">
              <LinkItemNav
                selectWI={selectWI}
                setSelectWI={setSelectWI}
                title="Каталог"
              />
              <LinkItemNav
                selectWI={selectWI}
                id={1}
                title="О компании"
                setSelectWI={setSelectWI}
              />
              <LinkItemNav
                selectWI={selectWI}
                id={2}
                title="Бизнес-возможности"
                setSelectWI={setSelectWI}
              />
              <LinkItemNav
                selectWI={selectWI}
                id={3}
                title="Покупателям"
                setSelectWI={setSelectWI}
              />
              <LinkItemNav
                selectWI={selectWI}
                id={4}
                title="Программа лояльности"
                setSelectWI={setSelectWI}
              />

              <ShoppingBagNew />
            </div>

            <ScrollNavBtns
              scrollMenu={scrollMenu}
              boolLogIn={boolLogIn}
              logIn={logIn}
            />

            <SearchNew />
          </div>
        </nav>
      ) : (
        <nav
          className={`transition-all duration-300 bg-white w-full h-100px px-20 flex justify-between items-center .4x1:px-1 ..5x2:h-11 relative`}
        >
          <div
            className={`transition-all h-full w-full flex justify-between items-center`}
          >
            <div
              onClick={() => setShowBurger(true)}
              className="hidden ..5x2:block absolute left-3"
            >
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
                  d="M2 3.81818C2 2.81403 2.81403 2 3.81818 2H9.27273C10.2769 2 11.0909 2.81403 11.0909 3.81818V9.27273C11.0909 10.2769 10.2769 11.0909 9.27273 11.0909H3.81818C2.81403 11.0909 2 10.2769 2 9.27273V3.81818ZM9.27273 3.81818H3.81818V9.27273H9.27273V3.81818ZM12.9091 3.81818C12.9091 2.81403 13.7231 2 14.7273 2H20.1818C21.186 2 22 2.81403 22 3.81818V9.27273C22 10.2769 21.186 11.0909 20.1818 11.0909H14.7273C13.7231 11.0909 12.9091 10.2769 12.9091 9.27273V3.81818ZM20.1818 3.81818H14.7273V9.27273H20.1818V3.81818ZM2 14.7273C2 13.7231 2.81403 12.9091 3.81818 12.9091H9.27273C10.2769 12.9091 11.0909 13.7231 11.0909 14.7273V20.1818C11.0909 21.186 10.2769 22 9.27273 22H3.81818C2.81403 22 2 21.186 2 20.1818V14.7273ZM9.27273 14.7273H3.81818V20.1818H9.27273V14.7273ZM12.9091 13.8182C12.9091 13.3161 13.3161 12.9091 13.8182 12.9091H21.0909C21.593 12.9091 22 13.3161 22 13.8182C22 14.3203 21.593 14.7273 21.0909 14.7273H13.8182C13.3161 14.7273 12.9091 14.3203 12.9091 13.8182ZM16.5455 17.4545C16.5455 16.9525 16.9525 16.5455 17.4545 16.5455H21.0909C21.593 16.5455 22 16.9525 22 17.4545C22 17.9566 21.593 18.3636 21.0909 18.3636H17.4545C16.9525 18.3636 16.5455 17.9566 16.5455 17.4545ZM12.9091 21.0909C12.9091 20.5888 13.3161 20.1818 13.8182 20.1818H21.0909C21.593 20.1818 22 20.5888 22 21.0909C22 21.593 21.593 22 21.0909 22H13.8182C13.3161 22 12.9091 21.593 12.9091 21.0909Z"
                  fill="#DBDCDA"
                  stroke="white"
                  stroke-width="0.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="..5x2:absolute navLogo">
              <Logo />
            </div>

            <div className="flex flex-row -ml-28 gap-4 .2x1:gap-1.5 .1x01:-ml-8 ..5x2:hidden">
              <LinkItemNav
                selectWI={selectWI}
                setSelectWI={setSelectWI}
                title="Каталог"
              />
              <LinkItemNav
                selectWI={selectWI}
                id={1}
                setSelectWI={setSelectWI}
                title="О компании"
              />
              <LinkItemNav
                selectWI={selectWI}
                id={2}
                setSelectWI={setSelectWI}
                title="Бизнес-возможности"
              />
              <LinkItemNav
                selectWI={selectWI}
                id={3}
                setSelectWI={setSelectWI}
                title="Покупателям"
              />
              <LinkItemNav
                selectWI={selectWI}
                id={4}
                setSelectWI={setSelectWI}
                title="Программа лояльности"
              />

              <ShoppingBagNew />
            </div>

            <SearchNew />

            <div className="hidden ..5x2:block absolute right-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8621 6.72414C12.8905 6.72414 13.7241 5.89046 13.7241 4.86207C13.7241 3.83368 12.8905 3 11.8621 3C10.8337 3 10 3.83368 10 4.86207C10 5.89046 10.8337 6.72414 11.8621 6.72414Z"
                  fill="#DBDCDA"
                />
                <path
                  d="M11.8621 14.1724C12.8905 14.1724 13.7241 13.3387 13.7241 12.3103C13.7241 11.282 12.8905 10.4483 11.8621 10.4483C10.8337 10.4483 10 11.282 10 12.3103C10 13.3387 10.8337 14.1724 11.8621 14.1724Z"
                  fill="#DBDCDA"
                />
                <path
                  d="M11.8621 21C12.8905 21 13.7241 20.1663 13.7241 19.1379C13.7241 18.1095 12.8905 17.2759 11.8621 17.2759C10.8337 17.2759 10 18.1095 10 19.1379C10 20.1663 10.8337 21 11.8621 21Z"
                  fill="#DBDCDA"
                />
              </svg>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
