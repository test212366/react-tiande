import two from '../../images/templates/2seaAct.jpg';
import SpecialOfferItem from '../SpecialOfferItem/SpecialOfferItem';
import tree from '../../images/templates/treeItemSearch.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'
import one from '../../images/templates/basket1.png'
import twoP from '../../images/templates/productSearch.jpg'
import twoT from '../../images/templates/productSearchTr.jpg'
import searchOne from '../../images/templates/dropSearchOne.jpg'
import SearchWindowItem from './SearchWindowItem';

import { useState } from 'react';

const SearchWindow = ({ scrollMenu, setIsHover, isHoverBasket, setCloseHover }) => {
	const [isSearch, setIsSearch] = useState(false),
		[search, setSearchValue] = useState(''),
		[nowFilter, setNowFilter] = useState({
			gifts: false,
			idea: true,
			recomend: false
		}),
		[dropDownds, setDropDowns] = useState({
			sale: true,
			free: false,
			loal: false,
			promo: false
		})


	const setFilter = (filt) => {
		switch (filt) {
			case ('sale'):
				return setDropDowns({
					sale: !dropDownds.sale,
					free: false,
					loal: false,
					promo: false
				})
			case ('free'):
				return setDropDowns({
					sale: false,
					free: !dropDownds.free,
					loal: false,
					promo: false
				})
			case ('loal'):
				return setDropDowns({
					sale: false,
					free: false,
					loal: !dropDownds.loal,
					promo: false
				})
			case ('promo'):
				return setDropDowns({
					sale: false,
					free: false,
					loal: false,
					promo: !dropDownds.promo
				})
		}
	}


	const setSearch = () => setIsSearch(!isSearch),
		setValueSearch = e => setSearchValue(e.target.value),
		clearInput = () => setSearchValue(''),
		setGifs = () => setNowFilter({ idea: false, recomend: false, gifts: true }),
		setIdea = () => setNowFilter({ gifts: false, recomend: false, idea: true }),
		setRecomend = () => setNowFilter({ idea: false, gifts: false, recomend: true })


	return (
		<>
			<div onMouseEnter={() => setIsHover(true)} onMouseLeave={setCloseHover} className={`${isHoverBasket ? 'active  ' : "hiddenCustom"} absolute top-5 ${scrollMenu ? 'top-10 !left-0 !fixed' : ""} -left-1816px w-1816px  bg-red h-14 z-30`}></div>
			<section onMouseEnter={setIsHover} onMouseLeave={setCloseHover} className={`absolute ${isHoverBasket ? '!flex' : "!hidden"} dropDownShadow border border-gray right-91.7% -mr-1.5 top-16 bg-white searchwindow ${scrollMenu ? '!top-14 !-mt-3px' : ''}`}>
				<div className="w-475px .4x2:w-380px">
					<h3 className='text-22px text-center -mb-2 mt-4 font-montserrat'>Предложения для вас</h3>
					<div className='flex justify-between  border-b border-gray   mt-5'>
						<p onClick={setGifs} className={`ml-9 text-13px text-black-70pe px-2 .2x1:ml-2 .2x1:text-10px font-medium transition-all cursor-pointer hover:text-black hover:border-b   hover:pb-3px pb-1 font-montserrat ${nowFilter.gifts ? 'activeSpecialDrop hover:pb-1' : ''}`}>Акции и подарки</p>
						<p onClick={setIdea} className={`text-13px text-black-70pe font-medium px-2 .2x1:text-10px transition-all cursor-pointer hover:text-black hover:border-b hover:pb-3px   pb-1 font-montserrat ${nowFilter.idea ? 'activeSpecialDrop hover:pb-1' : ''}`}>Идеи подарков</p>
						<p onClick={setRecomend} className={`mr-9 text-13px text-black-70pe px-2 .2x1:mr-2 .2x1:text-10px font-medium transition-all cursor-pointer hover:text-black hover:border-b  hover:pb-3px pb-1 font-montserrat ${nowFilter.recomend ? 'activeSpecialDrop hover:pb-1' : ''}`}>Рекомендации</p>
					</div>
					<div className='flex justify-center foryou pb-5 overflow-auto flex-wrap'>


						<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} />

						<SpecialOfferItem isSearchI={true} isActions={true} ml={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} />


						<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} />

						<SpecialOfferItem isSearchI={true} isActions={true} ml={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} />

						<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} />


						<div className='   bg-primary-searchBG flex flex-col px-11 itemSeeAll justify-center items-center  ml-3 mt-3 transition-all hover:bg-primary cardHover overflow-hidden'>

							<p className='font-montserrat text-center  font-semibold text-2xl text-primary'>Идеи <br /> подарков</p>

							<p className='flex items-center mt-5  font-montserrat text-13px font-medium text-primary'>Смотреть все <svg className='ml-1 mt-0.5' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.0253 3.93604L9.08469 4.70386L11.2648 6.46696L2.19482 6.47438L2.19617 7.55771L11.2413 7.55032L9.09791 9.30003L10.0429 10.0643L13.8053 6.99299L10.0253 3.93604Z" fill="#337202" />
							</svg></p>

						</div>
					</div>
				</div>
				<div className='searchsearchwindow   border-x bg-gray-light border-gray '>
					{isSearch ? <div className='relative'>
						<svg onClick={setSearch} className='absolute left-2 top-5' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.96934 1.1365C4.26224 0.843606 4.73711 0.843606 5.03 1.1365C5.3229 1.42939 5.3229 1.90427 5.03 2.19716L3.96934 1.1365ZM1.16634 5.00016L0.636009 5.53049L0.10568 5.00016L0.636009 4.46983L1.16634 5.00016ZM5.03 7.80317C5.3229 8.09606 5.3229 8.57093 5.03 8.86383C4.73711 9.15672 4.26224 9.15672 3.96934 8.86383L5.03 7.80317ZM12.833 4.25016C13.2472 4.25016 13.583 4.58595 13.583 5.00016C13.583 5.41438 13.2472 5.75016 12.833 5.75016V4.25016ZM5.03 2.19716L1.69667 5.53049L0.636009 4.46983L3.96934 1.1365L5.03 2.19716ZM1.69667 4.46983L5.03 7.80317L3.96934 8.86383L0.636009 5.53049L1.69667 4.46983ZM1.16634 4.25016L12.833 4.25016V5.75016H1.16634V4.25016Z" fill="black" />
						</svg>

						<input value={search} onChange={setValueSearch} className='w-full border-gray border-b py-4 pb-3.5 pl-8 pr-24 outline-none font-noto-sans text-13px' type="text" placeholder='Введите артикул' />
						{
							search.length > 0 && <svg onClick={clearInput} className='absolute right-24 top-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.3337 6.6665L6.66699 13.3332M6.66699 6.6665L13.3337 13.3332" stroke="#949792" strokeWidth="1.5" strokeLinecap="round" />
							</svg>
						}

						<button className={` ${search.length > 0 ? '!bg-primary !text-white' : ''} transition-all text-xs py-2 px-5 bg-gray-light absolute top-2 right-2 cursor-pointer rounded text-primary font-medium font-montserrat`}>Найти</button>

					</div> :
						<div className="relative px-4 flex items-center justify-between bg-white border-b border-gray">
							<p className='text-22px pt-3 pb-1  font-montserrat '>Корзина</p>
							<svg onClick={setSearch} width="20" className='mt-1' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M3.25 9.16667C3.25 5.89898 5.89898 3.25 9.16667 3.25C12.4344 3.25 15.0833 5.89898 15.0833 9.16667C15.0833 12.4344 12.4344 15.0833 9.16667 15.0833C5.89898 15.0833 3.25 12.4344 3.25 9.16667ZM9.16667 1.75C5.07055 1.75 1.75 5.07055 1.75 9.16667C1.75 13.2628 5.07055 16.5833 9.16667 16.5833C10.9446 16.5833 12.5764 15.9577 13.854 14.9147L16.9697 18.0303C17.2626 18.3232 17.7374 18.3232 18.0303 18.0303C18.3232 17.7374 18.3232 17.2626 18.0303 16.9697L14.9147 13.854C15.9577 12.5764 16.5833 10.9446 16.5833 9.16667C16.5833 5.07055 13.2628 1.75 9.16667 1.75Z" fill="black" />
							</svg>
						</div>
					}

					<div className='basketItems pb-5'>

						{search.length > 0 ? '' : <>
							<div className='flex items-center bg-input-error-bg justify-between px-4 py-10px'>
								<p className='text-13px font-noto-sans'>Недоступны для заказа (2)</p>
								<button className='text-13px font-montserrat font-medium   text-label-pink-2'>Удалить все</button>
							</div>
							<SearchWindowItem src={one} access={true} isProductToDay={true} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} sale={15} balls={1.2} price={'620.00'} counter={true} like={true} oldPrice={'740.00'} priceDe={'3 750'} />
							<SearchWindowItem src={twoP} access={true} isProductToDay={true} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} balls={1.2} price={'620.00'} counter={true} like={true} priceDe={'3 750'} />
						</>}


						<div className='py-2 px-4 flex justify-between'>
							{search.length > 0 ? <>
								<div className='flex items-center'>
									<input className='hidden' id='checkSearchAll' type="checkbox" />
									<label htmlFor="checkSearchAll" className='w-4 h-4 border-gray-deNum cursor-pointer border'></label>
									<p className='text-13px mx-1 font-noto-sans text-black'>Выделить все</p>
									<p className='text-13px ml-4 font-montserrat text-primary font-medium'>Добавить выбранные</p>
								</div>
							</> : <>
								<p className='text-13px font-noto-sans'>Товары (4)</p>
								<button className='text-13px text-gray-quick-silver font-montserrat font-medium'>Очистить</button>

							</>}

						</div>
						{search.length > 0 ? <>
							<SearchWindowItem isSearch={true} src={searchOne} isProductToDay={true} text={`ЗУБНАЯ ЩЕТКА «ПРОДЕНТАЛЬ» `} isHit={true} sale={15} balls={5.2} price={'620.00'} counter={true} like={true} oldPrice={'740.00'} priceDe={'3 750'} />
							<SearchWindowItem isSearch={true} src={searchOne} isProductToDay={true} text={`ЗУБНАЯ ЩЕТКА «ПРОДЕНТАЛЬ» `} isNew={true} sale={15} balls={5.2} price={'620.00'} counter={true} like={true} oldPrice={'740.00'} priceDe={'3 750'} />
							<SearchWindowItem isSearch={true} src={searchOne} isProductToDay={true} text={`ЗУБНАЯ ЩЕТКА «ПРОДЕНТАЛЬ» `} isHit={true} sale={15} balls={5.2} price={'620.00'} counter={true} like={true} oldPrice={'740.00'} priceDe={'3 750'} />

						</> : <>

							<SearchWindowItem src={one} isProductToDay={true} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} sale={15} balls={1.2} price={'620.00'} counter={true} like={true} oldPrice={'740.00'} priceDe={'3 750'} />
							<SearchWindowItem src={twoP} noBorder={true} isProductToDay={true} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} actions={true} balls={1.2} price={'620.00'} counter={true} like={true} priceDe={'3 750'} />
							<SearchWindowItem src={one} isProductToDay={true} price={'0.00'} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} promo={true} balls={24} oldPriceFr={'740.00'} isFree={true} />
							<SearchWindowItem src={twoT} text={'ПЕКТИНОВЫЙ КИСЕЛЬ С СОКОМ ОБЛЕПИХИ И ЯБЛОКАМИ «БАЛАНС»'} price={'0.00'} oldPriceFr={'89.00'} isPresent={true} isStart={true} />
							<SearchWindowItem src={one} noBorder={true} price={'0.00'} isProductToDay={true} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} promo={true} balls={24} oldPriceFr={'740.00'} isFree={true} />
							<div className='flex items-center justify-between px-4 py-10px'>
								<p className='text-13px font-noto-sans'>Товары по программе лояльности (4)</p>
								<button className='text-13px font-montserrat font-medium text-gray-deNum'>Очистить</button>
							</div>
							<SearchWindowItem src={one} isProductToDay={true} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} sale={15} balls={'0'} price={'620.00'} counter={true} like={true} oldPrice={'740.00'} priceDe={'3 750'} />
							<SearchWindowItem src={one} isProductToDay={true} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} sale={15} balls={'0'} price={'620.00'} counter={true} like={true} oldPrice={'740.00'} priceDe={'3 750'} />
							<SearchWindowItem src={one} isProductToDay={true} text={`ВОССТАНОВЛЯЮЩИЙ ШАМПУНЬ С ЭКСТРАКТОМ ЖЕНЬШЕНЯ`} isNew={true} isHit={true} sale={15} balls={'0'} price={'620.00'} counter={true} like={true} oldPrice={'740.00'} priceDe={'3 750'} />

						</>}

					</div>

				</div>
				<div className='productNum .2x1:mx-2  mt-2 mx-4'>
					<div className='  flex justify-between items-center w-full'>
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
					<div className='flex justify-between mt-1'>
						<p className='font-montserrat font-normal text-13px text-gray-quick-silver'>Сумма, ₽</p>
						<p className='font-montserrat font-normal text-13px '>5 080.00 ₽</p>
					</div>
					<div className='flex justify-between mt-2'>
						<p className='font-montserrat font-normal text-13px text-gray-quick-silver'>Скидка по акциям</p>
						<p className='font-montserrat font-normal text-13px text-label-pink-2'>-702.00 ₽</p>
					</div>
					<div className='flex justify-between mt-2'>
						<p className='font-montserrat font-normal text-13px text-gray-quick-silver'>Скидка 35%</p>
						<p className='font-montserrat font-normal text-13px text-label-pink-2'>-1 532.30 ₽</p>
					</div>
					<div className='flex justify-between mt-2 pb-10px border-b border-dashed border-gray'>
						<p className='font-montserrat font-normal text-13px text-gray-quick-silver'>Скидка по промокоду</p>
						<p className='font-montserrat font-normal text-13px text-label-pink-2'>-85 ₽</p>
					</div>
					<div className=''>
						<div className='flex justify-between  mt-2 items-center'>
							<p className='font-montserrat text-22px'>Итого</p>
							<div className='flex items-center'>
								<p className='mr-1 text-label-pink-2 text-13px font-montserrat font-medium'>4 320.00 ₽</p>
								<span className='font-medium font-montserrat text-gray-light2'>/</span>
								<p className='ml-1 text-label-orange font-montserrat font-medium text-13px'> 3 750 De</p>
							</div>

						</div>
						<div className='bg-gray-light buttonsSearch py-3 .2x1:px-2 .4x2:px-2 .4x2:flex px-4'>
							<button className='px-7 w-176px py-2 px-0 .2x10:w-auto h-8 .2x1:px-2 transition-all hover:bg-gray-light2 .2x1:text-9px .4x2:px-3 bg-white text-xs font-montserrat font-medium text-primary border border-primary'>Перейти в корзину</button>
							<button className='px-8 w-176px py-2 h-8 .2x10:w-auto .2x1:px-2 transition-all hover:bg-primary-hover .2x1:text-9px .4x2:px-4  ml-4 text-xs font-montserrat  font-medium text-white bg-primary border border-primary'>Оформить заказ</button>

						</div>
					</div>
					<div onClick={() => setFilter('sale')} className={`transition-all ${!dropDownds.sale ? '!h-20 !overflow-hidden border-b border-dashed border-gray' : ''}`}>
						<div className={`mt-4 bg-white-BG_FILTER .2x1:px-2 p-18px pt-2 pb-3  ${!dropDownds.sale ? '!bg-white  ' : ''}`}>
							<div className='flex items-center justify-between'>

								<div className='flex items-center'>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.5722 25.9745C21.843 27.4548 19.2393 28.1165 15.7379 28.192C15.7376 28.1921 15.7373 28.1921 15.737 28.1921L15.2321 28.1997L15.2288 28.1998L14.7199 28.202C14.7196 28.202 14.7193 28.202 14.719 28.202C11.7564 28.2019 9.31418 27.3998 7.54215 25.8869C5.77214 24.3758 4.64043 22.1297 4.34422 19.1813C4.04295 16.1826 5.29057 13.7167 7.84552 11.0735L8.12086 10.7956L10.0385 8.93287L10.0386 8.93299L10.0454 8.92587L10.3146 8.64665L10.3147 8.64679L10.322 8.63861L10.5299 8.40651L10.53 8.40657L10.5347 8.401C10.6821 8.22812 10.8003 8.06864 10.8518 7.93811L10.8518 7.9381C11.2806 6.85086 11.337 4.95499 11.0161 2.369C10.9249 1.63372 11.673 1.08166 12.3487 1.3857C15.0225 2.58884 16.904 4.25792 17.9756 6.38115C18.2825 6.98923 18.498 7.65245 18.6402 8.38094L18.9346 8.32347L18.6402 8.38094C18.6545 8.45424 18.6679 8.52595 18.6804 8.59661L18.7473 9.02109L18.797 9.44911C18.8038 9.52016 18.8101 9.59251 18.8159 9.66669L18.8462 10.1532L18.8673 10.7102L18.8871 11.6496L18.9027 12.3849L19.4059 11.8485L19.4654 11.7851L19.4655 11.7851L19.4712 11.7786C19.8018 11.4052 20.1682 10.9223 20.5678 10.3347L20.5679 10.3347L20.5702 10.3312L20.9777 9.71364L20.9778 9.71366L20.9798 9.71044C21.121 9.49043 21.2661 9.25848 21.415 9.01466L21.4158 9.01337L21.6404 8.64126L21.6412 8.64001C21.9856 8.06309 22.8038 8.01635 23.2117 8.55028C25.2052 11.1595 26.2033 14.5197 26.2033 18.6147C26.2033 22.1739 25.2896 24.5043 23.5722 25.9745ZM13.5767 4.23717L13.0813 3.88649L13.1035 4.49302L13.1154 4.81657C13.1561 6.4348 12.9899 7.69537 12.6192 8.63523C12.4094 9.16736 12.016 9.65477 11.2149 10.4427L10.0075 11.6058L10.0075 11.6058L10.005 11.6083L9.29627 12.3075L9.29618 12.3074L9.28996 12.3139L8.92852 12.6925L8.9285 12.6925L8.9258 12.6954C6.96594 14.8034 6.0085 16.7399 6.2347 18.9914C6.47569 21.3901 7.34717 23.2299 8.80758 24.4666C10.265 25.7008 12.271 26.302 14.7199 26.302L14.7229 26.302L15.7005 26.2924L15.7005 26.2925L15.7074 26.2923L16.3927 26.2696L16.3964 26.2695C19.0893 26.1473 21.0863 25.6461 22.4036 24.4334C23.7304 23.2119 24.3033 21.3306 24.3033 18.6147C24.3033 15.817 23.8015 13.4291 22.7935 11.4442L22.7936 11.4442L22.7915 11.4402L22.73 11.3235L22.4958 10.8787L22.2155 11.296L22.0649 11.5203C22.0647 11.5206 22.0645 11.521 22.0642 11.5213C21.3987 12.4949 20.8047 13.2129 20.2494 13.6958C19.6976 14.1758 19.202 14.408 18.7275 14.4463L18.5789 14.452C18.1609 14.4508 17.8481 14.3119 17.6157 14.0896C17.3772 13.8614 17.2056 13.5275 17.1129 13.1155C17.1049 13.0798 17.0975 13.0448 17.0905 13.0099L17.0523 12.7804C17.0475 12.7446 17.043 12.7079 17.0388 12.6699L17.0157 12.3979L16.9932 11.8681L16.9609 10.5498L16.961 10.5498L16.9607 10.5431L16.9392 10.0834L16.9393 10.0834L16.9387 10.075L16.9087 9.6743L16.9089 9.67428L16.9076 9.66318L16.8666 9.29854L16.8667 9.29853L16.8659 9.29233C16.8577 9.23118 16.8489 9.17059 16.8396 9.11008L16.8396 9.11007L16.8386 9.10412L16.7764 8.75042L16.7764 8.75041L16.7754 8.74489C16.6662 8.18563 16.505 7.68416 16.2794 7.2372L16.2794 7.23719C15.7349 6.15825 14.9188 5.2179 13.8274 4.41477L13.8275 4.41473L13.823 4.41154L13.5767 4.23717ZM12.9377 24.2767L12.8583 24.566L12.9377 24.2766C11.4362 23.8649 10.1816 22.6918 9.84684 20.9369L9.55215 20.9931L9.84684 20.9369C9.42783 18.7408 10.5429 16.4526 13.1816 14.0542C13.748 13.5394 14.6596 13.8715 14.762 14.6301C14.9596 16.0936 15.347 17.1565 15.9124 17.7673C16.9674 18.9069 17.5936 19.9722 17.7577 20.9166C17.9174 21.8356 17.6458 22.6703 16.8229 23.4031L17.0224 23.6272L16.8229 23.4031C15.6447 24.4524 14.2596 24.6392 12.9377 24.2767ZM13.4209 17.1829L13.2295 16.6657L12.8993 17.1074L12.6713 17.4124L12.6712 17.4124L12.6676 17.4175C11.8573 18.5504 11.5282 19.6112 11.7132 20.5808C11.9009 21.5649 12.5975 22.2132 13.4402 22.4443C14.1788 22.6469 14.9185 22.5549 15.5593 21.9843C15.6881 21.8695 15.7883 21.7253 15.8374 21.5471C15.8861 21.3709 15.8787 21.1836 15.829 20.9903C15.7325 20.6144 15.4642 20.1722 15.0272 19.6391L15.0273 19.639L15.0229 19.6339L14.7066 19.2653L14.7067 19.2652L14.7008 19.2588L14.52 19.06L14.5182 19.0581C14.0961 18.6021 13.75 18.0299 13.4775 17.3358L13.4209 17.1829Z" fill="black" fillOpacity="0.7" stroke="white" strokeWidth="0.6" />
									</svg>
									<div className='ml-3.5'>
										<p className='font-montserrat font-semibold text-13px'>Скидка 35%</p>
										<p className='font-montserrat text-13px text-label-pink-2 font-normal mt-1'>5 080.00 ₽</p>
									</div>

								</div>
								<div className={`-mr-1.5 ${!dropDownds.sale ? 'prev' : ""}`}>
									<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3396 10.675L7 7.3219L3.65312 10.675L2.625 9.64271L7 5.25L11.375 9.64271L10.3396 10.675Z" fill="black" fillOpacity="0.7" />
									</svg>
								</div>
							</div>
							<div className='flex justify-between mt-3'>
								<p className='font-montserrat text-13px text-black-70pe'>Ваш заказ:</p>
								<div className='flex '>
									<p className='flex .2x1:text-10px .4x2:text-11px items-center font-montserrat text-black-70pe text-13px font-medium'><svg className='mr-1 .2x1:h-3 .2x1:w-3' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.333 14.3333C10.333 14.3333 5.99967 14.6667 3.66634 12C1.33301 9.33333 1.33301 1.33333 1.33301 1.33333C1.33301 1.33333 9.33301 1 11.9997 3C14.6663 5 13.9997 10.6667 13.9997 10.6667" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.6663 14.6668C14.6663 14.6668 10.9399 11.8507 8.66634 9.3335C6.39277 6.81633 5.33301 4.3335 5.33301 4.3335" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66699 9.33333L9.00033 5" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66634 9.33333L5.33301 9" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
									</svg> 47.5 Б. <span className='mx-1 text-black .4x2:text-11px .2x1:text-10px '>/</span></p>
									<p className='font-montserrat text-13px text-black .4x2:text-11px .2x1:text-10px .2x1:mt-0.5'>9 079.00 ₽</p>
								</div>

							</div>
							<div className='flex justify-between items-center'>
								<p className='font-montserrat text-13px text-black-70pe  mt-6px'>Расчёт:</p>

								<p className='font-montserrat text-13px text-black .4x2:text-11px .2x1:text-9px .2x1:mt-1.5  '>(9 079.00 ₽ - (20 Б. * 64 ₽)) * 35%</p>


							</div>

						</div>
						<div className='bg-input-error-bg pl-4 py-3 px-2'>
							<p className='.2x1:text-10px font-montserrat leading-140% text-11px font-normal flex items-center'>
								<svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.33301 10.0003H8.66634V11.3337H7.33301V10.0003ZM7.99968 2.66699C5.05968 2.66699 2.66634 5.06032 2.66634 8.00032C2.66634 10.9403 5.05968 13.3337 7.99968 13.3337C10.9397 13.3337 13.333 10.9403 13.333 8.00032C13.333 5.06032 10.9397 2.66699 7.99968 2.66699ZM7.99968 14.667C7.1242 14.667 6.25729 14.4946 5.44845 14.1595C4.63962 13.8245 3.90469 13.3334 3.28563 12.7144C2.03539 11.4641 1.33301 9.76843 1.33301 8.00032C1.33301 6.23221 2.03539 4.53652 3.28563 3.28628C3.90469 2.66722 4.63962 2.17616 5.44845 1.84112C6.25729 1.50609 7.1242 1.33366 7.99968 1.33365C9.76779 1.33366 11.4635 2.03603 12.7137 3.28628C13.964 4.53652 14.6663 6.23221 14.6663 8.00032C14.6663 8.8758 14.4939 9.74271 14.1589 10.5515C13.8238 11.3604 13.3328 12.0953 12.7137 12.7144C12.0947 13.3334 11.3597 13.8245 10.5509 14.1595C9.74206 14.4946 8.87516 14.667 7.99968 14.667ZM7.33301 4.66699H8.66634V8.66699H7.33301V4.66699Z" fill="black" />
								</svg>

								Второй и последующий заказы - 35% на всю сумму заказа!</p>
						</div>
					</div>

					<div>
						<div onClick={() => setFilter('free')} className={`transition-all ${!dropDownds.free ? '!h-20 !overflow-hidden border-b border-dashed border-gray' : ''}`}>
							<div className={` bg-white-BG_FILTER .2x1:px-2 p-18px pt-2 pb-3  ${!dropDownds.free ? '!bg-white  ' : ''}`}>
								<div className='flex items-center mt-3  relative pb-2  '>
									<svg className={`absolute .2x1:right-0  -right-1.5 top-3 ${!dropDownds.free ? 'prev' : ""}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
									</svg>

									<svg className='mr-3 .2x1:mr-1' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.5892 18.6606C24.2302 18.4042 24.542 17.6767 24.2856 17.0358C24.0292 16.3948 23.3017 16.083 22.6608 16.3394L22.0097 16.5998C21.3687 16.8562 21.057 17.5837 21.3134 18.2247C21.5698 18.8656 22.2972 19.1774 22.9382 18.921L23.5892 18.6606Z" fill="black" fillOpacity="0.7" />
										<path d="M19.0319 20.4835C19.6729 20.2271 19.9847 19.4997 19.7283 18.8587C19.4719 18.2177 18.7444 17.9059 18.1035 18.1623L16.8014 18.6832C16.1604 18.9395 15.8486 19.667 16.105 20.308C16.3614 20.949 17.0889 21.2607 17.7299 21.0043L19.0319 20.4835Z" fill="black" fillOpacity="0.7" />
										<path d="M13.8236 22.5668C14.4646 22.3105 14.7764 21.583 14.52 20.942C14.2636 20.301 13.5361 19.9893 12.8951 20.2457L11.5931 20.7665C10.9521 21.0229 10.6403 21.7503 10.8967 22.3913C11.1531 23.0323 11.8806 23.3441 12.5215 23.0877L13.8236 22.5668Z" fill="black" fillOpacity="0.7" />
										<path d="M8.61528 24.6502C9.25626 24.3938 9.56803 23.6663 9.31164 23.0253C9.05525 22.3844 8.32778 22.0726 7.6868 22.329L7.03576 22.5894C6.39478 22.8458 6.08301 23.5733 6.3394 24.2142C6.5958 24.8552 7.32326 25.167 7.96424 24.9106L8.61528 24.6502Z" fill="black" fillOpacity="0.7" />
										<path fillRule="evenodd" clipRule="evenodd" d="M5 14.375C5 12.3039 6.67893 10.625 8.75 10.625C10.8211 10.625 12.5 12.3039 12.5 14.375C12.5 15.1427 12.1751 16.0102 11.743 16.8744C11.2897 17.7811 10.6286 18.8547 9.77849 20.0854C9.5451 20.4233 9.16065 20.625 8.75 20.625C8.33935 20.625 7.9549 20.4233 7.72151 20.0854C6.8714 18.8547 6.21033 17.7811 5.75697 16.8744C5.32488 16.0102 5 15.1427 5 14.375ZM8.75 13.125C8.05964 13.125 7.5 13.6846 7.5 14.375C7.5 14.5278 7.59179 14.9539 7.99303 15.7563C8.18895 16.1482 8.44042 16.5948 8.75 17.0976C9.05958 16.5948 9.31105 16.1482 9.50697 15.7563C9.90821 14.9539 10 14.5278 10 14.375C10 13.6846 9.44036 13.125 8.75 13.125Z" fill="black" fillOpacity="0.7" />
										<path fillRule="evenodd" clipRule="evenodd" d="M21.25 5C19.1789 5 17.5 6.67893 17.5 8.75C17.5 9.51771 17.8249 10.3852 18.257 11.2494C18.7103 12.1561 19.3714 13.2297 20.2215 14.4604C20.4549 14.7983 20.8394 15 21.25 15C21.6607 15 22.0451 14.7983 22.2785 14.4604C23.1286 13.2297 23.7897 12.1561 24.243 11.2494C24.6751 10.3852 25 9.51771 25 8.75C25 6.67893 23.3211 5 21.25 5ZM20 8.75C20 8.05964 20.5596 7.5 21.25 7.5C21.9404 7.5 22.5 8.05964 22.5 8.75C22.5 8.90277 22.4082 9.32885 22.007 10.1313C21.811 10.5232 21.5596 10.9698 21.25 11.4726C20.9404 10.9698 20.689 10.5232 20.493 10.1313C20.0918 9.32885 20 8.90277 20 8.75Z" fill="black" fillOpacity="0.7" />
										<path fillRule="evenodd" clipRule="evenodd" d="M4.375 1.25C2.64911 1.25 1.25 2.64911 1.25 4.375V25.625C1.25 27.3509 2.64911 28.75 4.375 28.75H25.625C27.3509 28.75 28.75 27.3509 28.75 25.625V4.375C28.75 2.64911 27.3509 1.25 25.625 1.25H4.375ZM3.75 4.375C3.75 4.02982 4.02982 3.75 4.375 3.75H25.625C25.9702 3.75 26.25 4.02982 26.25 4.375V25.625C26.25 25.9702 25.9702 26.25 25.625 26.25H4.375C4.02982 26.25 3.75 25.9702 3.75 25.625V4.375Z" fill="black" fillOpacity="0.7" />
										<path d="M23.5892 18.6606C24.2302 18.4042 24.542 17.6767 24.2856 17.0358C24.0292 16.3948 23.3017 16.083 22.6608 16.3394L22.0097 16.5998C21.3687 16.8562 21.057 17.5837 21.3134 18.2247C21.5698 18.8656 22.2972 19.1774 22.9382 18.921L23.5892 18.6606Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
										<path d="M19.0319 20.4835C19.6729 20.2271 19.9847 19.4997 19.7283 18.8587C19.4719 18.2177 18.7444 17.9059 18.1035 18.1623L16.8014 18.6832C16.1604 18.9395 15.8486 19.667 16.105 20.308C16.3614 20.949 17.0889 21.2607 17.7299 21.0043L19.0319 20.4835Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
										<path d="M13.8236 22.5668C14.4646 22.3105 14.7764 21.583 14.52 20.942C14.2636 20.301 13.5361 19.9893 12.8951 20.2457L11.5931 20.7665C10.9521 21.0229 10.6403 21.7503 10.8967 22.3913C11.1531 23.0323 11.8806 23.3441 12.5215 23.0877L13.8236 22.5668Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
										<path d="M8.61528 24.6502C9.25626 24.3938 9.56803 23.6663 9.31164 23.0253C9.05525 22.3844 8.32778 22.0726 7.6868 22.329L7.03576 22.5894C6.39478 22.8458 6.08301 23.5733 6.3394 24.2142C6.5958 24.8552 7.32326 25.167 7.96424 24.9106L8.61528 24.6502Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
										<path fillRule="evenodd" clipRule="evenodd" d="M5 14.375C5 12.3039 6.67893 10.625 8.75 10.625C10.8211 10.625 12.5 12.3039 12.5 14.375C12.5 15.1427 12.1751 16.0102 11.743 16.8744C11.2897 17.7811 10.6286 18.8547 9.77849 20.0854C9.5451 20.4233 9.16065 20.625 8.75 20.625C8.33935 20.625 7.9549 20.4233 7.72151 20.0854C6.8714 18.8547 6.21033 17.7811 5.75697 16.8744C5.32488 16.0102 5 15.1427 5 14.375ZM8.75 13.125C8.05964 13.125 7.5 13.6846 7.5 14.375C7.5 14.5278 7.59179 14.9539 7.99303 15.7563C8.18895 16.1482 8.44042 16.5948 8.75 17.0976C9.05958 16.5948 9.31105 16.1482 9.50697 15.7563C9.90821 14.9539 10 14.5278 10 14.375C10 13.6846 9.44036 13.125 8.75 13.125Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
										<path fillRule="evenodd" clipRule="evenodd" d="M21.25 5C19.1789 5 17.5 6.67893 17.5 8.75C17.5 9.51771 17.8249 10.3852 18.257 11.2494C18.7103 12.1561 19.3714 13.2297 20.2215 14.4604C20.4549 14.7983 20.8394 15 21.25 15C21.6607 15 22.0451 14.7983 22.2785 14.4604C23.1286 13.2297 23.7897 12.1561 24.243 11.2494C24.6751 10.3852 25 9.51771 25 8.75C25 6.67893 23.3211 5 21.25 5ZM20 8.75C20 8.05964 20.5596 7.5 21.25 7.5C21.9404 7.5 22.5 8.05964 22.5 8.75C22.5 8.90277 22.4082 9.32885 22.007 10.1313C21.811 10.5232 21.5596 10.9698 21.25 11.4726C20.9404 10.9698 20.689 10.5232 20.493 10.1313C20.0918 9.32885 20 8.90277 20 8.75Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
										<path fillRule="evenodd" clipRule="evenodd" d="M4.375 1.25C2.64911 1.25 1.25 2.64911 1.25 4.375V25.625C1.25 27.3509 2.64911 28.75 4.375 28.75H25.625C27.3509 28.75 28.75 27.3509 28.75 25.625V4.375C28.75 2.64911 27.3509 1.25 25.625 1.25H4.375ZM3.75 4.375C3.75 4.02982 4.02982 3.75 4.375 3.75H25.625C25.9702 3.75 26.25 4.02982 26.25 4.375V25.625C26.25 25.9702 25.9702 26.25 25.625 26.25H4.375C4.02982 26.25 3.75 25.9702 3.75 25.625V4.375Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
									</svg>
									<div>
										<p className='font-montserrat text-13px font-semibold'>Бесплатная доставка</p>
										<div className='flex items-center'>
											<div className='flex items-center'>
												<p className='font-montserrat .2x1:mr-0.5 .2x1:text-9px text-11px font-normal mr-1'>Курьер</p>
												<span className='rounded-xl .2x1:mr-0.5 font-montserrat .2x1:text-7px text-10px mr-2 p-1 bg-primary-searchBG text-black-70pe'>от 2 500 ₽</span>
											</div>
											<div className='flex items-center'>
												<p className='font-montserrat text-11px .2x1:mr-0.5 .2x1:text-9px font-normal mr-1'>ПВЗ</p>
												<span className='rounded-xl font-montserrat .2x1:mr-0.5 .2x1:text-7px text-10px p-1 mr-2  bg-primary-searchBG text-black-70pe'>от 1 500 ₽</span>
											</div>

											<button className='p-1 rounded-xl bg-primary-searchBG .2x1:text-7px text-11px font-montserrat text-black'>ещё</button>



										</div>


									</div>
								</div>
								<div className='flex justify-between mt-3'>
									<p className='font-montserrat text-13px text-black-70pe'>Ваш заказ:</p>
									<div className='flex '>
										<p className='flex .2x1:text-10px .4x2:text-11px items-center font-montserrat text-black-70pe text-13px font-medium'><svg className='mr-1 .2x1:h-3 .2x1:w-3' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.333 14.3333C10.333 14.3333 5.99967 14.6667 3.66634 12C1.33301 9.33333 1.33301 1.33333 1.33301 1.33333C1.33301 1.33333 9.33301 1 11.9997 3C14.6663 5 13.9997 10.6667 13.9997 10.6667" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.6663 14.6668C14.6663 14.6668 10.9399 11.8507 8.66634 9.3335C6.39277 6.81633 5.33301 4.3335 5.33301 4.3335" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8.66699 9.33333L9.00033 5" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8.66634 9.33333L5.33301 9" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
										</svg> 47.5 Б. <span className='mx-1 text-black .4x2:text-11px .2x1:text-10px '>/</span></p>
										<p className='font-montserrat text-13px text-black .4x2:text-11px .2x1:text-10px .2x1:mt-0.5'>9 079.00 ₽</p>
									</div>

								</div>
								<div className='flex justify-between items-center'>
									<p className='font-montserrat text-13px text-black-70pe  mt-6px'>Расчёт:</p>

									<p className='font-montserrat text-13px text-black .4x2:text-11px .2x1:text-9px .2x1:mt-1.5  '>(9 079.00 ₽ - (20 Б. * 64 ₽)) * 35%</p>


								</div>

							</div>
							<div className='bg-input-error-bg pl-4 py-3 px-2'>
								<p className='.2x1:text-10px font-montserrat leading-140% text-11px font-normal flex items-center'>
									<svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.33301 10.0003H8.66634V11.3337H7.33301V10.0003ZM7.99968 2.66699C5.05968 2.66699 2.66634 5.06032 2.66634 8.00032C2.66634 10.9403 5.05968 13.3337 7.99968 13.3337C10.9397 13.3337 13.333 10.9403 13.333 8.00032C13.333 5.06032 10.9397 2.66699 7.99968 2.66699ZM7.99968 14.667C7.1242 14.667 6.25729 14.4946 5.44845 14.1595C4.63962 13.8245 3.90469 13.3334 3.28563 12.7144C2.03539 11.4641 1.33301 9.76843 1.33301 8.00032C1.33301 6.23221 2.03539 4.53652 3.28563 3.28628C3.90469 2.66722 4.63962 2.17616 5.44845 1.84112C6.25729 1.50609 7.1242 1.33366 7.99968 1.33365C9.76779 1.33366 11.4635 2.03603 12.7137 3.28628C13.964 4.53652 14.6663 6.23221 14.6663 8.00032C14.6663 8.8758 14.4939 9.74271 14.1589 10.5515C13.8238 11.3604 13.3328 12.0953 12.7137 12.7144C12.0947 13.3334 11.3597 13.8245 10.5509 14.1595C9.74206 14.4946 8.87516 14.667 7.99968 14.667ZM7.33301 4.66699H8.66634V8.66699H7.33301V4.66699Z" fill="black" />
									</svg>

									Второй и последующий заказы - 35% на всю сумму заказа!</p>
							</div>
						</div>
						<div onClick={() => setFilter('loal')} className={`transition-all ${!dropDownds.loal ? '!h-16 !overflow-hidden border-b border-dashed border-gray' : ''}`}>
							<div className={` bg-white-BG_FILTER .2x1:px-2 p-18px pt-2 pb-3  ${!dropDownds.loal ? '!bg-white  ' : ''}`}>
								<div className={`flex items-center  mt-3 relative pb-2  ${!dropDownds.loal ? 'prev' : ""}`}>
									<svg className='absolute .2x1:right-0 -right-1.5 top-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
									</svg>

									<svg width="30" className='mr-3 .2x1:mr-1' height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="15" cy="15" r="11.6875" stroke="white" strokeOpacity="0.8" />
										<circle cx="15" cy="15" r="14.25" stroke="black" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" strokeDasharray="3 6 9 12" />
										<path d="M7.5 18.3197C7.76813 18.3034 7.95906 18.2466 8.07281 18.1491C8.19469 18.0516 8.27188 17.9053 8.30438 17.7103C8.33688 17.5153 8.35313 17.2675 8.35313 16.9669V11.8969C8.35313 11.7181 8.35719 11.5475 8.36531 11.385C8.37344 11.2144 8.38156 11.0681 8.38969 10.9462C8.25156 10.9544 8.10125 10.9625 7.93875 10.9706C7.77625 10.9788 7.63 10.9869 7.5 10.995V10.3247L10.6078 10.3125C11.3634 10.3125 12.0419 10.41 12.6431 10.605C13.2444 10.8 13.7563 11.0844 14.1788 11.4581C14.6013 11.8237 14.9222 12.2706 15.1416 12.7988C15.3609 13.3269 15.4706 13.9159 15.4706 14.5659C15.4706 15.1103 15.3772 15.6384 15.1903 16.1503C15.0034 16.6622 14.715 17.1213 14.325 17.5275C13.9431 17.9256 13.4597 18.2466 12.8747 18.4903C12.2897 18.7341 11.5991 18.8559 10.8028 18.8559H7.5V18.3197ZM9.645 17.235C9.645 17.4544 9.64094 17.6494 9.63281 17.82C9.63281 17.9906 9.62469 18.1288 9.60844 18.2344C9.77906 18.2344 9.94969 18.2384 10.1203 18.2466C10.2909 18.2466 10.4413 18.2466 10.5713 18.2466C10.7094 18.2466 10.8069 18.2466 10.8638 18.2466C11.3675 18.2466 11.8144 18.1531 12.2044 17.9663C12.5944 17.7794 12.9234 17.5194 13.1916 17.1863C13.4678 16.8531 13.675 16.4672 13.8131 16.0284C13.9594 15.5897 14.0325 15.1225 14.0325 14.6269C14.0325 13.8306 13.9025 13.1563 13.6425 12.6038C13.3825 12.0513 12.9884 11.6287 12.4603 11.3362C11.9403 11.0437 11.2903 10.8934 10.5103 10.8853C10.2422 10.8853 10.0472 10.9341 9.92531 11.0316C9.80344 11.1209 9.72625 11.2631 9.69375 11.4581C9.66125 11.6531 9.645 11.9009 9.645 12.2016V17.235Z" fill="black" fillOpacity="0.7" />
										<path d="M18.975 19.0509C18.4062 19.0509 17.8944 18.9209 17.4394 18.6609C16.9925 18.3928 16.6391 18.0191 16.3791 17.5397C16.1191 17.0522 15.9891 16.4794 15.9891 15.8213C15.9891 15.2525 16.115 14.7203 16.3669 14.2247C16.6269 13.7291 16.9884 13.3309 17.4516 13.0303C17.9147 12.7216 18.4509 12.5672 19.0603 12.5672C19.4016 12.5672 19.7225 12.62 20.0231 12.7256C20.3319 12.8313 20.6041 12.9978 20.8397 13.2253C21.0834 13.4447 21.2744 13.7331 21.4125 14.0906C21.5506 14.44 21.6197 14.8666 21.6197 15.3703L17.4272 15.4434C17.4272 15.9959 17.4881 16.4875 17.61 16.9181C17.74 17.3488 17.9472 17.6819 18.2316 17.9175C18.5159 18.1531 18.8856 18.2709 19.3406 18.2709C19.56 18.2709 19.7916 18.2344 20.0353 18.1613C20.2872 18.08 20.5228 17.9663 20.7422 17.82C20.9697 17.6738 21.1606 17.4991 21.315 17.2959L21.6928 17.625C21.4491 17.9906 21.1688 18.2791 20.8519 18.4903C20.535 18.6934 20.21 18.8356 19.8769 18.9169C19.5519 19.0063 19.2513 19.0509 18.975 19.0509ZM17.4759 14.8097H20.2913C20.2913 14.5009 20.2466 14.2247 20.1572 13.9809C20.0759 13.7291 19.9459 13.53 19.7672 13.3837C19.5884 13.2375 19.3609 13.1644 19.0847 13.1644C18.6541 13.1644 18.3006 13.3025 18.0244 13.5788C17.7481 13.8469 17.5653 14.2572 17.4759 14.8097Z" fill="black" fillOpacity="0.7" />
									</svg>

									<div>
										<p className='font-montserrat text-13px font-semibold'>Программа лояльности</p>
										<p className='font-lora text-13px font-medium text-gray-deNum .2x1:text-10px'>De<span className=' font-normal font-montserrat'>-счёт:</span> <span className='font-montserrat text-13px font-normal text-label-orange .2x1:text-10px'>9 000 De</span></p>

									</div>
								</div>
								<div className='flex justify-between mt-3'>
									<p className='font-montserrat text-13px text-black-70pe'>Ваш заказ:</p>
									<div className='flex '>
										<p className='flex .2x1:text-10px .4x2:text-11px items-center font-montserrat text-black-70pe text-13px font-medium'><svg className='mr-1 .2x1:h-3 .2x1:w-3' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.333 14.3333C10.333 14.3333 5.99967 14.6667 3.66634 12C1.33301 9.33333 1.33301 1.33333 1.33301 1.33333C1.33301 1.33333 9.33301 1 11.9997 3C14.6663 5 13.9997 10.6667 13.9997 10.6667" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.6663 14.6668C14.6663 14.6668 10.9399 11.8507 8.66634 9.3335C6.39277 6.81633 5.33301 4.3335 5.33301 4.3335" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8.66699 9.33333L9.00033 5" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8.66634 9.33333L5.33301 9" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
										</svg> 47.5 Б. <span className='mx-1 text-black .4x2:text-11px .2x1:text-10px '>/</span></p>
										<p className='font-montserrat text-13px text-black .4x2:text-11px .2x1:text-10px .2x1:mt-0.5'>9 079.00 ₽</p>
									</div>

								</div>
								<div className='flex justify-between items-center'>
									<p className='font-montserrat text-13px text-black-70pe  mt-6px'>Расчёт:</p>

									<p className='font-montserrat text-13px text-black .4x2:text-11px .2x1:text-9px .2x1:mt-1.5  '>(9 079.00 ₽ - (20 Б. * 64 ₽)) * 35%</p>


								</div>

							</div>
							<div className='bg-input-error-bg pl-4 py-3 px-2'>
								<p className='.2x1:text-10px font-montserrat leading-140% text-11px font-normal flex items-center'>
									<svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.33301 10.0003H8.66634V11.3337H7.33301V10.0003ZM7.99968 2.66699C5.05968 2.66699 2.66634 5.06032 2.66634 8.00032C2.66634 10.9403 5.05968 13.3337 7.99968 13.3337C10.9397 13.3337 13.333 10.9403 13.333 8.00032C13.333 5.06032 10.9397 2.66699 7.99968 2.66699ZM7.99968 14.667C7.1242 14.667 6.25729 14.4946 5.44845 14.1595C4.63962 13.8245 3.90469 13.3334 3.28563 12.7144C2.03539 11.4641 1.33301 9.76843 1.33301 8.00032C1.33301 6.23221 2.03539 4.53652 3.28563 3.28628C3.90469 2.66722 4.63962 2.17616 5.44845 1.84112C6.25729 1.50609 7.1242 1.33366 7.99968 1.33365C9.76779 1.33366 11.4635 2.03603 12.7137 3.28628C13.964 4.53652 14.6663 6.23221 14.6663 8.00032C14.6663 8.8758 14.4939 9.74271 14.1589 10.5515C13.8238 11.3604 13.3328 12.0953 12.7137 12.7144C12.0947 13.3334 11.3597 13.8245 10.5509 14.1595C9.74206 14.4946 8.87516 14.667 7.99968 14.667ZM7.33301 4.66699H8.66634V8.66699H7.33301V4.66699Z" fill="black" />
									</svg>

									Второй и последующий заказы - 35% на всю сумму заказа!</p>
							</div>
						</div>
						<div onClick={() => setFilter('promo')} className={`transition-all ${!dropDownds.promo ? '!h-16 !overflow-hidden  ' : ''}`}>
							<div className={` bg-white-BG_FILTER .2x1:px-2 p-18px pt-0 pb-3 transition-all ${!dropDownds.promo ? '!bg-white  ' : ''}`}>
								<div className='flex items-center  mt-3 relative pb-2 '>
									<svg className={`absolute -right-1.5 top-3 ${!dropDownds.promo ? 'prev' : ""} .2x1:right-0`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
									</svg>

									<svg width="30" className='mr-3 .2x1:mr-1' height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<mask id="path-1-inside-1_3631_916831" fill="white">
											<path fillRule="evenodd" clipRule="evenodd" d="M3 4.25C3 3.55964 3.55964 3 4.25 3H15.5C15.8315 3 16.1495 3.1317 16.3839 3.36612L26.4922 13.4744C27.8492 14.8395 27.8492 17.0443 26.4922 18.4094L26.4896 18.4121L18.4238 26.4778C17.7674 27.1348 16.8762 27.5043 15.9476 27.5043C15.0186 27.5043 14.1279 27.135 13.4713 26.4779L3.36661 16.3844C3.13189 16.1499 3 15.8318 3 15.5V4.25ZM5.5 5.5V14.9818L15.24 24.711C15.4276 24.8988 15.6821 25.0043 15.9476 25.0043C16.213 25.0043 16.4675 24.8988 16.655 24.7111L24.7192 16.6469L24.7203 16.6458C25.1065 16.2561 25.1065 15.6278 24.7203 15.2381L24.7192 15.2369L14.9822 5.5H5.5Z" />
											<path fillRule="evenodd" clipRule="evenodd" d="M10.8125 12.375C11.6754 12.375 12.375 11.6754 12.375 10.8125C12.375 9.94956 11.6754 9.25 10.8125 9.25C9.94956 9.25 9.25 9.94956 9.25 10.8125C9.25 11.6754 9.94956 12.375 10.8125 12.375Z" />
										</mask>
										<path fillRule="evenodd" clipRule="evenodd" d="M3 4.25C3 3.55964 3.55964 3 4.25 3H15.5C15.8315 3 16.1495 3.1317 16.3839 3.36612L26.4922 13.4744C27.8492 14.8395 27.8492 17.0443 26.4922 18.4094L26.4896 18.4121L18.4238 26.4778C17.7674 27.1348 16.8762 27.5043 15.9476 27.5043C15.0186 27.5043 14.1279 27.135 13.4713 26.4779L3.36661 16.3844C3.13189 16.1499 3 15.8318 3 15.5V4.25ZM5.5 5.5V14.9818L15.24 24.711C15.4276 24.8988 15.6821 25.0043 15.9476 25.0043C16.213 25.0043 16.4675 24.8988 16.655 24.7111L24.7192 16.6469L24.7203 16.6458C25.1065 16.2561 25.1065 15.6278 24.7203 15.2381L24.7192 15.2369L14.9822 5.5H5.5Z" fill="black" fillOpacity="0.7" />
										<path fillRule="evenodd" clipRule="evenodd" d="M10.8125 12.375C11.6754 12.375 12.375 11.6754 12.375 10.8125C12.375 9.94956 11.6754 9.25 10.8125 9.25C9.94956 9.25 9.25 9.94956 9.25 10.8125C9.25 11.6754 9.94956 12.375 10.8125 12.375Z" fill="black" fillOpacity="0.7" />
										<path d="M16.3839 3.36612L15.9596 3.79038L15.9596 3.79038L16.3839 3.36612ZM26.4922 13.4744L26.9177 13.0514L26.9165 13.0502L26.4922 13.4744ZM26.4922 18.4094L26.9171 18.833L26.9177 18.8325L26.4922 18.4094ZM26.4896 18.4121L26.9138 18.8363L26.9145 18.8357L26.4896 18.4121ZM18.4238 26.4778L17.9996 26.0535L17.9994 26.0537L18.4238 26.4778ZM13.4713 26.4779L13.8958 26.0538L13.8954 26.0534L13.4713 26.4779ZM3.36661 16.3844L2.94258 16.8089L2.94258 16.8089L3.36661 16.3844ZM5.5 14.9818H4.9C4.9 15.1411 4.96331 15.2938 5.07597 15.4063L5.5 14.9818ZM5.5 5.5V4.9C5.16863 4.9 4.9 5.16863 4.9 5.5H5.5ZM15.24 24.711L15.6645 24.287L15.6641 24.2865L15.24 24.711ZM16.655 24.7111L16.2308 24.2868L16.2305 24.2871L16.655 24.7111ZM24.7192 16.6469L25.1435 17.0712L25.1448 17.0698L24.7192 16.6469ZM24.7203 16.6458L25.1459 17.0687L25.1465 17.0682L24.7203 16.6458ZM24.7203 15.2381L25.1465 14.8157L25.1459 14.8152L24.7203 15.2381ZM24.7192 15.2369L25.1448 14.814L25.1435 14.8127L24.7192 15.2369ZM14.9822 5.5L15.4065 5.07574C15.294 4.96321 15.1414 4.9 14.9822 4.9V5.5ZM4.25 2.4C3.22827 2.4 2.4 3.22827 2.4 4.25H3.6C3.6 3.89101 3.89101 3.6 4.25 3.6V2.4ZM15.5 2.4H4.25V3.6H15.5V2.4ZM16.8081 2.94185C16.4612 2.59491 15.9907 2.4 15.5 2.4V3.6C15.6724 3.6 15.8377 3.66848 15.9596 3.79038L16.8081 2.94185ZM26.9177 18.8325C28.5074 17.2333 28.5074 14.6506 26.9177 13.0514L26.0667 13.8974C27.1911 15.0285 27.1911 16.8554 26.0667 17.9864L26.9177 18.8325ZM26.9145 18.8357L26.9171 18.833L26.0672 17.9859L26.0646 17.9885L26.9145 18.8357ZM18.8481 26.9021L26.9138 18.8363L26.0653 17.9878L17.9996 26.0535L18.8481 26.9021ZM15.9476 28.1043C17.0355 28.1043 18.0794 27.6714 18.8483 26.9019L17.9994 26.0537C17.4554 26.5981 16.7169 26.9043 15.9476 26.9043V28.1043ZM13.0469 26.9019C13.8159 27.6717 14.8594 28.1043 15.9476 28.1043V26.9043C15.1779 26.9043 14.4398 26.5984 13.8958 26.0538L13.0469 26.9019ZM2.94258 16.8089L13.0473 26.9024L13.8954 26.0534L3.79064 15.9599L2.94258 16.8089ZM2.4 15.5C2.4 15.991 2.59519 16.4619 2.94258 16.8089L3.79064 15.9599C3.66858 15.838 3.6 15.6725 3.6 15.5H2.4ZM2.4 4.25V15.5H3.6V4.25H2.4ZM6.1 14.9818V5.5H4.9V14.9818H6.1ZM15.9476 24.4043C15.8414 24.4043 15.7396 24.3621 15.6645 24.287L14.8155 25.1351C15.1157 25.4355 15.5229 25.6043 15.9476 25.6043V24.4043ZM16.2305 24.2871C16.1556 24.3621 16.0538 24.4043 15.9476 24.4043V25.6043C16.3723 25.6043 16.7795 25.4355 17.0795 25.1351L16.2305 24.2871ZM24.2949 16.2227L16.2308 24.2868L17.0793 25.1353L25.1435 17.0712L24.2949 16.2227ZM24.2947 16.2229L24.2936 16.224L25.1448 17.0698L25.1459 17.0687L24.2947 16.2229ZM24.2941 15.6604C24.4486 15.8163 24.4486 16.0676 24.2941 16.2235L25.1465 17.0682C25.7645 16.4446 25.7645 15.4393 25.1465 14.8157L24.2941 15.6604ZM24.2936 15.6599L24.2947 15.661L25.1459 14.8152L25.1448 14.814L24.2936 15.6599ZM14.558 5.92426L24.2949 15.6612L25.1435 14.8127L15.4065 5.07574L14.558 5.92426ZM5.5 6.1H14.9822V4.9H5.5V6.1ZM26.9165 13.0502L16.8081 2.94185L15.9596 3.79038L26.0679 13.8987L26.9165 13.0502ZM15.6641 24.2865L5.92403 14.5573L5.07597 15.4063L14.816 25.1355L15.6641 24.2865ZM10.8125 12.975C12.0068 12.975 12.975 12.0068 12.975 10.8125H11.775C11.775 11.3441 11.3441 11.775 10.8125 11.775V12.975ZM12.975 10.8125C12.975 9.61819 12.0068 8.65 10.8125 8.65V9.85C11.3441 9.85 11.775 10.2809 11.775 10.8125H12.975ZM10.8125 8.65C9.61819 8.65 8.65 9.61819 8.65 10.8125H9.85C9.85 10.2809 10.2809 9.85 10.8125 9.85V8.65ZM8.65 10.8125C8.65 12.0068 9.61819 12.975 10.8125 12.975V11.775C10.2809 11.775 9.85 11.3441 9.85 10.8125H8.65Z" fill="white" mask="url(#path-1-inside-1_3631_916831)" />
									</svg>
									<div>
										<p className='font-montserrat text-13px font-semibold'>Промокод</p>



									</div>
								</div>
								<div className='flex justify-between mt-3'>
									<p className='font-montserrat text-13px text-black-70pe'>Ваш заказ:</p>
									<div className='flex '>
										<p className='flex .2x1:text-10px .4x2:text-11px items-center font-montserrat text-black-70pe text-13px font-medium'><svg className='mr-1 .2x1:h-3 .2x1:w-3' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.333 14.3333C10.333 14.3333 5.99967 14.6667 3.66634 12C1.33301 9.33333 1.33301 1.33333 1.33301 1.33333C1.33301 1.33333 9.33301 1 11.9997 3C14.6663 5 13.9997 10.6667 13.9997 10.6667" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.6663 14.6668C14.6663 14.6668 10.9399 11.8507 8.66634 9.3335C6.39277 6.81633 5.33301 4.3335 5.33301 4.3335" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8.66699 9.33333L9.00033 5" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8.66634 9.33333L5.33301 9" stroke="#337202" strokeLinecap="round" strokeLinejoin="round" />
										</svg> 47.5 Б. <span className='mx-1 text-black .4x2:text-11px .2x1:text-10px '>/</span></p>
										<p className='font-montserrat text-13px text-black .4x2:text-11px .2x1:text-10px .2x1:mt-0.5'>9 079.00 ₽</p>
									</div>

								</div>
								<div className='flex justify-between items-center'>
									<p className='font-montserrat text-13px text-black-70pe  mt-6px'>Расчёт:</p>

									<p className='font-montserrat text-13px text-black .4x2:text-11px .2x1:text-9px .2x1:mt-1.5  '>(9 079.00 ₽ - (20 Б. * 64 ₽)) * 35%</p>


								</div>

							</div>
							<div className='bg-input-error-bg pl-4 py-3 px-2'>
								<p className='.2x1:text-10px font-montserrat leading-140% text-11px font-normal flex items-center'>
									<svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.33301 10.0003H8.66634V11.3337H7.33301V10.0003ZM7.99968 2.66699C5.05968 2.66699 2.66634 5.06032 2.66634 8.00032C2.66634 10.9403 5.05968 13.3337 7.99968 13.3337C10.9397 13.3337 13.333 10.9403 13.333 8.00032C13.333 5.06032 10.9397 2.66699 7.99968 2.66699ZM7.99968 14.667C7.1242 14.667 6.25729 14.4946 5.44845 14.1595C4.63962 13.8245 3.90469 13.3334 3.28563 12.7144C2.03539 11.4641 1.33301 9.76843 1.33301 8.00032C1.33301 6.23221 2.03539 4.53652 3.28563 3.28628C3.90469 2.66722 4.63962 2.17616 5.44845 1.84112C6.25729 1.50609 7.1242 1.33366 7.99968 1.33365C9.76779 1.33366 11.4635 2.03603 12.7137 3.28628C13.964 4.53652 14.6663 6.23221 14.6663 8.00032C14.6663 8.8758 14.4939 9.74271 14.1589 10.5515C13.8238 11.3604 13.3328 12.0953 12.7137 12.7144C12.0947 13.3334 11.3597 13.8245 10.5509 14.1595C9.74206 14.4946 8.87516 14.667 7.99968 14.667ZM7.33301 4.66699H8.66634V8.66699H7.33301V4.66699Z" fill="black" />
									</svg>

									Второй и последующий заказы - 35% на всю сумму заказа!</p>
							</div>
						</div>


					</div>
				</div>
			</section>
		</>




	)
}
export default SearchWindow