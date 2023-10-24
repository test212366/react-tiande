import { useRef } from "react";
import oneTon from '../../images/templates/ton1.jpg'
import twoTon from '../../images/templates/ton2.jpg'
import treeTon from '../../images/templates/ton3.jpg'
import fourTon from '../../images/templates/ton4.jpg'
import fiveTon from '../../images/templates/ton5.jpg'
import sixTon from '../../images/templates/ton6.jpg'
import sevenTon from '../../images/templates/ton7.jpg'
import eightTon from '../../images/templates/ton8.jpg'
import nineTon from '../../images/templates/ton9.jpg'
import tenTon from '../../images/templates/ton10.png'
import one from '../../images/templates/DetailCardOne.jpg'
import oneMini from '../../images/templates/miniOne.jpg'
import oneDetaul from '../../images/templates/oneDetaul.jpg'
import twoDetaul from '../../images/templates/twoDet.jpg'
import yandex from '../../images/templates/yandex.jpg';
import ozon from '../../images/templates/ozon.png';
import pochtaRF from '../../images/templates/pochta_rf.png';
import cdek from '../../images/templates/cdek.jpg';
import berry from '../../images/templates/berry.png';
import oneSmall from '../../images/templates/DetaillCardSmallOne.jpg'
import twoSmall from '../../images/templates/DetailCardSmallTwo.jpg'
import treeSmall from '../../images/templates/productToDayDet.png'
import { Swiper, SwiperSlide } from "swiper/react";
import wom from '../../images/templates/monMini.png'
import Image from "next/image";
import { Navigation } from "swiper";
import { useState } from "react";
import EffectsItemDetail from "../EffectsItemDetail/EffectsItemDetail";
import SectionImgs from "../InstrumentItem/SectionImgs";
import Link from "next/link";
import MiniPhotoDots from "../MiniPhotoDots/MiniPhotoDots";
import Ton from "../Ton/Ton";
const DescriptionItemDetail = ({ description, close, isShow, setShowIn }) => {
	const [buttonHover, setButtonHover] = useState(false),
		[buttonHoverNext, setButtonHoverNext] = useState(false),
		[currentLenghtProduct, setCurrentLenghtProduct] = useState(1),
		[hoverHeart, setHoverHeart] = useState(false),
		[isLike, setLike] = useState(false),
		[clickDe, setClickDe] = useState(false),
		[clickBasket, setClickBasket] = useState(false),
		[likeMobile, setLikeMobile] = useState(false),
		[hoverCopy, setHoverCopy] = useState(false),
		[allSlides, setAllSlides] = useState(0),
		[snap, setSnap] = useState(0),
		[currentTon, setCurrentTon] = useState(6),
		[value, setValue] = useState('УСПЕХ')


	const inputChange = (e) => setValue(e.target.value)


	const setCurrentTonF = (ton) => setCurrentTon(ton)


	const setAllSl = (length) => setAllSlides(length),
		setCurrentSnap = (len) => setSnap(len)

	const setHov = () => setHoverCopy(!hoverCopy)

	const setLikeMob = () => setLikeMobile(!likeMobile)

	const setDe = () => setClickDe(!clickDe),
		setBasket = () => {
			setShowIn()
			setClickBasket(!clickBasket)
		}





	const [showCopy, setShowCopy] = useState(false),
		copy = () => {
			navigator.clipboard.writeText('30115/01')
				.then(() => {
					setShowCopy(true)
					setTimeout(() => {
						setShowCopy(false)
					}, 1500)
				})
				.catch(err => {
					console.log('error copy text', err);
				})
		}

	const hoverSet = () => setButtonHover(!buttonHover),
		hoverNext = () => setButtonHoverNext(!buttonHoverNext)


	const increment = () => setCurrentLenghtProduct(currentLenghtProduct + 1),
		decrement = () => {
			if (currentLenghtProduct > 0) setCurrentLenghtProduct(currentLenghtProduct - 1)

		},
		[dropDownds, setDropDowns] = useState({
			sale: false,
			free: false,
			loal: false,
			promo: false
		})


	const setFilter = (filt, e) => {

		if (e.target.id === 'click') {
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

	}


	const slider = useRef(null)
	const nextSlide = () => {
		if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slideNext();
	},
		prevSlide = () => {
			if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slidePrev();
		},
		scrollDescription = () => {
			setDropDowns({
				sale: false,
				free: false,
				loal: false,
				promo: false
			})
			window.scrollTo({ top: 1500 })
		},
		scrollDescriptionPhone = () => {
			setDropDowns({
				sale: false,
				free: false,
				loal: false,
				promo: false
			})
			window.scrollTo({ top: 1500 })

		}

	const sliderPhotos = [
		twoDetaul,
		wom,
		oneDetaul,
		oneDetaul,

	]

	const tons = [
		{ src: oneTon },
		{ src: twoTon },
		{ src: treeTon },
		{ src: fourTon },
		{ src: fiveTon },
		{ src: sixTon },
		{ src: sevenTon, isNone: true },
		{ src: eightTon, isNone: true },
		{ src: nineTon },
		{ src: tenTon },
	]



	return (
		<section className="px-80px ..5x2:px-0  pb-110px ..5x2:pb-8">
			<div className="border-b pb-3 px-3  ..6x2:border-white border-stroke  ">
				<p className="font-montserrat text-32px font-medium mb-3 ..5x2:mb-1 ..5x2:mt-6px .3x1:text-2xl ..6x5:text-base mt-10px">Крем-маска ночная с мушмулой</p>
				<div className="flex">
					<div className="flex items-center ..6x2:hidden">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.9053 7.28033C13.1982 6.98744 13.1982 6.51256 12.9053 6.21967C12.6124 5.92678 12.1376 5.92678 11.8447 6.21967L7.875 10.1893L6.15533 8.46967C5.86244 8.17678 5.38756 8.17678 5.09467 8.46967C4.80178 8.76256 4.80178 9.23744 5.09467 9.53033L7.34467 11.7803C7.63756 12.0732 8.11244 12.0732 8.40533 11.7803L12.9053 7.28033Z" fill="#337202" />
							<path fillRule="evenodd" clipRule="evenodd" d="M2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25V15.75C1.5 16.1642 1.83579 16.5 2.25 16.5H15.75C16.1642 16.5 16.5 16.1642 16.5 15.75V2.25C16.5 1.83579 16.1642 1.5 15.75 1.5H11.25C10.9478 1.5 10.6752 1.68134 10.5583 1.96002C10.3429 2.47381 10.0971 2.79896 9.85028 2.99389C9.61461 3.17999 9.34212 3.27667 9 3.27667C8.65788 3.27667 8.38539 3.17999 8.14972 2.99389C7.90286 2.79896 7.65707 2.47381 7.44167 1.96002C7.32484 1.68134 7.05218 1.5 6.75 1.5H2.25ZM3 15V3H6.27596C6.5264 3.46945 6.83681 3.86843 7.22014 4.17112C7.73447 4.57725 8.33869 4.77667 9 4.77667C9.66131 4.77667 10.2655 4.57725 10.7799 4.17112C11.1632 3.86843 11.4736 3.46945 11.724 3H15V15H3Z" fill="#337202" />
						</svg>

						<p className="ml-5px mr-6 font-montserrat font-medium text-13px text-gray-quick-silver">Вы покупали 15 мая 2022</p>
					</div>
					<div className="flex cursor-pointer items-center">
						<svg className="..6x2:h-14px ..6x2:w-14px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_2812_682738)">
								<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
							</g>
							<defs>
								<clipPath id="clip0_2812_682738">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<svg className="..6x2:h-14px ..6x2:w-14px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_2812_682738)">
								<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
							</g>
							<defs>
								<clipPath id="clip0_2812_682738">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<svg className="..6x2:h-14px ..6x2:w-14px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_2812_682738)">
								<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
							</g>
							<defs>
								<clipPath id="clip0_2812_682738">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<svg className="..6x2:h-14px ..6x2:w-14px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_2812_682738)">
								<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
							</g>
							<defs>
								<clipPath id="clip0_2812_682738">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<svg className="..6x2:h-14px ..6x2:w-14px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
						</svg>

						<p className="ml-5px ..7x2:ml-0 ..7x59:mr-1 ..7x2:text-10px ..7x01:text-11px ..7x59:ml-0.5 mr-6 ..6x2:mr-3 font-montserrat font-medium text-13px ..6x2:text-xs border-b border-white hover:border-primary   text-primary">5 отзывов</p>
					</div>
					<div className="flex items-center cursor-pointer">
						<svg className="..6x2:h-14px ..6x2:w-14px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5564 0.75 17.25 4.44365 17.25 9C17.25 13.5564 13.5564 17.25 9 17.25C4.44365 17.25 0.75 13.5564 0.75 9ZM9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM7.125 5.75241C7.35705 5.61843 7.64295 5.61843 7.875 5.75241L12.375 8.35048C12.607 8.48446 12.75 8.73205 12.75 9C12.75 9.26795 12.607 9.51554 12.375 9.64952L7.875 12.2476C7.64295 12.3816 7.35705 12.3816 7.125 12.2476C6.89295 12.1136 6.75 11.866 6.75 11.5981V6.40193C6.75 6.13398 6.89295 5.88638 7.125 5.75241ZM8.25 7.70096V10.299L10.5 9L8.25 7.70096Z" fill="#337202" />
						</svg>

						<p className="font-montserrat ..7x2:ml-0.5 ..7x2:text-10px hover:text-primary  border-b border-white hover:border-primary ..7x01:text-11px ml-5px mr-6 ..7x59:mr-1 ..7x59:ml-0.5 ..6x2:mr-14px text-13px ..6x2:text-xs text-gray-quick-silver transition-all hover:font-medium">2 видео</p>
					</div>
					<div className="flex items-center cursor-pointer">
						<svg className="..6x2:h-14px ..6x2:w-14px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_2812_682758)">
								<path d="M10.7143 9.42857V7.71429L9 8.57143L7.28571 7.71429V9.42857L5.57143 10.2857L7.28571 11.1429V12.8571L9 12L10.7143 12.8571V11.1429L12.4286 10.2857L10.7143 9.42857ZM10.7143 0H4.71429C4.25963 0 3.82359 0.180612 3.5021 0.502103C3.18061 0.823594 3 1.25963 3 1.71429V13.7143C3 14.1689 3.18061 14.605 3.5021 14.9265C3.82359 15.248 4.25963 15.4286 4.71429 15.4286H5.57143V13.7143H4.71429V1.71429H9.85714V5.14286H13.2857V13.7143H12.4286V15.4286H13.2857C13.7404 15.4286 14.1764 15.248 14.4979 14.9265C14.8194 14.605 15 14.1689 15 13.7143V4.28571L10.7143 0ZM10.7143 9.42857V7.71429L9 8.57143L7.28571 7.71429V9.42857L5.57143 10.2857L7.28571 11.1429V12.8571L9 12L10.7143 12.8571V11.1429L12.4286 10.2857L10.7143 9.42857ZM7.28571 18L9 17.1429L10.7143 18V13.7143H7.28571V18ZM10.7143 9.42857V7.71429L9 8.57143L7.28571 7.71429V9.42857L5.57143 10.2857L7.28571 11.1429V12.8571L9 12L10.7143 12.8571V11.1429L12.4286 10.2857L10.7143 9.42857Z" fill="#337202" />
							</g>
							<defs>
								<clipPath id="clip0_2812_682758">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<p className="font-montserrat  border-b border-white hover:border-primary hover:text-primary ..7x2:ml-0 ml-5px ..7x2:text-10px ..7x01:text-11px ..7x59:mr-1 transition-all hover:font-medium ..7x59:ml-0.5 mr-6 ..6x2:mr-0 ..6x2:text-xs text-13px text-gray-quick-silver">Сертификаты</p>

					</div>
					<div className="flex items-center ..5x5:hidden cursor-pointer">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M15 4.125C15 5.57475 13.8247 6.75 12.375 6.75C11.6985 6.75 11.0818 6.4941 10.6164 6.07382L6.66459 8.70832C6.72033 8.92121 6.75 9.14464 6.75 9.375C6.75 9.60536 6.72033 9.82879 6.66459 10.0417L10.2029 12.4006C10.6752 11.7061 11.4718 11.25 12.375 11.25C13.8247 11.25 15 12.4253 15 13.875C15 15.3247 13.8247 16.5 12.375 16.5C10.9341 16.5 9.76433 15.339 9.75013 13.9015L5.88365 11.3238C5.41821 11.7441 4.80149 12 4.125 12C2.67525 12 1.5 10.8247 1.5 9.375C1.5 7.92525 2.67525 6.75 4.125 6.75C4.80149 6.75 5.41821 7.0059 5.88365 7.42618L9.83541 4.79168C9.77967 4.57879 9.75 4.35536 9.75 4.125C9.75 2.67525 10.9253 1.5 12.375 1.5C13.8247 1.5 15 2.67525 15 4.125ZM12.375 5.25C12.9963 5.25 13.5 4.74632 13.5 4.125C13.5 3.50368 12.9963 3 12.375 3C11.7537 3 11.25 3.50368 11.25 4.125C11.25 4.74632 11.7537 5.25 12.375 5.25ZM4.125 10.5C4.74632 10.5 5.25 9.99632 5.25 9.375C5.25 8.75368 4.74632 8.25 4.125 8.25C3.50368 8.25 3 8.75368 3 9.375C3 9.99632 3.50368 10.5 4.125 10.5ZM13.5 13.875C13.5 14.4963 12.9963 15 12.375 15C11.7537 15 11.25 14.4963 11.25 13.875C11.25 13.2537 11.7537 12.75 12.375 12.75C12.9963 12.75 13.5 13.2537 13.5 13.875Z" fill="#337202" />
						</svg>

						<p className="font-montserrat ml-1  border-b border-white hover:border-primary text-13px text-gray-quick-silver hover:text-primary transition-all hover:font-medium">Поделиться</p>
					</div>
				</div>
			</div>
			<div className="hidden ..6x2:flex px-3  items-center">
				<div className="flex items-center">
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask id="mask0_2584_437788" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="12">
							<path fillRule="evenodd" clipRule="evenodd" d="M4.80017 0H10.8002C11.4916 0 12.0002 0.508632 12.0002 1.20001V7.20003C12.0002 7.89141 11.4916 8.40004 10.8002 8.40004H8.40004V10.7999C8.40004 11.4913 7.89141 11.9999 7.20003 11.9999H1.20001C0.508632 11.9999 0 11.4913 0 10.7999V4.79989C0 4.10852 0.508632 3.59989 1.20001 3.59989H3.60017V1.20001C3.60017 0.508632 4.1088 0 4.80017 0ZM3.60017 4.79989H1.20001V10.7999H7.20003V8.40004H4.80017C4.1088 8.40004 3.60017 7.89141 3.60017 7.20003V4.79989ZM4.79966 1.20006V7.20008H10.7997V1.20006H4.79966Z" fill="white" />
						</mask>
						<g mask="url(#mask0_2584_437788)">
							<rect x="-1.20044" y="-1.19995" width="14.4001" height="14.4001" fill="#337202" />
						</g>
					</svg>


					<p className="ml-5px ..7x2:text-10px ..7x59:mr-1 ..7x01:text-11px ..7x59:ml-0.5 mr-3 font-montserrat font-medium ..5x2:font-normal text-xs text-gray-quick-silver">Артикул: 30115/01</p>
				</div>
				<div className="flex items-center">
					<svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.9053 7.28033C13.1982 6.98744 13.1982 6.51256 12.9053 6.21967C12.6124 5.92678 12.1376 5.92678 11.8447 6.21967L7.875 10.1893L6.15533 8.46967C5.86244 8.17678 5.38756 8.17678 5.09467 8.46967C4.80178 8.76256 4.80178 9.23744 5.09467 9.53033L7.34467 11.7803C7.63756 12.0732 8.11244 12.0732 8.40533 11.7803L12.9053 7.28033Z" fill="#337202" />
						<path fillRule="evenodd" clipRule="evenodd" d="M2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25V15.75C1.5 16.1642 1.83579 16.5 2.25 16.5H15.75C16.1642 16.5 16.5 16.1642 16.5 15.75V2.25C16.5 1.83579 16.1642 1.5 15.75 1.5H11.25C10.9478 1.5 10.6752 1.68134 10.5583 1.96002C10.3429 2.47381 10.0971 2.79896 9.85028 2.99389C9.61461 3.17999 9.34212 3.27667 9 3.27667C8.65788 3.27667 8.38539 3.17999 8.14972 2.99389C7.90286 2.79896 7.65707 2.47381 7.44167 1.96002C7.32484 1.68134 7.05218 1.5 6.75 1.5H2.25ZM3 15V3H6.27596C6.5264 3.46945 6.83681 3.86843 7.22014 4.17112C7.73447 4.57725 8.33869 4.77667 9 4.77667C9.66131 4.77667 10.2655 4.57725 10.7799 4.17112C11.1632 3.86843 11.4736 3.46945 11.724 3H15V15H3Z" fill="#337202" />
					</svg>

					<p className="ml-5px ..7x2:text-10px ..7x59:mr-1 ..7x59:ml-0.5 ..7x01:text-11px mr-3 font-montserrat font-medium text-xs text-gray-quick-silver">Вы покупали 15 мая 2022</p>
				</div>
			</div>

			<div className="mt-6 ..5x2:mt-2 flex ..5x2:flex-col ..5x2:w-full ">
				<div className="pl-72px .3x1:pl-12 .3x1:mr-5 ..5x2:pl-0 ..5x1:mr-0 mr-50px relative">
					<div className="absolute   cursor-pointer   ..6x04:top-2 ..5x2:flex-col left-0 ..5x3:left-3 top-0 flex z-10 w-48 .3x1:w-24 flex-wrap">
						{sliderPhotos[0] && <MiniPhotoDots slider={slider} img={sliderPhotos[0]} length={0} snap={snap} />}

						<div className=" .3x1:h-9   .3x1:w-9  h-60px flex flex-col justify-end">
							<p className="font-noto-sans tracking-widest	font-medium mb-1 bg-label-yellow w-16 h-6 flex items-center   justify-center .3x1:text-9px .3x1:h-14px .3x1:w-9">HIT!</p>
							<p className="font-noto-sans border border-black-70pe font-medium tracking-widest text-black-70pe w-16 h-6 flex bg-white items-center justify-center .3x1:h-14px .3x1:w-9 .3x1:text-9px ">NEW</p>
						</div>
						<div id="one" onClick={(e) => {

							if (e.target.src === 'http://localhost:6006/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDetailCardSmallTwo.229bdfcb.jpg&w=128&q=75' && e.target.id !== '2' && e.target.id !== '3') slider.current.swiper.slideTo(1)
						}} className={` .3x1:h-9 relative cursor-pointer border border-white .3x1:w-9   ..5x2:hidden mr-5  w-60px h-60px mb-2`}>
							{sliderPhotos.map((photo, i) => i !== 0 && <MiniPhotoDots slider={slider} img={photo} length={i} snap={snap} />)}


						</div>
						<div className="..5x2:mt-1 relative cursor-pointer .3x1:h-9 .3x1:w-9  w-60px h-60px">
							<svg className=".3x1:h-9 .3x1:w-9" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="30" cy="30" r="29.5" fill="white" stroke="#C5C1AB" />
								<circle cx="30" cy="30" r="27.5" fill="white" stroke="#C5C1AB" />
								<path d="M14.5902 29H13.5102V22.79H11.3702V21.86H16.7302V22.79H14.5902V29ZM24.9297 25.42C24.9297 25.9733 24.8597 26.4767 24.7197 26.93C24.5864 27.3767 24.3797 27.7633 24.0997 28.09C23.8264 28.4167 23.4797 28.6667 23.0597 28.84C22.6464 29.0133 22.163 29.1 21.6097 29.1C21.043 29.1 20.5497 29.0133 20.1297 28.84C19.7164 28.66 19.3697 28.41 19.0897 28.09C18.8164 27.7633 18.613 27.3733 18.4797 26.92C18.3464 26.4667 18.2797 25.9633 18.2797 25.41C18.2797 24.6767 18.3997 24.0367 18.6397 23.49C18.8797 22.9433 19.2464 22.5167 19.7397 22.21C20.2397 21.9033 20.8664 21.75 21.6197 21.75C22.353 21.75 22.963 21.9033 23.4497 22.21C23.943 22.51 24.313 22.9367 24.5597 23.49C24.8064 24.0367 24.9297 24.68 24.9297 25.42ZM19.4197 25.42C19.4197 25.9933 19.4964 26.4867 19.6497 26.9C19.803 27.3067 20.043 27.6233 20.3697 27.85C20.6964 28.07 21.1097 28.18 21.6097 28.18C22.1164 28.18 22.5297 28.07 22.8497 27.85C23.1697 27.6233 23.4064 27.3067 23.5597 26.9C23.713 26.4867 23.7897 25.9933 23.7897 25.42C23.7897 24.56 23.6164 23.89 23.2697 23.41C22.9297 22.9233 22.3797 22.68 21.6197 22.68C21.113 22.68 20.6964 22.79 20.3697 23.01C20.043 23.23 19.803 23.5433 19.6497 23.95C19.4964 24.3567 19.4197 24.8467 19.4197 25.42ZM29.5713 21.86C30.1779 21.86 30.6846 21.9167 31.0913 22.03C31.5046 22.1433 31.8146 22.3333 32.0213 22.6C32.2346 22.86 32.3413 23.2067 32.3413 23.64C32.3413 23.92 32.2913 24.17 32.1913 24.39C32.0913 24.6033 31.9446 24.7833 31.7513 24.93C31.5646 25.07 31.3313 25.1633 31.0513 25.21V25.26C31.3379 25.3067 31.5946 25.3933 31.8213 25.52C32.0479 25.64 32.2279 25.8167 32.3613 26.05C32.4946 26.2833 32.5613 26.5867 32.5613 26.96C32.5613 27.3933 32.4579 27.7633 32.2513 28.07C32.0513 28.37 31.7613 28.6 31.3813 28.76C31.0079 28.92 30.5613 29 30.0413 29H27.4813V21.86H29.5713ZM29.7513 24.84C30.3113 24.84 30.6946 24.75 30.9013 24.57C31.1146 24.39 31.2213 24.1233 31.2213 23.77C31.2213 23.41 31.0946 23.1533 30.8413 23C30.5879 22.8467 30.1846 22.77 29.6313 22.77H28.5613V24.84H29.7513ZM28.5613 25.72V28.1H29.8713C30.4513 28.1 30.8546 27.9867 31.0813 27.76C31.3079 27.5333 31.4213 27.2333 31.4213 26.86C31.4213 26.6333 31.3713 26.4333 31.2713 26.26C31.1713 26.0867 31.0013 25.9533 30.7613 25.86C30.5279 25.7667 30.2079 25.72 29.8013 25.72H28.5613ZM39.4938 29L38.7338 26.94H35.9738L35.2138 29H34.0938L36.8038 21.83H37.9238L40.6238 29H39.4938ZM37.7138 23.99C37.6938 23.9167 37.6571 23.8067 37.6038 23.66C37.5571 23.5067 37.5104 23.3533 37.4638 23.2C37.4171 23.04 37.3804 22.91 37.3538 22.81C37.3204 22.9433 37.2804 23.09 37.2338 23.25C37.1938 23.4033 37.1538 23.5467 37.1138 23.68C37.0738 23.8067 37.0404 23.91 37.0138 23.99L36.2938 26H38.4338L37.7138 23.99ZM44.5867 21.86C45.5201 21.86 46.2001 22.05 46.6267 22.43C47.0534 22.8033 47.2667 23.3267 47.2667 24C47.2667 24.3 47.2167 24.5867 47.1167 24.86C47.0234 25.1333 46.8667 25.38 46.6467 25.6C46.4267 25.8133 46.1334 25.9833 45.7667 26.11C45.4067 26.23 44.9634 26.29 44.4367 26.29H43.6667V29H42.5867V21.86H44.5867ZM44.5067 22.77H43.6667V25.38H44.3167C44.7234 25.38 45.0634 25.3367 45.3367 25.25C45.6101 25.1567 45.8134 25.0133 45.9467 24.82C46.0867 24.62 46.1567 24.36 46.1567 24.04C46.1567 23.6133 46.0234 23.2967 45.7567 23.09C45.4967 22.8767 45.0801 22.77 44.5067 22.77ZM24.448 33.86V40.06H25.368V42.94H24.328V41H19.548V42.94H18.518V40.06H19.068C19.288 39.66 19.5013 39.22 19.708 38.74C19.9147 38.2533 20.098 37.7433 20.258 37.21C20.418 36.67 20.5513 36.12 20.658 35.56C20.7713 34.9933 20.8513 34.4267 20.898 33.86H24.448ZM21.808 34.8C21.7747 35.18 21.708 35.6 21.608 36.06C21.508 36.5133 21.3847 36.98 21.238 37.46C21.098 37.94 20.938 38.4067 20.758 38.86C20.5847 39.3067 20.4013 39.7067 20.208 40.06H23.378V34.8H21.808ZM33.1069 41H32.0269V37.74H28.6169V41H27.5369V33.86H28.6169V36.82H32.0269V33.86H33.1069V41ZM38.2374 38.1L36.4474 41H35.2074L37.2174 37.87C36.984 37.79 36.7574 37.6733 36.5374 37.52C36.324 37.36 36.1474 37.15 36.0074 36.89C35.874 36.6233 35.8074 36.2833 35.8074 35.87C35.8074 35.2233 36.034 34.7267 36.4874 34.38C36.9474 34.0333 37.614 33.86 38.4874 33.86H40.5874V41H39.5074V38.1H38.2374ZM38.5174 34.77C38.1774 34.77 37.8874 34.81 37.6474 34.89C37.414 34.97 37.234 35.0967 37.1074 35.27C36.9807 35.4367 36.9174 35.6567 36.9174 35.93C36.9174 36.3367 37.0507 36.6533 37.3174 36.88C37.5907 37.1 38.004 37.21 38.5574 37.21H39.5074V34.77H38.5174Z" fill="#C5C1AB" />
							</svg>

							<svg className="absolute -bottom-12 .3x1:-bottom-7 .3x1:h-9 .3x1:w-9 left-1/2 ability" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="30" cy="30" r="29.5" fill="white" fill-opacity="0.3" stroke="#C5C1AB" />
								<circle cx="30" cy="30" r="27.5" fill="white" fill-opacity="0.7" stroke="#C5C1AB" />
								<path d="M7.74756 30.4751C7.46102 30.4462 7.236 30.3753 7.0725 30.2623C6.90304 30.1488 6.78763 30.0075 6.72628 29.8385C6.66552 29.6635 6.64508 29.4775 6.66494 29.2805C6.6848 29.0835 6.74166 28.9083 6.83552 28.7549C6.92938 28.6016 7.07066 28.4862 7.25939 28.4087C7.44274 28.3247 7.67769 28.2971 7.96424 28.326C8.24482 28.3543 8.46954 28.4282 8.6384 28.5478C8.80189 28.6607 8.9173 28.802 8.98462 28.9716C9.04598 29.1406 9.06673 29.3236 9.04686 29.5206C9.027 29.7176 8.96984 29.8958 8.87538 30.0551C8.77556 30.2079 8.63427 30.3233 8.45151 30.4014C8.26279 30.4788 8.02814 30.5034 7.74756 30.4751Z" fill="#337202" />
								<path d="M15.354 19.3274L14.8366 20.1502L12.3528 18.5884L10.7192 21.1865L13.2029 22.7483L12.6855 23.5711L7.24559 20.1505L7.763 19.3277L10.0182 20.7457L11.6519 18.1477L9.39666 16.7296L9.91406 15.9068L15.354 19.3274Z" fill="#337202" />
								<path d="M22.5139 14.2807L21.0186 12.9887L18.8444 14.1899L19.1422 16.1435L18.2599 16.6309L17.2742 9.80313L18.1566 9.31568L23.404 13.7889L22.5139 14.2807ZM18.9312 11.1087C18.8835 11.0596 18.8068 10.9889 18.7009 10.8966C18.5974 10.7961 18.4939 10.6956 18.3904 10.5951C18.284 10.4894 18.1986 10.4029 18.134 10.3358C18.1658 10.4553 18.1981 10.5883 18.231 10.7346C18.2662 10.8728 18.2971 11.0031 18.3236 11.1256C18.3472 11.2428 18.3659 11.3387 18.3797 11.4133L18.6873 13.3101L20.3732 12.3787L18.9312 11.1087Z" fill="#337202" />
								<path d="M27.3084 13.0949L27.1674 6.67046L31.0544 6.58515L31.0728 7.42195L28.1575 7.48593L28.1972 9.2945L29.025 9.27633C29.6609 9.26237 30.1605 9.33243 30.524 9.48649C30.8934 9.64042 31.1563 9.8567 31.3124 10.1353C31.4744 10.4079 31.5594 10.7241 31.5673 11.084C31.576 11.4799 31.4995 11.8236 31.3379 12.1153C31.1822 12.4067 30.9292 12.6344 30.5787 12.7981C30.228 12.9558 29.7648 13.041 29.1889 13.0536L27.3084 13.0949ZM29.099 12.2364C29.6269 12.2248 30.0059 12.1295 30.236 11.9504C30.466 11.7653 30.5768 11.4838 30.5685 11.1059C30.5627 10.842 30.5012 10.6363 30.3839 10.4888C30.2667 10.3413 30.0873 10.2372 29.846 10.1765C29.6106 10.1157 29.3009 10.0895 28.917 10.0979L28.2152 10.1133L28.2622 12.2548L29.099 12.2364Z" fill="#337202" />
								<path d="M42.6139 13.985C42.3731 14.4209 42.0989 14.787 41.7913 15.0832C41.4919 15.377 41.1608 15.5917 40.798 15.7272C40.4405 15.8655 40.0586 15.9116 39.6523 15.8654C39.2513 15.822 38.8328 15.6799 38.3969 15.4391C37.9505 15.1925 37.5996 14.9095 37.3442 14.5902C37.0969 14.2685 36.9326 13.9207 36.8513 13.5467C36.7781 13.1704 36.7877 12.7747 36.8799 12.3595C36.9722 11.9444 37.1388 11.5189 37.3796 11.083C37.6987 10.5053 38.0718 10.0533 38.4988 9.72712C38.9258 9.40093 39.4003 9.22439 39.9224 9.19752C40.4498 9.17354 41.0102 9.32549 41.6036 9.65335C42.1813 9.97251 42.5951 10.3588 42.8451 10.8122C43.1031 11.2632 43.2089 11.7604 43.1624 12.3036C43.1188 12.8416 42.936 13.4021 42.6139 13.985ZM38.2733 11.587C38.0238 12.0387 37.8694 12.4607 37.8103 12.853C37.7541 13.2401 37.8054 13.594 37.9641 13.9147C38.1257 14.2302 38.4034 14.4968 38.7973 14.7144C39.1964 14.9349 39.5699 15.0281 39.9178 14.9941C40.2685 14.9548 40.5928 14.8083 40.8905 14.5547C41.1912 14.2958 41.4663 13.9406 41.7158 13.4889C42.0901 12.8114 42.2452 12.2082 42.181 11.6792C42.125 11.1478 41.7976 10.7167 41.1989 10.386C40.7997 10.1655 40.4236 10.0708 40.0705 10.1019C39.7175 10.1331 39.392 10.2754 39.0942 10.5291C38.7965 10.7827 38.5228 11.1353 38.2733 11.587Z" fill="#337202" />
								<path d="M50.8611 18.7419C51.2925 19.4627 51.4601 20.0756 51.3639 20.5807C51.2729 21.0828 50.9673 21.4894 50.4474 21.8007C50.2157 21.9394 49.9712 22.0333 49.7139 22.0824C49.4597 22.1367 49.1968 22.1297 48.9252 22.0615C48.6588 21.9902 48.3919 21.8423 48.1246 21.6177C47.8655 21.3952 47.6143 21.0805 47.3708 20.6738L47.0149 20.0792L44.9222 21.3319L44.4229 20.4979L49.9366 17.1975L50.8611 18.7419ZM50.1214 19.1008L49.7331 18.4521L47.7176 19.6586L48.0181 20.1605C48.2061 20.4746 48.3967 20.7171 48.59 20.8881C48.7884 21.056 48.9931 21.1468 49.204 21.1604C49.4231 21.1761 49.6563 21.1099 49.9034 20.962C50.2329 20.7648 50.4158 20.5154 50.4521 20.214C50.4967 19.9146 50.3864 19.5435 50.1214 19.1008Z" fill="#337202" />
								<path d="M51.0218 28.1881C51.3084 28.1592 51.543 28.1838 51.7258 28.2618C51.9145 28.3393 52.0558 28.4547 52.1496 28.608C52.2441 28.7674 52.3013 28.9455 52.3211 29.1425C52.341 29.3395 52.3202 29.5225 52.2589 29.6915C52.1975 29.8606 52.0821 30.0018 51.9127 30.1154C51.7498 30.2344 51.525 30.3083 51.2385 30.3372C50.9579 30.3655 50.723 30.3379 50.5336 30.2545C50.3509 30.1764 50.2096 30.061 50.1098 29.9082C50.0159 29.7549 49.9591 29.5797 49.9392 29.3827C49.9193 29.1857 49.9398 28.9997 50.0005 28.8247C50.0679 28.6551 50.1833 28.5138 50.3468 28.4008C50.5162 28.2873 50.7412 28.2163 51.0218 28.1881Z" fill="#337202" />
								<path d="M27.4859 36L32.0459 26.08H26.0459V24.576H33.8699V25.792L29.3259 36H27.4859Z" fill="#337202" />
								<path d="M30.1932 42.568V49H21.4692V42.568H22.5252V48.112H25.2972V42.568H26.3532V48.112H29.1372V42.568H30.1932ZM36.6905 43.456H34.5905V49H33.5465V43.456H31.4705V42.568H36.6905V43.456ZM37.2038 48.352C37.2038 48.056 37.2758 47.848 37.4198 47.728C37.5638 47.608 37.7358 47.548 37.9358 47.548C38.1438 47.548 38.3198 47.608 38.4638 47.728C38.6158 47.848 38.6918 48.056 38.6918 48.352C38.6918 48.64 38.6158 48.848 38.4638 48.976C38.3198 49.104 38.1438 49.168 37.9358 49.168C37.7358 49.168 37.5638 49.104 37.4198 48.976C37.2758 48.848 37.2038 48.64 37.2038 48.352Z" fill="#337202" />
							</svg>



						</div>
						<div onMouseEnter={hoverSet} onMouseLeave={hoverSet} className="..5x2:hidden .3x1:h-34px .3x1:mt-24 .3x1:ml-0.5  .3x1:w-34px hoverCustVideo hover:bg-primary mt-146px -translate-y-2 .3x1:mt-70px cursor-pointer    w-60px h-60px flex flex-col justify-center items-center">
							<svg className=".3x1:h-4 .3x1:w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M7 5.07172C7.3094 4.89309 7.6906 4.89309 8 5.07172L18.5 11.1339C18.8094 11.3126 19 11.6427 19 11.9999C19 12.3572 18.8094 12.6873 18.5 12.866L8 18.9282C7.6906 19.1068 7.3094 19.1068 7 18.9282C6.6906 18.7495 6.5 18.4194 6.5 18.0621V5.93774C6.5 5.58048 6.6906 5.25035 7 5.07172ZM8.5 7.6698V16.3301L16 11.9999L8.5 7.6698Z" fill={`${buttonHover ? "#fff" : '#337202'} `} />
							</svg>
							<p className="font-montserrat text-13px font-medium .3x1:text-10px .3x1:font-semibold  text-primary">VIDEO</p>
						</div>

					</div>
					<div className="..5x2:flex px-6px  hidden absolute right-0 z-20 bg-white  ..6x04:rounded-r-none top-20 w-60px ..6x2:h-12 .1x1:h-9  rounded-xl  bg-shadow   flex-col justify-center items-center">
						<svg className=".1x1:h-4 .1x1:w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M7 5.07172C7.3094 4.89309 7.6906 4.89309 8 5.07172L18.5 11.1339C18.8094 11.3126 19 11.6427 19 11.9999C19 12.3572 18.8094 12.6873 18.5 12.866L8 18.9282C7.6906 19.1068 7.3094 19.1068 7 18.9282C6.6906 18.7495 6.5 18.4194 6.5 18.0621V5.93774C6.5 5.58048 6.6906 5.25035 7 5.07172ZM8.5 7.6698V16.3301L16 11.9999L8.5 7.6698Z" fill="#337202" />
						</svg>
						<p className="font-montserrat text-xs font-semibold text-primary ">VIDEO</p>
					</div>
					{likeMobile ? <svg className="..5x2:block  hidden absolute right-3 top-3  z-10    " onClick={setLikeMob} width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="white"></circle><g filter="url(#filter0_d_3587_1020586)"><path d="M29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z" fill="#FF6363"></path></g><defs><filter id="filter0_d_3587_1020586" x="4" y="10" width="40.7084" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="5"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3587_1020586"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3587_1020586" result="shape"></feBlend></filter></defs></svg> : <div onClick={setLikeMob} className="..5x2:flex rounded-full justify-center items-center h-12 bg-white-80pe blur-2px w-12 hidden absolute right-3 top-3  z-10    ">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4578 19.1008L12.3542 19.2044L12.2403 19.1008C7.32207 14.6381 4.07084 11.6872 4.07084 8.69482C4.07084 6.62398 5.62398 5.07084 7.69482 5.07084C9.28937 5.07084 10.8425 6.10627 11.3913 7.51444H13.3172C13.8659 6.10627 15.4191 5.07084 17.0136 5.07084C19.0845 5.07084 20.6376 6.62398 20.6376 8.69482C20.6376 11.6872 17.3864 14.6381 12.4578 19.1008ZM17.0136 3C15.212 3 13.4828 3.83869 12.3542 5.15368C11.2256 3.83869 9.49646 3 7.69482 3C4.50572 3 2 5.49537 2 8.69482C2 12.5984 5.52044 15.7978 10.8529 20.6332L12.3542 22L13.8556 20.6332C19.188 15.7978 22.7084 12.5984 22.7084 8.69482C22.7084 5.49537 20.2027 3 17.0136 3Z" fill="#DBDCDA"></path></svg>
					</div>}



					<Swiper className="w-608px ..5x2:w-auto ..5x2:h-auto .1x1:w-250px .1x1:h-250px .2x007:w-500px .2x007:h-500px .6x3:w-360px .3x1:w-300px .3x1:h-300px .6x3:h-360px" ref={slider} onSwiper={e => setAllSl(e.imagesLoaded / 2)} onSlideChange={e => setCurrentSnap(e.snapIndex)}   >
						{sliderPhotos.map((photo, i) => <SwiperSlide key={i} onClick={close} className="..5x2:flex hoverCustom ..5x2:justify-center" >
							<Image src={photo} />
						</SwiperSlide>)}




					</Swiper>

					<div className="z-20 hidden ..5x2:flex w-12 h-6 bg-white-80pe rounded-2xl absolute bottom-3 font-montserrat font-semibold text-13px justify-center items-center left-1/2 -translate-x-1/2">
						{snap + 1} / {allSlides}
					</div>
					<button onClick={prevSlide} className='..5x2:hidden .2x007:top-60 .1x1:top-28  .6x3:top-48   absolute      .3x1:left-16   transition-all rounded-2xl .3x1:top-36  left-86px     top-300px   z-10'>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.5 17.725L10.7518 12L16.5 6.2625L14.7304 4.5L7.2 12L14.7304 19.5L16.5 17.725Z" fill={`black`} fillOpacity="0.7" />
						</svg>
					</button>
					<button onClick={nextSlide} onMouseEnter={hoverNext} onMouseLeave={hoverNext} className='..5x2:hidden .6x3:top-48 .1x1:top-28 .2x007:top-60     absolute   .3x1:right-5    transition-all rounded-2xl right-4 .3x1:top-36   top-300px z-10'>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.5 17.725L13.2482 12L7.5 6.2625L9.26964 4.5L16.8 12L9.26964 19.5L7.5 17.725Z" fill={`  black`} fillOpacity="0.7" />
						</svg>

					</button>
				</div>

				<div className=" .2x1:w-317px px-3 ..5x2:w-auto  .1x1:w-250px  bg-white z-10 -mt-0 pt-3 ..5x2:mx-0 ..5x1:mx-4      mr-12  .2x10:mr-2 .1x1:mr-0">
					<p className="font-montserrat font-medium text-xl mb-2 .1x1:mb-0.5   .5x1:text-sm ..7x1:text-sm">Забота о себе каждый день</p>
					<p className="font-montserrat    text-black-70pe  .1x1:text-10px ..5x2:text-13px .6x3:text-13px .1x1:text-gray-quick-silver ..7x11:h-9 textdots leading-140%">Маска отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения, придает коже ухоженный вид. Насыщает питательными элементами, удерживает влагу внутри, отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения</p>
					<button onClick={scrollDescription} className="..6x04:hidden  font-montserrat font-medium text-13px text-primary  mb-5 .1x1:mb-1">Всё о товаре</button>
					<button onClick={scrollDescriptionPhone} className="..6x04:block hidden font-montserrat font-medium text-13px border-b border-dashed border-primary text-primary  mb-5 mt-1 .1x1:mb-1">Подробнее о товаре</button>
					<p onMouseEnter={setHov} onMouseLeave={setHov} onClick={copy} className="cursor-pointer .3x1:text-13px ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 relative text-gray-quick-silver flex  items-center ">Артикул: <span className="ml-6px font-montserrat text-gray-quick-silver letterSpacing-4px flex items-center ">30115/01 <svg className=" ml-6px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask id="mask0_2812_712213" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
							<path fillRule="evenodd" clipRule="evenodd" d="M7.35034 0.75H15.6004C16.551 0.75 17.2504 1.44937 17.2504 2.40001V10.65C17.2504 11.6007 16.551 12.3001 15.6004 12.3001H12.3001V15.6C12.3001 16.5506 11.6007 17.25 10.65 17.25H2.40001C1.44937 17.25 0.75 16.5506 0.75 15.6V7.34992C0.75 6.39929 1.44937 5.69992 2.40001 5.69992H5.70033V2.40001C5.70033 1.44937 6.3997 0.75 7.35034 0.75ZM5.70033 7.34992H2.40001V15.6H10.65V12.3001H7.35034C6.3997 12.3001 5.70033 11.6007 5.70033 10.65V7.34992ZM7.34955 2.39989V10.6499H15.5996V2.39989H7.34955Z" fill="white" />
						</mask>
						<g mask="url(#mask0_2812_712213)">
							<rect x="-0.900391" y="-0.899902" width="19.8001" height="19.8001" fill={hoverCopy ? '#337202' : "#DBDCDA"} />
						</g>
					</svg></span>
						{showCopy && <div className="absolute h-42px right-120px bg-black-70pe w-36 flex items-center justify-center">
							<div className="relative text-11px font-montserrat text-white-80pe leading-140% px-2">
								Скопировано в буфер обмена
								<div className="absolute h-7px w-7px -left-1 top-3 rotSearchHover bg-trean">

								</div>
							</div>


						</div>}

					</p>
					<Link href={'/'}>
						<p className=".3x1:text-13px cursor-pointer ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 text-gray-quick-silver flex  items-center ">Серия: <span className="ml-6px font-montserrat text-gray-quick-silver hover:text-primary letterSpacing-2px underline">COLLAGEN ACTIVE</span></p>

					</Link>
					<p className=".3x1:text-13px ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 text-gray-quick-silver flex  items-center ">Вес: <span className="ml-6px font-montserrat text-gray-quick-silver">18г.</span></p>
					<p className=".3x1:text-13px ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 text-gray-quick-silver flex  items-center ">Возраст: <span className="ml-6px font-montserrat text-gray-quick-silver">любой возраст</span></p>
					<p className=".3x1:text-13px ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 text-gray-quick-silver flex  items-center  ">Потребность кожи: <span className="ml-6px font-montserrat text-gray-quick-silver">борьба с морщинами</span></p>
					<p className=".3x1:text-13px ..6x04:hidden .1x1:mb-0 font-montserrat mb-3 text-gray-quick-silver flex  items-center ">Физические свойства: <span className="ml-6px font-montserrat text-gray-quick-silver">1 шт.</span></p>
					<div className="mb-2 .1x1:mb-3 .1x1:mt-3">
						<p className="font-montserrat mb-2 text-gray-quick-silver flex .3x1:text-13px .1x1:mb-1 items-center ">Эффекты:</p>
						<div className="flex  overflow-x-auto whitespace-nowrap">
							<EffectsItemDetail title={'против перхоти'} />
							<EffectsItemDetail title={'против седины'} />
							<EffectsItemDetail title={'против выпадения'} />

						</div>

					</div>
					<p className="font-montserrat mb-2 .1x1:text-13px .1x1:mb-1 text-gray-quick-silver flex  items-center ">Тон: <span className="ml-6px font-montserrat text-gray-quick-silver letterSpacing-4px ..5x2:">{currentTon < 10 ? `0${currentTon}` : currentTon}</span></p>

					<div className="..6x5:overflow-x-scroll ..6x5:whitespace-nowrap  ">


						<div className="flex  flex-wrap  ..6x04:flex-nowrap  ..6x04:w-475px">

							{tons.map((ton, i) => <Ton key={i} src={ton.src} isNone={ton.isNone} setCurrentTonF={setCurrentTonF} currentTon={currentTon} length={i + 1} />)}


						</div>
					</div>

				</div>
				<div className="px-3   ..5x2:hidden        ..5x2:mt-5  w-150">
					<div className="border ..6x04:hidden border-gray-light p-5 .1x1:p-3">
						<div className="flex justify-between items-center">
							<p className="font-montserrat ">₸ <span className="line-through text-black-70pe">1 580 900.00</span></p>
							<div className="flex items-center text-black-70pe font-montserrat text-xl ..5x1:text-base">
								<svg className="mr-0.5 ..5x1:h-4 ..5x1:w-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.9165 17.9167C12.9165 17.9167 7.49984 18.3333 4.58317 15C1.6665 11.6667 1.6665 1.66667 1.6665 1.66667C1.6665 1.66667 11.6665 1.25 14.9998 3.75C18.3332 6.25 17.4998 13.3333 17.4998 13.3333" stroke="#337202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M18.3332 18.3333C18.3332 18.3333 13.6751 14.8131 10.8332 11.6666C7.99121 8.52017 6.6665 5.41663 6.6665 5.41663" stroke="#337202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M10.8335 11.6667L11.2502 6.25" stroke="#337202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M10.8332 11.6667L6.6665 11.25" stroke="#337202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>

								1.8 Б
							</div>
						</div>
						<div className="mt-10px mb-4">
							<p className="font-montserrat text-xl text-label-pink-2 font-semibold flex items-center .4x1:text-base ..5x1:text-sm .2x00750:text-base">₸ 1 580 900.00 <span className="font-normal mx-6px">(-29%)</span> <span className="text-26px font-normal text-stroke ">/</span> <span className="mx-6px .4x1:text-base text-xl text-label-orange font-medium font-montserrat">7 500 De</span></p>

						</div>
						<div className="flex w-full justify-between">

							<p className="flex-1 w-full font-montserrat text-gray-quick-silver .2x10:text-12px flex relative items-center .2x00750:text-10px .4x2:text-9px  ">В наличии <span className="ml-1.5  font-medium   text-primary flex items-center"> {'>'} 50 шт.
								{isLike ? <svg className="absolute .2x00:h-9 .2x00:w-9 .1x1:top-1.5 cursor-pointer right-0 top-1 .2x00:top-2.5" onClick={() => setLike(false)} width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="white"></circle><g filter="url(#filter0_d_3587_1020586)"><path d="M29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z" fill="#FF6363"></path></g><defs><filter id="filter0_d_3587_1020586" x="4" y="10" width="40.7084" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="5"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3587_1020586"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3587_1020586" result="shape"></feBlend></filter></defs></svg>
									: <svg onClick={() => setLike(true)} onMouseEnter={() => setHoverHeart(true)} onMouseLeave={() => setHoverHeart(false)} className="absolute .2x00:h-9 .1x1:top-1.5 .2x00:w-9 cursor-pointer right-0 top-1 .2x00:top-2.5" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="24" cy="24" r="24" fill="white" />
										<path d="M24.4578 31.1008L24.3542 31.2044L24.2403 31.1008C19.3221 26.6381 16.0708 23.6872 16.0708 20.6948C16.0708 18.624 17.624 17.0708 19.6948 17.0708C21.2894 17.0708 22.8425 18.1063 23.3913 19.5144H25.3172C25.8659 18.1063 27.4191 17.0708 29.0136 17.0708C31.0845 17.0708 32.6376 18.624 32.6376 20.6948C32.6376 23.6872 29.3864 26.6381 24.4578 31.1008ZM29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z" fill={`${hoverHeart ? '#F14155' : "#EDEEEC"}`} />
									</svg>}

							</span>
							</p>
							<div className="flex-1 h-14 .1x1:h-12   ml-4    border    border-gray-light2 flex items-center justify-center">
								<button  ><svg onClick={decrement} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.25 9.75H3.75V8.25H14.25V9.75Z" fill={`${currentLenghtProduct > 0 ? 'black' : '#EDF1F0'} `} />
								</svg>
								</button>
								<p className="font-montserrat text-sm font-semibold mx-7">{currentLenghtProduct}</p>
								<button><svg onClick={increment} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.25 9.75H9.75V14.25H8.25V9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75Z" fill="black" fillOpacity="0.7" />
								</svg></button>
							</div>

						</div>

						<div className="mt-3 flex justify-between">
							<button className="h-14 flex-1 .1x1:h-12 border border-gray-light2 font-montserrat text-13px font-medium text-label-orange tracking-wider transition-all hover:bg-label-orange hover:text-white mr-1.5 .4x1:text-10px" onClick={setDe} >{clickDe ? 'ДОБАВЛЕНО ЗА DE' : 'КУПИТЬ ЗА DE'}  </button>
							<button className="h-14 flex-1 .1x1:h-12 bg-primary   w-222px tracking-wider border border-primary font-montserrat font-semibold text-13px hover:bg-white hover:text-primary hover:border-gray-light2 transition-all text-white ml-1.5 .4x1:text-10px" onClick={setBasket}>{clickBasket ? 'В КОРЗИНЕ' : "В КОРЗИНУ"}</button>

						</div>
					</div>


					<div onClick={(e) => setFilter('sale', e)} className={`  h-110px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.sale ? 'activeSlide' : ''}`}>

						<div id="click" className={`flex px-3 ..6x04:pl-0 ..6x04:mt-0 transiton-all mt-8 .1x1:pb-1 .1x1:mt-0   items-center mt-3 relative ..6x04:pb-10px pb-4 border-b border-dashed border-gray ${dropDownds.sale ? 'border-none pb-0' : ''}`}>
							<svg id="click" className={`absolute .1x1:right-1  right-3 transition-all top-5 ${dropDownds.sale ? 'prev_rotate' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
							</svg>

							<svg id="click" className="mr-4 ..5x1:mr-1.5 ..6x04:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.2542 27.8353C23.3647 29.4528 20.5385 30.1606 16.7902 30.2415C16.79 30.2415 16.7899 30.2415 16.7898 30.2415L16.2482 30.2497L16.2466 30.2497L15.7012 30.2521C15.7011 30.2521 15.701 30.2521 15.701 30.2521C12.5102 30.2521 9.86256 29.3881 7.93451 27.742C6.00752 26.0968 4.78416 23.6576 4.46462 20.477C4.13625 17.2085 5.5032 14.5311 8.24699 11.6928C8.2472 11.6926 8.24742 11.6923 8.24763 11.6921L8.54256 11.3945L10.5892 9.40644L10.5892 9.4065L10.5927 9.40294L10.8797 9.10511L10.8798 9.10518L10.8835 9.10109L11.1052 8.85351L11.1052 8.85354L11.1076 8.85076C11.2654 8.66573 11.3736 8.51485 11.417 8.40492L11.417 8.40492C11.8572 7.28866 11.9238 5.30469 11.5817 2.54785C11.4681 1.63198 12.4 0.944323 13.2416 1.32303C16.1206 2.6185 18.1613 4.42283 19.3257 6.72994C19.6611 7.39461 19.8955 8.11727 20.0496 8.90709C20.0652 8.98673 20.0798 9.06472 20.0934 9.14164L20.1655 9.59944L20.2191 10.0611C20.2266 10.1389 20.2335 10.218 20.2398 10.2992C20.2399 10.2996 20.2399 10.3 20.2399 10.3004L20.2724 10.8216L20.2949 11.418L20.295 11.4205L20.3162 12.4226L20.3239 12.7903L20.5755 12.5221L20.639 12.4544L20.6391 12.4545L20.642 12.4512C20.9882 12.0601 21.3745 11.5512 21.7984 10.9281L21.7996 10.9263L22.2343 10.2676L22.2353 10.266C22.3852 10.0324 22.5393 9.78611 22.6975 9.52703L22.6979 9.52638L22.9375 9.12947L22.9379 9.12884C23.3669 8.41023 24.386 8.352 24.8942 9.01707C27.0483 11.8366 28.1201 15.4598 28.1201 19.8556C28.1201 23.6799 27.1378 26.2228 25.2542 27.8353ZM14.3835 4.65839L14.1358 4.48304L14.1469 4.78631L14.1596 5.13161C14.1596 5.13191 14.1596 5.13222 14.1596 5.13252C14.2034 6.87011 14.0259 8.24068 13.6186 9.27327C13.3805 9.87704 12.9374 10.4185 12.0811 11.2606C12.0809 11.2608 12.0807 11.261 12.0805 11.2612L10.7926 12.502L10.7926 12.502L10.7913 12.5032L10.0353 13.249L10.0353 13.2489L10.0322 13.2522L9.64665 13.656L9.64664 13.656L9.64529 13.6575C7.57078 15.8889 6.5851 17.908 6.81943 20.2405C7.07321 22.7665 7.98817 24.6838 9.50454 25.9679C11.0194 27.2508 13.1156 27.8855 15.7012 27.8855L15.7027 27.8855L16.7454 27.8752L16.7454 27.8753L16.7489 27.8752L17.4798 27.851L17.4817 27.8509C20.3448 27.721 22.4229 27.1884 23.782 25.9372C25.1458 24.6816 25.7535 22.7334 25.7535 19.8556C25.7535 16.8914 25.2217 14.372 24.1615 12.2841L24.1615 12.2841L24.1604 12.2821L24.0949 12.1576L23.9777 11.9352L23.8376 12.1439L23.6762 12.3842C23.6761 12.3844 23.676 12.3845 23.6759 12.3847C22.9624 13.4285 22.3192 14.2081 21.7109 14.7371C21.1043 15.2647 20.5415 15.5352 19.986 15.5791L19.8205 15.5855C19.3316 15.5848 18.9541 15.4212 18.6725 15.1517C18.3877 14.8793 18.192 14.4898 18.0879 14.0271C18.0788 13.9869 18.0704 13.9472 18.0626 13.9077L18.0209 13.6578C18.0153 13.6167 18.0102 13.5746 18.0054 13.5309L17.9804 13.2352L17.9561 12.6649L17.9216 11.2573L17.9217 11.2573L17.9215 11.2539L17.8986 10.7635L17.8986 10.7635L17.8983 10.7593L17.8663 10.3319L17.8664 10.3319L17.8658 10.3264L17.8221 9.93741L17.8221 9.93741L17.8217 9.93431C17.8131 9.87027 17.804 9.80683 17.7941 9.74346L17.7942 9.74345L17.7936 9.74048L17.7273 9.3632L17.7273 9.36319L17.7268 9.36043C17.6127 8.7759 17.4451 8.2564 17.2129 7.79625L17.0789 7.86384L17.2129 7.79625C16.6454 6.6719 15.7936 5.68873 14.6484 4.846L14.6485 4.84598L14.6462 4.84438L14.3835 4.65839ZM14.1561 18.3874L14.0604 18.1288L13.8953 18.3497L13.6521 18.675L13.6521 18.675L13.6503 18.6775C12.8007 19.8653 12.4757 20.9497 12.661 21.921C12.848 22.9014 13.5391 23.5458 14.3811 23.7766C15.1233 23.9802 15.8502 23.8869 16.4834 23.3229C16.6001 23.219 16.6869 23.0923 16.7293 22.9384C16.7715 22.7854 16.767 22.6165 16.7196 22.4319C16.6261 22.068 16.3597 21.62 15.8975 21.0561L15.8975 21.0561L15.8953 21.0535L15.558 20.6604L15.558 20.6603L15.5551 20.6571L15.3621 20.4451L15.3613 20.4441C14.8937 19.9391 14.5141 19.3091 14.2171 18.5521C14.2169 18.5516 14.2167 18.5512 14.2166 18.5507L14.1561 18.3874ZM13.7552 26.059L13.7155 26.2037L13.7551 26.059C12.0965 25.6042 10.7065 24.3055 10.3362 22.3645C9.87264 19.9347 11.1153 17.4382 13.946 14.8653C14.6515 14.224 15.787 14.6378 15.9146 15.5827C16.1239 17.1331 16.531 18.2239 17.0979 18.8363C18.2328 20.0621 18.9258 21.2277 19.109 22.2819C19.29 23.3234 18.9766 24.2717 18.0574 25.0903C16.7518 26.2531 15.2126 26.4587 13.7552 26.059Z" fill="black" fillOpacity="0.7" stroke="#F7F8F6" strokeWidth="0.3" />
							</svg>
							<svg id="click" className="mr-3 ..6x04:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M23.5722 25.9745C21.843 27.4548 19.2393 28.1165 15.7379 28.192C15.7376 28.1921 15.7373 28.1921 15.737 28.1921L15.2321 28.1997L15.2288 28.1998L14.7199 28.202C14.7196 28.202 14.7193 28.202 14.719 28.202C11.7564 28.2019 9.31418 27.3998 7.54215 25.8869C5.77214 24.3758 4.64043 22.1297 4.34422 19.1813C4.04295 16.1826 5.29057 13.7167 7.84552 11.0735L8.12086 10.7956L10.0385 8.93287L10.0386 8.93299L10.0454 8.92587L10.3146 8.64665L10.3147 8.64679L10.322 8.63861L10.5299 8.40651L10.53 8.40657L10.5347 8.401C10.6821 8.22812 10.8003 8.06864 10.8518 7.93811L10.8518 7.9381C11.2806 6.85086 11.337 4.95499 11.0161 2.369C10.9249 1.63372 11.673 1.08166 12.3487 1.3857C15.0225 2.58884 16.904 4.25792 17.9756 6.38115C18.2825 6.98923 18.498 7.65245 18.6402 8.38094L18.9346 8.32347L18.6402 8.38094C18.6545 8.45424 18.6679 8.52595 18.6804 8.59661L18.7473 9.02109L18.797 9.44911C18.8038 9.52016 18.8101 9.59251 18.8159 9.66669L18.8462 10.1532L18.8673 10.7102L18.8871 11.6496L18.9027 12.3849L19.4059 11.8485L19.4654 11.7851L19.4655 11.7851L19.4712 11.7786C19.8018 11.4052 20.1682 10.9223 20.5678 10.3347L20.5679 10.3347L20.5702 10.3312L20.9777 9.71364L20.9778 9.71366L20.9798 9.71044C21.121 9.49043 21.2661 9.25848 21.415 9.01466L21.4158 9.01337L21.6404 8.64126L21.6412 8.64001C21.9856 8.06309 22.8038 8.01635 23.2117 8.55028C25.2052 11.1595 26.2033 14.5197 26.2033 18.6147C26.2033 22.1739 25.2896 24.5043 23.5722 25.9745ZM13.5767 4.23717L13.0813 3.88649L13.1035 4.49302L13.1154 4.81657C13.1561 6.4348 12.9899 7.69537 12.6192 8.63523C12.4094 9.16736 12.016 9.65477 11.2149 10.4427L10.0075 11.6058L10.0075 11.6058L10.005 11.6083L9.29627 12.3075L9.29618 12.3074L9.28996 12.3139L8.92852 12.6925L8.9285 12.6925L8.9258 12.6954C6.96594 14.8034 6.0085 16.7399 6.2347 18.9914C6.47569 21.3901 7.34717 23.2299 8.80758 24.4666C10.265 25.7008 12.271 26.302 14.7199 26.302L14.7229 26.302L15.7005 26.2924L15.7005 26.2925L15.7074 26.2923L16.3927 26.2696L16.3964 26.2695C19.0893 26.1473 21.0863 25.6461 22.4036 24.4334C23.7304 23.2119 24.3033 21.3306 24.3033 18.6147C24.3033 15.817 23.8015 13.4291 22.7935 11.4442L22.7936 11.4442L22.7915 11.4402L22.73 11.3235L22.4958 10.8787L22.2155 11.296L22.0649 11.5203C22.0647 11.5206 22.0645 11.521 22.0642 11.5213C21.3987 12.4949 20.8047 13.2129 20.2494 13.6958C19.6976 14.1758 19.202 14.408 18.7275 14.4463L18.5789 14.452C18.1609 14.4508 17.8481 14.3119 17.6157 14.0896C17.3772 13.8614 17.2056 13.5275 17.1129 13.1155C17.1049 13.0798 17.0975 13.0448 17.0905 13.0099L17.0523 12.7804C17.0475 12.7446 17.043 12.7079 17.0388 12.6699L17.0157 12.3979L16.9932 11.8681L16.9609 10.5498L16.961 10.5498L16.9607 10.5431L16.9392 10.0834L16.9393 10.0834L16.9387 10.075L16.9087 9.6743L16.9089 9.67428L16.9076 9.66318L16.8666 9.29854L16.8667 9.29853L16.8659 9.29233C16.8577 9.23118 16.8489 9.17059 16.8396 9.11008L16.8396 9.11007L16.8386 9.10412L16.7764 8.75042L16.7764 8.75041L16.7754 8.74489C16.6662 8.18563 16.505 7.68416 16.2794 7.2372L16.2794 7.23719C15.7349 6.15825 14.9188 5.2179 13.8274 4.41477L13.8275 4.41473L13.823 4.41154L13.5767 4.23717ZM12.9377 24.2767L12.8583 24.566L12.9377 24.2766C11.4362 23.8649 10.1816 22.6918 9.84684 20.9369L9.55215 20.9931L9.84684 20.9369C9.42783 18.7408 10.5429 16.4526 13.1816 14.0542C13.748 13.5394 14.6596 13.8715 14.762 14.6301C14.9596 16.0936 15.347 17.1565 15.9124 17.7673C16.9674 18.9069 17.5936 19.9722 17.7577 20.9166C17.9174 21.8356 17.6458 22.6703 16.8229 23.4031L17.0224 23.6272L16.8229 23.4031C15.6447 24.4524 14.2596 24.6392 12.9377 24.2767ZM13.4209 17.1829L13.2295 16.6657L12.8993 17.1074L12.6713 17.4124L12.6712 17.4124L12.6676 17.4175C11.8573 18.5504 11.5282 19.6112 11.7132 20.5808C11.9009 21.5649 12.5975 22.2132 13.4402 22.4443C14.1788 22.6469 14.9185 22.5549 15.5593 21.9843C15.6881 21.8695 15.7883 21.7253 15.8374 21.5471C15.8861 21.3709 15.8787 21.1836 15.829 20.9903C15.7325 20.6144 15.4642 20.1722 15.0272 19.6391L15.0273 19.639L15.0229 19.6339L14.7066 19.2653L14.7067 19.2652L14.7008 19.2588L14.52 19.06L14.5182 19.0581C14.0961 18.6021 13.75 18.0299 13.4775 17.3358L13.4209 17.1829Z" fill="black" fillOpacity="0.7" stroke="white" strokeWidth="0.6" />
							</svg>


							<div>
								<p id="click" className='font-montserrat font-semibold ..6x04:font-medium ..6x04:text-13px pt-2 .1x1:text-13px'>Скидка 35%</p>
								<p id="click" className='font-montserrat text-label-pink-2 ..6x04:mt-1 ..6x04:text-13px .1x1:text-13px'>1 532.30 ₽ </p>

							</div>

						</div>
						<div className="p-3">
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
							<p className='.2x1:text-10px font-montserrat .1x01:text-8px leading-140% text-11px font-normal flex items-center'>
								<svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.33301 10.0003H8.66634V11.3337H7.33301V10.0003ZM7.99968 2.66699C5.05968 2.66699 2.66634 5.06032 2.66634 8.00032C2.66634 10.9403 5.05968 13.3337 7.99968 13.3337C10.9397 13.3337 13.333 10.9403 13.333 8.00032C13.333 5.06032 10.9397 2.66699 7.99968 2.66699ZM7.99968 14.667C7.1242 14.667 6.25729 14.4946 5.44845 14.1595C4.63962 13.8245 3.90469 13.3334 3.28563 12.7144C2.03539 11.4641 1.33301 9.76843 1.33301 8.00032C1.33301 6.23221 2.03539 4.53652 3.28563 3.28628C3.90469 2.66722 4.63962 2.17616 5.44845 1.84112C6.25729 1.50609 7.1242 1.33366 7.99968 1.33365C9.76779 1.33366 11.4635 2.03603 12.7137 3.28628C13.964 4.53652 14.6663 6.23221 14.6663 8.00032C14.6663 8.8758 14.4939 9.74271 14.1589 10.5515C13.8238 11.3604 13.3328 12.0953 12.7137 12.7144C12.0947 13.3334 11.3597 13.8245 10.5509 14.1595C9.74206 14.4946 8.87516 14.667 7.99968 14.667ZM7.33301 4.66699H8.66634V8.66699H7.33301V4.66699Z" fill="black" />
								</svg>

								Второй и последующий заказы - 35% на всю сумму заказа!</p>
						</div>

					</div>
					<div onClick={(e) => setFilter('free', e)} className={` h-100px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.free ? 'activeSlide mb-3' : ''}`}>
						<div id="click" className={`flex ..6x04:pl-0 px-3 .1x1:pb-1 .1x1:pt-0 pt-2 ..5x1:pr-0 .1x1:mt-0 pb-4 items-center mt-5px relative ..6x04:pb-10px  border-b border-dashed border-gray ${dropDownds.free ? 'border-none pb-0' : ''}`}>
							<svg className={`absolute  .1x1:right-1  right-3 top-5 transition-all ${dropDownds.free ? 'prev_rotate ' : ''} `} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
							</svg>

							<svg id="click" className={`mr-4 absolute left-3 top-2.5 ..5x1:mr-1.5 ..6x04:hidden .1x1:top-0`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.1615 19.9048C25.8452 19.6313 26.1778 18.8554 25.9043 18.1716C25.6308 17.4879 24.8549 17.1554 24.1712 17.4289L23.4767 17.7066C22.793 17.9801 22.4604 18.7561 22.7339 19.4398C23.0074 20.1235 23.7834 20.4561 24.4671 20.1826L25.1615 19.9048Z" fill="black" fillOpacity="0.7" />
								<path d="M20.3004 21.8492C20.9841 21.5758 21.3167 20.7998 21.0432 20.1161C20.7697 19.4324 19.9938 19.0998 19.31 19.3733L17.9212 19.9289C17.2374 20.2023 16.9049 20.9783 17.1784 21.662C17.4519 22.3457 18.2278 22.6783 18.9115 22.4048L20.3004 21.8492Z" fill="black" fillOpacity="0.7" />
								<path d="M14.7449 24.0715C15.4286 23.798 15.7611 23.022 15.4876 22.3383C15.2142 21.6546 14.4382 21.322 13.7545 21.5955L12.3656 22.1511C11.6819 22.4246 11.3493 23.2005 11.6228 23.8842C11.8963 24.5679 12.6723 24.9005 13.356 24.627L14.7449 24.0715Z" fill="black" fillOpacity="0.7" />
								<path d="M9.18931 26.2937C9.87302 26.0202 10.2056 25.2442 9.93209 24.5605C9.6586 23.8768 8.88264 23.5443 8.19893 23.8177L7.50449 24.0955C6.82078 24.369 6.48822 25.145 6.7617 25.8287C7.03519 26.5124 7.81115 26.8449 8.49486 26.5715L9.18931 26.2937Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M5.33301 15.3335C5.33301 13.1244 7.12387 11.3335 9.33301 11.3335C11.5421 11.3335 13.333 13.1244 13.333 15.3335C13.333 16.1524 12.9865 17.0777 12.5256 17.9995C12.042 18.9667 11.3368 20.1119 10.4301 21.4246C10.1811 21.785 9.77103 22.0002 9.33301 22.0002C8.89498 22.0002 8.4849 21.785 8.23595 21.4246C7.32917 20.1119 6.62402 18.9667 6.14044 17.9995C5.67954 17.0777 5.33301 16.1524 5.33301 15.3335ZM9.33301 14.0002C8.59663 14.0002 7.99967 14.5971 7.99967 15.3335C7.99967 15.4964 8.09758 15.9509 8.52558 16.8069C8.73456 17.2249 9.00279 17.7013 9.33301 18.2376C9.66323 17.7013 9.93146 17.2249 10.1404 16.8069C10.5684 15.9509 10.6663 15.4964 10.6663 15.3335C10.6663 14.5971 10.0694 14.0002 9.33301 14.0002Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M22.6663 5.3335C20.4572 5.3335 18.6663 7.12436 18.6663 9.3335C18.6663 10.1524 19.0129 11.0777 19.4738 11.9995C19.9574 12.9667 20.6625 14.1119 21.5693 15.4246C21.8182 15.785 22.2283 16.0002 22.6663 16.0002C23.1044 16.0002 23.5145 15.785 23.7634 15.4246C24.6702 14.1119 25.3753 12.9667 25.8589 11.9995C26.3198 11.0777 26.6663 10.1524 26.6663 9.3335C26.6663 7.12436 24.8755 5.3335 22.6663 5.3335ZM21.333 9.3335C21.333 8.59712 21.93 8.00016 22.6663 8.00016C23.4027 8.00016 23.9997 8.59712 23.9997 9.3335C23.9997 9.49645 23.9018 9.95094 23.4738 10.8069C23.2648 11.2249 22.9966 11.7013 22.6663 12.2376C22.3361 11.7013 22.0679 11.2249 21.8589 10.8069C21.4309 9.95094 21.333 9.49645 21.333 9.3335Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M4.66634 1.3335C2.82539 1.3335 1.33301 2.82588 1.33301 4.66683V27.3335C1.33301 29.1744 2.82539 30.6668 4.66634 30.6668H27.333C29.174 30.6668 30.6663 29.1744 30.6663 27.3335V4.66683C30.6663 2.82588 29.174 1.3335 27.333 1.3335H4.66634ZM3.99967 4.66683C3.99967 4.29864 4.29815 4.00016 4.66634 4.00016H27.333C27.7012 4.00016 27.9997 4.29864 27.9997 4.66683V27.3335C27.9997 27.7017 27.7012 28.0002 27.333 28.0002H4.66634C4.29815 28.0002 3.99967 27.7017 3.99967 27.3335V4.66683Z" fill="black" fillOpacity="0.7" />
								<path d="M25.1615 19.9048C25.8452 19.6313 26.1778 18.8554 25.9043 18.1716C25.6308 17.4879 24.8549 17.1554 24.1712 17.4289L23.4767 17.7066C22.793 17.9801 22.4604 18.7561 22.7339 19.4398C23.0074 20.1235 23.7834 20.4561 24.4671 20.1826L25.1615 19.9048Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path d="M20.3004 21.8492C20.9841 21.5758 21.3167 20.7998 21.0432 20.1161C20.7697 19.4324 19.9938 19.0998 19.31 19.3733L17.9212 19.9289C17.2374 20.2023 16.9049 20.9783 17.1784 21.662C17.4519 22.3457 18.2278 22.6783 18.9115 22.4048L20.3004 21.8492Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path d="M14.7449 24.0715C15.4286 23.798 15.7611 23.022 15.4876 22.3383C15.2142 21.6546 14.4382 21.322 13.7545 21.5955L12.3656 22.1511C11.6819 22.4246 11.3493 23.2005 11.6228 23.8842C11.8963 24.5679 12.6723 24.9005 13.356 24.627L14.7449 24.0715Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path d="M9.18931 26.2937C9.87302 26.0202 10.2056 25.2442 9.93209 24.5605C9.6586 23.8768 8.88264 23.5443 8.19893 23.8177L7.50449 24.0955C6.82078 24.369 6.48822 25.145 6.7617 25.8287C7.03519 26.5124 7.81115 26.8449 8.49486 26.5715L9.18931 26.2937Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path fillRule="evenodd" clipRule="evenodd" d="M5.33301 15.3335C5.33301 13.1244 7.12387 11.3335 9.33301 11.3335C11.5421 11.3335 13.333 13.1244 13.333 15.3335C13.333 16.1524 12.9865 17.0777 12.5256 17.9995C12.042 18.9667 11.3368 20.1119 10.4301 21.4246C10.1811 21.785 9.77103 22.0002 9.33301 22.0002C8.89498 22.0002 8.4849 21.785 8.23595 21.4246C7.32917 20.1119 6.62402 18.9667 6.14044 17.9995C5.67954 17.0777 5.33301 16.1524 5.33301 15.3335ZM9.33301 14.0002C8.59663 14.0002 7.99967 14.5971 7.99967 15.3335C7.99967 15.4964 8.09758 15.9509 8.52558 16.8069C8.73456 17.2249 9.00279 17.7013 9.33301 18.2376C9.66323 17.7013 9.93146 17.2249 10.1404 16.8069C10.5684 15.9509 10.6663 15.4964 10.6663 15.3335C10.6663 14.5971 10.0694 14.0002 9.33301 14.0002Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path fillRule="evenodd" clipRule="evenodd" d="M22.6663 5.3335C20.4572 5.3335 18.6663 7.12436 18.6663 9.3335C18.6663 10.1524 19.0129 11.0777 19.4738 11.9995C19.9574 12.9667 20.6625 14.1119 21.5693 15.4246C21.8182 15.785 22.2283 16.0002 22.6663 16.0002C23.1044 16.0002 23.5145 15.785 23.7634 15.4246C24.6702 14.1119 25.3753 12.9667 25.8589 11.9995C26.3198 11.0777 26.6663 10.1524 26.6663 9.3335C26.6663 7.12436 24.8755 5.3335 22.6663 5.3335ZM21.333 9.3335C21.333 8.59712 21.93 8.00016 22.6663 8.00016C23.4027 8.00016 23.9997 8.59712 23.9997 9.3335C23.9997 9.49645 23.9018 9.95094 23.4738 10.8069C23.2648 11.2249 22.9966 11.7013 22.6663 12.2376C22.3361 11.7013 22.0679 11.2249 21.8589 10.8069C21.4309 9.95094 21.333 9.49645 21.333 9.3335Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path fillRule="evenodd" clipRule="evenodd" d="M4.66634 1.3335C2.82539 1.3335 1.33301 2.82588 1.33301 4.66683V27.3335C1.33301 29.1744 2.82539 30.6668 4.66634 30.6668H27.333C29.174 30.6668 30.6663 29.1744 30.6663 27.3335V4.66683C30.6663 2.82588 29.174 1.3335 27.333 1.3335H4.66634ZM3.99967 4.66683C3.99967 4.29864 4.29815 4.00016 4.66634 4.00016H27.333C27.7012 4.00016 27.9997 4.29864 27.9997 4.66683V27.3335C27.9997 27.7017 27.7012 28.0002 27.333 28.0002H4.66634C4.29815 28.0002 3.99967 27.7017 3.99967 27.3335V4.66683Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
							</svg>
							<svg id="click" className={`mr-3 ..6x04:block hidden `} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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


							<div className="ml-12">
								<p id="click" className='font-montserrat font-semibold ..6x04:text-13px    ..6x04:font-medium .1x1:text-13px'>Бесплатная доставка</p>
								<div className={`flex items-center  ${dropDownds.free ? 'flex-wrap' : ''}`}>
									<div id="click" className='flex items-center mb-6px'>
										<p id="click" className='..7x230:text-10px font-montserrat  text-13px font-normal mr-1 ..7x01:mr-0.5 ..6x04:text-11px .4x1:text-10px'>Курьер</p>
										<span id="click" className='..7x230:text-9px ..5x1:text-8px  rounded-xl ..7x230:px-1 .2x00:mr-0.5 .2x00:text-10px  ..6x04:text-10px ..7x01:mr-0.5 font-montserrat  text-13px mr-2 p-1 px-1.5 bg-primary-searchBG text-primary flex items-center'><svg className="mr-1 .4x1:hidden ..6x04:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.2498 4.08336L5.24984 11.0834L2.0415 7.87503L2.864 7.05253L5.24984 9.43253L11.4273 3.26086L12.2498 4.08336Z" fill="#337202" />
										</svg> от 2 500 ₽</span>
									</div>
									<div id="click" className={`${dropDownds.free ? 'mr-2' : ""} mb-6px flex items-center`}>
										<p id="click" className='font-montserrat  ..7x230:text-10px   text-13px font-normal mr-1  ..7x01:mr-0.5 ..6x04:text-11px .4x1:text-10px'>ПВЗ</p>
										<span id="click" className='..7x230:text-9px ..5x1:text-8px .2x00:text-10px rounded-xl .2x00:mr-0.5 ..7x230:px-1 ..6x04:text-10px ..7x01:mr-0.5 font-montserrat  text-13px mr-2 p-1 px-1.5 bg-primary-searchBG text-primary flex items-center' ><svg className="mr-1 .4x1:hidden ..6x04:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.2498 4.08336L5.24984 11.0834L2.0415 7.87503L2.864 7.05253L5.24984 9.43253L11.4273 3.26086L12.2498 4.08336Z" fill="#337202" />
										</svg>от 1 500 ₽</span>
									</div>
									<div id="click" className={`flex items-center mb-6px ${dropDownds.free ? 'block' : 'hidden'}`}>
										<p id="click" className='..7x230:text-10px font-montserrat  text-13px font-normal mr-1 ..7x01:mr-0.5 ..6x04:text-11px .4x1:text-10px'>Бутики</p>
										<span id="click" className='..7x230:text-9px  rounded-xl ..7x230:px-1 .2x00:mr-0.5 .2x00:text-10px  ..6x04:text-10px ..7x01:mr-0.5 font-montserrat  text-13px mr-2 p-1 px-1.5 bg-primary-searchBG text-primary flex items-center'><svg className="mr-1 .4x1:hidden  " width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.2498 4.08336L5.24984 11.0834L2.0415 7.87503L2.864 7.05253L5.24984 9.43253L11.4273 3.26086L12.2498 4.08336Z" fill="#337202" />
										</svg> от 0 ₽</span>
									</div>

									<button id="click" className={`${dropDownds.free ? 'hidden' : ""} -mt-1.5 p-1.5 h-27px ..5x1:text-8px px-3 ..7x230:text-9px ..7x230:px-1 .2x00:text-10px rounded-xl bg-primary-searchBG ..6x04:text-10px   text-11px font-montserrat text-black`}>ещё</button>



								</div>


							</div>
						</div>
						<div className={` px-4 pb-4 ${dropDownds.free ? 'block' : 'hidden'}`}>
							<div className="bg-white border border-stroke px-4 py-3">
								<div className="flex items-center   ">
									<div className="mr-3 -mt-6 relative">
										<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="30" height="30" rx="4" fill="#E8E9E7" />
											<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										</svg>
										<input type="checkbox" className="hidden" id="checkboxFree" />
										<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
											<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

											</div>
										</label>
									</div>

									<div className="flex border-b pb-3 border-dashed border-stroke items-center justify-between w-full">


										<div>
											<p className="font-montserrat mb-0.5 .2x00:text-xs">Курьерская</p>
											<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">2-3 дня</p>

											<SectionImgs drop={true} variant={'DostavkaDropDown'} adapt={true} noCenter={true} mr3={true} textImg={[yandex, pochtaRF, ozon, cdek]} />

										</div>
										<div>
											<p className="font-montserrat text-13px text-gray-quick-silver mb-0.5 .2x00:text-xs">Бесплатно от:</p>
											<p className="font-montserrat text-sm mb-6px .2x00:text-xs">2 500.00 ₽ </p>
											<p className="font-montserrat font-medium text-primary text-13px .2x00:text-xs">
												Подробнее
											</p>
										</div>
									</div>

								</div>
								<div className="flex items-center  pt-2 ">
									<div className="mr-3 -mt-6 relative">
										<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="30" height="30" rx="4" fill="#E8E9E7" />
											<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										</svg>
										<input type="checkbox" className="hidden" id="checkboxFree" />
										<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
											<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

											</div>
										</label>
									</div>

									<div className="flex border-b pb-3 border-dashed border-stroke items-center justify-between w-full">


										<div>
											<p className="font-montserrat mb-0.5 .2x00:text-xs">ПВЗ/постаматы</p>
											<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">4-6 дней</p>

											<SectionImgs variant={'DostavkaDropDown'} adapt={true} noCenter={true} mr3={true} textImg={[ozon, cdek, berry]} />

										</div>
										<div>
											<p className="font-montserrat text-13px text-gray-quick-silver mb-0.5 .2x00:text-xs">Бесплатно от:</p>
											<p className="font-montserrat text-sm mb-6px .2x00:text-xs">1 500.00 ₽  </p>
											<p className="font-montserrat font-medium text-primary text-13px .2x00:text-xs">
												На карте
											</p>
										</div>
									</div>

								</div>
								<div className="flex items-center  pt-2 ">
									<div className="mr-3 -mt-6 relative">
										<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="30" height="30" rx="4" fill="#E8E9E7" />
											<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										</svg>
										<input type="checkbox" className="hidden" id="checkboxFree" />
										<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
											<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

											</div>
										</label>
									</div>

									<div className="flex   pb-3  items-center justify-between w-full">


										<div>
											<p className="font-montserrat mb-0.5 .2x00:text-xs">Бутики TianDe</p>
											<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">4-6 дней</p>

											<div className="mt-6px flex items-center">
												<svg className="mr-0.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M14.1668 9.18849L14.2183 9.21945L14.3722 9.31195L14.1668 9.18849ZM14.1668 9.18849L14.1153 9.21945M14.1668 9.18849L14.1153 9.21945M14.1153 9.21945L13.9614 9.31195L14.1153 9.21945ZM7.82838 12.6054C7.46512 12.649 7.1835 12.9585 7.1835 13.3335V17.5002V17.6002H7.0835H4.16683H4.06683L4.06683 17.5002L4.06701 9.9089L4.06701 9.81945L4.1559 9.80952C4.66792 9.75231 5.17052 9.58648 5.62802 9.31198L7.82838 12.6054ZM7.82838 12.6054L7.91971 12.6002H12.0835C12.4885 12.6002 12.8168 12.9285 12.8168 13.3335V17.5002V17.6002H12.9168H15.8335H15.9335L15.9335 17.5002L15.9342 9.909L15.9342 9.81952L15.8452 9.80961C15.3329 9.75249 14.83 9.58663 14.3723 9.31199L7.82838 12.6054ZM16.6585 5.73266L16.6585 5.73283L16.6694 5.73347L16.6796 5.73339L16.6813 5.73336L17.5002 5.7335L17.6002 5.73351V5.8335V7.861V7.91743L17.5518 7.9466L17.3737 8.05415L17.3735 8.05429C16.6821 8.46916 15.8183 8.46916 15.1268 8.0543L14.5441 7.70467C14.3119 7.56533 14.0218 7.56533 13.7895 7.70467L13.2068 8.05429C12.5154 8.46916 11.6516 8.46916 10.9602 8.0543L10.3775 7.70467C10.1452 7.56533 9.8551 7.56533 9.62286 7.70467L9.04016 8.05429C8.34872 8.46916 7.48494 8.46916 6.79351 8.0543L6.21079 7.70467C5.97856 7.56533 5.68843 7.56533 5.4562 7.70467L4.87349 8.05429L4.87035 8.05618L4.87032 8.05612L4.73627 8.13001L4.73306 8.13178L4.73302 8.13172C4.06767 8.4673 3.27224 8.44151 2.62691 8.05433L16.6585 5.73266ZM16.6585 5.73266L16.6527 5.73266L2.50016 5.7335L2.40016 5.7335V5.8335V7.86183V7.91849L2.44877 7.94761L2.62685 8.0543L16.6585 5.73266ZM2.60045 9.71785L2.60045 9.64714L2.53378 9.62357C2.3685 9.56514 2.20644 9.49443 2.04897 9.41144L1.87108 9.31124L1.28954 8.96233C1.06865 8.8298 0.933496 8.59109 0.933496 8.3335V5.00016C0.933496 4.59515 1.26182 4.26683 1.66683 4.26683L1.66693 4.26683L2.50026 4.266L2.60016 4.2659V4.166V1.66683C2.60016 1.29178 2.8818 0.982366 3.24506 0.938764L3.33638 0.933496H16.6668C17.0419 0.933496 17.3513 1.21513 17.3949 1.5784L17.4002 1.66971V4.166V4.2659L17.5001 4.266L18.3334 4.26683H18.3335C18.7085 4.26683 19.018 4.54846 19.0616 4.91173L19.0668 5.00304V8.3335C19.0668 8.59109 18.9317 8.82979 18.7108 8.96232L18.1281 9.31194C17.9163 9.43901 17.6949 9.54278 17.4674 9.62328L17.4007 9.64686L17.4007 9.71755L17.4002 18.3335C17.4002 18.7085 17.1185 19.018 16.7553 19.0616L16.6639 19.0668H3.3335C2.95845 19.0668 2.64903 18.7852 2.60543 18.4219L2.60016 18.3306L2.60045 9.71785ZM5.78198 9.21945L5.62809 9.31195L9.79469 9.31198C8.69699 9.97058 7.33943 10.0037 6.21559 9.41142L6.03778 9.31127L5.88501 9.21945L5.8335 9.18849L5.78198 9.21945ZM9.94865 9.21945L9.79475 9.31195L13.9614 9.31198C12.8637 9.97058 11.5061 10.0037 10.3823 9.41142L10.2044 9.31126L10.0517 9.21945L10.0002 9.18849L9.94865 9.21945ZM11.3502 14.1668V14.0668H11.2502H8.75016H8.65016V14.1668V17.5002V17.6002H8.75016H11.2502H11.3502V17.5002V14.1668ZM15.9335 2.50016V2.40016H15.8335H4.16683H4.06683V2.50016V4.166V4.266H4.16683H15.8335H15.9335V4.166V2.50016Z" fill="black" fill-opacity="0.7" stroke="#FCFDFB" stroke-width="0.2" />
												</svg>
												<svg width="44" height="18" viewBox="0 0 44 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M40.3643 0.746872C40.5549 0.744986 40.742 0.797357 40.9038 0.897863C41.0619 0.994207 41.1914 1.13105 41.2788 1.29421C41.3715 1.46657 41.4197 1.65934 41.419 1.85504C41.42 2.05421 41.3719 2.25054 41.2788 2.42664C41.1917 2.58986 41.0633 2.72743 40.9065 2.82569C40.7447 2.92557 40.5572 2.97617 40.367 2.97129C40.1799 2.97312 39.9959 2.92387 39.8347 2.82884C39.6736 2.73381 39.5415 2.59661 39.4526 2.43204C39.3595 2.26078 39.3113 2.06879 39.3123 1.87391C39.311 1.6747 39.3592 1.47828 39.4526 1.3023C39.5411 1.13927 39.6703 1.00182 39.8275 0.903256C39.9897 0.803563 40.1766 0.751258 40.367 0.752266L40.3643 0.746872ZM40.3643 0.579701C40.1387 0.578457 39.9169 0.638075 39.7223 0.752266C39.5358 0.864498 39.3808 1.02221 39.2718 1.21063C39.1605 1.40815 39.1021 1.63103 39.1021 1.85773C39.1021 2.08444 39.1605 2.30732 39.2718 2.50484C39.3794 2.69654 39.536 2.85623 39.7256 2.96757C39.9152 3.0789 40.131 3.13788 40.3508 3.13846C40.5711 3.13987 40.7877 3.08173 40.9776 2.97019C41.1676 2.85865 41.3238 2.69786 41.4298 2.50484C41.5411 2.30732 41.5996 2.08444 41.5996 1.85773C41.5996 1.63103 41.5411 1.40815 41.4298 1.21063C41.3239 1.02262 41.1716 0.864826 40.9874 0.752266C40.7958 0.638235 40.5766 0.578573 40.3535 0.579701H40.3643ZM39.8518 2.66931H40.0649V1.9521H40.2672C40.3481 1.94986 40.4269 1.97773 40.4884 2.03029C40.5482 2.09896 40.5875 2.18305 40.6017 2.27296C40.6233 2.37811 40.6422 2.4617 40.661 2.54259C40.6726 2.58993 40.6889 2.63599 40.7096 2.68009H40.9416C40.9155 2.62803 40.8964 2.57272 40.8849 2.51562C40.8634 2.43743 40.8391 2.34306 40.8121 2.22712C40.7969 2.15052 40.7676 2.07739 40.7258 2.01142C40.6883 1.9567 40.6345 1.91519 40.572 1.89279C40.6572 1.85915 40.7324 1.80441 40.7905 1.73371C40.8517 1.65734 40.8842 1.56192 40.8822 1.46408C40.8818 1.40222 40.8699 1.34097 40.8472 1.28343C40.8246 1.23288 40.7925 1.18712 40.7528 1.14861C40.6969 1.09984 40.6304 1.06476 40.5585 1.04616C40.4651 1.02266 40.3689 1.01178 40.2726 1.0138C40.2007 1.0138 40.1278 1.0138 40.0541 1.0138C39.9813 1.0138 39.9192 1.02998 39.8626 1.04076V2.67201L39.8518 2.66931ZM40.0649 1.18636V1.79033H40.2834C40.3808 1.79523 40.4767 1.76457 40.5532 1.70405C40.5867 1.677 40.6132 1.64233 40.6306 1.60293C40.648 1.56352 40.6556 1.52053 40.653 1.47756C40.6563 1.4328 40.6485 1.3879 40.6301 1.34693C40.6118 1.30597 40.5834 1.27024 40.5478 1.24298C40.4686 1.18911 40.3736 1.16346 40.278 1.17018H40.1485L40.0676 1.18367L40.0649 1.18636ZM0.856934 10.6907L2.33246 10.6395V8.69007H3.17677V10.6044L5.03804 10.5397V11.2488L3.17677 11.1598V14.8349C3.17677 16.431 3.71627 17.124 5.03804 16.9919V17.4233C3.46001 17.4233 2.34055 16.884 2.34055 14.8376V11.1113L0.865026 11.0412V10.6907H0.856934ZM6.50547 8.69007H7.34169V9.64724H6.50547V8.69007ZM6.50547 10.5963H7.34169V17.3963H6.50547V10.5963ZM17.2954 10.5963H18.1316V11.9903C19.154 9.6823 23.3864 9.83329 23.3864 13.4301V17.3963H22.5528V13.4058C22.5528 10.4184 18.8168 10.1703 18.1316 12.9825V17.3963H17.2954V10.5963ZM31.7459 14.9373C32.2575 14.48 32.7106 13.961 33.0946 13.3924L43.0052 13.5191V12.7345L41.2923 12.7695C39.9004 9.57714 36.9763 8.5256 34.4811 9.06755C34.4811 8.91117 34.4811 8.75478 34.4811 8.5957C34.4811 3.81522 30.2514 0.428711 25.0399 0.428711V17.4502C27.184 17.4178 29.2697 16.7476 31.031 15.5251C33.046 17.825 38.0067 18.305 40.6044 15.4038L40.4048 15.2312C37.9177 17.4475 33.7906 17.523 31.754 14.9427L31.7459 14.9373ZM30.4214 13.0014L28.7274 13.0391V13.3357L32.3771 13.3816C31.6633 14.4007 30.7171 15.2354 29.6167 15.8168C28.5163 16.3982 27.2933 16.7094 26.0488 16.7249L26.0083 1.35623C30.122 1.58811 33.6611 5.29278 33.6611 9.24011V9.31291C32.851 9.60206 32.1283 10.0935 31.5617 10.7405C30.9951 11.3875 30.6035 12.1686 30.4241 13.0095L30.4214 13.0014ZM40.162 12.7938L33.359 12.9394C33.9206 11.9579 34.2776 10.8729 34.4083 9.7497C36.515 9.27516 38.9643 10.0193 40.162 12.7938ZM33.6314 9.98698C33.5279 11.0346 33.1965 12.0468 32.6603 12.9529L30.7936 12.9906C31.1012 11.6209 32.2314 10.5262 33.6314 9.98428V9.98698ZM9.62377 13.9774C9.62377 15.8406 10.754 17.0862 12.181 17.0862C13.608 17.0862 14.892 15.7165 14.892 13.9774C14.892 12.2384 13.5918 11.0116 12.181 11.0116C10.9698 11.0116 9.62377 12.0901 9.62377 13.9774ZM15.6527 17.3963H14.8299V15.9484C14.3579 16.9541 13.1575 17.5662 12.1567 17.5662C10.2496 17.5662 8.69044 16.2855 8.69044 13.9801C8.67647 13.5195 8.75628 13.0608 8.92501 12.6319C9.09374 12.203 9.34789 11.8128 9.67202 11.485C9.99616 11.1573 10.3835 10.8987 10.8106 10.7251C11.2378 10.5515 11.6957 10.4664 12.1567 10.475C12.6993 10.4676 13.2339 10.6064 13.7043 10.8768C14.1747 11.1473 14.5635 11.5393 14.8299 12.0119V10.5936H15.6634L15.6527 17.3963Z" fill="black" fill-opacity="0.7" />
												</svg>

											</div>

										</div>
										<div>
											<p className="font-montserrat text-13px text-gray-quick-silver mb-0.5 .2x00:text-xs">Бесплатно от:</p>
											<p className="font-montserrat text-sm mb-6px .2x00:text-xs">0.00 ₽  </p>
											<p className="font-montserrat font-medium text-primary text-13px .2x00:text-xs">
												На карте
											</p>
										</div>
									</div>

								</div>
							</div>

						</div>
					</div>

					<div onClick={(e) => setFilter('loal', e)} className={` h-80px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.loal ? 'activeSlide mb-3' : ''}`}>
						<div id="click" className={`flex px-3 ..6x04:pl-0  pt-2 .1x1:pt-0 .1x1:mt-0  items-center -mt-2 relative pb-4 border-b ..6x04:pb-10px  border-dashed border-gray ${dropDownds.loal ? 'border-none' : ""}`}>
							<svg id="click" className={`absolute transition-all .1x1:right-1  right-3 top-5 ..6x04:top-3 ${dropDownds.loal ? 'prev_rotate' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
							</svg>

							<svg id="click" className="mr-4 ..5x1:mr-1.5 ..6x04:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="16" cy="16" r="15" stroke="black" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" strokeDasharray="3 6 9 12" />
								<path d="M8 19.541C8.286 19.5237 8.48967 19.463 8.611 19.359C8.741 19.255 8.82333 19.099 8.858 18.891C8.89267 18.683 8.91 18.4187 8.91 18.098V12.69C8.91 12.4993 8.91433 12.3173 8.923 12.144C8.93167 11.962 8.94033 11.806 8.949 11.676C8.80167 11.6847 8.64133 11.6933 8.468 11.702C8.29467 11.7107 8.13867 11.7193 8 11.728V11.013L11.315 11C12.121 11 12.8447 11.104 13.486 11.312C14.1273 11.52 14.6733 11.8233 15.124 12.222C15.5747 12.612 15.917 13.0887 16.151 13.652C16.385 14.2153 16.502 14.8437 16.502 15.537C16.502 16.1177 16.4023 16.681 16.203 17.227C16.0037 17.773 15.696 18.2627 15.28 18.696C14.8727 19.1207 14.357 19.463 13.733 19.723C13.109 19.983 12.3723 20.113 11.523 20.113H8V19.541ZM10.288 18.384C10.288 18.618 10.2837 18.826 10.275 19.008C10.275 19.19 10.2663 19.3373 10.249 19.45C10.431 19.45 10.613 19.4543 10.795 19.463C10.977 19.463 11.1373 19.463 11.276 19.463C11.4233 19.463 11.5273 19.463 11.588 19.463C12.1253 19.463 12.602 19.3633 13.018 19.164C13.434 18.9647 13.785 18.6873 14.071 18.332C14.3657 17.9767 14.5867 17.565 14.734 17.097C14.89 16.629 14.968 16.1307 14.968 15.602C14.968 14.7527 14.8293 14.0333 14.552 13.444C14.2747 12.8547 13.8543 12.404 13.291 12.092C12.7363 11.78 12.043 11.6197 11.211 11.611C10.925 11.611 10.717 11.663 10.587 11.767C10.457 11.8623 10.3747 12.014 10.34 12.222C10.3053 12.43 10.288 12.6943 10.288 13.015V18.384Z" fill="black" fillOpacity="0.7" />
								<path d="M20.24 20.321C19.6333 20.321 19.0873 20.1823 18.602 19.905C18.1253 19.619 17.7483 19.2203 17.471 18.709C17.1937 18.189 17.055 17.578 17.055 16.876C17.055 16.2693 17.1893 15.7017 17.458 15.173C17.7353 14.6443 18.121 14.2197 18.615 13.899C19.109 13.5697 19.681 13.405 20.331 13.405C20.695 13.405 21.0373 13.4613 21.358 13.574C21.6873 13.6867 21.9777 13.8643 22.229 14.107C22.489 14.341 22.6927 14.6487 22.84 15.03C22.9873 15.4027 23.061 15.8577 23.061 16.395L18.589 16.473C18.589 17.0623 18.654 17.5867 18.784 18.046C18.9227 18.5053 19.1437 18.8607 19.447 19.112C19.7503 19.3633 20.1447 19.489 20.63 19.489C20.864 19.489 21.111 19.45 21.371 19.372C21.6397 19.2853 21.891 19.164 22.125 19.008C22.3677 18.852 22.5713 18.6657 22.736 18.449L23.139 18.8C22.879 19.19 22.58 19.4977 22.242 19.723C21.904 19.9397 21.5573 20.0913 21.202 20.178C20.8553 20.2733 20.5347 20.321 20.24 20.321ZM18.641 15.797H21.644C21.644 15.4677 21.5963 15.173 21.501 14.913C21.4143 14.6443 21.2757 14.432 21.085 14.276C20.8943 14.12 20.6517 14.042 20.357 14.042C19.8977 14.042 19.5207 14.1893 19.226 14.484C18.9313 14.77 18.7363 15.2077 18.641 15.797Z" fill="black" fillOpacity="0.7" />
								<path d="M7.9 19.4469L7.99395 19.4412C8.27341 19.4242 8.44984 19.3654 8.54592 19.2831L8.54849 19.2809L8.54853 19.2809C8.65457 19.1961 8.72763 19.065 8.75936 18.8746C8.79278 18.674 8.81 18.4157 8.81 18.098V12.69L7.9 19.4469ZM7.9 19.4469V19.541M7.9 19.4469V19.541M7.9 19.541V20.113V20.213H8H11.523C12.3823 20.213 13.1326 20.0815 13.7715 19.8153C14.4063 19.5508 14.934 19.2012 15.3522 18.7652M7.9 19.541L15.28 18.696M15.1898 12.1467C14.7278 11.7381 14.1695 11.4285 13.5169 11.2169C12.8638 11.0051 12.1295 10.9 11.315 10.9L11.3146 10.9L7.99961 10.913L7.9 10.9134V11.013V11.728V11.8344L8.00624 11.8278C8.1444 11.8192 8.29998 11.8105 8.47299 11.8019C8.60332 11.7954 8.72635 11.7888 8.84208 11.7823L15.124 12.222M15.1898 12.1467C15.19 12.1469 15.1901 12.147 15.1903 12.1471L15.124 12.222M15.1898 12.1467C15.1897 12.1466 15.1896 12.1465 15.1894 12.1464L15.124 12.222M15.1898 12.1467C15.6523 12.5471 16.0036 13.0365 16.2434 13.6136C16.483 14.1907 16.602 14.8323 16.602 15.537C16.602 16.1294 16.5003 16.7043 16.2969 17.2613C16.0927 17.8208 15.7774 18.3222 15.3522 18.7652M15.124 12.222C15.5747 12.612 15.917 13.0887 16.151 13.652C16.385 14.2153 16.502 14.8437 16.502 15.537C16.502 16.1177 16.4023 16.681 16.203 17.227C16.0037 17.773 15.696 18.2627 15.28 18.696M15.3522 18.7652L15.28 18.696M15.3522 18.7652C15.3522 18.7652 15.3521 18.7652 15.3521 18.7653L15.28 18.696M18.5505 19.9908L18.5506 19.9908C18.0578 19.6951 17.6685 19.283 17.3831 18.7567L17.3828 18.7561C17.0964 18.219 16.955 17.5913 16.955 16.876C16.955 16.254 17.0929 15.6707 17.3689 15.1277L17.3694 15.1265C17.6545 14.5831 18.0517 14.1456 18.56 13.8155C19.0719 13.4744 19.6634 13.305 20.331 13.305C20.7053 13.305 21.0588 13.3629 21.3908 13.4795C21.7333 13.5968 22.0358 13.7818 22.2972 14.0339C22.57 14.2798 22.7814 14.6009 22.9332 14.9936M18.5505 19.9908L22.229 14.107C22.489 14.341 22.6927 14.6487 22.84 15.03C22.9873 15.4027 23.061 15.8577 23.061 16.395L18.589 16.473M18.5505 19.9908L18.5524 19.9918C19.0541 20.2785 19.6175 20.421 20.24 20.421C20.5449 20.421 20.8742 20.3718 21.2271 20.2748M18.5505 19.9908L21.3413 19.2765M22.9332 14.9936C22.9332 14.9937 22.9332 14.9939 22.9333 14.994L22.84 15.03L22.933 14.9932C22.9331 14.9934 22.9331 14.9935 22.9332 14.9936ZM22.9332 14.9936C23.0863 15.3812 23.161 15.8493 23.161 16.395V16.4933L23.0627 16.495L18.6896 16.5713M18.6896 16.5713C18.6892 16.5387 18.689 16.506 18.689 16.473H18.589M18.6896 16.5713C18.6965 17.1129 18.7603 17.5949 18.88 18.0179C19.0142 18.4622 19.2258 18.7989 19.5108 19.035C19.7923 19.2683 20.1624 19.389 20.63 19.389C20.8526 19.389 21.0895 19.352 21.3413 19.2765M18.6896 16.5713L18.5907 16.573L18.589 16.473M18.589 16.473C18.589 17.0623 18.654 17.5867 18.784 18.046C18.9227 18.5053 19.1437 18.8607 19.447 19.112C19.7503 19.3633 20.1447 19.489 20.63 19.489C20.864 19.489 21.111 19.45 21.371 19.372C21.6397 19.2853 21.891 19.164 22.125 19.008C22.3379 18.8711 22.5208 18.7109 22.6737 18.5273L22.6703 18.5244L22.736 18.449L22.8156 18.5095C22.8143 18.5113 22.8129 18.5131 22.8116 18.5148M22.8116 18.5148L23.139 18.8C22.879 19.19 22.58 19.4977 22.242 19.723C21.904 19.9397 21.5573 20.0913 21.202 20.178M22.8116 18.5148L18.615 13.899C18.121 14.2197 17.7353 14.6443 17.458 15.173C17.1893 15.7017 17.055 16.2693 17.055 16.876C17.055 17.578 17.1937 18.189 17.471 18.709C17.7483 19.2203 18.1253 19.619 18.602 19.905C19.0873 20.1823 19.6333 20.321 20.24 20.321C20.5347 20.321 20.8553 20.2733 21.202 20.178M22.8116 18.5148L21.3413 19.2765M21.202 20.178L21.2257 20.2752C21.2262 20.275 21.2266 20.2749 21.2271 20.2748M21.202 20.178L21.2285 20.2744C21.2281 20.2745 21.2276 20.2747 21.2271 20.2748M21.2271 20.2748C21.5937 20.1852 21.95 20.029 22.296 19.8072L22.296 19.8072L22.2975 19.8062C22.648 19.5725 22.956 19.2548 23.2222 18.8555L23.271 18.7823L23.2047 18.7246L22.8017 18.3736L22.7211 18.3034L22.6564 18.3885C22.4992 18.5953 22.3044 18.7738 22.0709 18.9239L22.0709 18.9239L22.0695 18.9248C21.8435 19.0755 21.6008 19.1927 21.3413 19.2765M13.994 18.2682L13.994 18.2682L13.9931 18.2693C13.7166 18.6129 13.3775 18.8809 12.9748 19.0738C12.5743 19.2657 12.1128 19.363 11.588 19.363H11.5876H11.5873H11.5869H11.5866H11.5862H11.5858H11.5855H11.5851H11.5848H11.5844H11.584H11.5837H11.5833H11.5829H11.5826H11.5822H11.5818H11.5814H11.5811H11.5807H11.5803H11.5799H11.5796H11.5792H11.5788H11.5784H11.578H11.5777H11.5773H11.5769H11.5765H11.5761H11.5757H11.5753H11.575H11.5746H11.5742H11.5738H11.5734H11.573H11.5726H11.5722H11.5718H11.5714H11.571H11.5706H11.5702H11.5698H11.5694H11.569H11.5686H11.5682H11.5678H11.5674H11.5669H11.5665H11.5661H11.5657H11.5653H11.5649H11.5645H11.5641H11.5636H11.5632H11.5628H11.5624H11.562H11.5615H11.5611H11.5607H11.5603H11.5598H11.5594H11.559H11.5586H11.5581H11.5577H11.5573H11.5568H11.5564H11.556H11.5555H11.5551H11.5546H11.5542H11.5538H11.5533H11.5529H11.5524H11.552H11.5515H11.5511H11.5507H11.5502H11.5498H11.5493H11.5489H11.5484H11.5479H11.5475H11.547H11.5466H11.5461H11.5457H11.5452H11.5447H11.5443H11.5438H11.5434H11.5429H11.5424H11.542H11.5415H11.541H11.5406H11.5401H11.5396H11.5391H11.5387H11.5382H11.5377H11.5373H11.5368H11.5363H11.5358H11.5353H11.5349H11.5344H11.5339H11.5334H11.5329H11.5324H11.532H11.5315H11.531H11.5305H11.53H11.5295H11.529H11.5285H11.528H11.5275H11.527H11.5265H11.526H11.5255H11.525H11.5245H11.524H11.5235H11.523H11.5225H11.522H11.5215H11.521H11.5205H11.52H11.5195H11.5189H11.5184H11.5179H11.5174H11.5169H11.5164H11.5158H11.5153H11.5148H11.5143H11.5138H11.5132H11.5127H11.5122H11.5117H11.5111H11.5106H11.5101H11.5095H11.509H11.5085H11.5079H11.5074H11.5069H11.5063H11.5058H11.5053H11.5047H11.5042H11.5036H11.5031H11.5026H11.502H11.5015H11.5009H11.5004H11.4998H11.4993H11.4987H11.4982H11.4976H11.4971H11.4965H11.496H11.4954H11.4948H11.4943H11.4937H11.4932H11.4926H11.492H11.4915H11.4909H11.4904H11.4898H11.4892H11.4887H11.4881H11.4875H11.4869H11.4864H11.4858H11.4852H11.4846H11.4841H11.4835H11.4829H11.4823H11.4818H11.4812H11.4806H11.48H11.4794H11.4788H11.4783H11.4777H11.4771H11.4765H11.4759H11.4753H11.4747H11.4741H11.4735H11.4729H11.4723H11.4717H11.4711H11.4705H11.4699H11.4693H11.4687H11.4681H11.4675H11.4669H11.4663H11.4657H11.4651H11.4645H11.4639H11.4633H11.4627H11.4621H11.4614H11.4608H11.4602H11.4596H11.459H11.4584H11.4577H11.4571H11.4565H11.4559H11.4552H11.4546H11.454H11.4534H11.4527H11.4521H11.4515H11.4509H11.4502H11.4496H11.449H11.4483H11.4477H11.447H11.4464H11.4458H11.4451H11.4445H11.4439H11.4432H11.4426H11.4419H11.4413H11.4406H11.44H11.4393H11.4387H11.438H11.4374H11.4367H11.4361H11.4354H11.4348H11.4341H11.4335H11.4328H11.4321H11.4315H11.4308H11.4301H11.4295H11.4288H11.4282H11.4275H11.4268H11.4262H11.4255H11.4248H11.4241H11.4235H11.4228H11.4221H11.4214H11.4208H11.4201H11.4194H11.4187H11.4181H11.4174H11.4167H11.416H11.4153H11.4146H11.414H11.4133H11.4126H11.4119H11.4112H11.4105H11.4098H11.4091H11.4084H11.4077H11.407H11.4063H11.4056H11.4049H11.4042H11.4035H11.4028H11.4021H11.4014H11.4007H11.4H11.3993H11.3986H11.3979H11.3972H11.3965H11.3958H11.395H11.3943H11.3936H11.3929H11.3922H11.3915H11.3907H11.39H11.3893H11.3886H11.3879H11.3871H11.3864H11.3857H11.385H11.3842H11.3835H11.3828H11.382H11.3813H11.3806H11.3798H11.3791H11.3784H11.3776H11.3769H11.3762H11.3754H11.3747H11.3739H11.3732H11.3725H11.3717H11.371H11.3702H11.3695H11.3687H11.368H11.3672H11.3665H11.3657H11.365H11.3642H11.3635H11.3627H11.3619H11.3612H11.3604H11.3597H11.3589H11.3581H11.3574H11.3566H11.3558H11.3551H11.3543H11.3535H11.3528H11.352H11.3512H11.3505H11.3497H11.3489H11.3481H11.3474H11.3466H11.3458H11.345H11.3442H11.3435H11.3427H11.3419H11.3411H11.3403H11.3395H11.3387H11.338H11.3372H11.3364H11.3356H11.3348H11.334H11.3332H11.3324H11.3316H11.3308H11.33H11.3292H11.3284H11.3276H11.3268H11.326H11.3252H11.3244H11.3236H11.3228H11.322H11.3212H11.3204H11.3195H11.3187H11.3179H11.3171H11.3163H11.3155H11.3147H11.3138H11.313H11.3122H11.3114H11.3106H11.3097H11.3089H11.3081H11.3073H11.3064H11.3056H11.3048H11.3039H11.3031H11.3023H11.3015H11.3006H11.2998H11.2989H11.2981H11.2973H11.2964H11.2956H11.2948H11.2939H11.2931H11.2922H11.2914H11.2905H11.2897H11.2888H11.288H11.2871H11.2863H11.2854H11.2846H11.2837H11.2829H11.282H11.2812H11.2803H11.2794H11.2786H11.2777H11.2769H11.276H11.2752H11.2744H11.2736H11.2727H11.2719H11.2711H11.2703H11.2695H11.2687H11.2679H11.267H11.2662H11.2654H11.2646H11.2638H11.2629H11.2621H11.2613H11.2605H11.2597H11.2588H11.258H11.2572H11.2564H11.2555H11.2547H11.2539H11.2531H11.2522H11.2514H11.2506H11.2497H11.2489H11.2481H11.2473H11.2464H11.2456H11.2448H11.2439H11.2431H11.2423H11.2414H11.2406H11.2398H11.2389H11.2381H11.2373H11.2364H11.2356H11.2348H11.2339H11.2331H11.2322H11.2314H11.2306H11.2297H11.2289H11.228H11.2272H11.2264H11.2255H11.2247H11.2238H11.223H11.2221H11.2213H11.2204H11.2196H11.2188H11.2179H11.2171H11.2162H11.2154H11.2145H11.2137H11.2128H11.212H11.2111H11.2103H11.2094H11.2086H11.2077H11.2069H11.206H11.2051H11.2043H11.2034H11.2026H11.2017H11.2009H11.2H11.1992H11.1983H11.1974H11.1966H11.1957H11.1949H11.194H11.1931H11.1923H11.1914H11.1905H11.1897H11.1888H11.188H11.1871H11.1862H11.1854H11.1845H11.1836H11.1828H11.1819H11.181H11.1802H11.1793H11.1784H11.1775H11.1767H11.1758H11.1749H11.1741H11.1732H11.1723H11.1714H11.1706H11.1697H11.1688H11.1679H11.1671H11.1662H11.1653H11.1644H11.1636H11.1627H11.1618H11.1609H11.16H11.1592H11.1583H11.1574H11.1565H11.1556H11.1547H11.1539H11.153H11.1521H11.1512H11.1503H11.1494H11.1485H11.1477H11.1468H11.1459H11.145H11.1441H11.1432H11.1423H11.1414H11.1405H11.1397H11.1388H11.1379H11.137H11.1361H11.1352H11.1343H11.1334H11.1325H11.1316H11.1307H11.1298H11.1289H11.128H11.1271H11.1262H11.1253H11.1244H11.1235H11.1226H11.1217H11.1208H11.1199H11.119H11.1181H11.1172H11.1163H11.1154H11.1145H11.1136H11.1127H11.1118H11.1109H11.11H11.109H11.1081H11.1072H11.1063H11.1054H11.1045H11.1036H11.1027H11.1018H11.1008H11.0999H11.099H11.0981H11.0972H11.0963H11.0954H11.0944H11.0935H11.0926H11.0917H11.0908H11.0899H11.0889H11.088H11.0871H11.0862H11.0852H11.0843H11.0834H11.0825H11.0816H11.0806H11.0797H11.0788H11.0779H11.0769H11.076H11.0751H11.0742H11.0732H11.0723H11.0714H11.0704H11.0695H11.0686H11.0676H11.0667H11.0658H11.0649H11.0639H11.063H11.0621H11.0611H11.0602H11.0592H11.0583H11.0574H11.0564H11.0555H11.0546H11.0536H11.0527H11.0517H11.0508H11.0499H11.0489H11.048H11.047H11.0461H11.0452H11.0442H11.0433H11.0423H11.0414H11.0404H11.0395H11.0385H11.0376H11.0367H11.0357H11.0348H11.0338H11.0329H11.0319H11.031H11.03H11.0291H11.0281H11.0272H11.0262H11.0253H11.0243H11.0233H11.0224H11.0214H11.0205H11.0195H11.0186H11.0176H11.0167H11.0157H11.0147H11.0138H11.0128H11.0119H11.0109H11.0099H11.009H11.008H11.007H11.0061H11.0051H11.0042H11.0032H11.0022H11.0013H11.0003H10.9993H10.9984H10.9974H10.9964H10.9955H10.9945H10.9935H10.9926H10.9916H10.9906H10.9896H10.9887H10.9877H10.9867H10.9857H10.9848H10.9838H10.9828H10.9818H10.9809H10.9799H10.9789H10.9779H10.977H10.976H10.975H10.974H10.973H10.9721H10.9711H10.9701H10.9691H10.9681H10.9672H10.9662H10.9652H10.9642H10.9632H10.9622H10.9613H10.9603H10.9593H10.9583H10.9573H10.9563H10.9553H10.9543H10.9533H10.9524H10.9514H10.9504H10.9494H10.9484H10.9474H10.9464H10.9454H10.9444H10.9434H10.9424H10.9414H10.9404H10.9394H10.9384H10.9374H10.9364H10.9354H10.9344H10.9334H10.9324H10.9314H10.9304H10.9294H10.9284H10.9274H10.9264H10.9254H10.9244H10.9234H10.9224H10.9214H10.9204H10.9194H10.9184H10.9174H10.9164H10.9154H10.9144H10.9133H10.9123H10.9113H10.9103H10.9093H10.9083H10.9073H10.9063H10.9053H10.9042H10.9032H10.9022H10.9012H10.9002H10.8992H10.8981H10.8971H10.8961H10.8951H10.8941H10.8931H10.892H10.891H10.89H10.889H10.8879H10.8869H10.8859H10.8849H10.8839H10.8828H10.8818H10.8808H10.8798H10.8787H10.8777H10.8767H10.8756H10.8746H10.8736H10.8726H10.8715H10.8705H10.8695H10.8684H10.8674H10.8664H10.8653H10.8643H10.8633H10.8622H10.8612H10.8602H10.8591H10.8581H10.8571H10.856H10.855H10.8539H10.8529H10.8519H10.8508H10.8498H10.8487H10.8477H10.8467H10.8456H10.8446H10.8435H10.8425H10.8414H10.8404H10.8394H10.8383H10.8373H10.8362H10.8352H10.8341H10.8331H10.832H10.831H10.8299H10.8289H10.8278H10.8268H10.8257H10.8247H10.8236H10.8226H10.8215H10.8205H10.8194H10.8183H10.8173H10.8162H10.8152H10.8141H10.8131H10.812H10.8109H10.8099H10.8088H10.8078H10.8067H10.8056H10.8046H10.8035H10.8025H10.8014H10.8003H10.7993H10.7982H10.7974C10.6521 19.3561 10.5069 19.352 10.3616 19.3505C10.3706 19.253 10.3749 19.1394 10.375 19.0104C10.3837 18.827 10.388 18.6182 10.388 18.384V13.015C10.388 12.6973 10.4052 12.439 10.4386 12.2384C10.4704 12.048 10.543 11.9232 10.6461 11.8476L10.6462 11.8477L10.6495 11.8451C10.7528 11.7624 10.9327 11.7111 11.2105 11.711C12.0304 11.7196 12.7059 11.8776 13.242 12.1792L13.2425 12.1795C13.7873 12.4812 14.193 12.916 14.4615 13.4866C14.731 14.0592 14.868 14.7631 14.868 15.602C14.868 16.1207 14.7915 16.6083 14.6391 17.0654L14.6391 17.0654L14.6386 17.067C14.4949 17.5234 14.2799 17.9234 13.994 18.2682ZM21.4058 14.9437L21.4058 14.9437L21.4071 14.9474C21.4882 15.1685 21.5337 15.418 21.5425 15.697H18.7602C18.8593 15.1797 19.0407 14.8032 19.2956 14.5558L19.2957 14.5558L19.2967 14.5547C19.5706 14.2808 19.9212 14.142 20.357 14.142C20.6333 14.142 20.8522 14.2147 21.0217 14.3534C21.1954 14.4955 21.3242 14.6906 21.4058 14.9437Z" stroke="black" strokeOpacity="0.7" strokeWidth="0.2" />
							</svg>
							<svg id="click" className="mr-3 ..6x04:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="15" cy="15" r="11.6875" stroke="white" strokeOpacity="0.8" />
								<circle cx="15" cy="15" r="14.25" stroke="black" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" strokeDasharray="3 6 9 12" />
								<path d="M7.5 18.3197C7.76813 18.3034 7.95906 18.2466 8.07281 18.1491C8.19469 18.0516 8.27188 17.9053 8.30438 17.7103C8.33688 17.5153 8.35313 17.2675 8.35313 16.9669V11.8969C8.35313 11.7181 8.35719 11.5475 8.36531 11.385C8.37344 11.2144 8.38156 11.0681 8.38969 10.9462C8.25156 10.9544 8.10125 10.9625 7.93875 10.9706C7.77625 10.9788 7.63 10.9869 7.5 10.995V10.3247L10.6078 10.3125C11.3634 10.3125 12.0419 10.41 12.6431 10.605C13.2444 10.8 13.7563 11.0844 14.1788 11.4581C14.6013 11.8237 14.9222 12.2706 15.1416 12.7988C15.3609 13.3269 15.4706 13.9159 15.4706 14.5659C15.4706 15.1103 15.3772 15.6384 15.1903 16.1503C15.0034 16.6622 14.715 17.1213 14.325 17.5275C13.9431 17.9256 13.4597 18.2466 12.8747 18.4903C12.2897 18.7341 11.5991 18.8559 10.8028 18.8559H7.5V18.3197ZM9.645 17.235C9.645 17.4544 9.64094 17.6494 9.63281 17.82C9.63281 17.9906 9.62469 18.1288 9.60844 18.2344C9.77906 18.2344 9.94969 18.2384 10.1203 18.2466C10.2909 18.2466 10.4413 18.2466 10.5713 18.2466C10.7094 18.2466 10.8069 18.2466 10.8638 18.2466C11.3675 18.2466 11.8144 18.1531 12.2044 17.9663C12.5944 17.7794 12.9234 17.5194 13.1916 17.1863C13.4678 16.8531 13.675 16.4672 13.8131 16.0284C13.9594 15.5897 14.0325 15.1225 14.0325 14.6269C14.0325 13.8306 13.9025 13.1563 13.6425 12.6038C13.3825 12.0513 12.9884 11.6287 12.4603 11.3362C11.9403 11.0437 11.2903 10.8934 10.5103 10.8853C10.2422 10.8853 10.0472 10.9341 9.92531 11.0316C9.80344 11.1209 9.72625 11.2631 9.69375 11.4581C9.66125 11.6531 9.645 11.9009 9.645 12.2016V17.235Z" fill="black" fillOpacity="0.7" />
								<path d="M18.975 19.0509C18.4062 19.0509 17.8944 18.9209 17.4394 18.6609C16.9925 18.3928 16.6391 18.0191 16.3791 17.5397C16.1191 17.0522 15.9891 16.4794 15.9891 15.8213C15.9891 15.2525 16.115 14.7203 16.3669 14.2247C16.6269 13.7291 16.9884 13.3309 17.4516 13.0303C17.9147 12.7216 18.4509 12.5672 19.0603 12.5672C19.4016 12.5672 19.7225 12.62 20.0231 12.7256C20.3319 12.8313 20.6041 12.9978 20.8397 13.2253C21.0834 13.4447 21.2744 13.7331 21.4125 14.0906C21.5506 14.44 21.6197 14.8666 21.6197 15.3703L17.4272 15.4434C17.4272 15.9959 17.4881 16.4875 17.61 16.9181C17.74 17.3488 17.9472 17.6819 18.2316 17.9175C18.5159 18.1531 18.8856 18.2709 19.3406 18.2709C19.56 18.2709 19.7916 18.2344 20.0353 18.1613C20.2872 18.08 20.5228 17.9663 20.7422 17.82C20.9697 17.6738 21.1606 17.4991 21.315 17.2959L21.6928 17.625C21.4491 17.9906 21.1688 18.2791 20.8519 18.4903C20.535 18.6934 20.21 18.8356 19.8769 18.9169C19.5519 19.0063 19.2513 19.0509 18.975 19.0509ZM17.4759 14.8097H20.2913C20.2913 14.5009 20.2466 14.2247 20.1572 13.9809C20.0759 13.7291 19.9459 13.53 19.7672 13.3837C19.5884 13.2375 19.3609 13.1644 19.0847 13.1644C18.6541 13.1644 18.3006 13.3025 18.0244 13.5788C17.7481 13.8469 17.5653 14.2572 17.4759 14.8097Z" fill="black" fillOpacity="0.7" />
							</svg>


							<div>
								<p id="click" className='font-montserrat font-semibold ..6x04:text-13px  ..6x04:font-medium .1x1:text-13px '>Программа лояльности</p>
								<p id="click" className='font-lora font-medium text-gray-quick-silver ..6x04:text-13px .1x1:text-13px '>De<span id="click" className=' font-normal font-montserrat'>-счёт:</span> <span className='font-montserrat  font-normal text-label-orange '>9 000 De</span></p>

							</div>
						</div>
						<div className={`p-4 pt-0 ${dropDownds.loal ? 'block' : "hidden"}`}>
							<div className="bg-white border p-3 border-gray">
								<p className="font-montserrat text-13px uppercase text-gray-quick-silver mb-2 .2x00:text-xs">Место получения заказа:</p>
								<div>
									<div className="flex items-center   ">
										<div className="mr-3  -mt-4 relative">
											<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="30" height="30" rx="4" fill="#E8E9E7" />
												<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
												<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											</svg>
											<input type="checkbox" className="hidden" id="checkboxFree" />
											<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
												<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

												</div>
											</label>
										</div>

										<div className="flex border-b pb-3 border-dashed border-stroke items-center justify-between w-full">


											<div>
												<p className="font-montserrat mb-1 .2x00:text-xs">Online Bisiness Center</p>
												<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">Товары будут оформлены в текущем заказе</p>


											</div>

										</div>

									</div>
									<div className="flex border-b border-stroke first-letter:  mt-2 ">
										<div className="mr-3 mt-2 relative">
											<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="30" height="30" rx="4" fill="#E8E9E7" />
												<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
												<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											</svg>
											<input type="checkbox" className="hidden" id="checkboxFree" />
											<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
												<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

												</div>
											</label>
										</div>

										<div className="flex   pb-4   items-center justify-between w-full">


											<div>
												<p className="font-montserrat mb-6px .2x00:text-xs">Бутик TianDe: </p>
												<p className="font-noto-sans text-13px mb-6px font-medium to-black-70pe .2x00:text-xs">Респ. Татарстан, Казань, Московская ул., №31 оф. 217 </p>

												<p className="font-medium text-13px text-black-70pe font-montserrat .2x00:text-xs">Товары будут оформлены отдельно от корзины</p>
											</div>

										</div>

									</div>
								</div>
								<div className="mt-3">
									<div className="flex mb-2 items-center justify-between">
										<p className="font-montserrat text-black-70pe .2x00:text-xs">В корзине:</p>
										<p className="font-montserrat .2x00:text-xs">3 750 <span className="font-lora">De</span></p>
									</div>
									<div className="flex items-center justify-between">
										<p className="font-montserrat text-black-70pe .2x00:text-xs">Доступно:</p>
										<p className="font-montserrat .2x00:text-xs">5 080 <span className="font-lora">De</span></p>
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center mt-3">
								<p className="font-montserrat text-sm text-gray-quick-silver .2x00:text-xs .4x11:mr-1 .4x11:text-11px">Минимальная сумма: от 1 500 ₽ </p>
								<button className="h-11 bg-gray-light2 rounded px-5 flex items-center font-lora text-label-orange text-xs font-medium .4x11:text-9px">De- каталог</button>
							</div>


						</div>
					</div>

					<div onClick={(e) => setFilter('promo', e)} className={` h-80px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.promo ? 'activeSlide' : ''}`}>
						<div id="click" className={`flex px-3 ..6x04:pl-0 pt-6px .1x1:pb-4 items-center   relative pb-6 border-b ..6x04:pb-10px ${dropDownds.promo ? 'border-none' : ''} border-dashed border-gray `}>
							<svg className={`absolute right-3 top-3 .1x1:right-1 ..6x04:top-1 transition-all ${dropDownds.promo ? 'prev_rotate' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
							</svg>

							<svg id="click" className="mr-4 ..5x1:mr-1.5 ..6x04:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<mask id="path-1-inside-1_2812_671857" fill="white">
									<path fillRule="evenodd" clipRule="evenodd" d="M3.2002 4.53335C3.2002 3.79697 3.79715 3.20001 4.53353 3.20001H16.5335C16.8871 3.20001 17.2263 3.34049 17.4763 3.59054L28.2585 14.3727C29.706 15.8289 29.706 18.1806 28.2585 19.6368L28.2557 19.6396L19.6523 28.243C18.9521 28.9438 18.0015 29.3379 17.0109 29.3379C16.02 29.3379 15.0699 28.9441 14.3696 28.2431L3.59124 17.4767C3.34088 17.2266 3.2002 16.8872 3.2002 16.5333V4.53335ZM5.86686 5.86668V15.9806L16.2562 26.3584C16.4564 26.5588 16.7278 26.6713 17.0109 26.6713C17.2941 26.6713 17.5656 26.5587 17.7656 26.3585L26.3673 17.7567L26.3685 17.7555C26.7805 17.3398 26.7805 16.6697 26.3685 16.254L26.3673 16.2528L15.9812 5.86668H5.86686Z" />
									<path fillRule="evenodd" clipRule="evenodd" d="M11.5335 13.2C12.454 13.2 13.2002 12.4538 13.2002 11.5333C13.2002 10.6129 12.454 9.86668 11.5335 9.86668C10.6131 9.86668 9.86686 10.6129 9.86686 11.5333C9.86686 12.4538 10.6131 13.2 11.5335 13.2Z" />
								</mask>
								<path fillRule="evenodd" clipRule="evenodd" d="M3.2002 4.53335C3.2002 3.79697 3.79715 3.20001 4.53353 3.20001H16.5335C16.8871 3.20001 17.2263 3.34049 17.4763 3.59054L28.2585 14.3727C29.706 15.8289 29.706 18.1806 28.2585 19.6368L28.2557 19.6396L19.6523 28.243C18.9521 28.9438 18.0015 29.3379 17.0109 29.3379C16.02 29.3379 15.0699 28.9441 14.3696 28.2431L3.59124 17.4767C3.34088 17.2266 3.2002 16.8872 3.2002 16.5333V4.53335ZM5.86686 5.86668V15.9806L16.2562 26.3584C16.4564 26.5588 16.7278 26.6713 17.0109 26.6713C17.2941 26.6713 17.5656 26.5587 17.7656 26.3585L26.3673 17.7567L26.3685 17.7555C26.7805 17.3398 26.7805 16.6697 26.3685 16.254L26.3673 16.2528L15.9812 5.86668H5.86686Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M11.5335 13.2C12.454 13.2 13.2002 12.4538 13.2002 11.5333C13.2002 10.6129 12.454 9.86668 11.5335 9.86668C10.6131 9.86668 9.86686 10.6129 9.86686 11.5333C9.86686 12.4538 10.6131 13.2 11.5335 13.2Z" fill="black" fillOpacity="0.7" />
								<path d="M17.4763 3.59054L17.2642 3.80267L17.2642 3.80267L17.4763 3.59054ZM28.2585 14.3727L28.4713 14.1612L28.4707 14.1606L28.2585 14.3727ZM28.2585 19.6368L28.471 19.8485L28.4713 19.8483L28.2585 19.6368ZM28.2557 19.6396L28.4679 19.8517L28.4682 19.8513L28.2557 19.6396ZM19.6523 28.243L19.4402 28.0309L19.4401 28.0309L19.6523 28.243ZM14.3696 28.2431L14.5819 28.031L14.5816 28.0308L14.3696 28.2431ZM3.59124 17.4767L3.37923 17.6889H3.37923L3.59124 17.4767ZM5.86686 15.9806H5.56686C5.56686 16.0602 5.59851 16.1366 5.65485 16.1929L5.86686 15.9806ZM5.86686 5.86668V5.56668C5.70118 5.56668 5.56686 5.70099 5.56686 5.86668H5.86686ZM16.2562 26.3584L16.4685 26.1464L16.4682 26.1462L16.2562 26.3584ZM17.7656 26.3585L17.5534 26.1464L17.5533 26.1465L17.7656 26.3585ZM26.3673 17.7567L26.5795 17.9689L26.5801 17.9682L26.3673 17.7567ZM26.3685 17.7555L26.5813 17.967L26.5816 17.9667L26.3685 17.7555ZM26.3685 16.254L26.5816 16.0428L26.5813 16.0425L26.3685 16.254ZM26.3673 16.2528L26.5801 16.0413L26.5795 16.0406L26.3673 16.2528ZM15.9812 5.86668L16.1934 5.65455C16.1371 5.59829 16.0608 5.56668 15.9812 5.56668V5.86668ZM4.53353 2.90001C3.63146 2.90001 2.9002 3.63128 2.9002 4.53335H3.5002C3.5002 3.96265 3.96283 3.50001 4.53353 3.50001V2.90001ZM16.5335 2.90001H4.53353V3.50001H16.5335V2.90001ZM17.6885 3.3784C17.3822 3.0721 16.9667 2.90001 16.5335 2.90001V3.50001C16.8076 3.50001 17.0704 3.60888 17.2642 3.80267L17.6885 3.3784ZM28.4713 19.8483C30.0351 18.2751 30.0351 15.7344 28.4713 14.1612L28.0458 14.5842C29.377 15.9233 29.377 18.0861 28.0458 19.4253L28.4713 19.8483ZM28.4682 19.8513L28.471 19.8485L28.0461 19.425L28.0433 19.4278L28.4682 19.8513ZM19.8644 28.4551L28.4679 19.8517L28.0436 19.4274L19.4402 28.0309L19.8644 28.4551ZM17.0109 29.6379C18.0811 29.6379 19.1081 29.2121 19.8645 28.455L19.4401 28.0309C18.7961 28.6754 17.9218 29.0379 17.0109 29.0379V29.6379ZM14.1574 28.4551C14.9139 29.2124 15.9404 29.6379 17.0109 29.6379V29.0379C16.0997 29.0379 15.2259 28.6757 14.5819 28.031L14.1574 28.4551ZM3.37923 17.6889L14.1576 28.4553L14.5816 28.0308L3.80326 17.2644L3.37923 17.6889ZM2.9002 16.5333C2.9002 16.9668 3.07253 17.3826 3.37923 17.6889L3.80326 17.2644C3.60922 17.0706 3.5002 16.8076 3.5002 16.5333H2.9002ZM2.9002 4.53335V16.5333H3.5002V4.53335H2.9002ZM6.16686 15.9806V5.86668H5.56686V15.9806H6.16686ZM17.0109 26.3713C16.8074 26.3713 16.6123 26.2904 16.4685 26.1464L16.044 26.5704C16.3004 26.8271 16.6482 26.9713 17.0109 26.9713V26.3713ZM17.5533 26.1465C17.4096 26.2904 17.2145 26.3713 17.0109 26.3713V26.9713C17.3737 26.9713 17.7215 26.8271 17.9778 26.5705L17.5533 26.1465ZM26.1552 17.5446L17.5534 26.1464L17.9777 26.5706L26.5795 17.9689L26.1552 17.5446ZM26.1557 17.5441L26.1545 17.5453L26.5801 17.9682L26.5813 17.967L26.1557 17.5441ZM26.1554 16.4651C26.4515 16.7639 26.4515 17.2456 26.1554 17.5444L26.5816 17.9667C27.1095 17.4341 27.1095 16.5754 26.5816 16.0428L26.1554 16.4651ZM26.1545 16.4642L26.1557 16.4654L26.5813 16.0425L26.5801 16.0413L26.1545 16.4642ZM15.7691 6.07881L26.1552 16.4649L26.5795 16.0406L16.1934 5.65455L15.7691 6.07881ZM5.86686 6.16668H15.9812V5.56668H5.86686V6.16668ZM28.4707 14.1606L17.6885 3.3784L17.2642 3.80267L28.0464 14.5849L28.4707 14.1606ZM16.4682 26.1462L6.07888 15.7684L5.65485 16.1929L16.0442 26.5707L16.4682 26.1462ZM11.5335 13.5C12.6197 13.5 13.5002 12.6195 13.5002 11.5333H12.9002C12.9002 12.2881 12.2883 12.9 11.5335 12.9V13.5ZM13.5002 11.5333C13.5002 10.4472 12.6197 9.56668 11.5335 9.56668V10.1667C12.2883 10.1667 12.9002 10.7786 12.9002 11.5333H13.5002ZM11.5335 9.56668C10.4474 9.56668 9.56686 10.4472 9.56686 11.5333H10.1669C10.1669 10.7786 10.7787 10.1667 11.5335 10.1667V9.56668ZM9.56686 11.5333C9.56686 12.6195 10.4474 13.5 11.5335 13.5V12.9C10.7787 12.9 10.1669 12.2881 10.1669 11.5333H9.56686Z" fill="#F7F8F6" mask="url(#path-1-inside-1_2812_671857)" />
							</svg>
							<svg id="click" className="mr-3 ..6x04:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<mask id="path-1-inside-1_2585_696349" fill="white">
									<path fillRule="evenodd" clipRule="evenodd" d="M3 4.25C3 3.55964 3.55964 3 4.25 3H15.5C15.8315 3 16.1495 3.1317 16.3839 3.36612L26.4922 13.4744C27.8492 14.8395 27.8492 17.0443 26.4922 18.4094L26.4896 18.4121L18.4238 26.4778C17.7674 27.1348 16.8762 27.5043 15.9476 27.5043C15.0186 27.5043 14.1279 27.135 13.4713 26.4779L3.36661 16.3844C3.13189 16.1499 3 15.8318 3 15.5V4.25ZM5.5 5.5V14.9818L15.24 24.711C15.4276 24.8988 15.6821 25.0043 15.9476 25.0043C16.213 25.0043 16.4675 24.8988 16.655 24.7111L24.7192 16.6469L24.7203 16.6458C25.1065 16.2561 25.1065 15.6278 24.7203 15.2381L24.7192 15.2369L14.9822 5.5H5.5Z" />
									<path fillRule="evenodd" clipRule="evenodd" d="M10.8125 12.375C11.6754 12.375 12.375 11.6754 12.375 10.8125C12.375 9.94956 11.6754 9.25 10.8125 9.25C9.94956 9.25 9.25 9.94956 9.25 10.8125C9.25 11.6754 9.94956 12.375 10.8125 12.375Z" />
								</mask>
								<path fillRule="evenodd" clipRule="evenodd" d="M3 4.25C3 3.55964 3.55964 3 4.25 3H15.5C15.8315 3 16.1495 3.1317 16.3839 3.36612L26.4922 13.4744C27.8492 14.8395 27.8492 17.0443 26.4922 18.4094L26.4896 18.4121L18.4238 26.4778C17.7674 27.1348 16.8762 27.5043 15.9476 27.5043C15.0186 27.5043 14.1279 27.135 13.4713 26.4779L3.36661 16.3844C3.13189 16.1499 3 15.8318 3 15.5V4.25ZM5.5 5.5V14.9818L15.24 24.711C15.4276 24.8988 15.6821 25.0043 15.9476 25.0043C16.213 25.0043 16.4675 24.8988 16.655 24.7111L24.7192 16.6469L24.7203 16.6458C25.1065 16.2561 25.1065 15.6278 24.7203 15.2381L24.7192 15.2369L14.9822 5.5H5.5Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M10.8125 12.375C11.6754 12.375 12.375 11.6754 12.375 10.8125C12.375 9.94956 11.6754 9.25 10.8125 9.25C9.94956 9.25 9.25 9.94956 9.25 10.8125C9.25 11.6754 9.94956 12.375 10.8125 12.375Z" fill="black" fillOpacity="0.7" />
								<path d="M16.3839 3.36612L15.9596 3.79038L15.9596 3.79038L16.3839 3.36612ZM26.4922 13.4744L26.9177 13.0514L26.9165 13.0502L26.4922 13.4744ZM26.4922 18.4094L26.9171 18.833L26.9177 18.8325L26.4922 18.4094ZM26.4896 18.4121L26.9138 18.8363L26.9145 18.8357L26.4896 18.4121ZM18.4238 26.4778L17.9996 26.0535L17.9994 26.0537L18.4238 26.4778ZM13.4713 26.4779L13.8958 26.0538L13.8954 26.0534L13.4713 26.4779ZM3.36661 16.3844L2.94258 16.8089L2.94258 16.8089L3.36661 16.3844ZM5.5 14.9818H4.9C4.9 15.1411 4.96331 15.2938 5.07597 15.4063L5.5 14.9818ZM5.5 5.5V4.9C5.16863 4.9 4.9 5.16863 4.9 5.5H5.5ZM15.24 24.711L15.6645 24.287L15.6641 24.2865L15.24 24.711ZM16.655 24.7111L16.2308 24.2868L16.2305 24.2871L16.655 24.7111ZM24.7192 16.6469L25.1435 17.0712L25.1448 17.0698L24.7192 16.6469ZM24.7203 16.6458L25.1459 17.0687L25.1465 17.0682L24.7203 16.6458ZM24.7203 15.2381L25.1465 14.8157L25.1459 14.8152L24.7203 15.2381ZM24.7192 15.2369L25.1448 14.814L25.1435 14.8127L24.7192 15.2369ZM14.9822 5.5L15.4065 5.07574C15.294 4.96321 15.1414 4.9 14.9822 4.9V5.5ZM4.25 2.4C3.22827 2.4 2.4 3.22827 2.4 4.25H3.6C3.6 3.89101 3.89101 3.6 4.25 3.6V2.4ZM15.5 2.4H4.25V3.6H15.5V2.4ZM16.8081 2.94185C16.4612 2.59491 15.9907 2.4 15.5 2.4V3.6C15.6724 3.6 15.8377 3.66848 15.9596 3.79038L16.8081 2.94185ZM26.9177 18.8325C28.5074 17.2333 28.5074 14.6506 26.9177 13.0514L26.0667 13.8974C27.1911 15.0285 27.1911 16.8554 26.0667 17.9864L26.9177 18.8325ZM26.9145 18.8357L26.9171 18.833L26.0672 17.9859L26.0646 17.9885L26.9145 18.8357ZM18.8481 26.9021L26.9138 18.8363L26.0653 17.9878L17.9996 26.0535L18.8481 26.9021ZM15.9476 28.1043C17.0355 28.1043 18.0794 27.6714 18.8483 26.9019L17.9994 26.0537C17.4554 26.5981 16.7169 26.9043 15.9476 26.9043V28.1043ZM13.0469 26.9019C13.8159 27.6717 14.8594 28.1043 15.9476 28.1043V26.9043C15.1779 26.9043 14.4398 26.5984 13.8958 26.0538L13.0469 26.9019ZM2.94258 16.8089L13.0473 26.9024L13.8954 26.0534L3.79064 15.9599L2.94258 16.8089ZM2.4 15.5C2.4 15.991 2.59519 16.4619 2.94258 16.8089L3.79064 15.9599C3.66858 15.838 3.6 15.6725 3.6 15.5H2.4ZM2.4 4.25V15.5H3.6V4.25H2.4ZM6.1 14.9818V5.5H4.9V14.9818H6.1ZM15.9476 24.4043C15.8414 24.4043 15.7396 24.3621 15.6645 24.287L14.8155 25.1351C15.1157 25.4355 15.5229 25.6043 15.9476 25.6043V24.4043ZM16.2305 24.2871C16.1556 24.3621 16.0538 24.4043 15.9476 24.4043V25.6043C16.3723 25.6043 16.7795 25.4355 17.0795 25.1351L16.2305 24.2871ZM24.2949 16.2227L16.2308 24.2868L17.0793 25.1353L25.1435 17.0712L24.2949 16.2227ZM24.2947 16.2229L24.2936 16.224L25.1448 17.0698L25.1459 17.0687L24.2947 16.2229ZM24.2941 15.6604C24.4486 15.8163 24.4486 16.0676 24.2941 16.2235L25.1465 17.0682C25.7645 16.4446 25.7645 15.4393 25.1465 14.8157L24.2941 15.6604ZM24.2936 15.6599L24.2947 15.661L25.1459 14.8152L25.1448 14.814L24.2936 15.6599ZM14.558 5.92426L24.2949 15.6612L25.1435 14.8127L15.4065 5.07574L14.558 5.92426ZM5.5 6.1H14.9822V4.9H5.5V6.1ZM26.9165 13.0502L16.8081 2.94185L15.9596 3.79038L26.0679 13.8987L26.9165 13.0502ZM15.6641 24.2865L5.92403 14.5573L5.07597 15.4063L14.816 25.1355L15.6641 24.2865ZM10.8125 12.975C12.0068 12.975 12.975 12.0068 12.975 10.8125H11.775C11.775 11.3441 11.3441 11.775 10.8125 11.775V12.975ZM12.975 10.8125C12.975 9.61819 12.0068 8.65 10.8125 8.65V9.85C11.3441 9.85 11.775 10.2809 11.775 10.8125H12.975ZM10.8125 8.65C9.61819 8.65 8.65 9.61819 8.65 10.8125H9.85C9.85 10.2809 10.2809 9.85 10.8125 9.85V8.65ZM8.65 10.8125C8.65 12.0068 9.61819 12.975 10.8125 12.975V11.775C10.2809 11.775 9.85 11.3441 9.85 10.8125H8.65Z" fill="white" mask="url(#path-1-inside-1_2585_696349)" />
							</svg>

							<p id="click" className='font-montserrat font-semibold ..6x04:text-13px .1x1:text-13px   ..6x04:font-medium'>Промокод</p>

						</div>
						<div className={`p-3 pt-0 ${dropDownds.promo ? 'block' : 'hidden'}`}>
							<div className="mb-3 w-full flex ">
								<input className="h-11 w-full rounded font-noto-sans text-13px outline-none px-10px mr-3 border border-gray-quick-silver" type="text" onChange={e => inputChange(e)} value={value} />
								<button className="h-11 px-30px font-montserrat text-xs text-primary font-medium bg-gray-light2 rounded">
									Применить
								</button>
							</div>
							<div className={`bg-white p-3 border rounded-sm border-stroke  ${dropDownds.promo ? 'block' : 'hidden'}`}>
								<div className="flex mb-3 items-center">
									<p className="font-montserrat text-13px mr-1 .2x00:text-xs">-5% на заказ</p>
									<div className="px-6px py-3px mr-3 bg-green-05pe rounded-32px font-montserrat text-13px .2x00:text-xs text-black-70pe">
										от 1500 ₽
									</div>
									<p className="font-montserrat text-sm text-label-pink-2 .2x00:text-xs">Осталось: <span className="font-medium">451 ₽</span></p>
								</div>
								<p className="font-montserrat text-sm text-gray-quick-silver mb-3 .2x00:text-xs">Применяется после оформления при:</p>
								<div>
									<div className="flex items-center">
										<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="black" fill-opacity="0.7" />
											<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8ZM18 6C19.1046 6 20 6.89543 20 8V10H4V8C4 6.89543 4.89543 6 6 6H18ZM20 12H4V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V12Z" fill="black" fill-opacity="0.7" />
											<path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" stroke="white" stroke-width="0.4" stroke-linecap="round" />
											<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8ZM18 6C19.1046 6 20 6.89543 20 8V10H4V8C4 6.89543 4.89543 6 6 6H18ZM20 12H4V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V12Z" stroke="white" stroke-width="0.4" stroke-linecap="round" />
										</svg>
										<p className="font-montserrat text-sm .2x00:text-xs">Оплате онлайн</p>
									</div>
									<div className="flex mt-18px items-center">
										<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5939 2.08619C11.8524 1.97127 12.1476 1.97127 12.4061 2.08619L21.4061 6.08619C21.7673 6.24669 22 6.60481 22 7V17C22 17.3952 21.7673 17.7533 21.4061 17.9138L12.4061 21.9138C12.1476 22.0287 11.8524 22.0287 11.5939 21.9138L2.59386 17.9138C2.23273 17.7533 2 17.3952 2 17V7C2 6.60481 2.23273 6.24669 2.59386 6.08619L11.5939 2.08619ZM4 8.53876L11 11.6499V19.4612L4 16.3501V8.53876ZM13 19.4612L20 16.3501V8.53876L13 11.6499V19.4612ZM12 9.90568L18.5378 7L12 4.09432L5.46221 7L12 9.90568Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" />
										</svg>

										<p className="font-montserrat text-sm .2x00:text-xs">Доставке: <span className="font-medium">ПВЗ, курьер, посылка, бутик</span> </p>
									</div>
								</div>
							</div>

						</div>
						<div className={`h-16 px-18px flex items-center bg-input-error-bg ${dropDownds.promo ? 'block' : 'hidden'}`}>
							<p className="flex .2x00:text-xs font-montserrat text-sm items-center"><svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 15H13V17H11V15ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4ZM12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34783 3.05357 6.80429 4.92893 4.92893C5.85752 4.00034 6.95991 3.26375 8.17317 2.7612C9.38642 2.25865 10.6868 2 12 2C14.6522 2 17.1957 3.05356 19.0711 4.92893C20.9464 6.80429 22 9.34783 22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7363 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22ZM11 7H13V13H11V7Z" fill="black" fill-opacity="0.7" />
							</svg>
								Не применяется на акции и суперцены</p>
						</div>
					</div>

				</div>

			</div>
			<div className="fixed left-0  right-0 ..6x6:bottom-66px bottom-94px z-50 ">
				<div className="..5x2:block   pb-3  bg-white   pt-3  mt-4 z-10 hidden relative px-1 bg-shadow">
					<div className="absolute -left-3 top-0 bottom-0 w-3 bg-white">	</div>
					<div className="absolute -right-3 top-0 bottom-0 w-3 bg-white">	</div>
					<div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<p className="font-montserrat mr-6px text-13px ..7x230:text-11px">₸ <span className="line-through text-black-70pe">1 580 900.00</span></p>
								<p className="font-montserrat text-13px text-label-pink-2 ..7x230:text-11px font-semibold flex items-center">₸ 1 580 900.00 <span className="font-normal mx-6px">(-29%)</span> </p>

							</div>
							<div className="flex items-center text-black-70pe font-montserrat text-13px">
								<svg width="16" className="mr-0.5" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.3333 14.3333C10.3333 14.3333 5.99998 14.6667 3.66665 12C1.33331 9.33333 1.33331 1.33333 1.33331 1.33333C1.33331 1.33333 9.33331 1 12 3C14.6666 5 14 10.6667 14 10.6667" stroke="#337202" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M14.6666 14.6668C14.6666 14.6668 10.9402 11.8507 8.66665 9.3335C6.39308 6.81633 5.33331 4.3335 5.33331 4.3335" stroke="#337202" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M8.66669 9.33333L9.00002 5" stroke="#337202" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M8.66665 9.33333L5.33331 9" stroke="#337202" stroke-linecap="round" stroke-linejoin="round" />
								</svg>


								1.8 Б
							</div>
						</div>
						<p></p>

					</div>
					<div className="flex mt-3 justify-between items-center">
						<p className="font-montserrat text-gray-quick-silver text-11px  items-center text-center ">В наличии <br /> <span className="text-primary">{'>'} 50 шт.</span></p>
						<div className="flex">
							<button className="  border px-26px mr-3 border-gray-light2 h-8 font-lora text-xs font-medium text-label-orange  ..7x01:mr-1 ..7x01:px-4 ">374 De</button>
							<button className="  bg-primary px-52px font-montserrat h-8 font-medium text-xs text-white ..7x01:px-7">Купить</button>

						</div>

					</div>
				</div>
			</div>

			{/* <div className="flex   -mr-1  ">
				<div className="flex ..5x2:flex-col ..5x2:w-full">
					<div className="relative mt-6 mb-4  ..6x04:mt-2 widthDetails .6x2:mr-0 ..5x2:!w-auto">

						<div className="absolute ..6x04:left-0 cursor-pointer   ..6x04:top-2 ..5x2:flex-col -left-2 top-0 flex z-10 w-48 .3x1:w-24 flex-wrap">
							<div onClick={() => slider.current.swiper.slideTo(0)} className="border ..5x2:hidden  .3x1:h-9 .3x1:w-9  mb-2 border-black-70pe mr-5 w-60px h-60px">
								<Image src={oneSmall} />
							</div>
							<div className=" .3x1:h-9   .3x1:w-9  h-60px flex flex-col justify-end">
								<p className="font-noto-sans tracking-widest	font-medium mb-1 bg-label-yellow w-16 h-6 flex items-center   justify-center .3x1:text-9px .3x1:h-14px .3x1:w-9">HIT!</p>
								<p className="font-noto-sans border border-black-70pe font-medium tracking-widest text-black-70pe w-16 h-6 flex bg-white items-center justify-center .3x1:h-14px .3x1:w-9 .3x1:text-9px ">NEW</p>
							</div>
							<div id="one" onClick={(e) => {

								if (e.target.src === 'http://localhost:6006/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDetailCardSmallTwo.229bdfcb.jpg&w=128&q=75' && e.target.id !== '2' && e.target.id !== '3') slider.current.swiper.slideTo(1)
							}} className=" .3x1:h-9 relative cursor-pointer .3x1:w-9 ..5x2:hidden mr-5  w-60px h-60px mb-2">
								<div className="transition-all hover:border-black border border-white h-60px .3x1:h-9 ">
									<Image src={twoSmall} />
								</div>

								<div onClick={() => slider.current.swiper.slideTo(2)} id='2' className="transition-all hover:border-black border border-white cursor-pointer .3x1:h-9  .3x1:w-9  h-60px flex flex-col justify-end">
									<Image src={oneMini} />
								</div>
								<div onClick={() => slider.current.swiper.slideTo(3)} id='2' className="transition-all hover:border-black border border-white cursor-pointer .3x1:h-9  .3x1:w-9  h-60px flex flex-col justify-end">
									<Image src={oneMini} />
								</div>
							</div>
							<div className="..5x2:mt-1 relative cursor-pointer .3x1:h-9 .3x1:w-9  w-60px h-60px">
								<svg className=".3x1:h-9 .3x1:w-9" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="30" cy="30" r="29.5" fill="white" stroke="#C5C1AB" />
									<circle cx="30" cy="30" r="27.5" fill="white" stroke="#C5C1AB" />
									<path d="M14.5902 29H13.5102V22.79H11.3702V21.86H16.7302V22.79H14.5902V29ZM24.9297 25.42C24.9297 25.9733 24.8597 26.4767 24.7197 26.93C24.5864 27.3767 24.3797 27.7633 24.0997 28.09C23.8264 28.4167 23.4797 28.6667 23.0597 28.84C22.6464 29.0133 22.163 29.1 21.6097 29.1C21.043 29.1 20.5497 29.0133 20.1297 28.84C19.7164 28.66 19.3697 28.41 19.0897 28.09C18.8164 27.7633 18.613 27.3733 18.4797 26.92C18.3464 26.4667 18.2797 25.9633 18.2797 25.41C18.2797 24.6767 18.3997 24.0367 18.6397 23.49C18.8797 22.9433 19.2464 22.5167 19.7397 22.21C20.2397 21.9033 20.8664 21.75 21.6197 21.75C22.353 21.75 22.963 21.9033 23.4497 22.21C23.943 22.51 24.313 22.9367 24.5597 23.49C24.8064 24.0367 24.9297 24.68 24.9297 25.42ZM19.4197 25.42C19.4197 25.9933 19.4964 26.4867 19.6497 26.9C19.803 27.3067 20.043 27.6233 20.3697 27.85C20.6964 28.07 21.1097 28.18 21.6097 28.18C22.1164 28.18 22.5297 28.07 22.8497 27.85C23.1697 27.6233 23.4064 27.3067 23.5597 26.9C23.713 26.4867 23.7897 25.9933 23.7897 25.42C23.7897 24.56 23.6164 23.89 23.2697 23.41C22.9297 22.9233 22.3797 22.68 21.6197 22.68C21.113 22.68 20.6964 22.79 20.3697 23.01C20.043 23.23 19.803 23.5433 19.6497 23.95C19.4964 24.3567 19.4197 24.8467 19.4197 25.42ZM29.5713 21.86C30.1779 21.86 30.6846 21.9167 31.0913 22.03C31.5046 22.1433 31.8146 22.3333 32.0213 22.6C32.2346 22.86 32.3413 23.2067 32.3413 23.64C32.3413 23.92 32.2913 24.17 32.1913 24.39C32.0913 24.6033 31.9446 24.7833 31.7513 24.93C31.5646 25.07 31.3313 25.1633 31.0513 25.21V25.26C31.3379 25.3067 31.5946 25.3933 31.8213 25.52C32.0479 25.64 32.2279 25.8167 32.3613 26.05C32.4946 26.2833 32.5613 26.5867 32.5613 26.96C32.5613 27.3933 32.4579 27.7633 32.2513 28.07C32.0513 28.37 31.7613 28.6 31.3813 28.76C31.0079 28.92 30.5613 29 30.0413 29H27.4813V21.86H29.5713ZM29.7513 24.84C30.3113 24.84 30.6946 24.75 30.9013 24.57C31.1146 24.39 31.2213 24.1233 31.2213 23.77C31.2213 23.41 31.0946 23.1533 30.8413 23C30.5879 22.8467 30.1846 22.77 29.6313 22.77H28.5613V24.84H29.7513ZM28.5613 25.72V28.1H29.8713C30.4513 28.1 30.8546 27.9867 31.0813 27.76C31.3079 27.5333 31.4213 27.2333 31.4213 26.86C31.4213 26.6333 31.3713 26.4333 31.2713 26.26C31.1713 26.0867 31.0013 25.9533 30.7613 25.86C30.5279 25.7667 30.2079 25.72 29.8013 25.72H28.5613ZM39.4938 29L38.7338 26.94H35.9738L35.2138 29H34.0938L36.8038 21.83H37.9238L40.6238 29H39.4938ZM37.7138 23.99C37.6938 23.9167 37.6571 23.8067 37.6038 23.66C37.5571 23.5067 37.5104 23.3533 37.4638 23.2C37.4171 23.04 37.3804 22.91 37.3538 22.81C37.3204 22.9433 37.2804 23.09 37.2338 23.25C37.1938 23.4033 37.1538 23.5467 37.1138 23.68C37.0738 23.8067 37.0404 23.91 37.0138 23.99L36.2938 26H38.4338L37.7138 23.99ZM44.5867 21.86C45.5201 21.86 46.2001 22.05 46.6267 22.43C47.0534 22.8033 47.2667 23.3267 47.2667 24C47.2667 24.3 47.2167 24.5867 47.1167 24.86C47.0234 25.1333 46.8667 25.38 46.6467 25.6C46.4267 25.8133 46.1334 25.9833 45.7667 26.11C45.4067 26.23 44.9634 26.29 44.4367 26.29H43.6667V29H42.5867V21.86H44.5867ZM44.5067 22.77H43.6667V25.38H44.3167C44.7234 25.38 45.0634 25.3367 45.3367 25.25C45.6101 25.1567 45.8134 25.0133 45.9467 24.82C46.0867 24.62 46.1567 24.36 46.1567 24.04C46.1567 23.6133 46.0234 23.2967 45.7567 23.09C45.4967 22.8767 45.0801 22.77 44.5067 22.77ZM24.448 33.86V40.06H25.368V42.94H24.328V41H19.548V42.94H18.518V40.06H19.068C19.288 39.66 19.5013 39.22 19.708 38.74C19.9147 38.2533 20.098 37.7433 20.258 37.21C20.418 36.67 20.5513 36.12 20.658 35.56C20.7713 34.9933 20.8513 34.4267 20.898 33.86H24.448ZM21.808 34.8C21.7747 35.18 21.708 35.6 21.608 36.06C21.508 36.5133 21.3847 36.98 21.238 37.46C21.098 37.94 20.938 38.4067 20.758 38.86C20.5847 39.3067 20.4013 39.7067 20.208 40.06H23.378V34.8H21.808ZM33.1069 41H32.0269V37.74H28.6169V41H27.5369V33.86H28.6169V36.82H32.0269V33.86H33.1069V41ZM38.2374 38.1L36.4474 41H35.2074L37.2174 37.87C36.984 37.79 36.7574 37.6733 36.5374 37.52C36.324 37.36 36.1474 37.15 36.0074 36.89C35.874 36.6233 35.8074 36.2833 35.8074 35.87C35.8074 35.2233 36.034 34.7267 36.4874 34.38C36.9474 34.0333 37.614 33.86 38.4874 33.86H40.5874V41H39.5074V38.1H38.2374ZM38.5174 34.77C38.1774 34.77 37.8874 34.81 37.6474 34.89C37.414 34.97 37.234 35.0967 37.1074 35.27C36.9807 35.4367 36.9174 35.6567 36.9174 35.93C36.9174 36.3367 37.0507 36.6533 37.3174 36.88C37.5907 37.1 38.004 37.21 38.5574 37.21H39.5074V34.77H38.5174Z" fill="#C5C1AB" />
								</svg>

								<svg className="absolute -bottom-12 .3x1:-bottom-7 .3x1:h-9 .3x1:w-9 left-1/2 ability" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="30" cy="30" r="29.5" fill="white" fill-opacity="0.3" stroke="#C5C1AB" />
									<circle cx="30" cy="30" r="27.5" fill="white" fill-opacity="0.7" stroke="#C5C1AB" />
									<path d="M7.74756 30.4751C7.46102 30.4462 7.236 30.3753 7.0725 30.2623C6.90304 30.1488 6.78763 30.0075 6.72628 29.8385C6.66552 29.6635 6.64508 29.4775 6.66494 29.2805C6.6848 29.0835 6.74166 28.9083 6.83552 28.7549C6.92938 28.6016 7.07066 28.4862 7.25939 28.4087C7.44274 28.3247 7.67769 28.2971 7.96424 28.326C8.24482 28.3543 8.46954 28.4282 8.6384 28.5478C8.80189 28.6607 8.9173 28.802 8.98462 28.9716C9.04598 29.1406 9.06673 29.3236 9.04686 29.5206C9.027 29.7176 8.96984 29.8958 8.87538 30.0551C8.77556 30.2079 8.63427 30.3233 8.45151 30.4014C8.26279 30.4788 8.02814 30.5034 7.74756 30.4751Z" fill="#337202" />
									<path d="M15.354 19.3274L14.8366 20.1502L12.3528 18.5884L10.7192 21.1865L13.2029 22.7483L12.6855 23.5711L7.24559 20.1505L7.763 19.3277L10.0182 20.7457L11.6519 18.1477L9.39666 16.7296L9.91406 15.9068L15.354 19.3274Z" fill="#337202" />
									<path d="M22.5139 14.2807L21.0186 12.9887L18.8444 14.1899L19.1422 16.1435L18.2599 16.6309L17.2742 9.80313L18.1566 9.31568L23.404 13.7889L22.5139 14.2807ZM18.9312 11.1087C18.8835 11.0596 18.8068 10.9889 18.7009 10.8966C18.5974 10.7961 18.4939 10.6956 18.3904 10.5951C18.284 10.4894 18.1986 10.4029 18.134 10.3358C18.1658 10.4553 18.1981 10.5883 18.231 10.7346C18.2662 10.8728 18.2971 11.0031 18.3236 11.1256C18.3472 11.2428 18.3659 11.3387 18.3797 11.4133L18.6873 13.3101L20.3732 12.3787L18.9312 11.1087Z" fill="#337202" />
									<path d="M27.3084 13.0949L27.1674 6.67046L31.0544 6.58515L31.0728 7.42195L28.1575 7.48593L28.1972 9.2945L29.025 9.27633C29.6609 9.26237 30.1605 9.33243 30.524 9.48649C30.8934 9.64042 31.1563 9.8567 31.3124 10.1353C31.4744 10.4079 31.5594 10.7241 31.5673 11.084C31.576 11.4799 31.4995 11.8236 31.3379 12.1153C31.1822 12.4067 30.9292 12.6344 30.5787 12.7981C30.228 12.9558 29.7648 13.041 29.1889 13.0536L27.3084 13.0949ZM29.099 12.2364C29.6269 12.2248 30.0059 12.1295 30.236 11.9504C30.466 11.7653 30.5768 11.4838 30.5685 11.1059C30.5627 10.842 30.5012 10.6363 30.3839 10.4888C30.2667 10.3413 30.0873 10.2372 29.846 10.1765C29.6106 10.1157 29.3009 10.0895 28.917 10.0979L28.2152 10.1133L28.2622 12.2548L29.099 12.2364Z" fill="#337202" />
									<path d="M42.6139 13.985C42.3731 14.4209 42.0989 14.787 41.7913 15.0832C41.4919 15.377 41.1608 15.5917 40.798 15.7272C40.4405 15.8655 40.0586 15.9116 39.6523 15.8654C39.2513 15.822 38.8328 15.6799 38.3969 15.4391C37.9505 15.1925 37.5996 14.9095 37.3442 14.5902C37.0969 14.2685 36.9326 13.9207 36.8513 13.5467C36.7781 13.1704 36.7877 12.7747 36.8799 12.3595C36.9722 11.9444 37.1388 11.5189 37.3796 11.083C37.6987 10.5053 38.0718 10.0533 38.4988 9.72712C38.9258 9.40093 39.4003 9.22439 39.9224 9.19752C40.4498 9.17354 41.0102 9.32549 41.6036 9.65335C42.1813 9.97251 42.5951 10.3588 42.8451 10.8122C43.1031 11.2632 43.2089 11.7604 43.1624 12.3036C43.1188 12.8416 42.936 13.4021 42.6139 13.985ZM38.2733 11.587C38.0238 12.0387 37.8694 12.4607 37.8103 12.853C37.7541 13.2401 37.8054 13.594 37.9641 13.9147C38.1257 14.2302 38.4034 14.4968 38.7973 14.7144C39.1964 14.9349 39.5699 15.0281 39.9178 14.9941C40.2685 14.9548 40.5928 14.8083 40.8905 14.5547C41.1912 14.2958 41.4663 13.9406 41.7158 13.4889C42.0901 12.8114 42.2452 12.2082 42.181 11.6792C42.125 11.1478 41.7976 10.7167 41.1989 10.386C40.7997 10.1655 40.4236 10.0708 40.0705 10.1019C39.7175 10.1331 39.392 10.2754 39.0942 10.5291C38.7965 10.7827 38.5228 11.1353 38.2733 11.587Z" fill="#337202" />
									<path d="M50.8611 18.7419C51.2925 19.4627 51.4601 20.0756 51.3639 20.5807C51.2729 21.0828 50.9673 21.4894 50.4474 21.8007C50.2157 21.9394 49.9712 22.0333 49.7139 22.0824C49.4597 22.1367 49.1968 22.1297 48.9252 22.0615C48.6588 21.9902 48.3919 21.8423 48.1246 21.6177C47.8655 21.3952 47.6143 21.0805 47.3708 20.6738L47.0149 20.0792L44.9222 21.3319L44.4229 20.4979L49.9366 17.1975L50.8611 18.7419ZM50.1214 19.1008L49.7331 18.4521L47.7176 19.6586L48.0181 20.1605C48.2061 20.4746 48.3967 20.7171 48.59 20.8881C48.7884 21.056 48.9931 21.1468 49.204 21.1604C49.4231 21.1761 49.6563 21.1099 49.9034 20.962C50.2329 20.7648 50.4158 20.5154 50.4521 20.214C50.4967 19.9146 50.3864 19.5435 50.1214 19.1008Z" fill="#337202" />
									<path d="M51.0218 28.1881C51.3084 28.1592 51.543 28.1838 51.7258 28.2618C51.9145 28.3393 52.0558 28.4547 52.1496 28.608C52.2441 28.7674 52.3013 28.9455 52.3211 29.1425C52.341 29.3395 52.3202 29.5225 52.2589 29.6915C52.1975 29.8606 52.0821 30.0018 51.9127 30.1154C51.7498 30.2344 51.525 30.3083 51.2385 30.3372C50.9579 30.3655 50.723 30.3379 50.5336 30.2545C50.3509 30.1764 50.2096 30.061 50.1098 29.9082C50.0159 29.7549 49.9591 29.5797 49.9392 29.3827C49.9193 29.1857 49.9398 28.9997 50.0005 28.8247C50.0679 28.6551 50.1833 28.5138 50.3468 28.4008C50.5162 28.2873 50.7412 28.2163 51.0218 28.1881Z" fill="#337202" />
									<path d="M27.4859 36L32.0459 26.08H26.0459V24.576H33.8699V25.792L29.3259 36H27.4859Z" fill="#337202" />
									<path d="M30.1932 42.568V49H21.4692V42.568H22.5252V48.112H25.2972V42.568H26.3532V48.112H29.1372V42.568H30.1932ZM36.6905 43.456H34.5905V49H33.5465V43.456H31.4705V42.568H36.6905V43.456ZM37.2038 48.352C37.2038 48.056 37.2758 47.848 37.4198 47.728C37.5638 47.608 37.7358 47.548 37.9358 47.548C38.1438 47.548 38.3198 47.608 38.4638 47.728C38.6158 47.848 38.6918 48.056 38.6918 48.352C38.6918 48.64 38.6158 48.848 38.4638 48.976C38.3198 49.104 38.1438 49.168 37.9358 49.168C37.7358 49.168 37.5638 49.104 37.4198 48.976C37.2758 48.848 37.2038 48.64 37.2038 48.352Z" fill="#337202" />
								</svg>


							</div>
							<div onMouseEnter={hoverSet} onMouseLeave={hoverSet} className="..5x2:hidden hoverCustVideo hover:bg-primary mt-28 cursor-pointer .3x1:h-9 .3x1:w-10  w-60px h-60px flex flex-col justify-center items-center">
								<svg className=".3x1:h-4 .3x1:w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M7 5.07172C7.3094 4.89309 7.6906 4.89309 8 5.07172L18.5 11.1339C18.8094 11.3126 19 11.6427 19 11.9999C19 12.3572 18.8094 12.6873 18.5 12.866L8 18.9282C7.6906 19.1068 7.3094 19.1068 7 18.9282C6.6906 18.7495 6.5 18.4194 6.5 18.0621V5.93774C6.5 5.58048 6.6906 5.25035 7 5.07172ZM8.5 7.6698V16.3301L16 11.9999L8.5 7.6698Z" fill={`${buttonHover ? "#fff" : '#337202'} `} />
								</svg>
								<p className="font-montserrat text-13px font-medium .3x1:text-xs .3x1:font-semibold text-primary">VIDEO</p>
							</div>

						</div>
						<div className="..5x2:flex px-6px  hidden absolute right-0 z-10 ..6x04:-right-2 ..6x04:rounded-r-none top-20 w-60px ..6x2:h-12 .1x1:h-9  rounded-xl  bg-shadow   flex-col justify-center items-center">
							<svg className=".1x1:h-4 .1x1:w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M7 5.07172C7.3094 4.89309 7.6906 4.89309 8 5.07172L18.5 11.1339C18.8094 11.3126 19 11.6427 19 11.9999C19 12.3572 18.8094 12.6873 18.5 12.866L8 18.9282C7.6906 19.1068 7.3094 19.1068 7 18.9282C6.6906 18.7495 6.5 18.4194 6.5 18.0621V5.93774C6.5 5.58048 6.6906 5.25035 7 5.07172ZM8.5 7.6698V16.3301L16 11.9999L8.5 7.6698Z" fill="#337202" />
							</svg>
							<p className="font-montserrat text-xs font-semibold text-primary ">VIDEO</p>
						</div>
						{likeMobile ? <svg className="..5x2:block ..6x5:-right-3 hidden absolute right-3 top-3  z-10    " onClick={setLikeMob} width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="white"></circle><g filter="url(#filter0_d_3587_1020586)"><path d="M29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z" fill="#FF6363"></path></g><defs><filter id="filter0_d_3587_1020586" x="4" y="10" width="40.7084" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="5"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3587_1020586"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3587_1020586" result="shape"></feBlend></filter></defs></svg> : <div onClick={setLikeMob} className="..5x2:block ..6x5:-right-3 hidden absolute right-1 top-6  z-10    ">
							<svg class="mx-4 mr-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4578 19.1008L12.3542 19.2044L12.2403 19.1008C7.32207 14.6381 4.07084 11.6872 4.07084 8.69482C4.07084 6.62398 5.62398 5.07084 7.69482 5.07084C9.28937 5.07084 10.8425 6.10627 11.3913 7.51444H13.3172C13.8659 6.10627 15.4191 5.07084 17.0136 5.07084C19.0845 5.07084 20.6376 6.62398 20.6376 8.69482C20.6376 11.6872 17.3864 14.6381 12.4578 19.1008ZM17.0136 3C15.212 3 13.4828 3.83869 12.3542 5.15368C11.2256 3.83869 9.49646 3 7.69482 3C4.50572 3 2 5.49537 2 8.69482C2 12.5984 5.52044 15.7978 10.8529 20.6332L12.3542 22L13.8556 20.6332C19.188 15.7978 22.7084 12.5984 22.7084 8.69482C22.7084 5.49537 20.2027 3 17.0136 3Z" fill="#EDEEEC"></path></svg>
						</div>}
						<div className="relative">
							<Swiper ref={slider} onSwiper={e => setAllSl(e.imagesLoaded / 2)} onSlideChange={e => setCurrentSnap(e.snapIndex)} slidesPerView={1} className='sliderCenter  .1x1:!w-96 '  >

								<SwiperSlide className="pl-16  .3x1:ml-0   .3x1:pl-0 .6x2:pl-7 ..5x2:pl-0 .1x1:!w-96 ..5x2:!w-auto ..6x04:ml-0   relative">



									<div onClick={close} className="..5x2:h-96 adaptSlide ..5x1:w-80	hoverCustom	hoverI  ..5x1:h-80 ..5x2:w-96">
										<Image src={one} width='608px' height='608px' />

									</div>


								</SwiperSlide>
								<SwiperSlide className="pl-16  .3x1:ml-0   .3x1:pl-0 .6x2:pl-7 ..5x2:pl-0 .1x1:!w-96 ..5x2:!w-auto ..6x04:ml-0   relative">



									<div onClick={close} className="..5x2:h-96 adaptSlide ..5x1:w-80	hoverCustom	hoverI  ..5x1:h-80 ..5x2:w-96">
										<Image src={one} width='608px' height='608px' />

									</div>


								</SwiperSlide>
								<SwiperSlide className="pl-16  .3x1:ml-0   .3x1:pl-0 .6x2:pl-7 ..5x2:pl-0 .1x1:!w-96 ..5x2:!w-auto ..6x04:ml-0   relative">



									<div onClick={close} className="..5x2:h-96 adaptSlide ..5x1:w-80	hoverCustom	hoverI  ..5x1:h-80 ..5x2:w-96">
										<Image src={one} width='608px' height='608px' />

									</div>


								</SwiperSlide>
								<SwiperSlide className="pl-16  .3x1:ml-0   .3x1:pl-0 .6x2:pl-7 ..5x2:pl-0 .1x1:!w-96 ..5x2:!w-auto ..6x04:ml-0   relative">



									<div onClick={close} className="..5x2:h-96 adaptSlide ..5x1:w-80	hoverCustom	hoverI  ..5x1:h-80 ..5x2:w-96">
										<Image src={one} width='608px' height='608px' />

									</div>


								</SwiperSlide>
							</Swiper>
							<div className="z-20 hidden ..5x2:flex w-12 h-6 bg-white-80pe rounded-2xl absolute bottom-3 font-montserrat font-semibold text-13px justify-center items-center left-1/2 -translate-x-1/2">
								{snap + 1} / {allSlides}
							</div>
						</div>

						<button onClick={prevSlide} className='..5x2:hidden ..5x1:left-6 absolute .1x1:top-44  ..5x1:top-40 .3x1:left-16   transition-all rounded-2xl .3x1:top-52  left-86px     top-300px   z-10'>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.5 17.725L10.7518 12L16.5 6.2625L14.7304 4.5L7.2 12L14.7304 19.5L16.5 17.725Z" fill={`black`} fillOpacity="0.7" />
							</svg>
						</button>
						<button onClick={nextSlide} onMouseEnter={hoverNext} onMouseLeave={hoverNext} className='..5x2:hidden ..5x1:right-69px .6x2:right-86px .1x1:top-44 absolute   .3x1:right-20 ..5x1:top-40  transition-all rounded-2xl right-4 .3x1:top-52   top-300px z-10'>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.5 17.725L13.2482 12L7.5 6.2625L9.26964 4.5L16.8 12L9.26964 19.5L7.5 17.725Z" fill={`  black`} fillOpacity="0.7" />
							</svg>

						</button>

					</div>
					<div className="..5x2:block pt-3 -mt-2 z-10 hidden relative px-1 bg-shadow">
						<div className="absolute -left-3 top-0 bottom-0 w-3 bg-white">	</div>
						<div className="absolute -right-3 top-0 bottom-0 w-3 bg-white">	</div>
						<div>
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<p className="font-montserrat mr-6px text-13px ..7x230:text-11px">₸ <span className="line-through text-black-70pe">1 580 900.00</span></p>
									<p className="font-montserrat text-13px text-label-pink-2 ..7x230:text-11px font-semibold flex items-center">₸ 1 580 900.00 <span className="font-normal mx-6px">(-29%)</span> </p>

								</div>
								<div className="flex items-center text-black-70pe font-montserrat text-13px">
									<svg width="16" className="mr-0.5" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3333 14.3333C10.3333 14.3333 5.99998 14.6667 3.66665 12C1.33331 9.33333 1.33331 1.33333 1.33331 1.33333C1.33331 1.33333 9.33331 1 12 3C14.6666 5 14 10.6667 14 10.6667" stroke="#337202" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M14.6666 14.6668C14.6666 14.6668 10.9402 11.8507 8.66665 9.3335C6.39308 6.81633 5.33331 4.3335 5.33331 4.3335" stroke="#337202" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M8.66669 9.33333L9.00002 5" stroke="#337202" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M8.66665 9.33333L5.33331 9" stroke="#337202" stroke-linecap="round" stroke-linejoin="round" />
									</svg>


									1.8 Б
								</div>
							</div>
							<p></p>

						</div>
						<div className="flex mt-3 justify-between items-center">
							<p className="font-montserrat text-gray-quick-silver text-11px  items-center text-center ">В наличии <br /> <span className="text-primary">{'>'} 50 шт.</span></p>
							<div className="flex">
								<button className="  border px-26px mr-3 border-gray-light2 h-8 font-lora text-xs font-medium text-label-orange  ..7x01:mr-1 ..7x01:px-4 ">374 De</button>
								<button className="  bg-primary px-52px font-montserrat h-8 font-medium text-xs text-white ..7x01:px-7">Купить</button>

							</div>

						</div>
					</div>
					<div className="pt-6 transformD bg-white ..5x1:w-64 ..5x2:mx-0 ..5x1:mx-4  w-full ..5x2:w-full ..5x2:!translate-x-0 .6x3:w-96  mr-12 .4x1:w-80 .2x10:mr-2 .1x1:mr-0">
						<p className="font-montserrat font-medium text-xl mb-2 .1x1:mb-0.5 .5x1:text-sm ..7x1:text-sm">Забота о себе каждый день</p>
						<p className="font-montserrat .6x3:w-full  text-black-70pe w-475px ..5x1:w-auto .6x3:text-13px .1x1:text-gray-quick-silver ..7x11:h-9 textdots leading-140%">Маска отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения, придает коже ухоженный вид. Насыщает питательными элементами, удерживает влагу внутри, отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения</p>
						<button onClick={scrollDescription} className="..6x04:hidden font-montserrat font-medium text-13px text-primary  mb-5 .1x1:mb-1">Всё о товаре</button>
						<button onClick={scrollDescriptionPhone} className="..6x04:block hidden font-montserrat font-medium text-13px border-b border-dashed border-primary text-primary  mb-5 mt-1 .1x1:mb-1">Подробнее о товаре</button>
						<p onMouseEnter={setHov} onMouseLeave={setHov} onClick={copy} className="cursor-pointer .3x1:text-13px ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 relative text-gray-quick-silver flex  items-center ">Артикул: <span className="ml-6px font-montserrat text-gray-quick-silver letterSpacing-4px flex items-center ">30115/01 <svg className=" ml-6px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask0_2812_712213" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
								<path fillRule="evenodd" clipRule="evenodd" d="M7.35034 0.75H15.6004C16.551 0.75 17.2504 1.44937 17.2504 2.40001V10.65C17.2504 11.6007 16.551 12.3001 15.6004 12.3001H12.3001V15.6C12.3001 16.5506 11.6007 17.25 10.65 17.25H2.40001C1.44937 17.25 0.75 16.5506 0.75 15.6V7.34992C0.75 6.39929 1.44937 5.69992 2.40001 5.69992H5.70033V2.40001C5.70033 1.44937 6.3997 0.75 7.35034 0.75ZM5.70033 7.34992H2.40001V15.6H10.65V12.3001H7.35034C6.3997 12.3001 5.70033 11.6007 5.70033 10.65V7.34992ZM7.34955 2.39989V10.6499H15.5996V2.39989H7.34955Z" fill="white" />
							</mask>
							<g mask="url(#mask0_2812_712213)">
								<rect x="-0.900391" y="-0.899902" width="19.8001" height="19.8001" fill={hoverCopy ? '#337202' : "#DBDCDA"} />
							</g>
						</svg></span>
							{showCopy && <div className="absolute h-42px right-120px bg-black-70pe w-36 flex items-center justify-center">
								<div className="relative text-11px font-montserrat text-white-80pe leading-140% px-2">
									Скопировано в буфер обмена
									<div className="absolute h-7px w-7px -left-1 top-3 rotSearchHover bg-trean">

									</div>
								</div>


							</div>}

						</p>
						<Link href={'/'}>
							<p className=".3x1:text-13px cursor-pointer ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 text-gray-quick-silver flex  items-center ">Серия: <span className="ml-6px font-montserrat text-gray-quick-silver hover:text-primary letterSpacing-2px underline">COLLAGEN ACTIVE</span></p>

						</Link>
						<p className=".3x1:text-13px ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 text-gray-quick-silver flex  items-center ">Вес: <span className="ml-6px font-montserrat text-gray-quick-silver">18г.</span></p>
						<p className=".3x1:text-13px ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 text-gray-quick-silver flex  items-center ">Возраст: <span className="ml-6px font-montserrat text-gray-quick-silver">любой возраст</span></p>
						<p className=".3x1:text-13px ..6x04:hidden .1x1:mb-1.5 font-montserrat mb-3 text-gray-quick-silver flex  items-center  ">Потребность кожи: <span className="ml-6px font-montserrat text-gray-quick-silver">борьба с морщинами</span></p>
						<p className=".3x1:text-13px ..6x04:hidden .1x1:mb-0 font-montserrat mb-3 text-gray-quick-silver flex  items-center ">Физические свойства: <span className="ml-6px font-montserrat text-gray-quick-silver">1 шт.</span></p>
						<div className="mb-2 .1x1:mb-3 .1x1:mt-3">
							<p className="font-montserrat mb-2 text-gray-quick-silver flex .3x1:text-13px .1x1:mb-1 items-center ">Эффекты:</p>
							<div className="flex  overflow-x-auto whitespace-nowrap">
								<EffectsItemDetail title={'против перхоти'} />
								<EffectsItemDetail title={'против седины'} />
								<EffectsItemDetail title={'против выпадения'} />

							</div>

						</div>
						<p className="font-montserrat mb-2 .1x1:text-13px .1x1:mb-1 text-gray-quick-silver flex  items-center ">Тон: <span className="ml-6px font-montserrat text-gray-quick-silver letterSpacing-4px ..5x2:">06</span></p>

						<div className="..6x5:overflow-x-scroll ..6x5:whitespace-nowrap  ">


							<div className="flex  flex-wrap w-full ..6x04:flex-nowrap  ..6x04:w-475px">
								<div className="h-11 hover:bg-gray-light transition-all .1x1:h-8 .1x1:!w-11  w-52px cursor-pointer relative itemTon mb-2 border flex items-center justify-center border-stroke mr-2">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0">
										<Image src={oneTon} />
									</div>

									<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-4 -top-14 h-42px w-86px bg-white">
										<p className="text-13px text-black-70pe font-montserrat">Тон: 01</p>
										<div className="w-18px -bottom-1 rotSearchHover left-8 -z-10  h-18px bg-white absolute ">

										</div>
									</div>
								</div>
								<div className="h-11 hover:bg-gray-light transition-all .1x1:h-8 .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2 border flex items-center justify-center border-stroke mr-2">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"> <Image src={twoTon} /></div>

									<div className="itemTonHover transition-all flex justify-center items-center !hidden opacity-0 rounded-lg py-3 px-4 absolute -left-4 -top-14 h-42px w-86px bg-white">
										<p className="text-13px text-black-70pe font-montserrat">Тон: 02</p>
										<div className="w-18px -bottom-1 rotSearchHover left-8 -z-10  h-18px bg-white absolute ">

										</div>
									</div>
								</div>
								<div className="h-11 hover:bg-gray-light transition-all .1x1:h-8 .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2 border flex items-center justify-center border-stroke mr-2">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"><Image src={treeTon} /></div>

									<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-4 -top-14 h-42px w-86px bg-white">
										<p className="text-13px text-black-70pe font-montserrat">Тон: 03</p>
										<div className="w-18px -bottom-1 rotSearchHover left-8 -z-10  h-18px bg-white absolute ">

										</div>
									</div>
								</div>
								<div className="h-11 hover:bg-gray-light transition-all .1x1:h-8 .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2 border flex items-center justify-center border-stroke mr-2">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"><Image src={fourTon} /></div>

									<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-4 -top-14 h-42px w-86px bg-white">
										<p className="text-13px text-black-70pe font-montserrat">Тон: 04</p>
										<div className="w-18px -bottom-1 rotSearchHover left-8 -z-10  h-18px bg-white absolute ">

										</div>
									</div>
								</div>
								<div className="h-11 hover:bg-gray-light transition-all .1x1:h-8 .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2 border flex items-center justify-center border-stroke mr-2">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"> <Image src={fiveTon} /></div>

									<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-4 -top-14 h-42px w-86px bg-white">
										<p className="text-13px text-black-70pe font-montserrat">Тон: 05</p>
										<div className="w-18px -bottom-1 rotSearchHover left-8 -z-10  h-18px bg-white absolute ">

										</div>
									</div>
								</div>
								<div className="h-11 hover:bg-gray-light transition-all .1x1:h-8 .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2 border flex items-center justify-center border-black mr-2">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"><Image src={sixTon} /> </div>

									<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-4 -top-14 h-42px w-86px bg-white">
										<p className="text-13px text-black-70pe font-montserrat">Тон: 06</p>
										<div className="w-18px -bottom-1 rotSearchHover left-8 -z-10  h-18px bg-white absolute ">

										</div>
									</div>
								</div>
								<div className="h-11 hover:bg-gray-light transition-all .1x1:h-8 ..5x2:overflow-hidden .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2  bg-gray-light flex items-center justify-center   mr-2">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"><Image src={sevenTon} /> </div>

									<hr className="px w-14 text-gray absolute rotSearchHover" />
									<hr className="px w-14 text-gray absolute unrotSearchHover" />
									<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-20 -top-14 h-42px w-48 bg-white">
										<p className="text-13px text-black-70pe font-montserrat flex items-center">Тон: 07 / <span className="ml-1 text-label-pink-2">нет в наличии</span></p>
										<div className="w-18px -bottom-1 rotSearchHover left-24 -z-10 h-18px bg-white absolute ">

										</div>

									</div>
								</div>
								<div className="h-11 hover:bg-gray-light transition-all mr-0 .2x10:mr-2 .1x1:h-8 ..5x2:overflow-hidden .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2  bg-gray-light flex items-center justify-center ">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"><Image src={eightTon} /> </div>


									<hr className="px w-14 text-gray absolute rotSearchHover" />
									<hr className="px w-14 text-gray absolute unrotSearchHover" />
									<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-20 -top-14 h-42px w-48 bg-white">
										<p className="text-13px text-black-70pe font-montserrat flex items-center">Тон: 08 / <span className="ml-1 text-label-pink-2">нет в наличии</span></p>
										<div className="w-18px -bottom-1 rotSearchHover left-24 -z-10 h-18px bg-white absolute ">

										</div>

									</div>
								</div>
								<div className="h-11 hover:bg-gray-light transition-all .1x1:h-8 .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2 border flex items-center justify-center border-stroke mr-2">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"><Image src={nineTon} /> </div>

									<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-4 -top-14 h-42px w-86px bg-white">
										<p className="text-13px text-black-70pe font-montserrat">Тон: 09</p>
										<div className="w-18px -bottom-1 rotSearchHover left-8 h-18px -z-10  bg-white absolute ">

										</div>
									</div>
								</div>
								<div className="h-11 hover:bg-gray-light transition-all .1x1:h-8 .1x1:w-11 w-52px cursor-pointer relative itemTon mb-2 border flex items-center justify-center border-stroke mr-2">
									<div className="mt-1.5 .1x1:h-5 .1x1:w-5 .1x1:mt-0"> <Image src={tenTon} /></div>

									<div className="itemTonHover transition-all flex justify-center !hidden items-center opacity-0 rounded-lg py-3 px-4 absolute -left-4 -top-14 h-42px w-86px bg-white">
										<p className="text-13px text-black-70pe font-montserrat">Тон: 10</p>
										<div className="w-18px -bottom-1 rotSearchHover left-8 h-18px -z-10  bg-white absolute ">

										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="mt-6 w-full ..5x2:hidden transformD .6x3:!translate-x-0 ..5x1:w-72 .6x3:-ml-16 .4x1:w-80 .6x3:w-96 ..5x2:mt-5 ..5x5:w-full .2x10:w-910px">
					<div className="border ..6x04:hidden border-gray-light p-5 .1x1:p-3">
						<div className="flex justify-between items-center">
							<p className="font-montserrat ">₸ <span className="line-through text-black-70pe">1 580 900.00</span></p>
							<div className="flex items-center text-black-70pe font-montserrat text-xl ..5x1:text-base">
								<svg className="mr-0.5 ..5x1:h-4 ..5x1:w-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.9165 17.9167C12.9165 17.9167 7.49984 18.3333 4.58317 15C1.6665 11.6667 1.6665 1.66667 1.6665 1.66667C1.6665 1.66667 11.6665 1.25 14.9998 3.75C18.3332 6.25 17.4998 13.3333 17.4998 13.3333" stroke="#337202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M18.3332 18.3333C18.3332 18.3333 13.6751 14.8131 10.8332 11.6666C7.99121 8.52017 6.6665 5.41663 6.6665 5.41663" stroke="#337202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M10.8335 11.6667L11.2502 6.25" stroke="#337202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M10.8332 11.6667L6.6665 11.25" stroke="#337202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>

								1.8 Б
							</div>
						</div>
						<div className="mt-10px mb-4">
							<p className="font-montserrat text-xl text-label-pink-2 font-semibold flex items-center .4x1:text-base ..5x1:text-sm">₸ 1 580 900.00 <span className="font-normal mx-6px">(-29%)</span> <span className="text-26px font-normal text-stroke ">/</span> <span className="mx-6px .4x1:text-base text-xl text-label-orange font-medium font-montserrat">7 500 De</span></p>

						</div>
						<div className="flex w-full justify-between">

							<p className=" font-montserrat text-gray-quick-silver flex items-center .2x50:text-sm .4x1:text-xs">В наличии <span className="ml-1.5  font-medium relative text-primary flex items-center"> {'>'} 50 шт.
								{isLike ? <svg className="ml-1 mr-2   cursor-pointer transition-all" onClick={() => setLike(false)} width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="white"></circle><g filter="url(#filter0_d_3587_1020586)"><path d="M29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z" fill="#FF6363"></path></g><defs><filter id="filter0_d_3587_1020586" x="4" y="10" width="40.7084" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="5"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3587_1020586"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3587_1020586" result="shape"></feBlend></filter></defs></svg>
									: <svg onClick={() => setLike(true)} onMouseEnter={() => setHoverHeart(true)} onMouseLeave={() => setHoverHeart(false)} className="mx-4 .4x1:mx-1 mr-5 cursor-pointer transition-all" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.4578 19.1008L12.3542 19.2044L12.2403 19.1008C7.32207 14.6381 4.07084 11.6872 4.07084 8.69482C4.07084 6.62398 5.62398 5.07084 7.69482 5.07084C9.28937 5.07084 10.8425 6.10627 11.3913 7.51444H13.3172C13.8659 6.10627 15.4191 5.07084 17.0136 5.07084C19.0845 5.07084 20.6376 6.62398 20.6376 8.69482C20.6376 11.6872 17.3864 14.6381 12.4578 19.1008ZM17.0136 3C15.212 3 13.4828 3.83869 12.3542 5.15368C11.2256 3.83869 9.49646 3 7.69482 3C4.50572 3 2 5.49537 2 8.69482C2 12.5984 5.52044 15.7978 10.8529 20.6332L12.3542 22L13.8556 20.6332C19.188 15.7978 22.7084 12.5984 22.7084 8.69482C22.7084 5.49537 20.2027 3 17.0136 3Z" fill={`${hoverHeart ? '#F14155' : "#EDEEEC"}`} />
									</svg>}
							</span>
							</p>
							<div className="h-14 .1x1:h-12 .2x50:ml-6 ml-4 .2x00:ml-1  border  flex-1 border-gray-light2 flex items-center justify-center">
								<button  ><svg onClick={decrement} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.25 9.75H3.75V8.25H14.25V9.75Z" fill={`${currentLenghtProduct > 0 ? 'black' : '#EDF1F0'} `} />
								</svg>
								</button>
								<p className="font-montserrat text-sm font-semibold mx-7">{currentLenghtProduct}</p>
								<button><svg onClick={increment} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.25 9.75H9.75V14.25H8.25V9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75Z" fill="black" fillOpacity="0.7" />
								</svg></button>
							</div>

						</div>

						<div className="mt-3 flex justify-between">
							<button className="h-14 flex-1 .1x1:h-12 border border-gray-light2 font-montserrat text-13px font-medium text-label-orange tracking-wider transition-all hover:bg-label-orange hover:text-white mr-1.5 .4x1:text-10px" onClick={setDe} >{clickDe ? 'ДОБАВЛЕНО ЗА DE' : 'КУПИТЬ ЗА DE'}  </button>
							<button className="h-14 flex-1 .1x1:h-12 bg-primary   w-222px tracking-wider border border-primary font-montserrat font-semibold text-13px hover:bg-white hover:text-primary hover:border-gray-light2 transition-all text-white ml-1.5 .4x1:text-10px" onClick={setBasket}>{clickBasket ? 'В КОРЗИНЕ' : "В КОРЗИНУ"}</button>

						</div>
					</div>


					<div onClick={(e) => setFilter('sale', e)} className={`  h-110px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.sale ? 'activeSlide' : ''}`}>

						<div id="click" className={`flex px-3 ..6x04:pl-0 ..6x04:mt-0 transiton-all mt-8 .1x1:pb-1 .1x1:mt-0   items-center mt-3 relative ..6x04:pb-10px pb-4 border-b border-dashed border-gray ${dropDownds.sale ? 'border-none pb-0' : ''}`}>
							<svg className={`absolute .1x1:right-1  right-3 transition-all top-5 ${dropDownds.sale ? 'prev_rotate' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
							</svg>

							<svg className="mr-4 ..5x1:mr-1.5 ..6x04:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.2542 27.8353C23.3647 29.4528 20.5385 30.1606 16.7902 30.2415C16.79 30.2415 16.7899 30.2415 16.7898 30.2415L16.2482 30.2497L16.2466 30.2497L15.7012 30.2521C15.7011 30.2521 15.701 30.2521 15.701 30.2521C12.5102 30.2521 9.86256 29.3881 7.93451 27.742C6.00752 26.0968 4.78416 23.6576 4.46462 20.477C4.13625 17.2085 5.5032 14.5311 8.24699 11.6928C8.2472 11.6926 8.24742 11.6923 8.24763 11.6921L8.54256 11.3945L10.5892 9.40644L10.5892 9.4065L10.5927 9.40294L10.8797 9.10511L10.8798 9.10518L10.8835 9.10109L11.1052 8.85351L11.1052 8.85354L11.1076 8.85076C11.2654 8.66573 11.3736 8.51485 11.417 8.40492L11.417 8.40492C11.8572 7.28866 11.9238 5.30469 11.5817 2.54785C11.4681 1.63198 12.4 0.944323 13.2416 1.32303C16.1206 2.6185 18.1613 4.42283 19.3257 6.72994C19.6611 7.39461 19.8955 8.11727 20.0496 8.90709C20.0652 8.98673 20.0798 9.06472 20.0934 9.14164L20.1655 9.59944L20.2191 10.0611C20.2266 10.1389 20.2335 10.218 20.2398 10.2992C20.2399 10.2996 20.2399 10.3 20.2399 10.3004L20.2724 10.8216L20.2949 11.418L20.295 11.4205L20.3162 12.4226L20.3239 12.7903L20.5755 12.5221L20.639 12.4544L20.6391 12.4545L20.642 12.4512C20.9882 12.0601 21.3745 11.5512 21.7984 10.9281L21.7996 10.9263L22.2343 10.2676L22.2353 10.266C22.3852 10.0324 22.5393 9.78611 22.6975 9.52703L22.6979 9.52638L22.9375 9.12947L22.9379 9.12884C23.3669 8.41023 24.386 8.352 24.8942 9.01707C27.0483 11.8366 28.1201 15.4598 28.1201 19.8556C28.1201 23.6799 27.1378 26.2228 25.2542 27.8353ZM14.3835 4.65839L14.1358 4.48304L14.1469 4.78631L14.1596 5.13161C14.1596 5.13191 14.1596 5.13222 14.1596 5.13252C14.2034 6.87011 14.0259 8.24068 13.6186 9.27327C13.3805 9.87704 12.9374 10.4185 12.0811 11.2606C12.0809 11.2608 12.0807 11.261 12.0805 11.2612L10.7926 12.502L10.7926 12.502L10.7913 12.5032L10.0353 13.249L10.0353 13.2489L10.0322 13.2522L9.64665 13.656L9.64664 13.656L9.64529 13.6575C7.57078 15.8889 6.5851 17.908 6.81943 20.2405C7.07321 22.7665 7.98817 24.6838 9.50454 25.9679C11.0194 27.2508 13.1156 27.8855 15.7012 27.8855L15.7027 27.8855L16.7454 27.8752L16.7454 27.8753L16.7489 27.8752L17.4798 27.851L17.4817 27.8509C20.3448 27.721 22.4229 27.1884 23.782 25.9372C25.1458 24.6816 25.7535 22.7334 25.7535 19.8556C25.7535 16.8914 25.2217 14.372 24.1615 12.2841L24.1615 12.2841L24.1604 12.2821L24.0949 12.1576L23.9777 11.9352L23.8376 12.1439L23.6762 12.3842C23.6761 12.3844 23.676 12.3845 23.6759 12.3847C22.9624 13.4285 22.3192 14.2081 21.7109 14.7371C21.1043 15.2647 20.5415 15.5352 19.986 15.5791L19.8205 15.5855C19.3316 15.5848 18.9541 15.4212 18.6725 15.1517C18.3877 14.8793 18.192 14.4898 18.0879 14.0271C18.0788 13.9869 18.0704 13.9472 18.0626 13.9077L18.0209 13.6578C18.0153 13.6167 18.0102 13.5746 18.0054 13.5309L17.9804 13.2352L17.9561 12.6649L17.9216 11.2573L17.9217 11.2573L17.9215 11.2539L17.8986 10.7635L17.8986 10.7635L17.8983 10.7593L17.8663 10.3319L17.8664 10.3319L17.8658 10.3264L17.8221 9.93741L17.8221 9.93741L17.8217 9.93431C17.8131 9.87027 17.804 9.80683 17.7941 9.74346L17.7942 9.74345L17.7936 9.74048L17.7273 9.3632L17.7273 9.36319L17.7268 9.36043C17.6127 8.7759 17.4451 8.2564 17.2129 7.79625L17.0789 7.86384L17.2129 7.79625C16.6454 6.6719 15.7936 5.68873 14.6484 4.846L14.6485 4.84598L14.6462 4.84438L14.3835 4.65839ZM14.1561 18.3874L14.0604 18.1288L13.8953 18.3497L13.6521 18.675L13.6521 18.675L13.6503 18.6775C12.8007 19.8653 12.4757 20.9497 12.661 21.921C12.848 22.9014 13.5391 23.5458 14.3811 23.7766C15.1233 23.9802 15.8502 23.8869 16.4834 23.3229C16.6001 23.219 16.6869 23.0923 16.7293 22.9384C16.7715 22.7854 16.767 22.6165 16.7196 22.4319C16.6261 22.068 16.3597 21.62 15.8975 21.0561L15.8975 21.0561L15.8953 21.0535L15.558 20.6604L15.558 20.6603L15.5551 20.6571L15.3621 20.4451L15.3613 20.4441C14.8937 19.9391 14.5141 19.3091 14.2171 18.5521C14.2169 18.5516 14.2167 18.5512 14.2166 18.5507L14.1561 18.3874ZM13.7552 26.059L13.7155 26.2037L13.7551 26.059C12.0965 25.6042 10.7065 24.3055 10.3362 22.3645C9.87264 19.9347 11.1153 17.4382 13.946 14.8653C14.6515 14.224 15.787 14.6378 15.9146 15.5827C16.1239 17.1331 16.531 18.2239 17.0979 18.8363C18.2328 20.0621 18.9258 21.2277 19.109 22.2819C19.29 23.3234 18.9766 24.2717 18.0574 25.0903C16.7518 26.2531 15.2126 26.4587 13.7552 26.059Z" fill="black" fillOpacity="0.7" stroke="#F7F8F6" strokeWidth="0.3" />
							</svg>
							<svg className="mr-3 ..6x04:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M23.5722 25.9745C21.843 27.4548 19.2393 28.1165 15.7379 28.192C15.7376 28.1921 15.7373 28.1921 15.737 28.1921L15.2321 28.1997L15.2288 28.1998L14.7199 28.202C14.7196 28.202 14.7193 28.202 14.719 28.202C11.7564 28.2019 9.31418 27.3998 7.54215 25.8869C5.77214 24.3758 4.64043 22.1297 4.34422 19.1813C4.04295 16.1826 5.29057 13.7167 7.84552 11.0735L8.12086 10.7956L10.0385 8.93287L10.0386 8.93299L10.0454 8.92587L10.3146 8.64665L10.3147 8.64679L10.322 8.63861L10.5299 8.40651L10.53 8.40657L10.5347 8.401C10.6821 8.22812 10.8003 8.06864 10.8518 7.93811L10.8518 7.9381C11.2806 6.85086 11.337 4.95499 11.0161 2.369C10.9249 1.63372 11.673 1.08166 12.3487 1.3857C15.0225 2.58884 16.904 4.25792 17.9756 6.38115C18.2825 6.98923 18.498 7.65245 18.6402 8.38094L18.9346 8.32347L18.6402 8.38094C18.6545 8.45424 18.6679 8.52595 18.6804 8.59661L18.7473 9.02109L18.797 9.44911C18.8038 9.52016 18.8101 9.59251 18.8159 9.66669L18.8462 10.1532L18.8673 10.7102L18.8871 11.6496L18.9027 12.3849L19.4059 11.8485L19.4654 11.7851L19.4655 11.7851L19.4712 11.7786C19.8018 11.4052 20.1682 10.9223 20.5678 10.3347L20.5679 10.3347L20.5702 10.3312L20.9777 9.71364L20.9778 9.71366L20.9798 9.71044C21.121 9.49043 21.2661 9.25848 21.415 9.01466L21.4158 9.01337L21.6404 8.64126L21.6412 8.64001C21.9856 8.06309 22.8038 8.01635 23.2117 8.55028C25.2052 11.1595 26.2033 14.5197 26.2033 18.6147C26.2033 22.1739 25.2896 24.5043 23.5722 25.9745ZM13.5767 4.23717L13.0813 3.88649L13.1035 4.49302L13.1154 4.81657C13.1561 6.4348 12.9899 7.69537 12.6192 8.63523C12.4094 9.16736 12.016 9.65477 11.2149 10.4427L10.0075 11.6058L10.0075 11.6058L10.005 11.6083L9.29627 12.3075L9.29618 12.3074L9.28996 12.3139L8.92852 12.6925L8.9285 12.6925L8.9258 12.6954C6.96594 14.8034 6.0085 16.7399 6.2347 18.9914C6.47569 21.3901 7.34717 23.2299 8.80758 24.4666C10.265 25.7008 12.271 26.302 14.7199 26.302L14.7229 26.302L15.7005 26.2924L15.7005 26.2925L15.7074 26.2923L16.3927 26.2696L16.3964 26.2695C19.0893 26.1473 21.0863 25.6461 22.4036 24.4334C23.7304 23.2119 24.3033 21.3306 24.3033 18.6147C24.3033 15.817 23.8015 13.4291 22.7935 11.4442L22.7936 11.4442L22.7915 11.4402L22.73 11.3235L22.4958 10.8787L22.2155 11.296L22.0649 11.5203C22.0647 11.5206 22.0645 11.521 22.0642 11.5213C21.3987 12.4949 20.8047 13.2129 20.2494 13.6958C19.6976 14.1758 19.202 14.408 18.7275 14.4463L18.5789 14.452C18.1609 14.4508 17.8481 14.3119 17.6157 14.0896C17.3772 13.8614 17.2056 13.5275 17.1129 13.1155C17.1049 13.0798 17.0975 13.0448 17.0905 13.0099L17.0523 12.7804C17.0475 12.7446 17.043 12.7079 17.0388 12.6699L17.0157 12.3979L16.9932 11.8681L16.9609 10.5498L16.961 10.5498L16.9607 10.5431L16.9392 10.0834L16.9393 10.0834L16.9387 10.075L16.9087 9.6743L16.9089 9.67428L16.9076 9.66318L16.8666 9.29854L16.8667 9.29853L16.8659 9.29233C16.8577 9.23118 16.8489 9.17059 16.8396 9.11008L16.8396 9.11007L16.8386 9.10412L16.7764 8.75042L16.7764 8.75041L16.7754 8.74489C16.6662 8.18563 16.505 7.68416 16.2794 7.2372L16.2794 7.23719C15.7349 6.15825 14.9188 5.2179 13.8274 4.41477L13.8275 4.41473L13.823 4.41154L13.5767 4.23717ZM12.9377 24.2767L12.8583 24.566L12.9377 24.2766C11.4362 23.8649 10.1816 22.6918 9.84684 20.9369L9.55215 20.9931L9.84684 20.9369C9.42783 18.7408 10.5429 16.4526 13.1816 14.0542C13.748 13.5394 14.6596 13.8715 14.762 14.6301C14.9596 16.0936 15.347 17.1565 15.9124 17.7673C16.9674 18.9069 17.5936 19.9722 17.7577 20.9166C17.9174 21.8356 17.6458 22.6703 16.8229 23.4031L17.0224 23.6272L16.8229 23.4031C15.6447 24.4524 14.2596 24.6392 12.9377 24.2767ZM13.4209 17.1829L13.2295 16.6657L12.8993 17.1074L12.6713 17.4124L12.6712 17.4124L12.6676 17.4175C11.8573 18.5504 11.5282 19.6112 11.7132 20.5808C11.9009 21.5649 12.5975 22.2132 13.4402 22.4443C14.1788 22.6469 14.9185 22.5549 15.5593 21.9843C15.6881 21.8695 15.7883 21.7253 15.8374 21.5471C15.8861 21.3709 15.8787 21.1836 15.829 20.9903C15.7325 20.6144 15.4642 20.1722 15.0272 19.6391L15.0273 19.639L15.0229 19.6339L14.7066 19.2653L14.7067 19.2652L14.7008 19.2588L14.52 19.06L14.5182 19.0581C14.0961 18.6021 13.75 18.0299 13.4775 17.3358L13.4209 17.1829Z" fill="black" fillOpacity="0.7" stroke="white" strokeWidth="0.6" />
							</svg>


							<div>
								<p id="click" className='font-montserrat font-semibold ..6x04:font-medium ..6x04:text-13px pt-2 .1x1:text-13px'>Скидка 35%</p>
								<p id="click" className='font-montserrat text-label-pink-2 ..6x04:mt-1 ..6x04:text-13px .1x1:text-13px'>1 532.30 ₽ </p>

							</div>

						</div>
						<div className="p-3">
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
					<div onClick={(e) => setFilter('free', e)} className={` h-100px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.free ? 'activeSlide mb-3' : ''}`}>
						<div id="click" className={`flex ..6x04:pl-0 px-3 .1x1:pb-1 .1x1:pt-0 pt-2 ..5x1:pr-0 .1x1:mt-0 pb-4 items-center mt-5px relative ..6x04:pb-10px  border-b border-dashed border-gray ${dropDownds.free ? 'border-none pb-0' : ''}`}>
							<svg className={`absolute  .1x1:right-1  right-3 top-5 transition-all ${dropDownds.free ? 'prev_rotate ' : ''} `} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
							</svg>

							<svg className={`mr-4 absolute left-3 top-2.5 ..5x1:mr-1.5 ..6x04:hidden .1x1:top-0`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.1615 19.9048C25.8452 19.6313 26.1778 18.8554 25.9043 18.1716C25.6308 17.4879 24.8549 17.1554 24.1712 17.4289L23.4767 17.7066C22.793 17.9801 22.4604 18.7561 22.7339 19.4398C23.0074 20.1235 23.7834 20.4561 24.4671 20.1826L25.1615 19.9048Z" fill="black" fillOpacity="0.7" />
								<path d="M20.3004 21.8492C20.9841 21.5758 21.3167 20.7998 21.0432 20.1161C20.7697 19.4324 19.9938 19.0998 19.31 19.3733L17.9212 19.9289C17.2374 20.2023 16.9049 20.9783 17.1784 21.662C17.4519 22.3457 18.2278 22.6783 18.9115 22.4048L20.3004 21.8492Z" fill="black" fillOpacity="0.7" />
								<path d="M14.7449 24.0715C15.4286 23.798 15.7611 23.022 15.4876 22.3383C15.2142 21.6546 14.4382 21.322 13.7545 21.5955L12.3656 22.1511C11.6819 22.4246 11.3493 23.2005 11.6228 23.8842C11.8963 24.5679 12.6723 24.9005 13.356 24.627L14.7449 24.0715Z" fill="black" fillOpacity="0.7" />
								<path d="M9.18931 26.2937C9.87302 26.0202 10.2056 25.2442 9.93209 24.5605C9.6586 23.8768 8.88264 23.5443 8.19893 23.8177L7.50449 24.0955C6.82078 24.369 6.48822 25.145 6.7617 25.8287C7.03519 26.5124 7.81115 26.8449 8.49486 26.5715L9.18931 26.2937Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M5.33301 15.3335C5.33301 13.1244 7.12387 11.3335 9.33301 11.3335C11.5421 11.3335 13.333 13.1244 13.333 15.3335C13.333 16.1524 12.9865 17.0777 12.5256 17.9995C12.042 18.9667 11.3368 20.1119 10.4301 21.4246C10.1811 21.785 9.77103 22.0002 9.33301 22.0002C8.89498 22.0002 8.4849 21.785 8.23595 21.4246C7.32917 20.1119 6.62402 18.9667 6.14044 17.9995C5.67954 17.0777 5.33301 16.1524 5.33301 15.3335ZM9.33301 14.0002C8.59663 14.0002 7.99967 14.5971 7.99967 15.3335C7.99967 15.4964 8.09758 15.9509 8.52558 16.8069C8.73456 17.2249 9.00279 17.7013 9.33301 18.2376C9.66323 17.7013 9.93146 17.2249 10.1404 16.8069C10.5684 15.9509 10.6663 15.4964 10.6663 15.3335C10.6663 14.5971 10.0694 14.0002 9.33301 14.0002Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M22.6663 5.3335C20.4572 5.3335 18.6663 7.12436 18.6663 9.3335C18.6663 10.1524 19.0129 11.0777 19.4738 11.9995C19.9574 12.9667 20.6625 14.1119 21.5693 15.4246C21.8182 15.785 22.2283 16.0002 22.6663 16.0002C23.1044 16.0002 23.5145 15.785 23.7634 15.4246C24.6702 14.1119 25.3753 12.9667 25.8589 11.9995C26.3198 11.0777 26.6663 10.1524 26.6663 9.3335C26.6663 7.12436 24.8755 5.3335 22.6663 5.3335ZM21.333 9.3335C21.333 8.59712 21.93 8.00016 22.6663 8.00016C23.4027 8.00016 23.9997 8.59712 23.9997 9.3335C23.9997 9.49645 23.9018 9.95094 23.4738 10.8069C23.2648 11.2249 22.9966 11.7013 22.6663 12.2376C22.3361 11.7013 22.0679 11.2249 21.8589 10.8069C21.4309 9.95094 21.333 9.49645 21.333 9.3335Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M4.66634 1.3335C2.82539 1.3335 1.33301 2.82588 1.33301 4.66683V27.3335C1.33301 29.1744 2.82539 30.6668 4.66634 30.6668H27.333C29.174 30.6668 30.6663 29.1744 30.6663 27.3335V4.66683C30.6663 2.82588 29.174 1.3335 27.333 1.3335H4.66634ZM3.99967 4.66683C3.99967 4.29864 4.29815 4.00016 4.66634 4.00016H27.333C27.7012 4.00016 27.9997 4.29864 27.9997 4.66683V27.3335C27.9997 27.7017 27.7012 28.0002 27.333 28.0002H4.66634C4.29815 28.0002 3.99967 27.7017 3.99967 27.3335V4.66683Z" fill="black" fillOpacity="0.7" />
								<path d="M25.1615 19.9048C25.8452 19.6313 26.1778 18.8554 25.9043 18.1716C25.6308 17.4879 24.8549 17.1554 24.1712 17.4289L23.4767 17.7066C22.793 17.9801 22.4604 18.7561 22.7339 19.4398C23.0074 20.1235 23.7834 20.4561 24.4671 20.1826L25.1615 19.9048Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path d="M20.3004 21.8492C20.9841 21.5758 21.3167 20.7998 21.0432 20.1161C20.7697 19.4324 19.9938 19.0998 19.31 19.3733L17.9212 19.9289C17.2374 20.2023 16.9049 20.9783 17.1784 21.662C17.4519 22.3457 18.2278 22.6783 18.9115 22.4048L20.3004 21.8492Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path d="M14.7449 24.0715C15.4286 23.798 15.7611 23.022 15.4876 22.3383C15.2142 21.6546 14.4382 21.322 13.7545 21.5955L12.3656 22.1511C11.6819 22.4246 11.3493 23.2005 11.6228 23.8842C11.8963 24.5679 12.6723 24.9005 13.356 24.627L14.7449 24.0715Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path d="M9.18931 26.2937C9.87302 26.0202 10.2056 25.2442 9.93209 24.5605C9.6586 23.8768 8.88264 23.5443 8.19893 23.8177L7.50449 24.0955C6.82078 24.369 6.48822 25.145 6.7617 25.8287C7.03519 26.5124 7.81115 26.8449 8.49486 26.5715L9.18931 26.2937Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path fillRule="evenodd" clipRule="evenodd" d="M5.33301 15.3335C5.33301 13.1244 7.12387 11.3335 9.33301 11.3335C11.5421 11.3335 13.333 13.1244 13.333 15.3335C13.333 16.1524 12.9865 17.0777 12.5256 17.9995C12.042 18.9667 11.3368 20.1119 10.4301 21.4246C10.1811 21.785 9.77103 22.0002 9.33301 22.0002C8.89498 22.0002 8.4849 21.785 8.23595 21.4246C7.32917 20.1119 6.62402 18.9667 6.14044 17.9995C5.67954 17.0777 5.33301 16.1524 5.33301 15.3335ZM9.33301 14.0002C8.59663 14.0002 7.99967 14.5971 7.99967 15.3335C7.99967 15.4964 8.09758 15.9509 8.52558 16.8069C8.73456 17.2249 9.00279 17.7013 9.33301 18.2376C9.66323 17.7013 9.93146 17.2249 10.1404 16.8069C10.5684 15.9509 10.6663 15.4964 10.6663 15.3335C10.6663 14.5971 10.0694 14.0002 9.33301 14.0002Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path fillRule="evenodd" clipRule="evenodd" d="M22.6663 5.3335C20.4572 5.3335 18.6663 7.12436 18.6663 9.3335C18.6663 10.1524 19.0129 11.0777 19.4738 11.9995C19.9574 12.9667 20.6625 14.1119 21.5693 15.4246C21.8182 15.785 22.2283 16.0002 22.6663 16.0002C23.1044 16.0002 23.5145 15.785 23.7634 15.4246C24.6702 14.1119 25.3753 12.9667 25.8589 11.9995C26.3198 11.0777 26.6663 10.1524 26.6663 9.3335C26.6663 7.12436 24.8755 5.3335 22.6663 5.3335ZM21.333 9.3335C21.333 8.59712 21.93 8.00016 22.6663 8.00016C23.4027 8.00016 23.9997 8.59712 23.9997 9.3335C23.9997 9.49645 23.9018 9.95094 23.4738 10.8069C23.2648 11.2249 22.9966 11.7013 22.6663 12.2376C22.3361 11.7013 22.0679 11.2249 21.8589 10.8069C21.4309 9.95094 21.333 9.49645 21.333 9.3335Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
								<path fillRule="evenodd" clipRule="evenodd" d="M4.66634 1.3335C2.82539 1.3335 1.33301 2.82588 1.33301 4.66683V27.3335C1.33301 29.1744 2.82539 30.6668 4.66634 30.6668H27.333C29.174 30.6668 30.6663 29.1744 30.6663 27.3335V4.66683C30.6663 2.82588 29.174 1.3335 27.333 1.3335H4.66634ZM3.99967 4.66683C3.99967 4.29864 4.29815 4.00016 4.66634 4.00016H27.333C27.7012 4.00016 27.9997 4.29864 27.9997 4.66683V27.3335C27.9997 27.7017 27.7012 28.0002 27.333 28.0002H4.66634C4.29815 28.0002 3.99967 27.7017 3.99967 27.3335V4.66683Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
							</svg>
							<svg className={`mr-3 ..6x04:block hidden `} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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


							<div className="ml-12">
								<p id="click" className='font-montserrat font-semibold ..6x04:text-13px    ..6x04:font-medium .1x1:text-13px'>Бесплатная доставка</p>
								<div className={`flex items-center  ${dropDownds.free ? 'flex-wrap' : ''}`}>
									<div className='flex items-center mb-6px'>
										<p id="click" className='..7x230:text-10px font-montserrat  text-13px font-normal mr-1 ..7x01:mr-0.5 ..6x04:text-11px .4x1:text-10px'>Курьер</p>
										<span id="click" className='..7x230:text-9px ..5x1:text-8px  rounded-xl ..7x230:px-1 .2x00:mr-0.5 .2x00:text-10px  ..6x04:text-10px ..7x01:mr-0.5 font-montserrat  text-13px mr-2 p-1 px-1.5 bg-primary-searchBG text-primary flex items-center'><svg className="mr-1 .4x1:hidden ..6x04:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.2498 4.08336L5.24984 11.0834L2.0415 7.87503L2.864 7.05253L5.24984 9.43253L11.4273 3.26086L12.2498 4.08336Z" fill="#337202" />
										</svg> от 2 500 ₽</span>
									</div>
									<div className={`${dropDownds.free ? 'mr-2' : ""} mb-6px flex items-center`}>
										<p id="click" className='font-montserrat  ..7x230:text-10px   text-13px font-normal mr-1  ..7x01:mr-0.5 ..6x04:text-11px .4x1:text-10px'>ПВЗ</p>
										<span id="click" className='..7x230:text-9px ..5x1:text-8px .2x00:text-10px rounded-xl .2x00:mr-0.5 ..7x230:px-1 ..6x04:text-10px ..7x01:mr-0.5 font-montserrat  text-13px mr-2 p-1 px-1.5 bg-primary-searchBG text-primary flex items-center' ><svg className="mr-1 .4x1:hidden ..6x04:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.2498 4.08336L5.24984 11.0834L2.0415 7.87503L2.864 7.05253L5.24984 9.43253L11.4273 3.26086L12.2498 4.08336Z" fill="#337202" />
										</svg>от 1 500 ₽</span>
									</div>
									<div className={`flex items-center mb-6px ${dropDownds.free ? 'block' : 'hidden'}`}>
										<p id="click" className='..7x230:text-10px font-montserrat  text-13px font-normal mr-1 ..7x01:mr-0.5 ..6x04:text-11px .4x1:text-10px'>Бутики</p>
										<span id="click" className='..7x230:text-9px  rounded-xl ..7x230:px-1 .2x00:mr-0.5 .2x00:text-10px  ..6x04:text-10px ..7x01:mr-0.5 font-montserrat  text-13px mr-2 p-1 px-1.5 bg-primary-searchBG text-primary flex items-center'><svg className="mr-1 ..6x04:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.2498 4.08336L5.24984 11.0834L2.0415 7.87503L2.864 7.05253L5.24984 9.43253L11.4273 3.26086L12.2498 4.08336Z" fill="#337202" />
										</svg> от 0 ₽</span>
									</div>

									<button className={`${dropDownds.free ? 'hidden' : ""} p-1.5 ..5x1:text-8px px-3 ..7x230:text-9px ..7x230:px-1 .2x00:text-10px rounded-xl bg-primary-searchBG ..6x04:text-10px   text-11px font-montserrat text-black`}>ещё</button>



								</div>


							</div>
						</div>
						<div className={` px-4 pb-4 ${dropDownds.free ? 'block' : 'hidden'}`}>
							<div className="bg-white border border-stroke px-4 py-3">
								<div className="flex items-center   ">
									<div className="mr-3 -mt-6 relative">
										<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="30" height="30" rx="4" fill="#E8E9E7" />
											<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										</svg>
										<input type="checkbox" className="hidden" id="checkboxFree" />
										<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
											<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

											</div>
										</label>
									</div>

									<div className="flex border-b pb-3 border-dashed border-stroke items-center justify-between w-full">


										<div>
											<p className="font-montserrat mb-0.5 .2x00:text-xs">Курьерская</p>
											<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">2-3 дня</p>

											<SectionImgs variant={'Dostavka'} adapt={true} noCenter={true} mr3={true} textImg={[yandex, pochtaRF, ozon, cdek]} />

										</div>
										<div>
											<p className="font-montserrat text-13px text-gray-quick-silver mb-0.5 .2x00:text-xs">Бесплатно от:</p>
											<p className="font-montserrat text-sm mb-6px .2x00:text-xs">2 500.00 ₽ </p>
											<p className="font-montserrat font-medium text-primary text-13px .2x00:text-xs">
												Подробнее
											</p>
										</div>
									</div>

								</div>
								<div className="flex items-center  pt-2 ">
									<div className="mr-3 -mt-6 relative">
										<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="30" height="30" rx="4" fill="#E8E9E7" />
											<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										</svg>
										<input type="checkbox" className="hidden" id="checkboxFree" />
										<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
											<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

											</div>
										</label>
									</div>

									<div className="flex border-b pb-3 border-dashed border-stroke items-center justify-between w-full">


										<div>
											<p className="font-montserrat mb-0.5 .2x00:text-xs">ПВЗ/постаматы</p>
											<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">4-6 дней</p>

											<SectionImgs variant={'Dostavka'} adapt={true} noCenter={true} mr3={true} textImg={[ozon, cdek, berry]} />

										</div>
										<div>
											<p className="font-montserrat text-13px text-gray-quick-silver mb-0.5 .2x00:text-xs">Бесплатно от:</p>
											<p className="font-montserrat text-sm mb-6px .2x00:text-xs">1 500.00 ₽  </p>
											<p className="font-montserrat font-medium text-primary text-13px .2x00:text-xs">
												На карте
											</p>
										</div>
									</div>

								</div>
								<div className="flex items-center  pt-2 ">
									<div className="mr-3 -mt-6 relative">
										<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="30" height="30" rx="4" fill="#E8E9E7" />
											<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										</svg>
										<input type="checkbox" className="hidden" id="checkboxFree" />
										<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
											<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

											</div>
										</label>
									</div>

									<div className="flex   pb-3  items-center justify-between w-full">


										<div>
											<p className="font-montserrat mb-0.5 .2x00:text-xs">Бутики TianDe</p>
											<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">4-6 дней</p>

											<div className="mt-6px flex items-center">
												<svg className="mr-0.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M14.1668 9.18849L14.2183 9.21945L14.3722 9.31195L14.1668 9.18849ZM14.1668 9.18849L14.1153 9.21945M14.1668 9.18849L14.1153 9.21945M14.1153 9.21945L13.9614 9.31195L14.1153 9.21945ZM7.82838 12.6054C7.46512 12.649 7.1835 12.9585 7.1835 13.3335V17.5002V17.6002H7.0835H4.16683H4.06683L4.06683 17.5002L4.06701 9.9089L4.06701 9.81945L4.1559 9.80952C4.66792 9.75231 5.17052 9.58648 5.62802 9.31198L7.82838 12.6054ZM7.82838 12.6054L7.91971 12.6002H12.0835C12.4885 12.6002 12.8168 12.9285 12.8168 13.3335V17.5002V17.6002H12.9168H15.8335H15.9335L15.9335 17.5002L15.9342 9.909L15.9342 9.81952L15.8452 9.80961C15.3329 9.75249 14.83 9.58663 14.3723 9.31199L7.82838 12.6054ZM16.6585 5.73266L16.6585 5.73283L16.6694 5.73347L16.6796 5.73339L16.6813 5.73336L17.5002 5.7335L17.6002 5.73351V5.8335V7.861V7.91743L17.5518 7.9466L17.3737 8.05415L17.3735 8.05429C16.6821 8.46916 15.8183 8.46916 15.1268 8.0543L14.5441 7.70467C14.3119 7.56533 14.0218 7.56533 13.7895 7.70467L13.2068 8.05429C12.5154 8.46916 11.6516 8.46916 10.9602 8.0543L10.3775 7.70467C10.1452 7.56533 9.8551 7.56533 9.62286 7.70467L9.04016 8.05429C8.34872 8.46916 7.48494 8.46916 6.79351 8.0543L6.21079 7.70467C5.97856 7.56533 5.68843 7.56533 5.4562 7.70467L4.87349 8.05429L4.87035 8.05618L4.87032 8.05612L4.73627 8.13001L4.73306 8.13178L4.73302 8.13172C4.06767 8.4673 3.27224 8.44151 2.62691 8.05433L16.6585 5.73266ZM16.6585 5.73266L16.6527 5.73266L2.50016 5.7335L2.40016 5.7335V5.8335V7.86183V7.91849L2.44877 7.94761L2.62685 8.0543L16.6585 5.73266ZM2.60045 9.71785L2.60045 9.64714L2.53378 9.62357C2.3685 9.56514 2.20644 9.49443 2.04897 9.41144L1.87108 9.31124L1.28954 8.96233C1.06865 8.8298 0.933496 8.59109 0.933496 8.3335V5.00016C0.933496 4.59515 1.26182 4.26683 1.66683 4.26683L1.66693 4.26683L2.50026 4.266L2.60016 4.2659V4.166V1.66683C2.60016 1.29178 2.8818 0.982366 3.24506 0.938764L3.33638 0.933496H16.6668C17.0419 0.933496 17.3513 1.21513 17.3949 1.5784L17.4002 1.66971V4.166V4.2659L17.5001 4.266L18.3334 4.26683H18.3335C18.7085 4.26683 19.018 4.54846 19.0616 4.91173L19.0668 5.00304V8.3335C19.0668 8.59109 18.9317 8.82979 18.7108 8.96232L18.1281 9.31194C17.9163 9.43901 17.6949 9.54278 17.4674 9.62328L17.4007 9.64686L17.4007 9.71755L17.4002 18.3335C17.4002 18.7085 17.1185 19.018 16.7553 19.0616L16.6639 19.0668H3.3335C2.95845 19.0668 2.64903 18.7852 2.60543 18.4219L2.60016 18.3306L2.60045 9.71785ZM5.78198 9.21945L5.62809 9.31195L9.79469 9.31198C8.69699 9.97058 7.33943 10.0037 6.21559 9.41142L6.03778 9.31127L5.88501 9.21945L5.8335 9.18849L5.78198 9.21945ZM9.94865 9.21945L9.79475 9.31195L13.9614 9.31198C12.8637 9.97058 11.5061 10.0037 10.3823 9.41142L10.2044 9.31126L10.0517 9.21945L10.0002 9.18849L9.94865 9.21945ZM11.3502 14.1668V14.0668H11.2502H8.75016H8.65016V14.1668V17.5002V17.6002H8.75016H11.2502H11.3502V17.5002V14.1668ZM15.9335 2.50016V2.40016H15.8335H4.16683H4.06683V2.50016V4.166V4.266H4.16683H15.8335H15.9335V4.166V2.50016Z" fill="black" fill-opacity="0.7" stroke="#FCFDFB" stroke-width="0.2" />
												</svg>
												<svg width="44" height="18" viewBox="0 0 44 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M40.3643 0.746872C40.5549 0.744986 40.742 0.797357 40.9038 0.897863C41.0619 0.994207 41.1914 1.13105 41.2788 1.29421C41.3715 1.46657 41.4197 1.65934 41.419 1.85504C41.42 2.05421 41.3719 2.25054 41.2788 2.42664C41.1917 2.58986 41.0633 2.72743 40.9065 2.82569C40.7447 2.92557 40.5572 2.97617 40.367 2.97129C40.1799 2.97312 39.9959 2.92387 39.8347 2.82884C39.6736 2.73381 39.5415 2.59661 39.4526 2.43204C39.3595 2.26078 39.3113 2.06879 39.3123 1.87391C39.311 1.6747 39.3592 1.47828 39.4526 1.3023C39.5411 1.13927 39.6703 1.00182 39.8275 0.903256C39.9897 0.803563 40.1766 0.751258 40.367 0.752266L40.3643 0.746872ZM40.3643 0.579701C40.1387 0.578457 39.9169 0.638075 39.7223 0.752266C39.5358 0.864498 39.3808 1.02221 39.2718 1.21063C39.1605 1.40815 39.1021 1.63103 39.1021 1.85773C39.1021 2.08444 39.1605 2.30732 39.2718 2.50484C39.3794 2.69654 39.536 2.85623 39.7256 2.96757C39.9152 3.0789 40.131 3.13788 40.3508 3.13846C40.5711 3.13987 40.7877 3.08173 40.9776 2.97019C41.1676 2.85865 41.3238 2.69786 41.4298 2.50484C41.5411 2.30732 41.5996 2.08444 41.5996 1.85773C41.5996 1.63103 41.5411 1.40815 41.4298 1.21063C41.3239 1.02262 41.1716 0.864826 40.9874 0.752266C40.7958 0.638235 40.5766 0.578573 40.3535 0.579701H40.3643ZM39.8518 2.66931H40.0649V1.9521H40.2672C40.3481 1.94986 40.4269 1.97773 40.4884 2.03029C40.5482 2.09896 40.5875 2.18305 40.6017 2.27296C40.6233 2.37811 40.6422 2.4617 40.661 2.54259C40.6726 2.58993 40.6889 2.63599 40.7096 2.68009H40.9416C40.9155 2.62803 40.8964 2.57272 40.8849 2.51562C40.8634 2.43743 40.8391 2.34306 40.8121 2.22712C40.7969 2.15052 40.7676 2.07739 40.7258 2.01142C40.6883 1.9567 40.6345 1.91519 40.572 1.89279C40.6572 1.85915 40.7324 1.80441 40.7905 1.73371C40.8517 1.65734 40.8842 1.56192 40.8822 1.46408C40.8818 1.40222 40.8699 1.34097 40.8472 1.28343C40.8246 1.23288 40.7925 1.18712 40.7528 1.14861C40.6969 1.09984 40.6304 1.06476 40.5585 1.04616C40.4651 1.02266 40.3689 1.01178 40.2726 1.0138C40.2007 1.0138 40.1278 1.0138 40.0541 1.0138C39.9813 1.0138 39.9192 1.02998 39.8626 1.04076V2.67201L39.8518 2.66931ZM40.0649 1.18636V1.79033H40.2834C40.3808 1.79523 40.4767 1.76457 40.5532 1.70405C40.5867 1.677 40.6132 1.64233 40.6306 1.60293C40.648 1.56352 40.6556 1.52053 40.653 1.47756C40.6563 1.4328 40.6485 1.3879 40.6301 1.34693C40.6118 1.30597 40.5834 1.27024 40.5478 1.24298C40.4686 1.18911 40.3736 1.16346 40.278 1.17018H40.1485L40.0676 1.18367L40.0649 1.18636ZM0.856934 10.6907L2.33246 10.6395V8.69007H3.17677V10.6044L5.03804 10.5397V11.2488L3.17677 11.1598V14.8349C3.17677 16.431 3.71627 17.124 5.03804 16.9919V17.4233C3.46001 17.4233 2.34055 16.884 2.34055 14.8376V11.1113L0.865026 11.0412V10.6907H0.856934ZM6.50547 8.69007H7.34169V9.64724H6.50547V8.69007ZM6.50547 10.5963H7.34169V17.3963H6.50547V10.5963ZM17.2954 10.5963H18.1316V11.9903C19.154 9.6823 23.3864 9.83329 23.3864 13.4301V17.3963H22.5528V13.4058C22.5528 10.4184 18.8168 10.1703 18.1316 12.9825V17.3963H17.2954V10.5963ZM31.7459 14.9373C32.2575 14.48 32.7106 13.961 33.0946 13.3924L43.0052 13.5191V12.7345L41.2923 12.7695C39.9004 9.57714 36.9763 8.5256 34.4811 9.06755C34.4811 8.91117 34.4811 8.75478 34.4811 8.5957C34.4811 3.81522 30.2514 0.428711 25.0399 0.428711V17.4502C27.184 17.4178 29.2697 16.7476 31.031 15.5251C33.046 17.825 38.0067 18.305 40.6044 15.4038L40.4048 15.2312C37.9177 17.4475 33.7906 17.523 31.754 14.9427L31.7459 14.9373ZM30.4214 13.0014L28.7274 13.0391V13.3357L32.3771 13.3816C31.6633 14.4007 30.7171 15.2354 29.6167 15.8168C28.5163 16.3982 27.2933 16.7094 26.0488 16.7249L26.0083 1.35623C30.122 1.58811 33.6611 5.29278 33.6611 9.24011V9.31291C32.851 9.60206 32.1283 10.0935 31.5617 10.7405C30.9951 11.3875 30.6035 12.1686 30.4241 13.0095L30.4214 13.0014ZM40.162 12.7938L33.359 12.9394C33.9206 11.9579 34.2776 10.8729 34.4083 9.7497C36.515 9.27516 38.9643 10.0193 40.162 12.7938ZM33.6314 9.98698C33.5279 11.0346 33.1965 12.0468 32.6603 12.9529L30.7936 12.9906C31.1012 11.6209 32.2314 10.5262 33.6314 9.98428V9.98698ZM9.62377 13.9774C9.62377 15.8406 10.754 17.0862 12.181 17.0862C13.608 17.0862 14.892 15.7165 14.892 13.9774C14.892 12.2384 13.5918 11.0116 12.181 11.0116C10.9698 11.0116 9.62377 12.0901 9.62377 13.9774ZM15.6527 17.3963H14.8299V15.9484C14.3579 16.9541 13.1575 17.5662 12.1567 17.5662C10.2496 17.5662 8.69044 16.2855 8.69044 13.9801C8.67647 13.5195 8.75628 13.0608 8.92501 12.6319C9.09374 12.203 9.34789 11.8128 9.67202 11.485C9.99616 11.1573 10.3835 10.8987 10.8106 10.7251C11.2378 10.5515 11.6957 10.4664 12.1567 10.475C12.6993 10.4676 13.2339 10.6064 13.7043 10.8768C14.1747 11.1473 14.5635 11.5393 14.8299 12.0119V10.5936H15.6634L15.6527 17.3963Z" fill="black" fill-opacity="0.7" />
												</svg>

											</div>

										</div>
										<div>
											<p className="font-montserrat text-13px text-gray-quick-silver mb-0.5 .2x00:text-xs">Бесплатно от:</p>
											<p className="font-montserrat text-sm mb-6px .2x00:text-xs">0.00 ₽  </p>
											<p className="font-montserrat font-medium text-primary text-13px .2x00:text-xs">
												На карте
											</p>
										</div>
									</div>

								</div>
							</div>

						</div>
					</div>

					<div onClick={(e) => setFilter('loal', e)} className={` h-80px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.loal ? 'activeSlide mb-3' : ''}`}>
						<div id="click" className={`flex px-3 ..6x04:pl-0  pt-2 .1x1:pt-0 .1x1:mt-0  items-center -mt-2 relative pb-4 border-b ..6x04:pb-10px  border-dashed border-gray ${dropDownds.loal ? 'border-none' : ""}`}>
							<svg className={`absolute transition-all .1x1:right-1  right-3 top-5 ..6x04:top-3 ${dropDownds.loal ? 'prev_rotate' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
							</svg>

							<svg className="mr-4 ..5x1:mr-1.5 ..6x04:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="16" cy="16" r="15" stroke="black" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" strokeDasharray="3 6 9 12" />
								<path d="M8 19.541C8.286 19.5237 8.48967 19.463 8.611 19.359C8.741 19.255 8.82333 19.099 8.858 18.891C8.89267 18.683 8.91 18.4187 8.91 18.098V12.69C8.91 12.4993 8.91433 12.3173 8.923 12.144C8.93167 11.962 8.94033 11.806 8.949 11.676C8.80167 11.6847 8.64133 11.6933 8.468 11.702C8.29467 11.7107 8.13867 11.7193 8 11.728V11.013L11.315 11C12.121 11 12.8447 11.104 13.486 11.312C14.1273 11.52 14.6733 11.8233 15.124 12.222C15.5747 12.612 15.917 13.0887 16.151 13.652C16.385 14.2153 16.502 14.8437 16.502 15.537C16.502 16.1177 16.4023 16.681 16.203 17.227C16.0037 17.773 15.696 18.2627 15.28 18.696C14.8727 19.1207 14.357 19.463 13.733 19.723C13.109 19.983 12.3723 20.113 11.523 20.113H8V19.541ZM10.288 18.384C10.288 18.618 10.2837 18.826 10.275 19.008C10.275 19.19 10.2663 19.3373 10.249 19.45C10.431 19.45 10.613 19.4543 10.795 19.463C10.977 19.463 11.1373 19.463 11.276 19.463C11.4233 19.463 11.5273 19.463 11.588 19.463C12.1253 19.463 12.602 19.3633 13.018 19.164C13.434 18.9647 13.785 18.6873 14.071 18.332C14.3657 17.9767 14.5867 17.565 14.734 17.097C14.89 16.629 14.968 16.1307 14.968 15.602C14.968 14.7527 14.8293 14.0333 14.552 13.444C14.2747 12.8547 13.8543 12.404 13.291 12.092C12.7363 11.78 12.043 11.6197 11.211 11.611C10.925 11.611 10.717 11.663 10.587 11.767C10.457 11.8623 10.3747 12.014 10.34 12.222C10.3053 12.43 10.288 12.6943 10.288 13.015V18.384Z" fill="black" fillOpacity="0.7" />
								<path d="M20.24 20.321C19.6333 20.321 19.0873 20.1823 18.602 19.905C18.1253 19.619 17.7483 19.2203 17.471 18.709C17.1937 18.189 17.055 17.578 17.055 16.876C17.055 16.2693 17.1893 15.7017 17.458 15.173C17.7353 14.6443 18.121 14.2197 18.615 13.899C19.109 13.5697 19.681 13.405 20.331 13.405C20.695 13.405 21.0373 13.4613 21.358 13.574C21.6873 13.6867 21.9777 13.8643 22.229 14.107C22.489 14.341 22.6927 14.6487 22.84 15.03C22.9873 15.4027 23.061 15.8577 23.061 16.395L18.589 16.473C18.589 17.0623 18.654 17.5867 18.784 18.046C18.9227 18.5053 19.1437 18.8607 19.447 19.112C19.7503 19.3633 20.1447 19.489 20.63 19.489C20.864 19.489 21.111 19.45 21.371 19.372C21.6397 19.2853 21.891 19.164 22.125 19.008C22.3677 18.852 22.5713 18.6657 22.736 18.449L23.139 18.8C22.879 19.19 22.58 19.4977 22.242 19.723C21.904 19.9397 21.5573 20.0913 21.202 20.178C20.8553 20.2733 20.5347 20.321 20.24 20.321ZM18.641 15.797H21.644C21.644 15.4677 21.5963 15.173 21.501 14.913C21.4143 14.6443 21.2757 14.432 21.085 14.276C20.8943 14.12 20.6517 14.042 20.357 14.042C19.8977 14.042 19.5207 14.1893 19.226 14.484C18.9313 14.77 18.7363 15.2077 18.641 15.797Z" fill="black" fillOpacity="0.7" />
								<path d="M7.9 19.4469L7.99395 19.4412C8.27341 19.4242 8.44984 19.3654 8.54592 19.2831L8.54849 19.2809L8.54853 19.2809C8.65457 19.1961 8.72763 19.065 8.75936 18.8746C8.79278 18.674 8.81 18.4157 8.81 18.098V12.69L7.9 19.4469ZM7.9 19.4469V19.541M7.9 19.4469V19.541M7.9 19.541V20.113V20.213H8H11.523C12.3823 20.213 13.1326 20.0815 13.7715 19.8153C14.4063 19.5508 14.934 19.2012 15.3522 18.7652M7.9 19.541L15.28 18.696M15.1898 12.1467C14.7278 11.7381 14.1695 11.4285 13.5169 11.2169C12.8638 11.0051 12.1295 10.9 11.315 10.9L11.3146 10.9L7.99961 10.913L7.9 10.9134V11.013V11.728V11.8344L8.00624 11.8278C8.1444 11.8192 8.29998 11.8105 8.47299 11.8019C8.60332 11.7954 8.72635 11.7888 8.84208 11.7823L15.124 12.222M15.1898 12.1467C15.19 12.1469 15.1901 12.147 15.1903 12.1471L15.124 12.222M15.1898 12.1467C15.1897 12.1466 15.1896 12.1465 15.1894 12.1464L15.124 12.222M15.1898 12.1467C15.6523 12.5471 16.0036 13.0365 16.2434 13.6136C16.483 14.1907 16.602 14.8323 16.602 15.537C16.602 16.1294 16.5003 16.7043 16.2969 17.2613C16.0927 17.8208 15.7774 18.3222 15.3522 18.7652M15.124 12.222C15.5747 12.612 15.917 13.0887 16.151 13.652C16.385 14.2153 16.502 14.8437 16.502 15.537C16.502 16.1177 16.4023 16.681 16.203 17.227C16.0037 17.773 15.696 18.2627 15.28 18.696M15.3522 18.7652L15.28 18.696M15.3522 18.7652C15.3522 18.7652 15.3521 18.7652 15.3521 18.7653L15.28 18.696M18.5505 19.9908L18.5506 19.9908C18.0578 19.6951 17.6685 19.283 17.3831 18.7567L17.3828 18.7561C17.0964 18.219 16.955 17.5913 16.955 16.876C16.955 16.254 17.0929 15.6707 17.3689 15.1277L17.3694 15.1265C17.6545 14.5831 18.0517 14.1456 18.56 13.8155C19.0719 13.4744 19.6634 13.305 20.331 13.305C20.7053 13.305 21.0588 13.3629 21.3908 13.4795C21.7333 13.5968 22.0358 13.7818 22.2972 14.0339C22.57 14.2798 22.7814 14.6009 22.9332 14.9936M18.5505 19.9908L22.229 14.107C22.489 14.341 22.6927 14.6487 22.84 15.03C22.9873 15.4027 23.061 15.8577 23.061 16.395L18.589 16.473M18.5505 19.9908L18.5524 19.9918C19.0541 20.2785 19.6175 20.421 20.24 20.421C20.5449 20.421 20.8742 20.3718 21.2271 20.2748M18.5505 19.9908L21.3413 19.2765M22.9332 14.9936C22.9332 14.9937 22.9332 14.9939 22.9333 14.994L22.84 15.03L22.933 14.9932C22.9331 14.9934 22.9331 14.9935 22.9332 14.9936ZM22.9332 14.9936C23.0863 15.3812 23.161 15.8493 23.161 16.395V16.4933L23.0627 16.495L18.6896 16.5713M18.6896 16.5713C18.6892 16.5387 18.689 16.506 18.689 16.473H18.589M18.6896 16.5713C18.6965 17.1129 18.7603 17.5949 18.88 18.0179C19.0142 18.4622 19.2258 18.7989 19.5108 19.035C19.7923 19.2683 20.1624 19.389 20.63 19.389C20.8526 19.389 21.0895 19.352 21.3413 19.2765M18.6896 16.5713L18.5907 16.573L18.589 16.473M18.589 16.473C18.589 17.0623 18.654 17.5867 18.784 18.046C18.9227 18.5053 19.1437 18.8607 19.447 19.112C19.7503 19.3633 20.1447 19.489 20.63 19.489C20.864 19.489 21.111 19.45 21.371 19.372C21.6397 19.2853 21.891 19.164 22.125 19.008C22.3379 18.8711 22.5208 18.7109 22.6737 18.5273L22.6703 18.5244L22.736 18.449L22.8156 18.5095C22.8143 18.5113 22.8129 18.5131 22.8116 18.5148M22.8116 18.5148L23.139 18.8C22.879 19.19 22.58 19.4977 22.242 19.723C21.904 19.9397 21.5573 20.0913 21.202 20.178M22.8116 18.5148L18.615 13.899C18.121 14.2197 17.7353 14.6443 17.458 15.173C17.1893 15.7017 17.055 16.2693 17.055 16.876C17.055 17.578 17.1937 18.189 17.471 18.709C17.7483 19.2203 18.1253 19.619 18.602 19.905C19.0873 20.1823 19.6333 20.321 20.24 20.321C20.5347 20.321 20.8553 20.2733 21.202 20.178M22.8116 18.5148L21.3413 19.2765M21.202 20.178L21.2257 20.2752C21.2262 20.275 21.2266 20.2749 21.2271 20.2748M21.202 20.178L21.2285 20.2744C21.2281 20.2745 21.2276 20.2747 21.2271 20.2748M21.2271 20.2748C21.5937 20.1852 21.95 20.029 22.296 19.8072L22.296 19.8072L22.2975 19.8062C22.648 19.5725 22.956 19.2548 23.2222 18.8555L23.271 18.7823L23.2047 18.7246L22.8017 18.3736L22.7211 18.3034L22.6564 18.3885C22.4992 18.5953 22.3044 18.7738 22.0709 18.9239L22.0709 18.9239L22.0695 18.9248C21.8435 19.0755 21.6008 19.1927 21.3413 19.2765M13.994 18.2682L13.994 18.2682L13.9931 18.2693C13.7166 18.6129 13.3775 18.8809 12.9748 19.0738C12.5743 19.2657 12.1128 19.363 11.588 19.363H11.5876H11.5873H11.5869H11.5866H11.5862H11.5858H11.5855H11.5851H11.5848H11.5844H11.584H11.5837H11.5833H11.5829H11.5826H11.5822H11.5818H11.5814H11.5811H11.5807H11.5803H11.5799H11.5796H11.5792H11.5788H11.5784H11.578H11.5777H11.5773H11.5769H11.5765H11.5761H11.5757H11.5753H11.575H11.5746H11.5742H11.5738H11.5734H11.573H11.5726H11.5722H11.5718H11.5714H11.571H11.5706H11.5702H11.5698H11.5694H11.569H11.5686H11.5682H11.5678H11.5674H11.5669H11.5665H11.5661H11.5657H11.5653H11.5649H11.5645H11.5641H11.5636H11.5632H11.5628H11.5624H11.562H11.5615H11.5611H11.5607H11.5603H11.5598H11.5594H11.559H11.5586H11.5581H11.5577H11.5573H11.5568H11.5564H11.556H11.5555H11.5551H11.5546H11.5542H11.5538H11.5533H11.5529H11.5524H11.552H11.5515H11.5511H11.5507H11.5502H11.5498H11.5493H11.5489H11.5484H11.5479H11.5475H11.547H11.5466H11.5461H11.5457H11.5452H11.5447H11.5443H11.5438H11.5434H11.5429H11.5424H11.542H11.5415H11.541H11.5406H11.5401H11.5396H11.5391H11.5387H11.5382H11.5377H11.5373H11.5368H11.5363H11.5358H11.5353H11.5349H11.5344H11.5339H11.5334H11.5329H11.5324H11.532H11.5315H11.531H11.5305H11.53H11.5295H11.529H11.5285H11.528H11.5275H11.527H11.5265H11.526H11.5255H11.525H11.5245H11.524H11.5235H11.523H11.5225H11.522H11.5215H11.521H11.5205H11.52H11.5195H11.5189H11.5184H11.5179H11.5174H11.5169H11.5164H11.5158H11.5153H11.5148H11.5143H11.5138H11.5132H11.5127H11.5122H11.5117H11.5111H11.5106H11.5101H11.5095H11.509H11.5085H11.5079H11.5074H11.5069H11.5063H11.5058H11.5053H11.5047H11.5042H11.5036H11.5031H11.5026H11.502H11.5015H11.5009H11.5004H11.4998H11.4993H11.4987H11.4982H11.4976H11.4971H11.4965H11.496H11.4954H11.4948H11.4943H11.4937H11.4932H11.4926H11.492H11.4915H11.4909H11.4904H11.4898H11.4892H11.4887H11.4881H11.4875H11.4869H11.4864H11.4858H11.4852H11.4846H11.4841H11.4835H11.4829H11.4823H11.4818H11.4812H11.4806H11.48H11.4794H11.4788H11.4783H11.4777H11.4771H11.4765H11.4759H11.4753H11.4747H11.4741H11.4735H11.4729H11.4723H11.4717H11.4711H11.4705H11.4699H11.4693H11.4687H11.4681H11.4675H11.4669H11.4663H11.4657H11.4651H11.4645H11.4639H11.4633H11.4627H11.4621H11.4614H11.4608H11.4602H11.4596H11.459H11.4584H11.4577H11.4571H11.4565H11.4559H11.4552H11.4546H11.454H11.4534H11.4527H11.4521H11.4515H11.4509H11.4502H11.4496H11.449H11.4483H11.4477H11.447H11.4464H11.4458H11.4451H11.4445H11.4439H11.4432H11.4426H11.4419H11.4413H11.4406H11.44H11.4393H11.4387H11.438H11.4374H11.4367H11.4361H11.4354H11.4348H11.4341H11.4335H11.4328H11.4321H11.4315H11.4308H11.4301H11.4295H11.4288H11.4282H11.4275H11.4268H11.4262H11.4255H11.4248H11.4241H11.4235H11.4228H11.4221H11.4214H11.4208H11.4201H11.4194H11.4187H11.4181H11.4174H11.4167H11.416H11.4153H11.4146H11.414H11.4133H11.4126H11.4119H11.4112H11.4105H11.4098H11.4091H11.4084H11.4077H11.407H11.4063H11.4056H11.4049H11.4042H11.4035H11.4028H11.4021H11.4014H11.4007H11.4H11.3993H11.3986H11.3979H11.3972H11.3965H11.3958H11.395H11.3943H11.3936H11.3929H11.3922H11.3915H11.3907H11.39H11.3893H11.3886H11.3879H11.3871H11.3864H11.3857H11.385H11.3842H11.3835H11.3828H11.382H11.3813H11.3806H11.3798H11.3791H11.3784H11.3776H11.3769H11.3762H11.3754H11.3747H11.3739H11.3732H11.3725H11.3717H11.371H11.3702H11.3695H11.3687H11.368H11.3672H11.3665H11.3657H11.365H11.3642H11.3635H11.3627H11.3619H11.3612H11.3604H11.3597H11.3589H11.3581H11.3574H11.3566H11.3558H11.3551H11.3543H11.3535H11.3528H11.352H11.3512H11.3505H11.3497H11.3489H11.3481H11.3474H11.3466H11.3458H11.345H11.3442H11.3435H11.3427H11.3419H11.3411H11.3403H11.3395H11.3387H11.338H11.3372H11.3364H11.3356H11.3348H11.334H11.3332H11.3324H11.3316H11.3308H11.33H11.3292H11.3284H11.3276H11.3268H11.326H11.3252H11.3244H11.3236H11.3228H11.322H11.3212H11.3204H11.3195H11.3187H11.3179H11.3171H11.3163H11.3155H11.3147H11.3138H11.313H11.3122H11.3114H11.3106H11.3097H11.3089H11.3081H11.3073H11.3064H11.3056H11.3048H11.3039H11.3031H11.3023H11.3015H11.3006H11.2998H11.2989H11.2981H11.2973H11.2964H11.2956H11.2948H11.2939H11.2931H11.2922H11.2914H11.2905H11.2897H11.2888H11.288H11.2871H11.2863H11.2854H11.2846H11.2837H11.2829H11.282H11.2812H11.2803H11.2794H11.2786H11.2777H11.2769H11.276H11.2752H11.2744H11.2736H11.2727H11.2719H11.2711H11.2703H11.2695H11.2687H11.2679H11.267H11.2662H11.2654H11.2646H11.2638H11.2629H11.2621H11.2613H11.2605H11.2597H11.2588H11.258H11.2572H11.2564H11.2555H11.2547H11.2539H11.2531H11.2522H11.2514H11.2506H11.2497H11.2489H11.2481H11.2473H11.2464H11.2456H11.2448H11.2439H11.2431H11.2423H11.2414H11.2406H11.2398H11.2389H11.2381H11.2373H11.2364H11.2356H11.2348H11.2339H11.2331H11.2322H11.2314H11.2306H11.2297H11.2289H11.228H11.2272H11.2264H11.2255H11.2247H11.2238H11.223H11.2221H11.2213H11.2204H11.2196H11.2188H11.2179H11.2171H11.2162H11.2154H11.2145H11.2137H11.2128H11.212H11.2111H11.2103H11.2094H11.2086H11.2077H11.2069H11.206H11.2051H11.2043H11.2034H11.2026H11.2017H11.2009H11.2H11.1992H11.1983H11.1974H11.1966H11.1957H11.1949H11.194H11.1931H11.1923H11.1914H11.1905H11.1897H11.1888H11.188H11.1871H11.1862H11.1854H11.1845H11.1836H11.1828H11.1819H11.181H11.1802H11.1793H11.1784H11.1775H11.1767H11.1758H11.1749H11.1741H11.1732H11.1723H11.1714H11.1706H11.1697H11.1688H11.1679H11.1671H11.1662H11.1653H11.1644H11.1636H11.1627H11.1618H11.1609H11.16H11.1592H11.1583H11.1574H11.1565H11.1556H11.1547H11.1539H11.153H11.1521H11.1512H11.1503H11.1494H11.1485H11.1477H11.1468H11.1459H11.145H11.1441H11.1432H11.1423H11.1414H11.1405H11.1397H11.1388H11.1379H11.137H11.1361H11.1352H11.1343H11.1334H11.1325H11.1316H11.1307H11.1298H11.1289H11.128H11.1271H11.1262H11.1253H11.1244H11.1235H11.1226H11.1217H11.1208H11.1199H11.119H11.1181H11.1172H11.1163H11.1154H11.1145H11.1136H11.1127H11.1118H11.1109H11.11H11.109H11.1081H11.1072H11.1063H11.1054H11.1045H11.1036H11.1027H11.1018H11.1008H11.0999H11.099H11.0981H11.0972H11.0963H11.0954H11.0944H11.0935H11.0926H11.0917H11.0908H11.0899H11.0889H11.088H11.0871H11.0862H11.0852H11.0843H11.0834H11.0825H11.0816H11.0806H11.0797H11.0788H11.0779H11.0769H11.076H11.0751H11.0742H11.0732H11.0723H11.0714H11.0704H11.0695H11.0686H11.0676H11.0667H11.0658H11.0649H11.0639H11.063H11.0621H11.0611H11.0602H11.0592H11.0583H11.0574H11.0564H11.0555H11.0546H11.0536H11.0527H11.0517H11.0508H11.0499H11.0489H11.048H11.047H11.0461H11.0452H11.0442H11.0433H11.0423H11.0414H11.0404H11.0395H11.0385H11.0376H11.0367H11.0357H11.0348H11.0338H11.0329H11.0319H11.031H11.03H11.0291H11.0281H11.0272H11.0262H11.0253H11.0243H11.0233H11.0224H11.0214H11.0205H11.0195H11.0186H11.0176H11.0167H11.0157H11.0147H11.0138H11.0128H11.0119H11.0109H11.0099H11.009H11.008H11.007H11.0061H11.0051H11.0042H11.0032H11.0022H11.0013H11.0003H10.9993H10.9984H10.9974H10.9964H10.9955H10.9945H10.9935H10.9926H10.9916H10.9906H10.9896H10.9887H10.9877H10.9867H10.9857H10.9848H10.9838H10.9828H10.9818H10.9809H10.9799H10.9789H10.9779H10.977H10.976H10.975H10.974H10.973H10.9721H10.9711H10.9701H10.9691H10.9681H10.9672H10.9662H10.9652H10.9642H10.9632H10.9622H10.9613H10.9603H10.9593H10.9583H10.9573H10.9563H10.9553H10.9543H10.9533H10.9524H10.9514H10.9504H10.9494H10.9484H10.9474H10.9464H10.9454H10.9444H10.9434H10.9424H10.9414H10.9404H10.9394H10.9384H10.9374H10.9364H10.9354H10.9344H10.9334H10.9324H10.9314H10.9304H10.9294H10.9284H10.9274H10.9264H10.9254H10.9244H10.9234H10.9224H10.9214H10.9204H10.9194H10.9184H10.9174H10.9164H10.9154H10.9144H10.9133H10.9123H10.9113H10.9103H10.9093H10.9083H10.9073H10.9063H10.9053H10.9042H10.9032H10.9022H10.9012H10.9002H10.8992H10.8981H10.8971H10.8961H10.8951H10.8941H10.8931H10.892H10.891H10.89H10.889H10.8879H10.8869H10.8859H10.8849H10.8839H10.8828H10.8818H10.8808H10.8798H10.8787H10.8777H10.8767H10.8756H10.8746H10.8736H10.8726H10.8715H10.8705H10.8695H10.8684H10.8674H10.8664H10.8653H10.8643H10.8633H10.8622H10.8612H10.8602H10.8591H10.8581H10.8571H10.856H10.855H10.8539H10.8529H10.8519H10.8508H10.8498H10.8487H10.8477H10.8467H10.8456H10.8446H10.8435H10.8425H10.8414H10.8404H10.8394H10.8383H10.8373H10.8362H10.8352H10.8341H10.8331H10.832H10.831H10.8299H10.8289H10.8278H10.8268H10.8257H10.8247H10.8236H10.8226H10.8215H10.8205H10.8194H10.8183H10.8173H10.8162H10.8152H10.8141H10.8131H10.812H10.8109H10.8099H10.8088H10.8078H10.8067H10.8056H10.8046H10.8035H10.8025H10.8014H10.8003H10.7993H10.7982H10.7974C10.6521 19.3561 10.5069 19.352 10.3616 19.3505C10.3706 19.253 10.3749 19.1394 10.375 19.0104C10.3837 18.827 10.388 18.6182 10.388 18.384V13.015C10.388 12.6973 10.4052 12.439 10.4386 12.2384C10.4704 12.048 10.543 11.9232 10.6461 11.8476L10.6462 11.8477L10.6495 11.8451C10.7528 11.7624 10.9327 11.7111 11.2105 11.711C12.0304 11.7196 12.7059 11.8776 13.242 12.1792L13.2425 12.1795C13.7873 12.4812 14.193 12.916 14.4615 13.4866C14.731 14.0592 14.868 14.7631 14.868 15.602C14.868 16.1207 14.7915 16.6083 14.6391 17.0654L14.6391 17.0654L14.6386 17.067C14.4949 17.5234 14.2799 17.9234 13.994 18.2682ZM21.4058 14.9437L21.4058 14.9437L21.4071 14.9474C21.4882 15.1685 21.5337 15.418 21.5425 15.697H18.7602C18.8593 15.1797 19.0407 14.8032 19.2956 14.5558L19.2957 14.5558L19.2967 14.5547C19.5706 14.2808 19.9212 14.142 20.357 14.142C20.6333 14.142 20.8522 14.2147 21.0217 14.3534C21.1954 14.4955 21.3242 14.6906 21.4058 14.9437Z" stroke="black" strokeOpacity="0.7" strokeWidth="0.2" />
							</svg>
							<svg className="mr-3 ..6x04:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="15" cy="15" r="11.6875" stroke="white" strokeOpacity="0.8" />
								<circle cx="15" cy="15" r="14.25" stroke="black" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" strokeDasharray="3 6 9 12" />
								<path d="M7.5 18.3197C7.76813 18.3034 7.95906 18.2466 8.07281 18.1491C8.19469 18.0516 8.27188 17.9053 8.30438 17.7103C8.33688 17.5153 8.35313 17.2675 8.35313 16.9669V11.8969C8.35313 11.7181 8.35719 11.5475 8.36531 11.385C8.37344 11.2144 8.38156 11.0681 8.38969 10.9462C8.25156 10.9544 8.10125 10.9625 7.93875 10.9706C7.77625 10.9788 7.63 10.9869 7.5 10.995V10.3247L10.6078 10.3125C11.3634 10.3125 12.0419 10.41 12.6431 10.605C13.2444 10.8 13.7563 11.0844 14.1788 11.4581C14.6013 11.8237 14.9222 12.2706 15.1416 12.7988C15.3609 13.3269 15.4706 13.9159 15.4706 14.5659C15.4706 15.1103 15.3772 15.6384 15.1903 16.1503C15.0034 16.6622 14.715 17.1213 14.325 17.5275C13.9431 17.9256 13.4597 18.2466 12.8747 18.4903C12.2897 18.7341 11.5991 18.8559 10.8028 18.8559H7.5V18.3197ZM9.645 17.235C9.645 17.4544 9.64094 17.6494 9.63281 17.82C9.63281 17.9906 9.62469 18.1288 9.60844 18.2344C9.77906 18.2344 9.94969 18.2384 10.1203 18.2466C10.2909 18.2466 10.4413 18.2466 10.5713 18.2466C10.7094 18.2466 10.8069 18.2466 10.8638 18.2466C11.3675 18.2466 11.8144 18.1531 12.2044 17.9663C12.5944 17.7794 12.9234 17.5194 13.1916 17.1863C13.4678 16.8531 13.675 16.4672 13.8131 16.0284C13.9594 15.5897 14.0325 15.1225 14.0325 14.6269C14.0325 13.8306 13.9025 13.1563 13.6425 12.6038C13.3825 12.0513 12.9884 11.6287 12.4603 11.3362C11.9403 11.0437 11.2903 10.8934 10.5103 10.8853C10.2422 10.8853 10.0472 10.9341 9.92531 11.0316C9.80344 11.1209 9.72625 11.2631 9.69375 11.4581C9.66125 11.6531 9.645 11.9009 9.645 12.2016V17.235Z" fill="black" fillOpacity="0.7" />
								<path d="M18.975 19.0509C18.4062 19.0509 17.8944 18.9209 17.4394 18.6609C16.9925 18.3928 16.6391 18.0191 16.3791 17.5397C16.1191 17.0522 15.9891 16.4794 15.9891 15.8213C15.9891 15.2525 16.115 14.7203 16.3669 14.2247C16.6269 13.7291 16.9884 13.3309 17.4516 13.0303C17.9147 12.7216 18.4509 12.5672 19.0603 12.5672C19.4016 12.5672 19.7225 12.62 20.0231 12.7256C20.3319 12.8313 20.6041 12.9978 20.8397 13.2253C21.0834 13.4447 21.2744 13.7331 21.4125 14.0906C21.5506 14.44 21.6197 14.8666 21.6197 15.3703L17.4272 15.4434C17.4272 15.9959 17.4881 16.4875 17.61 16.9181C17.74 17.3488 17.9472 17.6819 18.2316 17.9175C18.5159 18.1531 18.8856 18.2709 19.3406 18.2709C19.56 18.2709 19.7916 18.2344 20.0353 18.1613C20.2872 18.08 20.5228 17.9663 20.7422 17.82C20.9697 17.6738 21.1606 17.4991 21.315 17.2959L21.6928 17.625C21.4491 17.9906 21.1688 18.2791 20.8519 18.4903C20.535 18.6934 20.21 18.8356 19.8769 18.9169C19.5519 19.0063 19.2513 19.0509 18.975 19.0509ZM17.4759 14.8097H20.2913C20.2913 14.5009 20.2466 14.2247 20.1572 13.9809C20.0759 13.7291 19.9459 13.53 19.7672 13.3837C19.5884 13.2375 19.3609 13.1644 19.0847 13.1644C18.6541 13.1644 18.3006 13.3025 18.0244 13.5788C17.7481 13.8469 17.5653 14.2572 17.4759 14.8097Z" fill="black" fillOpacity="0.7" />
							</svg>


							<div>
								<p id="click" className='font-montserrat font-semibold ..6x04:text-13px  ..6x04:font-medium .1x1:text-13px '>Программа лояльности</p>
								<p id="click" className='font-lora font-medium text-gray-quick-silver ..6x04:text-13px .1x1:text-13px '>De<span className=' font-normal font-montserrat'>-счёт:</span> <span className='font-montserrat  font-normal text-label-orange '>9 000 De</span></p>

							</div>
						</div>
						<div className={`p-4 pt-0 ${dropDownds.loal ? 'block' : "hidden"}`}>
							<div className="bg-white border p-3 border-gray">
								<p className="font-montserrat text-13px uppercase text-gray-quick-silver mb-2 .2x00:text-xs">Место получения заказа:</p>
								<div>
									<div className="flex items-center   ">
										<div className="mr-3  -mt-4 relative">
											<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="30" height="30" rx="4" fill="#E8E9E7" />
												<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
												<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											</svg>
											<input type="checkbox" className="hidden" id="checkboxFree" />
											<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
												<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

												</div>
											</label>
										</div>

										<div className="flex border-b pb-3 border-dashed border-stroke items-center justify-between w-full">


											<div>
												<p className="font-montserrat mb-1 .2x00:text-xs">Online Bisiness Center</p>
												<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">Товары будут оформлены в текущем заказе</p>


											</div>

										</div>

									</div>
									<div className="flex border-b border-stroke first-letter:  mt-2 ">
										<div className="mr-3 mt-2 relative">
											<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="30" height="30" rx="4" fill="#E8E9E7" />
												<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
												<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											</svg>
											<input type="checkbox" className="hidden" id="checkboxFree" />
											<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
												<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

												</div>
											</label>
										</div>

										<div className="flex   pb-4   items-center justify-between w-full">


											<div>
												<p className="font-montserrat mb-6px .2x00:text-xs">Бутик TianDe: </p>
												<p className="font-noto-sans text-13px mb-6px font-medium to-black-70pe .2x00:text-xs">Респ. Татарстан, Казань, Московская ул., №31 оф. 217 </p>

												<p className="font-medium text-13px text-black-70pe font-montserrat .2x00:text-xs">Товары будут оформлены отдельно от корзины</p>
											</div>

										</div>

									</div>
								</div>
								<div className="mt-3">
									<div className="flex mb-2 items-center justify-between">
										<p className="font-montserrat text-black-70pe .2x00:text-xs">В корзине:</p>
										<p className="font-montserrat .2x00:text-xs">3 750 <span className="font-lora">De</span></p>
									</div>
									<div className="flex items-center justify-between">
										<p className="font-montserrat text-black-70pe .2x00:text-xs">Доступно:</p>
										<p className="font-montserrat .2x00:text-xs">5 080 <span className="font-lora">De</span></p>
									</div>
								</div>
							</div>
							<div className="flex justify-between items-center mt-3">
								<p className="font-montserrat text-sm text-gray-quick-silver .2x00:text-xs .4x11:mr-1 .4x11:text-11px">Минимальная сумма: от 1 500 ₽ </p>
								<button className="h-11 bg-gray-light2 rounded px-5 flex items-center font-lora text-label-orange text-xs font-medium .4x11:text-9px">De- каталог</button>
							</div>


						</div>
					</div>

					<div onClick={(e) => setFilter('promo', e)} className={` h-80px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.promo ? 'activeSlide' : ''}`}>
						<div id="click" className={`flex px-3 ..6x04:pl-0 pt-6px .1x1:pb-4 items-center   relative pb-6 border-b ..6x04:pb-10px ${dropDownds.promo ? 'border-none' : ''} border-dashed border-gray `}>
							<svg className={`absolute right-3 top-3 .1x1:right-1 ..6x04:top-1 transition-all ${dropDownds.promo ? 'prev_rotate' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
							</svg>

							<svg className="mr-4 ..5x1:mr-1.5 ..6x04:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<mask id="path-1-inside-1_2812_671857" fill="white">
									<path fillRule="evenodd" clipRule="evenodd" d="M3.2002 4.53335C3.2002 3.79697 3.79715 3.20001 4.53353 3.20001H16.5335C16.8871 3.20001 17.2263 3.34049 17.4763 3.59054L28.2585 14.3727C29.706 15.8289 29.706 18.1806 28.2585 19.6368L28.2557 19.6396L19.6523 28.243C18.9521 28.9438 18.0015 29.3379 17.0109 29.3379C16.02 29.3379 15.0699 28.9441 14.3696 28.2431L3.59124 17.4767C3.34088 17.2266 3.2002 16.8872 3.2002 16.5333V4.53335ZM5.86686 5.86668V15.9806L16.2562 26.3584C16.4564 26.5588 16.7278 26.6713 17.0109 26.6713C17.2941 26.6713 17.5656 26.5587 17.7656 26.3585L26.3673 17.7567L26.3685 17.7555C26.7805 17.3398 26.7805 16.6697 26.3685 16.254L26.3673 16.2528L15.9812 5.86668H5.86686Z" />
									<path fillRule="evenodd" clipRule="evenodd" d="M11.5335 13.2C12.454 13.2 13.2002 12.4538 13.2002 11.5333C13.2002 10.6129 12.454 9.86668 11.5335 9.86668C10.6131 9.86668 9.86686 10.6129 9.86686 11.5333C9.86686 12.4538 10.6131 13.2 11.5335 13.2Z" />
								</mask>
								<path fillRule="evenodd" clipRule="evenodd" d="M3.2002 4.53335C3.2002 3.79697 3.79715 3.20001 4.53353 3.20001H16.5335C16.8871 3.20001 17.2263 3.34049 17.4763 3.59054L28.2585 14.3727C29.706 15.8289 29.706 18.1806 28.2585 19.6368L28.2557 19.6396L19.6523 28.243C18.9521 28.9438 18.0015 29.3379 17.0109 29.3379C16.02 29.3379 15.0699 28.9441 14.3696 28.2431L3.59124 17.4767C3.34088 17.2266 3.2002 16.8872 3.2002 16.5333V4.53335ZM5.86686 5.86668V15.9806L16.2562 26.3584C16.4564 26.5588 16.7278 26.6713 17.0109 26.6713C17.2941 26.6713 17.5656 26.5587 17.7656 26.3585L26.3673 17.7567L26.3685 17.7555C26.7805 17.3398 26.7805 16.6697 26.3685 16.254L26.3673 16.2528L15.9812 5.86668H5.86686Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M11.5335 13.2C12.454 13.2 13.2002 12.4538 13.2002 11.5333C13.2002 10.6129 12.454 9.86668 11.5335 9.86668C10.6131 9.86668 9.86686 10.6129 9.86686 11.5333C9.86686 12.4538 10.6131 13.2 11.5335 13.2Z" fill="black" fillOpacity="0.7" />
								<path d="M17.4763 3.59054L17.2642 3.80267L17.2642 3.80267L17.4763 3.59054ZM28.2585 14.3727L28.4713 14.1612L28.4707 14.1606L28.2585 14.3727ZM28.2585 19.6368L28.471 19.8485L28.4713 19.8483L28.2585 19.6368ZM28.2557 19.6396L28.4679 19.8517L28.4682 19.8513L28.2557 19.6396ZM19.6523 28.243L19.4402 28.0309L19.4401 28.0309L19.6523 28.243ZM14.3696 28.2431L14.5819 28.031L14.5816 28.0308L14.3696 28.2431ZM3.59124 17.4767L3.37923 17.6889H3.37923L3.59124 17.4767ZM5.86686 15.9806H5.56686C5.56686 16.0602 5.59851 16.1366 5.65485 16.1929L5.86686 15.9806ZM5.86686 5.86668V5.56668C5.70118 5.56668 5.56686 5.70099 5.56686 5.86668H5.86686ZM16.2562 26.3584L16.4685 26.1464L16.4682 26.1462L16.2562 26.3584ZM17.7656 26.3585L17.5534 26.1464L17.5533 26.1465L17.7656 26.3585ZM26.3673 17.7567L26.5795 17.9689L26.5801 17.9682L26.3673 17.7567ZM26.3685 17.7555L26.5813 17.967L26.5816 17.9667L26.3685 17.7555ZM26.3685 16.254L26.5816 16.0428L26.5813 16.0425L26.3685 16.254ZM26.3673 16.2528L26.5801 16.0413L26.5795 16.0406L26.3673 16.2528ZM15.9812 5.86668L16.1934 5.65455C16.1371 5.59829 16.0608 5.56668 15.9812 5.56668V5.86668ZM4.53353 2.90001C3.63146 2.90001 2.9002 3.63128 2.9002 4.53335H3.5002C3.5002 3.96265 3.96283 3.50001 4.53353 3.50001V2.90001ZM16.5335 2.90001H4.53353V3.50001H16.5335V2.90001ZM17.6885 3.3784C17.3822 3.0721 16.9667 2.90001 16.5335 2.90001V3.50001C16.8076 3.50001 17.0704 3.60888 17.2642 3.80267L17.6885 3.3784ZM28.4713 19.8483C30.0351 18.2751 30.0351 15.7344 28.4713 14.1612L28.0458 14.5842C29.377 15.9233 29.377 18.0861 28.0458 19.4253L28.4713 19.8483ZM28.4682 19.8513L28.471 19.8485L28.0461 19.425L28.0433 19.4278L28.4682 19.8513ZM19.8644 28.4551L28.4679 19.8517L28.0436 19.4274L19.4402 28.0309L19.8644 28.4551ZM17.0109 29.6379C18.0811 29.6379 19.1081 29.2121 19.8645 28.455L19.4401 28.0309C18.7961 28.6754 17.9218 29.0379 17.0109 29.0379V29.6379ZM14.1574 28.4551C14.9139 29.2124 15.9404 29.6379 17.0109 29.6379V29.0379C16.0997 29.0379 15.2259 28.6757 14.5819 28.031L14.1574 28.4551ZM3.37923 17.6889L14.1576 28.4553L14.5816 28.0308L3.80326 17.2644L3.37923 17.6889ZM2.9002 16.5333C2.9002 16.9668 3.07253 17.3826 3.37923 17.6889L3.80326 17.2644C3.60922 17.0706 3.5002 16.8076 3.5002 16.5333H2.9002ZM2.9002 4.53335V16.5333H3.5002V4.53335H2.9002ZM6.16686 15.9806V5.86668H5.56686V15.9806H6.16686ZM17.0109 26.3713C16.8074 26.3713 16.6123 26.2904 16.4685 26.1464L16.044 26.5704C16.3004 26.8271 16.6482 26.9713 17.0109 26.9713V26.3713ZM17.5533 26.1465C17.4096 26.2904 17.2145 26.3713 17.0109 26.3713V26.9713C17.3737 26.9713 17.7215 26.8271 17.9778 26.5705L17.5533 26.1465ZM26.1552 17.5446L17.5534 26.1464L17.9777 26.5706L26.5795 17.9689L26.1552 17.5446ZM26.1557 17.5441L26.1545 17.5453L26.5801 17.9682L26.5813 17.967L26.1557 17.5441ZM26.1554 16.4651C26.4515 16.7639 26.4515 17.2456 26.1554 17.5444L26.5816 17.9667C27.1095 17.4341 27.1095 16.5754 26.5816 16.0428L26.1554 16.4651ZM26.1545 16.4642L26.1557 16.4654L26.5813 16.0425L26.5801 16.0413L26.1545 16.4642ZM15.7691 6.07881L26.1552 16.4649L26.5795 16.0406L16.1934 5.65455L15.7691 6.07881ZM5.86686 6.16668H15.9812V5.56668H5.86686V6.16668ZM28.4707 14.1606L17.6885 3.3784L17.2642 3.80267L28.0464 14.5849L28.4707 14.1606ZM16.4682 26.1462L6.07888 15.7684L5.65485 16.1929L16.0442 26.5707L16.4682 26.1462ZM11.5335 13.5C12.6197 13.5 13.5002 12.6195 13.5002 11.5333H12.9002C12.9002 12.2881 12.2883 12.9 11.5335 12.9V13.5ZM13.5002 11.5333C13.5002 10.4472 12.6197 9.56668 11.5335 9.56668V10.1667C12.2883 10.1667 12.9002 10.7786 12.9002 11.5333H13.5002ZM11.5335 9.56668C10.4474 9.56668 9.56686 10.4472 9.56686 11.5333H10.1669C10.1669 10.7786 10.7787 10.1667 11.5335 10.1667V9.56668ZM9.56686 11.5333C9.56686 12.6195 10.4474 13.5 11.5335 13.5V12.9C10.7787 12.9 10.1669 12.2881 10.1669 11.5333H9.56686Z" fill="#F7F8F6" mask="url(#path-1-inside-1_2812_671857)" />
							</svg>
							<svg className="mr-3 ..6x04:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<mask id="path-1-inside-1_2585_696349" fill="white">
									<path fillRule="evenodd" clipRule="evenodd" d="M3 4.25C3 3.55964 3.55964 3 4.25 3H15.5C15.8315 3 16.1495 3.1317 16.3839 3.36612L26.4922 13.4744C27.8492 14.8395 27.8492 17.0443 26.4922 18.4094L26.4896 18.4121L18.4238 26.4778C17.7674 27.1348 16.8762 27.5043 15.9476 27.5043C15.0186 27.5043 14.1279 27.135 13.4713 26.4779L3.36661 16.3844C3.13189 16.1499 3 15.8318 3 15.5V4.25ZM5.5 5.5V14.9818L15.24 24.711C15.4276 24.8988 15.6821 25.0043 15.9476 25.0043C16.213 25.0043 16.4675 24.8988 16.655 24.7111L24.7192 16.6469L24.7203 16.6458C25.1065 16.2561 25.1065 15.6278 24.7203 15.2381L24.7192 15.2369L14.9822 5.5H5.5Z" />
									<path fillRule="evenodd" clipRule="evenodd" d="M10.8125 12.375C11.6754 12.375 12.375 11.6754 12.375 10.8125C12.375 9.94956 11.6754 9.25 10.8125 9.25C9.94956 9.25 9.25 9.94956 9.25 10.8125C9.25 11.6754 9.94956 12.375 10.8125 12.375Z" />
								</mask>
								<path fillRule="evenodd" clipRule="evenodd" d="M3 4.25C3 3.55964 3.55964 3 4.25 3H15.5C15.8315 3 16.1495 3.1317 16.3839 3.36612L26.4922 13.4744C27.8492 14.8395 27.8492 17.0443 26.4922 18.4094L26.4896 18.4121L18.4238 26.4778C17.7674 27.1348 16.8762 27.5043 15.9476 27.5043C15.0186 27.5043 14.1279 27.135 13.4713 26.4779L3.36661 16.3844C3.13189 16.1499 3 15.8318 3 15.5V4.25ZM5.5 5.5V14.9818L15.24 24.711C15.4276 24.8988 15.6821 25.0043 15.9476 25.0043C16.213 25.0043 16.4675 24.8988 16.655 24.7111L24.7192 16.6469L24.7203 16.6458C25.1065 16.2561 25.1065 15.6278 24.7203 15.2381L24.7192 15.2369L14.9822 5.5H5.5Z" fill="black" fillOpacity="0.7" />
								<path fillRule="evenodd" clipRule="evenodd" d="M10.8125 12.375C11.6754 12.375 12.375 11.6754 12.375 10.8125C12.375 9.94956 11.6754 9.25 10.8125 9.25C9.94956 9.25 9.25 9.94956 9.25 10.8125C9.25 11.6754 9.94956 12.375 10.8125 12.375Z" fill="black" fillOpacity="0.7" />
								<path d="M16.3839 3.36612L15.9596 3.79038L15.9596 3.79038L16.3839 3.36612ZM26.4922 13.4744L26.9177 13.0514L26.9165 13.0502L26.4922 13.4744ZM26.4922 18.4094L26.9171 18.833L26.9177 18.8325L26.4922 18.4094ZM26.4896 18.4121L26.9138 18.8363L26.9145 18.8357L26.4896 18.4121ZM18.4238 26.4778L17.9996 26.0535L17.9994 26.0537L18.4238 26.4778ZM13.4713 26.4779L13.8958 26.0538L13.8954 26.0534L13.4713 26.4779ZM3.36661 16.3844L2.94258 16.8089L2.94258 16.8089L3.36661 16.3844ZM5.5 14.9818H4.9C4.9 15.1411 4.96331 15.2938 5.07597 15.4063L5.5 14.9818ZM5.5 5.5V4.9C5.16863 4.9 4.9 5.16863 4.9 5.5H5.5ZM15.24 24.711L15.6645 24.287L15.6641 24.2865L15.24 24.711ZM16.655 24.7111L16.2308 24.2868L16.2305 24.2871L16.655 24.7111ZM24.7192 16.6469L25.1435 17.0712L25.1448 17.0698L24.7192 16.6469ZM24.7203 16.6458L25.1459 17.0687L25.1465 17.0682L24.7203 16.6458ZM24.7203 15.2381L25.1465 14.8157L25.1459 14.8152L24.7203 15.2381ZM24.7192 15.2369L25.1448 14.814L25.1435 14.8127L24.7192 15.2369ZM14.9822 5.5L15.4065 5.07574C15.294 4.96321 15.1414 4.9 14.9822 4.9V5.5ZM4.25 2.4C3.22827 2.4 2.4 3.22827 2.4 4.25H3.6C3.6 3.89101 3.89101 3.6 4.25 3.6V2.4ZM15.5 2.4H4.25V3.6H15.5V2.4ZM16.8081 2.94185C16.4612 2.59491 15.9907 2.4 15.5 2.4V3.6C15.6724 3.6 15.8377 3.66848 15.9596 3.79038L16.8081 2.94185ZM26.9177 18.8325C28.5074 17.2333 28.5074 14.6506 26.9177 13.0514L26.0667 13.8974C27.1911 15.0285 27.1911 16.8554 26.0667 17.9864L26.9177 18.8325ZM26.9145 18.8357L26.9171 18.833L26.0672 17.9859L26.0646 17.9885L26.9145 18.8357ZM18.8481 26.9021L26.9138 18.8363L26.0653 17.9878L17.9996 26.0535L18.8481 26.9021ZM15.9476 28.1043C17.0355 28.1043 18.0794 27.6714 18.8483 26.9019L17.9994 26.0537C17.4554 26.5981 16.7169 26.9043 15.9476 26.9043V28.1043ZM13.0469 26.9019C13.8159 27.6717 14.8594 28.1043 15.9476 28.1043V26.9043C15.1779 26.9043 14.4398 26.5984 13.8958 26.0538L13.0469 26.9019ZM2.94258 16.8089L13.0473 26.9024L13.8954 26.0534L3.79064 15.9599L2.94258 16.8089ZM2.4 15.5C2.4 15.991 2.59519 16.4619 2.94258 16.8089L3.79064 15.9599C3.66858 15.838 3.6 15.6725 3.6 15.5H2.4ZM2.4 4.25V15.5H3.6V4.25H2.4ZM6.1 14.9818V5.5H4.9V14.9818H6.1ZM15.9476 24.4043C15.8414 24.4043 15.7396 24.3621 15.6645 24.287L14.8155 25.1351C15.1157 25.4355 15.5229 25.6043 15.9476 25.6043V24.4043ZM16.2305 24.2871C16.1556 24.3621 16.0538 24.4043 15.9476 24.4043V25.6043C16.3723 25.6043 16.7795 25.4355 17.0795 25.1351L16.2305 24.2871ZM24.2949 16.2227L16.2308 24.2868L17.0793 25.1353L25.1435 17.0712L24.2949 16.2227ZM24.2947 16.2229L24.2936 16.224L25.1448 17.0698L25.1459 17.0687L24.2947 16.2229ZM24.2941 15.6604C24.4486 15.8163 24.4486 16.0676 24.2941 16.2235L25.1465 17.0682C25.7645 16.4446 25.7645 15.4393 25.1465 14.8157L24.2941 15.6604ZM24.2936 15.6599L24.2947 15.661L25.1459 14.8152L25.1448 14.814L24.2936 15.6599ZM14.558 5.92426L24.2949 15.6612L25.1435 14.8127L15.4065 5.07574L14.558 5.92426ZM5.5 6.1H14.9822V4.9H5.5V6.1ZM26.9165 13.0502L16.8081 2.94185L15.9596 3.79038L26.0679 13.8987L26.9165 13.0502ZM15.6641 24.2865L5.92403 14.5573L5.07597 15.4063L14.816 25.1355L15.6641 24.2865ZM10.8125 12.975C12.0068 12.975 12.975 12.0068 12.975 10.8125H11.775C11.775 11.3441 11.3441 11.775 10.8125 11.775V12.975ZM12.975 10.8125C12.975 9.61819 12.0068 8.65 10.8125 8.65V9.85C11.3441 9.85 11.775 10.2809 11.775 10.8125H12.975ZM10.8125 8.65C9.61819 8.65 8.65 9.61819 8.65 10.8125H9.85C9.85 10.2809 10.2809 9.85 10.8125 9.85V8.65ZM8.65 10.8125C8.65 12.0068 9.61819 12.975 10.8125 12.975V11.775C10.2809 11.775 9.85 11.3441 9.85 10.8125H8.65Z" fill="white" mask="url(#path-1-inside-1_2585_696349)" />
							</svg>

							<p id="click" className='font-montserrat font-semibold ..6x04:text-13px .1x1:text-13px   ..6x04:font-medium'>Промокод</p>

						</div>
						<div className={`p-3 pt-0 ${dropDownds.promo ? 'block' : 'hidden'}`}>
							<div className="mb-3 w-full flex ">
								<input className="h-11 w-full rounded font-noto-sans text-13px outline-none px-10px mr-3 border border-gray-quick-silver" type="text" value={"УСПЕХ"} />
								<button className="h-11 px-30px font-montserrat text-xs text-primary font-medium bg-gray-light2 rounded">
									Применить
								</button>
							</div>
							<div className={`bg-white p-3 border rounded-sm border-stroke  ${dropDownds.promo ? 'block' : 'hidden'}`}>
								<div className="flex mb-3 items-center">
									<p className="font-montserrat text-13px mr-1 .2x00:text-xs">-5% на заказ</p>
									<div className="px-6px py-3px mr-3 bg-green-05pe rounded-32px font-montserrat text-13px .2x00:text-xs text-black-70pe">
										от 1500 ₽
									</div>
									<p className="font-montserrat text-sm text-label-pink-2 .2x00:text-xs">Осталось: <span className="font-medium">451 ₽</span></p>
								</div>
								<p className="font-montserrat text-sm text-gray-quick-silver mb-3 .2x00:text-xs">Применяется после оформления при:</p>
								<div>
									<div className="flex items-center">
										<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="black" fill-opacity="0.7" />
											<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8ZM18 6C19.1046 6 20 6.89543 20 8V10H4V8C4 6.89543 4.89543 6 6 6H18ZM20 12H4V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V12Z" fill="black" fill-opacity="0.7" />
											<path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" stroke="white" stroke-width="0.4" stroke-linecap="round" />
											<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8ZM18 6C19.1046 6 20 6.89543 20 8V10H4V8C4 6.89543 4.89543 6 6 6H18ZM20 12H4V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V12Z" stroke="white" stroke-width="0.4" stroke-linecap="round" />
										</svg>
										<p className="font-montserrat text-sm .2x00:text-xs">Оплате онлайн</p>
									</div>
									<div className="flex mt-18px items-center">
										<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5939 2.08619C11.8524 1.97127 12.1476 1.97127 12.4061 2.08619L21.4061 6.08619C21.7673 6.24669 22 6.60481 22 7V17C22 17.3952 21.7673 17.7533 21.4061 17.9138L12.4061 21.9138C12.1476 22.0287 11.8524 22.0287 11.5939 21.9138L2.59386 17.9138C2.23273 17.7533 2 17.3952 2 17V7C2 6.60481 2.23273 6.24669 2.59386 6.08619L11.5939 2.08619ZM4 8.53876L11 11.6499V19.4612L4 16.3501V8.53876ZM13 19.4612L20 16.3501V8.53876L13 11.6499V19.4612ZM12 9.90568L18.5378 7L12 4.09432L5.46221 7L12 9.90568Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" />
										</svg>

										<p className="font-montserrat text-sm .2x00:text-xs">Доставке: <span className="font-medium">ПВЗ, курьер, посылка, бутик</span> </p>
									</div>
								</div>
							</div>

						</div>
						<div className={`h-16 px-18px flex items-center bg-input-error-bg ${dropDownds.promo ? 'block' : 'hidden'}`}>
							<p className="flex .2x00:text-xs font-montserrat text-sm items-center"><svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 15H13V17H11V15ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4ZM12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34783 3.05357 6.80429 4.92893 4.92893C5.85752 4.00034 6.95991 3.26375 8.17317 2.7612C9.38642 2.25865 10.6868 2 12 2C14.6522 2 17.1957 3.05356 19.0711 4.92893C20.9464 6.80429 22 9.34783 22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7363 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22ZM11 7H13V13H11V7Z" fill="black" fill-opacity="0.7" />
							</svg>
								Не применяется на акции и суперцены</p>
						</div>
					</div>

				</div>
			</div> */}

			<div className="hidden px-3 ..5x2:!block ..5x2:mt-5">
				<div onClick={(e) => setFilter('sale', e)} className={`  h-110px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.sale ? 'activeSlide' : ''}`}>

					<div id="click" className={`flex px-3 ..6x04:pl-0 ..6x04:mt-0 transiton-all mt-8 .1x1:pb-1 .1x1:mt-0   items-center mt-3 relative ..6x04:pb-10px pb-4 border-b border-dashed border-gray ${dropDownds.sale ? 'border-none pb-0' : ''}`}>
						<svg className={`absolute .1x1:right-1  right-3 transition-all top-5 ${dropDownds.sale ? 'prev_rotate' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
						</svg>

						<svg className="mr-4 ..5x1:mr-1.5 ..6x04:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.2542 27.8353C23.3647 29.4528 20.5385 30.1606 16.7902 30.2415C16.79 30.2415 16.7899 30.2415 16.7898 30.2415L16.2482 30.2497L16.2466 30.2497L15.7012 30.2521C15.7011 30.2521 15.701 30.2521 15.701 30.2521C12.5102 30.2521 9.86256 29.3881 7.93451 27.742C6.00752 26.0968 4.78416 23.6576 4.46462 20.477C4.13625 17.2085 5.5032 14.5311 8.24699 11.6928C8.2472 11.6926 8.24742 11.6923 8.24763 11.6921L8.54256 11.3945L10.5892 9.40644L10.5892 9.4065L10.5927 9.40294L10.8797 9.10511L10.8798 9.10518L10.8835 9.10109L11.1052 8.85351L11.1052 8.85354L11.1076 8.85076C11.2654 8.66573 11.3736 8.51485 11.417 8.40492L11.417 8.40492C11.8572 7.28866 11.9238 5.30469 11.5817 2.54785C11.4681 1.63198 12.4 0.944323 13.2416 1.32303C16.1206 2.6185 18.1613 4.42283 19.3257 6.72994C19.6611 7.39461 19.8955 8.11727 20.0496 8.90709C20.0652 8.98673 20.0798 9.06472 20.0934 9.14164L20.1655 9.59944L20.2191 10.0611C20.2266 10.1389 20.2335 10.218 20.2398 10.2992C20.2399 10.2996 20.2399 10.3 20.2399 10.3004L20.2724 10.8216L20.2949 11.418L20.295 11.4205L20.3162 12.4226L20.3239 12.7903L20.5755 12.5221L20.639 12.4544L20.6391 12.4545L20.642 12.4512C20.9882 12.0601 21.3745 11.5512 21.7984 10.9281L21.7996 10.9263L22.2343 10.2676L22.2353 10.266C22.3852 10.0324 22.5393 9.78611 22.6975 9.52703L22.6979 9.52638L22.9375 9.12947L22.9379 9.12884C23.3669 8.41023 24.386 8.352 24.8942 9.01707C27.0483 11.8366 28.1201 15.4598 28.1201 19.8556C28.1201 23.6799 27.1378 26.2228 25.2542 27.8353ZM14.3835 4.65839L14.1358 4.48304L14.1469 4.78631L14.1596 5.13161C14.1596 5.13191 14.1596 5.13222 14.1596 5.13252C14.2034 6.87011 14.0259 8.24068 13.6186 9.27327C13.3805 9.87704 12.9374 10.4185 12.0811 11.2606C12.0809 11.2608 12.0807 11.261 12.0805 11.2612L10.7926 12.502L10.7926 12.502L10.7913 12.5032L10.0353 13.249L10.0353 13.2489L10.0322 13.2522L9.64665 13.656L9.64664 13.656L9.64529 13.6575C7.57078 15.8889 6.5851 17.908 6.81943 20.2405C7.07321 22.7665 7.98817 24.6838 9.50454 25.9679C11.0194 27.2508 13.1156 27.8855 15.7012 27.8855L15.7027 27.8855L16.7454 27.8752L16.7454 27.8753L16.7489 27.8752L17.4798 27.851L17.4817 27.8509C20.3448 27.721 22.4229 27.1884 23.782 25.9372C25.1458 24.6816 25.7535 22.7334 25.7535 19.8556C25.7535 16.8914 25.2217 14.372 24.1615 12.2841L24.1615 12.2841L24.1604 12.2821L24.0949 12.1576L23.9777 11.9352L23.8376 12.1439L23.6762 12.3842C23.6761 12.3844 23.676 12.3845 23.6759 12.3847C22.9624 13.4285 22.3192 14.2081 21.7109 14.7371C21.1043 15.2647 20.5415 15.5352 19.986 15.5791L19.8205 15.5855C19.3316 15.5848 18.9541 15.4212 18.6725 15.1517C18.3877 14.8793 18.192 14.4898 18.0879 14.0271C18.0788 13.9869 18.0704 13.9472 18.0626 13.9077L18.0209 13.6578C18.0153 13.6167 18.0102 13.5746 18.0054 13.5309L17.9804 13.2352L17.9561 12.6649L17.9216 11.2573L17.9217 11.2573L17.9215 11.2539L17.8986 10.7635L17.8986 10.7635L17.8983 10.7593L17.8663 10.3319L17.8664 10.3319L17.8658 10.3264L17.8221 9.93741L17.8221 9.93741L17.8217 9.93431C17.8131 9.87027 17.804 9.80683 17.7941 9.74346L17.7942 9.74345L17.7936 9.74048L17.7273 9.3632L17.7273 9.36319L17.7268 9.36043C17.6127 8.7759 17.4451 8.2564 17.2129 7.79625L17.0789 7.86384L17.2129 7.79625C16.6454 6.6719 15.7936 5.68873 14.6484 4.846L14.6485 4.84598L14.6462 4.84438L14.3835 4.65839ZM14.1561 18.3874L14.0604 18.1288L13.8953 18.3497L13.6521 18.675L13.6521 18.675L13.6503 18.6775C12.8007 19.8653 12.4757 20.9497 12.661 21.921C12.848 22.9014 13.5391 23.5458 14.3811 23.7766C15.1233 23.9802 15.8502 23.8869 16.4834 23.3229C16.6001 23.219 16.6869 23.0923 16.7293 22.9384C16.7715 22.7854 16.767 22.6165 16.7196 22.4319C16.6261 22.068 16.3597 21.62 15.8975 21.0561L15.8975 21.0561L15.8953 21.0535L15.558 20.6604L15.558 20.6603L15.5551 20.6571L15.3621 20.4451L15.3613 20.4441C14.8937 19.9391 14.5141 19.3091 14.2171 18.5521C14.2169 18.5516 14.2167 18.5512 14.2166 18.5507L14.1561 18.3874ZM13.7552 26.059L13.7155 26.2037L13.7551 26.059C12.0965 25.6042 10.7065 24.3055 10.3362 22.3645C9.87264 19.9347 11.1153 17.4382 13.946 14.8653C14.6515 14.224 15.787 14.6378 15.9146 15.5827C16.1239 17.1331 16.531 18.2239 17.0979 18.8363C18.2328 20.0621 18.9258 21.2277 19.109 22.2819C19.29 23.3234 18.9766 24.2717 18.0574 25.0903C16.7518 26.2531 15.2126 26.4587 13.7552 26.059Z" fill="black" fillOpacity="0.7" stroke="#F7F8F6" strokeWidth="0.3" />
						</svg>
						<svg className="mr-3 ..6x04:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.5722 25.9745C21.843 27.4548 19.2393 28.1165 15.7379 28.192C15.7376 28.1921 15.7373 28.1921 15.737 28.1921L15.2321 28.1997L15.2288 28.1998L14.7199 28.202C14.7196 28.202 14.7193 28.202 14.719 28.202C11.7564 28.2019 9.31418 27.3998 7.54215 25.8869C5.77214 24.3758 4.64043 22.1297 4.34422 19.1813C4.04295 16.1826 5.29057 13.7167 7.84552 11.0735L8.12086 10.7956L10.0385 8.93287L10.0386 8.93299L10.0454 8.92587L10.3146 8.64665L10.3147 8.64679L10.322 8.63861L10.5299 8.40651L10.53 8.40657L10.5347 8.401C10.6821 8.22812 10.8003 8.06864 10.8518 7.93811L10.8518 7.9381C11.2806 6.85086 11.337 4.95499 11.0161 2.369C10.9249 1.63372 11.673 1.08166 12.3487 1.3857C15.0225 2.58884 16.904 4.25792 17.9756 6.38115C18.2825 6.98923 18.498 7.65245 18.6402 8.38094L18.9346 8.32347L18.6402 8.38094C18.6545 8.45424 18.6679 8.52595 18.6804 8.59661L18.7473 9.02109L18.797 9.44911C18.8038 9.52016 18.8101 9.59251 18.8159 9.66669L18.8462 10.1532L18.8673 10.7102L18.8871 11.6496L18.9027 12.3849L19.4059 11.8485L19.4654 11.7851L19.4655 11.7851L19.4712 11.7786C19.8018 11.4052 20.1682 10.9223 20.5678 10.3347L20.5679 10.3347L20.5702 10.3312L20.9777 9.71364L20.9778 9.71366L20.9798 9.71044C21.121 9.49043 21.2661 9.25848 21.415 9.01466L21.4158 9.01337L21.6404 8.64126L21.6412 8.64001C21.9856 8.06309 22.8038 8.01635 23.2117 8.55028C25.2052 11.1595 26.2033 14.5197 26.2033 18.6147C26.2033 22.1739 25.2896 24.5043 23.5722 25.9745ZM13.5767 4.23717L13.0813 3.88649L13.1035 4.49302L13.1154 4.81657C13.1561 6.4348 12.9899 7.69537 12.6192 8.63523C12.4094 9.16736 12.016 9.65477 11.2149 10.4427L10.0075 11.6058L10.0075 11.6058L10.005 11.6083L9.29627 12.3075L9.29618 12.3074L9.28996 12.3139L8.92852 12.6925L8.9285 12.6925L8.9258 12.6954C6.96594 14.8034 6.0085 16.7399 6.2347 18.9914C6.47569 21.3901 7.34717 23.2299 8.80758 24.4666C10.265 25.7008 12.271 26.302 14.7199 26.302L14.7229 26.302L15.7005 26.2924L15.7005 26.2925L15.7074 26.2923L16.3927 26.2696L16.3964 26.2695C19.0893 26.1473 21.0863 25.6461 22.4036 24.4334C23.7304 23.2119 24.3033 21.3306 24.3033 18.6147C24.3033 15.817 23.8015 13.4291 22.7935 11.4442L22.7936 11.4442L22.7915 11.4402L22.73 11.3235L22.4958 10.8787L22.2155 11.296L22.0649 11.5203C22.0647 11.5206 22.0645 11.521 22.0642 11.5213C21.3987 12.4949 20.8047 13.2129 20.2494 13.6958C19.6976 14.1758 19.202 14.408 18.7275 14.4463L18.5789 14.452C18.1609 14.4508 17.8481 14.3119 17.6157 14.0896C17.3772 13.8614 17.2056 13.5275 17.1129 13.1155C17.1049 13.0798 17.0975 13.0448 17.0905 13.0099L17.0523 12.7804C17.0475 12.7446 17.043 12.7079 17.0388 12.6699L17.0157 12.3979L16.9932 11.8681L16.9609 10.5498L16.961 10.5498L16.9607 10.5431L16.9392 10.0834L16.9393 10.0834L16.9387 10.075L16.9087 9.6743L16.9089 9.67428L16.9076 9.66318L16.8666 9.29854L16.8667 9.29853L16.8659 9.29233C16.8577 9.23118 16.8489 9.17059 16.8396 9.11008L16.8396 9.11007L16.8386 9.10412L16.7764 8.75042L16.7764 8.75041L16.7754 8.74489C16.6662 8.18563 16.505 7.68416 16.2794 7.2372L16.2794 7.23719C15.7349 6.15825 14.9188 5.2179 13.8274 4.41477L13.8275 4.41473L13.823 4.41154L13.5767 4.23717ZM12.9377 24.2767L12.8583 24.566L12.9377 24.2766C11.4362 23.8649 10.1816 22.6918 9.84684 20.9369L9.55215 20.9931L9.84684 20.9369C9.42783 18.7408 10.5429 16.4526 13.1816 14.0542C13.748 13.5394 14.6596 13.8715 14.762 14.6301C14.9596 16.0936 15.347 17.1565 15.9124 17.7673C16.9674 18.9069 17.5936 19.9722 17.7577 20.9166C17.9174 21.8356 17.6458 22.6703 16.8229 23.4031L17.0224 23.6272L16.8229 23.4031C15.6447 24.4524 14.2596 24.6392 12.9377 24.2767ZM13.4209 17.1829L13.2295 16.6657L12.8993 17.1074L12.6713 17.4124L12.6712 17.4124L12.6676 17.4175C11.8573 18.5504 11.5282 19.6112 11.7132 20.5808C11.9009 21.5649 12.5975 22.2132 13.4402 22.4443C14.1788 22.6469 14.9185 22.5549 15.5593 21.9843C15.6881 21.8695 15.7883 21.7253 15.8374 21.5471C15.8861 21.3709 15.8787 21.1836 15.829 20.9903C15.7325 20.6144 15.4642 20.1722 15.0272 19.6391L15.0273 19.639L15.0229 19.6339L14.7066 19.2653L14.7067 19.2652L14.7008 19.2588L14.52 19.06L14.5182 19.0581C14.0961 18.6021 13.75 18.0299 13.4775 17.3358L13.4209 17.1829Z" fill="black" fillOpacity="0.7" stroke="white" strokeWidth="0.6" />
						</svg>


						<div>
							<p id="click" className='font-montserrat font-semibold ..6x04:font-medium ..6x04:text-13px pt-2 .1x1:text-13px'>Скидка 35%</p>
							<p id="click" className='font-montserrat text-label-pink-2 ..6x04:mt-1 ..6x04:text-13px .1x1:text-13px'>1 532.30 ₽ </p>

						</div>

					</div>
					<div className="p-3">
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
				<div onClick={(e) => setFilter('free', e)} className={` h-100px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.free ? 'activeSlide mb-3' : ''}`}>
					<div id="click" className={`flex ..6x04:pl-0 px-3 .1x1:pb-1 .1x1:pt-0 pt-2 ..5x1:pr-0 .1x1:mt-0 pb-4 items-center mt-5px relative ..6x04:pb-10px  border-b border-dashed border-gray ${dropDownds.free ? 'border-none pb-0' : ''}`}>
						<svg className={`absolute  .1x1:right-1  right-3 top-5 transition-all ${dropDownds.free ? 'prev_rotate ' : ''} `} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
						</svg>

						<svg className={`mr-4 absolute left-3 top-2.5 ..5x1:mr-1.5 ..6x04:hidden .1x1:top-0`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.1615 19.9048C25.8452 19.6313 26.1778 18.8554 25.9043 18.1716C25.6308 17.4879 24.8549 17.1554 24.1712 17.4289L23.4767 17.7066C22.793 17.9801 22.4604 18.7561 22.7339 19.4398C23.0074 20.1235 23.7834 20.4561 24.4671 20.1826L25.1615 19.9048Z" fill="black" fillOpacity="0.7" />
							<path d="M20.3004 21.8492C20.9841 21.5758 21.3167 20.7998 21.0432 20.1161C20.7697 19.4324 19.9938 19.0998 19.31 19.3733L17.9212 19.9289C17.2374 20.2023 16.9049 20.9783 17.1784 21.662C17.4519 22.3457 18.2278 22.6783 18.9115 22.4048L20.3004 21.8492Z" fill="black" fillOpacity="0.7" />
							<path d="M14.7449 24.0715C15.4286 23.798 15.7611 23.022 15.4876 22.3383C15.2142 21.6546 14.4382 21.322 13.7545 21.5955L12.3656 22.1511C11.6819 22.4246 11.3493 23.2005 11.6228 23.8842C11.8963 24.5679 12.6723 24.9005 13.356 24.627L14.7449 24.0715Z" fill="black" fillOpacity="0.7" />
							<path d="M9.18931 26.2937C9.87302 26.0202 10.2056 25.2442 9.93209 24.5605C9.6586 23.8768 8.88264 23.5443 8.19893 23.8177L7.50449 24.0955C6.82078 24.369 6.48822 25.145 6.7617 25.8287C7.03519 26.5124 7.81115 26.8449 8.49486 26.5715L9.18931 26.2937Z" fill="black" fillOpacity="0.7" />
							<path fillRule="evenodd" clipRule="evenodd" d="M5.33301 15.3335C5.33301 13.1244 7.12387 11.3335 9.33301 11.3335C11.5421 11.3335 13.333 13.1244 13.333 15.3335C13.333 16.1524 12.9865 17.0777 12.5256 17.9995C12.042 18.9667 11.3368 20.1119 10.4301 21.4246C10.1811 21.785 9.77103 22.0002 9.33301 22.0002C8.89498 22.0002 8.4849 21.785 8.23595 21.4246C7.32917 20.1119 6.62402 18.9667 6.14044 17.9995C5.67954 17.0777 5.33301 16.1524 5.33301 15.3335ZM9.33301 14.0002C8.59663 14.0002 7.99967 14.5971 7.99967 15.3335C7.99967 15.4964 8.09758 15.9509 8.52558 16.8069C8.73456 17.2249 9.00279 17.7013 9.33301 18.2376C9.66323 17.7013 9.93146 17.2249 10.1404 16.8069C10.5684 15.9509 10.6663 15.4964 10.6663 15.3335C10.6663 14.5971 10.0694 14.0002 9.33301 14.0002Z" fill="black" fillOpacity="0.7" />
							<path fillRule="evenodd" clipRule="evenodd" d="M22.6663 5.3335C20.4572 5.3335 18.6663 7.12436 18.6663 9.3335C18.6663 10.1524 19.0129 11.0777 19.4738 11.9995C19.9574 12.9667 20.6625 14.1119 21.5693 15.4246C21.8182 15.785 22.2283 16.0002 22.6663 16.0002C23.1044 16.0002 23.5145 15.785 23.7634 15.4246C24.6702 14.1119 25.3753 12.9667 25.8589 11.9995C26.3198 11.0777 26.6663 10.1524 26.6663 9.3335C26.6663 7.12436 24.8755 5.3335 22.6663 5.3335ZM21.333 9.3335C21.333 8.59712 21.93 8.00016 22.6663 8.00016C23.4027 8.00016 23.9997 8.59712 23.9997 9.3335C23.9997 9.49645 23.9018 9.95094 23.4738 10.8069C23.2648 11.2249 22.9966 11.7013 22.6663 12.2376C22.3361 11.7013 22.0679 11.2249 21.8589 10.8069C21.4309 9.95094 21.333 9.49645 21.333 9.3335Z" fill="black" fillOpacity="0.7" />
							<path fillRule="evenodd" clipRule="evenodd" d="M4.66634 1.3335C2.82539 1.3335 1.33301 2.82588 1.33301 4.66683V27.3335C1.33301 29.1744 2.82539 30.6668 4.66634 30.6668H27.333C29.174 30.6668 30.6663 29.1744 30.6663 27.3335V4.66683C30.6663 2.82588 29.174 1.3335 27.333 1.3335H4.66634ZM3.99967 4.66683C3.99967 4.29864 4.29815 4.00016 4.66634 4.00016H27.333C27.7012 4.00016 27.9997 4.29864 27.9997 4.66683V27.3335C27.9997 27.7017 27.7012 28.0002 27.333 28.0002H4.66634C4.29815 28.0002 3.99967 27.7017 3.99967 27.3335V4.66683Z" fill="black" fillOpacity="0.7" />
							<path d="M25.1615 19.9048C25.8452 19.6313 26.1778 18.8554 25.9043 18.1716C25.6308 17.4879 24.8549 17.1554 24.1712 17.4289L23.4767 17.7066C22.793 17.9801 22.4604 18.7561 22.7339 19.4398C23.0074 20.1235 23.7834 20.4561 24.4671 20.1826L25.1615 19.9048Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
							<path d="M20.3004 21.8492C20.9841 21.5758 21.3167 20.7998 21.0432 20.1161C20.7697 19.4324 19.9938 19.0998 19.31 19.3733L17.9212 19.9289C17.2374 20.2023 16.9049 20.9783 17.1784 21.662C17.4519 22.3457 18.2278 22.6783 18.9115 22.4048L20.3004 21.8492Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
							<path d="M14.7449 24.0715C15.4286 23.798 15.7611 23.022 15.4876 22.3383C15.2142 21.6546 14.4382 21.322 13.7545 21.5955L12.3656 22.1511C11.6819 22.4246 11.3493 23.2005 11.6228 23.8842C11.8963 24.5679 12.6723 24.9005 13.356 24.627L14.7449 24.0715Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
							<path d="M9.18931 26.2937C9.87302 26.0202 10.2056 25.2442 9.93209 24.5605C9.6586 23.8768 8.88264 23.5443 8.19893 23.8177L7.50449 24.0955C6.82078 24.369 6.48822 25.145 6.7617 25.8287C7.03519 26.5124 7.81115 26.8449 8.49486 26.5715L9.18931 26.2937Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
							<path fillRule="evenodd" clipRule="evenodd" d="M5.33301 15.3335C5.33301 13.1244 7.12387 11.3335 9.33301 11.3335C11.5421 11.3335 13.333 13.1244 13.333 15.3335C13.333 16.1524 12.9865 17.0777 12.5256 17.9995C12.042 18.9667 11.3368 20.1119 10.4301 21.4246C10.1811 21.785 9.77103 22.0002 9.33301 22.0002C8.89498 22.0002 8.4849 21.785 8.23595 21.4246C7.32917 20.1119 6.62402 18.9667 6.14044 17.9995C5.67954 17.0777 5.33301 16.1524 5.33301 15.3335ZM9.33301 14.0002C8.59663 14.0002 7.99967 14.5971 7.99967 15.3335C7.99967 15.4964 8.09758 15.9509 8.52558 16.8069C8.73456 17.2249 9.00279 17.7013 9.33301 18.2376C9.66323 17.7013 9.93146 17.2249 10.1404 16.8069C10.5684 15.9509 10.6663 15.4964 10.6663 15.3335C10.6663 14.5971 10.0694 14.0002 9.33301 14.0002Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
							<path fillRule="evenodd" clipRule="evenodd" d="M22.6663 5.3335C20.4572 5.3335 18.6663 7.12436 18.6663 9.3335C18.6663 10.1524 19.0129 11.0777 19.4738 11.9995C19.9574 12.9667 20.6625 14.1119 21.5693 15.4246C21.8182 15.785 22.2283 16.0002 22.6663 16.0002C23.1044 16.0002 23.5145 15.785 23.7634 15.4246C24.6702 14.1119 25.3753 12.9667 25.8589 11.9995C26.3198 11.0777 26.6663 10.1524 26.6663 9.3335C26.6663 7.12436 24.8755 5.3335 22.6663 5.3335ZM21.333 9.3335C21.333 8.59712 21.93 8.00016 22.6663 8.00016C23.4027 8.00016 23.9997 8.59712 23.9997 9.3335C23.9997 9.49645 23.9018 9.95094 23.4738 10.8069C23.2648 11.2249 22.9966 11.7013 22.6663 12.2376C22.3361 11.7013 22.0679 11.2249 21.8589 10.8069C21.4309 9.95094 21.333 9.49645 21.333 9.3335Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
							<path fillRule="evenodd" clipRule="evenodd" d="M4.66634 1.3335C2.82539 1.3335 1.33301 2.82588 1.33301 4.66683V27.3335C1.33301 29.1744 2.82539 30.6668 4.66634 30.6668H27.333C29.174 30.6668 30.6663 29.1744 30.6663 27.3335V4.66683C30.6663 2.82588 29.174 1.3335 27.333 1.3335H4.66634ZM3.99967 4.66683C3.99967 4.29864 4.29815 4.00016 4.66634 4.00016H27.333C27.7012 4.00016 27.9997 4.29864 27.9997 4.66683V27.3335C27.9997 27.7017 27.7012 28.0002 27.333 28.0002H4.66634C4.29815 28.0002 3.99967 27.7017 3.99967 27.3335V4.66683Z" stroke="#F7F8F6" strokeWidth="0.6" strokeLinejoin="round" />
						</svg>
						<svg className={`mr-3 ${dropDownds.free ? 'mb-7 w-8' : ""} ..6x04:block hidden `} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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


						<div className="ml-12 ..5x2:ml-10 ..6x4:ml-0">
							<p id="click" className='font-montserrat font-semibold ..6x04:text-13px    ..6x04:font-medium .1x1:text-13px'>Бесплатная доставка</p>
							<div className={`flex items-center  ${dropDownds.free ? 'flex-wrap' : ''}`}>
								<div className='flex items-center mb-6px'>
									<p id="click" className='..7x230:text-10px font-montserrat  text-13px font-normal mr-1 ..7x01:mr-0.5 ..6x04:text-11px .4x1:text-10px'>Курьер</p>
									<span id="click" className='..7x230:text-9px ..5x1:text-8px  rounded-xl ..7x230:px-1 .2x00:mr-0.5 .2x00:text-10px  ..6x04:text-10px ..7x01:mr-0.5 font-montserrat  text-13px mr-2 p-1 px-1.5 bg-primary-searchBG text-primary flex items-center'><svg className="mr-1 .4x1:hidden ..6x04:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.2498 4.08336L5.24984 11.0834L2.0415 7.87503L2.864 7.05253L5.24984 9.43253L11.4273 3.26086L12.2498 4.08336Z" fill="#337202" />
									</svg> от 2 500 ₽</span>
								</div>
								<div className={`${dropDownds.free ? 'mr-2' : ""} mb-6px flex items-center`}>
									<p id="click" className='font-montserrat  ..7x230:text-10px   text-13px font-normal mr-1  ..7x01:mr-0.5 ..6x04:text-11px .4x1:text-10px'>ПВЗ</p>
									<span id="click" className='..7x230:text-9px ..5x1:text-8px .2x00:text-10px rounded-xl .2x00:mr-0.5 ..7x230:px-1 ..6x04:text-10px ..7x01:mr-0.5 font-montserrat  text-13px mr-2 p-1 px-1.5 bg-primary-searchBG text-primary flex items-center' ><svg className="mr-1 .4x1:hidden ..6x04:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.2498 4.08336L5.24984 11.0834L2.0415 7.87503L2.864 7.05253L5.24984 9.43253L11.4273 3.26086L12.2498 4.08336Z" fill="#337202" />
									</svg>от 1 500 ₽</span>
								</div>
								<div className={`flex items-center mb-6px ${dropDownds.free ? 'block' : 'hidden'}`}>
									<p id="click" className='..7x230:text-10px font-montserrat  text-13px font-normal mr-1 ..7x01:mr-0.5 ..6x04:text-11px .4x1:text-10px'>Бутики</p>
									<span id="click" className='..7x230:text-9px  rounded-xl ..7x230:px-1 .2x00:mr-0.5 .2x00:text-10px  ..6x04:text-10px ..7x01:mr-0.5 font-montserrat  text-13px mr-2 p-1 px-1.5 bg-primary-searchBG text-primary flex items-center'><svg className="mr-1  ..6x04:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.2498 4.08336L5.24984 11.0834L2.0415 7.87503L2.864 7.05253L5.24984 9.43253L11.4273 3.26086L12.2498 4.08336Z" fill="#337202" />
									</svg> от 0 ₽</span>
								</div>

								<button className={`${dropDownds.free ? 'hidden' : ""} p-1.5 ..6x5:py-1 ..6x5:-mt-1.5 ..5x1:text-8px px-3 ..7x230:text-9px ..7x230:px-1 .2x00:text-10px rounded-xl bg-primary-searchBG ..6x04:text-10px   text-11px font-montserrat text-black`}>ещё</button>



							</div>


						</div>
					</div>
					<div className={` px-4 pb-4 ${dropDownds.free ? 'block' : 'hidden'}`}>
						<div className="bg-white border border-stroke px-4 py-3">
							<div className="flex items-center   ">
								<div className="mr-3 -mt-6 relative">
									<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="30" height="30" rx="4" fill="#E8E9E7" />
										<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
									</svg>
									<input type="checkbox" className="hidden" id="checkboxFree" />
									<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
										<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

										</div>
									</label>
								</div>

								<div className="flex border-b pb-3 border-dashed border-stroke items-center justify-between w-full">


									<div>
										<p className="font-montserrat mb-0.5 .2x00:text-xs">Курьерская</p>
										<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">2-3 дня</p>

										<SectionImgs variant={'DostavkaDropDown'} adapt={true} noCenter={true} mr3={true} textImg={[yandex, pochtaRF, ozon, cdek]} />

									</div>
									<div>
										<p className="font-montserrat text-13px text-gray-quick-silver mb-0.5 .2x00:text-xs">Бесплатно от:</p>
										<p className="font-montserrat text-sm mb-6px .2x00:text-xs">2 500.00 ₽ </p>
										<p className="font-montserrat font-medium text-primary text-13px .2x00:text-xs">
											Подробнее
										</p>
									</div>
								</div>

							</div>
							<div className="flex items-center  pt-2 ">
								<div className="mr-3 -mt-6 relative">
									<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="30" height="30" rx="4" fill="#E8E9E7" />
										<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
									</svg>
									<input type="checkbox" className="hidden" id="checkboxFree" />
									<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
										<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

										</div>
									</label>
								</div>

								<div className="flex border-b pb-3 border-dashed border-stroke items-center justify-between w-full">


									<div>
										<p className="font-montserrat mb-0.5 .2x00:text-xs">ПВЗ/постаматы</p>
										<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">4-6 дней</p>

										<SectionImgs variant={'DostavkaDropDown'} adapt={true} noCenter={true} mr3={true} textImg={[ozon, cdek, berry]} />

									</div>
									<div>
										<p className="font-montserrat text-13px text-gray-quick-silver mb-0.5 .2x00:text-xs">Бесплатно от:</p>
										<p className="font-montserrat text-sm mb-6px .2x00:text-xs">1 500.00 ₽  </p>
										<p className="font-montserrat font-medium text-primary text-13px .2x00:text-xs">
											На карте
										</p>
									</div>
								</div>

							</div>
							<div className="flex items-center  pt-2 ">
								<div className="mr-3 -mt-6 relative">
									<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="30" height="30" rx="4" fill="#E8E9E7" />
										<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
									</svg>
									<input type="checkbox" className="hidden" id="checkboxFree" />
									<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
										<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

										</div>
									</label>
								</div>

								<div className="flex   pb-3  items-center justify-between w-full">


									<div>
										<p className="font-montserrat mb-0.5 .2x00:text-xs">Бутики TianDe</p>
										<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">4-6 дней</p>

										<div className="mt-6px flex items-center">
											<svg className="mr-0.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.1668 9.18849L14.2183 9.21945L14.3722 9.31195L14.1668 9.18849ZM14.1668 9.18849L14.1153 9.21945M14.1668 9.18849L14.1153 9.21945M14.1153 9.21945L13.9614 9.31195L14.1153 9.21945ZM7.82838 12.6054C7.46512 12.649 7.1835 12.9585 7.1835 13.3335V17.5002V17.6002H7.0835H4.16683H4.06683L4.06683 17.5002L4.06701 9.9089L4.06701 9.81945L4.1559 9.80952C4.66792 9.75231 5.17052 9.58648 5.62802 9.31198L7.82838 12.6054ZM7.82838 12.6054L7.91971 12.6002H12.0835C12.4885 12.6002 12.8168 12.9285 12.8168 13.3335V17.5002V17.6002H12.9168H15.8335H15.9335L15.9335 17.5002L15.9342 9.909L15.9342 9.81952L15.8452 9.80961C15.3329 9.75249 14.83 9.58663 14.3723 9.31199L7.82838 12.6054ZM16.6585 5.73266L16.6585 5.73283L16.6694 5.73347L16.6796 5.73339L16.6813 5.73336L17.5002 5.7335L17.6002 5.73351V5.8335V7.861V7.91743L17.5518 7.9466L17.3737 8.05415L17.3735 8.05429C16.6821 8.46916 15.8183 8.46916 15.1268 8.0543L14.5441 7.70467C14.3119 7.56533 14.0218 7.56533 13.7895 7.70467L13.2068 8.05429C12.5154 8.46916 11.6516 8.46916 10.9602 8.0543L10.3775 7.70467C10.1452 7.56533 9.8551 7.56533 9.62286 7.70467L9.04016 8.05429C8.34872 8.46916 7.48494 8.46916 6.79351 8.0543L6.21079 7.70467C5.97856 7.56533 5.68843 7.56533 5.4562 7.70467L4.87349 8.05429L4.87035 8.05618L4.87032 8.05612L4.73627 8.13001L4.73306 8.13178L4.73302 8.13172C4.06767 8.4673 3.27224 8.44151 2.62691 8.05433L16.6585 5.73266ZM16.6585 5.73266L16.6527 5.73266L2.50016 5.7335L2.40016 5.7335V5.8335V7.86183V7.91849L2.44877 7.94761L2.62685 8.0543L16.6585 5.73266ZM2.60045 9.71785L2.60045 9.64714L2.53378 9.62357C2.3685 9.56514 2.20644 9.49443 2.04897 9.41144L1.87108 9.31124L1.28954 8.96233C1.06865 8.8298 0.933496 8.59109 0.933496 8.3335V5.00016C0.933496 4.59515 1.26182 4.26683 1.66683 4.26683L1.66693 4.26683L2.50026 4.266L2.60016 4.2659V4.166V1.66683C2.60016 1.29178 2.8818 0.982366 3.24506 0.938764L3.33638 0.933496H16.6668C17.0419 0.933496 17.3513 1.21513 17.3949 1.5784L17.4002 1.66971V4.166V4.2659L17.5001 4.266L18.3334 4.26683H18.3335C18.7085 4.26683 19.018 4.54846 19.0616 4.91173L19.0668 5.00304V8.3335C19.0668 8.59109 18.9317 8.82979 18.7108 8.96232L18.1281 9.31194C17.9163 9.43901 17.6949 9.54278 17.4674 9.62328L17.4007 9.64686L17.4007 9.71755L17.4002 18.3335C17.4002 18.7085 17.1185 19.018 16.7553 19.0616L16.6639 19.0668H3.3335C2.95845 19.0668 2.64903 18.7852 2.60543 18.4219L2.60016 18.3306L2.60045 9.71785ZM5.78198 9.21945L5.62809 9.31195L9.79469 9.31198C8.69699 9.97058 7.33943 10.0037 6.21559 9.41142L6.03778 9.31127L5.88501 9.21945L5.8335 9.18849L5.78198 9.21945ZM9.94865 9.21945L9.79475 9.31195L13.9614 9.31198C12.8637 9.97058 11.5061 10.0037 10.3823 9.41142L10.2044 9.31126L10.0517 9.21945L10.0002 9.18849L9.94865 9.21945ZM11.3502 14.1668V14.0668H11.2502H8.75016H8.65016V14.1668V17.5002V17.6002H8.75016H11.2502H11.3502V17.5002V14.1668ZM15.9335 2.50016V2.40016H15.8335H4.16683H4.06683V2.50016V4.166V4.266H4.16683H15.8335H15.9335V4.166V2.50016Z" fill="black" fill-opacity="0.7" stroke="#FCFDFB" stroke-width="0.2" />
											</svg>
											<svg width="44" height="18" viewBox="0 0 44 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M40.3643 0.746872C40.5549 0.744986 40.742 0.797357 40.9038 0.897863C41.0619 0.994207 41.1914 1.13105 41.2788 1.29421C41.3715 1.46657 41.4197 1.65934 41.419 1.85504C41.42 2.05421 41.3719 2.25054 41.2788 2.42664C41.1917 2.58986 41.0633 2.72743 40.9065 2.82569C40.7447 2.92557 40.5572 2.97617 40.367 2.97129C40.1799 2.97312 39.9959 2.92387 39.8347 2.82884C39.6736 2.73381 39.5415 2.59661 39.4526 2.43204C39.3595 2.26078 39.3113 2.06879 39.3123 1.87391C39.311 1.6747 39.3592 1.47828 39.4526 1.3023C39.5411 1.13927 39.6703 1.00182 39.8275 0.903256C39.9897 0.803563 40.1766 0.751258 40.367 0.752266L40.3643 0.746872ZM40.3643 0.579701C40.1387 0.578457 39.9169 0.638075 39.7223 0.752266C39.5358 0.864498 39.3808 1.02221 39.2718 1.21063C39.1605 1.40815 39.1021 1.63103 39.1021 1.85773C39.1021 2.08444 39.1605 2.30732 39.2718 2.50484C39.3794 2.69654 39.536 2.85623 39.7256 2.96757C39.9152 3.0789 40.131 3.13788 40.3508 3.13846C40.5711 3.13987 40.7877 3.08173 40.9776 2.97019C41.1676 2.85865 41.3238 2.69786 41.4298 2.50484C41.5411 2.30732 41.5996 2.08444 41.5996 1.85773C41.5996 1.63103 41.5411 1.40815 41.4298 1.21063C41.3239 1.02262 41.1716 0.864826 40.9874 0.752266C40.7958 0.638235 40.5766 0.578573 40.3535 0.579701H40.3643ZM39.8518 2.66931H40.0649V1.9521H40.2672C40.3481 1.94986 40.4269 1.97773 40.4884 2.03029C40.5482 2.09896 40.5875 2.18305 40.6017 2.27296C40.6233 2.37811 40.6422 2.4617 40.661 2.54259C40.6726 2.58993 40.6889 2.63599 40.7096 2.68009H40.9416C40.9155 2.62803 40.8964 2.57272 40.8849 2.51562C40.8634 2.43743 40.8391 2.34306 40.8121 2.22712C40.7969 2.15052 40.7676 2.07739 40.7258 2.01142C40.6883 1.9567 40.6345 1.91519 40.572 1.89279C40.6572 1.85915 40.7324 1.80441 40.7905 1.73371C40.8517 1.65734 40.8842 1.56192 40.8822 1.46408C40.8818 1.40222 40.8699 1.34097 40.8472 1.28343C40.8246 1.23288 40.7925 1.18712 40.7528 1.14861C40.6969 1.09984 40.6304 1.06476 40.5585 1.04616C40.4651 1.02266 40.3689 1.01178 40.2726 1.0138C40.2007 1.0138 40.1278 1.0138 40.0541 1.0138C39.9813 1.0138 39.9192 1.02998 39.8626 1.04076V2.67201L39.8518 2.66931ZM40.0649 1.18636V1.79033H40.2834C40.3808 1.79523 40.4767 1.76457 40.5532 1.70405C40.5867 1.677 40.6132 1.64233 40.6306 1.60293C40.648 1.56352 40.6556 1.52053 40.653 1.47756C40.6563 1.4328 40.6485 1.3879 40.6301 1.34693C40.6118 1.30597 40.5834 1.27024 40.5478 1.24298C40.4686 1.18911 40.3736 1.16346 40.278 1.17018H40.1485L40.0676 1.18367L40.0649 1.18636ZM0.856934 10.6907L2.33246 10.6395V8.69007H3.17677V10.6044L5.03804 10.5397V11.2488L3.17677 11.1598V14.8349C3.17677 16.431 3.71627 17.124 5.03804 16.9919V17.4233C3.46001 17.4233 2.34055 16.884 2.34055 14.8376V11.1113L0.865026 11.0412V10.6907H0.856934ZM6.50547 8.69007H7.34169V9.64724H6.50547V8.69007ZM6.50547 10.5963H7.34169V17.3963H6.50547V10.5963ZM17.2954 10.5963H18.1316V11.9903C19.154 9.6823 23.3864 9.83329 23.3864 13.4301V17.3963H22.5528V13.4058C22.5528 10.4184 18.8168 10.1703 18.1316 12.9825V17.3963H17.2954V10.5963ZM31.7459 14.9373C32.2575 14.48 32.7106 13.961 33.0946 13.3924L43.0052 13.5191V12.7345L41.2923 12.7695C39.9004 9.57714 36.9763 8.5256 34.4811 9.06755C34.4811 8.91117 34.4811 8.75478 34.4811 8.5957C34.4811 3.81522 30.2514 0.428711 25.0399 0.428711V17.4502C27.184 17.4178 29.2697 16.7476 31.031 15.5251C33.046 17.825 38.0067 18.305 40.6044 15.4038L40.4048 15.2312C37.9177 17.4475 33.7906 17.523 31.754 14.9427L31.7459 14.9373ZM30.4214 13.0014L28.7274 13.0391V13.3357L32.3771 13.3816C31.6633 14.4007 30.7171 15.2354 29.6167 15.8168C28.5163 16.3982 27.2933 16.7094 26.0488 16.7249L26.0083 1.35623C30.122 1.58811 33.6611 5.29278 33.6611 9.24011V9.31291C32.851 9.60206 32.1283 10.0935 31.5617 10.7405C30.9951 11.3875 30.6035 12.1686 30.4241 13.0095L30.4214 13.0014ZM40.162 12.7938L33.359 12.9394C33.9206 11.9579 34.2776 10.8729 34.4083 9.7497C36.515 9.27516 38.9643 10.0193 40.162 12.7938ZM33.6314 9.98698C33.5279 11.0346 33.1965 12.0468 32.6603 12.9529L30.7936 12.9906C31.1012 11.6209 32.2314 10.5262 33.6314 9.98428V9.98698ZM9.62377 13.9774C9.62377 15.8406 10.754 17.0862 12.181 17.0862C13.608 17.0862 14.892 15.7165 14.892 13.9774C14.892 12.2384 13.5918 11.0116 12.181 11.0116C10.9698 11.0116 9.62377 12.0901 9.62377 13.9774ZM15.6527 17.3963H14.8299V15.9484C14.3579 16.9541 13.1575 17.5662 12.1567 17.5662C10.2496 17.5662 8.69044 16.2855 8.69044 13.9801C8.67647 13.5195 8.75628 13.0608 8.92501 12.6319C9.09374 12.203 9.34789 11.8128 9.67202 11.485C9.99616 11.1573 10.3835 10.8987 10.8106 10.7251C11.2378 10.5515 11.6957 10.4664 12.1567 10.475C12.6993 10.4676 13.2339 10.6064 13.7043 10.8768C14.1747 11.1473 14.5635 11.5393 14.8299 12.0119V10.5936H15.6634L15.6527 17.3963Z" fill="black" fill-opacity="0.7" />
											</svg>

										</div>

									</div>
									<div>
										<p className="font-montserrat text-13px text-gray-quick-silver mb-0.5 .2x00:text-xs">Бесплатно от:</p>
										<p className="font-montserrat text-sm mb-6px .2x00:text-xs">0.00 ₽  </p>
										<p className="font-montserrat font-medium text-primary text-13px .2x00:text-xs">
											На карте
										</p>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>

				<div onClick={(e) => setFilter('loal', e)} className={` h-80px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.loal ? 'activeSlide mb-3' : ''}`}>
					<div id="click" className={`flex px-3 ..6x04:pl-0  pt-2 .1x1:pt-0 .1x1:mt-0  items-center -mt-2 relative pb-4 border-b ..6x04:pb-10px  border-dashed border-gray ${dropDownds.loal ? 'border-none' : ""}`}>
						<svg className={`absolute transition-all .1x1:right-1  right-3 top-5 ..6x04:top-3 ${dropDownds.loal ? 'prev_rotate' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
						</svg>

						<svg className="mr-4 ..5x1:mr-1.5 ..6x04:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="16" cy="16" r="15" stroke="black" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" strokeDasharray="3 6 9 12" />
							<path d="M8 19.541C8.286 19.5237 8.48967 19.463 8.611 19.359C8.741 19.255 8.82333 19.099 8.858 18.891C8.89267 18.683 8.91 18.4187 8.91 18.098V12.69C8.91 12.4993 8.91433 12.3173 8.923 12.144C8.93167 11.962 8.94033 11.806 8.949 11.676C8.80167 11.6847 8.64133 11.6933 8.468 11.702C8.29467 11.7107 8.13867 11.7193 8 11.728V11.013L11.315 11C12.121 11 12.8447 11.104 13.486 11.312C14.1273 11.52 14.6733 11.8233 15.124 12.222C15.5747 12.612 15.917 13.0887 16.151 13.652C16.385 14.2153 16.502 14.8437 16.502 15.537C16.502 16.1177 16.4023 16.681 16.203 17.227C16.0037 17.773 15.696 18.2627 15.28 18.696C14.8727 19.1207 14.357 19.463 13.733 19.723C13.109 19.983 12.3723 20.113 11.523 20.113H8V19.541ZM10.288 18.384C10.288 18.618 10.2837 18.826 10.275 19.008C10.275 19.19 10.2663 19.3373 10.249 19.45C10.431 19.45 10.613 19.4543 10.795 19.463C10.977 19.463 11.1373 19.463 11.276 19.463C11.4233 19.463 11.5273 19.463 11.588 19.463C12.1253 19.463 12.602 19.3633 13.018 19.164C13.434 18.9647 13.785 18.6873 14.071 18.332C14.3657 17.9767 14.5867 17.565 14.734 17.097C14.89 16.629 14.968 16.1307 14.968 15.602C14.968 14.7527 14.8293 14.0333 14.552 13.444C14.2747 12.8547 13.8543 12.404 13.291 12.092C12.7363 11.78 12.043 11.6197 11.211 11.611C10.925 11.611 10.717 11.663 10.587 11.767C10.457 11.8623 10.3747 12.014 10.34 12.222C10.3053 12.43 10.288 12.6943 10.288 13.015V18.384Z" fill="black" fillOpacity="0.7" />
							<path d="M20.24 20.321C19.6333 20.321 19.0873 20.1823 18.602 19.905C18.1253 19.619 17.7483 19.2203 17.471 18.709C17.1937 18.189 17.055 17.578 17.055 16.876C17.055 16.2693 17.1893 15.7017 17.458 15.173C17.7353 14.6443 18.121 14.2197 18.615 13.899C19.109 13.5697 19.681 13.405 20.331 13.405C20.695 13.405 21.0373 13.4613 21.358 13.574C21.6873 13.6867 21.9777 13.8643 22.229 14.107C22.489 14.341 22.6927 14.6487 22.84 15.03C22.9873 15.4027 23.061 15.8577 23.061 16.395L18.589 16.473C18.589 17.0623 18.654 17.5867 18.784 18.046C18.9227 18.5053 19.1437 18.8607 19.447 19.112C19.7503 19.3633 20.1447 19.489 20.63 19.489C20.864 19.489 21.111 19.45 21.371 19.372C21.6397 19.2853 21.891 19.164 22.125 19.008C22.3677 18.852 22.5713 18.6657 22.736 18.449L23.139 18.8C22.879 19.19 22.58 19.4977 22.242 19.723C21.904 19.9397 21.5573 20.0913 21.202 20.178C20.8553 20.2733 20.5347 20.321 20.24 20.321ZM18.641 15.797H21.644C21.644 15.4677 21.5963 15.173 21.501 14.913C21.4143 14.6443 21.2757 14.432 21.085 14.276C20.8943 14.12 20.6517 14.042 20.357 14.042C19.8977 14.042 19.5207 14.1893 19.226 14.484C18.9313 14.77 18.7363 15.2077 18.641 15.797Z" fill="black" fillOpacity="0.7" />
							<path d="M7.9 19.4469L7.99395 19.4412C8.27341 19.4242 8.44984 19.3654 8.54592 19.2831L8.54849 19.2809L8.54853 19.2809C8.65457 19.1961 8.72763 19.065 8.75936 18.8746C8.79278 18.674 8.81 18.4157 8.81 18.098V12.69L7.9 19.4469ZM7.9 19.4469V19.541M7.9 19.4469V19.541M7.9 19.541V20.113V20.213H8H11.523C12.3823 20.213 13.1326 20.0815 13.7715 19.8153C14.4063 19.5508 14.934 19.2012 15.3522 18.7652M7.9 19.541L15.28 18.696M15.1898 12.1467C14.7278 11.7381 14.1695 11.4285 13.5169 11.2169C12.8638 11.0051 12.1295 10.9 11.315 10.9L11.3146 10.9L7.99961 10.913L7.9 10.9134V11.013V11.728V11.8344L8.00624 11.8278C8.1444 11.8192 8.29998 11.8105 8.47299 11.8019C8.60332 11.7954 8.72635 11.7888 8.84208 11.7823L15.124 12.222M15.1898 12.1467C15.19 12.1469 15.1901 12.147 15.1903 12.1471L15.124 12.222M15.1898 12.1467C15.1897 12.1466 15.1896 12.1465 15.1894 12.1464L15.124 12.222M15.1898 12.1467C15.6523 12.5471 16.0036 13.0365 16.2434 13.6136C16.483 14.1907 16.602 14.8323 16.602 15.537C16.602 16.1294 16.5003 16.7043 16.2969 17.2613C16.0927 17.8208 15.7774 18.3222 15.3522 18.7652M15.124 12.222C15.5747 12.612 15.917 13.0887 16.151 13.652C16.385 14.2153 16.502 14.8437 16.502 15.537C16.502 16.1177 16.4023 16.681 16.203 17.227C16.0037 17.773 15.696 18.2627 15.28 18.696M15.3522 18.7652L15.28 18.696M15.3522 18.7652C15.3522 18.7652 15.3521 18.7652 15.3521 18.7653L15.28 18.696M18.5505 19.9908L18.5506 19.9908C18.0578 19.6951 17.6685 19.283 17.3831 18.7567L17.3828 18.7561C17.0964 18.219 16.955 17.5913 16.955 16.876C16.955 16.254 17.0929 15.6707 17.3689 15.1277L17.3694 15.1265C17.6545 14.5831 18.0517 14.1456 18.56 13.8155C19.0719 13.4744 19.6634 13.305 20.331 13.305C20.7053 13.305 21.0588 13.3629 21.3908 13.4795C21.7333 13.5968 22.0358 13.7818 22.2972 14.0339C22.57 14.2798 22.7814 14.6009 22.9332 14.9936M18.5505 19.9908L22.229 14.107C22.489 14.341 22.6927 14.6487 22.84 15.03C22.9873 15.4027 23.061 15.8577 23.061 16.395L18.589 16.473M18.5505 19.9908L18.5524 19.9918C19.0541 20.2785 19.6175 20.421 20.24 20.421C20.5449 20.421 20.8742 20.3718 21.2271 20.2748M18.5505 19.9908L21.3413 19.2765M22.9332 14.9936C22.9332 14.9937 22.9332 14.9939 22.9333 14.994L22.84 15.03L22.933 14.9932C22.9331 14.9934 22.9331 14.9935 22.9332 14.9936ZM22.9332 14.9936C23.0863 15.3812 23.161 15.8493 23.161 16.395V16.4933L23.0627 16.495L18.6896 16.5713M18.6896 16.5713C18.6892 16.5387 18.689 16.506 18.689 16.473H18.589M18.6896 16.5713C18.6965 17.1129 18.7603 17.5949 18.88 18.0179C19.0142 18.4622 19.2258 18.7989 19.5108 19.035C19.7923 19.2683 20.1624 19.389 20.63 19.389C20.8526 19.389 21.0895 19.352 21.3413 19.2765M18.6896 16.5713L18.5907 16.573L18.589 16.473M18.589 16.473C18.589 17.0623 18.654 17.5867 18.784 18.046C18.9227 18.5053 19.1437 18.8607 19.447 19.112C19.7503 19.3633 20.1447 19.489 20.63 19.489C20.864 19.489 21.111 19.45 21.371 19.372C21.6397 19.2853 21.891 19.164 22.125 19.008C22.3379 18.8711 22.5208 18.7109 22.6737 18.5273L22.6703 18.5244L22.736 18.449L22.8156 18.5095C22.8143 18.5113 22.8129 18.5131 22.8116 18.5148M22.8116 18.5148L23.139 18.8C22.879 19.19 22.58 19.4977 22.242 19.723C21.904 19.9397 21.5573 20.0913 21.202 20.178M22.8116 18.5148L18.615 13.899C18.121 14.2197 17.7353 14.6443 17.458 15.173C17.1893 15.7017 17.055 16.2693 17.055 16.876C17.055 17.578 17.1937 18.189 17.471 18.709C17.7483 19.2203 18.1253 19.619 18.602 19.905C19.0873 20.1823 19.6333 20.321 20.24 20.321C20.5347 20.321 20.8553 20.2733 21.202 20.178M22.8116 18.5148L21.3413 19.2765M21.202 20.178L21.2257 20.2752C21.2262 20.275 21.2266 20.2749 21.2271 20.2748M21.202 20.178L21.2285 20.2744C21.2281 20.2745 21.2276 20.2747 21.2271 20.2748M21.2271 20.2748C21.5937 20.1852 21.95 20.029 22.296 19.8072L22.296 19.8072L22.2975 19.8062C22.648 19.5725 22.956 19.2548 23.2222 18.8555L23.271 18.7823L23.2047 18.7246L22.8017 18.3736L22.7211 18.3034L22.6564 18.3885C22.4992 18.5953 22.3044 18.7738 22.0709 18.9239L22.0709 18.9239L22.0695 18.9248C21.8435 19.0755 21.6008 19.1927 21.3413 19.2765M13.994 18.2682L13.994 18.2682L13.9931 18.2693C13.7166 18.6129 13.3775 18.8809 12.9748 19.0738C12.5743 19.2657 12.1128 19.363 11.588 19.363H11.5876H11.5873H11.5869H11.5866H11.5862H11.5858H11.5855H11.5851H11.5848H11.5844H11.584H11.5837H11.5833H11.5829H11.5826H11.5822H11.5818H11.5814H11.5811H11.5807H11.5803H11.5799H11.5796H11.5792H11.5788H11.5784H11.578H11.5777H11.5773H11.5769H11.5765H11.5761H11.5757H11.5753H11.575H11.5746H11.5742H11.5738H11.5734H11.573H11.5726H11.5722H11.5718H11.5714H11.571H11.5706H11.5702H11.5698H11.5694H11.569H11.5686H11.5682H11.5678H11.5674H11.5669H11.5665H11.5661H11.5657H11.5653H11.5649H11.5645H11.5641H11.5636H11.5632H11.5628H11.5624H11.562H11.5615H11.5611H11.5607H11.5603H11.5598H11.5594H11.559H11.5586H11.5581H11.5577H11.5573H11.5568H11.5564H11.556H11.5555H11.5551H11.5546H11.5542H11.5538H11.5533H11.5529H11.5524H11.552H11.5515H11.5511H11.5507H11.5502H11.5498H11.5493H11.5489H11.5484H11.5479H11.5475H11.547H11.5466H11.5461H11.5457H11.5452H11.5447H11.5443H11.5438H11.5434H11.5429H11.5424H11.542H11.5415H11.541H11.5406H11.5401H11.5396H11.5391H11.5387H11.5382H11.5377H11.5373H11.5368H11.5363H11.5358H11.5353H11.5349H11.5344H11.5339H11.5334H11.5329H11.5324H11.532H11.5315H11.531H11.5305H11.53H11.5295H11.529H11.5285H11.528H11.5275H11.527H11.5265H11.526H11.5255H11.525H11.5245H11.524H11.5235H11.523H11.5225H11.522H11.5215H11.521H11.5205H11.52H11.5195H11.5189H11.5184H11.5179H11.5174H11.5169H11.5164H11.5158H11.5153H11.5148H11.5143H11.5138H11.5132H11.5127H11.5122H11.5117H11.5111H11.5106H11.5101H11.5095H11.509H11.5085H11.5079H11.5074H11.5069H11.5063H11.5058H11.5053H11.5047H11.5042H11.5036H11.5031H11.5026H11.502H11.5015H11.5009H11.5004H11.4998H11.4993H11.4987H11.4982H11.4976H11.4971H11.4965H11.496H11.4954H11.4948H11.4943H11.4937H11.4932H11.4926H11.492H11.4915H11.4909H11.4904H11.4898H11.4892H11.4887H11.4881H11.4875H11.4869H11.4864H11.4858H11.4852H11.4846H11.4841H11.4835H11.4829H11.4823H11.4818H11.4812H11.4806H11.48H11.4794H11.4788H11.4783H11.4777H11.4771H11.4765H11.4759H11.4753H11.4747H11.4741H11.4735H11.4729H11.4723H11.4717H11.4711H11.4705H11.4699H11.4693H11.4687H11.4681H11.4675H11.4669H11.4663H11.4657H11.4651H11.4645H11.4639H11.4633H11.4627H11.4621H11.4614H11.4608H11.4602H11.4596H11.459H11.4584H11.4577H11.4571H11.4565H11.4559H11.4552H11.4546H11.454H11.4534H11.4527H11.4521H11.4515H11.4509H11.4502H11.4496H11.449H11.4483H11.4477H11.447H11.4464H11.4458H11.4451H11.4445H11.4439H11.4432H11.4426H11.4419H11.4413H11.4406H11.44H11.4393H11.4387H11.438H11.4374H11.4367H11.4361H11.4354H11.4348H11.4341H11.4335H11.4328H11.4321H11.4315H11.4308H11.4301H11.4295H11.4288H11.4282H11.4275H11.4268H11.4262H11.4255H11.4248H11.4241H11.4235H11.4228H11.4221H11.4214H11.4208H11.4201H11.4194H11.4187H11.4181H11.4174H11.4167H11.416H11.4153H11.4146H11.414H11.4133H11.4126H11.4119H11.4112H11.4105H11.4098H11.4091H11.4084H11.4077H11.407H11.4063H11.4056H11.4049H11.4042H11.4035H11.4028H11.4021H11.4014H11.4007H11.4H11.3993H11.3986H11.3979H11.3972H11.3965H11.3958H11.395H11.3943H11.3936H11.3929H11.3922H11.3915H11.3907H11.39H11.3893H11.3886H11.3879H11.3871H11.3864H11.3857H11.385H11.3842H11.3835H11.3828H11.382H11.3813H11.3806H11.3798H11.3791H11.3784H11.3776H11.3769H11.3762H11.3754H11.3747H11.3739H11.3732H11.3725H11.3717H11.371H11.3702H11.3695H11.3687H11.368H11.3672H11.3665H11.3657H11.365H11.3642H11.3635H11.3627H11.3619H11.3612H11.3604H11.3597H11.3589H11.3581H11.3574H11.3566H11.3558H11.3551H11.3543H11.3535H11.3528H11.352H11.3512H11.3505H11.3497H11.3489H11.3481H11.3474H11.3466H11.3458H11.345H11.3442H11.3435H11.3427H11.3419H11.3411H11.3403H11.3395H11.3387H11.338H11.3372H11.3364H11.3356H11.3348H11.334H11.3332H11.3324H11.3316H11.3308H11.33H11.3292H11.3284H11.3276H11.3268H11.326H11.3252H11.3244H11.3236H11.3228H11.322H11.3212H11.3204H11.3195H11.3187H11.3179H11.3171H11.3163H11.3155H11.3147H11.3138H11.313H11.3122H11.3114H11.3106H11.3097H11.3089H11.3081H11.3073H11.3064H11.3056H11.3048H11.3039H11.3031H11.3023H11.3015H11.3006H11.2998H11.2989H11.2981H11.2973H11.2964H11.2956H11.2948H11.2939H11.2931H11.2922H11.2914H11.2905H11.2897H11.2888H11.288H11.2871H11.2863H11.2854H11.2846H11.2837H11.2829H11.282H11.2812H11.2803H11.2794H11.2786H11.2777H11.2769H11.276H11.2752H11.2744H11.2736H11.2727H11.2719H11.2711H11.2703H11.2695H11.2687H11.2679H11.267H11.2662H11.2654H11.2646H11.2638H11.2629H11.2621H11.2613H11.2605H11.2597H11.2588H11.258H11.2572H11.2564H11.2555H11.2547H11.2539H11.2531H11.2522H11.2514H11.2506H11.2497H11.2489H11.2481H11.2473H11.2464H11.2456H11.2448H11.2439H11.2431H11.2423H11.2414H11.2406H11.2398H11.2389H11.2381H11.2373H11.2364H11.2356H11.2348H11.2339H11.2331H11.2322H11.2314H11.2306H11.2297H11.2289H11.228H11.2272H11.2264H11.2255H11.2247H11.2238H11.223H11.2221H11.2213H11.2204H11.2196H11.2188H11.2179H11.2171H11.2162H11.2154H11.2145H11.2137H11.2128H11.212H11.2111H11.2103H11.2094H11.2086H11.2077H11.2069H11.206H11.2051H11.2043H11.2034H11.2026H11.2017H11.2009H11.2H11.1992H11.1983H11.1974H11.1966H11.1957H11.1949H11.194H11.1931H11.1923H11.1914H11.1905H11.1897H11.1888H11.188H11.1871H11.1862H11.1854H11.1845H11.1836H11.1828H11.1819H11.181H11.1802H11.1793H11.1784H11.1775H11.1767H11.1758H11.1749H11.1741H11.1732H11.1723H11.1714H11.1706H11.1697H11.1688H11.1679H11.1671H11.1662H11.1653H11.1644H11.1636H11.1627H11.1618H11.1609H11.16H11.1592H11.1583H11.1574H11.1565H11.1556H11.1547H11.1539H11.153H11.1521H11.1512H11.1503H11.1494H11.1485H11.1477H11.1468H11.1459H11.145H11.1441H11.1432H11.1423H11.1414H11.1405H11.1397H11.1388H11.1379H11.137H11.1361H11.1352H11.1343H11.1334H11.1325H11.1316H11.1307H11.1298H11.1289H11.128H11.1271H11.1262H11.1253H11.1244H11.1235H11.1226H11.1217H11.1208H11.1199H11.119H11.1181H11.1172H11.1163H11.1154H11.1145H11.1136H11.1127H11.1118H11.1109H11.11H11.109H11.1081H11.1072H11.1063H11.1054H11.1045H11.1036H11.1027H11.1018H11.1008H11.0999H11.099H11.0981H11.0972H11.0963H11.0954H11.0944H11.0935H11.0926H11.0917H11.0908H11.0899H11.0889H11.088H11.0871H11.0862H11.0852H11.0843H11.0834H11.0825H11.0816H11.0806H11.0797H11.0788H11.0779H11.0769H11.076H11.0751H11.0742H11.0732H11.0723H11.0714H11.0704H11.0695H11.0686H11.0676H11.0667H11.0658H11.0649H11.0639H11.063H11.0621H11.0611H11.0602H11.0592H11.0583H11.0574H11.0564H11.0555H11.0546H11.0536H11.0527H11.0517H11.0508H11.0499H11.0489H11.048H11.047H11.0461H11.0452H11.0442H11.0433H11.0423H11.0414H11.0404H11.0395H11.0385H11.0376H11.0367H11.0357H11.0348H11.0338H11.0329H11.0319H11.031H11.03H11.0291H11.0281H11.0272H11.0262H11.0253H11.0243H11.0233H11.0224H11.0214H11.0205H11.0195H11.0186H11.0176H11.0167H11.0157H11.0147H11.0138H11.0128H11.0119H11.0109H11.0099H11.009H11.008H11.007H11.0061H11.0051H11.0042H11.0032H11.0022H11.0013H11.0003H10.9993H10.9984H10.9974H10.9964H10.9955H10.9945H10.9935H10.9926H10.9916H10.9906H10.9896H10.9887H10.9877H10.9867H10.9857H10.9848H10.9838H10.9828H10.9818H10.9809H10.9799H10.9789H10.9779H10.977H10.976H10.975H10.974H10.973H10.9721H10.9711H10.9701H10.9691H10.9681H10.9672H10.9662H10.9652H10.9642H10.9632H10.9622H10.9613H10.9603H10.9593H10.9583H10.9573H10.9563H10.9553H10.9543H10.9533H10.9524H10.9514H10.9504H10.9494H10.9484H10.9474H10.9464H10.9454H10.9444H10.9434H10.9424H10.9414H10.9404H10.9394H10.9384H10.9374H10.9364H10.9354H10.9344H10.9334H10.9324H10.9314H10.9304H10.9294H10.9284H10.9274H10.9264H10.9254H10.9244H10.9234H10.9224H10.9214H10.9204H10.9194H10.9184H10.9174H10.9164H10.9154H10.9144H10.9133H10.9123H10.9113H10.9103H10.9093H10.9083H10.9073H10.9063H10.9053H10.9042H10.9032H10.9022H10.9012H10.9002H10.8992H10.8981H10.8971H10.8961H10.8951H10.8941H10.8931H10.892H10.891H10.89H10.889H10.8879H10.8869H10.8859H10.8849H10.8839H10.8828H10.8818H10.8808H10.8798H10.8787H10.8777H10.8767H10.8756H10.8746H10.8736H10.8726H10.8715H10.8705H10.8695H10.8684H10.8674H10.8664H10.8653H10.8643H10.8633H10.8622H10.8612H10.8602H10.8591H10.8581H10.8571H10.856H10.855H10.8539H10.8529H10.8519H10.8508H10.8498H10.8487H10.8477H10.8467H10.8456H10.8446H10.8435H10.8425H10.8414H10.8404H10.8394H10.8383H10.8373H10.8362H10.8352H10.8341H10.8331H10.832H10.831H10.8299H10.8289H10.8278H10.8268H10.8257H10.8247H10.8236H10.8226H10.8215H10.8205H10.8194H10.8183H10.8173H10.8162H10.8152H10.8141H10.8131H10.812H10.8109H10.8099H10.8088H10.8078H10.8067H10.8056H10.8046H10.8035H10.8025H10.8014H10.8003H10.7993H10.7982H10.7974C10.6521 19.3561 10.5069 19.352 10.3616 19.3505C10.3706 19.253 10.3749 19.1394 10.375 19.0104C10.3837 18.827 10.388 18.6182 10.388 18.384V13.015C10.388 12.6973 10.4052 12.439 10.4386 12.2384C10.4704 12.048 10.543 11.9232 10.6461 11.8476L10.6462 11.8477L10.6495 11.8451C10.7528 11.7624 10.9327 11.7111 11.2105 11.711C12.0304 11.7196 12.7059 11.8776 13.242 12.1792L13.2425 12.1795C13.7873 12.4812 14.193 12.916 14.4615 13.4866C14.731 14.0592 14.868 14.7631 14.868 15.602C14.868 16.1207 14.7915 16.6083 14.6391 17.0654L14.6391 17.0654L14.6386 17.067C14.4949 17.5234 14.2799 17.9234 13.994 18.2682ZM21.4058 14.9437L21.4058 14.9437L21.4071 14.9474C21.4882 15.1685 21.5337 15.418 21.5425 15.697H18.7602C18.8593 15.1797 19.0407 14.8032 19.2956 14.5558L19.2957 14.5558L19.2967 14.5547C19.5706 14.2808 19.9212 14.142 20.357 14.142C20.6333 14.142 20.8522 14.2147 21.0217 14.3534C21.1954 14.4955 21.3242 14.6906 21.4058 14.9437Z" stroke="black" strokeOpacity="0.7" strokeWidth="0.2" />
						</svg>
						<svg className="mr-3 ..6x04:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="11.6875" stroke="white" strokeOpacity="0.8" />
							<circle cx="15" cy="15" r="14.25" stroke="black" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" strokeDasharray="3 6 9 12" />
							<path d="M7.5 18.3197C7.76813 18.3034 7.95906 18.2466 8.07281 18.1491C8.19469 18.0516 8.27188 17.9053 8.30438 17.7103C8.33688 17.5153 8.35313 17.2675 8.35313 16.9669V11.8969C8.35313 11.7181 8.35719 11.5475 8.36531 11.385C8.37344 11.2144 8.38156 11.0681 8.38969 10.9462C8.25156 10.9544 8.10125 10.9625 7.93875 10.9706C7.77625 10.9788 7.63 10.9869 7.5 10.995V10.3247L10.6078 10.3125C11.3634 10.3125 12.0419 10.41 12.6431 10.605C13.2444 10.8 13.7563 11.0844 14.1788 11.4581C14.6013 11.8237 14.9222 12.2706 15.1416 12.7988C15.3609 13.3269 15.4706 13.9159 15.4706 14.5659C15.4706 15.1103 15.3772 15.6384 15.1903 16.1503C15.0034 16.6622 14.715 17.1213 14.325 17.5275C13.9431 17.9256 13.4597 18.2466 12.8747 18.4903C12.2897 18.7341 11.5991 18.8559 10.8028 18.8559H7.5V18.3197ZM9.645 17.235C9.645 17.4544 9.64094 17.6494 9.63281 17.82C9.63281 17.9906 9.62469 18.1288 9.60844 18.2344C9.77906 18.2344 9.94969 18.2384 10.1203 18.2466C10.2909 18.2466 10.4413 18.2466 10.5713 18.2466C10.7094 18.2466 10.8069 18.2466 10.8638 18.2466C11.3675 18.2466 11.8144 18.1531 12.2044 17.9663C12.5944 17.7794 12.9234 17.5194 13.1916 17.1863C13.4678 16.8531 13.675 16.4672 13.8131 16.0284C13.9594 15.5897 14.0325 15.1225 14.0325 14.6269C14.0325 13.8306 13.9025 13.1563 13.6425 12.6038C13.3825 12.0513 12.9884 11.6287 12.4603 11.3362C11.9403 11.0437 11.2903 10.8934 10.5103 10.8853C10.2422 10.8853 10.0472 10.9341 9.92531 11.0316C9.80344 11.1209 9.72625 11.2631 9.69375 11.4581C9.66125 11.6531 9.645 11.9009 9.645 12.2016V17.235Z" fill="black" fillOpacity="0.7" />
							<path d="M18.975 19.0509C18.4062 19.0509 17.8944 18.9209 17.4394 18.6609C16.9925 18.3928 16.6391 18.0191 16.3791 17.5397C16.1191 17.0522 15.9891 16.4794 15.9891 15.8213C15.9891 15.2525 16.115 14.7203 16.3669 14.2247C16.6269 13.7291 16.9884 13.3309 17.4516 13.0303C17.9147 12.7216 18.4509 12.5672 19.0603 12.5672C19.4016 12.5672 19.7225 12.62 20.0231 12.7256C20.3319 12.8313 20.6041 12.9978 20.8397 13.2253C21.0834 13.4447 21.2744 13.7331 21.4125 14.0906C21.5506 14.44 21.6197 14.8666 21.6197 15.3703L17.4272 15.4434C17.4272 15.9959 17.4881 16.4875 17.61 16.9181C17.74 17.3488 17.9472 17.6819 18.2316 17.9175C18.5159 18.1531 18.8856 18.2709 19.3406 18.2709C19.56 18.2709 19.7916 18.2344 20.0353 18.1613C20.2872 18.08 20.5228 17.9663 20.7422 17.82C20.9697 17.6738 21.1606 17.4991 21.315 17.2959L21.6928 17.625C21.4491 17.9906 21.1688 18.2791 20.8519 18.4903C20.535 18.6934 20.21 18.8356 19.8769 18.9169C19.5519 19.0063 19.2513 19.0509 18.975 19.0509ZM17.4759 14.8097H20.2913C20.2913 14.5009 20.2466 14.2247 20.1572 13.9809C20.0759 13.7291 19.9459 13.53 19.7672 13.3837C19.5884 13.2375 19.3609 13.1644 19.0847 13.1644C18.6541 13.1644 18.3006 13.3025 18.0244 13.5788C17.7481 13.8469 17.5653 14.2572 17.4759 14.8097Z" fill="black" fillOpacity="0.7" />
						</svg>


						<div>
							<p id="click" className='font-montserrat font-semibold ..6x04:text-13px  ..6x04:font-medium .1x1:text-13px '>Программа лояльности</p>
							<p id="click" className='font-lora font-medium text-gray-quick-silver ..6x04:text-13px .1x1:text-13px '>De<span className=' font-normal font-montserrat'>-счёт:</span> <span className='font-montserrat  font-normal text-label-orange '>9 000 De</span></p>

						</div>
					</div>
					<div className={`p-4 pt-0 ${dropDownds.loal ? 'block' : "hidden"}`}>
						<div className="bg-white border p-3 border-gray">
							<p className="font-montserrat text-13px uppercase text-gray-quick-silver mb-2 .2x00:text-xs">Место получения заказа:</p>
							<div>
								<div className="flex items-center   ">
									<div className="mr-3  -mt-4 relative">
										<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="30" height="30" rx="4" fill="#E8E9E7" />
											<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										</svg>
										<input type="checkbox" className="hidden" id="checkboxFree" />
										<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
											<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

											</div>
										</label>
									</div>

									<div className="flex border-b pb-3 border-dashed border-stroke items-center justify-between w-full">


										<div>
											<p className="font-montserrat mb-1 .2x00:text-xs">Online Bisiness Center</p>
											<p className="font-montserrat text-13px to-black-70pe .2x00:text-xs">Товары будут оформлены в текущем заказе</p>


										</div>

									</div>

								</div>
								<div className="flex border-b border-stroke first-letter:  mt-2 ">
									<div className="mr-3 mt-2 relative">
										<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="30" height="30" rx="4" fill="#E8E9E7" />
											<ellipse cx="5.76961" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
											<ellipse cx="24.231" cy="29.4232" rx="2.30769" ry="4.03846" fill="#E8E9E7" />
										</svg>
										<input type="checkbox" className="hidden" id="checkboxFree" />
										<label className="absolute top-1 left-1/2 ability " htmlFor="checkboxFree">
											<div className="border cursor-pointer h-5 w-5 rounded-56px border-gray">

											</div>
										</label>
									</div>

									<div className="flex   pb-4   items-center justify-between w-full">


										<div>
											<p className="font-montserrat mb-6px .2x00:text-xs">Бутик TianDe: </p>
											<p className="font-noto-sans text-13px mb-6px font-medium to-black-70pe .2x00:text-xs">Респ. Татарстан, Казань, Московская ул., №31 оф. 217 </p>

											<p className="font-medium text-13px text-black-70pe font-montserrat .2x00:text-xs">Товары будут оформлены отдельно от корзины</p>
										</div>

									</div>

								</div>
							</div>
							<div className="mt-3">
								<div className="flex mb-2 items-center justify-between">
									<p className="font-montserrat text-black-70pe .2x00:text-xs">В корзине:</p>
									<p className="font-montserrat .2x00:text-xs">3 750 <span className="font-lora">De</span></p>
								</div>
								<div className="flex items-center justify-between">
									<p className="font-montserrat text-black-70pe .2x00:text-xs">Доступно:</p>
									<p className="font-montserrat .2x00:text-xs">5 080 <span className="font-lora">De</span></p>
								</div>
							</div>
						</div>
						<div className="flex justify-between items-center mt-3">
							<p className="font-montserrat text-sm text-gray-quick-silver .2x00:text-xs .4x11:mr-1 .4x11:text-11px">Минимальная сумма: от 1 500 ₽ </p>
							<button className="h-11 bg-gray-light2 rounded px-5 flex items-center font-lora text-label-orange text-xs font-medium .4x11:text-9px">De- каталог</button>
						</div>


					</div>
				</div>

				<div onClick={(e) => setFilter('promo', e)} className={` h-80px .1x1:h-16 cursor-pointer overflow-hidden ${dropDownds.promo ? 'activeSlide' : ''}`}>
					<div id="click" className={`flex px-3 ..6x04:pl-0 pt-6px .1x1:pb-4 items-center   relative pb-6 border-b ..6x04:pb-10px ${dropDownds.promo ? 'border-none' : ''} border-dashed border-gray `}>
						<svg className={`absolute right-3 top-3 .1x1:right-1 ..6x04:top-1 transition-all ${dropDownds.promo ? 'prev_rotate' : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3396 5.075L7 8.4281L3.65312 5.075L2.625 6.10729L7 10.5L11.375 6.10729L10.3396 5.075Z" fill="black" fillOpacity="0.7" />
						</svg>

						<svg className="mr-4 ..5x1:mr-1.5 ..6x04:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="path-1-inside-1_2812_671857" fill="white">
								<path fillRule="evenodd" clipRule="evenodd" d="M3.2002 4.53335C3.2002 3.79697 3.79715 3.20001 4.53353 3.20001H16.5335C16.8871 3.20001 17.2263 3.34049 17.4763 3.59054L28.2585 14.3727C29.706 15.8289 29.706 18.1806 28.2585 19.6368L28.2557 19.6396L19.6523 28.243C18.9521 28.9438 18.0015 29.3379 17.0109 29.3379C16.02 29.3379 15.0699 28.9441 14.3696 28.2431L3.59124 17.4767C3.34088 17.2266 3.2002 16.8872 3.2002 16.5333V4.53335ZM5.86686 5.86668V15.9806L16.2562 26.3584C16.4564 26.5588 16.7278 26.6713 17.0109 26.6713C17.2941 26.6713 17.5656 26.5587 17.7656 26.3585L26.3673 17.7567L26.3685 17.7555C26.7805 17.3398 26.7805 16.6697 26.3685 16.254L26.3673 16.2528L15.9812 5.86668H5.86686Z" />
								<path fillRule="evenodd" clipRule="evenodd" d="M11.5335 13.2C12.454 13.2 13.2002 12.4538 13.2002 11.5333C13.2002 10.6129 12.454 9.86668 11.5335 9.86668C10.6131 9.86668 9.86686 10.6129 9.86686 11.5333C9.86686 12.4538 10.6131 13.2 11.5335 13.2Z" />
							</mask>
							<path fillRule="evenodd" clipRule="evenodd" d="M3.2002 4.53335C3.2002 3.79697 3.79715 3.20001 4.53353 3.20001H16.5335C16.8871 3.20001 17.2263 3.34049 17.4763 3.59054L28.2585 14.3727C29.706 15.8289 29.706 18.1806 28.2585 19.6368L28.2557 19.6396L19.6523 28.243C18.9521 28.9438 18.0015 29.3379 17.0109 29.3379C16.02 29.3379 15.0699 28.9441 14.3696 28.2431L3.59124 17.4767C3.34088 17.2266 3.2002 16.8872 3.2002 16.5333V4.53335ZM5.86686 5.86668V15.9806L16.2562 26.3584C16.4564 26.5588 16.7278 26.6713 17.0109 26.6713C17.2941 26.6713 17.5656 26.5587 17.7656 26.3585L26.3673 17.7567L26.3685 17.7555C26.7805 17.3398 26.7805 16.6697 26.3685 16.254L26.3673 16.2528L15.9812 5.86668H5.86686Z" fill="black" fillOpacity="0.7" />
							<path fillRule="evenodd" clipRule="evenodd" d="M11.5335 13.2C12.454 13.2 13.2002 12.4538 13.2002 11.5333C13.2002 10.6129 12.454 9.86668 11.5335 9.86668C10.6131 9.86668 9.86686 10.6129 9.86686 11.5333C9.86686 12.4538 10.6131 13.2 11.5335 13.2Z" fill="black" fillOpacity="0.7" />
							<path d="M17.4763 3.59054L17.2642 3.80267L17.2642 3.80267L17.4763 3.59054ZM28.2585 14.3727L28.4713 14.1612L28.4707 14.1606L28.2585 14.3727ZM28.2585 19.6368L28.471 19.8485L28.4713 19.8483L28.2585 19.6368ZM28.2557 19.6396L28.4679 19.8517L28.4682 19.8513L28.2557 19.6396ZM19.6523 28.243L19.4402 28.0309L19.4401 28.0309L19.6523 28.243ZM14.3696 28.2431L14.5819 28.031L14.5816 28.0308L14.3696 28.2431ZM3.59124 17.4767L3.37923 17.6889H3.37923L3.59124 17.4767ZM5.86686 15.9806H5.56686C5.56686 16.0602 5.59851 16.1366 5.65485 16.1929L5.86686 15.9806ZM5.86686 5.86668V5.56668C5.70118 5.56668 5.56686 5.70099 5.56686 5.86668H5.86686ZM16.2562 26.3584L16.4685 26.1464L16.4682 26.1462L16.2562 26.3584ZM17.7656 26.3585L17.5534 26.1464L17.5533 26.1465L17.7656 26.3585ZM26.3673 17.7567L26.5795 17.9689L26.5801 17.9682L26.3673 17.7567ZM26.3685 17.7555L26.5813 17.967L26.5816 17.9667L26.3685 17.7555ZM26.3685 16.254L26.5816 16.0428L26.5813 16.0425L26.3685 16.254ZM26.3673 16.2528L26.5801 16.0413L26.5795 16.0406L26.3673 16.2528ZM15.9812 5.86668L16.1934 5.65455C16.1371 5.59829 16.0608 5.56668 15.9812 5.56668V5.86668ZM4.53353 2.90001C3.63146 2.90001 2.9002 3.63128 2.9002 4.53335H3.5002C3.5002 3.96265 3.96283 3.50001 4.53353 3.50001V2.90001ZM16.5335 2.90001H4.53353V3.50001H16.5335V2.90001ZM17.6885 3.3784C17.3822 3.0721 16.9667 2.90001 16.5335 2.90001V3.50001C16.8076 3.50001 17.0704 3.60888 17.2642 3.80267L17.6885 3.3784ZM28.4713 19.8483C30.0351 18.2751 30.0351 15.7344 28.4713 14.1612L28.0458 14.5842C29.377 15.9233 29.377 18.0861 28.0458 19.4253L28.4713 19.8483ZM28.4682 19.8513L28.471 19.8485L28.0461 19.425L28.0433 19.4278L28.4682 19.8513ZM19.8644 28.4551L28.4679 19.8517L28.0436 19.4274L19.4402 28.0309L19.8644 28.4551ZM17.0109 29.6379C18.0811 29.6379 19.1081 29.2121 19.8645 28.455L19.4401 28.0309C18.7961 28.6754 17.9218 29.0379 17.0109 29.0379V29.6379ZM14.1574 28.4551C14.9139 29.2124 15.9404 29.6379 17.0109 29.6379V29.0379C16.0997 29.0379 15.2259 28.6757 14.5819 28.031L14.1574 28.4551ZM3.37923 17.6889L14.1576 28.4553L14.5816 28.0308L3.80326 17.2644L3.37923 17.6889ZM2.9002 16.5333C2.9002 16.9668 3.07253 17.3826 3.37923 17.6889L3.80326 17.2644C3.60922 17.0706 3.5002 16.8076 3.5002 16.5333H2.9002ZM2.9002 4.53335V16.5333H3.5002V4.53335H2.9002ZM6.16686 15.9806V5.86668H5.56686V15.9806H6.16686ZM17.0109 26.3713C16.8074 26.3713 16.6123 26.2904 16.4685 26.1464L16.044 26.5704C16.3004 26.8271 16.6482 26.9713 17.0109 26.9713V26.3713ZM17.5533 26.1465C17.4096 26.2904 17.2145 26.3713 17.0109 26.3713V26.9713C17.3737 26.9713 17.7215 26.8271 17.9778 26.5705L17.5533 26.1465ZM26.1552 17.5446L17.5534 26.1464L17.9777 26.5706L26.5795 17.9689L26.1552 17.5446ZM26.1557 17.5441L26.1545 17.5453L26.5801 17.9682L26.5813 17.967L26.1557 17.5441ZM26.1554 16.4651C26.4515 16.7639 26.4515 17.2456 26.1554 17.5444L26.5816 17.9667C27.1095 17.4341 27.1095 16.5754 26.5816 16.0428L26.1554 16.4651ZM26.1545 16.4642L26.1557 16.4654L26.5813 16.0425L26.5801 16.0413L26.1545 16.4642ZM15.7691 6.07881L26.1552 16.4649L26.5795 16.0406L16.1934 5.65455L15.7691 6.07881ZM5.86686 6.16668H15.9812V5.56668H5.86686V6.16668ZM28.4707 14.1606L17.6885 3.3784L17.2642 3.80267L28.0464 14.5849L28.4707 14.1606ZM16.4682 26.1462L6.07888 15.7684L5.65485 16.1929L16.0442 26.5707L16.4682 26.1462ZM11.5335 13.5C12.6197 13.5 13.5002 12.6195 13.5002 11.5333H12.9002C12.9002 12.2881 12.2883 12.9 11.5335 12.9V13.5ZM13.5002 11.5333C13.5002 10.4472 12.6197 9.56668 11.5335 9.56668V10.1667C12.2883 10.1667 12.9002 10.7786 12.9002 11.5333H13.5002ZM11.5335 9.56668C10.4474 9.56668 9.56686 10.4472 9.56686 11.5333H10.1669C10.1669 10.7786 10.7787 10.1667 11.5335 10.1667V9.56668ZM9.56686 11.5333C9.56686 12.6195 10.4474 13.5 11.5335 13.5V12.9C10.7787 12.9 10.1669 12.2881 10.1669 11.5333H9.56686Z" fill="#F7F8F6" mask="url(#path-1-inside-1_2812_671857)" />
						</svg>
						<svg className="mr-3 ..6x04:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="path-1-inside-1_2585_696349" fill="white">
								<path fillRule="evenodd" clipRule="evenodd" d="M3 4.25C3 3.55964 3.55964 3 4.25 3H15.5C15.8315 3 16.1495 3.1317 16.3839 3.36612L26.4922 13.4744C27.8492 14.8395 27.8492 17.0443 26.4922 18.4094L26.4896 18.4121L18.4238 26.4778C17.7674 27.1348 16.8762 27.5043 15.9476 27.5043C15.0186 27.5043 14.1279 27.135 13.4713 26.4779L3.36661 16.3844C3.13189 16.1499 3 15.8318 3 15.5V4.25ZM5.5 5.5V14.9818L15.24 24.711C15.4276 24.8988 15.6821 25.0043 15.9476 25.0043C16.213 25.0043 16.4675 24.8988 16.655 24.7111L24.7192 16.6469L24.7203 16.6458C25.1065 16.2561 25.1065 15.6278 24.7203 15.2381L24.7192 15.2369L14.9822 5.5H5.5Z" />
								<path fillRule="evenodd" clipRule="evenodd" d="M10.8125 12.375C11.6754 12.375 12.375 11.6754 12.375 10.8125C12.375 9.94956 11.6754 9.25 10.8125 9.25C9.94956 9.25 9.25 9.94956 9.25 10.8125C9.25 11.6754 9.94956 12.375 10.8125 12.375Z" />
							</mask>
							<path fillRule="evenodd" clipRule="evenodd" d="M3 4.25C3 3.55964 3.55964 3 4.25 3H15.5C15.8315 3 16.1495 3.1317 16.3839 3.36612L26.4922 13.4744C27.8492 14.8395 27.8492 17.0443 26.4922 18.4094L26.4896 18.4121L18.4238 26.4778C17.7674 27.1348 16.8762 27.5043 15.9476 27.5043C15.0186 27.5043 14.1279 27.135 13.4713 26.4779L3.36661 16.3844C3.13189 16.1499 3 15.8318 3 15.5V4.25ZM5.5 5.5V14.9818L15.24 24.711C15.4276 24.8988 15.6821 25.0043 15.9476 25.0043C16.213 25.0043 16.4675 24.8988 16.655 24.7111L24.7192 16.6469L24.7203 16.6458C25.1065 16.2561 25.1065 15.6278 24.7203 15.2381L24.7192 15.2369L14.9822 5.5H5.5Z" fill="black" fillOpacity="0.7" />
							<path fillRule="evenodd" clipRule="evenodd" d="M10.8125 12.375C11.6754 12.375 12.375 11.6754 12.375 10.8125C12.375 9.94956 11.6754 9.25 10.8125 9.25C9.94956 9.25 9.25 9.94956 9.25 10.8125C9.25 11.6754 9.94956 12.375 10.8125 12.375Z" fill="black" fillOpacity="0.7" />
							<path d="M16.3839 3.36612L15.9596 3.79038L15.9596 3.79038L16.3839 3.36612ZM26.4922 13.4744L26.9177 13.0514L26.9165 13.0502L26.4922 13.4744ZM26.4922 18.4094L26.9171 18.833L26.9177 18.8325L26.4922 18.4094ZM26.4896 18.4121L26.9138 18.8363L26.9145 18.8357L26.4896 18.4121ZM18.4238 26.4778L17.9996 26.0535L17.9994 26.0537L18.4238 26.4778ZM13.4713 26.4779L13.8958 26.0538L13.8954 26.0534L13.4713 26.4779ZM3.36661 16.3844L2.94258 16.8089L2.94258 16.8089L3.36661 16.3844ZM5.5 14.9818H4.9C4.9 15.1411 4.96331 15.2938 5.07597 15.4063L5.5 14.9818ZM5.5 5.5V4.9C5.16863 4.9 4.9 5.16863 4.9 5.5H5.5ZM15.24 24.711L15.6645 24.287L15.6641 24.2865L15.24 24.711ZM16.655 24.7111L16.2308 24.2868L16.2305 24.2871L16.655 24.7111ZM24.7192 16.6469L25.1435 17.0712L25.1448 17.0698L24.7192 16.6469ZM24.7203 16.6458L25.1459 17.0687L25.1465 17.0682L24.7203 16.6458ZM24.7203 15.2381L25.1465 14.8157L25.1459 14.8152L24.7203 15.2381ZM24.7192 15.2369L25.1448 14.814L25.1435 14.8127L24.7192 15.2369ZM14.9822 5.5L15.4065 5.07574C15.294 4.96321 15.1414 4.9 14.9822 4.9V5.5ZM4.25 2.4C3.22827 2.4 2.4 3.22827 2.4 4.25H3.6C3.6 3.89101 3.89101 3.6 4.25 3.6V2.4ZM15.5 2.4H4.25V3.6H15.5V2.4ZM16.8081 2.94185C16.4612 2.59491 15.9907 2.4 15.5 2.4V3.6C15.6724 3.6 15.8377 3.66848 15.9596 3.79038L16.8081 2.94185ZM26.9177 18.8325C28.5074 17.2333 28.5074 14.6506 26.9177 13.0514L26.0667 13.8974C27.1911 15.0285 27.1911 16.8554 26.0667 17.9864L26.9177 18.8325ZM26.9145 18.8357L26.9171 18.833L26.0672 17.9859L26.0646 17.9885L26.9145 18.8357ZM18.8481 26.9021L26.9138 18.8363L26.0653 17.9878L17.9996 26.0535L18.8481 26.9021ZM15.9476 28.1043C17.0355 28.1043 18.0794 27.6714 18.8483 26.9019L17.9994 26.0537C17.4554 26.5981 16.7169 26.9043 15.9476 26.9043V28.1043ZM13.0469 26.9019C13.8159 27.6717 14.8594 28.1043 15.9476 28.1043V26.9043C15.1779 26.9043 14.4398 26.5984 13.8958 26.0538L13.0469 26.9019ZM2.94258 16.8089L13.0473 26.9024L13.8954 26.0534L3.79064 15.9599L2.94258 16.8089ZM2.4 15.5C2.4 15.991 2.59519 16.4619 2.94258 16.8089L3.79064 15.9599C3.66858 15.838 3.6 15.6725 3.6 15.5H2.4ZM2.4 4.25V15.5H3.6V4.25H2.4ZM6.1 14.9818V5.5H4.9V14.9818H6.1ZM15.9476 24.4043C15.8414 24.4043 15.7396 24.3621 15.6645 24.287L14.8155 25.1351C15.1157 25.4355 15.5229 25.6043 15.9476 25.6043V24.4043ZM16.2305 24.2871C16.1556 24.3621 16.0538 24.4043 15.9476 24.4043V25.6043C16.3723 25.6043 16.7795 25.4355 17.0795 25.1351L16.2305 24.2871ZM24.2949 16.2227L16.2308 24.2868L17.0793 25.1353L25.1435 17.0712L24.2949 16.2227ZM24.2947 16.2229L24.2936 16.224L25.1448 17.0698L25.1459 17.0687L24.2947 16.2229ZM24.2941 15.6604C24.4486 15.8163 24.4486 16.0676 24.2941 16.2235L25.1465 17.0682C25.7645 16.4446 25.7645 15.4393 25.1465 14.8157L24.2941 15.6604ZM24.2936 15.6599L24.2947 15.661L25.1459 14.8152L25.1448 14.814L24.2936 15.6599ZM14.558 5.92426L24.2949 15.6612L25.1435 14.8127L15.4065 5.07574L14.558 5.92426ZM5.5 6.1H14.9822V4.9H5.5V6.1ZM26.9165 13.0502L16.8081 2.94185L15.9596 3.79038L26.0679 13.8987L26.9165 13.0502ZM15.6641 24.2865L5.92403 14.5573L5.07597 15.4063L14.816 25.1355L15.6641 24.2865ZM10.8125 12.975C12.0068 12.975 12.975 12.0068 12.975 10.8125H11.775C11.775 11.3441 11.3441 11.775 10.8125 11.775V12.975ZM12.975 10.8125C12.975 9.61819 12.0068 8.65 10.8125 8.65V9.85C11.3441 9.85 11.775 10.2809 11.775 10.8125H12.975ZM10.8125 8.65C9.61819 8.65 8.65 9.61819 8.65 10.8125H9.85C9.85 10.2809 10.2809 9.85 10.8125 9.85V8.65ZM8.65 10.8125C8.65 12.0068 9.61819 12.975 10.8125 12.975V11.775C10.2809 11.775 9.85 11.3441 9.85 10.8125H8.65Z" fill="white" mask="url(#path-1-inside-1_2585_696349)" />
						</svg>

						<p id="click" className='font-montserrat font-semibold ..6x04:text-13px .1x1:text-13px   ..6x04:font-medium'>Промокод</p>

					</div>
					<div className={`p-3 pt-0 ${dropDownds.promo ? 'block' : 'hidden'}`}>
						<div className="mb-3 w-full flex ">
							<input className="h-11 w-full rounded font-noto-sans text-13px outline-none px-10px mr-3 border border-gray-quick-silver" type="text" value={value} onChange={e => inputChange(e)} />
							<button className="h-11 px-30px font-montserrat text-xs text-primary font-medium bg-gray-light2 rounded">
								Применить
							</button>
						</div>
						<div className={`bg-white p-3 border rounded-sm border-stroke  ${dropDownds.promo ? 'block' : 'hidden'}`}>
							<div className="flex mb-3 items-center">
								<p className="font-montserrat text-13px mr-1 .2x00:text-xs">-5% на заказ</p>
								<div className="px-6px py-3px mr-3 bg-green-05pe rounded-32px font-montserrat text-13px .2x00:text-xs text-black-70pe">
									от 1500 ₽
								</div>
								<p className="font-montserrat text-sm text-label-pink-2 .2x00:text-xs">Осталось: <span className="font-medium">451 ₽</span></p>
							</div>
							<p className="font-montserrat text-sm text-gray-quick-silver mb-3 .2x00:text-xs">Применяется после оформления при:</p>
							<div>
								<div className="flex items-center">
									<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="black" fill-opacity="0.7" />
										<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8ZM18 6C19.1046 6 20 6.89543 20 8V10H4V8C4 6.89543 4.89543 6 6 6H18ZM20 12H4V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V12Z" fill="black" fill-opacity="0.7" />
										<path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" stroke="white" stroke-width="0.4" stroke-linecap="round" />
										<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8ZM18 6C19.1046 6 20 6.89543 20 8V10H4V8C4 6.89543 4.89543 6 6 6H18ZM20 12H4V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V12Z" stroke="white" stroke-width="0.4" stroke-linecap="round" />
									</svg>
									<p className="font-montserrat text-sm .2x00:text-xs">Оплате онлайн</p>
								</div>
								<div className="flex mt-18px items-center">
									<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5939 2.08619C11.8524 1.97127 12.1476 1.97127 12.4061 2.08619L21.4061 6.08619C21.7673 6.24669 22 6.60481 22 7V17C22 17.3952 21.7673 17.7533 21.4061 17.9138L12.4061 21.9138C12.1476 22.0287 11.8524 22.0287 11.5939 21.9138L2.59386 17.9138C2.23273 17.7533 2 17.3952 2 17V7C2 6.60481 2.23273 6.24669 2.59386 6.08619L11.5939 2.08619ZM4 8.53876L11 11.6499V19.4612L4 16.3501V8.53876ZM13 19.4612L20 16.3501V8.53876L13 11.6499V19.4612ZM12 9.90568L18.5378 7L12 4.09432L5.46221 7L12 9.90568Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" />
									</svg>

									<p className="font-montserrat text-sm .2x00:text-xs">Доставке: <span className="font-medium">ПВЗ, курьер, посылка, бутик</span> </p>
								</div>
							</div>
						</div>

					</div>
					<div className={`h-16 px-18px flex items-center bg-input-error-bg ${dropDownds.promo ? 'block' : 'hidden'}`}>
						<p className="flex .2x00:text-xs font-montserrat text-sm items-center"><svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 15H13V17H11V15ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4ZM12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34783 3.05357 6.80429 4.92893 4.92893C5.85752 4.00034 6.95991 3.26375 8.17317 2.7612C9.38642 2.25865 10.6868 2 12 2C14.6522 2 17.1957 3.05356 19.0711 4.92893C20.9464 6.80429 22 9.34783 22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7363 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22ZM11 7H13V13H11V7Z" fill="black" fill-opacity="0.7" />
						</svg>
							Не применяется на акции и суперцены</p>
					</div>
				</div>
			</div>

		</section>
	)
}
export default DescriptionItemDetail