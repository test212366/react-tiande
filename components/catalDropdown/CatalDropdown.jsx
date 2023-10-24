import preview from '../../images/templates/preview.jpg';
import one from '../../images/templates/botoluxe.jpg';
import two from '../../images/templates/bio.jpg';
import tree from '../../images/templates/collag.jpg';
import four from '../../images/templates/marine.jpg';
import sl from '../../images/templates/sl.jpg';
import Slider from 'react-slick';

import Image from 'next/image';
import DropFilterItem from '../DropFilterItem/DropFilterItem';
import CatalDropDownItem from '../CatalDropDownItem/CatalDropDownItem';
import CatalDropdownNext from '../CatalDropDownNext/CatalDropDownNext';
import CatalDropdownPrev from '../CatalDropDownPrev/CatalDropDownPrev';
const CatalDropdown = ({ show, setShow, scrollMenu, showDrop }) => {
	const settings = {
		dots: false,
		Infinity: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <CatalDropdownNext />,
		prevArrow: <CatalDropdownPrev />,
		responsive: [
			{
				breakpoint: 1410,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
		],
	},
		settingsTwo = {
			dots: true,
			Infinity: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		};

	return (
		<>
			<div onMouseEnter={showDrop} onMouseLeave={setShow} className={`${show.showCatal ? 'active  ' : "hiddenCustom"}  absolute top-70 ${scrollMenu ? 'top-10 !fixed' : ""} left-0 right-0 bg-red h-10 z-30`}></div>
			<section
				onMouseLeave={setShow}
				onMouseEnter={showDrop}
				className={`absolute  flex z-20 drop  right-0 transition-all bg-white border-t border-gray dropDownShadow -mt-1 ${scrollMenu ? '-mt-3.5' : ""} ${show.showCatal ? 'active' : 'hiddenCustom'
					}`}
			>
				<div className="bg-white-BG_FILTER w-52   pl-3 pt-3 pb-3">
					<DropFilterItem
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon_DE_CATALOG.8f87018f.png&w=640&q=75"
						title="De-каталог"
					/>
					<DropFilterItem
						title="Лицо"
						src="_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2tian.4e6e4278.jpg&w=1080&q=75"
					/>
					<DropFilterItem
						title="Тело"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2product.132a978a.jpg&w=640&q=75"
					/>
					<DropFilterItem
						title="Волосы"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3product.0ea2089c.jpg&w=640&q=75"
					/>
					<DropFilterItem
						title="Макияж"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4product.efc031fd.jpg&w=640&q=75"
					/>
					<DropFilterItem
						title="Парфюм"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5product.f3b3a964.jpg&w=640&q=75"
					/>
					<DropFilterItem
						title="Мужчинам"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6product.7836d942.jpg&w=640&q=75"
					/>
					<DropFilterItem
						title="Детям"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7product.652b907d.jpg&w=640&q=75"
					/>
					<DropFilterItem
						title="Дом"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8product.fc8dc70a.jpg&w=640&q=75"
					/>
					<DropFilterItem
						title="Гигиена"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9product.ba626c98.jpg&w=640&q=75"
					/>
					<DropFilterItem
						title="Wellness"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10product.8e01678c.jpg&w=640&q=75"
					/>
					<DropFilterItem
						title="Аксессуары"
						src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11product.885abd42.jpg&w=640&q=75"
					/>
				</div>
				<div className="h-full w-64% pb-3">
					<section>
						<div className="px-6 mt-2 border-b-2 border-gray">
							<Slider {...settings} className="   filterslider">
								<CatalDropDownItem title="антиакне" />
								<CatalDropDownItem title="антистресс" />
								<CatalDropDownItem title="коррекция морщин" />
								<CatalDropDownItem title="молодая кожа" />
								<CatalDropDownItem title="обезвоженная" />
								<CatalDropDownItem title="антиакне" />
								<CatalDropDownItem title="антистресс" />
								<CatalDropDownItem title="коррекция морщин" />
								<CatalDropDownItem title="молодая кожа" />
								<CatalDropDownItem title="обезвоженная" />
							</Slider>
						</div>

						<div className="flex ..5x1:m-2 mt-7 ml-10">
							<div className="mr-24 .3x1:mr-8 ..5x1:mr-6">
								<p className="font-semibold border-b border-primary-border mb-4 w-36 text-xs cursor-pointer hover:text-black">
									Антивозрастной уход
								</p>
								<p className="text-gray-quick-silver font-normal text-xs mb-4 relative cursor-pointer hover:text-black">
									День <small className="absolute -top-0.5 ml-1">20</small>
								</p>
								<p className=" font-normal text-gray-quick-silver text-xs mb-4 relative cursor-pointer hover:text-black">
									Ночью <small className="absolute -top-0.5 ml-1">11</small>
								</p>
								<p className="font-normal text-gray-quick-silver text-xs relative cursor-pointer hover:text-black">
									Экстра уход{' '}
									<small className="absolute -top-0.5 ml-1">18</small>
								</p>
								<p className="font-semibold border-b border-primary-border mb-4 mt-10 text-xs w-32 cursor-pointer hover:text-black">
									Глубокое очищение
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Очищающие пластыри для носа{' '}
									<small className="absolute -top-0.5 ml-1">2</small>
								</p>
								<p className="font-normal text-gray-quick-silver text-xs relative cursor-pointer hover:text-black">
									Пиллинги <small className="absolute -top-0.5 ml-1">9</small>
								</p>
								<p className="font-semibold border-b border-primary-border mb-4 mt-10 w-10 text-xs cursor-pointer hover:text-black">
									Маски
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Гель-маски <small className="absolute -top-0.5 ml-1">2</small>
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Колагеновые маски{' '}
									<small className="absolute -top-0.5 ml-1">1</small>
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Крем-маски <small className="absolute -top-0.5 ml-1">7</small>
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Маски-муляжи{' '}
									<small className="absolute -top-0.5 ml-1">22</small>
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Патчи для век{' '}
									<small className="absolute -top-0.5 ml-1">3</small>
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Растворимые маски{' '}
									<small className="absolute -top-0.5 ml-1">2</small>
								</p>
								<p className="font-normal text-gray-quick-silver text-xs relative cursor-pointer hover:text-black">
									Фитомаски <small className="absolute -top-0.5 ml-1">2</small>
								</p>
							</div>
							<div className="mr-20 .3x1:mr-8 ..5x1:mr-2">
								<p className="font-semibold border-b border-primary-border mb-4 w-48 text-xs cursor-pointer hover:text-black">
									Очищение и тонизирование
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Аксессуары для умывания{' '}
									<small className="absolute -top-0.5 ml-1">5</small>
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Очищение <small className="absolute -top-0.5 ml-1">14</small>
								</p>
								<p className="font-normal text-gray-quick-silver text-xs relative cursor-pointer hover:text-black">
									Тонизирующие средства{' '}
									<small className="absolute -top-0.5 ml-1">13</small>
								</p>
								<p className="font-semibold border-b border-primary-border mb-4 mt-10 w-32 text-xs cursor-pointer hover:text-black">
									Проблемная кожа
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Акне <small className="absolute -top-0.5 ml-1">10</small>
								</p>
								<p className="font-normal text-gray-quick-silver text-xs relative cursor-pointer hover:text-black">
									Пигментация и купероз{' '}
									<small className="absolute -top-0.5 ml-1">1</small>
								</p>
								<p className="font-semibold border-b border-primary-border mb-4 mt-10 text-xs cursor-pointer hover:text-black">
									Специальные средства и приборы
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Приборы <small className="absolute -top-0.5 ml-1">5</small>
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Сыворотки <small className="absolute -top-0.5 ml-1">6</small>
								</p>
								<p className="font-normal text-gray-quick-silver text-xs relative cursor-pointer hover:text-black">
									Трансдермальные комплексы{' '}
									<small className="absolute -top-0.5 ml-1">2</small>
								</p>
								<p className="font-semibold border-b border-primary-border mb-4 mt-10 w-40 text-xs cursor-pointer hover:text-black">
									Уход за кожей губ и век
								</p>
								<p className="font-normal text-gray-quick-silver mb-4 text-xs relative cursor-pointer hover:text-black">
									Губы <small className="absolute -top-0.5 ml-1">36</small>
								</p>
								<p className="font-normal text-gray-quick-silver text-xs relative cursor-pointer hover:text-black">
									Веки <small className="absolute -top-0.5 ml-1">6</small>
								</p>
							</div>
							<div className=".2x1:mr-2 dropdownSL">
								<Image src={preview} alt="dropdown img" />
								<p className="font-sans text-xs tracking-widest">
									Online - каталог
								</p>
								<p className="text-2xl font-semibold mb-7">Весна 2022</p>
								<div className="flex items-center mb-2 imgIS">
									<Image src={one} alt="dropdown img" />
									<p className="text-xs ml-1 font-montserrat font-normal text-gray-quick-silver tracking-widest text-md">
										BOTOLUXE
									</p>
								</div>
								<div className="flex items-center mb-2 imgIS">
									<Image src={two} alt="dropdown img" />
									<p className="text-xs ml-1 text-gray-quick-silver font-normal tracking-widest text-md">
										BIO REHAB
									</p>
								</div>
								<div className="flex items-center mb-2 imgIS">
									<Image src={tree} alt="dropdown img" />
									<p className="text-xs ml-1 text-gray-quick-silver font-normal tracking-widest text-md">
										COLLAGEN ACTIVE
									</p>
								</div>
								<div className="flex items-center mb-2 imgIS">
									<Image src={four} alt="dropdown img" />
									<p className="text-xs ml-1 text-gray-quick-silver font-normal tracking-widest text-md">
										MARINE COLLAGEN
									</p>
								</div>
								<p className="font-semibold border-b border-primary-border mt-4 w-24 text-xs cursor-pointer">
									Все серии (16)
								</p>
							</div>
						</div>
					</section >
				</div >
				<div className="p-4 .1x01:p-1 border-l-2 w-22% .2x1:w-20% border-gray">
					<Slider {...settingsTwo} className="dropDownSliderAc mb-10">
						<div className="relative sliderItemCatal">
							<Image src={sl} alt="dropdown img" />
							<p className="font-medium  font-noto-sans tracking-wider text-xs absolute top-6 left-5 .2x1:left-1 ">
								АКЦИЯ ВЕСНЫ
							</p>
							<p className=" font-montserrat text-22px leading-120% absolute top-12 left-5 .2x1:left-1 .2x1:text-base">
								Расцветай <br /> вместе с нами
							</p>
							<p className="flex items-center font-medium font-montserrat text-13px absolute bottom-4 right-6">
								Смотреть{' '}
								<svg
									className="ml-1 mt-0.5"
									width="12"
									height="8"
									viewBox="0 0 12 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.02529 0.935913L7.08469 1.70374L9.26485 3.46684L0.194824 3.47426L0.196166 4.55759L9.24134 4.5502L7.09791 6.2999L8.04292 7.06414L11.8053 3.99286L8.02529 0.935913Z"
										fill="black"
									/>
								</svg>
							</p>
						</div>
						<div className="relative sliderItemCatal">
							<Image src={sl} alt="dropdown img" />
							<p className="font-medium  font-noto-sans tracking-wider text-xs absolute top-6 left-5 .2x1:left-1 ">
								АКЦИЯ ВЕСНЫ
							</p>
							<p className=" font-montserrat text-22px leading-120% absolute top-12 left-5 .2x1:left-1 .2x1:text-base">
								Расцветай <br /> вместе с нами
							</p>
							<p className="flex items-center font-medium font-montserrat text-13px absolute bottom-4 right-6">
								Смотреть{' '}
								<svg
									className="ml-1 mt-0.5"
									width="12"
									height="8"
									viewBox="0 0 12 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.02529 0.935913L7.08469 1.70374L9.26485 3.46684L0.194824 3.47426L0.196166 4.55759L9.24134 4.5502L7.09791 6.2999L8.04292 7.06414L11.8053 3.99286L8.02529 0.935913Z"
										fill="black"
									/>
								</svg>
							</p>
						</div>
						<div className="relative sliderItemCatal">
							<Image src={sl} alt="dropdown img" />
							<p className="font-medium  font-noto-sans tracking-wider text-xs absolute top-6 left-5 .2x1:left-1 ">
								АКЦИЯ ВЕСНЫ
							</p>
							<p className=" font-montserrat text-22px leading-120% absolute top-12 left-5 .2x1:left-1 .2x1:text-base">
								Расцветай <br /> вместе с нами
							</p>
							<p className="flex items-center font-medium font-montserrat text-13px absolute bottom-4 right-6">
								Смотреть{' '}
								<svg
									className="ml-1 mt-0.5"
									width="12"
									height="8"
									viewBox="0 0 12 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.02529 0.935913L7.08469 1.70374L9.26485 3.46684L0.194824 3.47426L0.196166 4.55759L9.24134 4.5502L7.09791 6.2999L8.04292 7.06414L11.8053 3.99286L8.02529 0.935913Z"
										fill="black"
									/>
								</svg>
							</p>
						</div>
					</Slider>
					<div className="flex justify-center .3x1:ml-3">
						<div>
							<p className="w-32 h-9 font-normal border-2 mb-3 .3x1:text-xs .2x1:w-24 .3x1:w-28 ..5x1:w-20 ..5x1:h-8 border-gray justify-center items-center flex mr-3 text-13px cursor-pointer">
								Новинки
							</p>
							<p className="w-32 h-9 font-normal border-2 mb-3 .3x1:text-xs .2x1:w-24 .3x1:w-28 ..5x1:w-20 ..5x1:h-8 border-gray justify-center items-center flex mr-3 text-13px cursor-pointer">
								Наборы
							</p>
							<p className="w-32 h-9 font-normal border-2 mb-3 .3x1:text-xs .2x1:w-24 .3x1:w-28 ..5x1:w-20 ..5x1:h-8 border-gray justify-center items-center flex mr-3 text-13px cursor-pointer">
								Хит продаж
							</p>
							<p className="w-32 h-9 font-normal border-2 mb-3 .3x1:text-xs .2x1:w-24 .3x1:w-28 ..5x1:w-20 ..5x1:h-8 border-gray justify-center items-center flex mr-3 text-13px cursor-pointer">
								Идеи подарков
							</p>
						</div>
						<div>
							<p className="w-32 h-9 font-normal border-2 mb-3 .3x1:text-xs .2x1:w-24 .3x1:w-28 ..5x1:w-20 ..5x1:h-8 border-gray justify-center items-center flex mr-3 text-13px cursor-pointer">
								Акции
							</p>
							<p className="w-32 h-9 font-normal border-2 mb-3 .3x1:text-xs .2x1:w-24 .3x1:w-28 ..5x1:w-20 ..5x1:h-8 border-gray justify-center items-center flex mr-3 text-13px cursor-pointer">
								Товар дня
							</p>
							<p className="w-32 h-9 font-normal border-2 mb-3 .3x1:text-xs .2x1:w-24 .3x1:w-28 ..5x1:w-20 ..5x1:h-8 border-gray justify-center items-center flex mr-3 text-13px cursor-pointer">
								Суперцена
							</p>
						</div>
					</div>
					<button className="w-full border mb-3 font-normal 13px border-primary text-primary h-9">
						Все спецпредложения
					</button>
				</div>
			</section >
		</>
	);
};
export default CatalDropdown;
