import Image from 'next/image';
import React, { useState } from 'react';
import * as icons from '../../images/constsIcons';

export default function SectionWithWarnings({ showWarHandler }) {
  return (
    <article className="flex justify-center z-100 items-center min-h-42px bg-nude-2 font-noto-sans font-medium text-sm">
      <div className="container-base p-3 pr-8 w-full relative flex justify-center items-center ..6x03:font-montserrat ..6x03:text-10px ..6x03:leading-140%">
        <div className="">
          <strong>Обратите внимание!</strong> По некоторым направлениям возможно
          увеличение сроков доставки траспортными компаниями
        </div>
        <div
          className="absolute right-4 cursor-pointer"
          onClick={showWarHandler}
        >
          <Image src={icons.ICON_CANCLE} width={10} height={10} />
        </div>
      </div>
    </article>
  );
}
