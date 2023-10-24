import Image from 'next/image';
import { useRef } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import nabor from '../../images/templates/nabor.png';
import { Navigation } from 'swiper';

import fourN from '../../images/templates/fourNab.png';
import fiveN from '../../images/templates/fiveNab.png';
import treeN from '../../images/templates/treeNab.png';

import * as icons from '../../images/constsIcons';

export default function SpecialOfferItem({
	obj,
	isSearchI,
	srcSliderImgTwo,
	srcSliderImgTree,
	isSearchItem,
	srcSliderImgOne,
	src,
	ml,
	buttonDE,
	isActions,
}) {
	const [currentColor, setCurrentColor] = useState('1');
	const [hoverHeart, setHoverHeart] = useState(false);
	const [liked, setLike] = useState(false);

	const setLikeF = () => {
		setLike(!liked);
		setHoverHeart(false);
	};

	const divBlock = useRef(null);
	const currentColorHandler = (num) => {
		setCurrentColor(num);
	};

	const showHoverHeart = () => {
		if (hoverHeart) setHoverHeart(false);
		else setHoverHeart(true);
	};

	const [showSost, setShowSost] = useState(false),
		[showAct, setShowAct] = useState(false);
	const slider = useRef(null);

	const nextSlide = () => {
		if (slider.current !== null && slider.current.swiper !== null)
			slider.current.swiper.slideNext();
	},
		prevSlide = () => {
			if (slider.current !== null && slider.current.swiper !== null)
				slider.current.swiper.slidePrev();
		},
		showSlide = () => setShowSost(!showSost),
		showActL = () => setShowAct(!showAct);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		swipe: false,
		slidesToScroll: 1,
		dotsClass: 'slick-dots slick-thumb',
		appendDots: (dots) => {
			return (
				<div
					ref={divBlock}
					style={{
						display: 'flex',

						justifyContent: 'center',
						position: 'absolute',
						bottom: -5,
					}}
				>
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<ul
							style={{
								margin: '0px',
								display: 'flex',
								alignItems: 'flex-end',
								justifyContent: 'center',
							}}
						>
							{dots}
						</ul>
					</div>
				</div>
			);
		},
	};
	if (!isSearchI) {
		return (
			<div
				className={`${obj.isSpecialProductDetail ? 'bg-white' : ''} ${obj.isSpecialProductDetail ? '..7x1:!m-0' : ''
					} ${!obj.img ? 'overflow-hidden' : ''} ${obj.fullImg ? '!p-0' : ''
					} min-h-317px relative ..6x03:h-317px ${obj.isDetails ? '..6x1:h-380px ..7x1:!w-full' : ''
					} h-428px flex justify-center  relative mt-2 p-2 border border-white hoverButton hover:border-gray active_card mx-3 ${obj.isDetails
						? '!ml-0 hover:border-white !mt-0 ..7x1:!mr-0 ..5x2:mr-6 mr-42px'
						: ''
					}`}
			>
				<div
					className={`hidden ${obj.fullImg
						? '!block aboslute top-0 !h-56 left-0 w-full ..6x03:!hidden customWidthImg right-0'
						: ''
						} ${obj.isSlider ? '!hidden' : ''}`}
				>
					<Image
						className=" object-cover  "
						src={obj.img || treeN}
						width={!obj.fullImg ? 218 : ''}
						height={!obj.fullImg ? 218 : ''}
					/>
				</div>
				<div
					className={`flex flex-col   items-center max-w-252px mx-auto mt-5 ${obj.fullImg ? '!mt-0' : ''
						}`}
				>
					<div
						className={`  absolute flex left-0 top-0 z-20 px-2 pt-2 gap-0.5 ${obj.hit && obj.new && obj.sale && 'flex-wrap w-40'
							}`}
					>
						{obj.hit && (
							<small className="w-60px bg-label-yellow  font-noto-sans font-medium text-xs ..6x03:text-9px leading-120% px-5 py-1 samples ..6x03:px-2.5 ..6x03:py-0.5">
								HIT!
							</small>
						)}

						{obj.new && (
							<small className="mr-1 w-60px justify-center samples font-noto-sans font-medium text-xs ..6x03:text-9px border flex items-center   px-3 py-0.5 ..6x03:py-0 ..6x03:px-1.5 leading-120% border-gray-quick-silver">
								NEW
							</small>
						)}

						{obj.sale && (
							<small className="samples w-60px bg-label-pink-2 justify-center flex border-2 border-label-pink-2 text-white font-noto-sans font-medium ..6x03:text-9px text-xs leading-120% ..6x03:px-1.5 ..6x03:py-0 px-3 py-0.5 ">
								-15%
							</small>
						)}
						{obj.isGif && obj.fullImg && (
							<svg
								className="absolute left-0 -top-0.5 ..6x1:h-7 ..6x1:w-20"
								width="106"
								height="36"
								viewBox="0 0 106 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0 0H106L94.6021 18L106 36H0V0Z" fill="white" />
							</svg>
						)}
						{obj.isGif && (
							<div
								className={`p-2  ${obj.fullImg
									? '   pr-5   overflow-hidden py-0 absolute top-0 left-0 '
									: ''
									}`}
							>
								<div className="flex items-center relative w-full  ">
									<svg
										className="..6x1:h-4 ..6x1:mr-1 ..6x1:w-4"
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z"
											stroke="#C5C1AB"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="font-montserrat ml-2 font-semibold mt-0.5 ..6x1:text-sm text-2xl text-black-70pe">
										{obj.gifTitle}
									</p>
								</div>
							</div>
						)}
					</div>

					{obj.pDay && (
						<>
							<div
								className={`absolute flex ..6x03:hidden items-center justify-center   top-6 left-2 z-20 border-3.5px border-double border-label-green bg-white rounded-56px ${obj.fiveNabor && obj.pDay ? '!top-12 !left-2 !mt-2' : ''
									} mt-2.5 p-px w-60px h-60px  ${obj.isSpecialProductDetail && obj.onePday ? '-top-1  ' : ''
									}`}
							>
								<p className=" text-center text-label-green text-10px p-10">
									ТОВАР ДНЯ
								</p>
							</div>
							<div
								className={`absolute hidden z-20   ..6x03:flex items-center justify-center top-6 left-2  border border-label-green bg-white rounded-56px mt-0.5 p-px w-9 h-9 ${obj.fiveNabor && obj.pDay
									? '!top-14 !left-14 ..6x03:!left-3 ..6x03:!top-7  !z-20'
									: ''
									}`}
							>
								<p className=" text-center text-label-green text-7px p-10">
									ТОВАР ДНЯ
								</p>
							</div>
						</>
					)}
					{obj.fourNabor && (
						<div className="absolute ..7x1:h-9 ..7x1:w-9 top-10px left-3 z-10">
							<Image src={fourN} />
						</div>
					)}
					{obj.fiveNabor && (
						<div
							className={`absolute ..7x1:h-9 ..7x1:w-9 top-9 left-2 z-10 ${obj.fiveNabor && obj.pDay
								? '!top-14 !left-14 !z-20 ..6x03:!top-7 ..6x03:h-9 ..6x03:w-9 ..6x03:!left-10 ..6x03:!mt-0.5'
								: ''
								}`}
						>
							<Image src={fiveN} />
						</div>
					)}
					{obj.treeNabor && (
						<div className="absolute ..7x1:h-9 ..7x1:w-9 top-10px left-2 z-10">
							<Image src={treeN} />
						</div>
					)}
					{obj.isDetails && (
						<div
							onClick={setLikeF}
							onMouseEnter={showHoverHeart}
							onMouseLeave={showHoverHeart}
							className={`absolute ${liked ? 'top-4 right-0.5' : ''
								} top-4 ..7x1:top-2 right-10px ..6x03:right-1 z-20 cursor-pointer`}
						>
							{liked ? (
								<svg
									width="42"
									height="38"
									viewBox="0 0 42 38"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g filter="url(#filter0_d_1939_1125459)">
										<path
											d="M25.5022 5.00001C24.6291 4.99851 23.7677 5.20077 22.9865 5.59072C22.2052 5.98066 21.5258 6.54752 21.0022 7.24621C20.293 6.30266 19.3051 5.606 18.1782 5.25482C17.0513 4.90365 15.8426 4.91573 14.7229 5.28936C13.6033 5.663 12.6295 6.37926 11.9393 7.3368C11.2492 8.29434 10.8776 9.44467 10.8772 10.625C10.8772 17.3621 20.2373 22.6813 20.6357 22.9044C20.7477 22.9671 20.8739 23 21.0022 23C21.1305 23 21.2567 22.9671 21.3687 22.9044C23.0902 21.8961 24.7059 20.7173 26.1914 19.3856C29.4665 16.438 31.1272 13.4905 31.1272 10.625C31.1255 9.13368 30.5323 7.70393 29.4778 6.6494C28.4233 5.59487 26.9935 5.0017 25.5022 5.00001Z"
											fill="#FF6363"
										/>
									</g>
									<defs>
										<filter
											id="filter0_d_1939_1125459"
											x="0.877197"
											y="0"
											width="40.25"
											height="38"
											filterUnits="userSpaceOnUse"
											colorInterpolationFilters="sRGB"
										>
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="5" />
											<feGaussianBlur stdDeviation="5" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_1939_1125459"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_1939_1125459"
												result="shape"
											/>
										</filter>
									</defs>
								</svg>
							) : (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.4578 19.1008L12.3542 19.2044L12.2403 19.1008C7.32207 14.6381 4.07084 11.6872 4.07084 8.69482C4.07084 6.62398 5.62398 5.07084 7.69482 5.07084C9.28937 5.07084 10.8425 6.10627 11.3913 7.51444H13.3172C13.8659 6.10627 15.4191 5.07084 17.0136 5.07084C19.0845 5.07084 20.6376 6.62398 20.6376 8.69482C20.6376 11.6872 17.3864 14.6381 12.4578 19.1008ZM17.0136 3C15.212 3 13.4828 3.83869 12.3542 5.15368C11.2256 3.83869 9.49646 3 7.69482 3C4.50572 3 2 5.49537 2 8.69482C2 12.5984 5.52044 15.7978 10.8529 20.6332L12.3542 22L13.8556 20.6332C19.188 15.7978 22.7084 12.5984 22.7084 8.69482C22.7084 5.49537 20.2027 3 17.0136 3Z"
										fill={`${!liked && hoverHeart ? '#FF6363' : '#EDEEEC'}`}
									></path>
								</svg>
							)}
						</div>
					)}
					{obj.noIsHeart ? (
						''
					) : obj.fullImg ? (
						<svg
							className={`absolute ${liked ? 'top-4 right-0.5' : ''
								} ..6x5:right-5 top-3 ..6x5:h-8 ..6x5:w-8 ..7x1:top-2 right-3 ..6x03:right-3 z-20 ..5x2:h-9 ..5x2:w-9 cursor-pointer`}
							width="48"
							height="48"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g filter="url(#filter0_b_3624_1022452)">
								<circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.8" />
							</g>
							<path
								d="M23.9748 17.4793L24.3542 17.9214L24.7336 17.4793C25.7708 16.2709 27.3631 15.5 29.0136 15.5C31.9272 15.5 34.2084 17.7721 34.2084 20.6948C34.2084 22.4822 33.4069 24.1479 31.8945 25.9981C30.3767 27.8551 28.1958 29.8362 25.5197 32.2628L25.519 32.2635L24.3542 33.3238L23.1895 32.2635L23.1887 32.2628C20.5127 29.8362 18.3317 27.8551 16.8139 25.9981C15.3016 24.1479 14.5 22.4822 14.5 20.6948C14.5 17.7721 16.7813 15.5 19.6948 15.5C21.3453 15.5 22.9377 16.2709 23.9748 17.4793Z"
								fill="white"
								stroke="#EDEEEC"
							/>
							<defs>
								<filter
									id="filter0_b_3624_1022452"
									x="-4"
									y="-4"
									width="56"
									height="56"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
									<feComposite
										in2="SourceAlpha"
										operator="in"
										result="effect1_backgroundBlur_3624_1022452"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_backgroundBlur_3624_1022452"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					) : (
						<div
							onClick={setLikeF}
							onMouseEnter={showHoverHeart}
							onMouseLeave={showHoverHeart}
							className={`absolute ${liked ? 'top-4 right-0.5' : ''
								} top-5  right-3   z-20 cursor-pointer`}
						>
							{liked ? (
								<svg
									className="absolute ..6x5:w-38px  ..6x5:h-34px right-0 top-0.5"
									width="42"
									height="38"
									viewBox="0 0 42 38"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g filter="url(#filter0_d_1939_1125459)">
										<path
											d="M25.5022 5.00001C24.6291 4.99851 23.7677 5.20077 22.9865 5.59072C22.2052 5.98066 21.5258 6.54752 21.0022 7.24621C20.293 6.30266 19.3051 5.606 18.1782 5.25482C17.0513 4.90365 15.8426 4.91573 14.7229 5.28936C13.6033 5.663 12.6295 6.37926 11.9393 7.3368C11.2492 8.29434 10.8776 9.44467 10.8772 10.625C10.8772 17.3621 20.2373 22.6813 20.6357 22.9044C20.7477 22.9671 20.8739 23 21.0022 23C21.1305 23 21.2567 22.9671 21.3687 22.9044C23.0902 21.8961 24.7059 20.7173 26.1914 19.3856C29.4665 16.438 31.1272 13.4905 31.1272 10.625C31.1255 9.13368 30.5323 7.70393 29.4778 6.6494C28.4233 5.59487 26.9935 5.0017 25.5022 5.00001Z"
											fill="#FF6363"
										/>
									</g>
									<defs>
										<filter
											id="filter0_d_1939_1125459"
											x="0.877197"
											y="0"
											width="40.25"
											height="38"
											filterUnits="userSpaceOnUse"
											colorInterpolationFilters="sRGB"
										>
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="5" />
											<feGaussianBlur stdDeviation="5" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_1939_1125459"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_1939_1125459"
												result="shape"
											/>
										</filter>
									</defs>
								</svg>
							) : (
								<svg
									className="absolute right-0 top-0 ..6x5:h-5 ..6x5:w-5"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.4578 19.1008L12.3542 19.2044L12.2403 19.1008C7.32207 14.6381 4.07084 11.6872 4.07084 8.69482C4.07084 6.62398 5.62398 5.07084 7.69482 5.07084C9.28937 5.07084 10.8425 6.10627 11.3913 7.51444H13.3172C13.8659 6.10627 15.4191 5.07084 17.0136 5.07084C19.0845 5.07084 20.6376 6.62398 20.6376 8.69482C20.6376 11.6872 17.3864 14.6381 12.4578 19.1008ZM17.0136 3C15.212 3 13.4828 3.83869 12.3542 5.15368C11.2256 3.83869 9.49646 3 7.69482 3C4.50572 3 2 5.49537 2 8.69482C2 12.5984 5.52044 15.7978 10.8529 20.6332L12.3542 22L13.8556 20.6332C19.188 15.7978 22.7084 12.5984 22.7084 8.69482C22.7084 5.49537 20.2027 3 17.0136 3Z"
										fill={`${!liked && hoverHeart ? '#FF6363' : '#EDEEEC'}`}
									></path>
								</svg>
							)}
						</div>
					)}

					{!obj.img ? (
						<svg
							className=" ..6x03:w-full ..6x03:absolute top-0 ..6x5:-top-3  left-0 right-0  ..6x03:h-40 "
							width="278"
							height="238"
							viewBox="0 0 278 238"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<mask
								id="mask0_1939_1032750"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="278"
								height="238"
							>
								<rect width="278" height="238" fill="white" />
							</mask>
							<g mask="url(#mask0_1939_1032750)">
								<rect width="278" height="238" fill="#FCFDFB" />
								<path
									d="M123.833 146.834C128.695 144.744 133.274 143.617 137.57 143.452C141.867 143.287 147.399 144.025 154.167 145.667"
									stroke="#DBDCDA"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								<path
									d="M137.886 150.333C136.991 139.32 137.362 130.764 139 124.667"
									stroke="#DBDCDA"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M139 126.039C140.855 119.018 144.121 114.831 148.799 113.478C153.477 112.125 157.988 112.745 162.333 115.338C162.355 121.045 159.878 125.226 154.901 127.881C149.925 130.535 144.624 129.921 139 126.039Z"
									fill="white"
									stroke="#DBDCDA"
									strokeWidth="1.5"
									strokeLinejoin="round"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M138.757 124.8C139.729 116.415 137.781 110.51 132.913 107.083C128.044 103.657 122.406 102.892 115.999 104.788C114.88 112.522 116.59 118.371 121.13 122.333C125.67 126.296 131.546 127.118 138.757 124.8Z"
									fill="white"
									stroke="#DBDCDA"
									strokeWidth="1.5"
									strokeLinejoin="round"
								/>
							</g>
						</svg>
					) : (
						<>
							<div
								className={` ..6x03:hidden ${obj.isSlider ? '!hidden' : ''} ${obj.fullImg ? '!hidden aboslute  image-container' : ''
									}`}
							>
								<Image
									className=" object-cover image"
									src={obj.img || treeN}
									width={!obj.fullImg ? 218 : ''}
									height={!obj.fullImg ? 218 : ''}
								/>
							</div>
							{obj.isSlider ? (
								<>
									<div className=" ..6x03:hidden  z-0  w-full overflow-hidden h-auto  ">
										<Slider {...settings} className=" specialItemSliderBDots">
											<Image className=" object-cover" src={obj.img || treeN} />

											<Image className=" object-cover" src={obj.img || treeN} />
											<Image className=" object-cover" src={obj.img || treeN} />
											<Image className=" object-cover" src={obj.img || treeN} />
										</Slider>
									</div>

									<div className=" hidden z-0  w-32 overflow-hidden h-32 ..6x03:block">
										<Slider {...settings} className="specialItemSliderDots">
											<Image
												className=" object-cover"
												src={obj.img || treeN}
												width={130}
												height={130}
											/>

											<Image
												className=" object-cover"
												src={obj.img || treeN}
												width={130}
												height={130}
											/>
											<Image
												className=" object-cover"
												src={obj.img || treeN}
												width={130}
												height={130}
											/>
											<Image
												className=" object-cover"
												src={obj.img || treeN}
												width={130}
												height={130}
											/>
										</Slider>
									</div>
								</>
							) : (
								<div className="z-0 hidden  w-32 h-32 ..6x03:block">
									<Image
										className=" object-cover"
										src={obj.img || treeN}
										width={130}
										height={130}
									/>
								</div>
							)}
						</>
					)}

					<div
						className={`${obj.timeOver ? 'bottom-40' : ''} ${!obj.img ? '..6x5:bottom-36' : ''
							} ${obj.fullImg
								? 'left-0 !bottom-36 ..6x03:!bottom-32 !-mb-0 z-0'
								: ''
							}  ${obj.isDetails
								? '..6x1:!-mb-2  ..6x03:top-44 ..6x5:bottom-32 ..6x03:bottom-auto'
								: ''
							}  absolute bg-white py-1 bottom-36 ..6x03:bottom-28 flex flex-row justify-between items-end w-full mb-2 px-3    ..6x03:px-1    ${showSost ? '!bottom-40 ..6x3:!bottom-32 ..5x5:!bottom-36' : ''
							} ${showSost && obj.isSpecialProductDetail ? '..7x1:!bottom-32' : ''
							}`}
					>
						<div className="flex items-center cursor-pointer">
							{obj.iTab && (
								<p
									onClick={showSlide}
									className=" ..6x03:text-11px   text-13px font-normal font-montserrat flex   leading-140% text-black-70pe"
								>
									<svg
										className=" mr-1 "
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="8"
											cy="8"
											r="7.5"
											stroke={`${showSost ? '#337202' : '#DBDCDA'} `}
										/>
										<path
											d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
											fill={`${showSost ? '#337202' : '#DBDCDA'} `}
										/>
									</svg>
									Акции
								</p>
							)}
							{obj.isSost && (
								<>
									<p
										onClick={showActL}
										className={` ..6x03:text-11px ..6x1:hidden   text-13px ${obj.isDetails ? 'text-sm ' : ''
											} font-normal font-montserrat flex items-center  leading-140% text-black-70pe`}
									>
										<svg
											className={`mr-1 ${obj.isDetails ? 'mr-6px' : ''}`}
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="8"
												cy="8"
												r="7.5"
												stroke={`${showActL ? '#337202' : '#DBDCDA'} `}
											/>
											<path
												d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
												fill={`${showActL ? '#337202' : '#DBDCDA'} `}
											/>
										</svg>
										Состав набора
									</p>
									<p
										onClick={showActL}
										className={` text-11px ..6x1:flex hidden       font-normal font-montserrat   items-center  leading-140% text-black-70pe`}
									>
										<svg
											className={`mr-2 -mt-1 ${obj.isDetails ? 'mr-6px' : ''}`}
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="8"
												cy="8"
												r="7.5"
												stroke={`${showActL ? '#337202' : '#DBDCDA'} `}
											/>
											<path
												d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
												fill={`${showActL ? '#337202' : '#DBDCDA'} `}
											/>
										</svg>
										Состав
									</p>
								</>
							)}
						</div>
						{obj.balls ? (
							<div className="flex  flex-row items-center">
								{obj.isFirstFoliage && (
									<svg
										className="..5x2:h-3 mr-1 ..5x2:w-3"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
											stroke="#337202"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
											stroke="#337202"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8.66667 9.33333L9 5"
											stroke="#337202"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8.66666 9.33333L5.33333 9"
											stroke="#337202"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}

								<p className="mr-1 font-montserrat font-medium ..6x03:text-10px text-13px leading-140% text-black-70pe">
									1.4 Б
								</p>
								{!obj.isFirstFoliage && (
									<svg
										className="..5x2:h-3 ..5x2:w-3"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
											stroke="#337202"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
											stroke="#337202"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8.66667 9.33333L9 5"
											stroke="#337202"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8.66666 9.33333L5.33333 9"
											stroke="#337202"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</div>
						) : (
							''
						)}
					</div>

					{showAct && (
						<div
							className={`absolute ${obj.isSpecialProductDetail ? '..6x03:bottom-10' : ''
								}    bottom-12 -mb-1.5 z-10   left-0 right-0 ${isSearchItem ? '!bottom-9 ' : ''
								}`}
						>
							<div className="relative w-full ..6x4:px-7 py-6 px-11  bg-input-typing ..5x5:py-5px ..5x5:px-14 ..5x5:pt-5 pt-6">
								<Swiper
									ref={slider}
									slidesPerView={2}
									navigation={true}
									modules={[Navigation]}
									className="mySwiperAct"
								>
									<SwiperSlide>
										<div className="relative  rounded overflow-hidden itemSlideDrop">
											<div className="absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center">
												<svg
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
														stroke="#C5C1AB"
														strokeWidth="1.2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
											<Image
												src={srcSliderImgOne}
												width={'100%'}
												height={'100%'}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										{' '}
										<div className=" rounded overflow-hidden itemSlideDrop">
											<Image
												width={'100%'}
												height={'100%'}
												src={srcSliderImgTwo}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										{' '}
										<div className="ml-1.5 rounded overflow-hidden itemSlideDrop">
											<Image
												width={'100%'}
												height={'100%'}
												src={srcSliderImgTree}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="relative  rounded overflow-hidden itemSlideDrop">
											<div className="absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center">
												<svg
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
														stroke="#C5C1AB"
														strokeWidth="1.2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
											<Image
												src={srcSliderImgOne}
												width={'100%'}
												height={'100%'}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										{' '}
										<div className=" rounded overflow-hidden itemSlideDrop">
											<Image
												width={'100%'}
												height={'100%'}
												src={srcSliderImgTwo}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										{' '}
										<div className="ml-1.5 rounded overflow-hidden itemSlideDrop">
											<Image
												width={'100%'}
												height={'100%'}
												src={srcSliderImgTree}
											/>
										</div>
									</SwiperSlide>
								</Swiper>
								<button
									onClick={prevSlide}
									className="!border-t-none absolute ..6x5:left-2 left-5 top-10"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z"
											fill="black"
										/>
									</svg>
								</button>
								<button
									onClick={nextSlide}
									className="!border-none absolute right-5 ..6x5:right-2 top-10"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z"
											fill="black"
											fillOpacity="0.7"
										/>
									</svg>
								</button>
							</div>
						</div>
					)}

					{showSost && (
						<div
							className={`absolute bottom-12 !-mb-2 ..6x3:!bottom-10 ${obj.isSpecialProductDetail ? '..6x03:!bottom-11 !-mb-2.5' : ''
								} -mb-1.5 z-30 left-0   ..5x5:!bottom-14 right-0 ${isSearchItem ? '!bottom-9 ' : ''
								}`}
						>
							<div className="relative w-full ..7x001:px-2 ..6x04:px-10 ..6x6:px-7 ..7x1:px-5 px-6 bg-input-typing  py-6 pt-6 ..5x5:py-5px ..5x5:px-14 ..5x5:pt-5">
								<small className="absolute right-0 ..5x5:hidden left-0  text-11px text-center top-9px font-montserrat z-20">
									Экономия при покупке в акции:
								</small>
								<small className="absolute right-0 ..5x5:block hidden left-0  text-10px text-center top-9px font-montserrat z-20">
									Экономия{' '}
								</small>

								<Swiper
									ref={slider}
									breakpoints={{
										600: {
											slidesPerView: 3,
										},
										780: {
											slidesPerView: 2,
										},
										800: {
											slidesPerView: 3,
										},
									}}
									slidesPerView={2}
									navigation={true}
									modules={[Navigation]}
									className="mySwiper swiperAdapt mt-3 "
								>
									<SwiperSlide>
										{' '}
										<div className="relative h-60px ..7x01:h-11 ..7x01:w-11 ..5x5:h-52px ..5x5:w-52px w-60px ml-1.5   mt-1 itemSlideDrop">
											<div className="absolute left-0 right-0 bottom-0 top-0 rounded bg-white-60pe z-10 flex items-center justify-center">
												<small className="absolute -left-1 -top-1 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
													400 ₽
												</small>

												<svg
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
														stroke="#C5C1AB"
														strokeWidth="1.2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
											<Image
												src={srcSliderImgOne}
												className="!rounded"
												width={'100%'}
												height={'100%'}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										{' '}
										<div className="relative ml-1.5 ..7x01:h-11 ..7x01:w-11 h-60px w-60px marker: mt-1 itemSlideDrop ..5x5:h-52px ..5x5:w-52px ">
											<small className="absolute -left-1  -top-1 z-10 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
												700 ₽
											</small>

											<Image
												className="rounded"
												width={'100%'}
												height={'100%'}
												src={srcSliderImgTwo}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										{' '}
										<div className="relative ..7x01:h-11 ..7x01:w-11 ml-1.5 h-60px w-60px  mt-1 itemSlideDrop ..5x5:h-52px ..5x5:w-52px ">
											<small className="absolute -left-1  -top-1 z-10 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
												700 ₽
											</small>

											<Image
												width={'100%'}
												className="rounded"
												height={'100%'}
												src={srcSliderImgTree}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										{' '}
										<div className="relative ..7x01:h-11 ..7x01:w-11 h-60px ..5x5:h-52px ..5x5:w-52px w-60px ml-1.5   mt-1 itemSlideDrop">
											<div className="absolute left-0 right-0 bottom-0 top-0 rounded bg-white-60pe z-10 flex items-center justify-center">
												<small className="absolute -left-1 -top-1 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
													400 ₽
												</small>

												<svg
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
														stroke="#C5C1AB"
														strokeWidth="1.2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
											<Image
												src={srcSliderImgOne}
												className="!rounded"
												width={'100%'}
												height={'100%'}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										{' '}
										<div className="relative ..7x01:h-11 ..7x01:w-11 ml-1.5 h-60px w-60px marker: mt-1 itemSlideDrop ..5x5:h-52px ..5x5:w-52px ">
											<small className="absolute -left-1  -top-1 z-10 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
												700 ₽
											</small>

											<Image
												className="rounded"
												width={'100%'}
												height={'100%'}
												src={srcSliderImgTwo}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										{' '}
										<div className="relative ..7x01:h-11 ..7x01:w-11 ml-1.5 h-60px w-60px  mt-1 itemSlideDrop ..5x5:h-52px ..5x5:w-52px ">
											<small className="absolute -left-1  -top-1 z-10 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
												700 ₽
											</small>

											<Image
												width={'100%'}
												className="rounded"
												height={'100%'}
												src={srcSliderImgTree}
											/>
										</div>
									</SwiperSlide>
								</Swiper>
								<button
									onClick={prevSlide}
									className="absolute ..7x001:left-0 left-3 ..7x1:left-1 top-16 -mt-1 ..5x5:top-14 ..5x5:mt-0"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z"
											fill="black"
										/>
									</svg>
								</button>
								<button
									onClick={nextSlide}
									className="absolute ..7x001:right-0 right-3 ..7x1:right-1 top-16 -mt-1 ..5x5:top-14 ..5x5:mt-0"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z"
											fill="black"
											fillOpacity="0.7"
										/>
									</svg>
								</button>
							</div>
						</div>
					)}

					{obj.timeOver && (
						<div
							className={`w-full z-0 ${obj.fullImg ? '..6x5:!bottom-36' : ''
								} absolute bottom-32 left-0 pb-3 ${obj.timeCenter ? 'text-center' : ''
								} ${obj.isDetails ? '..6x1:pb-0 ..6x03:bottom-104px' : ''
								} px-2 z-20 `}
						>
							<p
								className={` text-center ..6x1:text-11px ..6x1:font-montserrat font-noto-sans text-sm font-light text-black-70pe`}
							>
								До {obj.timeOver}
							</p>
						</div>
					)}

					<div
						className={` ${!obj.img ? '..6x5:bottom-24' : ''
							} absolute bg-white bottom-20 px-2 ..6x03:px-0  ${obj.fullImg ? 'left-0' : ''
							} ..6x03:bottom-70px ${obj.isDetails ? '..6x03:bottom-60px' : ''}`}
					>
						<p
							className={` ..6x03:text-10px text-13px font-montserrat font-normal leading-150% text-center text-gray-quick-silver tracking-widest card_text uppercase ${obj.isDetails
								? ' text-black ..6x1:text-center ..6x1:text-10px'
								: ''
								}`}
						>
							{obj.text}
						</p>
					</div>
					{obj.DetailsPrice && (
						<div
							className={`flex ..6x1:bottom-10  ${obj.isDetails ? '..6x03:!bottom-6' : ''
								}  absolute bottom-11 left-0 pl-2 ..6x1:pl-0 right-0 w-full`}
						>
							<div className=" flex justify-center flex-row font-montserrat w-full font-normal text-base mb-2 mt-1">
								<p className=" text-center mr-2 ..6x1:text-11px font-montserrat text-gray-quick-silver line-through">
									₽ {obj.DetailsPrice.oldPrice}
								</p>
								<p className=" text-center ..6x1:text-11px font-montserrat text-label-pink-2">
									₽ {obj.DetailsPrice.price}
								</p>
							</div>
						</div>
					)}

					{obj.colors && (
						<div className=" absolute bottom-36 flex flex-row justify-center items-center mt-0.5 ..6x03:bottom-16">
							<div
								onClick={() => currentColorHandler('1')}
								className={` bg-label-pink cursor-pointer ${currentColor === '1'
									? 'w-10px h-10px ..5x2:h-2 ..5x2:w-2 border border-gray-border'
									: 'w-2 h-2 ..5x2:h-6px ..5x2:w-6px'
									}  rounded-56px mx-1 `}
							></div>
							<div
								onClick={() => currentColorHandler('2')}
								className={` bg-label-orange cursor-pointer ${currentColor === '2'
									? 'w-10px h-10px border ..5x2:h-2 ..5x2:w-2 border-gray-border'
									: 'w-2 h-2 ..5x2:h-6px ..5x2:w-6px'
									}  rounded-56px mx-1 `}
							></div>
							<div
								onClick={() => currentColorHandler('3')}
								className={` bg-label-green cursor-pointer ${currentColor === '3'
									? 'w-10px h-10px border border-gray-border ..5x2:h-2 ..5x2:w-2'
									: 'w-2 h-2 ..5x2:h-6px ..5x2:w-6px'
									}  rounded-56px mx-1 `}
							></div>
						</div>
					)}

					{obj.priceDe && (
						<div className={` absolute bottom-12 flex  items-center`}>
							<p className="text-label-orange font-montserrat text-center text-sm my-4 ..6x03:hidden">
								{obj.priceDe}
							</p>
							<p className=" ml-1 text-label-orange font-lora text-center text-sm my-4 ..6x03:hidden">
								De
							</p>
						</div>
					)}

					{obj.priceSale && (
						<div
							className={`${showSost ? '!opacity-0' : ''} ${obj.fullImg ? 'left-0 right-0 items-center' : ''
								} flex flex-col absolute bottom-10   ..6x03:bottom-8`}
						>
							<div className=" flex flex-row font-montserrat font-normal text-base ..6x03:text-11px mb-2 mt-1">
								<p className="text-center mr-2 text-gray-quick-silver line-through">
									₽ {obj.priceSale.old}
								</p>
								<p className="text-center text-label-pink-2">
									₽ {obj.priceSale.new}
								</p>
							</div>
						</div>
					)}

					{obj.price && (
						<div className="flex flex-col absolute bottom-9 ..6x03:bottom-8">
							<div className=" flex flex-row font-montserrat font-normal text-base ..6x03:text-11px mb-2 mt-1">
								<p className="text-center">₽ {obj.price}</p>
							</div>
						</div>
					)}

					{obj.priceDe && (
						<div className="sect_buttons absolute -bottom-0 left-0 flex-row hidden w-full">
							<button className="w-1/2 border-t hover:border-primary border-gray-light2 px-3 py-2.5 font-montserrat font-normal text-13px text-primary leading-150% hover:bg-primary hover:text-white ..5x03:text-10px">
								КУПИТЬ
							</button>
							<button className="w-1/2 border-t border-l border-gray-light2 px-3 py-2.5 font-montserrat leading-150% text-label-orange font-normal text-13px whitespace-nowrap hover:bg-label-orange hover:border-label-orange hover:text-white ..5x03:text-10px">
								КУПИТЬ ЗА <span className="font-lora">DE</span>
							</button>
						</div>
					)}

					{!obj.priceDe && !obj.DetailsPrice && (
						<div className="sect_buttons absolute bottom-0 left-0 flex-row hidden w-full">
							<button className="w-full border-t hover:border-primary border-gray-light2 px-3 py-2.5 font-montserrat font-normal text-13px text-primary leading-150% hover:bg-primary hover:text-white">
								КУПИТЬ
							</button>
						</div>
					)}
					{obj.DetailsPrice && (
						<div className="  absolute bottom-0 ..6x03:bottom-0 left-0 ..6x1:bottom-3  flex-row w-full">
							<button className="w-full ..6x1:hidden ..6x1:py-0  text-primary font-medium text-xs    px-3 py-2.5 font-montserrat   leading-150%  bg-gray-light2 h-11">
								КУПИТЬ
							</button>
							<button className="w-full ..6x1:h-8 hidden ..6x1:block ..6x1:py-0  text-primary font-medium text-xs    px-3 py-2.5 font-montserrat   leading-150%  bg-gray-light2 h-11">
								+ Купить
							</button>
						</div>
					)}

					{obj.priceDe && !obj.isDetails && (
						<div className=" absolute bottom-0 left-0 flex-row hidden ..6x03:flex w-full">
							<button className="w-1/2 border  hover:border-primary border-r-0 border-gray-light2 px-3 py-2.5 font-montserrat font-medium text-xs text-primary leading-100%  hover:bg-primary hover:text-white">
								Купить
							</button>
							<button className="w-1/2 debuttonH border hover:border-label-orange border-gray-light2 px-3 py-2.5 font-lora leading-100% text-label-orange font-medium text-xs whitespace-nowrap  hover:bg-label-orange hover:text-white">
								374 De
							</button>
						</div>
					)}

					{!obj.priceDe && !obj.isDetails && (
						<div className=" absolute bottom-0 left-0 hidden ..6x03:block w-full">
							<button className="w-full hover:border-primary border border-gray-light2 px-3 py-2.5 font-montserrat font-medium text-xs text-primary leading-100% hover:bg-primary hover:text-white">
								Купить
							</button>
						</div>
					)}
				</div>
			</div>
		);
	} else {
		return (
			<div
				className={`border ${!src ? 'overflow-hidden' : ''} ${isSearchItem ? '!mt-0 border-l-0 !border-t-0 mt1px' : ''
					} border-gray mt-3  overflow-hidden ${ml ? 'ml-3 .2x1:!ml-0' : ''}`}
			>
				<div
					className={`flex justify-center w-52 h-80 items-center   transition-all `}
				>
					<div
						className={`  flex flex-col bg-white relative p-3 justify-around items-center `}
					>
						{!isSearchItem && (
							<div className="absolute top-4 left-3 z-10">
								<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="30" cy="30" r="29.5" fill="white" fill-opacity="0.3" stroke="#C5C1AB" />
									<circle cx="30" cy="30" r="27.5" fill="white" fill-opacity="0.85" stroke="#C5C1AB" />
									<path d="M7.74756 30.4751C7.46102 30.4462 7.236 30.3753 7.0725 30.2623C6.90304 30.1488 6.78763 30.0075 6.72628 29.8385C6.66552 29.6635 6.64508 29.4775 6.66494 29.2805C6.6848 29.0835 6.74166 28.9083 6.83552 28.7549C6.92938 28.6016 7.07066 28.4862 7.25939 28.4087C7.44274 28.3247 7.67769 28.2971 7.96424 28.326C8.24482 28.3543 8.46954 28.4282 8.6384 28.5478C8.80189 28.6607 8.9173 28.802 8.98462 28.9716C9.04598 29.1406 9.06673 29.3236 9.04686 29.5206C9.027 29.7176 8.96984 29.8958 8.87538 30.0551C8.77556 30.2079 8.63427 30.3233 8.45151 30.4014C8.26279 30.4788 8.02814 30.5034 7.74756 30.4751Z" fill="#337202" />
									<path d="M15.3541 19.3274L14.8367 20.1502L12.3529 18.5884L10.7193 21.1865L13.2031 22.7483L12.6856 23.5711L7.24572 20.1505L7.76312 19.3277L10.0183 20.7457L11.652 18.1477L9.39678 16.7296L9.91418 15.9068L15.3541 19.3274Z" fill="#337202" />
									<path d="M22.5139 14.2807L21.0186 12.9887L18.8444 14.1899L19.1422 16.1435L18.2599 16.6309L17.2742 9.80313L18.1566 9.31568L23.404 13.7889L22.5139 14.2807ZM18.9312 11.1087C18.8835 11.0596 18.8068 10.9889 18.7009 10.8966C18.5974 10.7961 18.4939 10.6956 18.3904 10.5951C18.284 10.4894 18.1986 10.4029 18.134 10.3358C18.1658 10.4553 18.1981 10.5883 18.231 10.7346C18.2662 10.8728 18.2971 11.0031 18.3236 11.1256C18.3472 11.2428 18.3659 11.3387 18.3797 11.4133L18.6873 13.3101L20.3732 12.3787L18.9312 11.1087Z" fill="#337202" />
									<path d="M27.3084 13.0949L27.1674 6.67046L31.0544 6.58515L31.0728 7.42195L28.1575 7.48593L28.1972 9.2945L29.025 9.27633C29.6609 9.26237 30.1605 9.33243 30.524 9.48649C30.8934 9.64042 31.1563 9.8567 31.3124 10.1353C31.4744 10.4079 31.5594 10.7241 31.5673 11.084C31.576 11.4799 31.4995 11.8236 31.3379 12.1153C31.1822 12.4067 30.9292 12.6344 30.5787 12.7981C30.228 12.9558 29.7648 13.041 29.1889 13.0536L27.3084 13.0949ZM29.099 12.2364C29.6269 12.2248 30.0059 12.1295 30.236 11.9504C30.466 11.7653 30.5768 11.4838 30.5685 11.1059C30.5627 10.842 30.5012 10.6363 30.3839 10.4888C30.2667 10.3413 30.0873 10.2372 29.846 10.1765C29.6106 10.1157 29.3009 10.0895 28.917 10.0979L28.2152 10.1133L28.2622 12.2548L29.099 12.2364Z" fill="#337202" />
									<path d="M42.6138 13.985C42.373 14.4209 42.0988 14.787 41.7912 15.0832C41.4917 15.377 41.1606 15.5917 40.7979 15.7272C40.4404 15.8655 40.0585 15.9116 39.6522 15.8654C39.2512 15.822 38.8327 15.6799 38.3968 15.4391C37.9504 15.1925 37.5995 14.9095 37.344 14.5902C37.0968 14.2685 36.9325 13.9207 36.8512 13.5467C36.778 13.1704 36.7876 12.7747 36.8798 12.3595C36.9721 11.9444 37.1386 11.5189 37.3794 11.083C37.6986 10.5053 38.0717 10.0533 38.4987 9.72712C38.9257 9.40093 39.4002 9.22439 39.9223 9.19752C40.4496 9.17354 41.0101 9.32549 41.6035 9.65335C42.1812 9.97251 42.595 10.3588 42.8449 10.8122C43.103 11.2632 43.2088 11.7604 43.1623 12.3036C43.1187 12.8416 42.9358 13.4021 42.6138 13.985ZM38.2732 11.587C38.0236 12.0387 37.8693 12.4607 37.8102 12.853C37.754 13.2401 37.8053 13.594 37.964 13.9147C38.1256 14.2302 38.4033 14.4968 38.7972 14.7144C39.1963 14.9349 39.5698 15.0281 39.9176 14.9941C40.2684 14.9548 40.5926 14.8083 40.8904 14.5547C41.1911 14.2958 41.4662 13.9406 41.7157 13.4889C42.09 12.8114 42.2451 12.2082 42.1809 11.6792C42.1248 11.1478 41.7975 10.7167 41.1988 10.386C40.7996 10.1655 40.4235 10.0708 40.0704 10.1019C39.7173 10.1331 39.3919 10.2754 39.0941 10.5291C38.7963 10.7827 38.5227 11.1353 38.2732 11.587Z" fill="#337202" />
									<path d="M50.8611 18.7419C51.2925 19.4627 51.4601 20.0756 51.3639 20.5807C51.2729 21.0828 50.9673 21.4894 50.4474 21.8007C50.2157 21.9394 49.9712 22.0333 49.7139 22.0824C49.4597 22.1367 49.1968 22.1297 48.9252 22.0615C48.6588 21.9902 48.3919 21.8423 48.1246 21.6177C47.8655 21.3952 47.6143 21.0805 47.3708 20.6738L47.0149 20.0792L44.9222 21.3319L44.4229 20.4979L49.9366 17.1975L50.8611 18.7419ZM50.1214 19.1008L49.7331 18.4521L47.7176 19.6586L48.0181 20.1605C48.2061 20.4746 48.3967 20.7171 48.59 20.8881C48.7884 21.056 48.9931 21.1468 49.204 21.1604C49.4231 21.1761 49.6563 21.1099 49.9034 20.962C50.2329 20.7648 50.4158 20.5154 50.4521 20.214C50.4967 19.9146 50.3864 19.5435 50.1214 19.1008Z" fill="#337202" />
									<path d="M51.0219 28.1881C51.3085 28.1592 51.5431 28.1838 51.7259 28.2618C51.9146 28.3393 52.0559 28.4547 52.1498 28.608C52.2442 28.7674 52.3014 28.9455 52.3212 29.1425C52.3411 29.3395 52.3204 29.5225 52.259 29.6915C52.1976 29.8606 52.0822 30.0018 51.9128 30.1154C51.7499 30.2344 51.5252 30.3083 51.2386 30.3372C50.958 30.3655 50.7231 30.3379 50.5338 30.2545C50.351 30.1764 50.2097 30.061 50.1099 29.9082C50.016 29.7549 49.9592 29.5797 49.9393 29.3827C49.9195 29.1857 49.9399 28.9997 50.0007 28.8247C50.068 28.6551 50.1834 28.5138 50.3469 28.4008C50.5163 28.2873 50.7414 28.2163 51.0219 28.1881Z" fill="#337202" />
									<path d="M29.9339 28.912C30.6912 28.912 31.3525 29.0453 31.9179 29.312C32.4832 29.5787 32.9205 29.9627 33.2299 30.464C33.5499 30.9653 33.7099 31.5787 33.7099 32.304C33.7099 33.104 33.5392 33.792 33.1979 34.368C32.8565 34.944 32.3605 35.3867 31.7099 35.696C31.0699 36.0053 30.2859 36.16 29.3579 36.16C28.7712 36.16 28.2165 36.1067 27.6939 36C27.1712 35.8933 26.7285 35.7387 26.3659 35.536V33.984C26.7499 34.208 27.2139 34.3893 27.7579 34.528C28.3125 34.6667 28.8405 34.736 29.3419 34.736C29.8859 34.736 30.3499 34.656 30.7339 34.496C31.1285 34.3253 31.4325 34.0747 31.6459 33.744C31.8699 33.4027 31.9819 32.976 31.9819 32.464C31.9819 31.7707 31.7632 31.2427 31.3259 30.88C30.8992 30.5067 30.2219 30.32 29.2939 30.32C28.9952 30.32 28.6592 30.3467 28.2859 30.4C27.9232 30.4533 27.6299 30.5067 27.4059 30.56L26.6219 30.096L27.0539 24.576H32.9259V26.08H28.5259L28.2699 29.072C28.4512 29.04 28.6805 29.008 28.9579 28.976C29.2352 28.9333 29.5605 28.912 29.9339 28.912Z" fill="#337202" />
									<path d="M30.1932 42.568V49H21.4692V42.568H22.5252V48.112H25.2972V42.568H26.3532V48.112H29.1372V42.568H30.1932ZM36.6905 43.456H34.5905V49H33.5465V43.456H31.4705V42.568H36.6905V43.456ZM37.2038 48.352C37.2038 48.056 37.2758 47.848 37.4198 47.728C37.5638 47.608 37.7358 47.548 37.9358 47.548C38.1438 47.548 38.3198 47.608 38.4638 47.728C38.6158 47.848 38.6918 48.056 38.6918 48.352C38.6918 48.64 38.6158 48.848 38.4638 48.976C38.3198 49.104 38.1438 49.168 37.9358 49.168C37.7358 49.168 37.5638 49.104 37.4198 48.976C37.2758 48.848 37.2038 48.64 37.2038 48.352Z" fill="#337202" />
								</svg>

							</div>
						)}

						<div
							onMouseEnter={showHoverHeart}
							onMouseLeave={showHoverHeart}
							className={`absolute top-5 ..7x1:top-2 right-5 ..6x03:right-1 z-20 cursor-pointer ${isSearchItem ? '!top-6' : ''
								}`}
						>
							{liked ? (
								<svg
									width="42"
									height="38"
									viewBox="0 0 42 38"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g filter="url(#filter0_d_1939_1125459)">
										<path
											d="M25.5022 5.00001C24.6291 4.99851 23.7677 5.20077 22.9865 5.59072C22.2052 5.98066 21.5258 6.54752 21.0022 7.24621C20.293 6.30266 19.3051 5.606 18.1782 5.25482C17.0513 4.90365 15.8426 4.91573 14.7229 5.28936C13.6033 5.663 12.6295 6.37926 11.9393 7.3368C11.2492 8.29434 10.8776 9.44467 10.8772 10.625C10.8772 17.3621 20.2373 22.6813 20.6357 22.9044C20.7477 22.9671 20.8739 23 21.0022 23C21.1305 23 21.2567 22.9671 21.3687 22.9044C23.0902 21.8961 24.7059 20.7173 26.1914 19.3856C29.4665 16.438 31.1272 13.4905 31.1272 10.625C31.1255 9.13368 30.5323 7.70393 29.4778 6.6494C28.4233 5.59487 26.9935 5.0017 25.5022 5.00001Z"
											fill="#FF6363"
										/>
									</g>
									<defs>
										<filter
											id="filter0_d_1939_1125459"
											x="0.877197"
											y="0"
											width="40.25"
											height="38"
											filterUnits="userSpaceOnUse"
											colorInterpolationFilters="sRGB"
										>
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="5" />
											<feGaussianBlur stdDeviation="5" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_1939_1125459"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_1939_1125459"
												result="shape"
											/>
										</filter>
									</defs>
								</svg>
							) : (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.4578 19.1008L12.3542 19.2044L12.2403 19.1008C7.32207 14.6381 4.07084 11.6872 4.07084 8.69482C4.07084 6.62398 5.62398 5.07084 7.69482 5.07084C9.28937 5.07084 10.8425 6.10627 11.3913 7.51444H13.3172C13.8659 6.10627 15.4191 5.07084 17.0136 5.07084C19.0845 5.07084 20.6376 6.62398 20.6376 8.69482C20.6376 11.6872 17.3864 14.6381 12.4578 19.1008ZM17.0136 3C15.212 3 13.4828 3.83869 12.3542 5.15368C11.2256 3.83869 9.49646 3 7.69482 3C4.50572 3 2 5.49537 2 8.69482C2 12.5984 5.52044 15.7978 10.8529 20.6332L12.3542 22L13.8556 20.6332C19.188 15.7978 22.7084 12.5984 22.7084 8.69482C22.7084 5.49537 20.2027 3 17.0136 3Z"
										fill={`${!liked && hoverHeart ? '#FF6363' : '#EDEEEC'}`}
									></path>
								</svg>
							)}
						</div>

						{!src ? (
							<svg
								width="278"
								height="238"
								viewBox="0 0 278 238"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<mask
									id="mask0_1939_1032750"
									maskUnits="userSpaceOnUse"
									x="0"
									y="0"
									width="278"
									height="238"
								>
									<rect width="278" height="238" fill="white" />
								</mask>
								<g mask="url(#mask0_1939_1032750)">
									<rect width="278" height="238" fill="#FCFDFB" />
									<path
										d="M123.833 146.834C128.695 144.744 133.274 143.617 137.57 143.452C141.867 143.287 147.399 144.025 154.167 145.667"
										stroke="#DBDCDA"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
									<path
										d="M137.886 150.333C136.991 139.32 137.362 130.764 139 124.667"
										stroke="#DBDCDA"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M139 126.039C140.855 119.018 144.121 114.831 148.799 113.478C153.477 112.125 157.988 112.745 162.333 115.338C162.355 121.045 159.878 125.226 154.901 127.881C149.925 130.535 144.624 129.921 139 126.039Z"
										fill="white"
										stroke="#DBDCDA"
										strokeWidth="1.5"
										strokeLinejoin="round"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M138.757 124.8C139.729 116.415 137.781 110.51 132.913 107.083C128.044 103.657 122.406 102.892 115.999 104.788C114.88 112.522 116.59 118.371 121.13 122.333C125.67 126.296 131.546 127.118 138.757 124.8Z"
										fill="white"
										stroke="#DBDCDA"
										strokeWidth="1.5"
										strokeLinejoin="round"
									/>
								</g>
							</svg>
						) : (
							<div className=" mt-4">
								<Image
									className=" object-cover"
									src={src || ''}
									width={146}
									height={146}
								/>
							</div>
						)}

						<div
							className={`flex flex-row justify-between items-end w-full mb-1 ${showSost || showAct ? 'transform20px' : ''
								}`}
						>
							{isActions ? (
								<p
									onClick={showSlide}
									className="cursor-pointer text-sm flex items-center text-black-70pe font-montserrat"
								>
									<svg
										className="mr-2"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="8"
											cy="8"
											r="7.5"
											stroke={`${showSost ? '#337202' : '#DBDCDA'} `}
										/>
										<path
											d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
											fill={`${showSost ? '#337202' : '#DBDCDA'} `}
										/>
									</svg>
									Акции
								</p>
							) : (
								<p
									onClick={showActL}
									className="cursor-pointer text-sm flex items-center text-black-70pe font-montserrat"
								>
									<svg
										className="mr-2"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="8"
											cy="8"
											r="7.5"
											stroke={`${showAct ? '#337202' : '#DBDCDA'} `}
										/>
										<path
											d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
											fill={`${showAct ? '#337202' : '#DBDCDA'} `}
										/>
									</svg>
									Состав
								</p>
							)}

							<div className="flex">
								<svg
									width="16"
									className="mr-1"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
										stroke="#337202"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
										stroke="#337202"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8.66667 9.33333L9 5"
										stroke="#337202"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8.66666 9.33333L5.33333 9"
										stroke="#337202"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<p className="text-13px font-montserrat font-medium text-black-70pe ">
									1.4 Б
								</p>
							</div>
						</div>

						{showAct && (
							<div
								className={`absolute   -mb-0.5 bottom-14  left-0 right-0 ${isSearchItem ? '!bottom-9' : ''
									}`}
							>
								<div className="relative w-full h-24  px-11 bg-gray-light2 py-4 pt-6">
									<Swiper
										ref={slider}
										slidesPerView={2}
										navigation={true}
										modules={[Navigation]}
										className="mySwiperAct"
									>
										<SwiperSlide>
											<div className="relative  rounded overflow-hidden itemSlideDrop">
												<div className="absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center">
													<svg
														width="15"
														height="15"
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
															stroke="#C5C1AB"
															strokeWidth="1.2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<Image
													src={srcSliderImgOne}
													width={'100%'}
													height={'100%'}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											{' '}
											<div className=" rounded overflow-hidden itemSlideDrop">
												<Image
													width={'100%'}
													height={'100%'}
													src={srcSliderImgTwo}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											{' '}
											<div className="ml-1.5 rounded overflow-hidden itemSlideDrop">
												<Image
													width={'100%'}
													height={'100%'}
													src={srcSliderImgTree}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="relative  rounded overflow-hidden itemSlideDrop">
												<div className="absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center">
													<svg
														width="15"
														height="15"
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
															stroke="#C5C1AB"
															strokeWidth="1.2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<Image
													src={srcSliderImgOne}
													width={'100%'}
													height={'100%'}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											{' '}
											<div className=" rounded overflow-hidden itemSlideDrop">
												<Image
													width={'100%'}
													height={'100%'}
													src={srcSliderImgTwo}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											{' '}
											<div className="ml-1.5 rounded overflow-hidden itemSlideDrop">
												<Image
													width={'100%'}
													height={'100%'}
													src={srcSliderImgTree}
												/>
											</div>
										</SwiperSlide>
									</Swiper>
									<button
										onClick={prevSlide}
										className="absolute left-5 top-10"
									>
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z"
												fill="black"
											/>
										</svg>
									</button>
									<button
										onClick={nextSlide}
										className="absolute right-5 top-10"
									>
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z"
												fill="black"
												fillOpacity="0.7"
											/>
										</svg>
									</button>
								</div>
							</div>
						)}

						{showSost && (
							<div
								className={`absolute bottom-14 -mb-0.5  left-0 right-0 ${isSearchItem ? '!bottom-9' : ''
									}`}
							>
								<div className="relative w-full  px-3 bg-gray-light2 py-4 pt-6">
									<small className="absolute right-0 font-medium left-0 text-9px text-center top-6px font-montserrat z-20">
										Экономия при покупке в акции:
									</small>

									<Swiper
										ref={slider}
										slidesPerView={3}
										navigation={true}
										modules={[Navigation]}
										className="mySwiper"
									>
										<SwiperSlide>
											{' '}
											<div className="relative ml-1.5    mt-1 itemSlideDrop">
												<div className="absolute left-0 right-0 bottom-0 top-0 rounded bg-white-60pe z-10 flex items-center justify-center">
													<small className="absolute -left-1 -top-1 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
														400 ₽
													</small>

													<svg
														width="15"
														height="15"
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
															stroke="#C5C1AB"
															strokeWidth="1.2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<Image
													src={srcSliderImgOne}
													className="!rounded"
													width={'100%'}
													height={'100%'}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											{' '}
											<div className="ml-1.5  marker: mt-1 itemSlideDrop">
												<small className="absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
													700 ₽
												</small>

												<Image
													className="rounded"
													width={'100%'}
													height={'100%'}
													src={srcSliderImgTwo}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											{' '}
											<div className="ml-1.5   mt-1 itemSlideDrop">
												<small className="absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
													300 ₽
												</small>

												<Image
													width={'100%'}
													className="rounded"
													height={'100%'}
													src={srcSliderImgTree}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											{' '}
											<div className="relative ml-1.5    mt-1 itemSlideDrop">
												<div className="absolute left-0 right-0 bottom-0 top-0 rounded bg-white-60pe z-10 flex items-center justify-center">
													<small className="absolute -left-1 -top-1 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
														400 ₽
													</small>

													<svg
														width="15"
														height="15"
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
															stroke="#C5C1AB"
															strokeWidth="1.2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<Image
													src={srcSliderImgOne}
													className="!rounded"
													width={'100%'}
													height={'100%'}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											{' '}
											<div className="ml-1.5  marker: mt-1 itemSlideDrop">
												<small className="absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
													700 ₽
												</small>

												<Image
													className="rounded"
													width={'100%'}
													height={'100%'}
													src={srcSliderImgTwo}
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											{' '}
											<div className="ml-1.5   mt-1 itemSlideDrop">
												<small className="absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
													300 ₽
												</small>

												<Image
													width={'100%'}
													className="rounded"
													height={'100%'}
													src={srcSliderImgTree}
												/>
											</div>
										</SwiperSlide>
									</Swiper>
									<button
										onClick={prevSlide}
										className="absolute left-0.5 top-11"
									>
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z"
												fill="black"
											/>
										</svg>
									</button>
									<button
										onClick={nextSlide}
										className="absolute right-0.5 top-11"
									>
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z"
												fill="black"
												fillOpacity="0.7"
											/>
										</svg>
									</button>
								</div>
							</div>
						)}
						<>
							<div className="mt-2 ">
								<p
									className={`text-11px text-center text-black-70pe font-montserrat tracking-widest ${isSearchItem ? 'dotsTextSearch' : ''
										}`}
								>
									ДЛЯ СЕНСАЦИОННОГО УВЛАЖНЕНИЯ И ВОССТАНОВЛЕНИЯ КОЖИ
								</p>
							</div>
							<div className={`mb-1 mt-1 ${isSearchItem ? '!mb-9' : ''}`}>
								<div className="flex flex-row">
									<p className="text-center text-13px font-montserrat mr-2 text-gray-quick-silver line-through">
										₽ 920.00
									</p>
									<p className="text-center text-13px font-montserrat text-label-pink-2">
										₽ 764.00
									</p>
								</div>
							</div>
						</>

						{isSearchItem ? (
							buttonDE ? (
								<div className="border-t -bottom-0.5 h-9 right-0 left-0 absolute border-gray ">
									<button className="h-9 m-0 py-3 w-1/2 border-r border-gray font-montserrat text-xs font-medium text-primary">
										Купить
									</button>
									<button className="h-9 m-0 py-3 w-1/2 font-montserrat text-xs font-medium text-label-orange">
										374 De
									</button>
								</div>
							) : (
								<button className=" border-t h-9 py-3 font-montserrat font-medium text-xs text-primary border-gray absolute -bottom-0.5 right-0 left-0">
									Купить
								</button>
							)
						) : (
							<button className=" ..6x04:text-xs bg-gray-light2 text-primary py-10px px-9 font-montserrat font-medium whitespace-nowrap   hover:text-white text-xs hover:bg-primary transition-all cursor-pointer">
								+ Добавить в заказ
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}
}
