import { useState } from 'react';
import { useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import fullSc from '../../images/templates/FullScreen.jpg';
import naborN from '../../images/templates/naborN.png';
import tttt from '../../images/templates/tttt.png';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderBtnNext from './SliderBtnNext';
import SliderBtnPrev from './SliderBtnPrev';
import NewSaleCardProduct from '../NewSaleCardProduct/NewSaleCardProduct';

function SpecialOffers({ refL }) {
	const slider = useRef(null);

	const [currentTab, setCurrentTab] = useState('all');

	const currentTabHandler = (num) => {
		setCurrentTab(num);
	};

	const nextSlideFilt = () => {
		if (slider.current !== null && slider.current.swiper !== null)
			slider.current.swiper.slideNext();
	},
		prevSlideFilt = () => {
			if (slider.current !== null && slider.current.swiper !== null)
				slider.current.swiper.slidePrev();
		};

	return (
		<article
			ref={refL}
			id="sec-2"
			className="container-base relative bg-white pb-32 ..5x2:pb-6 .1x1:pb-28"
		>
			<div className="max-w-1460px mx-auto mt-16 ..5x2:mt-2 flex items-center border-b border-gray-border pb-2 overflow-x-auto scrol whitespace-nowrap font-medium font-montserrat .4x11:ml-3 ">
				<p
					onClick={() => currentTabHandler('all')}
					className={`..6x3:text-sm  ..6x3:mr-3 ..6x3:pr-3 ..6x1:text-base flex items-center h-8 hover:text-primary transition-all cursor-pointer mr-8 border-gray-border border-r  pr-8 ${currentTab === 'all' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Все спецпредложения
				</p>
				<p
					onClick={() => currentTabHandler('1')}
					className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${currentTab === '1' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Новинки
				</p>
				<p
					onClick={() => currentTabHandler('2')}
					className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${currentTab === '2' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Хит продаж
				</p>
				<p
					onClick={() => currentTabHandler('3')}
					className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${currentTab === '3' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Суперцена
				</p>
				<p
					onClick={() => currentTabHandler('4')}
					className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer pr-3 mr-8 ${currentTab === '4' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Наборы
				</p>
			</div>

			<Swiper
				ref={slider}
				className="secondSlider max-w-1460px mx-auto !pt-18px !pb-6 .4x11:!ml-3"
				modules={[Navigation, Scrollbar]}
				scrollbar={{
					hide: false,
					draggable: true,
				}}
				slidesPerView={1.8}
				spaceBetween={17}
				breakpoints={{
					1470: {
						slidesPerView: 5,
						spaceBetween: 17,
					},
					1300: {
						slidesPerView: 4.5,
						spaceBetween: 17,
					},
					999: {
						slidesPerView: 3.5,
						spaceBetween: 17,
					},
					850: {
						slidesPerView: 4.5,
						spaceBetween: 17,
					},
					650: {
						slidesPerView: 3.5,
						spaceBetween: 17,
					},
					470: {
						slidesPerView: 2.5,
						spaceBetween: 17,
					},
					399: {
						slidesPerView: 2,
						spaceBetween: 17,
					},
				}}
			>
				<SwiperSlide>
					<ProductCard
						obj={{
							img: [tttt],
							text: ' для очищения и тонизирования ',
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

				<SwiperSlide>
					<ProductCard
						obj={{
							img: [tttt, fullSc, fullSc],
							text: ' Укрепляющая сыворотка для контура овала лица с коллагеном ',
							iText: 'Состав набора',
							packLabel: 5,
							prodDayLabel: true,
							hitLabel: true,
							saleLabel: true,
							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<ProductCard
						obj={{
							img: [tttt, fullSc, fullSc, fullSc],
							text: ' питательный шампунь с корнем имбиря ',
							iText: 'Состав акции',
							colors: true,
							balls: '1.4 Б',
							priceDe: '3 750',
							packS: '4=5',
							prodDayLabel: true,
							newLabel: true,
							hitLabel: true,
							saleLabel: true,
							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<ProductCard
						obj={{
							img: [tttt, fullSc],
							text: ' Укрепляющая сыворотка для контура овала лица с коллагеном ',
							iText: 'Состав набора',
							packLabel: 4,
							newLabel: true,
							hitLabel: true,
							saleLabel: true,
							price: {
								currentPrice: '₽ 900.00',
							},
						}}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<ProductCard
						obj={{
							img: [tttt, fullSc, fullSc, fullSc],
							text: ' Fresh click: дотянуться до звезды',
							iText: 'Акции',
							balls: '1.4 Б',
							priceDe: '3 750',
							prodDayLabel: true,
							newLabel: true,
							price: {
								currentPrice: '₽ 1634.00',
							},
						}}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<ProductCard
						obj={{
							img: [naborN, fullSc],
							text: ' Укрепляющая сыворотка для контура овала лица с коллагеном ',
							iText: 'Акции',
							balls: '1.4 Б',
							saleLabel: true,
							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<ProductCard
						obj={{
							img: [tttt, fullSc, fullSc],
							text: ' Укрепляющая сыворотка для контура овала лица с коллагеном ',
							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<ProductCard
						obj={{
							img: [tttt],
							text: ' Укрепляющая сыворотка для контура овала лица с коллагеном ',
							iText: 'Акции',
							colors: true,
							balls: '1.4 Б',
							priceDe: '3 750',
							prodDayLabel: true,
							newLabel: true,
							hitLabel: true,
							saleLabel: true,
							price: {
								old: '₽ 920.00',
								new: '₽ 764.00',
							},
						}}
					/>
				</SwiperSlide>
			</Swiper>

			<div className="absolute top-310px w-full ..5x2:hidden">
				<div className="max-w-1505px mx-auto flex justify-between">
					<SliderBtnPrev onClick={prevSlideFilt} />
					<SliderBtnNext onClick={nextSlideFilt} />
				</div>
			</div>
		</article>
	);
}
export default SpecialOffers;
