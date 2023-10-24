import Image from 'next/image';
import React from 'react';
import * as icons from '../../images/constsIcons';

export default function SectionFooterAgreement() {
  return (
    <div className="flex flex-row justify-between items-center .2x1.0:border-none .2x1.0:h-auto .2x1.0:mt-5 .2x1.0:flex-col .2x1.0:justify-start .2x1.0:items-start h-76px border-t border-gray-quick-silver">
      <div className=" text-13px font-medium font-montserrat flex .2x1.0:flex-col">
        <span className=".2x1.0:mb-3 ..6x6:text-11px">
          © 2022 «TianDe», Все права защищены{' '}
        </span>
        <div className=".2x1.0:mb-3">
          <span className="  ..6x6:text-11px font-medium text-gray-quick-silver text-13px leading-100% pb-0.5 .2x1.0:font-normal font-montserrat ml-100px .2x1.0:ml-0 underline cursor-pointer">
            Пользовательское соглашение
          </span>
          <span className="..7x01:mr-0  ..6x6:text-11px font-medium text-13px leading-100% text-gray-quick-silver font-montserrat .2x1.0:font-normal mx-4 pb-0.5 underline cursor-pointer">
            Карта сайта
          </span>
        </div>
      </div>
      <div className="flex flex-row ..5x2:justify-center items-center">
        <div className="..5x2:w-10 ..5x2:h-6 ..5x2:mb-2 px-2">
          <Image src={icons.ICON_MIR} width={46} height={13} />
        </div>
        <div className="..5x2:w-10 ..5x2:h-6 px-2">
          <Image src={icons.ICON_UNIONPAY} width={46} height={30} />
        </div>
        <div className="..5x2:w-10 ..5x2:h-6 px-2">
          <Image src={icons.ICON_MASTERCARD} width={26} height={16} />
        </div>
        <div className="..5x2:w-10 ..5x2:mb-1 ..5x2:h-6 pl-2">
          <Image src={icons.ICON_VISA} width={40} height={12} />
        </div>
      </div>
    </div>
  );
}
