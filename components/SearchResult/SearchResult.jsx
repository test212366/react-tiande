
import { useEffect } from 'react';
import { useState } from 'react';
import two from '../../images/templates/2seaAct.jpg';
import one from '../../images/templates/oneItemSearchSlider.jpg'
import tree from '../../images/templates/treeItemSearch.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'

import SpecialOfferItem from '../SpecialOfferItem/SpecialOfferItem';
const SearchResult = ({ isShow }) => {
	const [isScroll, setIsScroll] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.visualViewport.pageTop > 75) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}
		})
	}, [])

	return (
		<section className={`${isShow ? 'absolute' : "hidden"} ${isScroll ? '!fixed !top-20 !-mt-1' : "!absolute"} dropDownShadow w-full flex searchWrapper bg-white z-40`}>
			<div className="sidebarSearch pl-20 pt-8 border-r pr-4    border-gray">
				<div className="flex justify-between items-center">
					<p className="font-montserrat font-semibold text-gray-deNum">Последние поиски</p>
					<button className="font-montserrat text-13px font-medium text-gray-deNum">Очистить</button>
				</div>
				<div>
					<div className="flex p-3 itemSearchHover transition-all hover:bg-gray-light cursor-pointer items-center justify-between">
						<p className="font-montserrat font-semibold text-black-70pe flex items-center"><svg className="-mt-0.5 mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8H12.75ZM12 12H11.25V12.3107L11.4697 12.5303L12 12ZM14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM11.25 8V12H12.75V8H11.25ZM11.4697 12.5303L14.4697 15.5303L15.5303 14.4697L12.5303 11.4697L11.4697 12.5303Z" fill="#DBDCDA" />
							<circle cx="12" cy="12" r="9" stroke="#DBDCDA" strokeWidth="1.5" />
						</svg> Эссенция для лица</p>
						<button className="opacity-0 transition-all"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.3334 6.66602L6.66675 13.3327M6.66675 6.66602L13.3334 13.3327" stroke="black" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
						</button>
					</div>
					<div className="flex p-3 itemSearchHover transition-all hover:bg-gray-light cursor-pointer items-center justify-between">
						<p className="font-montserrat font-semibold text-black-70pe flex items-center"><svg className="-mt-0.5 mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8H12.75ZM12 12H11.25V12.3107L11.4697 12.5303L12 12ZM14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM11.25 8V12H12.75V8H11.25ZM11.4697 12.5303L14.4697 15.5303L15.5303 14.4697L12.5303 11.4697L11.4697 12.5303Z" fill="#DBDCDA" />
							<circle cx="12" cy="12" r="9" stroke="#DBDCDA" strokeWidth="1.5" />
						</svg> Сыворотка</p>
						<button className="opacity-0 transition-all"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.3334 6.66602L6.66675 13.3327M6.66675 6.66602L13.3334 13.3327" stroke="black" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
						</button>
					</div>
					<div className="flex p-3 itemSearchHover transition-all hover:bg-gray-light cursor-pointer items-center justify-between">
						<p className="font-montserrat font-semibold text-black-70pe flex items-center"><svg className="-mt-0.5 mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8H12.75ZM12 12H11.25V12.3107L11.4697 12.5303L12 12ZM14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM11.25 8V12H12.75V8H11.25ZM11.4697 12.5303L14.4697 15.5303L15.5303 14.4697L12.5303 11.4697L11.4697 12.5303Z" fill="#DBDCDA" />
							<circle cx="12" cy="12" r="9" stroke="#DBDCDA" strokeWidth="1.5" />
						</svg> Пластырь</p>
						<button className="opacity-0 transition-all"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.3334 6.66602L6.66675 13.3327M6.66675 6.66602L13.3334 13.3327" stroke="black" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
						</button>
					</div>
					<div className="flex p-3 itemSearchHover transition-all hover:bg-gray-light cursor-pointer items-center justify-between">
						<p className="font-montserrat font-semibold text-black-70pe flex items-center"><svg className="-mt-0.5 mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8H12.75ZM12 12H11.25V12.3107L11.4697 12.5303L12 12ZM14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM11.25 8V12H12.75V8H11.25ZM11.4697 12.5303L14.4697 15.5303L15.5303 14.4697L12.5303 11.4697L11.4697 12.5303Z" fill="#DBDCDA" />
							<circle cx="12" cy="12" r="9" stroke="#DBDCDA" strokeWidth="1.5" />
						</svg>Детокс</p>
						<button className="opacity-0 transition-all"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.3334 6.66602L6.66675 13.3327M6.66675 6.66602L13.3334 13.3327" stroke="black" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
						</button>
					</div>

				</div>

				<div>
					<p className="font-montserrat font-semibold text-gray-quick-silver mt-5 mb-3">Популярные поисковые запросы</p>
					<div className="pl-2 pb-10px">
						<p className="font-montserrat mb-1 font-semibold text-black-70pe">Детоксикационный пластырь</p>
						<p className="font-noto-sans text-13px font-normal text-gray-quick-silver">Wellness / Фитопатчи</p>
					</div>
					<div className="pl-2 pb-10px">
						<p className="font-montserrat mb-1 font-semibold text-black-70pe">Тоник-бустер</p>
						<p className="font-noto-sans text-13px font-normal text-gray-quick-silver">Для лица / Сыворотки</p>
					</div>
					<div className="pl-2 pb-10px">
						<p className="font-montserrat mb-1 font-semibold text-black-70pe">Гидрофильное масло</p>
						<p className="font-noto-sans text-13px font-normal text-gray-quick-silver">Для лица / Очищения</p>
					</div>
					<div className="pl-2 pb-10px">
						<p className="font-montserrat mb-1 font-semibold text-black-70pe">Шампунь с корнем женьшеня</p>
						<p className="font-noto-sans text-13px font-normal text-gray-quick-silver">Для волос / Шампуни</p>
					</div>
					<div className="pl-2 pb-10px">
						<p className="font-montserrat mb-1 font-semibold text-black-70pe">FRESH CLICK</p>
						<p className="font-noto-sans text-13px font-normal text-gray-quick-silver">Для лица / Наборы</p>
					</div>
					<div className="pl-2">
						<p className="font-montserrat mb-1 font-semibold text-black-70pe">Плацентарная серия</p>
						<p className="font-noto-sans text-13px font-normal text-gray-quick-silver">Для лица / Серии</p>
					</div>
				</div>

			</div>
			<div className="w-full bg-white  ">
				<p className="h-38px bg-gray-light2 flex justify-center items-center font-montserrat">Результат поискового запроса: <span className="font-semibold"> 23</span></p>
				<div className="flex flex-wrap overflow-auto justify-center searchWrapperResult ">
					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />
					<SpecialOfferItem isSearchI={true} isActions={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />

					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />
					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />
					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />
					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />
					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />
					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />
					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />
					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />
					<SpecialOfferItem isSearchI={true} src={two} srcSliderImgTree={tree} srcSliderImgTwo={twoI} srcSliderImgOne={one} buttonDE={true} isSearchItem={true} />


					<div className='w-idia  bg-primary-searchBG flex flex-col px-11 itemSeeAll justify-center items-center    overflow-hidden'>

						<p className='font-montserrat text-center  font-semibold text-2xl text-primary'>Идеи <br /> подарков</p>

						<p className='flex items-center mt-5  font-montserrat text-13px font-medium text-primary'>Смотреть все <svg className='ml-1 mt-0.5' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.0253 3.93604L9.08469 4.70386L11.2648 6.46696L2.19482 6.47438L2.19617 7.55771L11.2413 7.55032L9.09791 9.30003L10.0429 10.0643L13.8053 6.99299L10.0253 3.93604Z" fill="#337202" />
						</svg></p>

					</div>
				</div>


			</div>
		</section>
	)
}
export default SearchResult