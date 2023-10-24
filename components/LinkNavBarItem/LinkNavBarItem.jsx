import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

import * as icons from '../../images/constsIcons';

import CatalDropdown from '../catalDropdown/CatalDropdown';
import DropDownItem from '../DropDownItem/DropDownItem';

export default function LinkHeaderItem({ title, show, setShow, scrollMenu }) {
	const [showL, setShowL] = useState(false);

	const setShowDropdown = () => {

		setShowL((showL = !showL));

		if (title === 'Каталог')

			setShow(
				(show = {
					showCompany: false,
					showBis: false,
					showBuyers: false,
					showLoal: false,
					showCatal: true,
				})
			);

		if (title === 'О компании')
			setShow(
				(show = {
					showCatal: false,
					showBis: false,
					showBuyers: false,
					showLoal: false,
					showCompany: true,
				})
			);

		if (title === 'Бизнес-возможности')
			setShow(
				(show = {
					showCatal: false,
					showCompany: false,
					showBuyers: false,
					showLoal: false,
					showBis: true,
				})
			);

		if (title === 'Покупателям')
			setShow(
				(show = {
					showCatal: false,
					showCompany: false,
					showBis: false,
					showLoal: false,
					showBuyers: true,
				})
			);

		if (title === 'Программа лояльности')
			setShow(
				(show = {
					showCatal: false,
					showCompany: false,
					showBis: false,
					showBuyers: false,
					showLoal: true,
				})
			);
	},
		closeDrop = () => {
			setShowL(false);
			setShow({
				showCompany: false,
				showBis: false,
				showBuyers: false,
				showLoal: false,
				showCatal: false,
			});
		};

	return (
		<article
			className={`${title === 'Каталог' ? 'relative' : ''
				} py-6px .2x1:text-xs .3x1:px-2 px-4   hover:rounded-32px transition-all	 hover:bg-gray-light text-black font-montserrat font-medium text-sm`}
		>
			<article
				onMouseLeave={closeDrop}
				onMouseEnter={setShowDropdown}
				className="cursor-pointer hover:text-green-hov flex flex-row items-center"
			>
				<article>{title}</article>

				<article className=" pl-2 ..5x01:pl-0.5 pb-0.5">

					<svg className={`transition-all mt-1 ${showL ? 'activeArrow' : ''}`} width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.88542 3.625L5.5 6.02007L3.10937 3.625L2.375 4.36235L5.5 7.5L8.625 4.36235L7.88542 3.625Z" fill="#337202" />
					</svg>

				</article>
			</article>

			{title === 'Каталог' ? (
				<CatalDropdown show={show} scrollMenu={scrollMenu} showDrop={setShowDropdown} setShow={closeDrop} />
			) : (
				<DropDownItem title={title} scrollMenu={scrollMenu} showDrop={setShowDropdown} show={show} setShow={closeDrop} />
			)}
		</article>
	);
}
