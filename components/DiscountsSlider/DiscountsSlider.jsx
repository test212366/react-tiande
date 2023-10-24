import { useRef, useState } from 'react';

import imgDiscount from '../../images/templates/discountImg.jpg';

import testFon from '../../images/templates/testFon.jpg';
import fonTestSlidePlus from '../../images/templates/fonTestSlidePluses.jpg';

import SlidePOne from '../../images/templates/SlidePOne.png';
import SlidePTwo from '../../images/templates/SlidePTwo.png';
import SlidePThree from '../../images/templates/SlidePThree.png';
import SlidePFour from '../../images/templates/SlidePFour.png';
import SlidePFive from '../../images/templates/SlidePFive.png';
import SlidePSix from '../../images/templates/SlidePSix.png';

import SlideTwo from '../../images/templates/SlideTwo.jpg';
import SlideThree from '../../images/templates/SlideThree.jpg';
import SlideFour from '../../images/templates/SlideFour.jpg';
import SlideFive from '../../images/templates/SlideFive.jpg';
import SlideSix from '../../images/templates/SlideSix.jpg';
import SlideSeven from '../../images/templates/SlideSeven.jpg';
import SlideLast from '../../images/templates/SlideLast.jpg';
import SlidePrePreLast from '../../images/templates/SlidePrePreLast.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation,
	Pagination,
	Scrollbar,
	Autoplay,
	EffectCreative,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';

import SlideItem from './SlideItem';
import SliderBtnNext from './SliderBtnNext';
import SliderBtnPrev from './SliderBtnPrev';
import SlideItemWithoutPluses from './SlideItemWithoutPluses';

function DiscountsSlider({ refL, setWindowInfo }) {
	const slider = useRef(null);

	const nextSlideFilt = () => {
		if (slider.current !== null && slider.current.swiper !== null)
			slider.current.swiper.slideNext(1000);
	},
		prevSlideFilt = () => {
			if (slider.current !== null && slider.current.swiper !== null)
				slider.current.swiper.slidePrev(1000);
		};

	const startAutoPlay = () => {
		if (slider.current !== null && slider.current.swiper !== null)
			slider.current.swiper.autoplay.start();
	},
		stopAutoPlay = () => {
			if (slider.current !== null && slider.current.swiper !== null)
				slider.current.swiper.autoplay.stop();
		};
	return (
		<div ref={refL} id="sec-1">
			<section className="container-base h-800px ..5x2:h-492px">
				<Swiper
					ref={slider}
					className="firstSlider !h-full"
					modules={[
						Navigation,
						Pagination,
						Scrollbar,
						Autoplay,
						EffectCreative,
					]}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					effect={'creative'}
					creativeEffect={{
						prev: {
							shadow: false,
							translate: [0, 0, -400],
						},
						next: {
							translate: ['100%', 0, 0],
						},
					}}
					grabCursor={true}
					speed={1000}
					scrollbar={{
						hide: false,
						draggable: true,
					}}
				>
					<SwiperSlide>
						<SlideItem
							stopAutoPlay={stopAutoPlay}
							startAutoPlay={startAutoPlay}
							fon={fonTestSlidePlus}
							setWindowInfo={setWindowInfo}
							pluses={[
								{
									num: '3',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила',
									price: { old: '₽ 900.00', new: '₽ 724.00', De: '20' },
								},
								{
									num: '7',
									title: ' Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '321' },
								},
								{
									num: '9',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
							]}
							imgRight={imgDiscount}
							imgLeft={SlidePOne}
							text="Шампунь, маска, тоник «Bio Rehab»"
							titleTag=" Эффекты:"
							tags={[
								'против перхоти',
								'против седины',
								'против выпадения',
								'еще эффект',
								'еще эффект',
								'еще эффект',
								'еще эффект',
								'еще эффект',
							]}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItem
							stopAutoPlay={stopAutoPlay}
							startAutoPlay={startAutoPlay}
							setWindowInfo={setWindowInfo}
							pluses={[
								{
									num: '3',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '2',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '4',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '7',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '9',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
							]}
							imgRight={SlideTwo}
							imgLeft={SlidePTwo}
							text="Бьюти-маски для лица"
							titleTag=" Эффекты:"
							tags={[
								'восстановление',
								'питание',
								'антиоксидантный эффект',
								'мимические морщины',
								'следы усталости',
								'защита',
								'увлажнение',
							]}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItem
							stopAutoPlay={stopAutoPlay}
							startAutoPlay={startAutoPlay}
							setWindowInfo={setWindowInfo}
							pluses={[
								{
									num: '8',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
							]}
							imgRight={SlideThree}
							imgLeft={SlidePThree}
							text="Сыворотка с коллагеном"
							titleTag=" Эффекты:"
							tags={[
								'восстановление',
								'питание',
								'мимические морщины',
								'водоросли',
							]}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItem
							stopAutoPlay={stopAutoPlay}
							startAutoPlay={startAutoPlay}
							setWindowInfo={setWindowInfo}
							pluses={[
								{
									num: '3',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '1',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '6',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '8',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '10',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
							]}
							imgRight={SlideFour}
							imgLeft={SlidePFour}
							text="Прокладки на травах с лечебными компонентами"
							titleTag=" Эффекты:"
							tags={[
								'защита',
								'комфорт',
								'сухость',
								'нормализация цикла',
								'дышащие',
								'абсорбент',
								'натуральные',
								'энергия трав',
							]}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItem
							stopAutoPlay={stopAutoPlay}
							startAutoPlay={startAutoPlay}
							setWindowInfo={setWindowInfo}
							pluses={[
								{
									num: '3',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '4',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
							]}
							imgRight={SlideFive}
							imgLeft={SlidePFive}
							text="Легендарный шампунь и бальзам 
с экстрактом женьшеня"
							titleTag=" Эффекты:"
							tags={[
								'восстановление структуры',
								'эффект роста',
								'против перхоти',
								'объем',
								'сила',
								'защита от потери влаги',
								'для ослабленных волос',
							]}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItem
							stopAutoPlay={stopAutoPlay}
							startAutoPlay={startAutoPlay}
							setWindowInfo={setWindowInfo}
							pluses={[
								{
									num: '1',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '3',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '5',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '6',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '8',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
								{
									num: '10',
									title: 'Шампунь - активатор роста Bio Rehab',
									text: 'Сила - в длине',
									price: { old: '₽ 900.00', new: '₽ 764.00', De: '200' },
								},
							]}
							imgRight={SlideSeven}
							imgLeft={SlidePSix}
							text="Акция весны"
							titleTag=" Категории:"
							tags={[
								'лицо',
								'тело',
								'волосы',
								'макияж',
								'парфюм',
								'мужчинам',
								'детям',
								'дом',
								'гигиена',
								'wellness',
								'аксессуары',
							]}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItem
							stopAutoPlay={stopAutoPlay}
							startAutoPlay={startAutoPlay}
							label="new"
							textStyles={{
								fontSize: 52,
								fontWeight: 500,
								lineHeight: '160%',
								fontFamily: 'Montserrat',
								fontStyle: 'italic',
							}}
							underText="Шампунь, маска, сыворотка, бальзам, пенка, лосьон"
							imgRight={SlideSix}
							text="CЕРИЯ «FRESH CLICK»"
							titleTag=" Эффекты:"
							tags={[
								'восстановление структуры',
								'эффект роста',
								'против перхоти',
								'объем',
								'сила',
								'защита от потери влаги',
								'для ослабленных волос',
							]}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItemWithoutPluses
							testFon={testFon}
							imgRight={SlideThree}
							textLabel="Бьюти-эксперт"
							title="ТВОЕЙ КРАСОТЫ И ЗДОРОВЬЯ"
							text="&gt; 700 единиц товара c доставкой в 32 страны Мира!"
							titleStyle={{
								fontStyle: 'italic',
								fontWeight: 600,
							}}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItemWithoutPluses
							testFon={testFon}
							imgRight={SlidePrePreLast}
							textLabel="Бьюти-эксперт"
							title="ТВОЕЙ КРАСОТЫ И ЗДОРОВЬЯ"
							text="&gt; 700 единиц товара c доставкой в 32 страны Мира!"
							titleStyle={{
								fontStyle: 'italic',
								fontWeight: 500,
							}}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItemWithoutPluses
							testFon={testFon}
							imgRight={SlideLast}
							title="ПРОВОДНИК ТВОЕЙ КРАСОТЫ"
							text="Жаркие скидки  уже ждут тебя в каталоге, не откладывай красоту на завтра!"
							titleStyle={{
								fontWeight: 600,
							}}
						/>
					</SwiperSlide>

					<SwiperSlide>
						<SlideItemWithoutPluses
							testFon={testFon}
							imgRight={SlideLast}
							title="ПРОВОДНИК ТВОЕЙ КРАСОТЫ"
							text="Жаркие скидки  уже ждут тебя в каталоге, не откладывай красоту на завтра!"
							titleStyle={{
								fontWeight: 500,
								color: 'white',
								padding: 12,
								background:
									'linear-gradient(138.93deg, #649802 17.79%, #1F5201 83.6%)',
							}}
						/>
					</SwiperSlide>

					<div className="absolute w-220px h-11 bg-white-80pe rounded-56px flex justify-between z-10 plus conBtnsFirstSlider ..5x2:w-180px ..5x2:h-8">
						<SliderBtnPrev onClick={prevSlideFilt} />
						<SliderBtnNext onClick={nextSlideFilt} />
					</div>
				</Swiper>
			</section>
		</div>
	);
}
export default DiscountsSlider;
