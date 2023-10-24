import Image from 'next/image';
import Slider from 'react-slick';
import oneHealth from '../../images/templates/1health.svg';
import twoHealth from '../../images/templates/2health.jpg';
import treeHealth from '../../images/templates/3health.jpg';
const Health = ({ refL }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 100000,
        settings: 'unslick',
      },
      {
        breakpoint: 800,
        infinite: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative" ref={refL} id="sec-11">
      <svg
        className="ability ..6x2:h-32 ..6x2:mt-5 absolute left-1/2 -top-6 ..6x2:-top-3 "
        width="184"
        height="183"
        viewBox="0 0 184 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M151.013 93.7301C151.013 93.7301 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.059 15.8079 123.059C15.8079 123.059 39.851 57.2524 64.9368 42.3731C90.0226 27.4937 133.618 51.8245 133.618 51.8245"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M168.192 59.8027C168.192 59.8027 132.964 80.524 105.01 90.496C77.0561 100.468 53.4366 100.739 53.4366 100.739"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M105.01 90.4961L71.0828 73.3172"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M105.01 90.496L91.1736 116.337"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <section className="bg-gray-light pb-28 .1x1:pb-10 ..5x1:pb-0">
        <div className="container__special">
          <p className="absolute ability font-montserrat ..5x2:text-base left-1/2  text-black  text-2xl pt-20 font-medium  ">
            Программы
          </p>
          <p className="text-center font-montserrat ..5x2:text-22px ..5x2:-mt-2 text-black pt-28 italic text-3xl font-medium  ">
            КРАСОТЫ И ЗДОРОВЬЯ
          </p>
          <div className="relative text-center font-montserrat ..5x2:text-13px ..5x2:mb-5 mt-2 mb-12 text-sm">
            Есть проблемы? У нас есть решения!
            <div className=" w-24 bg-white absolute ability -bottom-2 left-1/2 h-3px"></div>
          </div>

          <Slider {...settings} className="flex  ">
            <div>
              <div className="anti  border-primary border  ..7x11:px-1 bg-white relative  pb-96 ..5x2:pb-48 mx-3   mb-5 cursor-pointer transition-all hover:text-white hover:bg-primary sale">
                <p className="..6x04:text-5xl z-10 ..6x04:top-5 text-8xl ability transition-all leading-140% text-gray-platinum ..5x2:-top-3 -top-2 absolute font-montserrat font-bold left-1/2 procent">
                  -30%
                </p>
                <p className=" ability font-medium ..6x04:text-base ..5x2:text-lg text-22px transition-all text-primary ..5x2:top-11 ..5x2:pt-0 pt-2  absolute top-16 z-10 left-1/2 title_sale">
                  «АНТИСТРЕСС»
                </p>
                <p className=" ability font-montserrat font-medium w-full ..5x2:text-lg  ..6x04:text-13px text-2xl text-center  absolute top-24 ..5x2:pt-0 pt-2   ..5x2:top-16 z-10 left-1/2 ">
                  Смотри на мир здоровыми глазами!
                </p>
                <div className="absolute  bottom-0  ..5x2:bottom-24 left-1/2   ability">
                  <p className="absolute left-1/2 ..5x2:top-3 font-medium text-13px     flex items-center text-sm top-50%  ability z-10">
                    Подробнее{' '}
                    <svg
                      className="ml-2 sale_btn mt-0.5 transition-all"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" transition-all"
                        d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z"
                        fill="black"
                      />
                    </svg>
                  </p>
                  <div className="..5x2:absolute  ..5x2:w-36 ..5x2:h-36 headerAbility  left-1/2 ..5x2:-top-14 ">
                    <Image
                      className="object-cover opacity-40"
                      src={oneHealth}
                      width={300}
                      height={300}
                      quality={100}
                      alt="discountImg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative mt-3.5 mx-3 cursor-pointer transition-all   hover:opacity-90">
                <p className="absolute  font-montserrat ..5x2:top-4 ..5x2:left-4  ..7x1:text-base z-10 top-16 text-2xl ..5x2:text-black text-primary text-22px font-medium left-10  ">
                  «ЗДОРОВЫЙ СОН»
                </p>
                <p className="absolute hidden ..5x2:block font-montserrat text-primary ..7x1:text-13px ..5x2:text-xl !leading-140%  ..7x1:top-10 ..5x2:top-16 ..5x2:left-4    z-10 top-32 text-3xl   left-10  ">
                  Чтобы каждое утро
                  <br /> было добрым
                </p>
                <p className="absolute ..5x2:hidden font-montserrat text-black text-26px font-medium  ..7x1:text-13px ..5x2:text-xl !leading-120%  ..7x1:top-10 ..5x2:top-16 ..5x2:left-4    z-10 top-28 text-3xl   left-10  ">
                  Чтобы каждое утро было <br /> добрым
                </p>
                <div className="image-container">
                  <Image
                    className="object-cover image"
                    src={twoHealth}
                    alt="discountImg"
                  />
                </div>

                <p className="absolute ..6x2:text-13px  font-medium  ..7x1:top-24 ..5x2:top-32 font-montserrat ..5x2:left-4   top-52 cursor-pointer z-10 left-10 flex items-center text-sm ">
                  Подробнее{' '}
                  <svg
                    className="ml-2 mt-0.5"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z"
                      fill="black"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div>
              <div className="relative mx-2   transition-all   hover:opacity-90 cursor-pointer">
                <p className="absolute ..7x1:text-base font-montserrat z-10 top-16 text-2xl left-10 ..5x2:left-4 text-22px ..5x2:top-4 font-medium">
                  «ЧИСТАЯ КОЖА»
                </p>
                <p className="absolute ..7x1:text-13px ..5x2:text-xl z-10 top-24 text-3xl text-primary left-10  ..7x1:top-11 ..5x2:top-14 ..5x2:leading-140% leading-120% text-26px ..5x2:left-4">
                  Фитокоррекция <br /> проблемной кожи
                </p>
                <p className="absolute ..7x1:top-24 ..5x2:top-32 ..5x2:left-4 ..5x2:text-13px font-montserrat  font-medium top-48 cursor-pointer z-10 left-10 flex items-center text-sm  ">
                  Подробнее{' '}
                  <svg
                    className="ml-2 mt-0.5"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z"
                      fill="black"
                    />
                  </svg>
                </p>
                <div className="image-container">
                  <Image
                    className="object-cover image"
                    src={treeHealth}
                    width={720}
                    height={900}
                    alt="discountImg"
                  />
                </div>
              </div>
              <div className="mx-2 ..5x1:pb-0 anti programs px-3 ..7x2:px-2 ..5x2:px-8   transition-all  bg-primary pb-2 ..7x1:pb-14 ..6x6:pb-14  ..6x5:pb-20 ..5x2:pb-8 .1x1:pb-5  mt-3 relative">
                <h1 className="text-32px font-montserrat text-center ..5x2:mb-0.5 mb-5 pt-11 ..5x2:text-22px ..5x2:pt-6  text-w text-white">
                  50+ программ
                </h1>
                <p className="text-center hidden ..7x1:px-0 ..6x5:px-10 ..6x4:px-24 ..6x03:px-28 ..6x2:px-32 ..5x5:px-40  ..5x2:block ..5x2:pb-3 ..7x1:pb-0   ..5x2:text-13px   !leading-140% font-montserrat   text-2xl text-white   .1x1:text-xl    ">
                  «Мужское здоровье», «антипаразитарная программа», «бодрость и
                  энергия», «активное долголетие» и др.
                </p>
                <p className="text-center ..5x1:pb-44 ..5x01:pb-40 ..5x2:hidden ..5x2:text-13px !leading-140% font-montserrat ..5x4:pb-24 text-2xl text-white pb-40 .2x1.0:text-xl ..5x3:pb-32 ..7x2:text-base ..7x2:pb-32">
                  «Мужское здоровье», «антипаразитарная <br /> программа»,
                  «бодрость и энергия», «активное <br /> долголетие» и др.
                </p>
                <button className="ability ..5x2:bottom-8 border ..7x001:w-40 text-sm font-medium font-montserrat ..5x2:py-1.5 ..5x2:px-5 ..6x1:bottom-3 border-white absolute bottom-20 py-2 ..5x2:h-8 h-11 px-4  left-1/2 text-white transition-all hover:text-black hover:bg-white-80pe">
                  Все программы
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};
export default Health;
