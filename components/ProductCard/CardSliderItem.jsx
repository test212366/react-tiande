import Image from 'next/image';

export default function CardSliderItem({ photo, iText }) {
  return (
    <div
      className={`h-full flex items-center justify-center ${
        iText === 'Акции' && 'pt-5'
      }`}
    >
      {iText === 'Акции' && (
        <div className="absolute top-9 -left-0.5 z-10 flex items-center justify-center text-white bg-black-70pe w-42px h-17px rounded-xl ..5x2:top-18px">
          <p className=" font-montserrat font-medium text-11px leading-140%">
            400 ₽
          </p>
        </div>
      )}
      <div className=" ..5x2:hidden bg-white rounded w-60px h-60px">
        <Image
          className="rounded"
          src={photo}
          quality={100}
          width={60}
          height={60}
        />
      </div>

      <div className="hidden ..5x2:block bg-white rounded w-52px h-52px">
        <Image
          className="rounded"
          src={photo}
          quality={100}
          width={52}
          height={52}
        />
      </div>
    </div>
  );
}
