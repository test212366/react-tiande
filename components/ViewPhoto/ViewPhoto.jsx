import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import one from '../../images/templates/seeMoreOneI.jpg'
import oneHoriz from '../../images/templates/horizOne.jpg'
import fullViewOne from '../../images/templates/fullViewOne.jpg'
import { useState } from "react";
const ViewPhoto = ({ isShow, close, isFullView, isFullViewVideo, name = '2021-01-08 17-13-22.JPG', size = '90 КБ', upload = 'Май 12, 2022', download = 28 }) => {
	const slider = useRef(null)
	const [currentSlide, setCurrentSlide] = useState(1),
		[allSlides, setAllSlides] = useState(0)
	const nextSlide = () => {
		if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slideNext();
	},
		prevSlide = () => {
			if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slidePrev();
		}

	const imagesDots = [
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz
	]

	return (
		<section className={`fixed left-0 right-0 z-100 bottom-0 top-0 bg-white ${isFullView || isFullViewVideo ? '!bg-gray-light ..5x2:!bg-white' : ""} ${isShow ? 'block' : "hidden"}`}>
			<div className="h-full relative    ">
				<div className="absolute left-80px ..5x2:hidden z-10 top-41px .1x1:left-5">
					<svg width="148" height="60" viewBox="0 0 148 60" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_2408_1343657)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M138.276 1.11357C138.943 1.10696 139.598 1.29026 140.164 1.64203C140.718 1.97924 141.171 2.45818 141.477 3.02926C141.801 3.63251 141.97 4.3072 141.967 4.99214C141.971 5.68923 141.802 6.37641 141.477 6.99277C141.172 7.56402 140.722 8.04553 140.174 8.38943C139.607 8.73902 138.951 8.91611 138.285 8.89903C137.631 8.90544 136.986 8.73305 136.422 8.40045C135.858 8.06784 135.396 7.58765 135.085 7.01165C134.759 6.41224 134.59 5.74029 134.594 5.0582C134.589 4.36097 134.758 3.67351 135.085 3.05757C135.395 2.48694 135.847 2.0059 136.397 1.66091C136.965 1.31198 137.619 1.12892 138.285 1.13244L138.276 1.11357ZM138.276 0.528466C137.486 0.524112 136.71 0.732776 136.029 1.13244C135.376 1.52525 134.834 2.07724 134.452 2.73672C134.063 3.42805 133.858 4.20811 133.858 5.00158C133.858 5.79505 134.063 6.57512 134.452 7.26645C134.829 7.93741 135.377 8.49633 136.04 8.886C136.704 9.27567 137.459 9.48208 138.229 9.48412C139 9.48905 139.758 9.28556 140.423 8.89517C141.087 8.50479 141.634 7.94203 142.005 7.26645C142.395 6.57512 142.6 5.79505 142.6 5.00158C142.6 4.20811 142.395 3.42805 142.005 2.73672C141.634 2.07868 141.101 1.5264 140.457 1.13244C139.786 0.733335 139.019 0.524518 138.238 0.528466H138.276ZM136.482 7.84209H137.228V5.33187H137.936C138.219 5.32403 138.495 5.42156 138.71 5.60554C138.919 5.84587 139.057 6.1402 139.107 6.45487C139.182 6.82291 139.248 7.11546 139.314 7.39856C139.355 7.56425 139.412 7.72548 139.484 7.87984H140.296C140.205 7.69762 140.138 7.50403 140.098 7.30419C140.023 7.03052 139.938 6.70022 139.843 6.29443C139.79 6.02632 139.687 5.77038 139.541 5.53949C139.41 5.34797 139.222 5.20268 139.003 5.12426C139.301 5.00654 139.564 4.81494 139.768 4.56749C139.982 4.30019 140.095 3.96622 140.089 3.62379C140.087 3.40727 140.046 3.19289 139.966 2.99151C139.887 2.8146 139.775 2.65444 139.635 2.51966C139.44 2.34895 139.207 2.22618 138.956 2.16107C138.629 2.07882 138.292 2.04073 137.955 2.04781C137.703 2.04781 137.448 2.04781 137.19 2.04781C136.935 2.04781 136.718 2.10444 136.52 2.14219V7.85153L136.482 7.84209ZM137.228 2.65178V4.76565H137.993C138.334 4.78283 138.669 4.67551 138.937 4.46368C139.054 4.36903 139.147 4.24766 139.208 4.10975C139.269 3.97184 139.295 3.82138 139.286 3.67097C139.298 3.5143 139.271 3.35715 139.206 3.21378C139.142 3.07041 139.043 2.94535 138.918 2.84996C138.641 2.6614 138.308 2.57164 137.974 2.59516H137.521L137.237 2.64234L137.228 2.65178ZM0 35.917L5.16434 35.7377V28.9148H8.11945V35.615L14.6339 35.3885V37.8704L8.11945 37.559V50.4215C8.11945 56.0082 10.0077 58.4335 14.6339 57.9711V59.481C9.11077 59.481 5.19267 57.5936 5.19267 50.431V37.3891L0.0283225 37.1438V35.917H0ZM19.7699 28.9148H22.6967V32.2649H19.7699V28.9148ZM19.7699 35.5867H22.6967V59.3866H19.7699V35.5867ZM57.5347 35.5867H60.4615V40.4656C64.0397 32.3876 78.853 32.916 78.853 45.5049V59.3866H75.9356V45.42C75.9356 34.9638 62.8596 34.0956 60.4615 43.9383V59.3866H57.5347V35.5867ZM108.111 50.7801C109.902 49.1794 111.488 47.3631 112.832 45.3728L147.519 45.8163V43.0701L141.524 43.1928C136.652 32.0195 126.418 28.3391 117.685 30.2359C117.685 29.6886 117.685 29.1412 117.685 28.5845C117.685 11.8528 102.881 0 84.6404 0V59.5753C92.1446 59.4619 99.4448 57.1161 105.609 52.8374C112.662 60.8871 130.024 62.5669 139.116 52.4127L138.418 51.8088C129.713 59.5659 115.268 59.8301 108.14 50.799L108.111 50.7801ZM103.476 44.0044L97.5466 44.1365V45.1746L110.321 45.335C107.822 48.902 104.511 51.8236 100.659 53.8583C96.8078 55.8931 92.5274 56.9826 88.1715 57.0368L88.0299 3.24631C102.428 4.05788 114.815 17.0242 114.815 30.8399V31.0947C111.979 32.1067 109.45 33.8267 107.467 36.0912C105.484 38.3557 104.113 41.0895 103.485 44.0327L103.476 44.0044ZM137.568 43.2778L113.757 43.7874C115.723 40.3522 116.972 36.5545 117.43 32.6235C124.803 30.9626 133.376 33.5672 137.568 43.2778ZM114.711 33.4539C114.349 37.1205 113.189 40.6635 111.312 43.8346L104.779 43.9667C105.855 39.1727 109.811 35.3413 114.711 33.4445V33.4539ZM30.6839 47.4206C30.6839 53.9415 34.6398 58.3014 39.6342 58.3014C44.6286 58.3014 49.1226 53.5074 49.1226 47.4206C49.1226 41.3338 44.572 37.04 39.6342 37.04C35.3951 37.04 30.6839 40.8147 30.6839 47.4206ZM51.785 59.3866H48.9055V54.319C47.2533 57.8389 43.0519 59.9811 39.5492 59.9811C32.8743 59.9811 27.4173 55.4986 27.4173 47.43C27.3684 45.8177 27.6477 44.2123 28.2383 42.7111C28.8288 41.2099 29.7183 39.8443 30.8528 38.6971C31.9873 37.5499 33.3431 36.645 34.838 36.0373C36.3329 35.4297 37.9357 35.1319 39.5492 35.162C41.4483 35.1361 43.3193 35.6219 44.9657 36.5684C46.612 37.515 47.973 38.8872 48.9055 40.5411V35.5772H51.8228L51.785 59.3866Z" fill="#337202" />
						</g>
						<defs>
							<clipPath id="clip0_2408_1343657">
								<rect width="148" height="60" fill="white" />
							</clipPath>
						</defs>
					</svg>

				</div>
				<div onClick={close} className={`absolute cursor-pointer .4x2:right-10 .2x1.0:right-5  .6x3:right-28 . z-10 ..5x2:right-4 ..5x2:top-4 top-60px right-230px ${isFullView || isFullViewVideo ? 'border-l pl-4 ..5x2:border-none border-stroke' : ""} `}><svg className=" ..5x2:h-4 ..5x2:w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19 5L5 19M5 5L19 19" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" />
				</svg>
				</div>
				{(isFullView || isFullViewVideo) && <div className="flex absolute .2x1.0:right-14 .4x2:right-20 .6x3:right-40 ..5x2:top-4 ..5x2:left-4 top-60px z-10 right-272px items-center">
					<svg className="mx-7 ..5x2:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11 9H13V7H11M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM11 17H13V11H11V17Z" fill="black" fill-opacity="0.7" />
					</svg>
					<svg className="mr-7 ..5x2:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.0344 14.0062C13.0361 14.5585 12.5898 15.0076 12.0375 15.0094C11.4853 15.0111 11.0361 14.5648 11.0344 14.0125L13.0344 14.0062Z" fill="black" fill-opacity="0.7" />
						<path d="M9.71867 6.72368L11.0075 5.42676L11.0344 14.0125L13.0344 14.0062L13.0075 5.42049L14.3044 6.7093C14.6961 7.09859 15.3293 7.09663 15.7186 6.70488C16.1079 6.31313 16.1059 5.67997 15.7142 5.29067L11.9955 1.59521L8.30003 5.31391L9.71867 6.72368Z" fill="black" fill-opacity="0.7" />
						<path d="M8.30003 5.31391C7.91073 5.70566 7.9127 6.33884 8.30445 6.72814C8.69619 7.11743 9.32938 7.11543 9.71867 6.72368L8.30003 5.31391Z" fill="black" fill-opacity="0.7" />
						<path d="M4 12C4 10.8955 4.89543 10 6 10C6.55228 10 7 9.55232 7 9.00004C7 8.44775 6.55228 8.00004 6 8.00004C3.79086 8.00004 2 9.7909 2 12V18C2 20.2092 3.79086 22 6 22H17C19.7614 22 22 19.7615 22 17V12C22 9.7909 20.2091 8.00004 18 8.00004C17.4477 8.00004 17 8.44775 17 9.00004C17 9.55232 17.4477 10 18 10C19.1046 10 20 10.8955 20 12V17C20 18.6569 18.6569 20 17 20H6C4.89543 20 4 19.1046 4 18V12Z" fill="black" fill-opacity="0.7" />
					</svg>
					<svg className="mr-6 ..5x2:hidden " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.56023 10.8285C6.4317 10.9626 6.26436 11.0624 6.07022 11.1086C4.30906 11.5274 3 13.1122 3 15.0002C3 17.2094 4.79086 19.0002 7 19.0002C7.38062 19.0002 7.74717 18.9474 8.09352 18.8492C8.62487 18.6986 9.17772 19.0072 9.32834 19.5386C9.47897 20.0699 9.17033 20.6228 8.63898 20.7734C8.11683 20.9214 7.56678 21.0002 7 21.0002C3.68629 21.0002 1 18.3139 1 15.0002C1 12.3751 2.68503 10.1457 5.03157 9.33088C5.36842 5.77877 8.35971 3 12 3C15.6573 3 18.6596 5.80487 18.973 9.38085C21.2471 10.234 22.8662 12.427 22.8662 15.0002C22.8662 18.3139 20.1799 21.0002 16.8662 21.0002C16.2994 21.0002 15.7494 20.9214 15.2272 20.7734C14.6959 20.6228 14.3872 20.0699 14.5378 19.5386C14.6885 19.0072 15.2413 18.6986 15.7727 18.8492C16.119 18.9474 16.4856 19.0002 16.8662 19.0002C19.0753 19.0002 20.8662 17.2094 20.8662 15.0002C20.8662 13.1122 19.5572 11.5274 17.796 11.1086C17.3803 11.0098 17.0875 10.6647 17.0354 10.2647C17.0123 10.1804 17 10.0917 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 10.3447 6.8256 10.6487 6.56023 10.8285Z" fill="black" fill-opacity="0.7" />
						<path d="M16.2758 14.2957C16.6648 14.6877 16.6623 15.3209 16.2703 15.7099L12.7043 19.2481C12.3129 19.6364 11.681 19.6347 11.2917 19.2441L7.82444 15.7654C7.43456 15.3743 7.43561 14.7411 7.82677 14.3512C8.21794 13.9613 8.85111 13.9624 9.24099 14.3536L11 16.1184V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V16.1372L14.8616 14.2901C15.2536 13.9011 15.8868 13.9036 16.2758 14.2957Z" fill="black" fill-opacity="0.7" />
					</svg>
					<svg className="..5x2:block hidden mr-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.16663 7.50008H10.8333V5.83341H9.16663M9.99996 16.6667C6.32496 16.6667 3.33329 13.6751 3.33329 10.0001C3.33329 6.32508 6.32496 3.33341 9.99996 3.33341C13.675 3.33341 16.6666 6.32508 16.6666 10.0001C16.6666 13.6751 13.675 16.6667 9.99996 16.6667ZM9.99996 1.66675C8.90561 1.66675 7.82198 1.8823 6.81093 2.30109C5.79988 2.71987 4.88122 3.3337 4.1074 4.10752C2.5446 5.67033 1.66663 7.78994 1.66663 10.0001C1.66663 12.2102 2.5446 14.3298 4.1074 15.8926C4.88122 16.6665 5.79988 17.2803 6.81093 17.6991C7.82198 18.1179 8.90561 18.3334 9.99996 18.3334C12.2101 18.3334 14.3297 17.4554 15.8925 15.8926C17.4553 14.3298 18.3333 12.2102 18.3333 10.0001C18.3333 8.90573 18.1177 7.8221 17.699 6.81105C17.2802 5.80001 16.6663 4.88135 15.8925 4.10752C15.1187 3.3337 14.2 2.71987 13.189 2.30109C12.1779 1.8823 11.0943 1.66675 9.99996 1.66675ZM9.16663 14.1667H10.8333V9.16675H9.16663V14.1667Z" fill="#337202" fill-opacity="0.5" />
					</svg>

					<svg className="..5x2:block hidden mr-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.862 11.6719C10.8634 12.1321 10.4915 12.5064 10.0312 12.5078C9.57101 12.5092 9.19675 12.1373 9.1953 11.6771L10.862 11.6719Z" fill="#337202" fill-opacity="0.5" />
						<path d="M8.09885 5.60307L9.17286 4.5223L9.1953 11.6771L10.862 11.6719L10.8395 4.51707L11.9203 5.59108C12.2467 5.91549 12.7744 5.91386 13.0988 5.5874C13.4232 5.26095 13.4216 4.73331 13.0951 4.4089L9.99618 1.32935L6.91665 4.42826L8.09885 5.60307Z" fill="#337202" fill-opacity="0.5" />
						<path d="M6.91665 4.42826C6.59224 4.75471 6.59387 5.28237 6.92033 5.60678C7.24679 5.93119 7.77444 5.92952 8.09885 5.60307L6.91665 4.42826Z" fill="#337202" fill-opacity="0.5" />
						<path d="M3.33329 10C3.33329 9.07956 4.07948 8.33336 4.99996 8.33336C5.4602 8.33336 5.83329 7.96027 5.83329 7.50003C5.83329 7.03979 5.4602 6.6667 4.99996 6.6667C3.15901 6.6667 1.66663 8.15908 1.66663 10V15C1.66663 16.841 3.15901 18.3334 4.99996 18.3334H14.1666C16.4678 18.3334 18.3333 16.4679 18.3333 14.1667V10C18.3333 8.15908 16.8409 6.6667 15 6.6667C14.5397 6.6667 14.1666 7.03979 14.1666 7.50003C14.1666 7.96027 14.5397 8.33336 15 8.33336C15.9204 8.33336 16.6666 9.07956 16.6666 10V14.1667C16.6666 15.5474 15.5473 16.6667 14.1666 16.6667H4.99996C4.07948 16.6667 3.33329 15.9205 3.33329 15V10Z" fill="#337202" fill-opacity="0.5" />
					</svg>

					<svg className="..5x2:block hidden " width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.46689 9.02372C5.35979 9.13546 5.22034 9.2187 5.05855 9.25717C3.59092 9.6062 2.50004 10.9268 2.50004 12.5002C2.50004 14.3411 3.99243 15.8335 5.83337 15.8335C6.15056 15.8335 6.45601 15.7895 6.74464 15.7077C7.18743 15.5821 7.64814 15.8393 7.77366 16.2821C7.89918 16.7249 7.64198 17.1856 7.19919 17.3112C6.76407 17.4345 6.30569 17.5002 5.83337 17.5002C3.07195 17.5002 0.833374 15.2616 0.833374 12.5002C0.833374 10.3126 2.23756 8.45472 4.19301 7.77573C4.47372 4.81564 6.96647 2.5 10 2.5C13.0478 2.5 15.5497 4.83739 15.8109 7.81737C17.706 8.5283 19.0552 10.3558 19.0552 12.5002C19.0552 15.2616 16.8166 17.5002 14.0552 17.5002C13.5829 17.5002 13.1245 17.4345 12.6894 17.3112C12.2466 17.1856 11.9894 16.7249 12.1149 16.2821C12.2404 15.8393 12.7011 15.5821 13.1439 15.7077C13.4326 15.7895 13.738 15.8335 14.0552 15.8335C15.8962 15.8335 17.3885 14.3411 17.3885 12.5002C17.3885 10.9268 16.2977 9.6062 14.83 9.25717C14.4836 9.1748 14.2396 8.88724 14.1962 8.55396C14.177 8.48369 14.1667 8.40971 14.1667 8.33333C14.1667 6.03215 12.3012 4.16667 10 4.16667C7.69886 4.16667 5.83337 6.03215 5.83337 8.33333C5.83337 8.62058 5.68804 8.87388 5.46689 9.02372Z" fill="#337202" fill-opacity="0.5" />
						<path d="M13.5632 11.9131C13.8874 12.2398 13.8853 12.7674 13.5586 13.0916L10.587 16.0401C10.2608 16.3637 9.73417 16.3622 9.40979 16.0368L6.52041 13.1379C6.19551 12.8119 6.19638 12.2843 6.52235 11.9594C6.84833 11.6345 7.37596 11.6353 7.70086 11.9613L9.16671 13.432V8.33333C9.16671 7.8731 9.5398 7.5 10 7.5C10.4603 7.5 10.8334 7.8731 10.8334 8.33333V13.4477L12.3847 11.9084C12.7114 11.5843 13.239 11.5863 13.5632 11.9131Z" fill="#337202" fill-opacity="0.5" />
					</svg>




				</div>}
				{isFullViewVideo && <div className="absolute ..5x2:hidden .4x2:right-10 .2x1.0:right-5 .6x3:right-28 top-100px w-300px right-230px z-10 bg-white p-5">
					<p className="mb-3 font-montserrat font-semibold text-sm">Поделиться файлом</p>
					<div className="px-6 cursor-pointer flex items-center bg-gray-light2 py-10px">
						<svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.083 0.833252C18.1876 0.833252 19.0914 1.69286 19.1619 2.77961L19.1663 2.91659V13.7499C19.1663 14.8545 18.3067 15.7583 17.22 15.8288L17.083 15.8333H16.6663V17.0833C16.6663 18.1878 15.8067 19.0916 14.72 19.1622L14.583 19.1666H2.91634C1.76575 19.1666 0.833008 18.2338 0.833008 17.0833V5.41659C0.833008 4.26599 1.76575 3.33325 2.91634 3.33325H4.16634V2.91659C4.16634 1.81201 5.02594 0.90822 6.11269 0.837683L6.24967 0.833252H17.083ZM14.583 4.99992H2.91634C2.68622 4.99992 2.49967 5.18647 2.49967 5.41659V17.0833C2.49967 17.3134 2.68622 17.4999 2.91634 17.4999H14.583C14.8131 17.4999 14.9997 17.3134 14.9997 17.0833V5.41659C14.9997 5.18647 14.8131 4.99992 14.583 4.99992ZM9.88968 10.1861C10.8329 11.1294 10.8533 12.6509 9.91943 13.5848L9.90801 13.5933L9.89027 13.6125L7.76764 15.5382C6.83374 16.4721 5.31225 16.4517 4.369 15.5085C3.42655 14.566 3.43434 12.9604 4.3794 12.0155L4.90972 11.4991L5.02124 11.3886C5.34664 11.0631 5.87428 11.0631 6.19975 11.3885C6.52522 11.7139 6.52527 12.2415 6.19986 12.567L5.54751 13.2043C5.26118 13.4906 5.25851 14.041 5.54751 14.33C5.82191 14.6044 6.2367 14.6325 6.53883 14.4014L6.61824 14.332L8.74468 12.4008L8.804 12.3335C8.99462 12.0793 8.98871 11.7133 8.77991 11.4427L8.64185 11.2861C8.38766 10.9592 8.41077 10.4865 8.71117 10.1861C9.03661 9.86068 9.56424 9.86068 9.88968 10.1861ZM17.083 2.49992H6.24967C6.04512 2.49992 5.875 2.64731 5.83972 2.84169L5.83301 2.91659V3.33325H14.583C15.6876 3.33325 16.5914 4.19287 16.6619 5.27961L16.6663 5.41659V14.1666H17.083C17.2876 14.1666 17.4577 14.0192 17.493 13.8248L17.4997 13.7499V2.91659C17.4997 2.71203 17.3523 2.54191 17.1579 2.50663L17.083 2.49992ZM12.6974 6.77387C13.6029 7.67938 13.658 9.11779 12.8494 10.0425L11.948 10.9982C11.632 11.3328 11.1046 11.348 10.77 11.032C10.4611 10.7403 10.4244 10.2685 10.6692 9.93441L10.7362 9.85395L11.5487 8.99402C11.8245 8.71817 11.8183 8.25173 11.5189 7.95238C11.2445 7.67798 10.8297 7.64987 10.5591 7.85035L10.489 7.91068L8.44106 10.0435C8.42967 10.0607 8.41758 10.0775 8.40479 10.094L8.33547 10.1725C8.19284 10.3151 8.12222 10.5102 8.13615 10.7164C8.14612 10.8638 8.19869 11.0058 8.28976 11.1272L8.36522 11.2141C8.69066 11.5396 8.69066 12.0672 8.36522 12.3926C8.03979 12.7181 7.51215 12.7181 7.18671 12.3926C6.76224 11.9682 6.5128 11.4128 6.47328 10.8289C6.43432 10.252 6.60258 9.68379 6.95292 9.2267C6.97073 9.1942 6.99123 9.16229 7.01414 9.13158L7.08187 9.0517L9.29879 6.74412C10.2327 5.81023 11.7542 5.83062 12.6974 6.77387Z" fill="#337202" />
						</svg>
						<p className="font-noto-sans text-13px">https://tiande.ru/frt56ugr5..</p>


					</div>
				</div>}
				{isFullViewVideo && <div className="absolute ..5x2:hidden .4x2:right-10 .2x1.0:right-5 .6x3:right-28 top-272px w-300px right-230px z-10 bg-white p-5">
					<p className="mb-3 font-montserrat font-semibold text-sm">Поделиться файлом</p>
					<div className="px-6 cursor-pointer flex items-center border border-stroke py-10px">
						<svg className="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.5003 5.83333L7.50033 15.8333L2.91699 11.25L4.09199 10.075L7.50033 13.475L16.3253 4.65833L17.5003 5.83333Z" fill="#337202" />
						</svg>

						<p className="font-noto-sans text-13px">Ссылка скопирована</p>


					</div>
				</div>}
				{isFullView && <div className="p-5 ..5x2:p-3 .6x3:right-28 ..5x2:left-3 ..5x2:right-auto  ..5x2:top-62px bg-white rounded-xl w-250px absolute top-100px right-230px z-10">
					<p className="font-montserrat mb-14px ..5x2:text-11px ..5x2:mb-2 text-sm">Имя: <span className="font-montserrat ..5x2:font-medium font-semibold ">{name}</span></p>
					<p className="font-montserrat mb-14px ..5x2:text-11px ..5x2:mb-2 text-sm">Размер: <span className="font-montserrat ..5x2:font-medium font-semibold ">{size}</span></p>
					<p className="font-montserrat mb-14px ..5x2:text-11px ..5x2:mb-2 text-sm">Загружен: <span className="font-montserrat ..5x2:font-medium font-semibold ">{upload}</span></p>
					<p className="font-montserrat ..5x2:text-11px  text-sm">Скачиваний: <span className="font-montserrat ..5x2:font-medium font-semibold ">{download}</span></p>

				</div>
				}


				<div className="relative">
					<div className={`absolute ..5x2:right-1/2 ..7x001:bottom-10 w-20 ability1000  ..5x2:w-20 ..5x2:bg-white-80pe ..5x2:text-13px ..5x2:text-black .6x3:right-460px .5x01:right-390px .2x1:right-180px right-531px text-white text-base bottom-0 flex justify-center items-center px-4 font-montserrat font-semibold z-10 bg-black-70pe h-8  ${isFullView || isFullViewVideo ? 'bottom-9 -translate-x-24 ..5x2:rounded-2xl .2x00:translate-x-0 ..5x2:!translate-x-50% .2x00:mr-0 -mr-1 z-20' : ""}`}>
						{currentSlide} / {allSlides}
					</div>
					{isFullView || isFullViewVideo ? <Swiper onSwiper={(arg) => setAllSlides(arg.imagesLoaded / 2)} onSlideChange={(arg) => setCurrentSlide(arg.snapIndex + 1)} ref={slider} slidesPerView={1}  >

						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
						<SwiperSlide className={`flex justify-center mt-60px  ${isFullView || isFullViewVideo ? '..5x2:flex  ..5x2:mt-47px ..5x2:!w-full ..5x2:items-center ..5x2:justify-center' : ""} ..5x2:mt-100px `}>

							<div className={` ${isFullView || isFullViewVideo ? '..5x2:flex  items-center justify-center ..5x2:!w-full ..5x2:!h-full' : "..5x2:!w-379px ..5x2:!h-379px "}   relative`}>
								{isFullViewVideo && <div className="absolute left-18px top-18px z-10 flex items-center">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.07178C7.3094 4.89315 7.6906 4.89315 8 5.07178L18.5 11.134C18.8094 11.3126 19 11.6427 19 12C19 12.3573 18.8094 12.6874 18.5 12.866L8 18.9282C7.6906 19.1069 7.3094 19.1069 7 18.9282C6.6906 18.7496 6.5 18.4195 6.5 18.0622V5.93781C6.5 5.58054 6.6906 5.25041 7 5.07178ZM8.5 7.66986V16.3302L16 12L8.5 7.66986Z" fill="white" />
									</svg>

									<p className="font-montserrat mt-0.5 font-medium text-white">00:20</p>
								</div>}
								{isFullViewVideo && <div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center">
									<svg className="..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M51.8187 41.1048C52.6625 40.6177 53.7022 40.6177 54.546 41.1048L83.1824 57.6381C84.0262 58.1253 84.546 59.0256 84.546 60C84.546 60.9744 84.0262 61.8747 83.1824 62.3619L54.546 78.8952C53.7022 79.3823 52.6625 79.3823 51.8187 78.8952C50.9749 78.408 50.4551 77.5076 50.4551 76.5333V43.4667C50.4551 42.4924 50.9749 41.592 51.8187 41.1048ZM55.9096 48.1905V71.8095L76.3642 60L55.9096 48.1905Z" fill="white" />
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
									</svg>
									<svg className="ml-30px ..7x11:h-20 ..7x11:w-20" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="60" cy="60" r="59.5" stroke="white" stroke-opacity="0.8" />
										<rect x="42.4092" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
										<rect x="64.2266" y="45.1364" width="13.3636" height="29.7273" rx="2.5" stroke="white" stroke-width="3" />
									</svg>

								</div>}
								<Image src={fullViewOne} />
							</div>




						</SwiperSlide>
					</Swiper> : <Swiper onSwiper={(arg) => setAllSlides(arg.imagesLoaded / 2)} onSlideChange={(arg) => setCurrentSlide(arg.snapIndex + 1)} ref={slider} slidesPerView={1} className=' '  >

						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
					</Swiper >}

				</div >

				<button onClick={prevSlide} className='..5x2:hidden .4x2:left-28  absolute  file:placeholder: transition-all rounded-2xl    left-246px     top-460px   z-10'>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.5 17.725L10.7518 12L16.5 6.2625L14.7304 4.5L7.2 12L14.7304 19.5L16.5 17.725Z" fill={`${false ? 'white' : "black"}`} fillOpacity="0.7" />
					</svg>
				</button>
				<button onClick={nextSlide} className='..5x2:hidden .4x2:right-28    absolute     transition-all rounded-2xl right-246px   top-460px z-10'>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.5 17.725L13.2482 12L7.5 6.2625L9.26964 4.5L16.8 12L9.26964 19.5L7.5 17.725Z" fill={`${false ? 'white' : "black"}`} fillOpacity="0.7" />
					</svg>

				</button>

				<div className={`absolute   left-0 z-10  flex justify-center items-center right-0 bottom-0 bg-gray-light2 h-120px`}>

					{imagesDots.map((image, i) => <div key={i} onClick={() => slider.current.swiper.slideTo(i)} className={`px-1.5 relative w-104px h-24 cursor-pointer ${i === currentSlide - 1 ? 'border-t-4 h-28 border-primary pt-3 -mt-4' : ""}`}>
						<Image src={image} />
						{isFullViewVideo && <div className={`absolute flex items-center justify-center left-0 right-0 bottom-0 top-0 z-10 ${i === currentSlide - 1 ? '-mb-3' : ""}`}>
							<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M19 15.0718C19.3094 14.8931 19.6906 14.8931 20 15.0718L30.5 21.134C30.8094 21.3126 31 21.6427 31 22C31 22.3573 30.8094 22.6874 30.5 22.866L20 28.9282C19.6906 29.1069 19.3094 29.1069 19 28.9282C18.6906 28.7496 18.5 28.4195 18.5 28.0622V15.9378C18.5 15.5805 18.6906 15.2504 19 15.0718ZM20.5 17.6699V26.3302L28 22L20.5 17.6699Z" fill="white" />
								<circle cx="22" cy="22" r="21.5" stroke="white" stroke-opacity="0.8" />
							</svg>

						</div>}

					</div>)}



				</div>
			</div >
		</section >
	)
}
export default ViewPhoto