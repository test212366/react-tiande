import Image from 'next/image';
import { useEffect, useState } from 'react';
import Plus from './Plus';
import SlideTag from './SlideTag';

export default function SlideItem({
  imgRight,
  imgLeft,
  text,
  tags,
  titleTag,
  label,
  textStyles = {},
  underText,
  pluses,
  setWindowInfo,
  fon,
  stopAutoPlay,
  startAutoPlay,
}) {
  const [plus1, setPlus1] = useState(false);
  const [plus2, setPlus2] = useState(false);
  const [plus3, setPlus3] = useState(false);
  const [plus4, setPlus4] = useState(false);
  const [plus5, setPlus5] = useState(false);
  const [plus6, setPlus6] = useState(false);
  const [plus7, setPlus7] = useState(false);
  const [plus8, setPlus8] = useState(false);
  const [plus9, setPlus9] = useState(false);
  const [plus10, setPlus10] = useState(false);

  useEffect(() => {
    pluses?.map((el) => {
      switch (el.num) {
        case '1':
          setPlus1(el);
          break;
        case '2':
          setPlus2(el);
          break;
        case '3':
          setPlus3(el);
          break;
        case '4':
          setPlus4(el);
          break;
        case '5':
          setPlus5(el);
          break;
        case '6':
          setPlus6(el);
          break;
        case '7':
          setPlus7(el);
          break;
        case '8':
          setPlus8(el);
          break;
        case '9':
          setPlus9(el);
          break;
        case '10':
          setPlus10(el);
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <div className="w-full h-full flex ..5x2:flex-col">
      <div className="w-1/2 z-20 h-full flex justify-center items-center bg-white ..5x2:h-1/2 ..5x2:w-full">
        <div className="w-664px h-full mt-20 ..5x2:mt-0 ..5x2:w-full">
          <div
            className={`w-full ..5x2:mt-3 ..5x2:ml-3 ${
              pluses ? ' ..5x2:hidden' : ''
            }`}
          >
            {label && (
              <p className="text-center font-montserrat font-medium text-26px leading-120% ..5x2:leading-140% ..5x2:text-13px text-primary uppercase ..5x2:text-left">
                {label}
              </p>
            )}

            <p
              style={textStyles}
              className="text-center font-montserrat font-medium text-26px leading-140% ..5x2:leading-160% ..5x2:!text-22px mb-6 px-5 ..5x2:pl-0 ..5x2:pr-5 ..5x2:text-left"
            >
              {text}
            </p>

            {underText && (
              <p className="text-center font-montserrat font-normal text-22px leading-140% text-black-70pe px-20 mb-6 ..5x2:text-13px ..5x2:text-left ..5x2:pl-0 ..5x2:pr-5">
                {underText}
              </p>
            )}

            {tags && (
              <>
                <p className="text-center font-montserrat font-normal text-base leading-140% text-gray-quick-silver mb-2 ..5x2:text-13px ..5x2:text-left">
                  {titleTag}
                </p>

                <div className=" flex justify-center flex-wrap gap-2 mb-6 ..5x2:w-full ..5x2:flex-nowrap ..5x2:justify-start ..5x2:overflow-hidden ..5x2:overflow-x-scroll ..5x2:pr-3">
                  {tags.map((el) => (
                    <SlideTag text={el} />
                  ))}
                </div>
              </>
            )}
          </div>

          {pluses && (
            <div className="w-full h-full mx-auto relative">
              {imgLeft && (
                <div className="h-444px flex ..5x2:w-360px ..5x2:h-246px ..5x2:mx-auto">
                  <Image
                    // className=" object-cover"
                    src={imgLeft}
                    quality={100}
                    priority={true}
                  />
                </div>
              )}

              <div className="absolute top-0 mx-auto w-full h-444px ..5x2:w-336px ..5x2:top-3 ..5x2:h-56 conPlusesM">
                {plus1 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute left-13.1% top-19.6%"
                    windowInfo={plus1}
                  />
                )}
                {plus2 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute left-29.82% top-19.6%"
                    windowInfo={plus2}
                  />
                )}
                {plus3 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute left-46.39% top-19.6%"
                    windowInfo={plus3}
                  />
                )}
                {plus4 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute right-28.8% top-19.6%"
                    windowInfo={plus4}
                  />
                )}
                {plus5 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute right-13.1% top-19.6%"
                    windowInfo={plus5}
                  />
                )}

                {plus6 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute left-13.1% bottom-19.6%"
                    windowInfo={plus6}
                  />
                )}
                {plus7 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute left-29.82% bottom-19.6%"
                    windowInfo={plus7}
                  />
                )}
                {plus8 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute left-46.39% bottom-19.6%"
                    windowInfo={plus8}
                  />
                )}
                {plus9 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute right-28.8% bottom-19.6%"
                    windowInfo={plus9}
                  />
                )}
                {plus10 && (
                  <Plus
                    stopAutoPlay={stopAutoPlay}
                    startAutoPlay={startAutoPlay}
                    setWindowInfo={setWindowInfo}
                    styles="absolute right-13.1% bottom-19.6%"
                    windowInfo={plus10}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {fon && (
          <div className="absolute -z-10 w-1/2 h-full hidden ..5x2:flex ..5x2:h-1/2 ..5x2:w-full">
            <Image
              className=" object-cover"
              src={fon}
              quality={100}
              priority={true}
            />
          </div>
        )}
      </div>

      <div className=" w-1/2 z-10 h-full flex ..5x2:h-1/2 ..5x2:w-full">
        <Image
          // className="..5x2:object-cover"
          className="object-cover"
          src={imgRight}
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
}
