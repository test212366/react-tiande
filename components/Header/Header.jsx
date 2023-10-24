import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import Navbartwo from '../Navbartwo/Navbartwo';
import SectionOverNavBar from '../SectionOverNavBar/SectionOverNavBar';
import SectionWithStock from '../SectionWithStock/SectionWithStock';
import SectionWithWarnings from '../SectionWithWarnings/SectionWithWarnings';
import novosty from '../../images/templates/novosty.jpg';
import NavWindowInfo from '../NavWindowInfo/NavWindowInfo';

function Header({ showSearch, setShowSearch, showBurger, setShowBurger }) {
  const [modalLogIn, setModalLogIn] = useState(false);
  const [modalLogUp, setModalLogUp] = useState(false);
  const [showWar, setShowWar] = useState(true),
    showWarHandler = () => {
      setShowWar(false);
    };
  const [scrollMenu, setScrollMenu] = useState(false);
  const [boolLogIn, setBoolLogIn] = useState(false);
  const [objInfoWindow, setObjInfoWindow] = useState({
    1: [
      { img: novosty, text: 'новости' },
      { img: novosty, text: 'контакты' },
      { img: novosty, text: 'благотворительная деятельность' },
      { img: novosty, text: 'экологическая программа' },
      { img: novosty, text: 'брендбук' },
    ],
    2: [
      { img: novosty, text: 'Успех.деньги.карьера.' },
      { img: novosty, text: 'инструменты OBC' },
      { img: novosty, text: 'система бонусов' },
    ],
    3: [
      { img: novosty, text: 'доставка. оплата. возврат.' },
      { img: novosty, text: 'СКИДКИ. ПРОМОКОДЫ. ПОДАРКИ' },
      { img: novosty, text: 'бутики красоты и здоровья' },
      { img: novosty, text: 'oNLINE - ИНТЕНСИВЫ' },
      { img: novosty, text: 'материалы' },
      { img: novosty, text: 'Блог' },
      { img: novosty, text: 'tiandeshopping' },
    ],
    4: [
      { img: novosty, text: 'VKoманде' },
      { img: novosty, text: 'De-отзыв' },
      { img: novosty, text: 'start' },
      { img: novosty, text: 'Active' },
      { img: novosty, text: 'Profi' },
    ],
  });
  const [selectWI, setSelectWI] = useState(false);

  let height1 = useRef(null);
  let height2 = useRef(null);
  let height3 = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerWidth < 1000) return setScrollMenu(false);
      // let sumH =
      // 	height1?.current?.offsetHeight +
      // 	height2?.current?.offsetHeight +
      // 	height3?.current?.offsetHeight;

      let sumH =
        height2?.current?.offsetHeight + height3?.current?.offsetHeight;

      if (window.scrollY >= sumH && sumH !== null) {
        setScrollMenu(true);
      } else if (window.scrollY < sumH && sumH !== null) {
        setScrollMenu(false);
      }
    });
  }, []);

  function logIn() {
    return setModalLogIn(!modalLogIn);
  }

  function logUp() {
    return setModalLogUp(!modalLogUp);
  }

  return (
    <>
      {/* <div ref={height1}>
				<SectionWithStock />
			</div> */}
      <div ref={height2} id="stock">
        {showWar && <SectionWithWarnings showWarHandler={showWarHandler} />}
      </div>
      <div ref={height3}>
        <SectionOverNavBar
          modalLogIn={modalLogIn}
          modalLogUp={modalLogUp}
          logIn={logIn}
          logUp={logUp}
          boolLogIn={boolLogIn}
          setBoolLogIn={setBoolLogIn}
        />
      </div>

      {/* <header className=" max-w-screen-2xl transition-all ..5x2:static sticky ..5x2:block mx-auto -top-1 z-50">
        <NavBar
          showBurger={showBurger}
          setShowBurger={setShowBurger}
          scrollMenu={scrollMenu}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          logIn={logIn}
          boolLogIn={boolLogIn}
        />
      </header> */}

      <header className="max-w-screen-2xl ..5x2:static sticky mx-auto top-0 z-80">
        <Navbartwo
          scrollMenu={scrollMenu}
          logIn={logIn}
          boolLogIn={boolLogIn}
          setSelectWI={setSelectWI}
          selectWI={selectWI}
          setShowBurger={setShowBurger}
        />

        {selectWI && (
          <div
            onMouseEnter={() => setSelectWI(selectWI)}
            onMouseLeave={() => setSelectWI(false)}
            className="windowNavBar h-52 w-full absolute -bottom-52 border-t border-stroke"
          >
            <div className="bg-white h-full w-full flex justify-center items-center gap-6 z-100 ">
              {objInfoWindow[`${selectWI}`]?.map((el) => {
                return <NavWindowInfo img={el.img} text={el.text} />;
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
