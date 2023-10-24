import Image from 'next/image';
import Slider from 'react-slick';
import onepartner from '../../images/templates/partner.jpg';
import twopartner from '../../images/templates/1partnergrow.png';
import PartnersButtonNext from './PartnersButtonNext';
import PartnersButtonPrev from './PartnersButtonPrev';
import partnersMobile from '../../images/templates/partnersMobile.jpg';
import { useEffect, useRef, useState } from 'react';

const Partners = ({ refL }) => {
  const [kolichestvo, setKolichestvo] = useState(1),
    slider = useRef(null);

  // Этот useEffect тоже самое если бы мы сеттили количество в appendDots просто убрали в консоли ошибку

  useEffect(() => {
    if (slider.current) setKolichestvo(slider?.current.props?.children?.length);
  }, [slider?.current]);

  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PartnersButtonPrev />,
    nextArrow: <PartnersButtonNext />,
    appendDots: (dots) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 5,
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '54px',
              padding: '15px',
              paddingInline: '40px',
              width: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ul
              style={{
                margin: '0px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              {dots}
            </ul>
          </div>
        </div>
      );
    },
    customPaging: (i) => (
      <div
        style={{
          background: '#E5E6E4',
          width: 25,
          height: 3,
        }}
      />
    ),

    responsive: [
      {
        breakpoint: 1505,

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <PartnersButtonPrev kolichestvo={kolichestvo} />,
          nextArrow: <PartnersButtonNext kolichestvo={kolichestvo} />,
        },
      },
    ],
  };

  return (
    <div ref={refL} className="relative" id="sec-10">
      <div className="absolute -left-0 ..6x2:w-32 ..5x2:-right-7 foliagePart ..5x2:left-auto ..6x2:h-32">
        <Image
          className="object-cover "
          src={twopartner}
          alt="specialOffersImg"
        />
      </div>
      <section className="container__special relative pb-10 ..5x2:pb-0">
        <svg
          className="absolute ..6x2:h-32  ..6x2:mt-5 left-1/2 ability top-0 "
          width="184"
          height="183"
          viewBox="0 0 184 183"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M151.013 93.73C151.013 93.73 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.058 15.8079 123.058C15.8079 123.058 39.851 57.2523 64.9368 42.373C90.0226 27.4936 133.618 51.8244 133.618 51.8244"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M168.192 59.8028C168.192 59.8028 132.964 80.5241 105.01 90.4961C77.0561 100.468 53.4366 100.74 53.4366 100.74"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.01 90.4961L71.0828 73.3172"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.01 90.496L91.1736 116.337"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="mt-36 absolute left-1/2 font-montserrat font-medium ..5x2:text-22px -top-16 ability text-3xl italic mb-40">
          ПАРТНЁРАМ
        </p>
        <button className="text-primary  font-montserrat ..6x04:text-10px font-medium border absolute  buttonY left-1/2 ability ..5x2:top-36 top-40 ..6x04:px-4 ..6x04:py-6px  ..7x2:px-2  z-10 border-primary mb-8 py-3 h-11 ..5x2:h-auto px-10 transition-all hover:bg-primary hover:text-white  text-xs ..7x2:text-10px ..7x2:py-2">
          Бизнес-возможности
        </button>

        <Slider
          ref={slider}
          {...settings}
          className="pt-64 ..5x2:pt-60 ..6x3:pt-52 ..5x2:px-6 partners "
        >
          <section className="pb-20 ">
            <div className="flex ..5x2:flex-col bg-gray-light">
              <div className="relative  ..6x6:hidden ..5x3:w-full">
                <Image
                  className="object-cover h-full"
                  src={onepartner}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 ..7x01:text-base ..6x3:text-22px ..6x3:top-4 ..6x3:left-4 font-montserrat font-medium text-white text-32px ..7x1:left-2 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе, чем <br /> кажется!
                </p>
              </div>

              <div className="relative image-containerPART hidden ..6x6:block ..5x3:w-full">
                <Image
                  className="object-cover h-full image"
                  src={partnersMobile}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 ..7x01:text-base ..6x3:text-22px ..6x3:top-4 ..6x3:left-4 font-montserrat font-medium text-white text-32px ..7x1:left-3 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе,
                  <br /> чем кажется!
                </p>
              </div>

              <div className="p-10 ..6x3:p-5 ..6x3:h-44 ..6x6:px-3  relative font-montserrat font-medium text-26px ">
                <p className="text-2xl mb-4  whitespace-nowrap ..6x3:hidden">
                  Авто за полцены <br /> совершенно <br />{' '}
                  <span className="italic">БЕСПЛАТНО</span>
                </p>

                <p className="text-2xl mb-2 text-16px font-montserrat ..7x01:text-sm leading-120% whitespace-nowrap hidden ..6x3:block">
                  Авто за полцены совершенно <br />
                  <span className="italic">БЕСПЛАТНО</span>
                </p>
                <small className="..7x2:text-xs ..6x6:absolute ..6x6:top-16 orBonus ..6x3:text-13px  text-base ..5x01:text-sm whitespace-nowrap">
                  или бонусы сразу за две иномарки!
                </small>
                <button className="text-white ..5x2:h-8 font-montserrat ..6x3:py-10px buttonY ..6x3:px-5 hover:bg-white hover:text-primary transition-all text-xs bg-primary py-3 h-11 ..5x2:h-auto px-10 absolute bottom-4 right-7 ..5x01:right-4 ..6x03:bottom-4">
                  Подробнее
                </button>
              </div>
            </div>
          </section>

          <section className="pb-20 ">
            <div className="flex ..5x2:flex-col bg-gray-light">
              <div className="relative  ..6x6:hidden ..5x3:w-full">
                <Image
                  className="object-cover h-full"
                  src={onepartner}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 ..7x01:text-base ..6x3:text-22px ..6x3:top-4 ..6x3:left-4 font-montserrat font-medium text-white text-32px ..7x1:left-2 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе, чем <br /> кажется!
                </p>
              </div>

              <div className="relative image-containerPART hidden ..6x6:block ..5x3:w-full">
                <Image
                  className="object-cover h-full image"
                  src={partnersMobile}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 ..7x01:text-base ..6x3:text-22px ..6x3:top-4 ..6x3:left-4 font-montserrat font-medium text-white text-32px ..7x1:left-3 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе,
                  <br /> чем кажется!
                </p>
              </div>

              <div className="p-10 ..6x3:p-5 ..6x3:h-44 ..6x6:px-3  relative font-montserrat font-medium text-26px ">
                <p className="text-2xl mb-4  whitespace-nowrap ..6x3:hidden">
                  Авто за полцены <br /> совершенно <br />{' '}
                  <span className="italic">БЕСПЛАТНО</span>
                </p>

                <p className="text-2xl mb-2 text-16px font-montserrat ..7x01:text-sm leading-120% whitespace-nowrap hidden ..6x3:block">
                  Авто за полцены совершенно <br />
                  <span className="italic">БЕСПЛАТНО</span>
                </p>
                <small className="..7x2:text-xs ..6x6:absolute ..6x6:top-16 orBonus ..6x3:text-13px  text-base ..5x01:text-sm whitespace-nowrap">
                  или бонусы сразу за две иномарки!
                </small>
                <button className="text-white ..5x2:h-8 font-montserrat ..6x3:py-10px buttonY ..6x3:px-5 hover:bg-white hover:text-primary transition-all text-xs bg-primary py-3 h-11 ..5x2:h-auto px-10 absolute bottom-4 right-7 ..5x01:right-4 ..6x03:bottom-4">
                  Подробнее
                </button>
              </div>
            </div>
          </section>
          <section className="pb-20 ">
            <div className="flex ..5x2:flex-col bg-gray-light">
              <div className="relative  ..6x6:hidden ..5x3:w-full">
                <Image
                  className="object-cover h-full"
                  src={onepartner}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 ..7x01:text-base ..6x3:text-22px ..6x3:top-4 ..6x3:left-4 font-montserrat font-medium text-white text-32px ..7x1:left-2 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе, чем <br /> кажется!
                </p>
              </div>

              <div className="relative image-containerPART hidden ..6x6:block ..5x3:w-full">
                <Image
                  className="object-cover h-full image"
                  src={partnersMobile}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 ..7x01:text-base ..6x3:text-22px ..6x3:top-4 ..6x3:left-4 font-montserrat font-medium text-white text-32px ..7x1:left-3 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе,
                  <br /> чем кажется!
                </p>
              </div>

              <div className="p-10 ..6x3:p-5 ..6x3:h-44 ..6x6:px-3  relative font-montserrat font-medium text-26px ">
                <p className="text-2xl mb-4  whitespace-nowrap ..6x3:hidden">
                  Авто за полцены <br /> совершенно <br />{' '}
                  <span className="italic">БЕСПЛАТНО</span>
                </p>

                <p className="text-2xl mb-2 text-16px font-montserrat ..7x01:text-sm leading-120% whitespace-nowrap hidden ..6x3:block">
                  Авто за полцены совершенно <br />
                  <span className="italic">БЕСПЛАТНО</span>
                </p>
                <small className="..7x2:text-xs ..6x6:absolute ..6x6:top-16 orBonus ..6x3:text-13px  text-base ..5x01:text-sm whitespace-nowrap">
                  или бонусы сразу за две иномарки!
                </small>
                <button className="text-white ..5x2:h-8 font-montserrat ..6x3:py-10px buttonY ..6x3:px-5 hover:bg-white hover:text-primary transition-all text-xs bg-primary py-3 h-11 ..5x2:h-auto px-10 absolute bottom-4 right-7 ..5x01:right-4 ..6x03:bottom-4">
                  Подробнее
                </button>
              </div>
            </div>
          </section>
          <section className="pb-20 ">
            <div className="flex ..5x2:flex-col bg-gray-light">
              <div className="relative  ..6x6:hidden ..5x3:w-full">
                <Image
                  className="object-cover h-full"
                  src={onepartner}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 ..7x01:text-base ..6x3:text-22px ..6x3:top-4 ..6x3:left-4 font-montserrat font-medium text-white text-32px ..7x1:left-2 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе, чем <br /> кажется!
                </p>
              </div>

              <div className="relative image-containerPART hidden ..6x6:block ..5x3:w-full">
                <Image
                  className="object-cover h-full image"
                  src={partnersMobile}
                  width={1028}
                  height={432}
                  alt="discountImg"
                />
                <p className="absolute top-10 left-10 ..7x01:text-base ..6x3:text-22px ..6x3:top-4 ..6x3:left-4 font-montserrat font-medium text-white text-32px ..7x1:left-3 ..7x1:top-2 ..7x1:text-xl ..6x4:text-22px">
                  Авто мечты ближе,
                  <br /> чем кажется!
                </p>
              </div>

              <div className="p-10 ..6x3:p-5 ..6x3:h-44 ..6x6:px-3  relative font-montserrat font-medium text-26px ">
                <p className="text-2xl mb-4  whitespace-nowrap ..6x3:hidden">
                  Авто за полцены <br /> совершенно <br />{' '}
                  <span className="italic">БЕСПЛАТНО</span>
                </p>

                <p className="text-2xl mb-2 text-16px font-montserrat ..7x01:text-sm leading-120% whitespace-nowrap hidden ..6x3:block">
                  Авто за полцены совершенно <br />
                  <span className="italic">БЕСПЛАТНО</span>
                </p>
                <small className="..7x2:text-xs ..6x6:absolute ..6x6:top-16 orBonus ..6x3:text-13px  text-base ..5x01:text-sm whitespace-nowrap">
                  или бонусы сразу за две иномарки!
                </small>
                <button className="text-white ..5x2:h-8 font-montserrat ..6x3:py-10px buttonY ..6x3:px-5 hover:bg-white hover:text-primary transition-all text-xs bg-primary py-3 h-11 ..5x2:h-auto px-10 absolute bottom-4 right-7 ..5x01:right-4 ..6x03:bottom-4">
                  Подробнее
                </button>
              </div>
            </div>
          </section>
        </Slider>
      </section>
    </div>
  );
};
export default Partners;
