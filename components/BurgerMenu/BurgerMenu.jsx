import Image from "next/image"
import BurgerMenuItem from "../BurgerMenuItem/BurgerMenuItem"

const BurgerMenu = ({ src, title, showBurger, setShowBurger }) => {

	return (
		<section className={`fixed top-0  left-0 right-0 bottom-0 z-100 bg-white ${showBurger ? 'fixed' : "hidden"}`}>
			<div className="flex items-center justify-between p-3 h-11">
				<p className="font-montserrat font-medium ">{title}</p>
				<svg onClick={() => setShowBurger(!showBurger)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 4L4 12M4 4L12 12" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
				</svg>

			</div>
			<div className="relative h-12">
				<div className="w-full h-12 imageCustomBurger">
					<Image src={src} className='object-cover ' />
				</div>

				<div>
					<p className="font-noto-sans text-9px text-white-80pe tracking-widest absolute top-2 left-3">Online - каталог</p>
					<p className="font-montserrat text-sm font-medium text-white absolute left-3 top-5">ВЕСНА 2022</p>
				</div>
				<button className="absolute right-3 top-3 font-montserrat text-11px font-medium text-white-80pe  border-b border-white-30pe">Смотреть</button>


			</div>
			<div className=" pb-36 overflow-auto transitionCustom h-full">
				<BurgerMenuItem title={'Спецпредложения'} />
				<BurgerMenuItem title={'De-каталог'} />
				<BurgerMenuItem title={'Для лица'} />
				<BurgerMenuItem title={'Для тела'} />
				<BurgerMenuItem title={'Для волос'} />
				<BurgerMenuItem title={'Парфюм'} />
				<BurgerMenuItem title={'Мужчинам'} />
				<BurgerMenuItem title={'Для детей'} />
				<BurgerMenuItem title={'Для дома'} />
				<div className="absolute left-0 right-0 bottom-0 h-52px p-6px">
					<button onClick={() => setShowBurger(!showBurger)} className="bg-primary w-full h-full rounded font-montserrat font-medium text-xs text-white">Закрыть</button>
				</div>
			</div>



		</section>
	)
}
export default BurgerMenu