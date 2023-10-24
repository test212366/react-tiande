import Image from 'next/image';
import * as icons from '../../images/constsIcons';

export default function SectionNavButtons() {
  return (
    <div className="flex flex-row">
      <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border border-gray px-4 py-2.5 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
        <Image src={icons.ICON_DOOR} width={18} height={17} />
        <span className=".1x1:text-xs .1x1:ml-2 ml-2">Вход</span>
      </div>
      <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border border-gray px-4 py-2.5 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
        <Image src={icons.ICON_HUMAN} width={14} height={16} />
        <span className=".1x1:text-xs .1x1:ml-2 ml-2">Регистрация</span>
      </div>
    </div>
  );
}
