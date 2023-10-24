import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SlideItemWithoutPluses({
  imgRight,
  textLabel,
  title,
  text,
  titleStyle = {},
  testFon,
}) {
  return (
    <div className="w-full h-full flex ..5x2:flex-col">
      <div className="w-1/2 h-full relative bg-white ..5x2:h-1/2 ..5x2:w-full">
        <div className="h-full flex">
          <Image className="" src={testFon} quality={100} />
        </div>
        <div className="absolute left-15.42% bottom-345px w-664px .6x3:w-500px .2x1.0:w-410px  ..5x2:w-336px ..5x2:bottom-0 ..5x2:top-3 ..5x2:left-3 mmm">
          {textLabel && (
            <p className=" font-montserrat font-medium text-26px leading-120% text-primary ..5x2:text-13px">
              {textLabel}
            </p>
          )}

          <p
            style={titleStyle}
            className=" font-montserrat text-52px leading-160% -tracking-1px ..5x2:text-22px .2x1.0:text-32px"
          >
            {title}
          </p>

          <p className=" mt-6 ..5x2:mt-2 text-black-70pe max-w-500px w-full font-montserrat font-normal leading-140% text-22px ..5x2:text-13px">
            {text}
          </p>

          <div className=" mt-14 ..5x2:mt-6">
            <button className="cursor-pointer py-5 ..5x2:py-2.5 px-10 ..5x2:px-5 bg-primary text-white font-montserrat font-medium text-xs leading-100% border border-primary mr-6 ..5x2:mr-2 hover:bg-white hover:text-primary ..5x2:text-xs">
              Каталог
            </button>
            <button className="cursor-pointer py-5 ..5x2:py-2.5 px-10 ..5x2:px-5 bg-white text-primary font-montserrat font-medium text-xs leading-100% border border-primary hover:bg-primary hover:text-white ..5x2:text-xs">
              О нас
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full flex ..5x2:h-1/2 ..5x2:w-full">
        <Image
          className="object-cover"
          src={imgRight}
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
}
