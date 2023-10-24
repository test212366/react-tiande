import Image from 'next/image';

export default function NavWindowInfo({ text, img }) {
  return (
    <div className=" w-195px h-164px flex flex-col justify-between items-center cursor-pointer">
      <div className="flex rounded-md bg-gray-light w-full h-120px">
        {img && <Image className="" src={img} quality={100} />}
      </div>
      <p className="flex items-center justify-center  text-center w-full h-8 font-montserrat font-semibold text-xs leading-120% uppercase">
        {text}
      </p>
    </div>
  );
}
