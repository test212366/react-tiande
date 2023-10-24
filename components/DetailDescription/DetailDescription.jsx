import EffectsItemDetail from "../EffectsItemDetail/EffectsItemDetail"
import Slider from "react-slick"
import NewsDate from "../News/NewsDate"
import NewsPrev from "../News/NewsPrev"
import NewsNext from "../News/NewsNext"
import oneNew from '../../images/templates/1news.jpg';

import useWindowSize from "../utils/useWindowSize";
import prodOne from '../../images/templates/prodOne.jpg'
import prodTwo from '../../images/templates/prodTwo.jpg'
import prodTree from '../../images/templates/prodTree.jpg'
import prodFour from '../../images/templates/prodFour.jpg'
import prodFive from '../../images/templates/prodFive.jpg'
import prodSix from '../../images/templates/prodSix.jpg'

import imgMaterTwo from '../../images/templates/imgMaterTwo.jpg'
import imgMaterTree from '../../images/templates/imgMaterTree.jpg'
import { useState } from "react"
import mobileFilter from '../../images/templates/mobileFilter.jpg'
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import trava from '../../images/templates/trava.png'
import active2 from '../../images/templates/actComp.jpg'
import i from '../../images/templates/image.jpg'
import matOne from '../../images/templates/materialsone.jpg'
import videoPreview from '../../images/templates/videoPreview.jpg'
import filtOne from '../../images/templates/filtOne.jpg'

import MaterialsPhotoItem from "../MaterialsPhotoItem/MaterialsPhotoItem"
import MaterialsVideoItem from "../MaterialsVideoItem/MaterialsVideoItem"
import MaterialsTextProdItem from "../MaterialsTextProdItem/MaterialsTextProdItem"
import DetailMaterialsPhone from "../DetailMaterialsPhone/DetailMaterialsPhone"
import DetailMaterialsPhoneV from "../DetailMaterialsPhoneV/DetailMaterialsPhoneV"
import DetailMaterialsPhoneP from "../DetailMaterialsPhoneP/DetailMaterialsPhoneP"
import VideoMaterials from "../VideoMaterials/VideoMaterials"

const DetailDescription = ({ refF, close, setVideo }) => {
	const [currentFilter, setCurrentFilter] = useState({
		photo: true,
		video: false,
		service: false,
		product: false,
		active: false
	})
	const [filterSortProduct, setFilterSortProduct] = useState({
		all: true,
		bucl: false,
		rolls: false,
		pdf: false
	}),
		[selectedAll, setSelectedAll] = useState(false),
		[showComponents, setShowComponents] = useState(false),
		[currentsItems, setCurrentsItems] = useState([])

	const materialsPhoto = [
		matOne,
		matOne,
		matOne,
		matOne
	],
		materialsVideo = [
			videoPreview
		],
		materialsProducts = [
			prodOne,
			prodTwo,
			prodTree,
			prodFour,
			prodFive,
			prodSix,

		]


	const setCurrent = item => setCurrentsItems([...currentsItems, item]),
		deleteItem = item => {
			const newArray = currentsItems.filter(itemArr => itemArr.src === item.src)
			setCurrentsItems([...newArray])
		},
		downLoadCheked = () => {
			if (selectedAll) {
				setCurrentsItems([])
				if (currentFilter.photo || currentFilterMobile.photo) {
					materialsPhoto.forEach(item => {
						const targetA = document.createElement('a')
						targetA.setAttribute('download', `custom.jpg`)
						targetA.setAttribute('href', item.src)
						targetA.click()

					})
				} else if (currentFilter.video || currentFilterMobile.video) {
					// ${item.type === 'video' ? 'mp4' : 'jpg'}
					materialsVideo.forEach(item => {
						const targetA = document.createElement('a')
						targetA.setAttribute('download', `custom.mp4`)
						targetA.setAttribute('href', item.src)
						targetA.click()

					})
				} else if (currentFilter.product || currentFilterMobile.product) {
					materialsProducts.forEach(item => {
						const targetA = document.createElement('a')
						targetA.setAttribute('download', `custom.pdf`)
						targetA.setAttribute('href', item.src)
						targetA.click()

					})
				}

			} else {

				currentsItems.forEach(item => {
					const targetA = document.createElement('a')
					targetA.setAttribute('download', `custom.${item.type}`)
					targetA.setAttribute('href', item.src.src)
					targetA.click()

				})
			}

		}

	const showComp = () => setShowComponents(!showComponents)

	const selectALl = () => setSelectedAll(!selectedAll)


	const setFilterSortLocalPr = (title) => {
		switch (title) {
			case ('all'):
				return setFilterSortProduct({
					all: true,
					bucl: false,
					rolls: false,
					pdf: false
				})
			case ('bucl'):
				return setFilterSortProduct({
					all: false,
					bucl: true,
					rolls: false,
					pdf: false
				})
			case ('rolls'):
				return setFilterSortProduct({
					all: false,
					bucl: false,
					rolls: true,
					pdf: false
				})
			case ('pdf'):
				return setFilterSortProduct({
					all: false,
					bucl: false,
					rolls: false,
					pdf: true
				})
			default: return
		}
	}
	const [filterSort, setFilterSort] = useState({
		default: true,
		notP: false
	})
	const setFilterSortLocal = (title) => {
		switch (title) {
			case ('default'):
				return setFilterSort({ default: true, notP: false })
			case ('notP'):
				return setFilterSort({ default: false, notP: true })

			default: return
		}
	}
	const [currentFilterMobile, setCurrentFilterMobile] = useState({
		photo: true,
		video: false,
		service: false,
		product: false,
		active: false
	})
	const [show, setShow] = useState({
		desc: true,
		activeComponents: false,
		materials: false
	})
	const [showDesc, setShowDesc] = useState({
		desc: true,
		activeComponents: false,
		materials: false
	})
	const setShowLocalDesc = (title) => {
		switch (title) {
			case ('desc'):
				return setShowDesc({ materials: false, desc: true, activeComponents: false })
			case ('activeComoonents'):
				return setShowDesc({ activeComponents: true, materials: false, desc: false })
			case ('materials'):
				return setShowDesc({ activeComponents: false, desc: false, materials: true })
			default: return
		}
	}

	const setShowLocal = (title, e) => {

		if (e.target.id === 'click') {
			switch (title) {
				case ('desc'):
					return setShow({ materials: false, desc: !show.desc, activeComponents: false })
				case ('activeComoonents'):
					return setShow({ activeComponents: !show.activeComponents, materials: false, desc: false })
				case ('materials'):
					return setShow({ activeComponents: false, desc: false, materials: !show.materials })
				default: return
			}


		}




	}


	const setFilterItem = (title, e) => {
		setCurrentsItems([])
		if (window.innerWidth < 1000) {

			switch (title) {
				case ('photo'):
					return setCurrentFilterMobile({
						photo: true,
						video: false,
						service: false,
						product: false,
						active: false
					})
				case ('video'):
					return setCurrentFilterMobile({
						photo: false,
						video: true,
						service: false,
						product: false,
						active: false
					})
				case ('service'):
					return setCurrentFilterMobile({
						photo: false,
						video: false,
						service: true,
						product: false,
						active: false
					})
				case ('product'):
					return setCurrentFilterMobile({
						photo: false,
						video: false,
						service: false,
						product: true,
						active: false
					})
				case ('active'):
					return setCurrentFilterMobile({
						photo: false,
						video: false,
						service: false,
						product: false,
						active: true
					})

				default: return
			}
		} else {
			switch (title) {
				case ('photo'):
					return setCurrentFilter({
						photo: true,
						video: false,
						service: false,
						product: false,
						active: false
					})
				case ('video'):
					return setCurrentFilter({
						photo: false,
						video: true,
						service: false,
						product: false,
						active: false
					})
				case ('service'):
					return setCurrentFilter({
						photo: false,
						video: false,
						service: true,
						product: false,
						active: false
					})
				case ('product'):
					return setCurrentFilter({
						photo: false,
						video: false,
						service: false,
						product: true,
						active: false
					})
				case ('active'):
					return setCurrentFilter({
						photo: false,
						video: false,
						service: false,
						product: false,
						active: true
					})

				default: return
			}
		}




	}

	const settings = {

		Infinity: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <NewsPrev isDetail={true} />,
		nextArrow: <NewsNext isDetail={true} />,
		appendDots: (dots) => {
			return (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						position: 'absolute',
						bottom: -30,

					}}
				>
					<div

						style={{
							width: 200,
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

		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 530,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,

					prevArrow: false,
					nextArrow: false,
				},
			},
		],
	};

	const downloadFileService = () => {
		const targetA = document.createElement('a')
		targetA.setAttribute('download', `custom.txt`)
		targetA.setAttribute('href', '')
		targetA.click()
	}



	return (
		<>

			<div ref={refF} className={`flex w-full ..5x2:hidden ..5x1:h-16 bg-label-bg rounded `}>
				<div onClick={() => setShowLocalDesc('desc')} className={`flex-1 relative ..5x1:h-16 ..5x1:text-base ${showDesc.desc ? 'activeCard' : ""} cursor-pointer h-86px flex font-montserrat font-medium text-lg justify-center items-center`}><svg className="..5x1:h-5 ..5x1:w-5 mr-3" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M5.33333 3.99999C4.96515 3.99999 4.66667 4.29847 4.66667 4.66666V27.3333C4.66667 27.7015 4.96513 28 5.33333 28H22V4.66666C22 4.29846 21.7015 3.99999 21.3333 3.99999H5.33333ZM24.6667 13.3333V4.66666C24.6667 2.82573 23.1743 1.33333 21.3333 1.33333H5.33333C3.49239 1.33333 2 2.82572 2 4.66666V27.3333C2 29.1743 3.4924 30.6667 5.33333 30.6667H26.6667C28.5076 30.6667 30 29.1743 30 27.3333V16C30 14.5272 28.8061 13.3333 27.3333 13.3333H24.6667ZM24.6667 16V28H26.6667C27.0349 28 27.3333 27.7015 27.3333 27.3333V16H24.6667ZM6 8C6 7.26362 6.59695 6.66666 7.33333 6.66666H12.6667C13.403 6.66666 14 7.26362 14 8C14 8.73637 13.403 9.33333 12.6667 9.33333H7.33333C6.59695 9.33333 6 8.73637 6 8ZM6 12.6667C6 11.9303 6.59695 11.3333 7.33333 11.3333H15.3333C16.0697 11.3333 16.6667 11.9303 16.6667 12.6667C16.6667 13.403 16.0697 14 15.3333 14H7.33333C6.59695 14 6 13.403 6 12.6667Z" fill="black" stroke="white" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
					{showDesc.desc && <div className="absolute left-1/2 ability -bottom-2 h-30px w-30px bg-white rotSearchHover"></div>}

					Описание</div>
				<div onClick={() => setShowLocalDesc('activeComoonents')} className="flex-1 z-10  cursor-pointer h-86px relative ..5x1:h-16 flex justify-center items-center">
					<div className={`w-full ${showDesc.activeComponents ? 'activeCard !h-full' : ""}  border-x ..5x1:text-base ..5x1:leading-120%  border-gray  flex font-montserrat font-medium text-lg text-center leading-120% justify-center items-center`}><svg className="..5x1:h-5 ..5x1:w-5 mr-3" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M13.1831 1.42602C13.7512 0.857988 14.6721 0.857994 15.2402 1.42603L17.2851 3.47099L17.2971 3.48284L25.5252 11.711C26.0933 12.279 26.0933 13.2 25.5252 13.768L14.2116 25.0818C13.9388 25.3545 13.5688 25.5078 13.1831 25.5078C12.7973 25.5078 12.4273 25.3545 12.1545 25.0818L3.92638 16.8536C3.35835 16.2856 3.35835 15.3646 3.92638 14.7966L14.2115 4.51143L13.1831 3.48306C12.6151 2.91502 12.6151 1.99405 13.1831 1.42602ZM7.01194 15.8251L8.13655 14.7005L17.4249 17.7543L13.183 21.9962L7.01194 15.8251ZM19.7295 15.4497L10.4411 12.3959L16.2686 6.5684L22.4397 12.7395L19.7295 15.4497Z" fill="black" />
						<path d="M25.9545 25.3608C27.5612 25.3608 28.8636 24.0583 28.8636 22.4517C28.8636 21.3806 27.894 19.926 25.9545 18.0881C24.0151 19.926 23.0455 21.3806 23.0455 22.4517C23.0455 24.0583 24.3479 25.3608 25.9545 25.3608Z" fill="black" />
						<path d="M1.95455 28.2699C1.15122 28.2699 0.5 28.9211 0.5 29.7244C0.5 30.5278 1.15122 31.179 1.95455 31.179H31.0455C31.8488 31.179 32.5 30.5278 32.5 29.7244C32.5 28.9211 31.8488 28.2699 31.0455 28.2699H1.95455Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M13.1831 1.42602C13.7512 0.857988 14.6721 0.857994 15.2402 1.42603L17.2851 3.47099L17.2971 3.48284L25.5252 11.711C26.0933 12.279 26.0933 13.2 25.5252 13.768L14.2116 25.0818C13.9388 25.3545 13.5688 25.5078 13.1831 25.5078C12.7973 25.5078 12.4273 25.3545 12.1545 25.0818L3.92638 16.8536C3.35835 16.2856 3.35835 15.3646 3.92638 14.7966L14.2115 4.51143L13.1831 3.48306C12.6151 2.91502 12.6151 1.99405 13.1831 1.42602ZM7.01194 15.8251L8.13655 14.7005L17.4249 17.7543L13.183 21.9962L7.01194 15.8251ZM19.7295 15.4497L10.4411 12.3959L16.2686 6.5684L22.4397 12.7395L19.7295 15.4497Z" stroke="#E9EDEC" strokeWidth="0.8" strokeLinecap="round" />
						<path d="M25.9545 25.3608C27.5612 25.3608 28.8636 24.0583 28.8636 22.4517C28.8636 21.3806 27.894 19.926 25.9545 18.0881C24.0151 19.926 23.0455 21.3806 23.0455 22.4517C23.0455 24.0583 24.3479 25.3608 25.9545 25.3608Z" stroke="#E9EDEC" strokeWidth="0.8" strokeLinecap="round" />
						<path d="M1.95455 28.2699C1.15122 28.2699 0.5 28.9211 0.5 29.7244C0.5 30.5278 1.15122 31.179 1.95455 31.179H31.0455C31.8488 31.179 32.5 30.5278 32.5 29.7244C32.5 28.9211 31.8488 28.2699 31.0455 28.2699H1.95455Z" stroke="#E9EDEC" strokeWidth="0.8" strokeLinecap="round" />
					</svg>
						{showDesc.activeComponents && <div className="absolute left-1/2 ability -bottom-2.5 h-30px w-30px bg-white rotSearchHover"></div>}

						Активные <br /> компоненты</div>
				</div>

				<div onClick={() => setShowLocalDesc('materials')} className={`flex-1 relative ${showDesc.materials ? 'activeCard' : ""} cursor-pointer ..5x1:h-16 ..5x1:text-base font-montserrat font-medium text-lg h-86px flex justify-center items-center`}><svg className="..5x1:h-5 ..5x1:w-5 mr-3" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M1.8335 3.66666C1.8335 2.93028 2.43045 2.33333 3.16683 2.33333H29.8335C30.5699 2.33333 31.1668 2.93028 31.1668 3.66666C31.1668 4.40304 30.5699 4.99999 29.8335 4.99999H29.1668V22.3333C29.1668 23.0697 28.5699 23.6667 27.8335 23.6667H19.7191L22.7763 26.7239C23.297 27.2446 23.297 28.0888 22.7763 28.6095C22.2556 29.1302 21.4114 29.1302 20.8907 28.6095L16.5002 24.2189L12.1096 28.6095C11.5889 29.1302 10.7447 29.1302 10.224 28.6095C9.70332 28.0888 9.70332 27.2446 10.224 26.7239L13.2812 23.6667H5.16683C4.43045 23.6667 3.8335 23.0697 3.8335 22.3333V4.99999H3.16683C2.43045 4.99999 1.8335 4.40304 1.8335 3.66666ZM6.50016 4.99999V21H26.5002V4.99999H6.50016ZM24.0866 8.07013C24.6078 8.59029 24.6087 9.43451 24.0886 9.95575L17.4495 16.6085C16.933 17.126 16.0961 17.1311 15.5734 16.6198L13.5434 14.6343L10.7141 17.396C10.1872 17.9104 9.34301 17.9002 8.82864 17.3732C8.31427 16.8463 8.32447 16.0021 8.85142 15.4878L12.613 11.816C13.1314 11.31 13.9589 11.3104 14.4767 11.8169L16.4944 13.7905L22.201 8.07207C22.7212 7.55084 23.5654 7.54997 24.0866 8.07013Z" fill="black" stroke="#F7F8F6" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
					{showDesc.materials && <div className="absolute left-1/2 ability -bottom-2 h-30px w-30px bg-white rotSearchHover"></div>}
					Материалы</div>
			</div>
			{showDesc.desc && <div className="mt-8 flex ..5x2:pb-3 ..6x3:mt-0 ..5x2:flex-col pb-32">
				<div className="..5x2:hidden">
					<h4 className="font-medium text-xl font-montserrat mb-3 ..5x1:mb-0">О товаре</h4>
					<p className="font-montserrat leading-180 mb-8 ..5x1:mb-4 ..5x1:text-sm ..5x1:leading-120%">Маска отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения, придает коже ухоженный вид. Насыщает питательными элементами, удерживает влагу внутри клеток, повышая упругость кожи и замедляя процесс образования морщин</p>
					<h4 className="font-montserrat text-xl font-medium mb-3 ..5x1:mb-0">Применение</h4>
					<p className="font-montserrat leading-180 mb-8 ..5x1:mb-4 ..5x1:text-sm ..5x1:leading-120%">Нанесите маску равномерным слоем на очищенную кожу лица, избегая области вокруг глаз. Через 10 минут удалите остатки салфеткой или мягко вотрите их в кожу.
						Рекомендуется использовать маску ежедневно в течение 10 дней, затем 2-3 раза в неделю.</p>
					<h4 className="font-montserrat text-xl font-medium mb-3 ..5x1:mb-0">О товаре</h4>
					<p className="font-montserrat ..5x2:mb-3 leading-180 italic ..5x1:text-sm ..5x1:leading-120%">Dimethicone, Dimethiconol, Avena Sativa Kernel Oil, Tocopherol, Hexyl Cinnamal, Linalool</p>
				</div>
				<div className="hidden ..5x2:block">
					<div className=" ">
						<div onClick={(e) => setShowLocal('desc', e)} className={`mt-3 h-12 buttonShadow p-3 py-3.5 rounded transition-all ${show.desc ? 'activeButtonS' : 'overflow-hidden'} `}>
							<div id="click" className="flex items-center justify-between">
								<p id="click" className="font-montserrat mb-3 text-sm font-medium flex items-center "><svg id="click" className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M2.66667 1.99996C2.48257 1.99996 2.33333 2.1492 2.33333 2.33329V13.6666C2.33333 13.8507 2.48257 14 2.66667 14H11V2.33329C11 2.14919 10.8508 1.99996 10.6667 1.99996H2.66667ZM12.3333 6.66663V2.33329C12.3333 1.41283 11.5872 0.666626 10.6667 0.666626H2.66667C1.74619 0.666626 1 1.41282 1 2.33329V13.6666C1 14.5871 1.7462 15.3333 2.66667 15.3333H13.3333C14.2538 15.3333 15 14.5871 15 13.6666V7.99996C15 7.26357 14.4031 6.66663 13.6667 6.66663H12.3333ZM12.3333 7.99996V14H13.3333C13.5174 14 13.6667 13.8507 13.6667 13.6666V7.99996H12.3333ZM3 3.99996C3 3.63177 3.29848 3.33329 3.66667 3.33329H6.33333C6.70152 3.33329 7 3.63177 7 3.99996C7 4.36815 6.70152 4.66663 6.33333 4.66663H3.66667C3.29848 4.66663 3 4.36815 3 3.99996ZM3 6.33329C3 5.9651 3.29848 5.66663 3.66667 5.66663H7.66667C8.03486 5.66663 8.33333 5.9651 8.33333 6.33329C8.33333 6.70148 8.03486 6.99996 7.66667 6.99996H3.66667C3.29848 6.99996 3 6.70148 3 6.33329Z" fill="white" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
									Описание</p>
								<svg id="click" className="svgI -mt-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.8167 5.8L8 9.63212L4.175 5.8L3 6.97976L8 12L13 6.97976L11.8167 5.8Z" fill="black" />
								</svg>
							</div>
							<p className="mb-3 font-montserrat text-11px leading-140% text-gray-quick-silver">
								Маска отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения, придает коже ухоженный вид. Насыщает питательными элементами, удерживает влагу внутри клеток, повышая упругость кожи и замедляя процесс образования морщин
							</p>
							<div>
								<p className="font-montserrat font-medium text-xs mb-0.5">Применение</p>
								<p className="font-montserrat text-11px text-gray-quick-silver leading-140% mb-3">Нанесите маску равномерным слоем на очищенную кожу лица, избегая области вокруг </p>
							</div>
							<button className="font-montserrat font-medium text-13px text-primary pb-0.5 border-b border-dashed border-primary">Развернуть</button>


						</div>
						<div onClick={(e) => setShowLocal('activeComoonents', e)} className={`mt-3  h-12 buttonShadow py-3.5 p-0 rounded transition-all ${show.activeComponents ? 'activeButtonS !h-300px ..6x5:!h-317px ..6x6:!h-350px ..7x001:!h-387px' : 'overflow-hidden'}`}>
							<div id="click" className="flex items-center px-3 justify-between">
								<p id="click" className="font-montserrat mb-3 text-sm font-medium flex items-center "><svg id="click" className="mr-2" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M7.09157 0.71301C7.37559 0.428994 7.83607 0.428997 8.12009 0.713016L9.14255 1.73549L9.14855 1.74142L13.2626 5.85549C13.5466 6.13951 13.5466 6.59999 13.2626 6.88401L7.60579 12.5409C7.4694 12.6773 7.28441 12.7539 7.09153 12.7539C6.89864 12.7539 6.71366 12.6773 6.57727 12.5409L2.46319 8.42681C2.17917 8.14279 2.17917 7.68231 2.46319 7.39829L7.60574 2.25572L7.09156 1.74153C6.80755 1.45751 6.80755 0.997026 7.09157 0.71301ZM4.00597 7.91255L4.56828 7.35024L9.21247 8.87714L7.09152 10.9981L4.00597 7.91255ZM10.3648 7.72485L5.72057 6.19794L8.63429 3.2842L11.7198 6.36975L10.3648 7.72485Z" fill="white" />
									<path d="M13.4773 12.6804C14.2806 12.6804 14.9318 12.0292 14.9318 11.2259C14.9318 10.6903 14.447 9.96302 13.4773 9.04403C12.5076 9.96302 12.0227 10.6903 12.0227 11.2259C12.0227 12.0292 12.674 12.6804 13.4773 12.6804Z" fill="white" />
									<path d="M1.47727 14.1349C1.07561 14.1349 0.75 14.4606 0.75 14.8622C0.75 15.2639 1.07561 15.5895 1.47727 15.5895H16.0227C16.4244 15.5895 16.75 15.2639 16.75 14.8622C16.75 14.4606 16.4244 14.1349 16.0227 14.1349H1.47727Z" fill="white" />
									<path fillRule="evenodd" clipRule="evenodd" d="M7.09157 0.71301C7.37559 0.428994 7.83607 0.428997 8.12009 0.713016L9.14255 1.73549L9.14855 1.74142L13.2626 5.85549C13.5466 6.13951 13.5466 6.59999 13.2626 6.88401L7.60579 12.5409C7.4694 12.6773 7.28441 12.7539 7.09153 12.7539C6.89864 12.7539 6.71366 12.6773 6.57727 12.5409L2.46319 8.42681C2.17917 8.14279 2.17917 7.68231 2.46319 7.39829L7.60574 2.25572L7.09156 1.74153C6.80755 1.45751 6.80755 0.997026 7.09157 0.71301ZM4.00597 7.91255L4.56828 7.35024L9.21247 8.87714L7.09152 10.9981L4.00597 7.91255ZM10.3648 7.72485L5.72057 6.19794L8.63429 3.2842L11.7198 6.36975L10.3648 7.72485Z" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" />
									<path d="M13.4773 12.6804C14.2806 12.6804 14.9318 12.0292 14.9318 11.2259C14.9318 10.6903 14.447 9.96302 13.4773 9.04403C12.5076 9.96302 12.0227 10.6903 12.0227 11.2259C12.0227 12.0292 12.674 12.6804 13.4773 12.6804Z" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" />
									<path d="M1.47727 14.1349C1.07561 14.1349 0.75 14.4606 0.75 14.8622C0.75 15.2639 1.07561 15.5895 1.47727 15.5895H16.0227C16.4244 15.5895 16.75 15.2639 16.75 14.8622C16.75 14.4606 16.4244 14.1349 16.0227 14.1349H1.47727Z" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" />
								</svg>

									Активные компоненты</p>
								<svg id="click" className="svgI -mt-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.8167 5.8L8 9.63212L4.175 5.8L3 6.97976L8 12L13 6.97976L11.8167 5.8Z" fill="black" />
								</svg>
							</div>
							<Swiper className="mt-2">
								<SwiperSlide className="p-3 mr-2 ..7x230:p-1 flex bg-gray-light justify-between">

									<div className="..7x001:mr-2 ..7x230:mr-0 w-65%">
										<p className="font-montserrat italic font-medium text-13px text-primary mb-1">Мушмула</p>
										<p className="font-montserrat text-black ..7x230:text-10px italic font-light text-11px leading-180">
											Экстракт мушмулы германской-источник большого количества витаминов, минералов и органический кислот. Питает кожу, ускоряет обновление клеток, улучшает микрорельеф кожи, разглаживая мелкие морщинки и неровности
										</p>
									</div>
									<div className="h-94px w-94px ..7x230:h-16 ..7x230:w-16 mt-9">
										<Image src={trava} width={90} height={90} />
									</div>

								</SwiperSlide>
								<SwiperSlide className="p-3 mr-2 ..7x230:p-1 flex bg-gray-light justify-between">

									<div className="..7x001:mr-2 ..7x230:mr-0 w-65%">
										<p className="font-montserrat italic font-medium text-13px text-primary mb-1">Мушмула</p>
										<p className="font-montserrat text-black ..7x230:text-10px italic font-light text-11px leading-180">
											Экстракт мушмулы германской-источник большого количества витаминов, минералов и органический кислот. Питает кожу, ускоряет обновление клеток, улучшает микрорельеф кожи, разглаживая мелкие морщинки и неровности
										</p>
									</div>
									<div className="h-94px w-94px ..7x230:h-16 ..7x230:w-16 mt-9">
										<Image src={trava} width={90} height={90} />
									</div>

								</SwiperSlide>

							</Swiper>
							<p className="mt-6 ..7x230:mt-3 font-montserrat text-11px uppercase tracking-widest">все компоненты этой категории</p>
							<div className="flex overflow-x-auto whitespace-nowrap mt-6px">
								<EffectsItemDetail title={'алоэ'} mb={true} />
								<EffectsItemDetail title={'арбутин'} mb={true} />
								<EffectsItemDetail title={'аскорбиновая кислота'} mb={true} />
								<EffectsItemDetail title={'АНА-кислоты'} mb={true} />
								<EffectsItemDetail title={'аллантоин'} mb={true} />
								<EffectsItemDetail title={'аморфофаллус-коньяк'} mb={true} />
								<EffectsItemDetail title={'боссвелия'} mb={true} />
								<EffectsItemDetail title={'белая глина'} mb={true} />
								<EffectsItemDetail title={'витамин E'} mb={true} />
								<EffectsItemDetail title={'водоросли'} mb={true} />
								<EffectsItemDetail title={'гиалуроновая кислота'} mb={true} />
								<EffectsItemDetail title={'гиалуронат натрия'} mb={true} />
								<EffectsItemDetail title={'гамамелис виргинский'} mb={true} />
								<EffectsItemDetail title={'диоксид титана'} mb={true} />
								<EffectsItemDetail title={'жемчуг'} mb={true} />
								<EffectsItemDetail title={'зеленый чай'} mb={true} />
								<EffectsItemDetail title={'зародыши пшеницы'} mb={true} />
								<EffectsItemDetail title={'камелия'} mb={true} />
								<EffectsItemDetail title={'коллаген'} mb={true} />
								<EffectsItemDetail title={'комплект BIOPHYTEX'} mb={true} />
								<EffectsItemDetail title={'ещё'} mb={true} arrow={true} />
							</div>
						</div>
						<div onClick={(e) => setShowLocal('materials', e)} className={`mt-3 mb-3  h-12 buttonShadow p-0 py-3.5 rounded transition-all ${show.materials ? `activeButtonS !h-350px ..6x4:!h-428px  ${currentFilterMobile.active ? '!h-1100px ..6x4:!h-1100px ..7x001:!h-1100px' : ''}` : 'overflow-hidden'}`}>
							<div id="click" className="flex items-center px-3 justify-between">
								<p id="click" className="font-montserrat mb-3 text-sm font-medium flex items-center "><svg id="click" className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.666748 1.83329C0.666748 1.4651 0.965225 1.16663 1.33341 1.16663H14.6667C15.0349 1.16663 15.3334 1.4651 15.3334 1.83329C15.3334 2.20148 15.0349 2.49996 14.6667 2.49996H14.3334V11.1666C14.3334 11.5348 14.0349 11.8333 13.6667 11.8333H9.60956L11.1382 13.3619C11.3985 13.6222 11.3985 14.0443 11.1382 14.3047C10.8778 14.565 10.4557 14.565 10.1953 14.3047L8.00008 12.1094L5.80482 14.3047C5.54447 14.565 5.12236 14.565 4.86201 14.3047C4.60166 14.0443 4.60166 13.6222 4.86201 13.3619L6.39061 11.8333H2.33341C1.96522 11.8333 1.66675 11.5348 1.66675 11.1666V2.49996H1.33341C0.965225 2.49996 0.666748 2.20148 0.666748 1.83329ZM3.00008 2.49996V10.5H13.0001V2.49996H3.00008ZM11.7933 4.03503C12.0539 4.29511 12.0544 4.71722 11.7943 4.97783L8.47475 8.30421C8.21651 8.56298 7.79804 8.56551 7.53669 8.30988L6.52172 7.3171L5.10706 8.69798C4.84358 8.95516 4.4215 8.95006 4.16432 8.68658C3.90713 8.42311 3.91224 8.00103 4.17571 7.74384L6.05652 5.90794C6.3157 5.65495 6.72945 5.65517 6.98836 5.90842L7.99719 6.89519L10.8505 4.036C11.1106 3.77538 11.5327 3.77495 11.7933 4.03503Z" fill="white" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>


									Материалы</p>
								<svg id="click" className="svgI -mt-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.8167 5.8L8 9.63212L4.175 5.8L3 6.97976L8 12L13 6.97976L11.8167 5.8Z" fill="black" />
								</svg>
							</div>

							<div className=" overflow-x-auto whitespace-nowrap flex py-2 border-t  border-t-gray-light2">
								<p onClick={(e) => setFilterItem('photo', e)} className={`flex items-center font-montserrat p-6px rounded-sm transition-all text-11px  hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.photo ? '!bg-gray-light2 rounded' : ""}`}><svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5C1.5 3.89543 2.39543 3 3.5 3H20.5C21.6046 3 22.5 3.89543 22.5 5V19C22.5 20.1046 21.6046 21 20.5 21H3.5C2.39543 21 1.5 20.1046 1.5 19V5ZM3.5 17.4142V19H20.5V17.4942L13.1438 11.8688L10.7593 14.6508C10.4084 15.0601 9.79627 15.1176 9.37531 14.7809L7.57422 13.34L3.5 17.4142ZM20.5 14.9764V5H3.5V14.5858L6.79289 11.2929C7.1532 10.9326 7.7268 10.9008 8.12469 11.2191L9.86985 12.6153L12.2407 9.84921C12.5861 9.44633 13.1859 9.38331 13.6075 9.70564L20.5 14.9764ZM7.25 8.5C7.38807 8.5 7.5 8.38807 7.5 8.25C7.5 8.11193 7.38807 8 7.25 8C7.11193 8 7 8.11193 7 8.25C7 8.38807 7.11193 8.5 7.25 8.5ZM5.5 8.25C5.5 7.2835 6.2835 6.5 7.25 6.5C8.2165 6.5 9 7.2835 9 8.25C9 9.2165 8.2165 10 7.25 10C6.2835 10 5.5 9.2165 5.5 8.25Z" fill="black" fill-opacity="0.7" />
								</svg>
									Фотографии
								</p>
								<p onClick={(e) => setFilterItem('video', e)} className={`flex items-center p-6px  text-11px rounded-sm font-montserrat   transition-all hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.video ? '!bg-gray-light2 rounded' : ""}`}>
									<svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02943 3 3 7.02943 3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3ZM9.5 7.66987C9.8094 7.49124 10.1906 7.49124 10.5 7.66987L16.5 11.134C16.8094 11.3126 17 11.6427 17 12C17 12.3573 16.8094 12.6874 16.5 12.866L10.5 16.3301C10.1906 16.5088 9.8094 16.5088 9.5 16.3301C9.1906 16.1515 9 15.8214 9 15.4641V8.5359C9 8.17863 9.1906 7.84851 9.5 7.66987ZM11 10.268V13.732L14 12L11 10.268Z" fill="black" fill-opacity="0.7" />
									</svg>
									Видео
								</p>
								<p onClick={(e) => setFilterItem('service', e)} className={`flex items-center  font-montserrat p-6px  text-11px rounded-sm transition-all hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.service ? '!bg-gray-light2 rounded' : ""}`}>
									<svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M21 2C22.018 2 22.87 2.76384 22.9916 3.82579L23 4V17C23 18.018 22.2362 18.87 21.1742 18.9916L21 19H18V21C18 21.7043 17.2979 22.1753 16.6586 21.9402L16.5528 21.8944L15 21.118L13.4472 21.8944C12.8173 22.2094 12.082 21.792 12.0064 21.1151L12 21V19H3C2.03562 19 1.22018 18.3145 1.03358 17.3393L1.00839 17.1742L1 17V4C1 2.98205 1.76385 2.13004 2.82579 2.00839L3 2H21ZM16 17.391L15.7664 17.4378C15.6053 17.465 15.438 17.4836 15.2646 17.4929L15.2198 17.4941C15.147 17.498 15.0737 17.5 15 17.5L14.8004 17.4951C14.7983 17.495 14.7963 17.4949 14.7943 17.4948C14.5133 17.4842 14.2487 17.4491 14.0002 17.393L14 19.381L14.5528 19.1056C14.8343 18.9648 15.1657 18.9648 15.4472 19.1056L16 19.382V17.391ZM3.05759 3.99834L3 4L2.99834 16.9424L3.00003 17L12 17L11.999 16.1447C11.3772 15.4397 11 14.5139 11 13.5C11 11.2909 12.7909 9.5 15 9.5C17.2091 9.5 19 11.2909 19 13.5C19 14.5139 18.6227 15.4397 18.001 16.1447L18 17L20.9424 17.0017L21 16.999L21.0017 4.05759L20.999 4L3.05759 3.99834ZM15 11.5C13.8954 11.5 13 12.3954 13 13.5C13 14.6046 13.8954 15.5 15 15.5L14.923 15.497L15 15.5C15.0267 15.5 15.0529 15.4997 15.0788 15.499C15.5643 15.48 16.0066 15.2874 16.3439 14.9812C16.3459 14.9773 16.3486 14.9749 16.3513 14.9726L16.3439 14.9812C16.7469 14.6154 17 14.0872 17 13.5C17 12.3954 16.1046 11.5 15 11.5ZM8 13C8.55228 13 9 13.4477 9 14C9 14.5128 8.61396 14.9355 8.11662 14.9933L8 15H6C5.44772 15 5 14.5523 5 14C5 13.4872 5.38604 13.0645 5.88338 13.0067L6 13H8ZM9 9.5C9.55229 9.5 10 9.94772 10 10.5C10 11.0128 9.61396 11.4355 9.11662 11.4933L9 11.5H6C5.44772 11.5 5 11.0523 5 10.5C5 9.98716 5.38604 9.56449 5.88338 9.50673L6 9.5H9ZM18 6C18.5523 6 19 6.44772 19 7C19 7.51284 18.614 7.93551 18.1166 7.99327L18 8H6C5.44772 8 5 7.55228 5 7C5 6.48716 5.38604 6.06449 5.88338 6.00673L6 6H18Z" fill="black" fill-opacity="0.7" />
									</svg>
									Сертификаты
								</p>
								<p onClick={(e) => setFilterItem('product', e)} className={`flex items-center font-montserrat p-6px  text-11px rounded-sm transition-all hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.product ? '!bg-gray-light2 rounded' : ""}`}>
									<svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2V9H22C22.5523 9 23 9.44772 23 10V19C23 19.5523 22.5523 20 22 20H19.5V22C19.5 22.5523 19.0523 23 18.5 23H5.5C4.94772 23 4.5 22.5523 4.5 22V20H2C1.44772 20 1 19.5523 1 19V10C1 9.44772 1.44772 9 2 9H4V2ZM6 9H18V3H6V9ZM3 11V18H4.49025V16C4.49025 15.4477 4.93797 15 5.49025 15H18.5086C19.0609 15 19.5086 15.4477 19.5086 16V18H21V11H3ZM6.5 17V21H17.5V17H6.5Z" fill="black" fill-opacity="0.7" />
									</svg>
									Печатная продукция
								</p>
								<p onClick={(e) => setFilterItem('active', e)} className={`flex  items-center font-montserrat p-6px  text-11px rounded-sm transition-all hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.active ? '!bg-gray-light2 rounded' : ""}`}>
									<svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5002 5C14.5002 3.067 16.0672 1.5 18.0002 1.5C19.9332 1.5 21.5002 3.067 21.5002 5C21.5002 6.93298 19.9332 8.5 18.0002 8.5C16.0672 8.5 14.5002 6.93298 14.5002 5ZM18.0002 3.5C17.1718 3.5 16.5002 4.17158 16.5002 5C16.5002 5.82841 17.1718 6.5 18.0002 6.5C18.8286 6.5 19.5002 5.82841 19.5002 5C19.5002 4.17158 18.8286 3.5 18.0002 3.5ZM9.67453 6.05404C9.92294 5.96803 10.1952 5.98329 10.4325 6.09652L15.9309 8.72082C16.2471 8.87173 16.4613 9.17712 16.4954 9.52582C16.5296 9.87451 16.3787 10.2157 16.0978 10.425L11.7431 13.6712L16.05 16.5064C16.2805 16.6582 16.438 16.8984 16.4854 17.1702C16.5327 17.442 16.4656 17.7213 16.2999 17.942L12.8041 22.5993C12.4725 23.041 11.8457 23.1303 11.404 22.7988C10.9623 22.4672 10.873 21.8404 11.2046 21.3987L14.0619 17.5921L9.45188 14.5574C9.17951 14.3781 9.01167 14.0772 9.00215 13.7513C8.99263 13.4254 9.14263 13.1152 9.40407 12.9204L13.5739 9.81198L9.94124 8.07819L6.32737 9.32951C5.80549 9.51021 5.23592 9.23363 5.05522 8.71174C4.87452 8.18986 5.1511 7.6203 5.67298 7.43959L9.67453 6.05404ZM22.7289 8.04814C23.107 8.45063 23.0873 9.08349 22.6848 9.46167L19.6857 12.2797C19.3711 12.5752 18.9024 12.6356 18.5232 12.4294L17.1823 11.7002C16.6971 11.4363 16.5177 10.8291 16.7816 10.3439C17.0454 9.85877 17.6527 9.67935 18.1378 9.94321L18.8433 10.3269L21.3153 8.00413C21.7178 7.62595 22.3507 7.64565 22.7289 8.04814ZM9.02934 14.9762C9.46922 15.3102 9.55511 15.9375 9.22116 16.3774L7.73631 18.3333C7.65333 18.4426 7.54873 18.5336 7.42903 18.6008L2.49134 21.3704C2.00965 21.6405 1.40015 21.4691 1.12996 20.9874C0.859782 20.5057 1.03124 19.8962 1.51292 19.626L6.26915 16.9582L7.62819 15.168C7.96214 14.7282 8.58945 14.6423 9.02934 14.9762Z" fill="black" fill-opacity="0.7" />
									</svg>
									Активность
									<svg className="ml-3  ..5x2:ml-1 ..5x2:h-5" width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.03083 8.05073H6.03085C6.03395 8.05073 6.03703 8.05073 6.04011 8.05072C6.11242 8.05062 6.17802 8.05053 6.23245 8.10836C6.25806 8.13557 6.27921 8.17326 6.30083 8.22177C6.32267 8.2708 6.34683 8.33526 6.37689 8.41897L6.37708 8.41951L6.37708 8.41951C6.74192 9.47365 7.33369 10.7808 7.98309 11.8236C8.30787 12.3451 8.64588 12.7985 8.97577 13.1209C9.30748 13.445 9.62257 13.6285 9.90183 13.6285C10.1182 13.6285 10.2766 13.5742 10.3935 13.4909C10.5108 13.4074 10.5901 13.2919 10.6438 13.1637C10.7519 12.9052 10.7525 12.6034 10.7525 12.4318C10.7525 12.4318 10.7525 12.4318 10.7525 12.4318L10.7517 9.71838C10.7029 8.83514 10.3762 8.3979 10.1611 8.1314L10.0953 8.04988L10.2001 8.05L12.8221 8.05293L12.8664 8.05298L12.8717 8.09698L12.872 8.10009L12.872 8.10132L12.8721 8.10273L12.8721 8.10522L12.8721 8.11256L12.8721 8.13896L12.8719 8.23712L12.8707 8.5889C12.8697 8.88232 12.8685 9.27991 12.8679 9.69974C12.8668 10.5399 12.8683 11.4677 12.8795 11.8289L12.8796 11.8305C12.8795 12.3351 13.0831 12.7112 13.4231 12.8164C13.7657 12.9224 14.2796 12.7651 14.9258 12.1237C16.2905 10.6121 17.2358 8.34998 17.2739 8.25767L17.2741 8.25719C17.3027 8.18988 17.3335 8.13372 17.3876 8.09736C17.4416 8.06112 17.5104 8.05 17.6012 8.05H19.4406H19.4481H19.5179L19.4963 8.11345L6.03083 8.05073ZM6.03083 8.05073C5.56988 8.05099 5.20133 8.05088 4.91588 8.0508C4.80003 8.05076 4.69786 8.05073 4.60876 8.05073C4.45447 8.05073 4.3393 8.05082 4.2601 8.05115C4.18269 8.05146 4.13647 8.05197 4.12344 8.05313L4.07388 8.05755L4.07806 8.10713C4.10849 8.46858 4.32665 9.20114 4.70727 10.0927C5.0887 10.9861 5.6356 12.0445 6.32758 13.059C7.70916 15.0845 9.67994 16.95 12.0776 16.95C12.577 16.95 12.7748 16.8986 12.8498 16.8696L12.8857 16.8558L12.8815 16.8175C12.8809 16.8127 12.8802 16.807 12.879 16.802L12.879 16.8019C12.8789 16.8015 12.8785 16.8 12.8778 16.7978M6.03083 8.05073L12.8778 16.7978M12.8778 16.7978L12.8779 16.7973C12.8782 16.7331 12.8792 16.5296 12.8773 15.9348L12.8773 15.9345C12.8767 15.8698 12.8758 15.806 12.875 15.7432C12.8722 15.538 12.8695 15.3428 12.876 15.1607C12.8845 14.923 12.9086 14.7123 12.9665 14.5371C13.0241 14.3629 13.1146 14.2256 13.2554 14.1311C13.3968 14.0362 13.5945 13.9807 13.873 13.9807C14.4376 13.9807 15.0687 14.3534 16.0617 15.3013C16.4523 15.6878 16.7396 16.0042 16.9658 16.2535C17.0589 16.356 17.1417 16.4471 17.217 16.5271C17.3455 16.6634 17.4538 16.7687 17.5546 16.8397C17.6564 16.9114 17.7537 16.9507 17.8598 16.9507H17.8599C18.5744 16.9492 19.014 16.9503 19.2913 16.951C19.3511 16.9512 19.4034 16.9513 19.4492 16.9514C19.7052 16.9518 19.7641 16.9509 19.8206 16.9421L19.8731 16.9338L19.8617 16.8819C19.8204 16.695 19.6759 16.445 19.4817 16.172C19.2861 15.897 19.0351 15.5921 18.7737 15.2939C18.261 14.7088 17.7057 14.1465 17.4434 13.8809L17.4283 13.8656C17.4283 13.8656 17.4283 13.8656 17.4283 13.8656C17.2644 13.6989 17.1524 13.5803 17.11 13.5303C16.8782 13.2341 16.8145 12.9863 16.8337 12.7684C16.8533 12.548 16.9581 12.3508 17.0797 12.1559C17.0879 12.1434 17.0951 12.1326 17.1027 12.1226L17.1034 12.1217C17.3818 11.7398 17.9363 10.9349 18.4423 10.129C18.6954 9.7261 18.9366 9.32233 19.1254 8.9707C19.3127 8.6217 19.451 8.31904 19.4951 8.11888C19.4952 8.11834 19.4953 8.11781 19.4954 8.11727L12.8778 16.7978ZM17.8918 12.7539H17.9051C17.8939 12.7726 17.8829 12.7917 17.8738 12.8089L17.8602 12.8348L17.8761 12.8593C17.8979 12.8931 17.9556 12.9564 18.0347 13.039C18.1048 13.1124 18.1953 13.2047 18.3002 13.3117C18.3161 13.3279 18.3322 13.3444 18.3487 13.3612C18.6004 13.618 18.9258 13.9514 19.2592 14.317C19.5928 14.6827 19.9337 15.0798 20.2167 15.4639C20.5001 15.8486 20.7226 16.2167 20.8227 16.5248C20.9745 17.033 20.8351 17.3538 20.6977 17.5341C20.5552 17.7207 20.2662 17.95 19.6992 17.95H17.8598C17.3766 17.95 17.0593 17.7754 16.7068 17.4456C16.5352 17.285 16.3563 17.0886 16.146 16.8577L16.1244 16.834C15.9052 16.5933 15.6527 16.3173 15.3425 16.0101L15.3418 16.0095C14.5396 15.2444 14.1441 15.044 13.967 14.995L13.9074 14.9785L13.9038 15.0403C13.8918 15.2427 13.8947 15.573 13.8976 15.9145L13.8976 15.915C13.8717 15.9812 13.8652 16.0619 13.8663 16.1475C13.8672 16.2259 13.8747 16.3138 13.8824 16.4053C13.8837 16.4197 13.8849 16.4341 13.8861 16.4486C13.9042 16.6654 13.919 16.9024 13.8623 17.1237C13.8063 17.3422 13.6803 17.5463 13.4119 17.6973C13.1412 17.8497 12.7222 17.95 12.0776 17.95C9.2572 17.95 7.00084 15.8603 5.4455 13.5684C4.66879 12.4239 4.06936 11.2325 3.66421 10.2338C3.46164 9.73453 3.30784 9.28392 3.20476 8.91194C3.10135 8.53878 3.05 8.24827 3.05 8.06773C3.05 7.74534 3.15709 7.49312 3.34934 7.32096C3.5423 7.14814 3.82696 7.05073 4.19141 7.05073H6.03085C6.44671 7.05073 6.72326 7.17605 6.92056 7.36509C7.1196 7.55581 7.24235 7.81544 7.3418 8.09244C8.05782 10.1594 9.07137 11.7804 9.64584 12.3848L9.74066 12.4846L9.73198 12.3472C9.67851 11.5009 9.70308 10.9056 9.72205 10.4459C9.72889 10.2803 9.73499 10.1324 9.73647 9.99658C9.73924 9.74077 9.72548 9.52705 9.66674 9.32363C9.60779 9.11948 9.50446 8.92872 9.33222 8.71674L9.33218 8.71669C8.95582 8.25458 8.94783 7.83938 9.11113 7.54237C9.27662 7.24137 9.62383 7.05 9.98031 7.05H12.8714C13.1614 7.05 13.3677 7.11664 13.5156 7.22864C13.6636 7.34067 13.7587 7.50231 13.8186 7.70281C13.8786 7.90386 13.9023 8.1412 13.909 8.40058C13.9144 8.61185 13.9085 8.83522 13.9025 9.06344C13.9011 9.11543 13.8997 9.16767 13.8985 9.22007L13.8985 9.2201C13.885 9.79742 13.8678 10.575 13.8932 11.5934L13.8959 11.699L13.9759 11.63C14.3988 11.2654 14.888 10.5726 15.3194 9.85214C15.7515 9.13057 16.1292 8.37477 16.3281 7.87858C16.5563 7.34269 17.0049 7.05 17.6012 7.05H19.4406C19.8705 7.05 20.1793 7.1806 20.3718 7.43008C20.4987 7.59563 20.6264 7.89304 20.4877 8.36079L20.4873 8.3618L20.4872 8.3624L20.4856 8.36774L20.4856 8.36873C20.4208 8.62767 20.2608 8.98768 20.0474 9.39434C19.8344 9.80002 19.5701 10.2487 19.299 10.684C18.7567 11.5547 18.1888 12.3689 17.954 12.6733L17.8918 12.7539ZM16.0966 15.2654C15.104 14.3179 14.4597 13.9307 13.873 13.9307C12.8004 13.9307 12.8113 14.735 12.825 15.7447C12.8258 15.8074 12.8267 15.8708 12.8273 15.9349L16.0966 15.2654ZM19.7628 16.898C19.7632 16.8998 19.7636 16.9017 19.764 16.9034L19.8128 16.8927L19.8051 16.8433C19.8034 16.8435 19.8018 16.8438 19.8001 16.844C19.582 16.1176 17.9254 14.4402 17.4077 13.9159L17.3926 13.9007L19.7628 16.898Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
										<path d="M40.9669 14.8962L40.956 14.8921C40.7754 14.8238 40.5554 14.9185 40.431 15.0829C40.3699 15.1636 40.3359 15.2568 40.3407 15.3482C40.3455 15.4381 40.3882 15.5323 40.4918 15.6171L40.4962 15.6206L40.4962 15.6206L40.4994 15.6231L40.4995 15.6231L40.5034 15.6262C40.7343 15.8072 43.8418 18.2497 43.9109 18.3047L43.9112 18.305C44.0315 18.4023 44.0737 18.5213 44.0531 18.6393C44.0332 18.7534 43.9561 18.8581 43.8558 18.9368C43.6574 19.0924 43.3367 19.168 43.1028 18.9886L43.1019 18.988L43.102 18.988C42.4061 18.4311 41.3297 17.5824 40.5731 16.9859C40.519 16.9432 40.4665 16.9018 40.4159 16.862L40.4159 16.8619C40.1998 16.6913 39.843 16.6902 39.6263 16.8619L39.6263 16.8619L36.9496 18.9781L36.9491 18.9785L36.9491 18.9785C36.7121 19.1607 36.3909 19.0853 36.1923 18.9303C36.092 18.852 36.015 18.7479 35.9951 18.6348C35.9745 18.5178 36.0168 18.4004 36.1371 18.3059L40.9669 14.8962ZM40.9669 14.8962L40.9784 14.8951C41.6997 14.8276 42.9028 14.6561 43.757 14.2282L43.7574 14.228C44.0673 14.0696 44.2969 13.9433 44.4638 13.8384C44.6299 13.7339 44.7379 13.6483 44.8012 13.5702C44.8666 13.4894 44.8862 13.4139 44.8708 13.3356C44.857 13.2655 44.8152 13.1972 44.7731 13.1284L44.77 13.1233L44.77 13.1233L44.7692 13.122C44.6515 12.9421 44.4716 12.883 44.2786 12.8984C44.0883 12.9135 43.8818 13.0007 43.6955 13.1157L43.6952 13.1159C43.6445 13.1477 42.2456 14.0105 40.0139 14.0105C38.385 14.0105 37.3429 13.5912 36.6419 13.2687C36.5718 13.2365 36.5047 13.205 36.4406 13.1749C36.3448 13.13 36.2556 13.0882 36.1735 13.0518C36.036 12.9908 35.9132 12.9427 35.803 12.9175C35.6925 12.8922 35.5906 12.889 35.4972 12.9221C35.4031 12.9554 35.3239 13.0231 35.2547 13.1274L35.2547 13.1274L35.2539 13.1287L35.2523 13.1312C35.2096 13.2001 35.1671 13.2686 35.1535 13.3394C35.1386 13.4174 35.1589 13.4926 35.2247 13.5728C35.2884 13.6504 35.3966 13.7355 35.5627 13.8393C35.7297 13.9436 35.9589 14.069 36.2681 14.2262L36.2682 14.2262C36.9154 14.5534 37.8824 14.782 39.0695 14.8914L39.0775 14.8921L39.0854 14.8903C39.3109 14.8379 39.5216 14.949 39.6277 15.1116C39.6804 15.1924 39.7056 15.2836 39.6955 15.3711C39.6855 15.4576 39.6405 15.5449 39.5446 15.6191L39.5377 15.6244L39.5368 15.6259L36.1371 18.3058L40.9669 14.8962ZM43.0047 12.4575L43.0047 12.4575C44.1452 11.7522 45.295 12.0375 45.7628 12.7553C45.9897 13.1264 45.9969 13.4633 45.8563 13.7677C45.714 14.0758 45.4174 14.3563 45.0257 14.603C44.2428 15.096 43.1015 15.4405 42.1442 15.6017L42.0316 15.6207L42.1219 15.6906C42.4105 15.914 42.7321 16.1669 43.8843 17.0727C44.1208 17.2587 44.3924 17.4722 44.7058 17.7186C45.0806 18.0214 45.2071 18.3572 45.1726 18.6709C45.1379 18.9874 44.938 19.2918 44.639 19.5255C44.0402 19.9934 43.0673 20.16 42.3157 19.5797C41.7318 19.112 40.9227 18.4729 40.0544 17.7885L40.0234 17.7641L39.9925 17.7885L37.7365 19.5724C37.7364 19.5725 37.7363 19.5725 37.7362 19.5726C36.9747 20.1581 36.0007 19.9857 35.4046 19.5143C35.1068 19.2789 34.9092 18.9733 34.8767 18.6577C34.8445 18.3451 34.9736 18.0123 35.3505 17.7163L35.3506 17.7162L37.9206 15.6897L38.0097 15.6195L37.8978 15.6011C36.9957 15.4527 36.2472 15.2287 35.6638 14.9332C35.1845 14.69 34.6592 14.4225 34.3409 14.0753C34.1829 13.9029 34.0787 13.7137 34.0551 13.5008C34.0316 13.2881 34.0876 13.045 34.2627 12.7632L34.2624 12.763L34.2624 12.7628L34.2627 12.7631L34.2663 12.7575C34.7307 12.0347 35.8901 11.7513 37.0261 12.4575L37.028 12.4586C37.0277 12.4584 37.0491 12.4712 37.0851 12.4908C37.1218 12.5107 37.1753 12.5387 37.2447 12.572C37.3836 12.6386 37.5863 12.7266 37.8453 12.8143C38.3632 12.9897 39.1065 13.1641 40.0155 13.1641C41.8329 13.1641 42.9888 12.4674 43.0047 12.4575ZM40.5046 15.6276C40.5047 15.6277 40.5047 15.6277 40.5046 15.6276L40.5046 15.6276Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
										<path d="M37.6857 8.29775V8.29773C37.6857 7.01623 38.7226 5.97395 39.9962 5.97395C41.2705 5.97395 42.3073 7.01624 42.3073 8.29773C42.3073 9.5737 41.2707 10.6122 39.9962 10.6122C38.7217 10.6122 37.6851 9.5737 37.6857 8.29775ZM41.4077 8.29773C41.4077 7.51283 40.7746 6.87358 39.9962 6.87358C39.2171 6.87358 38.5847 7.51283 38.5847 8.29706C38.5847 9.0776 39.2181 9.71255 39.9962 9.71255C40.7743 9.71255 41.4077 9.07761 41.4077 8.29773Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
										<path d="M44.236 8.29706C44.236 10.6339 42.3338 12.5354 39.9963 12.5354C37.6581 12.5354 35.7565 10.6339 35.7565 8.29706C35.7565 5.95548 37.6588 4.05 39.9963 4.05C42.3337 4.05 44.2353 5.95547 44.236 8.29706ZM43.3364 8.29706C43.3364 6.45156 41.838 4.94963 39.9963 4.94963C38.1539 4.94963 36.6562 6.45157 36.6562 8.29706C36.6562 10.138 38.154 11.6358 39.9963 11.6358C41.8385 11.6358 43.3364 10.138 43.3364 8.29706Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
										<path d="M74.6918 11.69C74.6931 11.69 74.694 11.69 74.6952 11.69C74.7805 11.69 74.8618 11.6542 74.9195 11.5916C74.9782 11.528 75.0072 11.4427 74.9996 11.3565C74.6928 7.98148 72.0206 5.30845 68.6453 5.00098C68.5597 4.99426 68.4735 5.02207 68.4099 5.08106C68.3464 5.13974 68.3109 5.22257 68.3118 5.30906C68.365 9.79447 68.9567 11.6273 74.6918 11.69ZM74.6918 12.3098C68.9567 12.3724 68.3653 14.2053 68.3121 18.6907C68.3112 18.7772 68.3467 18.86 68.4103 18.9187C68.4671 18.971 68.5414 19 68.6178 19C68.6269 19 68.6364 18.9997 68.6456 18.9988C72.0209 18.6913 74.6931 16.0186 74.9996 12.6432C75.0072 12.557 74.9785 12.4718 74.9195 12.4082C74.8605 12.3446 74.7783 12.3132 74.6918 12.3098ZM67.3351 5.00251C63.9704 5.31884 61.3068 7.99126 61.0015 11.3571C60.9939 11.4433 61.0226 11.5286 61.0816 11.5922C61.1393 11.6548 61.2209 11.6903 61.3059 11.6903C61.3071 11.6903 61.3084 11.6903 61.3096 11.6903C67.0258 11.6246 67.6159 9.79263 67.6697 5.31028C67.6706 5.22379 67.6349 5.14066 67.5713 5.08198C67.5071 5.0233 67.4212 4.99457 67.3351 5.00251ZM61.3093 12.3095C61.2142 12.2988 61.1397 12.344 61.0813 12.4076C61.0226 12.4712 60.9936 12.5564 61.0012 12.6426C61.3065 16.0085 63.9704 18.6809 67.3351 18.9973C67.3445 18.9982 67.3543 18.9985 67.3638 18.9985C67.4402 18.9985 67.5141 18.9697 67.571 18.9175C67.6346 18.8588 67.6703 18.7757 67.6694 18.6892C67.6156 14.2071 67.0258 12.3752 61.3093 12.3095Z" fill="black" fill-opacity="0.7" />
									</svg>

								</p>
							</div>

							<div className="flex h-34px mb-3  bg-green-files items-center justify-between">
								<p className="font-montserrat font-medium text-11px text-white ml-4 ..7x01:ml-1 ..7x01:text-10px ">Файлов: 17</p>
								<div className="flex items-center">
									<button onClick={selectALl} className="..7x01:text-10px ..7x2:px-2 transition-all text-11px  bg-primary h-26px p-1.5 px-3 rounded-3xl flex items-center font-montserrat font-medium   text-white  ">
										<svg className=" mr-1 ..5x2:h-14px ..5x2:w-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C12.76 4 13.5 4.11 14.2 4.31L15.77 2.74C14.61 2.26 13.34 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12M7.91 10.08L6.5 11.5L11 16L21 6L19.59 4.58L11 13.17L7.91 10.08Z" fill="white" />
										</svg>
										Выделить все
									</button>
									<button onClick={downLoadCheked} className="flex ..7x01:text-10px transition-all  bg-primary mr-1 h-26px p-1.5 px-3 rounded-3xl items-center ..7x2:ml-0.5 ..7x2:px-2 ml-2 font-montserrat font-medium text-11px text-white">
										<svg className=" mr-1 ..5x2:h-14px ..5x2:w-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6.56023 10.8285C6.4317 10.9626 6.26436 11.0624 6.07022 11.1086C4.30906 11.5274 3 13.1122 3 15.0002C3 17.2094 4.79086 19.0002 7 19.0002C7.38062 19.0002 7.74717 18.9474 8.09352 18.8492C8.62487 18.6986 9.17772 19.0072 9.32834 19.5386C9.47897 20.0699 9.17033 20.6228 8.63898 20.7734C8.11683 20.9214 7.56678 21.0002 7 21.0002C3.68629 21.0002 1 18.3139 1 15.0002C1 12.3751 2.68503 10.1457 5.03157 9.33088C5.36842 5.77877 8.35971 3 12 3C15.6573 3 18.6596 5.80487 18.973 9.38085C21.2471 10.234 22.8662 12.427 22.8662 15.0002C22.8662 18.3139 20.1799 21.0002 16.8662 21.0002C16.2994 21.0002 15.7494 20.9214 15.2272 20.7734C14.6959 20.6228 14.3872 20.0699 14.5378 19.5386C14.6885 19.0072 15.2413 18.6986 15.7727 18.8492C16.119 18.9474 16.4856 19.0002 16.8662 19.0002C19.0753 19.0002 20.8662 17.2094 20.8662 15.0002C20.8662 13.1122 19.5572 11.5274 17.796 11.1086C17.3803 11.0098 17.0875 10.6647 17.0354 10.2647C17.0123 10.1804 17 10.0917 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 10.3447 6.8256 10.6487 6.56023 10.8285Z" fill="white" />
											<path d="M16.2758 14.2957C16.6648 14.6877 16.6623 15.3209 16.2703 15.7099L12.7043 19.2481C12.3129 19.6364 11.681 19.6347 11.2917 19.2441L7.82444 15.7654C7.43456 15.3743 7.43561 14.7411 7.82677 14.3512C8.21794 13.9613 8.85111 13.9624 9.24099 14.3536L11 16.1184V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V16.1372L14.8616 14.2901C15.2536 13.9011 15.8868 13.9036 16.2758 14.2957Z" fill="white" />
										</svg>
										Скачать
									</button>
								</div>
							</div>
							{currentFilterMobile.photo && <>
								<div className="flex items-center mb-2">
									<p className="pb-1 font-montserrat mr-3 font-medium text-13px text-primary border-b border-dashed border-primary">Все</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver">Без подписей</p>

								</div>
								<div className="flex mt-3 flex-wrap">
									{/* TODO: Итерироваться по новому массиву специально для мобильной версии, иначе изображения ломаются */}
									{materialsPhoto.map((photoSrc, i) => <DetailMaterialsPhone key={i} src={mobileFilter} deleteItem={deleteItem} setCurrent={setCurrent} selectedAll={selectedAll} />)}



								</div>
							</>}
							{currentFilterMobile.video && <>
								<div className="flex items-center mb-2">
									<p className="pb-1 font-montserrat mr-3 font-medium text-13px text-primary border-b border-dashed border-primary">Все</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver">Без подписей</p>

								</div>
								<div className="flex mt-3 flex-wrap">
									{/* TODO: Итерироваться по новому массиву специально для мобильной версии, иначе изображения ломаются */}
									{materialsVideo.map((photoSrc, i) => <DetailMaterialsPhoneV key={i} deleteItem={deleteItem} setCurrent={setCurrent} selectedAll={selectedAll} src={mobileFilter} />)}


								</div>
							</>}
							{currentFilterMobile.service && <>
								<div className="flex ">
									<div className="bg-gray-light mr-3 w-150px h-204px p-1">
										<div className="bg-white h-full w-full flex items-center  flex-col">
											<p className="font-montserrat font-medium text-13px text-center leading-140% mt-10 mb-0.5">Сертификат соответствия</p>
											<p className="font-montserrat font-medium leading-120% text-11px text-gray-quick-silver mb-6 text-center">Евразийский экономический союз</p>
											<div onClick={downloadFileService}>
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="16" cy="16" r="16" fill="#337202" />
													<path d="M16.7469 9.25C16.7469 8.83579 16.4111 8.5 15.9969 8.5C15.5827 8.5 15.2469 8.83579 15.2469 9.25V17.1862L13.1553 15.0947C12.8624 14.8018 12.3876 14.8018 12.0947 15.0947C11.8018 15.3876 11.8018 15.8624 12.0947 16.1553L15.4274 19.488C15.5649 19.6484 15.769 19.75 15.9969 19.75L15.9984 19.75C16.1909 19.7504 16.3835 19.6772 16.5303 19.5303L19.9053 16.1553C20.1982 15.8624 20.1982 15.3876 19.9053 15.0947C19.6124 14.8018 19.1376 14.8018 18.8447 15.0947L16.7469 17.1925V9.25Z" fill="white" />
													<path d="M22.75 15.25C23.1642 15.25 23.5 15.5858 23.5 16V22.75C23.5 23.1642 23.1642 23.5 22.75 23.5H9.25C8.83579 23.5 8.5 23.1642 8.5 22.75V16.0031C8.5 15.5889 8.83579 15.2531 9.25 15.2531C9.66421 15.2531 10 15.5889 10 16.0031V22H22V16C22 15.5858 22.3358 15.25 22.75 15.25Z" fill="white" />
												</svg>

											</div>
										</div>
									</div>
									<div className="bg-gray-light mr-3 w-150px h-204px p-1">
										<div className="bg-white h-full w-full flex items-center  flex-col">
											<p className="font-montserrat font-medium text-13px text-center leading-140% mt-10 mb-0.5">Сертификат соответствия</p>
											<p className="font-montserrat font-medium leading-120% text-11px text-gray-quick-silver mb-6 text-center">Евразийский экономический союз</p>
											<div onClick={downloadFileService}>
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="16" cy="16" r="16" fill="#337202" />
													<path d="M16.7469 9.25C16.7469 8.83579 16.4111 8.5 15.9969 8.5C15.5827 8.5 15.2469 8.83579 15.2469 9.25V17.1862L13.1553 15.0947C12.8624 14.8018 12.3876 14.8018 12.0947 15.0947C11.8018 15.3876 11.8018 15.8624 12.0947 16.1553L15.4274 19.488C15.5649 19.6484 15.769 19.75 15.9969 19.75L15.9984 19.75C16.1909 19.7504 16.3835 19.6772 16.5303 19.5303L19.9053 16.1553C20.1982 15.8624 20.1982 15.3876 19.9053 15.0947C19.6124 14.8018 19.1376 14.8018 18.8447 15.0947L16.7469 17.1925V9.25Z" fill="white" />
													<path d="M22.75 15.25C23.1642 15.25 23.5 15.5858 23.5 16V22.75C23.5 23.1642 23.1642 23.5 22.75 23.5H9.25C8.83579 23.5 8.5 23.1642 8.5 22.75V16.0031C8.5 15.5889 8.83579 15.2531 9.25 15.2531C9.66421 15.2531 10 15.5889 10 16.0031V22H22V16C22 15.5858 22.3358 15.25 22.75 15.25Z" fill="white" />
												</svg>

											</div>
										</div>
									</div>
								</div>
							</>}
							{currentFilterMobile.product && <>
								<div className="flex items-center mb-2">
									<p className="pb-1 font-montserrat mr-3 font-medium text-13px text-primary border-b border-dashed border-primary">Все</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver">Буклеты</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver ml-3">Ролл апы</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver ml-3">PDF.</p>
								</div>
								<div className="flex mt-3 flex-wrap">

									<DetailMaterialsPhoneP src={mobileFilter} deleteItem={deleteItem} setCurrent={setCurrent} selectedAll={selectedAll} />

								</div>
							</>}
							{currentFilterMobile.active && <>
								<div className=".5x1:w-1100px   ..5x2:w-full !ml-0 .4x2:w-910px w-1200 .2x1.0:w-800px .1x01:w-727px ..5x1:w-664px .1x1:ml-4 ..5x01:w-600px">
									<div className="p-3   border border-stroke">
										<div className="w-full flex ">
											<p className="font-montserrat font-medium text-xl ..5x2:text-13px">Статьи</p>
											<p className="font-montserrat font-medium text-xl text-gray-quick-silver ml-2 ..5x2:text-13px">3</p>
										</div>
										<Slider {...settings} className="pt-13px ..5x2:h-500px  ..6x2:h-460px ..6x4:h-400px ..6x04:h-auto  ..5x2:pt-1 mobSl  newsSlider   ">
											<div className=" relative pr-5px  ..5x2:!px-0 ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
												<NewsDate title={'ВЧЕРА'} />
												<div>
													<Image
														className="object-cover"
														width={474}
														height={330}
														src={oneNew}
														alt="newsImg"
													/>
												</div>
												<div className="  -mt-4 relative">
													<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
													</div>
													<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
														Возвращение легенды: косметический <br /> спонж для умывания
													</p>
													<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
														Возвращение легенды: косметический спонж для умывания
													</p>
													<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
														Все помнят тот самый косметический спонж, который под струей воды
														превращался из палочки в круглый диск Все помнят тот самый
														косметический спонж, который под струей воды превращался
													</p>
													<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
														Читать
														<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
													</button>
												</div>
											</div>
											<div className=" relative pr-5px ..5x2:!px-0 ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
												<NewsDate title={'ВЧЕРА'} />
												<div>
													<Image
														className="object-cover"
														width={474}
														height={330}
														src={oneNew}
														alt="newsImg"
													/>
												</div>
												<div className="  -mt-4 relative">
													<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
													</div>
													<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
														Возвращение легенды: косметический <br /> спонж для умывания
													</p>
													<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
														Возвращение легенды: косметический спонж для умывания
													</p>
													<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
														Все помнят тот самый косметический спонж, который под струей воды
														превращался из палочки в круглый диск Все помнят тот самый
														косметический спонж, который под струей воды превращался
													</p>
													<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
														Читать
														<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
													</button>
												</div>
											</div>
											<div className=" relative pr-5px ..5x2:!px-0 ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
												<NewsDate title={'ВЧЕРА'} />
												<div>
													<Image
														className="object-cover"
														width={474}
														height={330}
														src={oneNew}
														alt="newsImg"
													/>
												</div>
												<div className="  -mt-4 relative">
													<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
													</div>
													<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
														Возвращение легенды: косметический <br /> спонж для умывания
													</p>
													<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
														Возвращение легенды: косметический спонж для умывания
													</p>
													<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
														Все помнят тот самый косметический спонж, который под струей воды
														превращался из палочки в круглый диск Все помнят тот самый
														косметический спонж, который под струей воды превращался
													</p>
													<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
														Читать
														<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
													</button>
												</div>
											</div>
											<div className=" relative pr-5px ..5x2:!px-0 ..6x04:p-1.5 transition-all   newsCardHover cursor-pointer hover:scale-95">
												<NewsDate title={'ВЧЕРА'} />
												<div>
													<Image
														className="object-cover"
														width={474}
														height={330}
														src={oneNew}
														alt="newsImg"
													/>
												</div>
												<div className="  -mt-4 relative">
													<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
													</div>
													<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
														Возвращение легенды: косметический <br /> спонж для умывания
													</p>
													<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
														Возвращение легенды: косметический спонж для умывания
													</p>
													<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
														Все помнят тот самый косметический спонж, который под струей воды
														превращался из палочки в круглый диск Все помнят тот самый
														косметический спонж, который под струей воды превращался
													</p>
													<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
														Читать
														<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
													</button>
												</div>
											</div>
										</Slider>


									</div>
									<div className="p-3 mt-6   border border-stroke">
										<div className="w-full flex ">
											<p className="font-montserrat font-medium text-xl ..5x2:text-13px">Видео</p>
											<p className="font-montserrat font-medium text-xl text-gray-quick-silver ml-2 ..5x2:text-13px">1</p>
										</div>
										<div className="flex ..5x2:justify-center">
											<VideoMaterials src={i} logoItem={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 4.22639C6.09101 4.07753 6.40867 4.07753 6.6665 4.22639L15.4165 9.27823C15.6743 9.42709 15.8332 9.70219 15.8332 9.99991C15.8332 10.2976 15.6743 10.5727 15.4165 10.7216L6.66651 15.7734C6.40867 15.9223 6.09101 15.9223 5.83317 15.7734C5.57534 15.6246 5.4165 15.3495 5.4165 15.0517V4.94808C5.4165 4.65036 5.57534 4.37525 5.83317 4.22639ZM7.08317 6.39146V13.6084L13.3332 9.99991L7.08317 6.39146Z" fill="white" />
											</svg>} lengthTime={'00:20'} text={'Как скрыть следы усталости под глазами'} time={'19 часов назад'} />
											<VideoMaterials src={i} isHidden={true} logoItem={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 4.22639C6.09101 4.07753 6.40867 4.07753 6.6665 4.22639L15.4165 9.27823C15.6743 9.42709 15.8332 9.70219 15.8332 9.99991C15.8332 10.2976 15.6743 10.5727 15.4165 10.7216L6.66651 15.7734C6.40867 15.9223 6.09101 15.9223 5.83317 15.7734C5.57534 15.6246 5.4165 15.3495 5.4165 15.0517V4.94808C5.4165 4.65036 5.57534 4.37525 5.83317 4.22639ZM7.08317 6.39146V13.6084L13.3332 9.99991L7.08317 6.39146Z" fill="white" />
											</svg>} lengthTime={'01:56:00'} text={'Как правильно подготовить очищать кожу'} time={'2 дня назад'} />

										</div>





									</div>
								</div>
							</>}



						</div>

					</div>

				</div >


				<div className="w-1100px h-96   ..5x2:m-0 ..5x2:h-auto ..5x2:w-full  ml-8 p-8 .2x1.0:p-3 bg-gray-100">
					<p className="font-montserrat text-xl font-medium mb-6 ..6x3:mb-18px .5x01:text-sm .2x1.0:text-xs">Характеристики</p>
					<div className="flex justify-between items-center mb-26px ..6x3:mb-23px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px" >Артикул</p>
						<div className="border-b border-dotted w-full mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">20115</p>
					</div>
					<div className="..5x2:hidden flex justify-between items-center mb-26px ..6x3:mb-23px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Цвет</p>
						<div className="border-b border-dotted w-full mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">розовый</p>
					</div>
					<div className="..5x2:flex hidden justify-between items-center mb-26px ..6x3:mb-23px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Вес</p>
						<div className="border-b border-dotted w-full mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">18г.</p>
					</div>
					<div className="flex ..5x2:hidden justify-between items-center mb-26px ..6x3:mb-23px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Вес</p>
						<div className="border-b border-dotted w-full   mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm  .2x1.0:text-11px">18г.</p>
					</div>
					<div className=" ..5x2:flex hidden justify-between items-center mb-26px ..6x3:mb-23px">
						<p className="font-montserrat .5x01:text-sm whitespace-nowrap .2x1.0:text-11px">Физические свойства</p>
						<div className="border-b  border-dotted w-full   mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm whitespace-nowrap .2x1.0:text-11px">1 шт.</p>
					</div>
					<div className=" ..5x2:flex hidden justify-between items-center mb-26px ..6x3:mb-23px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Возраст</p>
						<div className="border-b border-dotted w-full  mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">любой</p>
					</div>
					<div className="flex ..5x2:hidden justify-between items-center mb-26px ..6x3:mb-23px">
						<p className="font-montserrat .5x01:text-sm w-44 whitespace-nowrap .2x1.0:text-11px">Вес упаковки</p>
						<div className="border-b border-dotted w-full mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">50г.</p>
					</div>
					<div className="flex ..5x2:hidden justify-between items-center mb-26px ..6x3:mb-23px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Объем</p>
						<div className="border-b border-dotted w-full  mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm whitespace-nowrap .2x1.0:text-11px">30 ml</p>
					</div>
					<div className="..5x2:flex hidden justify-between items-center  mb-26px ..6x3:mb-23px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Потребность</p>
						<div className="border-b    border-dotted w-full   mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat text-black-70pe whitespace-nowrap .5x01:text-11px">борьба с морщинами</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Серия</p>
						<div className="border-b   border-dotted w-full  mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat text-black-70pe whitespace-nowrap .5x01:text-11px">GOLLAGEN ACTIVE</p>
					</div>

				</div>
			</div >}
			{showDesc.activeComponents && <div className="mt-8 ..6x3:hidden pb-32">
				<div className="flex .2x1:flex-col">
					<div className="w-85 .2x1:!w-full">
						<p className="font-montserrat font-medium text-xl mb-6">Компоненты в составе маски</p>
						<p className="font-montserrat italic font-medium text-primary mb-2">Водоросли</p>
						<div className="flex mb-10px pb-3 border-b border-gray-light23">
							<p className="font-montserrat w-91 mr-6 font-light text-sm italic leading-180">Экстракт водорослей содержит большое количество питательных веществ, способствует эффективному увлажнению кожи, улучшает тонус и эластичность, смягчает</p>
							<div className="h-94px w-94px">
								<Image src={trava} />
							</div>

						</div>


						<p className="font-montserrat italic font-medium text-primary mb-2">Мушмула</p>
						<div className="flex mb-10px pb-3 border-b relative border-gray-light23">
							<p className="font-montserrat mr-110px mb-4 font-light text-sm italic leading-180">Экстракт мушмулы германской-источник большого количества витаминов, минералов и органический кислот. Питает кожу, ускоряет обновление клеток, улучшает микрорельеф кожи, разглаживая мелкие морщинки и неровности </p>
							<div className="h-94px w-94px absolute right-0 top-0">

								<Image src={active2} width='90px' height='90px' />
							</div>

						</div>
					</div>
					<div className={`ml-10 .2x1:ml-0 .2x1:mt-4  p-30px bg-gray-100 ${showComponents ? ' ' : ""}`}>
						<p className="font-montserrat leading-140% mb-6">Все компоненты подбираются по принципу синергии: в сочетании их действие усиливается.</p>
						<p className="font-montserrat text-11px uppercase mb-1">все компоненты этой категории</p>
						<div className={`flex flex-wrap ${showComponents ? 'w-423px' : ""}`}>
							<EffectsItemDetail title={'алоэ'} mb={true} />
							<EffectsItemDetail title={'арбутин'} mb={true} />
							<EffectsItemDetail title={'аскорбиновая кислота'} mb={true} />
							<EffectsItemDetail title={'АНА-кислоты'} mb={true} />
							<EffectsItemDetail title={'аллантоин'} mb={true} />
							<EffectsItemDetail title={'аморфофаллус-коньяк'} mb={true} />
							<EffectsItemDetail title={'боссвелия'} mb={true} />
							<EffectsItemDetail title={'белая глина'} mb={true} />
							<EffectsItemDetail title={'витамин E'} mb={true} />
							<EffectsItemDetail title={'водоросли'} mb={true} />
							<EffectsItemDetail title={'гиалуроновая кислота'} mb={true} />
							<EffectsItemDetail title={'гиалуронат натрия'} mb={true} />
							<EffectsItemDetail title={'гамамелис виргинский'} mb={true} />
							<EffectsItemDetail title={'диоксид титана'} mb={true} />
							<EffectsItemDetail title={'жемчуг'} mb={true} />
							<EffectsItemDetail title={'зеленый чай'} mb={true} />
							<EffectsItemDetail title={'зародыши пшеницы'} mb={true} />
							<EffectsItemDetail title={'камелия'} mb={true} />
							<EffectsItemDetail title={'коллаген'} mb={true} />
							<EffectsItemDetail title={'комплект BIOPHYTEX'} mb={true} />
							{showComponents && <>
								<EffectsItemDetail title={'еще компонент'} mb={true} />
								<EffectsItemDetail title={'еще компонент'} mb={true} />
								<EffectsItemDetail title={'еще компонент'} mb={true} />
								<EffectsItemDetail title={'еще компонент'} mb={true} />
								<EffectsItemDetail title={'еще компонент'} mb={true} />
								<EffectsItemDetail title={'еще компонент'} mb={true} />

							</>}

							<EffectsItemDetail showComp={showComp} showComponents={showComponents} title={showComponents ? 'свернуть' : 'ещё'} mb={true} arrow={true} />


						</div>
					</div>
				</div>
			</div>}
			{showDesc.materials && <div className=" pb-32">
				<div className="flex h-52px mb-5 bg-green-files items-center">
					<p className="font-montserrat font-medium text-xl text-white ml-4  mr-48">Файлов: 17</p>
					{!currentFilter.service && !currentFilter.active && <div className="flex items-center">
						<button onClick={selectALl} className="transition-all  hover:bg-primary p-1.5 px-3 rounded-3xl flex items-center font-montserrat font-medium text-13px text-white  ">
							<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C12.76 4 13.5 4.11 14.2 4.31L15.77 2.74C14.61 2.26 13.34 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12M7.91 10.08L6.5 11.5L11 16L21 6L19.59 4.58L11 13.17L7.91 10.08Z" fill="white" />
							</svg>
							Выделить все
						</button>
						<button onClick={downLoadCheked} className="flex transition-all hover:bg-primary p-1.5 px-3 rounded-3xl items-center ml-34px font-montserrat font-medium text-13px text-white">
							<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.56023 10.8285C6.4317 10.9626 6.26436 11.0624 6.07022 11.1086C4.30906 11.5274 3 13.1122 3 15.0002C3 17.2094 4.79086 19.0002 7 19.0002C7.38062 19.0002 7.74717 18.9474 8.09352 18.8492C8.62487 18.6986 9.17772 19.0072 9.32834 19.5386C9.47897 20.0699 9.17033 20.6228 8.63898 20.7734C8.11683 20.9214 7.56678 21.0002 7 21.0002C3.68629 21.0002 1 18.3139 1 15.0002C1 12.3751 2.68503 10.1457 5.03157 9.33088C5.36842 5.77877 8.35971 3 12 3C15.6573 3 18.6596 5.80487 18.973 9.38085C21.2471 10.234 22.8662 12.427 22.8662 15.0002C22.8662 18.3139 20.1799 21.0002 16.8662 21.0002C16.2994 21.0002 15.7494 20.9214 15.2272 20.7734C14.6959 20.6228 14.3872 20.0699 14.5378 19.5386C14.6885 19.0072 15.2413 18.6986 15.7727 18.8492C16.119 18.9474 16.4856 19.0002 16.8662 19.0002C19.0753 19.0002 20.8662 17.2094 20.8662 15.0002C20.8662 13.1122 19.5572 11.5274 17.796 11.1086C17.3803 11.0098 17.0875 10.6647 17.0354 10.2647C17.0123 10.1804 17 10.0917 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 10.3447 6.8256 10.6487 6.56023 10.8285Z" fill="white" />
								<path d="M16.2758 14.2957C16.6648 14.6877 16.6623 15.3209 16.2703 15.7099L12.7043 19.2481C12.3129 19.6364 11.681 19.6347 11.2917 19.2441L7.82444 15.7654C7.43456 15.3743 7.43561 14.7411 7.82677 14.3512C8.21794 13.9613 8.85111 13.9624 9.24099 14.3536L11 16.1184V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V16.1372L14.8616 14.2901C15.2536 13.9011 15.8868 13.9036 16.2758 14.2957Z" fill="white" />
							</svg>
							Скачать
						</button>
					</div>}

				</div>
				<div className="flex  ">
					<div className="mr-18px  ">
						<p onClick={() => setFilterItem('photo')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 hover:rounded cursor-pointer ${currentFilter.photo ? '!bg-gray-light2 rounded' : ""}`}><svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5C1.5 3.89543 2.39543 3 3.5 3H20.5C21.6046 3 22.5 3.89543 22.5 5V19C22.5 20.1046 21.6046 21 20.5 21H3.5C2.39543 21 1.5 20.1046 1.5 19V5ZM3.5 17.4142V19H20.5V17.4942L13.1438 11.8688L10.7593 14.6508C10.4084 15.0601 9.79627 15.1176 9.37531 14.7809L7.57422 13.34L3.5 17.4142ZM20.5 14.9764V5H3.5V14.5858L6.79289 11.2929C7.1532 10.9326 7.7268 10.9008 8.12469 11.2191L9.86985 12.6153L12.2407 9.84921C12.5861 9.44633 13.1859 9.38331 13.6075 9.70564L20.5 14.9764ZM7.25 8.5C7.38807 8.5 7.5 8.38807 7.5 8.25C7.5 8.11193 7.38807 8 7.25 8C7.11193 8 7 8.11193 7 8.25C7 8.38807 7.11193 8.5 7.25 8.5ZM5.5 8.25C5.5 7.2835 6.2835 6.5 7.25 6.5C8.2165 6.5 9 7.2835 9 8.25C9 9.2165 8.2165 10 7.25 10C6.2835 10 5.5 9.2165 5.5 8.25Z" fill="black" fill-opacity="0.7" />
						</svg>
							Фотографии
						</p>
						<p onClick={() => setFilterItem('video')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 hover:rounded cursor-pointer ${currentFilter.video ? '!bg-gray-light2 rounded' : ""}`}>
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02943 3 3 7.02943 3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3ZM9.5 7.66987C9.8094 7.49124 10.1906 7.49124 10.5 7.66987L16.5 11.134C16.8094 11.3126 17 11.6427 17 12C17 12.3573 16.8094 12.6874 16.5 12.866L10.5 16.3301C10.1906 16.5088 9.8094 16.5088 9.5 16.3301C9.1906 16.1515 9 15.8214 9 15.4641V8.5359C9 8.17863 9.1906 7.84851 9.5 7.66987ZM11 10.268V13.732L14 12L11 10.268Z" fill="black" fill-opacity="0.7" />
							</svg>
							Видео
						</p>
						<p onClick={() => setFilterItem('service')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 hover:rounded cursor-pointer ${currentFilter.service ? '!bg-gray-light2 rounded' : ""}`}>
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 2C22.018 2 22.87 2.76384 22.9916 3.82579L23 4V17C23 18.018 22.2362 18.87 21.1742 18.9916L21 19H18V21C18 21.7043 17.2979 22.1753 16.6586 21.9402L16.5528 21.8944L15 21.118L13.4472 21.8944C12.8173 22.2094 12.082 21.792 12.0064 21.1151L12 21V19H3C2.03562 19 1.22018 18.3145 1.03358 17.3393L1.00839 17.1742L1 17V4C1 2.98205 1.76385 2.13004 2.82579 2.00839L3 2H21ZM16 17.391L15.7664 17.4378C15.6053 17.465 15.438 17.4836 15.2646 17.4929L15.2198 17.4941C15.147 17.498 15.0737 17.5 15 17.5L14.8004 17.4951C14.7983 17.495 14.7963 17.4949 14.7943 17.4948C14.5133 17.4842 14.2487 17.4491 14.0002 17.393L14 19.381L14.5528 19.1056C14.8343 18.9648 15.1657 18.9648 15.4472 19.1056L16 19.382V17.391ZM3.05759 3.99834L3 4L2.99834 16.9424L3.00003 17L12 17L11.999 16.1447C11.3772 15.4397 11 14.5139 11 13.5C11 11.2909 12.7909 9.5 15 9.5C17.2091 9.5 19 11.2909 19 13.5C19 14.5139 18.6227 15.4397 18.001 16.1447L18 17L20.9424 17.0017L21 16.999L21.0017 4.05759L20.999 4L3.05759 3.99834ZM15 11.5C13.8954 11.5 13 12.3954 13 13.5C13 14.6046 13.8954 15.5 15 15.5L14.923 15.497L15 15.5C15.0267 15.5 15.0529 15.4997 15.0788 15.499C15.5643 15.48 16.0066 15.2874 16.3439 14.9812C16.3459 14.9773 16.3486 14.9749 16.3513 14.9726L16.3439 14.9812C16.7469 14.6154 17 14.0872 17 13.5C17 12.3954 16.1046 11.5 15 11.5ZM8 13C8.55228 13 9 13.4477 9 14C9 14.5128 8.61396 14.9355 8.11662 14.9933L8 15H6C5.44772 15 5 14.5523 5 14C5 13.4872 5.38604 13.0645 5.88338 13.0067L6 13H8ZM9 9.5C9.55229 9.5 10 9.94772 10 10.5C10 11.0128 9.61396 11.4355 9.11662 11.4933L9 11.5H6C5.44772 11.5 5 11.0523 5 10.5C5 9.98716 5.38604 9.56449 5.88338 9.50673L6 9.5H9ZM18 6C18.5523 6 19 6.44772 19 7C19 7.51284 18.614 7.93551 18.1166 7.99327L18 8H6C5.44772 8 5 7.55228 5 7C5 6.48716 5.38604 6.06449 5.88338 6.00673L6 6H18Z" fill="black" fill-opacity="0.7" />
							</svg>
							Сертификаты
						</p>
						<p onClick={() => setFilterItem('product')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 hover:rounded cursor-pointer ${currentFilter.product ? '!bg-gray-light2 rounded' : ""}`}>
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2V9H22C22.5523 9 23 9.44772 23 10V19C23 19.5523 22.5523 20 22 20H19.5V22C19.5 22.5523 19.0523 23 18.5 23H5.5C4.94772 23 4.5 22.5523 4.5 22V20H2C1.44772 20 1 19.5523 1 19V10C1 9.44772 1.44772 9 2 9H4V2ZM6 9H18V3H6V9ZM3 11V18H4.49025V16C4.49025 15.4477 4.93797 15 5.49025 15H18.5086C19.0609 15 19.5086 15.4477 19.5086 16V18H21V11H3ZM6.5 17V21H17.5V17H6.5Z" fill="black" fill-opacity="0.7" />
							</svg>
							Печатная продукция
						</p>
						<p onClick={() => setFilterItem('active')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 hover:rounded cursor-pointer ${currentFilter.active ? '!bg-gray-light2 rounded' : ""}`}>
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5002 5C14.5002 3.067 16.0672 1.5 18.0002 1.5C19.9332 1.5 21.5002 3.067 21.5002 5C21.5002 6.93298 19.9332 8.5 18.0002 8.5C16.0672 8.5 14.5002 6.93298 14.5002 5ZM18.0002 3.5C17.1718 3.5 16.5002 4.17158 16.5002 5C16.5002 5.82841 17.1718 6.5 18.0002 6.5C18.8286 6.5 19.5002 5.82841 19.5002 5C19.5002 4.17158 18.8286 3.5 18.0002 3.5ZM9.67453 6.05404C9.92294 5.96803 10.1952 5.98329 10.4325 6.09652L15.9309 8.72082C16.2471 8.87173 16.4613 9.17712 16.4954 9.52582C16.5296 9.87451 16.3787 10.2157 16.0978 10.425L11.7431 13.6712L16.05 16.5064C16.2805 16.6582 16.438 16.8984 16.4854 17.1702C16.5327 17.442 16.4656 17.7213 16.2999 17.942L12.8041 22.5993C12.4725 23.041 11.8457 23.1303 11.404 22.7988C10.9623 22.4672 10.873 21.8404 11.2046 21.3987L14.0619 17.5921L9.45188 14.5574C9.17951 14.3781 9.01167 14.0772 9.00215 13.7513C8.99263 13.4254 9.14263 13.1152 9.40407 12.9204L13.5739 9.81198L9.94124 8.07819L6.32737 9.32951C5.80549 9.51021 5.23592 9.23363 5.05522 8.71174C4.87452 8.18986 5.1511 7.6203 5.67298 7.43959L9.67453 6.05404ZM22.7289 8.04814C23.107 8.45063 23.0873 9.08349 22.6848 9.46167L19.6857 12.2797C19.3711 12.5752 18.9024 12.6356 18.5232 12.4294L17.1823 11.7002C16.6971 11.4363 16.5177 10.8291 16.7816 10.3439C17.0454 9.85877 17.6527 9.67935 18.1378 9.94321L18.8433 10.3269L21.3153 8.00413C21.7178 7.62595 22.3507 7.64565 22.7289 8.04814ZM9.02934 14.9762C9.46922 15.3102 9.55511 15.9375 9.22116 16.3774L7.73631 18.3333C7.65333 18.4426 7.54873 18.5336 7.42903 18.6008L2.49134 21.3704C2.00965 21.6405 1.40015 21.4691 1.12996 20.9874C0.859782 20.5057 1.03124 19.8962 1.51292 19.626L6.26915 16.9582L7.62819 15.168C7.96214 14.7282 8.58945 14.6423 9.02934 14.9762Z" fill="black" fill-opacity="0.7" />
							</svg>
							Активность

							<svg className="ml-3" width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1144 15.9545C19.7124 15.1448 19.1827 14.4051 18.5456 13.7639C18.3288 13.5119 18.0746 13.2632 17.8762 13.0691L17.8485 13.042C17.7461 12.9417 17.6615 12.8586 17.5924 12.787C18.4634 11.5757 19.209 10.2787 19.8173 8.91597L19.8418 8.86099L19.859 8.80328C19.9389 8.53506 20.031 8.02502 19.7053 7.56408C19.3686 7.08765 18.8295 7.00173 18.4685 7.00173H16.8076C16.4614 6.98586 16.1185 7.07946 15.8281 7.26977C15.5354 7.4615 15.3115 7.74118 15.1883 8.06811C14.8306 8.92009 14.3831 9.73047 13.8538 10.4857V8.53936C13.8538 8.28777 13.8301 7.86691 13.5607 7.51169C13.2382 7.08637 12.7717 7.00173 12.4479 7.00173H9.81256C9.47303 6.99388 9.14281 7.11528 8.88904 7.34191C8.62916 7.574 8.4699 7.89819 8.44502 8.24574L8.44267 8.27866V8.31167C8.44267 8.6705 8.58486 8.93519 8.69845 9.10165C8.74931 9.17618 8.80371 9.24402 8.83807 9.28687L8.84601 9.29676C8.88264 9.34245 8.9071 9.37295 8.93165 9.40633C8.99621 9.49416 9.08907 9.62956 9.11535 9.97995V11.0687C8.66102 10.3218 8.18174 9.32792 7.82112 8.26644L7.81559 8.25015L7.80945 8.23408C7.71954 7.99858 7.57532 7.65592 7.28648 7.3937C6.94905 7.08737 6.54993 7.00173 6.18697 7.00173H4.5018C4.1346 7.00173 3.69192 7.08764 3.36161 7.43608C3.03679 7.77873 3 8.1893 3 8.4076V8.506L3.02072 8.60219C3.48748 10.7686 4.44924 12.7975 5.83044 14.53C6.45664 15.5174 7.30516 16.3452 8.30848 16.9468C9.32781 17.558 10.4778 17.9183 11.6636 17.9979L11.6945 18H11.7256C12.262 18 12.8213 17.9537 13.2419 17.6735C13.8092 17.2954 13.8538 16.7147 13.8538 16.4254V15.5843C13.9994 15.702 14.18 15.8605 14.4012 16.0734C14.6685 16.341 14.8814 16.5728 15.064 16.7752L15.1614 16.8836L15.162 16.8841C15.3037 17.042 15.4433 17.1975 15.5703 17.3252C15.7301 17.4857 15.927 17.6627 16.1745 17.7933C16.4425 17.9349 16.7238 17.9989 17.0226 17.9989H18.709C19.0642 17.9989 19.5737 17.9149 19.932 17.4995C20.3224 17.0469 20.2926 16.4921 20.1698 16.0934L20.1477 16.0217L20.1144 15.9545ZM15.8871 16.0325C15.6973 15.8221 15.4684 15.5726 15.1791 15.2834L15.1768 15.2811C14.1744 14.3147 13.7061 14.1463 13.3749 14.1463C13.1988 14.1463 13.0039 14.1661 12.8774 14.3236C12.8177 14.398 12.7864 14.4877 12.7688 14.5812C12.7512 14.6745 12.7451 14.7841 12.7451 14.909V16.4254C12.7451 16.6137 12.7141 16.6928 12.6271 16.7509C12.511 16.8282 12.2631 16.8909 11.7318 16.8913C10.7233 16.8226 9.74554 16.5158 8.87861 15.9959C8.0099 15.4751 7.27737 14.7552 6.74135 13.8958L6.73551 13.8865L6.72861 13.8778C5.4416 12.2759 4.54479 10.3968 4.10891 8.38889C4.11127 8.29209 4.13224 8.23467 4.16622 8.19882C4.20123 8.16189 4.28607 8.11041 4.5018 8.11041H6.18697C6.37442 8.11041 6.47144 8.15119 6.54126 8.21458C6.62042 8.28644 6.68908 8.40848 6.77249 8.62638C7.18611 9.84296 7.74545 10.9807 8.27512 11.8172C8.53986 12.2354 8.80041 12.5834 9.03515 12.8293C9.15234 12.9522 9.26726 13.0539 9.37693 13.1262C9.48309 13.1962 9.60343 13.2514 9.72719 13.2514C9.7925 13.2514 9.86888 13.2447 9.94243 13.2121C10.0215 13.1771 10.083 13.1188 10.1263 13.0405C10.203 12.9021 10.224 12.6972 10.224 12.4286V9.94244L10.2237 9.93661C10.1854 9.33176 10.0027 8.99152 9.82492 8.74964C9.78595 8.69663 9.74752 8.64875 9.71389 8.60685L9.70468 8.59537C9.66776 8.54932 9.63838 8.51211 9.61424 8.47673C9.57 8.4119 9.55285 8.36671 9.55145 8.31827C9.55722 8.26078 9.58432 8.20744 9.62753 8.16884C9.67239 8.12878 9.73109 8.10792 9.79118 8.11041H12.4479C12.6002 8.11041 12.6515 8.14758 12.6773 8.18162C12.7138 8.22968 12.7451 8.32963 12.7451 8.53936V11.8866C12.7451 12.2841 12.9284 12.5533 13.1946 12.5533C13.5009 12.5533 13.7216 12.3675 14.1078 11.9814L14.1142 11.975L14.12 11.9679C14.9853 10.9126 15.6926 9.73696 16.219 8.47783L16.2223 8.46839C16.2619 8.35713 16.3368 8.26188 16.4356 8.19716C16.5344 8.13245 16.6516 8.10183 16.7694 8.10998L16.7759 8.11041H18.4685C18.6993 8.11041 18.7753 8.16917 18.7999 8.20391C18.826 8.24088 18.8441 8.3201 18.7998 8.47548C18.1929 9.83281 17.4424 11.1212 16.5614 12.319L16.5559 12.3275C16.4704 12.4583 16.3766 12.603 16.363 12.7692C16.3484 12.9476 16.4257 13.1098 16.5607 13.2837C16.6591 13.4292 16.8622 13.6279 17.0682 13.8296L17.0876 13.8486C17.3036 14.06 17.5375 14.2889 17.7253 14.5107L17.7304 14.5165L17.7358 14.522C18.2957 15.0805 18.7613 15.7261 19.1144 16.4336C19.1708 16.6262 19.1362 16.7246 19.0924 16.7754C19.0412 16.8348 18.9263 16.8902 18.709 16.8902H17.0226C16.8909 16.8902 16.7893 16.8643 16.6922 16.813C16.591 16.7595 16.4869 16.6745 16.3564 16.5433C16.2513 16.4376 16.1364 16.3098 15.9963 16.1539C15.9616 16.1152 15.9253 16.0747 15.8871 16.0325Z" fill="#949792" />
								<path d="M45.8051 12.7286C45.3191 11.9822 44.1364 11.6989 42.9784 12.415C42.9672 12.4219 41.8205 13.1141 40.0155 13.1141C38.2104 13.1141 37.0637 12.4213 37.0525 12.415C35.8994 11.6983 34.707 11.979 34.2243 12.7305C34.2226 12.7324 34.2218 12.7343 34.2202 12.7368C33.5026 13.892 34.6877 14.4939 35.6412 14.9778C36.2306 15.2763 36.9843 15.5015 37.8897 15.6504L35.3196 17.677C33.768 18.8953 36.1993 20.8177 37.767 19.612L40.0235 17.8278C40.8919 18.5123 41.701 19.1515 42.2848 19.619C43.8324 20.8146 46.2798 18.9256 44.737 17.6795C42.8966 16.2328 42.5005 15.9205 42.1525 15.6511C44.0738 15.3274 46.7465 14.2668 45.8051 12.7286ZM40.9737 14.8454C40.5583 14.6883 40.0066 15.2851 40.4605 15.6561L40.4653 15.6599C40.4661 15.6605 40.4677 15.6618 40.4685 15.6624C40.4701 15.6637 40.4709 15.6649 40.4725 15.6656C40.7035 15.8466 43.8108 18.289 43.8798 18.3439C44.3112 18.6928 43.551 19.2694 43.1332 18.9489C42.3874 18.3521 41.2047 17.4202 40.4469 16.8227C40.2127 16.6378 39.8302 16.6366 39.5953 16.8227L36.9186 18.9388C36.4944 19.265 35.7382 18.6827 36.168 18.3451L39.5712 15.6624C39.5728 15.6611 39.5744 15.6599 39.5752 15.6586C39.9978 15.3318 39.5712 14.7261 39.0741 14.8416C37.8897 14.7324 36.9298 14.5047 36.2907 14.1816C35.0558 13.5538 35.1176 13.4434 35.2964 13.1551C35.816 12.3721 36.7366 14.0605 40.0139 14.0605C42.2583 14.0605 43.6665 13.1929 43.7218 13.1582C44.0874 12.9324 44.5165 12.827 44.7273 13.1494C44.9062 13.4415 44.9727 13.5507 43.7346 14.1835C42.8894 14.6069 41.6946 14.7778 40.9737 14.8454Z" fill="#949792" />
								<path d="M39.9972 10.6616C41.2993 10.6616 42.3583 9.60063 42.3583 8.29712C42.3583 6.98827 41.2993 5.92334 39.9972 5.92334C38.6957 5.92334 37.6367 6.98827 37.6367 8.29712C37.6361 9.60063 38.695 10.6616 39.9972 10.6616ZM39.9972 6.92296C40.7476 6.92296 41.3587 7.5394 41.3587 8.29712C41.3587 9.0495 40.7476 9.66194 39.9972 9.66194C39.2468 9.66194 38.6357 9.0495 38.6357 8.29645C38.6357 7.5394 39.2461 6.92296 39.9972 6.92296Z" fill="#949792" />
								<path d="M39.9968 12.5855C42.3619 12.5855 44.2865 10.6615 44.2865 8.29706C44.2858 5.92794 42.3619 4 39.9968 4C37.6316 4 35.707 5.92794 35.707 8.29706C35.707 10.6615 37.631 12.5855 39.9968 12.5855ZM39.9968 4.99963C41.8107 4.99963 43.2869 6.47907 43.2869 8.29706C43.2869 10.1104 41.8114 11.5858 39.9968 11.5858C38.1821 11.5858 36.7067 10.1104 36.7067 8.29706C36.7067 6.47907 38.1821 4.99963 39.9968 4.99963Z" fill="#949792" />
								<path d="M74.6918 11.69C74.6931 11.69 74.694 11.69 74.6952 11.69C74.7805 11.69 74.8618 11.6542 74.9195 11.5916C74.9782 11.528 75.0072 11.4427 74.9996 11.3565C74.6928 7.98148 72.0206 5.30845 68.6453 5.00098C68.5597 4.99426 68.4735 5.02207 68.4099 5.08106C68.3464 5.13974 68.3109 5.22257 68.3118 5.30906C68.365 9.79447 68.9567 11.6273 74.6918 11.69ZM74.6918 12.3098C68.9567 12.3724 68.3653 14.2053 68.3121 18.6907C68.3112 18.7772 68.3467 18.86 68.4103 18.9187C68.4671 18.971 68.5414 19 68.6178 19C68.6269 19 68.6364 18.9997 68.6456 18.9988C72.0209 18.6913 74.6931 16.0186 74.9996 12.6432C75.0072 12.557 74.9785 12.4718 74.9195 12.4082C74.8605 12.3446 74.7783 12.3132 74.6918 12.3098ZM67.3351 5.00251C63.9704 5.31884 61.3068 7.99126 61.0015 11.3571C60.9939 11.4433 61.0226 11.5286 61.0816 11.5922C61.1393 11.6548 61.2209 11.6903 61.3059 11.6903C61.3071 11.6903 61.3084 11.6903 61.3096 11.6903C67.0258 11.6246 67.6159 9.79263 67.6697 5.31028C67.6706 5.22379 67.6349 5.14066 67.5713 5.08198C67.5071 5.0233 67.4212 4.99457 67.3351 5.00251ZM61.3093 12.3095C61.2142 12.2988 61.1397 12.344 61.0813 12.4076C61.0226 12.4712 60.9936 12.5564 61.0012 12.6426C61.3065 16.0085 63.9704 18.6809 67.3351 18.9973C67.3445 18.9982 67.3543 18.9985 67.3638 18.9985C67.4402 18.9985 67.5141 18.9697 67.571 18.9175C67.6346 18.8588 67.6703 18.7757 67.6694 18.6892C67.6156 14.2071 67.0258 12.3752 61.3093 12.3095Z" fill="#949792" />
							</svg>

						</p>
					</div>

					<div className="flex flex-wrap ">

						{currentFilter.photo && <>
							{materialsPhoto.map((photoSrc, i) => <MaterialsPhotoItem key={i} src={photoSrc} deleteItem={deleteItem} setCurrent={setCurrent} selectedAll={selectedAll} close={close} />
							)}

						</>}
						{currentFilter.video && <>
							<div className="w-full flex pb-3">
								<p className="font-montserrat font-medium  text-gray-quick-silver mr-4">Сортировка:</p>
								<p onClick={() => setFilterSortLocal('default')} className={`mr-3 font-montserrat pb-0.5 font-medium cursor-pointer hover:text-primary hover:border-b-primary   border-b  text-black-70pe  border-dotted ${filterSort.default ? '!text-primary !border-b-primary' : ""}`}>По умолчанию</p>
								<p onClick={() => setFilterSortLocal('notP')} className={`font-montserrat font-medium pb-0.5 cursor-pointer hover:text-primary hover:border-b-primary border-b border-gray-quick-silver border-dotted text-black-70pe ${filterSort.notP ? '!text-primary !border-b-primary' : ""}`}>Без подписей</p>
							</div>
							<div className="flex flex-wrap items-center">
								{materialsVideo.map((videoSrc, i) => <MaterialsVideoItem key={i} src={videoSrc} deleteItem={deleteItem} setCurrent={setCurrent} selectedAll={selectedAll} setVideo={setVideo} />
								)}

							</div>


						</>}
						{currentFilter.service && <>

							<div className="p-4 h-379px w-278px bg-gray-light  ">
								<div className="h-full p-4  flex items-center justify-center bgcard">
									<div className="flex cursor-pointer hoverCus items-center flex-col">
										<p className="font-montserrat text-22px font-medium leading-120% text-center">Сертификат соответствия</p>
										<p className="font-montserrat font-medium transition-all text-gray-quick-silver leading-120% mt-3 mb-11 text-center">Евразийский экономический союз</p>
										<button onClick={downloadFileService}>
											<svg className="hid" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g filter="url(#filter0_b_3037_526760)">
													<circle cx="22" cy="22" r="22" fill="white" fill-opacity="0.8" />
												</g>
												<path d="M14 32H30.4706V29.6471H14M30.4706 19.0588H25.7647V12H18.7059V19.0588H14L22.2353 27.2941L30.4706 19.0588Z" fill="black" />
												<defs>
													<filter id="filter0_b_3037_526760" x="-4" y="-4" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
														<feFlood flood-opacity="0" result="BackgroundImageFix" />
														<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
														<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3037_526760" />
														<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3037_526760" result="shape" />
													</filter>
												</defs>
											</svg>
											<svg className="hidden hov" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g filter="url(#filter0_b_2130_1356759)">
													<circle cx="22" cy="22" r="22" fill="#337202" />
												</g>
												<path d="M14 32H30.4706V29.6471H14M30.4706 19.0588H25.7647V12H18.7059V19.0588H14L22.2353 27.2941L30.4706 19.0588Z" fill="white" fill-opacity="0.8" />
												<defs>
													<filter id="filter0_b_2130_1356759" x="-4" y="-4" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
														<feFlood flood-opacity="0" result="BackgroundImageFix" />
														<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
														<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2130_1356759" />
														<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2130_1356759" result="shape" />
													</filter>
												</defs>
											</svg>

										</button>
									</div>
								</div>
							</div>
						</>}
						{currentFilter.product && <>
							<div className="w-full flex pb-3">
								<p className="font-montserrat font-medium  text-gray-quick-silver mr-4">Сортировка:</p>
								<p onClick={() => setFilterSortLocalPr('all')} className={`mr-3 font-montserrat pb-0.5 cursor-pointer font-medium  border-b border-gray-quick-silver text-black-70pe border-dotted ${filterSortProduct.all ? '!border-b-primary !text-primary ' : ""}`}>Все</p>
								<p onClick={() => setFilterSortLocalPr('bucl')} className={`font-montserrat font-medium pb-0.5 cursor-pointer border-b mr-3 border-gray-quick-silver border-dotted text-black-70pe ${filterSortProduct.bucl ? '!border-b-primary !text-primary ' : ""}`}>Буклеты</p>
								<p onClick={() => setFilterSortLocalPr('rolls')} className={`font-montserrat font-medium pb-0.5 cursor-pointer border-b mr-3 border-gray-quick-silver border-dotted text-black-70pe ${filterSortProduct.rolls ? '!border-b-primary !text-primary ' : ""}`}>Ролл апы</p>
								<p onClick={() => setFilterSortLocalPr('pdf')} className={`font-montserrat font-medium pb-0.5 cursor-pointer border-b border-gray-quick-silver border-dotted text-black-70pe ${filterSortProduct.pdf ? '!border-b-primary !text-primary ' : ""}`}>PDF</p>
							</div>
							<div className="flex flex-wrap items-center">
								{materialsProducts.map((productSrc, i) => <MaterialsTextProdItem key={i} src={productSrc} deleteItem={deleteItem} setCurrent={setCurrent} selectedAll={selectedAll} />)}


							</div>

						</>}
						{currentFilter.active && <>
							<div className=".5x1:w-1100px .4x2:w-910px w-1200 .2x1.0:w-800px .1x01:w-727px ..5x1:w-664px .1x1:ml-4 ..5x01:w-600px">
								<div className="p-3   border border-stroke">
									<div className="w-full flex ">
										<p className="font-montserrat font-medium text-xl">Статьи</p>
										<p className="font-montserrat font-medium text-xl text-gray-quick-silver ml-2">3</p>
									</div>
									<Slider {...settings} className="pt-13px ..6x6:pt-44 newsSlider ..7x001:px-3 ">
										<div className=" relative pr-5px  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
											<div>


											</div>
											<NewsDate title={'ВЧЕРА'} svg={<svg className="mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clip-path="url(#clip0_3337_743612)">
													<path d="M17.6038 8.6014C17.6054 8.6014 17.6065 8.6014 17.6081 8.6014C17.7177 8.6014 17.8223 8.55542 17.8965 8.47487C17.972 8.39313 18.0093 8.2835 17.9995 8.17269C17.605 3.83333 14.1694 0.396575 9.82965 0.00126633C9.71962 -0.0073786 9.60881 0.02838 9.52707 0.10422C9.44534 0.179666 9.39976 0.286156 9.40094 0.397361C9.46931 6.16431 10.2301 8.52084 17.6038 8.6014ZM17.6038 9.3983C10.2301 9.47886 9.4697 11.8354 9.40133 17.6023C9.40015 17.7135 9.44573 17.82 9.52747 17.8955C9.60056 17.9627 9.69604 18 9.79428 18C9.80607 18 9.81825 17.9996 9.83004 17.9984C14.1698 17.6031 17.6054 14.1668 17.9995 9.82701C18.0093 9.7162 17.9724 9.60656 17.8965 9.52483C17.8207 9.4431 17.715 9.40262 17.6038 9.3983ZM8.14506 0.00323113C3.81907 0.409936 0.394496 3.8459 0.00193826 8.17347C-0.00788552 8.28428 0.0290519 8.39392 0.104892 8.47565C0.179159 8.55621 0.284077 8.60179 0.393318 8.60179C0.394889 8.60179 0.396461 8.60179 0.398033 8.60179C7.7474 8.5173 8.50619 6.16195 8.57535 0.398933C8.57653 0.287728 8.53055 0.180845 8.44882 0.105398C8.3663 0.0299518 8.25588 -0.0069856 8.14506 0.00323113ZM0.39764 9.39791C0.275432 9.38415 0.179552 9.44231 0.104499 9.52404C0.029052 9.60578 -0.00827844 9.71541 0.00154534 9.82622C0.394104 14.1538 3.81907 17.5898 8.14506 17.9965C8.15725 17.9976 8.16982 17.998 8.182 17.998C8.28024 17.998 8.37533 17.9611 8.44842 17.8939C8.53016 17.8185 8.57613 17.7116 8.57495 17.6004C8.50579 11.8377 7.7474 9.48239 0.39764 9.39791Z" fill="black" />
												</g>
												<defs>
													<clipPath id="clip0_3337_743612">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>} />
											<div>
												<Image
													className="object-cover"
													width={474}
													height={330}
													src={oneNew}
													alt="newsImg"
												/>
											</div>
											<div className="  mt-4 relative">

												<p className="text-center titleNews leading-120% font-montserrat text-18px ..5x2:hidden    text-lg font-bold">
													Возвращение легенды: косметический <br /> спонж для умывания
												</p>
												<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
													Возвращение легенды: косметический спонж для умывания
												</p>
												<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text text-sm font-montserrat ..6x4:text-11px">
													Все помнят тот самый косметический спонж, который под струей воды
													превращался из палочки в круглый диск Все помнят тот самый
													косметический спонж, который под струей воды превращался
												</p>
												<button className="relative overflow-hidden px-1 ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
													Читать
													<div className="bg-primary lineHover absolute bottom-0.5 -left-1 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
												</button>
											</div>
										</div>
										<div className=" relative pr-5px  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
											<NewsDate title={'APR 30, 2022'} svg={<svg className="mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clip-path="url(#clip0_3337_745835)">
													<path d="M0 8.71875C0 4.60856 0 2.55375 1.27688 1.27688C2.55375 0 4.60856 0 8.71875 0H9.28125C13.3914 0 15.4462 0 16.7231 1.27688C18 2.55375 18 4.60856 18 8.71875V9.28125C18 13.3914 18 15.4462 16.7231 16.7231C15.4462 18 13.3914 18 9.28125 18H8.71875C4.60856 18 2.55375 18 1.27688 16.7231C0 15.4462 0 13.3914 0 9.28125V8.71875Z" fill="black" />
													<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8489 6.12C14.9344 5.83481 14.8489 5.625 14.4411 5.625H13.0933C12.7502 5.625 12.5927 5.80613 12.5072 6.00581C12.5072 6.00581 11.8215 7.67588 10.8506 8.76038C10.5368 9.07425 10.3939 9.17437 10.2229 9.17437C10.1368 9.17437 10.0131 9.07425 10.0131 8.78906V6.12C10.0131 5.77744 9.9135 5.625 9.62775 5.625H7.50994C7.29619 5.625 7.16681 5.78419 7.16681 5.93438C7.16681 6.2595 7.65281 6.33375 7.70288 7.24725V9.23119C7.70288 9.666 7.62413 9.74475 7.45256 9.74475C6.99581 9.74475 5.88431 8.06794 5.22506 6.14869C5.09625 5.77575 4.96688 5.625 4.62263 5.625H3.27431C2.88956 5.625 2.8125 5.80613 2.8125 6.00581C2.8125 6.363 3.26925 8.13206 4.93987 10.4726C6.05362 12.0712 7.623 12.9375 9.05062 12.9375C9.90675 12.9375 10.0125 12.7451 10.0125 12.4138V11.205C10.0125 10.8203 10.0941 10.7438 10.3652 10.7438C10.5654 10.7438 10.908 10.8433 11.7073 11.6139C12.6214 12.528 12.7721 12.9375 13.2863 12.9375H14.634C15.0193 12.9375 15.2117 12.7451 15.1009 12.3654C14.9794 11.9869 14.5429 11.4373 13.9641 10.7865C13.6496 10.4153 13.1788 10.0159 13.0359 9.81619C12.8362 9.55969 12.8931 9.44494 13.0359 9.21712C13.0359 9.21712 14.6779 6.90525 14.8494 6.12H14.8489Z" fill="white" />
												</g>
												<defs>
													<clipPath id="clip0_3337_745835">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											} />
											<div>
												<Image
													className="object-cover"

													src={imgMaterTwo}
													alt="newsImg"
												/>
											</div>
											<div className="  mt-4 relative">

												<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
													Возвращение легенды: косметический <br /> спонж для умывания
												</p>
												<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
													Возвращение легенды: косметический спонж для умывания
												</p>
												<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5  text-sm news_text font-montserrat ..6x4:text-11px">
													Все помнят тот самый косметический спонж, который под струей воды
													превращался из палочки в круглый диск Все помнят тот самый
													косметический спонж, который под струей воды превращался
												</p>
												<button className="relative overflow-hidden px-1 ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
													Читать
													<div className="bg-primary lineHover absolute bottom-0.5 -left-1 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
												</button>
											</div>
										</div>
										<div className=" relative pr-5px  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
											<NewsDate title={'APR 30, 2022'} svg={<svg className="mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clip-path="url(#clip0_3337_743612)">
													<path d="M17.6038 8.6014C17.6054 8.6014 17.6065 8.6014 17.6081 8.6014C17.7177 8.6014 17.8223 8.55542 17.8965 8.47487C17.972 8.39313 18.0093 8.2835 17.9995 8.17269C17.605 3.83333 14.1694 0.396575 9.82965 0.00126633C9.71962 -0.0073786 9.60881 0.02838 9.52707 0.10422C9.44534 0.179666 9.39976 0.286156 9.40094 0.397361C9.46931 6.16431 10.2301 8.52084 17.6038 8.6014ZM17.6038 9.3983C10.2301 9.47886 9.4697 11.8354 9.40133 17.6023C9.40015 17.7135 9.44573 17.82 9.52747 17.8955C9.60056 17.9627 9.69604 18 9.79428 18C9.80607 18 9.81825 17.9996 9.83004 17.9984C14.1698 17.6031 17.6054 14.1668 17.9995 9.82701C18.0093 9.7162 17.9724 9.60656 17.8965 9.52483C17.8207 9.4431 17.715 9.40262 17.6038 9.3983ZM8.14506 0.00323113C3.81907 0.409936 0.394496 3.8459 0.00193826 8.17347C-0.00788552 8.28428 0.0290519 8.39392 0.104892 8.47565C0.179159 8.55621 0.284077 8.60179 0.393318 8.60179C0.394889 8.60179 0.396461 8.60179 0.398033 8.60179C7.7474 8.5173 8.50619 6.16195 8.57535 0.398933C8.57653 0.287728 8.53055 0.180845 8.44882 0.105398C8.3663 0.0299518 8.25588 -0.0069856 8.14506 0.00323113ZM0.39764 9.39791C0.275432 9.38415 0.179552 9.44231 0.104499 9.52404C0.029052 9.60578 -0.00827844 9.71541 0.00154534 9.82622C0.394104 14.1538 3.81907 17.5898 8.14506 17.9965C8.15725 17.9976 8.16982 17.998 8.182 17.998C8.28024 17.998 8.37533 17.9611 8.44842 17.8939C8.53016 17.8185 8.57613 17.7116 8.57495 17.6004C8.50579 11.8377 7.7474 9.48239 0.39764 9.39791Z" fill="black" />
												</g>
												<defs>
													<clipPath id="clip0_3337_743612">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>} />
											<div>
												<Image
													className="object-cover"
													width={474}
													height={330}
													src={imgMaterTree}
													alt="newsImg"
												/>
											</div>
											<div className="  mt-4 relative">

												<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
													Возвращение легенды: косметический <br /> спонж для умывания
												</p>
												<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
													Возвращение легенды: косметический спонж для умывания
												</p>
												<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5  text-sm news_text font-montserrat ..6x4:text-11px">
													Все помнят тот самый косметический спонж, который под струей воды
													превращался из палочки в круглый диск Все помнят тот самый
													косметический спонж, который под струей воды превращался
												</p>
												<button className="relative overflow-hidden px-1 ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
													Читать
													<div className="bg-primary lineHover absolute bottom-0.5 -left-1 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
												</button>
											</div>
										</div>
										<div className=" relative pr-5px  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
											<div>


											</div>
											<NewsDate title={'ВЧЕРА'} svg={<svg className="mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clip-path="url(#clip0_3337_743612)">
													<path d="M17.6038 8.6014C17.6054 8.6014 17.6065 8.6014 17.6081 8.6014C17.7177 8.6014 17.8223 8.55542 17.8965 8.47487C17.972 8.39313 18.0093 8.2835 17.9995 8.17269C17.605 3.83333 14.1694 0.396575 9.82965 0.00126633C9.71962 -0.0073786 9.60881 0.02838 9.52707 0.10422C9.44534 0.179666 9.39976 0.286156 9.40094 0.397361C9.46931 6.16431 10.2301 8.52084 17.6038 8.6014ZM17.6038 9.3983C10.2301 9.47886 9.4697 11.8354 9.40133 17.6023C9.40015 17.7135 9.44573 17.82 9.52747 17.8955C9.60056 17.9627 9.69604 18 9.79428 18C9.80607 18 9.81825 17.9996 9.83004 17.9984C14.1698 17.6031 17.6054 14.1668 17.9995 9.82701C18.0093 9.7162 17.9724 9.60656 17.8965 9.52483C17.8207 9.4431 17.715 9.40262 17.6038 9.3983ZM8.14506 0.00323113C3.81907 0.409936 0.394496 3.8459 0.00193826 8.17347C-0.00788552 8.28428 0.0290519 8.39392 0.104892 8.47565C0.179159 8.55621 0.284077 8.60179 0.393318 8.60179C0.394889 8.60179 0.396461 8.60179 0.398033 8.60179C7.7474 8.5173 8.50619 6.16195 8.57535 0.398933C8.57653 0.287728 8.53055 0.180845 8.44882 0.105398C8.3663 0.0299518 8.25588 -0.0069856 8.14506 0.00323113ZM0.39764 9.39791C0.275432 9.38415 0.179552 9.44231 0.104499 9.52404C0.029052 9.60578 -0.00827844 9.71541 0.00154534 9.82622C0.394104 14.1538 3.81907 17.5898 8.14506 17.9965C8.15725 17.9976 8.16982 17.998 8.182 17.998C8.28024 17.998 8.37533 17.9611 8.44842 17.8939C8.53016 17.8185 8.57613 17.7116 8.57495 17.6004C8.50579 11.8377 7.7474 9.48239 0.39764 9.39791Z" fill="black" />
												</g>
												<defs>
													<clipPath id="clip0_3337_743612">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>} />
											<div>
												<Image
													className="object-cover"
													width={474}
													height={330}
													src={oneNew}
													alt="newsImg"
												/>
											</div>
											<div className="  mt-4 relative">

												<p className="text-center titleNews leading-120% font-montserrat text-18px ..5x2:hidden    text-lg font-bold">
													Возвращение легенды: косметический <br /> спонж для умывания
												</p>
												<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
													Возвращение легенды: косметический спонж для умывания
												</p>
												<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text text-sm font-montserrat ..6x4:text-11px">
													Все помнят тот самый косметический спонж, который под струей воды
													превращался из палочки в круглый диск Все помнят тот самый
													косметический спонж, который под струей воды превращался
												</p>
												<button className="relative overflow-hidden px-1 ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
													Читать
													<div className="bg-primary lineHover absolute bottom-0.5 -left-1 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
												</button>
											</div>
										</div>
									</Slider>


								</div>
								<div className="p-3 mt-6   border border-stroke">
									<div className="w-full flex ">
										<p className="font-montserrat font-medium text-xl">Видео</p>
										<p className="font-montserrat font-medium text-xl text-gray-quick-silver ml-2">1</p>
									</div>
									<div className="flex ">

										<VideoMaterials src={i} logoItem={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 4.22639C6.09101 4.07753 6.40867 4.07753 6.6665 4.22639L15.4165 9.27823C15.6743 9.42709 15.8332 9.70219 15.8332 9.99991C15.8332 10.2976 15.6743 10.5727 15.4165 10.7216L6.66651 15.7734C6.40867 15.9223 6.09101 15.9223 5.83317 15.7734C5.57534 15.6246 5.4165 15.3495 5.4165 15.0517V4.94808C5.4165 4.65036 5.57534 4.37525 5.83317 4.22639ZM7.08317 6.39146V13.6084L13.3332 9.99991L7.08317 6.39146Z" fill="white" />
										</svg>} lengthTime={'00:20'} isDesc={true} text={'Как скрыть следы усталости под глазами'} time={'19 часов назад'} />
										<VideoMaterials src={i} logoItem={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 4.22639C6.09101 4.07753 6.40867 4.07753 6.6665 4.22639L15.4165 9.27823C15.6743 9.42709 15.8332 9.70219 15.8332 9.99991C15.8332 10.2976 15.6743 10.5727 15.4165 10.7216L6.66651 15.7734C6.40867 15.9223 6.09101 15.9223 5.83317 15.7734C5.57534 15.6246 5.4165 15.3495 5.4165 15.0517V4.94808C5.4165 4.65036 5.57534 4.37525 5.83317 4.22639ZM7.08317 6.39146V13.6084L13.3332 9.99991L7.08317 6.39146Z" fill="white" />
										</svg>} lengthTime={'01:56:00'} isDesc={true} text={'Как правильно подготовить очищать кожу'} time={'2 дня назад'} />

									</div>





								</div>
							</div>

						</>}


					</div>
				</div>
			</div>}

		</>

	)
}
export default DetailDescription