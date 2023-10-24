import Image from "next/image"
import { useState } from "react"

const SearchWindowItem = ({ src, isSearch, access, isProductToDay, isStart, noBorder, oldPriceFr, isPresent, isNew, isHit, promo, text, sale, isFree, price, actions, oldPrice, balls, priceDe, like, counter }) => {
	const [numItems, setNumItem] = useState(1)

	const addItem = () => setNumItem(numItems + 1),
		removeItem = () => {
			if (numItems === 0) return
			setNumItem(numItems - 1)
		}

	return (
		<div className={`bg-white p-4  .2x1:px-1 items-center pr-4 flex relative ${actions ? 'pb-16' : ""}`}>
			{isSearch && <>
				<input className='hidden' id='checkSearchAll' type="checkbox" />
				<label htmlFor="checkSearchAll" className='w-4 h-4 border-gray-deNum cursor-pointer border'></label>

			</>}

			<div className={`w-24 h-24 ${access ? 'opacity-50' : ''}`}>
				<Image src={src} className='pr-7' />
			</div>

			{balls && <div className={` flex items-center bg-white-80pe absolute top-5 left-5 pr-2 ${isSearch ? '!left-11' : ''}`}>
				<svg className='mr-1'
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
						stroke="#337202"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
						stroke="#337202"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8.66667 9.33333L9 5"
						stroke="#337202"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8.66666 9.33333L5.33333 9"
						stroke="#337202"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<p className="text-13px font-montserrat font-medium text-black-70pe">{balls} Б</p>
			</div>}

			<div className={`flex relative .2x1:ml-0  ml-5 ${isSearch ? 'ml-3' : ''}`}>
				<div>
					<div className='flex'>
						{isNew && <small className=" font-noto-sans font-medium text-10px ..6x03:text-9px border px-1.5 py-0.5 ..6x03:py-0 ..6x03:px-1 leading-120% border-gray-quick-silver">
							NEW
						</small>}

						{isHit && <small className={` ${isNew ? '' : "!ml-0"} bg-label-yellow ml-1 text-10px font-noto-sans font-medium text-xs ..6x03:text-9px leading-120% px-2 py-1 ..6x03:px-2 ..6x03:py-0.5`}>
							HIT!
						</small>}

						{isProductToDay && <p className='text-13px text-black ml-1'>Товар дня</p>
						}
					</div>
					<p className={`text-11px text-black-70pe .2x1:w-36 .2x1:text-9px font-montserrat w-48 tracking-widest mt-1 ${isSearch ? 'w-auto' : ''}`}>{text}</p>
					<p className='text-13px font-normal tracking-widest-2px font-montserrat mt-1 text-gray-quick-silver'>Артикул: 20115</p>
				</div>



				<div className={`ml-14  ${isSearch ? '!ml-5' : ''}`}>
					<div className='flex items-center mb-1'>
						{sale && <small className="h-5 flex items-center font-noto-sans bg-label-pink-2 border-2 border-label-pink-2 text-white  font-medium ..6x03:text-9px text-xs leading-120% ..6x03:px-1 ..6x03:py-0 px-1 py-0.5 ">
							-{sale}%
						</small>}
						{price && <p className={`text-13px ${price === '0.00' ? '!mt-0.5' : ''} ${sale || oldPriceFr ? '' : "!text-black !ml-0"} ${oldPriceFr ? 'ml-0' : ''} text-13px !font-montserrat text-label-pink-2 ml-1 mt-1`}>{price} ₽ </p>
						}
						{oldPriceFr && <p className=" text-center ml-2 mt-0.5 !font-montserrat text-13px mr-2 text-gray-quick-silver line-through">
							{oldPriceFr} ₽

						</p>}

					</div>
					<div className={`flex flex-row items-center ${isFree ? '!flex-col !items-start' : ''}`}>
						{oldPrice && <p className="text-center font-montserrat text-sm mr-2 text-gray-quick-silver line-through">
							{oldPrice} ₽

						</p>}

						{priceDe && <p className="  border-gray-light2  text-13px font-montserrat  leading-100% text-label-orange font-medium   whitespace-nowrap   ">
							{priceDe} <span className='font-lora'>De</span>
						</p>}
						{isFree && <p className="text-center text-sm mr-2 text-label-pink-2 ">
							Бесплатно
						</p>}
						{isPresent && <p className="text-center text-11px flex items-center mr-2 font-montserrat text-label-orange ">
							<svg className="mr-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.76527 7.03336H1.75V5.00281C1.75 4.49518 2.25764 3.98754 2.76527 3.98754H11.9027C12.4104 3.98754 12.918 4.49518 12.918 5.00281V7.03336H11.9027M2.76527 7.03336V12.1097C2.76527 12.6174 3.27291 13.125 3.78055 13.125H10.8875C11.3951 13.125 11.9027 12.6174 11.9027 12.1097V7.03336M2.76527 7.03336H11.9027M7.334 3.98754L7.334 13.125M7.334 3.98754C6.65715 2.54924 5.25269 0.23102 4.03436 1.44935C2.81603 2.66768 5.55728 3.98754 7.334 3.98754ZM7.334 3.98754C7.334 1.70322 9.61836 0.180271 10.6336 1.19552C11.9027 2.46459 9.36455 3.98748 7.334 3.98754Z" stroke="#FF7F37" strokeLinecap="round" strokeLinejoin="round" />
							</svg>

							Подарок
						</p>}

						{promo && <div className="flex promoH relative bg-label-bg rounded-xl items-center px-1.5 mt-3 h-5">
							<svg className="mr-0.5" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.41699 5.74984H7.58366V4.58317H6.41699V5.74984ZM7.00033 12.1665C4.42783 12.1665 2.33366 10.0723 2.33366 7.49984C2.33366 4.92734 4.42783 2.83317 7.00033 2.83317C9.57283 2.83317 11.667 4.92734 11.667 7.49984C11.667 10.0723 9.57283 12.1665 7.00033 12.1665ZM7.00033 1.6665C6.23428 1.6665 5.47574 1.81739 4.76801 2.11054C4.06027 2.40369 3.41721 2.83337 2.87554 3.37505C1.78157 4.46901 1.16699 5.95274 1.16699 7.49984C1.16699 9.04693 1.78157 10.5307 2.87554 11.6246C3.41721 12.1663 4.06027 12.596 4.76801 12.8891C5.47574 13.1823 6.23428 13.3332 7.00033 13.3332C8.54742 13.3332 10.0312 12.7186 11.1251 11.6246C12.2191 10.5307 12.8337 9.04693 12.8337 7.49984C12.8337 6.73379 12.6828 5.97525 12.3896 5.26752C12.0965 4.55978 11.6668 3.91672 11.1251 3.37505C10.5834 2.83337 9.94038 2.40369 9.23265 2.11054C8.52491 1.81739 7.76637 1.6665 7.00033 1.6665ZM6.41699 10.4165H7.58366V6.9165H6.41699V10.4165Z" fill="#337202" />
							</svg>
							<p className="text-11px .4x2:text-7px text-black-70pe font-montserrat font-medium">Промокод: УСПЕХ1000</p>

							<section className="absolute hidden .4x2:text-9px p-1 right-0 bottom-7 text-10px font-montserrat text-white bg-black-80pe">
								<div className="relative">
									Подарок можно получить
									только при оплате онлайн
									в ПВЗ или курьером
									<div className="rotSearchHover w-2 h-2 bg-black-70pe left-1/2 ability absolute -bottom-2"></div>
								</div>

							</section>

						</div>
						}
					</div>
					<div>
						{isStart && <p className=".4x2:text-9px text-center px-2 mt-2 rounded-xl text-11px text-black-70pe   bg-label-bg font-medium   flex items-center mr-2 font-montserrat   ">
							<svg className="mr-1" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.31962 2.11572C8.34954 2.10226 8.37734 2.13812 8.35684 2.16374L6.05855 5.03661C5.99641 5.11429 6.02171 5.22949 6.11068 5.27398L7.22407 5.83067C7.45968 5.94848 7.45277 6.28705 7.21255 6.39515L1.681 8.88435C1.65107 8.89782 1.62327 8.86196 1.64377 8.83633L3.94207 5.96346C4.00421 5.88579 3.97891 5.77059 3.88993 5.7261L2.77655 5.16941C2.54093 5.0516 2.54784 4.71302 2.78806 4.60492L8.31962 2.11572Z" stroke="black" strokeOpacity="0.7" strokeLinecap="round" />
							</svg>

							Выгодный START
						</p>}
						{access && <small className='absolute flex items-center -bottom-3.5 text-13px font-montserrat text-gray-quick-silver'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 6L6 12M6 6L12 12" stroke="#F14155" stroke-width="1.5" stroke-linecap="round" />
						</svg>
							Нет в наличии</small>}

						<div className={`flex mt-3 ${access ? 'opacity-50' : ''} ${promo ? '!mt-1' : ''}`}>
							{counter ? <div className='border w-66px justify-between  h-8 px-0.5 flex items-center border-gray'>
								<svg onClick={removeItem} className='mr-1.5' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.25 9.75H3.75V8.25H14.25V9.75Z" fill="#949792" />
								</svg>
								<p className='text-sm w-1 -ml-0.5 font-semibold font-montserrat'>{numItems}</p>
								<svg onClick={addItem} className='ml-1.5' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.25 9.75H9.75V14.25H8.25V9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75Z" fill="black" fillOpacity="0.7" />
								</svg>
							</div> : ''}
							{isSearch ? <div className='flex items-center'>
								<svg className='absolute right-0 top-0' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3.68835 10.7893L8.16221 15.6052C9.15456 16.6734 10.8454 16.6734 11.8378 15.6052L16.3117 10.7893C17.8961 9.08366 17.8961 6.31832 16.3117 4.6127C14.7272 2.90709 12.1583 2.90709 10.5738 4.6127C10.264 4.94622 9.73604 4.94622 9.42621 4.6127C7.84175 2.90709 5.27282 2.90709 3.68835 4.6127C2.10388 6.31832 2.10388 9.08366 3.68835 10.7893Z" fill="white" stroke="#DBDCDA" />
								</svg>
								<button className="text-xs text-primary px-4 h-8 py-2 ml-6px bg-gray-light2 font-montserrat font-medium ">+ Добавить</button>
							</div> : <div className='flex items-center'>
								{like ? <svg className='ml-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3.68835 10.7893L8.16221 15.6052C9.15456 16.6734 10.8454 16.6734 11.8378 15.6052L16.3117 10.7893C17.8961 9.08366 17.8961 6.31832 16.3117 4.6127C14.7272 2.90709 12.1583 2.90709 10.5738 4.6127C10.264 4.94622 9.73604 4.94622 9.42621 4.6127C7.84175 2.90709 5.27282 2.90709 3.68835 4.6127C2.10388 6.31832 2.10388 9.08366 3.68835 10.7893Z" fill="white" stroke="#DBDCDA" />
								</svg> : ""}

								<svg className={`${!like && !counter && '!ml-0'} ml-3`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.33264 8.8199C4.24329 7.65831 5.16173 6.6665 6.32675 6.6665H13.6739C14.8389 6.6665 15.7574 7.65831 15.668 8.8199L15.1424 15.6532C15.0622 16.6952 14.1933 17.4998 13.1483 17.4998H6.85239C5.80732 17.4998 4.93843 16.6952 4.85828 15.6532L4.33264 8.8199Z" stroke="#DBDCDA" />
									<path d="M16.25 4.1665H3.75" stroke="#DBDCDA" strokeLinecap="round" />
									<path d="M8.33301 2.6665C8.33301 2.11422 8.78072 1.6665 9.33301 1.6665H10.6663C11.2186 1.6665 11.6663 2.11422 11.6663 2.6665V4.1665H8.33301V2.6665Z" stroke="#DBDCDA" />
								</svg>
							</div>}


						</div>
					</div>


				</div>
				{!noBorder && <div className={`transition-all duration-500 bg-gray h-px pr-4 bordSearch absolute -bottom-4 ${actions ? '!-bottom-16' : ""} ${promo ? 'promoWidth' : ''} .5x01:w-full mx-auto`}></div>
				}
			</div>

			{
				actions && <section className="absolute h-6 bottom-4 flex items-center justify-between left-4 right-4 bg-white-BG_FILTER border border-gray-light2 rounded" >
					<div className="flex items-center ml-6px">
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="7" cy="7" r="6.5" stroke="#337202" />
							<path d="M7.72986 3.11084C7.53647 3.11084 7.351 3.18766 7.21426 3.32441C7.07751 3.46115 7.00069 3.64662 7.00069 3.84001C7.00069 4.03339 7.07751 4.21886 7.21426 4.35561C7.351 4.49235 7.53647 4.56917 7.72986 4.56917C7.92324 4.56917 8.10871 4.49235 8.24545 4.35561C8.3822 4.21886 8.45902 4.03339 8.45902 3.84001C8.45902 3.64662 8.3822 3.46115 8.24545 3.32441C8.10871 3.18766 7.92324 3.11084 7.72986 3.11084ZM7.55486 5.42959C6.97638 5.4782 5.39652 6.73723 5.39652 6.73723C5.2993 6.81015 5.32847 6.80528 5.40624 6.9414C5.48402 7.07265 5.4743 7.08237 5.56666 7.01917C5.66388 6.95598 5.8243 6.8539 6.09166 6.68862C7.12222 6.02751 6.25694 7.5539 5.81458 10.1254C5.63958 11.399 6.7868 10.7428 7.08333 10.5483C7.37499 10.3588 8.15763 9.81917 8.23541 9.7657C8.34236 9.69278 8.26458 9.63445 8.18194 9.51292C8.12361 9.43028 8.06527 9.48862 8.06527 9.48862C7.7493 9.69765 7.17083 10.1351 7.09305 9.85806C7.00069 9.58098 7.59374 7.68028 7.91944 6.37265C7.97291 6.06153 8.11874 5.38098 7.55486 5.42959Z" fill="#337202" />
						</svg>
						<p className="font-montserrat ml-1 text-sm text-black-70pe">Товар учавствует в акциях</p>
					</div>
					<svg className="mr-6px" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.8625 4.35L6 7.22409L3.13125 4.35L2.25 5.23482L6 9L9.75 5.23482L8.8625 4.35Z" fill="black" fillOpacity="0.7" />
					</svg>

				</section>
			}

		</div >
	)
}
export default SearchWindowItem