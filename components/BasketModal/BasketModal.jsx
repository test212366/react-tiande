import SearchWindowItem from "../SearchWindow/SearchWindowItem"
import one from '../../images/templates/basket1.png'

import { SwiperSlide, Swiper } from "swiper/react"
import ProductCard from "../ProductCard/ProductCard"
import specialOne from '../../images/templates/detailCardOneSpecial.jpg'
import EffectsItemDetail from "../EffectsItemDetail/EffectsItemDetail"
const BasketModal = ({ show, setShow }) => {
	return (
		<>
			<div onClick={setShow} className={`bg-white-80pe cursor-pointer blur-sm fixed top-0 left-0 bottom-0 z-20 right-0 ${show ? '!block' : 'hidden'}`}></div>
			<section className={`border fixed w-1100px .1x01:w-1000px left-1/2 -translate-x-1/2 top-32  z-100 border-black-70pe bg-white py-13px ${show ? '!block' : "hidden"} `}>
				<div className="px-5 w-full border-b border-stroke flex items-center justify-between">
					<p className="font-montserrat font-medium text-32px mb-13px">Корзина</p>
					<div className="flex items-center ">
						<p className="mr-3 font-montserrat text-13px font-medium text-gray-quick-silver">Продолжить покупки</p>
						<div className="pl-3 border-l cursor-pointer border-stroke">
							<svg onClick={setShow} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21.3334 10.666L10.6667 21.3327M10.6667 10.666L21.3334 21.3327" stroke="black" stroke-width="1.5" stroke-linecap="round" />
							</svg>

						</div>
					</div>

				</div>
				<div className="flex ">
					<div className="m-5">
						<p className="flex p-2 bg-label-bg items-center font-montserrat text-sm ">
							<svg className="mr-6px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M17.5001 5.8332L7.50008 15.8332L2.91675 11.2499L4.09175 10.0749L7.50008 13.4749L16.3251 4.6582L17.5001 5.8332Z" fill="#337202" />
							</svg>
							Товар добавлен в заказ. Хранится в корзине 14 дней
						</p>
						<div className="mb-5">
							<SearchWindowItem src={one} noBorder={true} price={'0.00'} isProductToDay={true} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} promo={true} balls={24} oldPriceFr={'740.00'} isFree={true} />

						</div>
						<div>
							<p className="font-montserrat text-11px letter-spacing-1px uppercase mb-2">С этим товаром покупают</p>

							<div  >
								<Swiper slidesPerView={3} className='w-664px .1x01:w-531px'>
									<SwiperSlide>
										<ProductCard
											obj={{
												img: [specialOne, specialOne],
												isDetailCard: true,
												isMiniProduct: true,
												bgWhite: true,
												text: 'Укрепляющая сыворотка для контура овала лица с..',
												iText: 'Акции',
												balls: '1.4 Б',
												priceDe: '3 750',
												prodDayLabel: true,

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
												img: [specialOne, specialOne],
												isDetailCard: true,
												isMiniProduct: true,
												bgWhite: true,
												text: 'Укрепляющая сыворотка для контура овала лица с..',
												iText: 'Акции',
												balls: '1.4 Б',
												priceDe: '3 750',
												prodDayLabel: true,

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
												img: [specialOne, specialOne],
												isDetailCard: true,
												isMiniProduct: true,
												bgWhite: true,
												text: 'Укрепляющая сыворотка для контура овала лица с..',
												iText: 'Акции',
												balls: '1.4 Б',
												priceDe: '3 750',
												prodDayLabel: true,

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
												img: [specialOne, specialOne],
												isDetailCard: true,
												isMiniProduct: true,
												bgWhite: true,
												text: 'Укрепляющая сыворотка для контура овала лица с..',
												iText: 'Акции',
												balls: '1.4 Б',
												priceDe: '3 750',
												prodDayLabel: true,

												price: {
													old: '₽ 920.00',
													new: '₽ 764.00',
												},
											}}
										/>
									</SwiperSlide>
								</Swiper>
							</div>


						</div>

					</div>
					<div className='mr-5 mt-5   w-full'>
						<div className='px-4 border border-stroke pt-2 border-b-0  flex justify-between items-center '>
							<p className='text-22px font-montserrat'>Заказ</p>
							<div className='flex'>
								<p className='font-montserrat font-medium text-13px text-gray-quick-silver mr-1'>5 шт.</p>
								<p className='font-montserrat flex items-center font-medium text-13px text-black-70pe'><svg className='mr-0.5' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.333 14.3333C10.333 14.3333 5.99967 14.6667 3.66634 12C1.33301 9.33333 1.33301 1.33333 1.33301 1.33333C1.33301 1.33333 9.33301 1 11.9997 3C14.6663 5 13.9997 10.6667 13.9997 10.6667" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M14.6663 14.6668C14.6663 14.6668 10.9399 11.8507 8.66634 9.3335C6.39277 6.81633 5.33301 4.3335 5.33301 4.3335" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M8.66699 9.33333L9.00033 5" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M8.66634 9.33333L5.33301 9" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
								</svg> 24 Б.</p>
							</div>
						</div>
						<div className='px-4 border-x border-stroke flex justify-between pt-1'>
							<p className='font-montserrat font-normal text-13px text-gray-quick-silver'>Сумма, ₽</p>
							<p className='font-montserrat font-normal text-13px '>5 080.00 ₽</p>
						</div>
						<div className='px-4 border-x border-stroke flex justify-between pt-2'>
							<p className='font-montserrat font-normal text-13px text-gray-quick-silver'>Скидка по акциям</p>
							<p className='font-montserrat font-normal text-13px text-label-pink-2'>-702.00 ₽</p>
						</div>
						<div className='px-4 border-x border-stroke flex justify-between pt-2'>
							<p className='font-montserrat font-normal text-13px text-gray-quick-silver'>Скидка 35%</p>
							<p className='font-montserrat font-normal text-13px text-label-pink-2'>-1 532.30 ₽</p>
						</div>
						<div className=" border-x border-stroke">
							<div className=' mx-4 flex justify-between pt-2 pb-10px border-b border-dashed border-gray'>
								<p className='font-montserrat font-normal text-13px text-gray-quick-silver'>Скидка по промокоду</p>
								<p className='font-montserrat font-normal text-13px text-label-pink-2'>-85 ₽</p>
							</div>
						</div>

						<div className=''>
							<div className='flex border-x border-stroke px-4 pb-3 justify-between  pt-2 items-center'>
								<p className='font-montserrat text-22px'>Итого</p>
								<div className='flex items-center'>
									<p className='mr-1 text-label-pink-2 text-sm font-montserrat font-medium'>4 320.00 ₽</p>
									<span className='font-medium font-montserrat text-gray-light2'>/</span>
									<p className='ml-1 text-label-orange font-montserrat font-medium text-sm'> 3 750 De</p>
								</div>

							</div>
							<div className='bg-gray-light  border-t-0 border border-stroke py-3   px-4'>
								<button className='px-7 w-full py-2 mb-2       transition-all hover:bg-gray-light2 h-12     bg-white text-xs font-montserrat font-medium text-primary border border-primary'>Перейти в корзину</button>
								<button className='px-8 w-full py-2   transition-all hover:bg-primary-hover   h-12     text-xs font-montserrat  font-medium text-white bg-primary border border-primary'>Оформить заказ</button>

							</div>
						</div>

					</div>
				</div>
				<div className="m-5 mt-0 p-3 bg-gray-light ">
					<p className="letter-spacing-1px uppercase text-11px font-montserrat mb-2">Из этой категории</p>
					<div className="flex ">
						<EffectsItemDetail title={'очищение и увлажнение'} />
						<EffectsItemDetail title={'защита от UF-излучения'} />
						<EffectsItemDetail title={'тонус'} />
						<EffectsItemDetail title={'коррекция морщин'} />

					</div>

				</div>
				<div className="mx-5 mb-5 flex items-center font-montserrat font-medium text-xs text-black-70pe">
					<svg className="mr-10px" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.33341 4.66602L4.66675 9.33268M4.66675 4.66602L9.33341 9.33268" stroke="#F14155" stroke-width="1.5" stroke-linecap="round" />
					</svg>
					Закрыть и больше не показывать
				</div>
			</section>
		</>

	)
}
export default BasketModal