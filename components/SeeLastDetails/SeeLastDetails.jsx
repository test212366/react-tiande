import specialTree from '../../images/templates/detailCardTreeSpecial.jpg'


import two from '../../images/templates/2Offer.jpg';
import tree from '../../images/templates/3Offer.jpg';
import four from '../../images/templates/4Offer.jpg';
import five from '../../images/templates/5Offer.jpg';
import specialOne from '../../images/templates/detailCardOneSpecial.jpg'
import specialTwo from '../../images/templates/detailCardTwoSpecial.jpg'
import tttt from '../../images/templates/tttt.png';
import oneL from '../../images/templates/oneItemSearchSlider.jpg'
import treeL from '../../images/templates/treeItemSearch.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import SpecialOfferItem from '../SpecialOfferItem/SpecialOfferItem';
import SliderSeeLast from '../SliderSeeLast/SliderSeeLast';
import ProductCard from '../ProductCard/ProductCard';




const SeeLastDetails = () => {

	const sliderSpecial = useRef(null)


	const [buttonHover, setButtonHover] = useState(false),
		[buttonHoverNext, setButtonHoverNext] = useState(false)

	const hoverSet = () => setButtonHover(!buttonHover),
		hoverNext = () => setButtonHoverNext(!buttonHoverNext)


	const nextSlidePhotoSpecial = () => {
		if (sliderSpecial.current !== null && sliderSpecial.current.swiper !== null) sliderSpecial.current.swiper.slideNext();
	},
		prevSlidePhotoSpecial = () => {
			if (sliderSpecial.current !== null && sliderSpecial.current.swiper !== null) sliderSpecial.current.swiper.slidePrev();
		}


	//className='sliderPaginationCustom  ' pagination={{ clickable: true, type: 'bullets', renderBullet: (i, clas) => '<div class="swiper-pagination-bullet Cus"></div>' }}
	return (
		<section className="  bg-gray-100">
			<div className="px-80px relative .3x1:px-10 ..5x2:px-3">
				<h4 className="font-montserrat pt-10 ..5x2:pt-6 ..5x2:mb-2 ..6x3:text-sm ..5x2:text-base  text-26px font-medium mb-6 ">Специальные предложения</h4>
				<Swiper ref={sliderSpecial} slidesPerView={2} scrollbar={{
					hide: false,
					draggable: true,
				}} modules={[Navigation, Pagination, Scrollbar]} className=' photoCus !overflow-hidden ..5x2:!overflow-visible  sliderDetail' breakpoints={{
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

					<SwiperSlide className="..7x1:!w-44 pb-10 ..7x1:mr-2 ">
						<ProductCard
							obj={{
								img: [specialOne],
								isDetailCard: true,
								bgWhite: true,
								text: 'шампунь для глубоко очищения с углем',
								iText: 'Акции',
								balls: '1.4 Б',
								priceDe: '3 750',
								prodDayLabel: true,
								newLabel: true,
								hitLabel: true,
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
								img: [tttt, tttt],
								text: ' питательный шампунь с корнем имбиря ',
								iText: 'Состав акции',
								bgWhite: true,
								balls: '1.4 Б',
								priceDe: '3 750',
								packS: '4=5',
								isDetailCard: true,
								newLabel: true,

								saleLabel: true,
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
								img: [specialTree, specialTree],
								text: ' питательный шампунь с корнем имбиря ',
								iText: 'Состав акции',
								bgWhite: true,
								balls: '1.4 Б',
								priceDe: '3 750',
								packS: '4=5',
								isDetailCard: true,
								newLabel: true,

								saleLabel: true,
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
								packS: '4=5',
								isDetailCard: true,
								newLabel: true,

								saleLabel: true,
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
								packS: '4=5',
								isDetailCard: true,
								newLabel: true,

								saleLabel: true,
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
								packS: '4=5',
								isDetailCard: true,
								newLabel: true,

								saleLabel: true,
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
								packS: '4=5',
								isDetailCard: true,
								newLabel: true,

								saleLabel: true,
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
								packS: '4=5',

								newLabel: true,
								isDetailCard: true,
								saleLabel: true,
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
								packS: '4=5',

								newLabel: true,
								isDetailCard: true,
								saleLabel: true,
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
								packS: '4=5',

								newLabel: true,
								isDetailCard: true,
								saleLabel: true,
								price: {
									old: '₽ 920.00',
									new: '₽ 764.00',
								},
							}}
						/>	</SwiperSlide>
					<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
						<ProductCard
							obj={{
								img: [tree, tree],
								text: ' питательный шампунь с корнем имбиря ',
								iText: 'Состав акции',
								bgWhite: true,
								balls: '1.4 Б',
								priceDe: '3 750',
								packS: '4=5',
								isDetailCard: true,
								newLabel: true,

								saleLabel: true,
								price: {
									old: '₽ 920.00',
									new: '₽ 764.00',
								},
							}}
						/>	</SwiperSlide>





				</Swiper>
				<button onMouseEnter={hoverSet} onMouseLeave={hoverSet} onClick={prevSlidePhotoSpecial} className='absolute hover:bg-black transition-all w-11 h-11 rounded-32px bg-white flex items-center justify-center ..5x2:hidden  left-60px   top-308px   z-10'>
					<svg className="activeArrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill={`${buttonHover ? 'white' : "black"}`} />
					</svg>
				</button>
				<button onMouseEnter={hoverNext} onMouseLeave={hoverNext} onClick={nextSlidePhotoSpecial} className='absolute  w-11 h-11 hover:bg-black transition-all rounded-32px bg-white flex items-center justify-center ..5x2:hidden right-69px top-308px z-10'>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill={`${buttonHoverNext ? 'white' : "black"}`} />
					</svg>


				</button>
			</div>
			<SliderSeeLast />


		</section>
	)
}
export default SeeLastDetails