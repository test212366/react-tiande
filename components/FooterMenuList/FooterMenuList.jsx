import React, { useState } from 'react';

export default function FooterMenuList() {
	const [show, setShow] = useState({
		companyShow: false,
		catalShow: false,
		buyersShow: false,
		bisShow: false
	})

	const showCompany = () => {
		if (window.innerWidth > 1250) return
		setShow({
			...show,
			companyShow: !show.companyShow
		})
	},
		showCatal = () => {
			if (window.innerWidth > 1250) return
			setShow({
				...show,
				catalShow: !show.catalShow
			})
		},
		showbuyers = () => {
			if (window.innerWidth > 1250) return
			setShow({
				...show,
				buyersShow: !show.buyersShow
			})
		},
		showbis = () => {
			if (window.innerWidth > 1250) return
			setShow({
				...show,
				bisShow: !show.bisShow
			})
		}


	return (
		<div className="flex flex-row .2x1.0:flex-col .2x1.0:w-full justify-around w-7/12">
			<div className="flex  flex-col .2x1.0:w-full .2x1.0:h-auto justify-between .3x1:h-56 h-272px">
				<div onClick={showCompany} className={`${show.companyShow ? '!text-primary' : ''} .2x1.0:text-gray-quick-silver font-semibold text-base .3x1:text-sm .2x1.0:border-b transition-all .2x1.0:pb-3 .2x1.0:border-gray-light2 .2x1.0:flex .2x1.0:items-center .2x1.0:justify-between`}>Компания <svg className={`hidden .2x1.0:block transition-all ${show.companyShow ? 'activeArrow' : ""}`} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.8625 0.35L4 3.22409L1.13125 0.35L0.25 1.23482L4 5L7.75 1.23482L6.8625 0.35Z" fill={`${show.companyShow ? '#337202' : '#949792'}`} />
				</svg>
				</div>
				<div className={`${show.companyShow ? '!h-36' : "hiddenCustomFoot"} mt-7 .2x1.0:h-auto .3x1:h-56 h-222px transition-all .2x1.0:mt-0 flex flex-col justify-between .2x1.0:justify-start .2x1.0:mb-5 `}>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px  .2x1.0:mt-3 .2x1.0:font-medium">О бренде</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px   .2x1.0:mt-3 .2x1.0:font-medium">Новости</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px  .2x1.0:mt-3 .2x1.0:font-medium">Instashop</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px  .2x1.0:mt-3 .2x1.0:font-medium">Контакты</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px   .2x1.0:mt-3 .2x1.0:font-medium">
						Сервисные центры
					</div>
				</div>

			</div>
			<div className="flex  flex-col .2x1.0:w-full .2x1.0:h-auto justify-between .3x1:h-56 h-272px">
				<div onClick={showCatal} className={`${show.catalShow ? '!text-primary' : ''}  .2x1.0:text-gray-quick-silver font-semibold text-base .3x1:text-sm .2x1.0:border-b  .2x1.0:pb-3 .2x1.0:border-gray-light2 .2x1.0:flex .2x1.0:items-center .2x1.0:justify-between .2x1.0:mt-3 transition-all`}>Каталог <svg className={`hidden .2x1.0:block transition-all ${show.catalShow ? 'activeArrow' : ""}`} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.8625 0.35L4 3.22409L1.13125 0.35L0.25 1.23482L4 5L7.75 1.23482L6.8625 0.35Z" fill={`${show.catalShow ? '#337202' : '#949792'}`} />
				</svg>
				</div>
				<div className={`${show.catalShow ? '!h-36' : "hiddenCustomFoot"} .2x1.0:h-auto .3x1:h-56 h-222px mt-7 transition-all .2x1.0:mt-0 flex flex-col justify-between .2x1.0:justify-start .2x1.0:mb-5   `}>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px   .2x1.0:mt-3 .2x1.0:font-medium">Акции</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px   .2x1.0:mt-3 .2x1.0:font-medium">Наборы</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px   .2x1.0:mt-3 .2x1.0:font-medium">Новинки</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px   .2x1.0:mt-3 .2x1.0:font-medium">Хиты продаж</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px  .2x1.0:mt-3 .2x1.0:font-medium">
						Программы здоровья
					</div>
				</div>

			</div>
			<div className={` flex   flex-col .2x1.0:w-full .2x1.0:h-auto justify-between .3x1:h-56 h-272px`}>
				<div onClick={showbuyers} className={`${show.buyersShow ? '!text-primary' : ''}  transition-all .2x1.0:text-gray-quick-silver font-semibold text-base .3x1:text-sm .2x1.0:border-b  .2x1.0:pb-3 .2x1.0:border-gray-light2 .2x1.0:flex .2x1.0:items-center .2x1.0:justify-between .2x1.0:mt-3`}>Покупателям <svg className={`hidden .2x1.0:block transition-all ${show.buyersShow ? 'activeArrow' : ""}`} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.8625 0.35L4 3.22409L1.13125 0.35L0.25 1.23482L4 5L7.75 1.23482L6.8625 0.35Z" fill={`${show.buyersShow ? '#337202' : '#949792'}`} />
				</svg>
				</div>
				<div className={`${show.buyersShow ? '!h-36' : "hiddenCustomFoot"}  .2x1.0:h-auto .3x1:h-56 h-222px mt-7 transition-all .2x1.0:mt-0 flex flex-col justify-between .2x1.0:justify-start .2x1.0:mb-5`}>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px  .2x1.0:mt-3 .2x1.0:font-medium   ">
						Оплата, доставка, возврат
					</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px .2x1.0:mt-3 .2x1.0:font-medium   ">
						Обратная связь
					</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px .2x1.0:mt-3 .2x1.0:font-medium   ">Online-бонус</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px .2x1.0:mt-3 .2x1.0:font-medium   ">
						Личный кабинет
					</div>
				</div>

			</div>
			<div className="flex flex-col .2x1.0:w-full .2x1.0:h-auto justify-between .3x1:h-56 h-272px">
				<div onClick={showbis} className={`${show.bisShow ? '!text-primary' : ''}  transition-all .2x1.0:text-gray-quick-silver font-semibold text-base .3x1:text-sm .2x1.0:border-b  .2x1.0:pb-3 .2x1.0:border-gray-light2 .2x1.0:flex .2x1.0:items-center .2x1.0:justify-between .2x1.0:mt-3`}>Бизнес-возможности <svg className={`hidden .2x1.0:block transition-all ${show.bisShow ? 'activeArrow' : ""}`} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.8625 0.35L4 3.22409L1.13125 0.35L0.25 1.23482L4 5L7.75 1.23482L6.8625 0.35Z" fill={`${show.bisShow ? '#337202' : '#949792'}`} />
				</svg>
				</div>
				<div className={`${show.bisShow ? '!h-36' : "hiddenCustomFoot"} mt-7 .2x1.0:h-auto .3x1:h-56 h-222px transition-all .2x1.0:mt-0 flex flex-col justify-between .2x1.0:justify-start .2x1.0:mb-5  `}>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px .2x1.0:mt-3 .2x1.0:font-medium   ">
						Успех, деньги, карьера
					</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px .2x1.0:mt-3 .2x1.0:font-medium  ">
						Online-возможности
					</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px .2x1.0:mt-3 .2x1.0:font-medium ">
						Управление и развитие
					</div>
					<div className=".2x1.0:text-gray-quick-silver font-normal text-sm text-black-70pe .3x1:text-13px .2x1.0:mt-3 .2x1.0:font-medium ">
						Присоединяйтесь
					</div>
				</div>

			</div>
		</div>
	);
}
