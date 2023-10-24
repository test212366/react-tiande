import Image from 'next/image';

export default function UserCard({
  img,
  fullName,
  numberContract,
  handlerSubmit,
}) {
  return (
    <div className=" mb-5">
      <div className=" bg-gray-100 flex flex-row pl-2 py-3.5 border border-stroke">
        <div className="flex items-center mr-2">
          <div className="flex w-10 h-10 ">
            <Image
              className="rounded-full"
              src={img}
              width={40}
              height={40}
              quality={100}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1">
            <p className=" font-noto-sans font-medium text-sm leading-140%">
              {fullName}
            </p>
          </div>
          <div className=" mb-2">
            <p className=" font-noto-sans font-normal text-13px leading-120% text-gray-quick-silver">
              {numberContract}
            </p>
          </div>
          <div className="">
            <p
              onClick={handlerSubmit}
              className=" font-montserrat font-medium text-13px leading-100% text-primary cursor-pointer"
            >
              Войти в аккаунт
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
