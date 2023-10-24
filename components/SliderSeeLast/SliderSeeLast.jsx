import { useRef } from "react";
import one from '../../images/templates/DetailCardOne.jpg'
import oneS from '../../images/templates/1Offer.jpg';
import two from '../../images/templates/2Offer.jpg';
import tree from '../../images/templates/3Offer.jpg';
import four from '../../images/templates/4Offer.jpg';
import five from '../../images/templates/5Offer.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import oneL from '../../images/templates/oneItemSearchSlider.jpg'
import treeL from '../../images/templates/treeItemSearch.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'
import SpecialOfferItem from "../SpecialOfferItem/SpecialOfferItem";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const SliderSeeLast = () => {
	const [buttonHover, setButtonHover] = useState(false),
		[buttonHoverNext, setButtonHoverNext] = useState(false)

	const hoverSet = () => setButtonHover(!buttonHover),
		hoverNext = () => setButtonHoverNext(!buttonHoverNext)
	const seeSlider = useRef(null)

	const nextSlidePhotoSee = () => {
		if (seeSlider.current !== null && seeSlider.current.swiper !== null) seeSlider.current.swiper.slideNext();
	},
		prevSlidePhotoSee = () => {
			if (seeSlider.current !== null && seeSlider.current.swiper !== null) seeSlider.current.swiper.slidePrev();
		}
	//pagination={{ clickable: true, type: 'bullets', renderBullet: (i, clas) => '<div class="swiper-pagination-bullet Cus"></div>' }} className='sliderPaginationCustom'
	return (
		<div className="relative px-80px pb-60px .3x1:px-10 ..5x2:px-3">
			<h4 className="font-montserrat pt-60px ..5x2:pt-6 ..5x2:mb-2 ..6x3:text-sm ..5x2:text-base text-26px font-medium mb-6 ">Вы недавно смотрели</h4>
			<Swiper ref={seeSlider} slidesPerView={2} scrollbar={{
				hide: false,
				draggable: true,
			}} modules={[Navigation, Scrollbar]} className=' photoCus !overflow-hidden ..5x2:!overflow-visible sliderDetailLast ' breakpoints={{
				360: {
					slidesPerView: 2
				},
				575: {
					slidesPerView: 3
				},
				750: {
					slidesPerView: 4
				},
				930: {
					slidesPerView: 5
				},
				1000: {
					slidesPerView: 3
				},
				1230: {
					slidesPerView: 4
				},
				1565: {
					slidesPerView: 5
				},
				1850: {
					slidesPerView: 6
				}
			}}    >

				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<ProductCard
						obj={{
							img: [oneS, oneS],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',
							isDetailCard: true,


							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<ProductCard
						obj={{
							img: [two, two],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',

							isDetailCard: true,

							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>

				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<ProductCard
						obj={{
							img: [tree, tree],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',

							isDetailCard: true,

							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>

				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<ProductCard
						obj={{
							img: [four, four],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',
							isDetailCard: true,


							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<ProductCard
						obj={{
							img: [five, five],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',
							isDetailCard: true,


							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<ProductCard
						obj={{
							img: [one, one],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',
							isDetailCard: true,


							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>



				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 " >
					<ProductCard
						obj={{
							img: [two, two],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',
							isDetailCard: true,


							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>



				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 " >
					<ProductCard
						obj={{
							img: [two, two],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',

							isDetailCard: true,

							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 " >
					<ProductCard
						obj={{
							img: [two, two],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',

							isDetailCard: true,

							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 " >
					<ProductCard
						obj={{
							img: [two, two],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',

							isDetailCard: true,

							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>	</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<ProductCard
						obj={{
							img: [two, two],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							bgWhite: true,
							balls: '1.4 Б',
							priceDe: '3 750',

							isDetailCard: true,

							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>	</SwiperSlide>





			</Swiper>
			<button onMouseEnter={hoverSet} onMouseLeave={hoverSet} onClick={prevSlidePhotoSee} className='absolute w-11 h-11 rounded-32px hover:bg-black transition-all bg-white flex items-center justify-center ..5x2:hidden  left-14   top-80   z-10'>
				<svg className="activeArrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill={`${buttonHover ? 'white' : "black"}`} />
				</svg>
			</button>
			<button onMouseEnter={hoverNext} onMouseLeave={hoverNext} onClick={nextSlidePhotoSee} className='absolute  w-11 h-11 rounded-32px bg-white flex items-center justify-center hover:bg-black transition-all ..5x2:hidden right-69px  top-80 z-10'>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill={`${buttonHoverNext ? 'white' : "black"}`} />
				</svg>


			</button>
		</div>
	)
}
export default SliderSeeLast