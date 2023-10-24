import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as icons from '../../images/constsIcons';

import tree from '../../images/templates/treeItemSearch.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'
import one from '../../images/templates/basket1.png'
import { Navigation } from 'swiper';
import { useRef } from 'react';

export default function SeaActItem({ obj }) {
	const [currentColor, setCurrentColor] = useState('1');
	const slider = useRef(null)
	const [buy, setBuy] = useState(false),
		[showAct, setShowAct] = useState(false)

	function truncate(str, maxlength) {
		return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
	}

	const currentColorHandler = (num) => {
		setCurrentColor(num);
	};


	const nextSlide = () => {
		if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slideNext();
	},
		prevSlide = () => {
			if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slidePrev();
		},
		showActL = () => setShowAct(!showAct)


	return (
		<div className=" min-h-317px ..6x5:w-44 ..6x5:h-80 max-w-278px w-full ..6x03:mx-auto  h-428px flex justify-center   bg-white transition-all relative p-2 mx-3">
			<div className="flex flex-col  items-center max-w-252px mx-auto mt-5">
				<div className="content_card flex flex-col items-center transition-all">
					<div className="absolute flex left-0 top-0 z-20 px-2 pt-2 gap-0.5">
						{obj.present && (
							<div className="flex items-center">
								<svg
									className=" ..6x3:w-5 ..6x3:h-5"
									width="26"
									height="26"
									viewBox="0 0 26 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z"
										stroke="#C5C1AB"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<small className="font-semibold ..6x03:text-sm ..6x03:ml-3 text-2xl leading-140% font-montserrat ml-4 text-gray-quick-silver">
									4=5
								</small>
							</div>
						)}
					</div>

					<div className="absolute top-5 right-3 z-10 cursor-pointer">
						<Image src={icons.ICON_HEART_GRAY} width="22" height="18" />
					</div>

					<div className="">
						<Image
							className=" object-cover"
							src={obj.img}
							width={218}
							height={218}
							quality={100}
						/>
					</div>

					<div className=" absolute bottom-36 ..6x5:bottom-28  flex flex-row justify-between items-end w-full mb-2 px-3">
						<div className="flex items-center cursor-pointer">
							{obj.iTab && (
								<p onClick={showActL} className="text-13px  ..6x5:text-11px font-normal font-montserrat flex items-center leading-140% text-black-70pe">
									<svg
										className=" mr-1 ..6x5:-mt-1 "
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="8" cy="8" r="7.5" stroke={`${showAct ? '#337202' : "#DBDCDA"} `} />
										<path
											d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
											fill={`${showAct ? '#337202' : "#DBDCDA"} `}
										/>
									</svg>
									Состав
								</p>
							)}
						</div>
						<div className="flex flex-row items-center">

							<svg className='..6x5:w-3 ..6x5:h-3 mr-1' width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.75 10.75C7.75 10.75 4.5 11 2.75 9C1 7 1 1 1 1C1 1 7 0.75 9 2.25C11 3.75 10.5 8 10.5 8" stroke="#337202" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M11 11C11 11 8.20518 8.88788 6.5 7C4.79483 5.11213 4 3.25 4 3.25" stroke="#337202" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M6.5 7L6.75 3.75" stroke="#337202" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M6.5 7L4 6.75" stroke="#337202" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
							</svg>

							<p className=" font-montserrat font-medium text-13px leading-140% text-gray-quick-silver">
								1.4 Б
							</p>
						</div>
					</div>
					<div className=" absolute bottom-76px ..6x5:bottom-14  px-1.5 ">
						<p className="card_text ..6x2:text-10px text-13px font-montserrat font-normal leading-140% text-center text-gray-quick-silver tracking-widest uppercase">
							{obj.text}
						</p>
					</div>
					{showAct && <div className={`absolute  z-10  -mb-0.5 bottom-14  left-0 right-0  `}>
						<div className='relative w-full h-24  px-11 bg-gray-light2 py-4 pt-6'>

							<Swiper ref={slider} slidesPerView={2} className="mySwiperAct">

								<SwiperSlide>
									<div className='relative  rounded overflow-hidden itemSlideDrop'>


										<div className='absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center'>
											<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z" stroke="#C5C1AB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>

										</div>
										<Image src={one} width={'100%'} height={'100%'} />
									</div></SwiperSlide>
								<SwiperSlide> <div className=' rounded overflow-hidden itemSlideDrop'>
									<Image width={'100%'} height={'100%'} src={twoI} />
								</div></SwiperSlide>
								<SwiperSlide> <div className='ml-1.5 rounded overflow-hidden itemSlideDrop'>
									<Image width={'100%'} height={'100%'} src={tree} />
								</div></SwiperSlide>
								<SwiperSlide>
									<div className='relative  rounded overflow-hidden itemSlideDrop'>


										<div className='absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center'>
											<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z" stroke="#C5C1AB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>

										</div>
										<Image src={one} width={'100%'} height={'100%'} />
									</div></SwiperSlide>
								<SwiperSlide> <div className=' rounded overflow-hidden itemSlideDrop'>
									<Image width={'100%'} height={'100%'} src={twoI} />
								</div></SwiperSlide>
								<SwiperSlide> <div className='ml-1.5 rounded overflow-hidden itemSlideDrop'>
									<Image width={'100%'} height={'100%'} src={tree} />
								</div></SwiperSlide>

							</Swiper>
							<button onClick={prevSlide} className='absolute left-5 top-10'>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z" fill="black" />
								</svg>
							</button>
							<button onClick={nextSlide} className='absolute right-5 top-10'>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z" fill="black" fillOpacity="0.7" />
								</svg>

							</button>
						</div>

					</div>}


					{obj.date && (
						<div className=" absolute bottom-133px bottomCustom ..6x2:bottom-32  flex flex-row justify-center items-center">
							<p className="text-xs font-montserrat ..6x2:text-11px text-center text-black-70pe tracking-widest">
								До 15.06.22
							</p>
						</div>
					)}

					{obj.priceSale && (
						<div className="flex flex-col absolute bottom-11 ..6x5:bottom-9">
							<div className=" flex flex-row font-montserrat font-normal leading-140% text-base mb-2 mt-1">
								<p className="text-center mr-2 text-gray-quick-silver line-through font-montserrat ..6x5:text-11px">
									₽ {obj.priceSale.old}
								</p>
								<p className="text-center text-label-pink-2 font-montserrat ..6x5:text-11px">
									₽ {obj.priceSale.new}
								</p>
							</div>
						</div>
					)}
				</div>

				{true && (
					<div className=" absolute bottom-0 w-full p-2">
						{buy === false ? (
							<>
								<button
									onClick={() => setBuy(true)}
									className="..6x5:!h-8 ..6x5:py-0 ..6x03:hidden w-full bg-gray-light2 text-primary py-3 font-montserrat whitespace-nowrap text-xs hover:text-white hover:bg-primary transition-all cursor-pointer"
								>
									+ Добавить в заказ
								</button>
								<button
									onClick={() => setBuy(true)}
									className="..6x5:!h-8 ..6x5:py-0 font-medium ..6x03:block hidden w-full bg-gray-light2 text-primary py-3 font-montserrat whitespace-nowrap text-xs hover:text-white hover:bg-primary transition-all cursor-pointer"
								>
									+ Купить
								</button>
							</>
						) : (
							<button
								className="..6x5:!h-8 ..6x5:py-0 w-full bg-primary text-white py-3 font-montserrat whitespace-nowrap text-xs transition-all cursor-pointer"
							>
								В корзине
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
