import React from 'react';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import LinkNavBarItem from '../LinkNavBarItem/LinkNavBarItem';
import { useState } from 'react';

export default function LinksHeader({ scrollMenu, setCloseHover, setIsHover }) {
  const [show, setShow] = useState({
    showCatal: false,
    showCompany: false,
    showBis: false,
    showBuyers: false,
    showLoal: false,
  });

  return (
    <article className="flex ..5x2:hidden whitespace-nowrap flex-row justify-center items-center p-0 h-8 ">
      <LinkNavBarItem
        setShow={setShow}
        scrollMenu={scrollMenu}
        show={show}
        title="Каталог"
      />
      <LinkNavBarItem
        setShow={setShow}
        scrollMenu={scrollMenu}
        show={show}
        title="О компании"
      />
      <LinkNavBarItem
        setShow={setShow}
        scrollMenu={scrollMenu}
        show={show}
        title="Бизнес-возможности"
      />
      <LinkNavBarItem
        setShow={setShow}
        scrollMenu={scrollMenu}
        show={show}
        title="Покупателям"
      />
      <LinkNavBarItem
        setShow={setShow}
        scrollMenu={scrollMenu}
        show={show}
        title="Программа лояльности"
      />

      <ShoppingBag
        closeHover={setCloseHover}
        setIsHover={setIsHover}
        scrollMenu={scrollMenu}
      />
    </article>
  );
}
