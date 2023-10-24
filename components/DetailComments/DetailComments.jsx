import { useEffect, useRef, useState } from "react"
import oneNew from '../../images/templates/1news.jpg';

import detailOne from '../../images/templates/imageDetailVOne.jpg'
import detailTwo from '../../images/templates/imageDetailVTwo.jpg'
import detailTree from '../../images/templates/imageDetailVTree.jpg'
import detailFour from '../../images/templates/imageDetailVFour.jpg'

import mobileFilter from '../../images/templates/mobileFilter.jpg'

import detailSix from '../../images/templates/imageDetailVSix.jpg'
import filtOne from '../../images/templates/filtOne.jpg'
import commentsPhoto from '../../images/templates/commentsPhoto.jpg'
import videoPreview from '../../images/templates/videoPreview.jpg'

import avatar from '../../images/templates/avatar.jpg'
import trava from '../../images/templates/trava.png'
import active2 from '../../images/templates/actComp.jpg'
import i from '../../images/templates/image.jpg'
import matOne from '../../images/templates/materialsone.jpg'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper"
import DetailDescription from "../DetailDescription/DetailDescription";

const DetailComments = ({ setShowL, refF, close, setVideo }) => {
	const sliderPhoto = useRef(null),
		[show, setShow] = useState(false)

	const setS = () => setShow(!show)






	const [buttonHover, setButtonHover] = useState(false),
		[buttonHoverNext, setButtonHoverNext] = useState(false)

	const hoverSet = () => setButtonHover(!buttonHover),
		hoverNext = () => setButtonHoverNext(!buttonHoverNext)



	const nextSlidePhoto = () => {
		if (sliderPhoto.current !== null && sliderPhoto.current.swiper !== null) sliderPhoto.current.swiper.slideNext();
	},
		prevSlidePhoto = () => {
			if (sliderPhoto.current !== null && sliderPhoto.current.swiper !== null) sliderPhoto.current.swiper.slidePrev();
		}


	return (
		<section className="px-222px mx-2 ..5x2:px-3  ..5x2:m-0 .2x50:px-36 .6x2:px-24 .6x3:px-10">

			<DetailDescription close={close} setVideo={setVideo} refF={refF} />

			<div>
				<h4 className="font-montserrat font-medium text-xl mb-3 ..6x3:mb-6px ..6x3:text-sm">Фото и видео отзывы</h4>
				<div className="mb-12 relative ..6x3:-mr-3 ..6x3:mb-6">
					<Swiper ref={sliderPhoto} className=' photoCus customTwo sliderDetail !overflow-hidden ..5x2:!overflow-visible' breakpoints={{
						950: {
							slidesPerView: 5
						},
						1250: {
							slidesPerView: 6
						},
						1450: {
							slidesPerView: 7
						}
					}} slidesPerView={4} scrollbar={{
						hide: false,
						draggable: true,
					}} modules={[Navigation, Scrollbar]}  >


						<SwiperSlide onClick={setVideo} className="pr-2 ..7x1:pr-0 ..7x1:mr-2 ..7x1:w-90px ..7x1:h-90px  cursor-pointer">
							<div className="..7x1:w-90px ..7x1:h-90px">
								<Image src={detailOne} />
							</div>

						</SwiperSlide>
						<SwiperSlide onClick={setVideo} className="pr-2 ..7x1:pr-0 ..7x1:mr-2 ..7x1:w-90px ..7x1:h-90px cursor-pointer">
							<div className="..7x1:w-90px ..7x1:h-90px"><Image src={detailTwo} /></div>

						</SwiperSlide>
						<SwiperSlide onClick={setVideo} className="pr-2 ..7x1:pr-0 ..7x1:mr-2 ..7x1:w-90px ..7x1:h-90px cursor-pointer">
							<div className="..7x1:w-90px ..7x1:h-90px"><Image src={detailTree} /></div>

						</SwiperSlide>
						<SwiperSlide onClick={setVideo} className="pr-2 ..7x1:pr-0 ..7x1:mr-2 ..7x1:w-90px ..7x1:h-90px relative cursor-pointer">
							<div className="..7x1:w-90px ..7x1:h-90px">
								<div className="absolute flex items-center justify-center left-0 right-0 bottom-0 top-0 z-10">
									<svg className="..5x4:h-38px ..5x4:w-38px" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M38.8635 30.8286C39.4964 30.4632 40.2761 30.4632 40.909 30.8286L62.3863 43.2286C63.0191 43.5939 63.409 44.2692 63.409 45C63.409 45.7307 63.0191 46.406 62.3863 46.7714L40.909 59.1713C40.2761 59.5367 39.4964 59.5367 38.8635 59.1713C38.2307 58.806 37.8408 58.1307 37.8408 57.3999V32.6C37.8408 31.8692 38.2307 31.194 38.8635 30.8286ZM41.9317 36.1429V53.8571L57.2726 45L41.9317 36.1429Z" fill="white" />
										<circle cx="45" cy="45" r="44.5" stroke="white" strokeOpacity="0.8" />
									</svg>
								</div>

								<Image src={detailFour} />

							</div>

						</SwiperSlide>
						<SwiperSlide onClick={setVideo} className="pr-2 ..7x1:pr-0 ..7x1:mr-2 ..7x1:w-90px ..7x1:h-90px  cursor-pointer">
							<div className="..7x1:w-90px ..7x1:h-90px"><Image src={detailSix} /></div>

						</SwiperSlide>
						<SwiperSlide onClick={setVideo} className="pr-2 ..7x1:pr-0 ..7x1:mr-2 ..7x1:w-90px ..7x1:h-90px   cursor-pointer">
							<div className="..7x1:w-90px ..7x1:h-90px"><Image src={detailSix} /></div>

						</SwiperSlide>
						<SwiperSlide onClick={setVideo} className="pr-2 ..7x1:pr-0 ..7x1:mr-2 ..7x1:w-90px ..7x1:h-90px  cursor-pointer">
							<div className="..7x1:w-90px ..7x1:h-90px">
								<Image src={detailSix} />

							</div>
						</SwiperSlide>
						<SwiperSlide onClick={setVideo} className="pr-2 ..7x1:pr-0 ..7x1:mr-2 ..7x1:w-90px ..7x1:h-90px  cursor-pointer">
							<div className="..7x1:w-90px ..7x1:h-90px">
								<Image src={detailSix} />

							</div>
						</SwiperSlide>

					</Swiper>




					<button onMouseEnter={hoverSet} onMouseLeave={hoverSet} onClick={prevSlidePhoto} className='activeArrow absolute hover:bg-black transition-all   ..5x2:hidden h-8 w-8 bg-white  -left-4   top-20 flex justify-center  rounded-56px items-center  z-10'>
						<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.53875 7L1.27625 14L0.375 13.125L3.875 7.875L4.4875 7L3.875 6.125L0.375 0.875L1.27625 0L8.53875 7Z" fill={`${buttonHover ? 'white' : "black"}`} />
						</svg>

					</button>
					<button onMouseEnter={hoverNext} onMouseLeave={hoverNext} onClick={nextSlidePhoto} className=' absolute  ..5x2:hidden  -right-3  hover:bg-black transition-all   h-8 w-8 top-20 bg-white z-10 flex justify-center items-center rounded-56px'>
						<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.53875 7L1.27625 14L0.375 13.125L3.875 7.875L4.4875 7L3.875 6.125L0.375 0.875L1.27625 0L8.53875 7Z" fill={`${buttonHoverNext ? 'white' : "black"}`} />
						</svg>



					</button>

				</div>
				<div className="flex ..5x2:flex-col ..5x2:overflow-hidden">
					<div className="mr-60px .2x1.0:mr-2 ..5x2:mr-0">
						<div className="flex items-center mb-6 ..5x2:mb-3 ..6x3:flex-wrap">
							<p className="font-montserrat mr-4 ..7x59:mr-2 ..6x3:mr-20 ..5x01:text-sm font-medium text-xl">5 отзывов со средней оценкой 4,4</p>
							<div className="flex items-center ">
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_1945_1209386)">
										<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
									</g>
									<defs>
										<clipPath id="clip0_1945_1209386">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_1945_1209386)">
										<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
									</g>
									<defs>
										<clipPath id="clip0_1945_1209386">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_1945_1209386)">
										<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
									</g>
									<defs>
										<clipPath id="clip0_1945_1209386">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_1945_1209386)">
										<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
									</g>
									<defs>
										<clipPath id="clip0_1945_1209386">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
								</svg>
							</div>


						</div>
						<button onClick={setShowL} className="h-11 transition-all hover:bg-primary-hover ..6x3:mb-3 ..5x2:h-8 px-5 mb-6 font-montserrat text-xs text-white font-medium bg-primary flex items-center justify-center"><svg className="mr-6px ..5x2:h-14px ..5x2:w-14px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.96233 9.3066C7.57939 9.05131 7.062 9.15479 6.80671 9.53773C6.55141 9.92067 6.65489 10.4381 7.03783 10.6934L10.3256 12.8852C10.8854 13.2584 11.6147 13.2584 12.1746 12.8852L15.4623 10.6934C15.8453 10.4381 15.9488 9.92067 15.6935 9.53773C15.4382 9.15479 14.9208 9.05131 14.5378 9.3066L11.2501 11.4984L7.96233 9.3066Z" fill="white" />
							<path fillRule="evenodd" clipRule="evenodd" d="M1.66675 6.66665C1.66675 4.8257 3.15913 3.33331 5.00008 3.33331H12.5001C14.0835 3.33331 15.4091 4.43742 15.749 5.91777C17.2293 6.25761 18.3334 7.58318 18.3334 9.16665V14.1666C18.3334 16.0076 16.841 17.5 15.0001 17.5H7.50008C5.65913 17.5 4.16675 16.0076 4.16675 14.1666V14.1549C2.76464 14.0255 1.66675 12.8461 1.66675 11.4102V6.66665ZM12.5001 4.99998C13.117 4.99998 13.6556 5.33515 13.9438 5.83331H7.50008C5.65913 5.83331 4.16675 7.3257 4.16675 9.16665V12.4696C3.68862 12.3543 3.33341 11.9238 3.33341 11.4102V6.66665C3.33341 5.74617 4.07961 4.99998 5.00008 4.99998H12.5001ZM7.50008 7.49998C6.57961 7.49998 5.83342 8.24617 5.83342 9.16665V14.1666C5.83342 15.0871 6.57961 15.8333 7.50008 15.8333H15.0001C15.9206 15.8333 16.6667 15.0871 16.6667 14.1666V9.16665C16.6667 8.24617 15.9206 7.49998 15.0001 7.49998H7.50008Z" fill="white" />
						</svg>
							Оставить отзыв</button>


						<div>
							<div className="p-6 .2x1.0:p-3 ..6x3:mb-3 mb-18px bg-gray-100">
								<div className="flex items-center ">
									<div className="-mt-0.5 ..6x3:hidden">
										<Image src={avatar} />
									</div>

									<div className="flex pb-4 ..6x3:pb-3 ..6x3:m-0 border-disable w-full mt-4 ml-4 justify-between items-center border-b ">
										<div className="flex items-center">
											<div className="h-11 mr-3 w-11 hidden ..6x3:block">
												<Image src={avatar} />
											</div>
											<div className="flex items-center ..6x3:flex-col ..6x3:items-start">
												<p className=" font-montserrat font-medium ..5x01:text-13px ..6x3:mb-0.5">Марина Одинцова</p>
												<div className="w-4 border-b mx-2 ..6x3:hidden">

												</div>
												<p className="font-montserrat text-black-70pe ..5x01:text-13px">May 20, 2022</p>

											</div>

										</div>
										<div className="flex items-center ..6x3:pt-5">
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
											</svg>
										</div>
									</div>

								</div>
								<p className="pl-74px ..6x3:pl-0 mt-3 font-montserrat .1x01:text-13px text-black-70pe">Мне показалось, что кожу стянуло после использования. Ощущение после применения среднее</p>


							</div>
							<div className="p-6 .2x1.0:p-3 ..6x3:mb-3 mb-18px bg-gray-100">
								<div className="flex items-center ">
									<div className="-mt-0.5 ..6x3:hidden">
										<Image src={avatar} />
									</div>

									<div className="flex pb-4 ..6x3:pb-3 ..6x3:m-0 border-disable w-full mt-4 ml-4 justify-between items-center border-b ">
										<div className="flex items-center">
											<div className="h-11 mr-3 w-11 hidden ..6x3:block">
												<Image src={avatar} />
											</div>
											<div className="flex items-center ..6x3:flex-col ..6x3:items-start">
												<p className=" font-montserrat font-medium ..5x01:text-13px ..6x3:mb-0.5">Марина Одинцова</p>
												<div className="w-4 border-b mx-2 ..6x3:hidden">

												</div>
												<p className="font-montserrat text-black-70pe ..5x01:text-13px">May 20, 2022</p>

											</div>

										</div>
										<div className="flex items-center  ..6x3:pt-5">
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
											</svg>
										</div>
									</div>

								</div>
								<p className="pl-74px ..6x3:pl-0 mt-3 font-montserrat .1x01:text-13px text-black-70pe">Шикарная маска. Всего за неделю применения кожа становится плотной, упругой и очень приятной на ощупь. Единственное, что мне не подошло - время нанесения. Два дня делала на ночь - вставала сильно отекшей. Перенесла применение на 5-6 часов вечера и все нормализовалось. Отеков нет. Зато есть реально помолодевшая кожа. Микро морщинок словно и не бывало.</p>


							</div>
							<div className="p-6 .2x1.0:p-3 ..6x3:mb-3 mb-18px bg-gray-100">
								<div className="flex items-center ">
									<div className="-mt-0.5 ..6x3:hidden">
										<Image src={avatar} />
									</div>

									<div className="flex pb-4 ..6x3:pb-3 ..6x3:m-0 border-disable w-full mt-4 ml-4 justify-between items-center border-b ">
										<div className="flex items-center">
											<div className="h-11 mr-3 w-11 hidden ..6x3:block">
												<Image src={avatar} />
											</div>
											<div className="flex items-center ..6x3:flex-col ..6x3:items-start">
												<p className=" font-montserrat font-medium ..5x01:text-13px ..6x3:mb-0.5">Марина Одинцова</p>
												<div className="w-4 border-b mx-2 ..6x3:hidden">

												</div>
												<p className="font-montserrat text-black-70pe ..5x01:text-13px">May 20, 2022</p>

											</div>

										</div>
										<div className="flex items-center  ..6x3:pt-5">
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
											</svg>
										</div>
									</div>

								</div>
								<p className="pl-74px ..6x3:pl-0 mt-3 font-montserrat .1x01:text-13px text-black-70pe">Получила потрясающий эффект 🤣 после применения маски. Значительно улучшился цвет лица, кожа просто сияет красотой и здоровьем, маска сняла следы стресса, придала мягкость, бархатистость и упругость коже!!! Мгновенный эффект ухоженной кожи! Спасибо компания TianDe 😘</p>


							</div>
							{show && <>
								<div className="p-6 .2x1.0:p-3 ..6x3:mb-3 mb-18px bg-gray-100">
									<div className="flex items-center ">
										<div className="-mt-0.5 ..6x3:hidden">
											<Image src={avatar} />
										</div>

										<div className="flex pb-4 ..6x3:pb-3 ..6x3:m-0 border-disable w-full mt-4 ml-4 justify-between items-center border-b ">
											<div className="flex items-center">
												<div className="h-11 mr-3 w-11 hidden ..6x3:block">
													<Image src={avatar} />
												</div>
												<div className="flex items-center ..6x3:flex-col ..6x3:items-start">
													<p className=" font-montserrat font-medium ..5x01:text-13px ..6x3:mb-0.5">Марина Одинцова</p>
													<div className="w-4 border-b mx-2 ..6x3:hidden">

													</div>
													<p className="font-montserrat text-black-70pe ..5x01:text-13px">May 20, 2022</p>

												</div>

											</div>
											<div className="flex items-center  ..6x3:pt-5">
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_1945_1209386)">
														<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
													</g>
													<defs>
														<clipPath id="clip0_1945_1209386">
															<rect width="18" height="18" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_1945_1209386)">
														<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
													</g>
													<defs>
														<clipPath id="clip0_1945_1209386">
															<rect width="18" height="18" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_1945_1209386)">
														<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
													</g>
													<defs>
														<clipPath id="clip0_1945_1209386">
															<rect width="18" height="18" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_1945_1209386)">
														<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
													</g>
													<defs>
														<clipPath id="clip0_1945_1209386">
															<rect width="18" height="18" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
												</svg>
											</div>
										</div>

									</div>
									<p className="pl-74px ..6x3:pl-0 mt-3 font-montserrat .1x01:text-13px text-black-70pe">Мне очень понравилась маска, не ожидала такого эффекта после первого применения...)) рекомендую!</p>


								</div>
								<div className="p-6 .2x1.0:p-3 ..6x3:mb-3 mb-18px bg-gray-100">
									<div className="flex items-center ">
										<div className="-mt-0.5 ..6x3:hidden">
											<Image src={avatar} />
										</div>

										<div className="flex pb-4 ..6x3:pb-3 ..6x3:m-0 border-disable w-full mt-4 ml-4 justify-between items-center border-b ">
											<div className="flex items-center">
												<div className="h-11 mr-3 w-11 hidden ..6x3:block">
													<Image src={avatar} />
												</div>
												<div className="flex items-center ..6x3:flex-col ..6x3:items-start">
													<p className=" font-montserrat font-medium ..5x01:text-13px ..6x3:mb-0.5">Марина Одинцова</p>
													<div className="w-4 border-b mx-2 ..6x3:hidden">

													</div>
													<p className="font-montserrat text-black-70pe ..5x01:text-13px">May 20, 2022</p>

												</div>

											</div>
											<div className="flex items-center  ..6x3:pt-5">
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_1945_1209386)">
														<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
													</g>
													<defs>
														<clipPath id="clip0_1945_1209386">
															<rect width="18" height="18" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_1945_1209386)">
														<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
													</g>
													<defs>
														<clipPath id="clip0_1945_1209386">
															<rect width="18" height="18" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_1945_1209386)">
														<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
													</g>
													<defs>
														<clipPath id="clip0_1945_1209386">
															<rect width="18" height="18" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_1945_1209386)">
														<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
													</g>
													<defs>
														<clipPath id="clip0_1945_1209386">
															<rect width="18" height="18" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
												</svg>
											</div>
										</div>

									</div>
									<p className="pl-74px ..6x3:pl-0 mt-3 font-montserrat .1x01:text-13px text-black-70pe">Получила потрясающий эффект 🤣 после применения маски. Значительно улучшился цвет лица, кожа просто сияет красотой и здоровьем, маска сняла следы стресса, придала мягкость, бархатистость и упругость коже!!! Мгновенный эффект ухоженной кожи! Спасибо компания TianDe 😘</p>


								</div>
							</>}
						</div>
						<button onClick={setS} className="w-full h-11 flex justify-center items-center border border-stroke mb-24 font-montserrat text-xs ..6x3:text-13px ..6x3:h-10 hover:bg-gray-light hover:border-white ..5x2:mb-6 ..6x3:hidden font-medium">{show ? 'Свернуть' : "Показать ещё 2 из 5"}</button>
						<button onClick={setS} className="w-full h-11 outline-none justify-center items-center border border-stroke mb-24 font-montserrat text-xs ..6x3:text-13px ..6x3:h-10 ..6x3:flex hidden ..5x2:mb-6 ">  {show ? 'Свернуть' : "Показать ещё"}</button>
					</div>
					<div className="..5x2:flex ..5x2:items-center ..5x2:flex-col">
						<p className="mb-4 font-montserrat text-xl ..6x3:mb-6px ..6x3:text-sm ..6x3:leading-140% font-medium leading-120%">Отмечай @TianDe  в социальных сетях и мы разместим ваш пост здесь!</p>
						<div className="commentPhoto relative overflow-hidden mr-1.5">
							<Image src={commentsPhoto} />
							<button className=" bg-white-60pe absolute left-6 top-6 ..6x3:top-4 ..6x3:left-4 hover:bg-white hover:font-medium transition-all px-8 h-11 flex justify-center items-center font-montserrat text-xs font-medium ..6x3:text-xs ..6x3:h-8 ..6x3:px-5">Подробнее</button>
						</div>

					</div>
				</div>
			</div>
		</section >
	)
}
export default DetailComments
