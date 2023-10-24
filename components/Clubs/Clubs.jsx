import Image from 'next/image';
import one from '../../images/templates/rembg.png';
import two from '../../images/templates/2rembg.png';

function Clubs({ refL }) {
	return (
		<section ref={refL} id='sec-13' className="relative h360 bg-nude-2 mt-16 .1x1:mt-14">
			<div className="absolute ..5x2:blur-sm h-80 w-80 right-0 bottom-0  ..5x2:-bottom-10   ..5x2:w-40 ..5x2:h-40 .4x1:-bottom-32">
				<Image className="object-cover " src={one} width={486} height={486} alt="specialOffersImg" />
			</div>
			<div className="absolute -left-12  -top-24 h-72  w-72 ..5x2:-left-7 ..5x2:-top-0 ..5x2:w-40 ..5x2:h-40 .4x1:-bottom-32">
				<Image className="object-cover " width={357} height={357} src={two} alt="specialOffersImg" />
			</div>



			<div>
				<p className='font-lora text-6xl  border-white text-white pt-8 top-6 ..5x2:top-10 pb-7 px-6 ..5x2:text-4xl absolute ability left-1/2 border-4 customWB rounded-50 border-dashed'>De</p>
			</div>

			<p className="text-26px font-montserrat font-medium pt-32 -mt-1 absolute -top-8 left-1/2 ability ..5x2:text-16px w-full text-center">
				Программа лояльности
			</p>
			<p className="ability w-full left-1/2 absolute text-32px italic top-32  font-montserrat font-medium ..5x2:top-32 ..5x2:-mt-3   text-center ..5x2:text-22px  ">
				ВСТУПАЙ В КЛУБ
			</p>
			<div className="..5x2:hidden pt-44 text-18px relative font-montserrat font-normal text-center mt-4 pb-48 ..5x2:text-13px">
				Покупай любимые продукты, зарабатывай DeCoins, оплачивай <br /> ими
				следующие заказы!
				<div className='w-24 h-3px ability absolute hrSea left-1/2  bg-white'></div>
			</div>
			<div className="hidden relative ..5x2:block ..5x2:-mt-3 pt-40 text-18px font-montserrat font-normal px-3 text-center   pb-44 ..5x2:text-13px">
				Покупай любимые продукты, зарабатывай DeCoins, оплачивай ими
				следующие заказы!
				<div className='w-24 ..6x3:bottom-40   ..6x3:top-auto ..5x2:top-44  mt-1 ..7x01:bottom-38 h-3px ability absolute hrSea left-1/2  bg-white'></div>

			</div>
			<div className="..6x2:w-full ..6x2:flex ..6x2:justify-center ..7x001:ml-2 absolute left-1/2 ability z-10 bottom-20 ..5x2:bottom-24 ">
				<button className="mr-4 font-medium ..7x11:text-10px border-2   py-3 px-6 text-white bg-primary border-primary transition-all font-montserrat ..5x2:py-6px ..5x2:px-5  text-xs hover:bg-white hover:text-primary ">
					Вступить в клуб
				</button>
				<button className="mr-4 font-medium ..7x11:text-10px border h-11 ..5x2:h-auto py-3 px-6 text-primary bg-white border-primary transition-all font-montserrat font-medium hover:bg-primary hover:text-white ..5x2:py-6px ..5x2:px-8  text-xs">
					Подробнее
				</button>
			</div>
		</section>
	);
}
export default Clubs;
