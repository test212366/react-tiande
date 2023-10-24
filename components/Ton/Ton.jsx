import Image from "next/image"

const Ton = ({ src, isNone, setCurrentTonF, currentTon, length }) => {
	return (
		<>
			{isNone ? <div onClick={() => setCurrentTonF(length)} className={`h-11 hover:bg-gray-light transition-all .1x1:h-8 ..5x2:overflow-hidden .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2  bg-gray-light flex items-center justify-center   mr-2 ${currentTon === length ? '!border-black' : ""}`}>
				<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"><Image src={src} /> </div>

				<hr className="px w-14 text-gray absolute rotSearchHover" />
				<hr className="px w-14 text-gray absolute unrotSearchHover" />
				<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-20 -top-14 h-42px w-48 bg-white">
					<p className="text-13px text-black-70pe font-montserrat flex items-center">Тон: {`${length < 10 ? `0${length}` : length}`} / <span className="ml-1 text-label-pink-2">нет в наличии</span></p>
					<div className="w-18px -bottom-1 rotSearchHover left-24 -z-10 h-18px bg-white absolute ">

					</div>

				</div>
			</div> : <div onClick={() => setCurrentTonF(length)} className={`h-11 hover:bg-gray-light transition-all .1x1:h-8 .1x1:!w-11  w-52px cursor-pointer relative itemTon mb-2 border flex items-center justify-center border-stroke mr-2 ${currentTon === length ? '!border-black' : ""}`}>
				<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0">
					<Image src={src} />
				</div>

				<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-4 -top-14 h-42px w-86px bg-white">
					<p className="text-13px text-black-70pe font-montserrat">Тон: {`${length < 10 ? `0${length}` : length}`}</p>
					<div className="w-18px -bottom-1 rotSearchHover left-8 -z-10  h-18px bg-white absolute ">

					</div>
				</div>
			</div>}



		</>

	)
}
export default Ton