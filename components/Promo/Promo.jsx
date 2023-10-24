import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTimerHook } from '../../hooks/useTimerHook';
import bg from '../../images/templates/bgL.jpg';
import itemleas from '../../images/templates/itemleas.png';

const Promo = ({ refL, showPromo }) => {
	const [time, setTime] = useState({
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00'
	})


	useEffect(() => {
		setInterval(() => {
			const timeLocal = useTimerHook('Thu Dec 30 2022 17:43:29 GMT+0300 (Москва, стандартное время)') // Пример присылаемой даты с бека
			setTime(timeLocal)
		}, 1000)
	}, [])


	return (
		<div className="relative promo parallax" ref={refL} id='sec-7'>
			<div className="absolute parralax-layer parallax-image">
				<Image
					className="object-cover ..5x3:!hidden"
					src={bg}
					width={1920}
					height={727}
					alt="specialOffersImg"
				/>
			</div>

			<div className="absolute  ..7x01:-left-4 ..5x3:relative  ..5x3:left-0 top-20 left-40 .4x1:top-7 .4x1:left-20 ..5x3:flex ..5x3:flex-col     text-white">
				<p className="text-6xl   .2x1:text-5xl ..5x1:text-4xl ..6x3:text-22px ..5x2:px-8 leading-120 font-montserrat  ..5x2:w-full">
					Скидка 20% по <br /> промокоду «Click»
				</p>
				<p className="mt-6 font-medium text-xl .2x1:text-lg  leading-120 font-montserrat ..5x2:px-8 ..5x1:text-base  ..5x2:w-full .2x1:mt-2">
					На аквагель для лица серии «FreshClick»
				</p>
				<div className='..5x2:ml-8 flex flex-nowrap mt-8'>
					<button className="font-montserrat ..5x2:py-0 buttonClickPromo border ..7x001:px-15 .2x1:py-3 ..7x2:px-12 .2x1:px-16 border-gray bg-gray   text-gray-quick-silver px-24 py-5 transition-all  ">
						CLICK
					</button>
					<button className="font-montserrat hover:bg-white hover:text-primary hoverWhitePromo transition-all  ..5x2:h-11  ..7x001:pr-7 ..7x001:pl-12  ..5x2:text-xs  border border-gray ..7x2:px-9 ..7x2:pr-5 px-10 .2x1:py-3 py-5 relative ">
						{' '}
						<svg
							className="absolute noneF ..7x2:left-3 ..7x001:left-6 ..5x2:top-3 ..5x2:mr-2 .2x1:top-4 top-6 left-4"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_2388_695761)">
								<mask
									id="mask0_2388_695761"
									maskUnits="userSpaceOnUse"
									x="2"
									y="2"
									width="16"
									height="16"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M8.50031 2.5H16.0003C16.8646 2.5 17.5004 3.13579 17.5004 4.00001V11.5C17.5004 12.3643 16.8646 13 16.0003 13H13V16C13 16.8642 12.3643 17.5 11.5 17.5H4.00001C3.13579 17.5 2.5 16.8642 2.5 16V8.49993C2.5 7.63571 3.13579 6.99992 4.00001 6.99992H7.0003V4.00001C7.0003 3.13579 7.63609 2.5 8.50031 2.5ZM7.0003 8.49993H4.00001V16H11.5V13H8.50031C7.63609 13 7.0003 12.3643 7.0003 11.5V8.49993ZM8.49959 3.9999V11.4999H15.9996V3.9999H8.49959Z"
										fill="white"
									/>
								</mask>
								<g mask="url(#mask0_2388_695761)">
									<rect
										x="0.999603"
										y="1.0001"
										width="18.0001"
										height="18.0001"
										fill="white"
									/>
								</g>
							</g>
							<defs>
								<clipPath id="clip0_2388_695761">
									<rect width="20" height="20" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<svg className=" hidden z-20 absolute noneFHover ..7x2:left-3 ..7x001:left-6 ..5x2:top-3 ..5x2:mr-2 .2x1:top-4 top-6 left-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask0_3448_254678" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
								<path fillRule="evenodd" clipRule="evenodd" d="M6.50031 0.5H14.0003C14.8646 0.5 15.5004 1.13579 15.5004 2.00001V9.50004C15.5004 10.3643 14.8646 11 14.0003 11H11V14C11 14.8642 10.3643 15.5 9.50004 15.5H2.00001C1.13579 15.5 0.5 14.8642 0.5 14V6.49993C0.5 5.63571 1.13579 4.99992 2.00001 4.99992H5.0003V2.00001C5.0003 1.13579 5.63609 0.5 6.50031 0.5ZM5.0003 6.49993H2.00001V14H9.50004V11H6.50031C5.63609 11 5.0003 10.3643 5.0003 9.50004V6.49993ZM6.49959 1.9999V9.49994H13.9996V1.9999H6.49959Z" fill="white" />
							</mask>
							<g mask="url(#mask0_3448_254678)">
								<rect x="-1.00049" y="-1" width="18.0001" height="18.0001" fill="#337202" />
							</g>
						</svg>

						Copy <span className='..5x2:hidden'>HTML</span>
					</button>
				</div>
				<div className="flex ..7x2:ml-6 ..7x001:ml-3 ..5x2:ml-8 ..5x2:!w-auto mt-20 ..5x2:p-1 ..5x2:mt-8 ..5x2:!h-auto  ..6x04:pr-5    ..5x3:pl-0 ..5x3:translate-x-0  .5x1:mt-5 timer pl-80  pr-40   timer__wrapper">
					<div className='flex ..7x001:!py-0.5 timer-bg ..6x03:p-2 ..5x2:p-4  pr-20 pt-6 pb-6' >
						<div className="mr-3 ..7x2:mr-4 ..5x2:mr-8 flex flex-col items-center">
							<div className="..5x2:mb-0 font-montserrat ..6x03:text-22px font-bold text-5xl ..6x04:mr-5  ..5x1:text-3xl mr-20 mb-4">
								{time.days}
							</div>
							<div className="mr-20 font-montserrat text-white-80pe ..6x03:text-11px ..6x04:mr-5 ..5x1:text-sm">DAYS</div>
						</div>
						<div className="mr-3 ..7x2:mr-4 ..5x2:mr-8 flex flex-col items-center">
							<div className="..5x2:mb-0 font-montserrat ..6x03:text-22px font-bold text-5xl mr-20 mb-4 ..6x04:mr-5 ..5x1:text-3xl">
								{time.hours}
							</div>
							<div className="mr-20 font-montserrat text-white-80pe ..6x03:text-11px ..6x04:mr-5 ..5x1:text-sm">HOURS</div>
						</div>
						<div className="mr-3  ..7x2:mr-4 ..5x2:mr-8 flex  flex-col items-center">
							<div className="..5x2:mb-0 font-montserrat ..6x03:text-22px   font-bold text-5xl mr-20 mb-4 ..5x1:text-3xl ..6x04:mr-5">
								{time.minutes}
							</div>
							<div className=" mr-20 font-montserrat text-white-80pe ..6x03:text-11px ..6x04:mr-5 ..5x1:text-sm ">MINS</div>
						</div>
						<div className="mr-3 ..7x001:mr-4 w-10  flex flex-col items-center">
							<div className="..5x2:mb-0 font-montserrat ..6x03:text-22px font-bold text-5xl mb-4 ..5x1:text-3xl">{time.seconds}</div>
							<div className="..5x1:text-sm font-montserrat text-white-80pe ..6x03:text-11px">SECS</div>
						</div>
					</div>

				</div>
				<div className='relative  ..5x3:flex  ..5x3:justify-center'>
					<div className="absolute  ..6x1:h-72 ..6x1:w-72 ..6x1:-mt-2 ..5x3:-mt-8  ..5x3min:hidden  ..5x3:relative  ..5x3:-top-16 ..5x3:right-0 right-40 top-40 ..5x1:top-7 .4x1:right-0 .2x1:w-1/3 .5x1:top-16">
						<div onClick={showPromo} className=" bg-gray px-4 ..6x3:top-52 left-1/2 ability .1x1:top-36 ..5x2:p-3 ..5x2:h-8 ..5x2:w-8  py-2 .2x1:top-56 text-lg moreP rounded-full absolute cursor-pointer hover:text-white hover:bg-nude-3">
							<svg width="10" className='plusDiscItem' height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
							</svg>
							<section className="absolute ..5x2:!hidden ..7x2:w-72 ..7x2:-left-16 ..7x001:w-80 ..7x001:-left-20  hidden flex-col justify-between text-black .1x1:-left-100px -left-60 -top-44 font-montserrat rounded-lg w-390px h-200px p-4 info cursor-default">
								<span className="flex">
									<svg
										width="16"
										height="15"

										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
									<svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
									<svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
									<svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
									<svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
								</span>
								<div className="flex flex-row justify-between">
									<p className=" font-semibold text-sm leading-140% w-250px mt-3">
										Аквагель для глаз и лица
									</p>
									<div>
										<p className=" text-label-pink-2 font-medium text-base mt-3 whitespace-nowrap">
											₽ 764.00
										</p>
										<p className=" text-black font-medium text-base line-through whitespace-nowrap">
											₽ 764.00
										</p>
									</div>
								</div>
								<div className="flex justify-between">
									<p className=" text-gray-quick-silver font-normal -mt-7 w-76% leading-140% text-13px">
										Гель успокоит кожу, устранит чувство стянутости и предотвратит шелушение
									</p>
									<p className=" text-base font-normal leading-140% text-label-orange">
										64 De
									</p>
								</div>
								<div className="flex justify-between items-center mt-3 ">
									<button className="font-medium text-black text-13px leading-100% relative z-10 hover:text-primary transition-all">
										Подробнее
										<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
									</button>
									<button className="..7x2:w-36 font-medium text-xs leading-100% px-4 py-3 text-primary bg-gray flex items-center transition-all hover:opacity-50">
										<svg
											className="mr-2"
											width="16"
											height="20"
											viewBox="0 0 16 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z"
												fill="#337202"
											/>
										</svg>{' '}
										Добавить в корзину
									</button>
								</div>
							</section>
						</div>
						<div className='.1x1:mt-4 ..7x01:mr-3 m-auto ..6x3:h-56 ..6x3:w-56 ..5x4:mt-7 ..6x3:mt-24 ..6x1:mt-6'>
							<Image
								className="object-cover z-20 "
								src={itemleas}
								width={497}
								height={497}
								alt="specialOffersImg"
							/>
						</div>
					</div>
				</div>

			</div>
			<div className="absolute  ..5x3:hidden ..5x3:relative  ..5x3:-top-16 ..5x3:right-0 right-40 top-40 ..5x1:top-7 .4x1:right-0 .2x1:w-1/3 .5x1:top-16">

				<div className=" bg-gray px-4 .1x1:top-48 py-4 .2x1:top-56 text-lg moreP rounded-full absolute cursor-pointer hover:text-white hover:bg-nude-3">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
					</svg>
					<section className="  absolute hidden flex-col justify-between text-black -left-60 -top-44 font-montserrat rounded-lg w-390px h-200px p-4 info cursor-default">
						<span className="flex">
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
						</span>
						<div className="flex flex-row justify-between">
							<p className=" font-semibold text-sm leading-140% w-250px mt-3">
								Аквагель для глаз и лица
							</p>
							<div>
								<p className=" text-label-pink-2 font-medium text-base mt-3 whitespace-nowrap">
									₽ 764.00
								</p>
								<p className=" text-black font-medium text-base line-through whitespace-nowrap">
									₽ 764.00
								</p>
							</div>
						</div>
						<div className="flex justify-between">
							<p className="..7x001:w-20 text-gray-quick-silver font-normal -mt-7 w-76% leading-140% text-13px">
								Гель успокоит кожу, устранит чувство стянутости и предотвратит шелушение
							</p>
							<p className=" text-base font-normal leading-140% text-label-orange">
								64 De
							</p>
						</div>
						<div className="flex justify-between items-center mt-3 ">
							<button className=" font-medium text-black text-13px leading-100% relative z-10 hover:text-primary transition-all">
								Подробнее
								<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
							</button>
							<button className="..7x01:w-40 font-medium text-xs leading-100% px-4 py-3 text-primary bg-gray flex items-center transition-all hover:opacity-50">
								<svg
									className="mr-2 "
									width="16"
									height="20"

									viewBox="0 0 16 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z"
										fill="#337202"
									/>
								</svg>{' '}
								Добавить в корзину
							</button>
						</div>
					</section>
				</div>
				<div>
					<Image
						className="object-cover z-20"
						src={itemleas}
						alt="specialOffersImg"
						width={497}
						height={497}
					/>
				</div>
			</div>
		</div>
	);
};
export default Promo;
