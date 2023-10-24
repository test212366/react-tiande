import Image from 'next/image';
import { useRef, useState } from 'react';
import imgSCard from '../../images/templates/imgSCard.png';
import defImg from '../../images/templates/defImg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import CardSliderItem from '../ProductCard/CardSliderItem';
import useWindowSize from '../utils/useWindowSize';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductPrevButtonNewSale from './ProductPrevButtonNewSale';
import ProductNextButtonNewSale from './ProductNextButtonNewSale';

export default function NewSaleCardProduct({ obj }) {
	const [hoverHeart, setHoverHeart] = useState(false);
	const [clickHeart, setClickHeart] = useState(false);
	const [visSliderProd, setVisSliderProd] = useState(false);
	const [clickBtnR, setClickBtnR] = useState(false);
	const [clickBtnL, setClickBtnL] = useState(false);
	const [clickBtnBig, setClickBtnBig] = useState(false);
	const [clickBtnRDesk, setClickBtnRDesk] = useState(false);
	const [clickBtnLDesk, setClickBtnLDesk] = useState(false);
	const [clickBtnBigDesk, setClickBtnBigDesk] = useState(false);
	const [underL, setUnderL] = useState(false);

	const sliderFilt = useRef(null);
	let size = useWindowSize();

	const nextSlideFilt = () => {
		if (sliderFilt.current !== null && sliderFilt.current.swiper !== null)
			sliderFilt.current.swiper.slideNext();
	},
		prevSlideFilt = () => {
			if (sliderFilt.current !== null && sliderFilt.current.swiper !== null)
				sliderFilt.current.swiper.slidePrev();
		};

	return (
		<div
			onClick={() => setUnderL(true)}
			onMouseLeave={() => setUnderL(false)}
			className={`${underL ? 'underL' : ''
				} card_prod_con relative w-278px h-428px border border-white ..5x2:hover:border-white hover:border-gray ..5x2:w-44 ..5x2:h-317px bg-white`}
		>
			{obj.packS && (
				<div className="absolute top-0 left-0 z-10">
					<svg
						className=" ..5x2:hidden"
						width="106"
						height="36"
						viewBox="0 0 106 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0H106L94.6021 18L106 36H0V0Z" fill="white" />
						<path
							d="M13.1355 18.062H11.25V14.2909C11.25 13.3482 12.1928 12.4054 13.1355 12.4054H30.1051C31.0478 12.4054 31.9906 13.3482 31.9906 14.2909V18.062H30.1051M13.1355 18.062V27.4895C13.1355 28.4322 14.0783 29.375 15.021 29.375H28.2196C29.1623 29.375 30.1051 28.4322 30.1051 27.4895V18.062M13.1355 18.062H30.1051M21.6203 12.4054L21.6203 29.375M21.6203 12.4054C20.3633 9.7343 17.755 5.42904 15.4924 7.69165C13.2298 9.95426 18.3207 12.4054 21.6203 12.4054ZM21.6203 12.4054C21.6203 8.16313 25.8627 5.33479 27.7482 7.22026C30.1051 9.5771 25.3913 12.4053 21.6203 12.4054Z"
							stroke="#C5C1AB"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>

					<svg
						className="hidden ..5x2:block"
						width="82"
						height="24"
						viewBox="0 0 82 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0H82L73.1828 12L82 24H0V0Z" fill="white" />
						<path
							d="M11.1603 12.0381H10V9.7175C10 9.13735 10.5802 8.55719 11.1603 8.55719H21.6031C22.1833 8.55719 22.7634 9.13735 22.7634 9.7175V12.0381H21.6031M11.1603 12.0381V17.8397C11.1603 18.4198 11.7405 19 12.3206 19H20.4428C21.023 19 21.6031 18.4198 21.6031 17.8397V12.0381M11.1603 12.0381H21.6031M16.3817 8.55719L16.3817 19M16.3817 8.55719C15.6082 6.91341 14.0031 4.26402 12.6107 5.6564C11.2183 7.04877 14.3512 8.55719 16.3817 8.55719ZM16.3817 8.55719C16.3817 5.94654 18.9924 4.20602 20.1527 5.36631C21.6031 6.81668 18.7023 8.55713 16.3817 8.55719Z"
							stroke="#C5C1AB"
							stroke-width="1.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>

					<p className="absolute top-1 left-47px font-montserrat font-semibold text-2xl leading-120% text-black-70pe ..5x2:text-sm ..5x2:top-0.5 ..5x2:left-9">
						{obj.packS}
					</p>
				</div>
			)}

			{obj.packLabel && (
				<>
					<div
						className={`${obj.packS ? 'left-2 top-10' : 'left-2 top-2'
							} absolute  z-10 w-60px h-60px flex items-center justify-center rounded-56px ..5x2:hidden`}
					>
						<div>
							<svg
								className=""
								width="60"
								height="60"
								viewBox="0 0 60 60"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="30"
									cy="30"
									r="29.5"
									fill="white"
									fill-opacity="0.3"
									stroke="#C5C1AB"
								/>
								<circle
									cx="30"
									cy="30"
									r="27.5"
									fill="white"
									fill-opacity="0.85"
									stroke="#C5C1AB"
								/>
								<path
									d="M7.74756 30.4751C7.46102 30.4462 7.236 30.3753 7.0725 30.2623C6.90304 30.1488 6.78763 30.0075 6.72628 29.8385C6.66552 29.6635 6.64508 29.4775 6.66494 29.2805C6.6848 29.0835 6.74166 28.9083 6.83552 28.7549C6.92938 28.6016 7.07066 28.4862 7.25939 28.4087C7.44274 28.3247 7.67769 28.2971 7.96424 28.326C8.24482 28.3543 8.46954 28.4282 8.6384 28.5478C8.80189 28.6607 8.9173 28.802 8.98462 28.9716C9.04598 29.1406 9.06673 29.3236 9.04686 29.5206C9.027 29.7176 8.96984 29.8958 8.87538 30.0551C8.77556 30.2079 8.63427 30.3233 8.45151 30.4014C8.26279 30.4788 8.02814 30.5034 7.74756 30.4751Z"
									fill="#337202"
								/>
								<path
									d="M15.354 19.3276L14.8366 20.1505L12.3528 18.5887L10.7192 21.1867L13.2029 22.7485L12.6855 23.5714L7.24559 20.1508L7.763 19.3279L10.0182 20.746L11.6519 18.1479L9.39666 16.7299L9.91406 15.907L15.354 19.3276Z"
									fill="#337202"
								/>
								<path
									d="M22.5139 14.281L21.0186 12.9889L18.8444 14.1901L19.1422 16.1437L18.2599 16.6311L17.2742 9.80337L18.1566 9.31593L23.404 13.7892L22.5139 14.281ZM18.9312 11.1089C18.8835 11.0598 18.8068 10.9892 18.7009 10.8968C18.5974 10.7963 18.4939 10.6959 18.3904 10.5954C18.284 10.4896 18.1986 10.4032 18.134 10.336C18.1658 10.4556 18.1981 10.5885 18.231 10.7349C18.2662 10.8731 18.2971 11.0034 18.3236 11.1258C18.3472 11.243 18.3659 11.3389 18.3797 11.4136L18.6873 13.3103L20.3732 12.379L18.9312 11.1089Z"
									fill="#337202"
								/>
								<path
									d="M27.3084 13.0948L27.1674 6.67034L31.0544 6.58503L31.0728 7.42182L28.1575 7.48581L28.1972 9.29438L29.025 9.27621C29.6609 9.26225 30.1605 9.3323 30.524 9.48636C30.8934 9.64029 31.1563 9.85658 31.3124 10.1352C31.4744 10.4077 31.5594 10.7239 31.5673 11.0839C31.576 11.4798 31.4995 11.8235 31.3379 12.1151C31.1822 12.4066 30.9292 12.6342 30.5787 12.798C30.228 12.9557 29.7648 13.0409 29.1889 13.0535L27.3084 13.0948ZM29.099 12.2363C29.6269 12.2247 30.0059 12.1294 30.236 11.9503C30.466 11.7652 30.5768 11.4837 30.5685 11.1058C30.5627 10.8418 30.5012 10.6361 30.3839 10.4887C30.2667 10.3412 30.0873 10.2371 29.846 10.1764C29.6106 10.1156 29.3009 10.0893 28.917 10.0978L28.2152 10.1132L28.2622 12.2547L29.099 12.2363Z"
									fill="#337202"
								/>
								<path
									d="M42.6139 13.9853C42.3731 14.4212 42.0989 14.7872 41.7913 15.0834C41.4919 15.3773 41.1608 15.5919 40.798 15.7274C40.4405 15.8658 40.0586 15.9119 39.6523 15.8656C39.2513 15.8223 38.8328 15.6802 38.3969 15.4394C37.9505 15.1927 37.5996 14.9098 37.3442 14.5904C37.0969 14.2687 36.9326 13.9209 36.8513 13.547C36.7781 13.1707 36.7877 12.7749 36.8799 12.3598C36.9722 11.9446 37.1388 11.5191 37.3796 11.0832C37.6987 10.5055 38.0718 10.0536 38.4988 9.72737C38.9258 9.40117 39.4003 9.22464 39.9224 9.19776C40.4498 9.17378 41.0102 9.32573 41.6036 9.65359C42.1813 9.97275 42.5951 10.359 42.8451 10.8124C43.1031 11.2635 43.2089 11.7606 43.1624 12.3039C43.1188 12.8419 42.936 13.4023 42.6139 13.9853ZM38.2733 11.5872C38.0238 12.0389 37.8694 12.4609 37.8103 12.8532C37.7541 13.2403 37.8054 13.5943 37.9641 13.915C38.1257 14.2305 38.4034 14.497 38.7973 14.7146C39.1964 14.9351 39.5699 15.0284 39.9178 14.9943C40.2685 14.955 40.5928 14.8086 40.8905 14.5549C41.1912 14.2961 41.4663 13.9408 41.7158 13.4891C42.0901 12.8117 42.2452 12.2084 42.181 11.6794C42.125 11.148 41.7976 10.717 41.1989 10.3862C40.7997 10.1657 40.4236 10.071 40.0705 10.1022C39.7175 10.1333 39.392 10.2757 39.0942 10.5293C38.7965 10.7829 38.5228 11.1356 38.2733 11.5872Z"
									fill="#337202"
								/>
								<path
									d="M50.8611 18.7422C51.2925 19.4629 51.4601 20.0759 51.3639 20.581C51.2729 21.083 50.9673 21.4897 50.4474 21.8009C50.2157 21.9396 49.9712 22.0335 49.7139 22.0826C49.4597 22.1369 49.1968 22.1299 48.9252 22.0617C48.6588 21.9905 48.3919 21.8425 48.1246 21.6179C47.8655 21.3954 47.6143 21.0808 47.3708 20.6741L47.0149 20.0795L44.9222 21.3322L44.4229 20.4981L49.9366 17.1977L50.8611 18.7422ZM50.1214 19.101L49.7331 18.4524L47.7176 19.6588L48.0181 20.1608C48.2061 20.4748 48.3967 20.7173 48.59 20.8883C48.7884 21.0563 48.9931 21.147 49.204 21.1606C49.4231 21.1763 49.6563 21.1102 49.9034 20.9623C50.2329 20.765 50.4158 20.5157 50.4521 20.2142C50.4967 19.9148 50.3864 19.5438 50.1214 19.101Z"
									fill="#337202"
								/>
								<path
									d="M51.0218 28.1881C51.3084 28.1592 51.543 28.1838 51.7258 28.2618C51.9145 28.3393 52.0558 28.4547 52.1496 28.608C52.2441 28.7674 52.3013 28.9455 52.3211 29.1425C52.341 29.3395 52.3202 29.5225 52.2589 29.6915C52.1975 29.8606 52.0821 30.0018 51.9127 30.1154C51.7498 30.2344 51.525 30.3083 51.2385 30.3372C50.9579 30.3655 50.723 30.3379 50.5336 30.2545C50.3509 30.1764 50.2096 30.061 50.1098 29.9082C50.0159 29.7549 49.9591 29.5797 49.9392 29.3827C49.9193 29.1857 49.9398 28.9997 50.0005 28.8247C50.0679 28.6551 50.1833 28.5138 50.3468 28.4008C50.5162 28.2873 50.7412 28.2163 51.0218 28.1881Z"
									fill="#337202"
								/>
								<path
									d="M30.1932 42.568V49H21.4692V42.568H22.5252V48.112H25.2972V42.568H26.3532V48.112H29.1372V42.568H30.1932ZM36.6905 43.456H34.5905V49H33.5465V43.456H31.4705V42.568H36.6905V43.456ZM37.2038 48.352C37.2038 48.056 37.2758 47.848 37.4198 47.728C37.5638 47.608 37.7358 47.548 37.9358 47.548C38.1438 47.548 38.3198 47.608 38.4638 47.728C38.6158 47.848 38.6918 48.056 38.6918 48.352C38.6918 48.64 38.6158 48.848 38.4638 48.976C38.3198 49.104 38.1438 49.168 37.9358 49.168C37.7358 49.168 37.5638 49.104 37.4198 48.976C37.2758 48.848 37.2038 48.64 37.2038 48.352Z"
									fill="#337202"
								/>
							</svg>

							<p className="absolute top-5 left-25px text-center text-primary font-noto-sans font-medium text-base uppercase tracking-1px leading-120%">
								{obj.packLabel}
							</p>
						</div>
					</div>

					<div
						className={`${obj.packS ? 'left-1 top-7' : 'left-1 top-1'
							} hidden ..5x2:flex absolute z-10 flex-col items-center justify-center rounded-56px w-9 h-9`}
					>
						<svg
							className="absolute"
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18"
								cy="18"
								r="17.5"
								fill="white"
								fill-opacity="0.85"
								stroke="#C5C1AB"
							/>
							<path
								d="M18.1127 25.248V29H13.0237V25.248H13.6397V28.482H15.2567V25.248H15.8727V28.482H17.4967V25.248H18.1127ZM21.9028 25.766H20.6778V29H20.0688V25.766H18.8578V25.248H21.9028V25.766ZM22.2022 28.622C22.2022 28.4493 22.2442 28.328 22.3282 28.258C22.4122 28.188 22.5126 28.153 22.6292 28.153C22.7506 28.153 22.8532 28.188 22.9372 28.258C23.0259 28.328 23.0702 28.4493 23.0702 28.622C23.0702 28.79 23.0259 28.9113 22.9372 28.986C22.8532 29.0607 22.7506 29.098 22.6292 29.098C22.5126 29.098 22.4122 29.0607 22.3282 28.986C22.2442 28.9113 22.2022 28.79 22.2022 28.622Z"
								fill="#337202"
							/>
							<path
								d="M4.77783 17.9012C4.49128 17.8723 4.26626 17.8014 4.10277 17.6884C3.93331 17.5748 3.8179 17.4335 3.75654 17.2645C3.69579 17.0896 3.67534 16.9036 3.6952 16.7066C3.71507 16.5096 3.77192 16.3344 3.86578 16.181C3.95964 16.0277 4.10093 15.9123 4.28965 15.8348C4.47301 15.7508 4.70796 15.7232 4.9945 15.7521C5.27508 15.7804 5.4998 15.8543 5.66866 15.9738C5.83215 16.0868 5.94756 16.2281 6.01489 16.3977C6.07624 16.5667 6.09699 16.7497 6.07713 16.9467C6.05727 17.1437 6.00011 17.3219 5.90565 17.4812C5.80582 17.634 5.66453 17.7494 5.48178 17.8274C5.29306 17.9049 5.05841 17.9295 4.77783 17.9012Z"
								fill="#337202"
							/>
							<path
								d="M11.2045 11.0662L10.802 11.7062L8.87021 10.4915L7.59959 12.5122L9.53141 13.7269L9.12899 14.3669L4.89793 11.7064L5.30036 11.0664L7.05441 12.1694L8.32503 10.1486L6.57098 9.0457L6.97341 8.40571L11.2045 11.0662Z"
								fill="#337202"
							/>
							<path
								d="M15.3912 9.04601L14.2282 8.04108L12.5371 8.97535L12.7688 10.4948L12.0826 10.8739L11.3159 5.56344L12.0022 5.18431L16.0836 8.6635L15.3912 9.04601ZM12.6047 6.57886C12.5676 6.5407 12.5079 6.48571 12.4256 6.4139C12.3451 6.33575 12.2646 6.25759 12.1841 6.17944C12.1013 6.0972 12.0349 6.02996 11.9847 5.97772C12.0094 6.0707 12.0345 6.1741 12.0601 6.28793C12.0875 6.39542 12.1115 6.49678 12.1321 6.59202C12.1505 6.68317 12.165 6.75777 12.1758 6.81581L12.415 8.29108L13.7262 7.56669L12.6047 6.57886Z"
								fill="#337202"
							/>
							<path
								d="M17.2028 9.03956L17.0932 4.04276L20.1164 3.9764L20.1307 4.62725L17.8633 4.67701L17.8941 6.08367L18.538 6.06954C19.0325 6.05869 19.4212 6.11317 19.7039 6.233C19.9912 6.35272 20.1956 6.52094 20.3171 6.73767C20.4431 6.94962 20.5092 7.19556 20.5153 7.47549C20.5221 7.78342 20.4626 8.05079 20.3369 8.2776C20.2158 8.50431 20.019 8.68134 19.7464 8.80869C19.4737 8.93137 19.1134 8.99762 18.6655 9.00745L17.2028 9.03956ZM18.5955 8.37184C19.0061 8.36282 19.3009 8.28867 19.4799 8.14938C19.6587 8.00542 19.745 7.78647 19.7385 7.49254C19.734 7.28726 19.6861 7.12727 19.5949 7.01258C19.5037 6.89788 19.3643 6.81693 19.1765 6.7697C18.9934 6.72237 18.7526 6.70199 18.454 6.70854L17.9081 6.72052L17.9447 8.38612L18.5955 8.37184Z"
								fill="#337202"
							/>
							<path
								d="M27.0324 9.72462C26.8451 10.0637 26.6318 10.3484 26.3926 10.5787C26.1597 10.8073 25.9022 10.9742 25.62 11.0796C25.342 11.1872 25.0449 11.2231 24.7289 11.1871C24.417 11.1534 24.0915 11.0429 23.7525 10.8556C23.4053 10.6638 23.1323 10.4437 22.9337 10.1953C22.7414 9.94508 22.6136 9.67455 22.5503 9.3837C22.4934 9.09103 22.5009 8.78324 22.5726 8.46034C22.6444 8.13745 22.7739 7.80648 22.9612 7.46745C23.2095 7.01813 23.4996 6.66661 23.8317 6.4129C24.1638 6.15919 24.5329 6.02189 24.939 6.00098C25.3492 5.98234 25.785 6.10052 26.2466 6.35552C26.6959 6.60376 27.0178 6.90419 27.2122 7.25683C27.4129 7.60764 27.4952 7.99431 27.459 8.41684C27.4251 8.83529 27.2829 9.27121 27.0324 9.72462ZM23.6563 7.85947C23.4623 8.21076 23.3422 8.53898 23.2963 8.84414C23.2526 9.14521 23.2924 9.42048 23.4158 9.66994C23.5415 9.91531 23.7575 10.1226 24.0639 10.2919C24.3743 10.4634 24.6648 10.5359 24.9354 10.5094C25.2082 10.4789 25.4604 10.3649 25.692 10.1677C25.9258 9.96633 26.1398 9.69001 26.3339 9.33873C26.625 8.81179 26.7456 8.3426 26.6957 7.93115C26.6521 7.51788 26.3975 7.18261 25.9318 6.92534C25.6214 6.75384 25.3288 6.68019 25.0542 6.70441C24.7796 6.72863 24.5265 6.83937 24.2949 7.03664C24.0632 7.2339 23.8504 7.50818 23.6563 7.85947Z"
								fill="#337202"
							/>
							<path
								d="M31.2842 12.0154C31.6198 12.5759 31.7501 13.0527 31.6753 13.4455C31.6045 13.836 31.3668 14.1523 30.9624 14.3944C30.7822 14.5023 30.5921 14.5753 30.3919 14.6135C30.1942 14.6557 29.9897 14.6503 29.7785 14.5972C29.5713 14.5418 29.3637 14.4267 29.1558 14.2521C28.9543 14.079 28.7589 13.8343 28.5695 13.518L28.2927 13.0555L26.665 14.0298L26.2767 13.3811L30.5652 10.8141L31.2842 12.0154ZM30.7089 12.2945L30.4069 11.79L28.8393 12.7283L29.073 13.1187C29.2192 13.363 29.3674 13.5516 29.5178 13.6846C29.6721 13.8152 29.8313 13.8858 29.9953 13.8964C30.1658 13.9086 30.3471 13.8571 30.5393 13.7421C30.7956 13.5887 30.9378 13.3948 30.9661 13.1603C31.0007 12.9274 30.915 12.6388 30.7089 12.2945Z"
								fill="#337202"
							/>
							<path
								d="M31.1911 17.4612C31.4777 17.4324 31.7123 17.4569 31.8951 17.535C32.0838 17.6125 32.2251 17.7279 32.319 17.8812C32.4134 18.0406 32.4706 18.2187 32.4904 18.4157C32.5103 18.6127 32.4896 18.7957 32.4282 18.9647C32.3668 19.1337 32.2514 19.275 32.082 19.3886C31.9191 19.5075 31.6944 19.5815 31.4078 19.6103C31.1272 19.6386 30.8923 19.6111 30.703 19.5276C30.5202 19.4496 30.3789 19.3342 30.2791 19.1814C30.1852 19.0281 30.1284 18.8529 30.1085 18.6559C30.0887 18.4589 30.1091 18.2729 30.1699 18.0979C30.2372 17.9283 30.3526 17.787 30.5161 17.674C30.6855 17.5605 30.9106 17.4895 31.1911 17.4612Z"
								fill="#337202"
							/>
						</svg>

						<p className="absolute text-center text-primary font-noto-sans font-medium text-base uppercase tracking-1px leading-120% ..5x2:text-10px">
							{obj.packLabel}
						</p>
					</div>
				</>
			)}

			{clickHeart ? (
				<>
					{size.width > 1000 ? (
						<svg
							onClick={() => setClickHeart(false)}
							// onTouchStart={() => setClickHeart(false)}
							className="absolute top-3 right-3 z-10 ..5x2:w-8 ..5x2:h-8 ..5x2:right-1.5 ..5x2:top-1.5"
							width="48"
							height="49"
							viewBox="0 0 48 49"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="24" cy="24" r="24" fill="white" />
							<g filter="url(#filter0_d_3587_1020586)">
								<path
									d="M29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z"
									fill="#FF6363"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_3587_1020586"
									x="4"
									y="10"
									width="40.7084"
									height="39"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="5" />
									<feGaussianBlur stdDeviation="5" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_3587_1020586"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_3587_1020586"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					) : (
						<svg
							// onClick={() => setClickHeart(false)}
							onTouchStart={() => setClickHeart(false)}
							className="absolute top-3 right-3 z-10 ..5x2:w-8 ..5x2:h-8 ..5x2:right-1.5 ..5x2:top-1.5"
							width="48"
							height="49"
							viewBox="0 0 48 49"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="24" cy="24" r="24" fill="white" />
							<g filter="url(#filter0_d_3587_1020586)">
								<path
									d="M29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z"
									fill="#FF6363"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_3587_1020586"
									x="4"
									y="10"
									width="40.7084"
									height="39"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="5" />
									<feGaussianBlur stdDeviation="5" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_3587_1020586"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_3587_1020586"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					)}
				</>
			) : (
				<>
					{size?.width > 1000 ? (
						<svg
							onClick={() => setClickHeart(true)}
							// onTouchStart={() => setClickHeart(true)}
							onMouseEnter={() => setHoverHeart(true)}
							onMouseLeave={() => setHoverHeart(false)}
							className="absolute top-3 right-3 z-10 ..5x2:w-8 ..5x2:h-8 ..5x2:right-1.5 ..5x2:top-1.5"
							width="48"
							height="48"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="24" cy="24" r="24" fill="white" />
							<path
								d="M24.4578 31.1008L24.3542 31.2044L24.2403 31.1008C19.3221 26.6381 16.0708 23.6872 16.0708 20.6948C16.0708 18.624 17.624 17.0708 19.6948 17.0708C21.2894 17.0708 22.8425 18.1063 23.3913 19.5144H25.3172C25.8659 18.1063 27.4191 17.0708 29.0136 17.0708C31.0845 17.0708 32.6376 18.624 32.6376 20.6948C32.6376 23.6872 29.3864 26.6381 24.4578 31.1008ZM29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z"
								fill={hoverHeart && size.width > 1000 ? '#FF6363' : '#EDEEEC'}
							/>
						</svg>
					) : (
						<svg
							// onClick={() => setClickHeart(true)}
							onTouchStart={() => setClickHeart(true)}
							onMouseEnter={() => setHoverHeart(true)}
							onMouseLeave={() => setHoverHeart(false)}
							className="absolute top-3 right-3 z-10 ..5x2:w-8 ..5x2:h-8 ..5x2:right-1.5 ..5x2:top-1.5"
							width="48"
							height="48"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="24" cy="24" r="24" fill="white" />
							<path
								d="M24.4578 31.1008L24.3542 31.2044L24.2403 31.1008C19.3221 26.6381 16.0708 23.6872 16.0708 20.6948C16.0708 18.624 17.624 17.0708 19.6948 17.0708C21.2894 17.0708 22.8425 18.1063 23.3913 19.5144H25.3172C25.8659 18.1063 27.4191 17.0708 29.0136 17.0708C31.0845 17.0708 32.6376 18.624 32.6376 20.6948C32.6376 23.6872 29.3864 26.6381 24.4578 31.1008ZM29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z"
								fill={hoverHeart && size.width > 1000 ? '#FF6363' : '#EDEEEC'}
							/>
						</svg>
					)}
				</>
			)}

			{obj.img.length > 1 ? (
				<Swiper
					className="product-card-photo-slider"
					modules={[Pagination]}
					pagination={{ clickable: true }}
					allowTouchMove={true}
					breakpoints={{
						1000: {
							allowTouchMove: false,
						},
					}}
				>
					{obj.img.map((el, i) => {
						let styles = '';

						if (i === 0) {
							styles =
								'mt-5 mx-29px !w-218px !h-218px ..5x2:!w-130px ..5x2:!h-130px ..5x2:mx-22px';
						} else {
							styles = ' !w-276px !h-237px ..5x2:!w-176px ..5x2:!h-150px';
						}

						return (
							<SwiperSlide>
								<div className={` ${styles}`}>
									<Image src={el} quality={100} />
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			) : (
				<div className="mt-5 mx-29px !w-218px !h-218px ..5x2:!w-130px ..5x2:!h-130px ..5x2:mx-22px">
					<Image src={obj.img[0] && defImg} quality={100} />
				</div>
			)}

			<div className={`absolute bottom-164px flex flex-row items-center h-26px w-full px-4 ..5x2:bottom-129px `}>
				{obj.iText && (
					<>
						{size.width > 1000 ? (
							<div
								onClick={() => setVisSliderProd(!visSliderProd)}
								className=" cursor-pointer absolute top-1 left-4 ..5x2:left-2"
							>
								<p className=" text-sm font-normal font-montserrat flex items-center leading-140% text-black-70pe ..5x2:text-11px">
									<svg
										className="mr-1.5 mb-0.5 ..5x2:mr-1 ..5x2:mb-0 ..5x2:w-18px ..5x2:h-18px"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="8"
											cy="8"
											r="7.5"
											stroke={visSliderProd ? '#337202' : '#DBDCDA'}
										/>
										<path
											d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
											fill={visSliderProd ? '#337202' : '#DBDCDA'}
										/>
									</svg>
									{obj.iText}
								</p>
							</div>
						) : (
							<div
								onClick={() => setVisSliderProd(!visSliderProd)}
								// onTouchStart={() => setVisSliderProd(!visSliderProd)}
								className=" cursor-pointer absolute top-1 left-4 ..5x2:left-2"
							>
								<p className=" text-sm font-normal font-montserrat flex items-center leading-140% text-black-70pe ..5x2:text-11px">
									<svg
										className="mr-1.5 mb-0.5 ..5x2:mr-1 ..5x2:mb-0 ..5x2:w-18px ..5x2:h-18px"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="8"
											cy="8"
											r="7.5"
											stroke={visSliderProd ? '#337202' : '#DBDCDA'}
										/>
										<path
											d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
											fill={visSliderProd ? '#337202' : '#DBDCDA'}
										/>
									</svg>
									{obj.iText}
								</p>
							</div>
						)}
					</>
				)}

				{obj.balls && (
					<div className=" absolute flex top-1 right-4 ..5x2:top-7px ..5x2:right-2">
						<p className="flex font-montserrat font-medium text-13px leading-140% text-black-70pe ..5x2:text-10px">
							<svg
								className="mr-0.5 ..5x2:w-3 ..5x2:h-3"
								width="16"
								height="16"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.9166 17.9167C12.9166 17.9167 7.49996 18.3333 4.58329 15C1.66663 11.6667 1.66663 1.66667 1.66663 1.66667C1.66663 1.66667 11.6666 1.25 15 3.75C18.3333 6.25 17.5 13.3333 17.5 13.3333"
									stroke="#337202"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M18.3333 18.3334C18.3333 18.3334 13.6753 14.8132 10.8333 11.6667C7.99133 8.52029 6.66663 5.41675 6.66663 5.41675"
									stroke="#337202"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M10.8334 11.6667L11.25 6.25"
									stroke="#337202"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M10.8333 11.6667L6.66663 11.25"
									stroke="#337202"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							{obj.balls}
						</p>
					</div>
				)}
			</div>

			{obj.dateEnd && obj.packS && (
				<div className="absolute w-full bottom-36 flex justify-center ..5x2:bottom-111px">
					<p className="font-montserrat font-normal text-sm leading-140% text-black-70pe ..5x2:text-11px">
						{obj.dateEnd}
					</p>
				</div>
			)}

			<div
				className={`${obj.packS
					? ' bottom-84px ..5x2:bottom-66px'
					: 'bottom-104px ..5x2:bottom-83px'
					}  card_text absolute font-montserrat font-normal text-13px leading-150% uppercase text-center px-4 ..5x2:px-2 ..5x2:text-10px ..5x2:tracking-1px `}
			>
				{obj.text}
			</div>

			{obj.price.currentPrice ? (
				<div className="absolute w-full bottom-66px flex justify-center ..5x2:bottom-12">
					<p className=" font-montserrat font-normal text-base leading-140% ..5x2:text-11px">
						{obj.price.currentPrice}
					</p>
				</div>
			) : (
				<div
					className={`${obj.packS ? 'bottom-62px' : 'bottom-66px'
						} absolute w-full flex justify-center ..5x2:bottom-12`}
				>
					<p className=" font-montserrat text-gray-quick-silver font-normal leading-140% text-base line-through mr-3 ..5x2:mr-2 ..5x2:text-11px">
						{obj.price?.old}
					</p>
					<p className=" font-montserrat text-label-pink-2 font-normal text-base leading-140% ..5x2:text-11px">
						{obj.price?.new}
					</p>
				</div>
			)}

			<div className={`absolute bottom-3 px-3 w-full flex justify-between ..5x2:hidden`}>
				{obj.priceDe ? (
					<>
						{clickBtnLDesk ? (
							<button className="whitespace-nowrap w-1/2 mr-1 py-4  bg-primary text-white font-montserrat font-medium text-xs leading-100%">
								В корзине
							</button>
						) : (
							<button
								onClick={() => setClickBtnLDesk(true)}
								className="whitespace-nowrap mr-1 w-1/2 py-4 bg-gray-light2 text-primary font-montserrat font-medium text-xs leading-100% hover:text-white hover:bg-primary"
							>
								+ Добавить
							</button>
						)}

						{clickBtnRDesk ? (
							<button className="whitespace-nowrap w-1/2 ml-1 py-4 border border-label-orange  bg-label-orange text-white font-montserrat font-medium text-xs leading-100%">
								В корзине
							</button>
						) : (
							<button
								onClick={() => setClickBtnRDesk(true)}
								className=" font-montserrat ml-1 w-1/2 py-4 bg-white border border-stroke font-medium text-xs leading-100% text-label-orange hover:text-white hover:bg-label-orange"
							>
								3 750 DE
							</button>
						)}
					</>
				) : (
					<>
						{clickBtnBigDesk ? (
							<button className=" whitespace-nowrap w-full py-4 bg-primary text-white font-montserrat font-medium text-xs leading-100% ">
								В корзине
							</button>
						) : (
							<button
								onClick={() => setClickBtnBigDesk(true)}
								className="  whitespace-nowrap w-full py-4 bg-gray-light2 text-primary font-montserrat font-medium text-xs leading-100% hover:text-white hover:bg-primary"
							>
								+ Добавить в заказ

							</button>
						)}
					</>
				)}
			</div>

			<div className="absolute bottom-2 left-7px hidden h-8 w-40 ..5x2:flex">
				{obj.priceDe ? (
					<>
						{clickBtnL ? (
							<button className="w-1/2 h-full bg-primary">
								<svg
									className="mx-auto"
									width="67"
									height="14"
									viewBox="0 0 67 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M22.5 1.74999C21.6946 1.74999 21.0417 2.40291 21.0417 3.20833V3.5H23.9583V3.20833C23.9583 2.40291 23.3054 1.74999 22.5 1.74999ZM25.125 3.5V3.20833C25.125 1.75858 23.9497 0.583328 22.5 0.583328C21.0502 0.583328 19.875 1.75858 19.875 3.20833V3.5H18.4167C17.7723 3.5 17.25 4.02233 17.25 4.66666V12.25C17.25 12.8943 17.7723 13.4167 18.4167 13.4167H26.5833C27.2277 13.4167 27.75 12.8943 27.75 12.25V4.66666C27.75 4.02233 27.2277 3.5 26.5833 3.5H25.125ZM23.9583 4.66666V5.25C23.9583 5.57216 24.2195 5.83333 24.5417 5.83333C24.8638 5.83333 25.125 5.57216 25.125 5.25V4.66666H26.5833V12.25H18.4167V4.66666H19.875V5.25C19.875 5.57216 20.1362 5.83333 20.4583 5.83333C20.7805 5.83333 21.0417 5.57216 21.0417 5.25V4.66666H23.9583Z"
										fill="#337202"
										stroke="white"
										stroke-width="0.3"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M49.7498 4.08333L42.7498 11.0833L39.5415 7.875L40.364 7.0525L42.7498 9.4325L48.9273 3.26083L49.7498 4.08333Z"
										fill="white"
									/>
								</svg>
							</button>
						) : (
							<button
								onClick={() => setClickBtnL(true)}
								className="w-1/2 h-full border border-gray-light2 text-primary bg-gray-light2 font-montserrat font-normal text-12px leading-100% hover:bg-primary-hover hover:text-white"
							>
								Купить
							</button>
						)}

						{clickBtnR ? (
							<button className="w-1/2 h-full bg-label-orange">
								<svg
									className="mx-auto"
									width="68"
									height="14"
									viewBox="0 0 68 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M23 1.74999C22.1946 1.74999 21.5417 2.40291 21.5417 3.20833V3.5H24.4583V3.20833C24.4583 2.40291 23.8054 1.74999 23 1.74999ZM25.625 3.5V3.20833C25.625 1.75858 24.4497 0.583328 23 0.583328C21.5502 0.583328 20.375 1.75858 20.375 3.20833V3.5H18.9167C18.2723 3.5 17.75 4.02233 17.75 4.66666V12.25C17.75 12.8943 18.2723 13.4167 18.9167 13.4167H27.0833C27.7277 13.4167 28.25 12.8943 28.25 12.25V4.66666C28.25 4.02233 27.7277 3.5 27.0833 3.5H25.625ZM24.4583 4.66666V5.25C24.4583 5.57216 24.7195 5.83333 25.0417 5.83333C25.3638 5.83333 25.625 5.57216 25.625 5.25V4.66666H27.0833V12.25H18.9167V4.66666H20.375V5.25C20.375 5.57216 20.6362 5.83333 20.9583 5.83333C21.2805 5.83333 21.5417 5.57216 21.5417 5.25V4.66666H24.4583Z"
										fill="#FF7F37"
										stroke="white"
										stroke-width="0.3"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M50.2501 4.08333L43.2501 11.0833L40.0417 7.875L40.8642 7.0525L43.2501 9.4325L49.4276 3.26083L50.2501 4.08333Z"
										fill="white"
									/>
								</svg>
							</button>
						) : (
							<button
								onClick={() => setClickBtnR(true)}
								className="w-1/2 h-full border border-l-0 border-gray-light2 text-label-orange font-montserrat font-medium text-12px leading-100% hover:bg-label-orange hover:text-white"
							>
								{obj.priceDe} <span className=" font-lora font-medium">De</span>
							</button>
						)}
					</>
				) : (
					<>
						{clickBtnBig ? (
							<button className=" w-40 h-8 bg-primary ">
								<svg
									className="mx-auto"
									width="67"
									height="14"
									viewBox="0 0 67 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M22.5 1.74999C21.6946 1.74999 21.0417 2.40291 21.0417 3.20833V3.5H23.9583V3.20833C23.9583 2.40291 23.3054 1.74999 22.5 1.74999ZM25.125 3.5V3.20833C25.125 1.75858 23.9497 0.583328 22.5 0.583328C21.0502 0.583328 19.875 1.75858 19.875 3.20833V3.5H18.4167C17.7723 3.5 17.25 4.02233 17.25 4.66666V12.25C17.25 12.8943 17.7723 13.4167 18.4167 13.4167H26.5833C27.2277 13.4167 27.75 12.8943 27.75 12.25V4.66666C27.75 4.02233 27.2277 3.5 26.5833 3.5H25.125ZM23.9583 4.66666V5.25C23.9583 5.57216 24.2195 5.83333 24.5417 5.83333C24.8638 5.83333 25.125 5.57216 25.125 5.25V4.66666H26.5833V12.25H18.4167V4.66666H19.875V5.25C19.875 5.57216 20.1362 5.83333 20.4583 5.83333C20.7805 5.83333 21.0417 5.57216 21.0417 5.25V4.66666H23.9583Z"
										fill="#337202"
										stroke="white"
										stroke-width="0.3"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M49.7498 4.08333L42.7498 11.0833L39.5415 7.875L40.364 7.0525L42.7498 9.4325L48.9273 3.26083L49.7498 4.08333Z"
										fill="white"
									/>
								</svg>
							</button>
						) : (
							<button
								onClick={() => setClickBtnBig(true)}
								className="items-center justify-center w-40 h-8 border border-gray-light2 text-primary bg-gray-light2 font-montserrat font-normal text-12px leading-100% hover:bg-primary-hover hover:text-white"
							>
								Купить
							</button>
						)}
					</>
				)}
			</div>

			{visSliderProd && (
				<div className={`absolute bottom-68px w-full bg-gray-light2 h-24 ..5x2:w-40 ..5x2:h-77px ..5x2:left-7px ..5x2:bottom-12 `}>
					{obj.iText === 'Акции' && (
						<>
							<div className="absolute bottom-24 w-full flex justify-center ..5x2:hidden">
								<p className=" font-montserrat font-normal text-11px leading-140%">
									Экономия при покупке в акции:
								</p>
							</div>

							<div className="absolute hidden bottom-60px w-full ..5x2:flex justify-center">
								<p className=" font-montserrat font-normal text-10px leading-140%">
									Экономия
								</p>
							</div>
						</>
					)}

					<Swiper
						ref={sliderFilt}
						className="h-full w-204px ..5x2:w-110px"
						slidesPerView={2}
						spaceBetween={5}
						modules={[Navigation]}
						allowTouchMove={false}
						breakpoints={{
							1000: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
						}}
					>
						<SwiperSlide className={``}>
							<CardSliderItem photo={imgSCard} iText={obj.iText} />
						</SwiperSlide>

						<SwiperSlide>
							<CardSliderItem photo={imgSCard} iText={obj.iText} />
						</SwiperSlide>

						<SwiperSlide>
							<CardSliderItem photo={imgSCard} iText={obj.iText} />
						</SwiperSlide>

						<SwiperSlide>
							<CardSliderItem photo={imgSCard} iText={obj.iText} />
						</SwiperSlide>
					</Swiper>

					<ProductPrevButtonNewSale onClick={prevSlideFilt} />
					<ProductNextButtonNewSale onClick={nextSlideFilt} />
				</div>
			)}
		</div>
	);
}
