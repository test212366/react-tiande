import Image from 'next/image';
import React from 'react';
import * as icons from '../../images/constsIcons';
import SearchWindow from '../SearchWindow/SearchWIndow';

export default function Search({
	scrollMenu,
	setIsHover,
	setShowSearch,
	setCloseHover,
	isHoverBasket,
}) {
	const show = () => setShowSearch(true);

	return (
		<article className="relative  ..5x2:mt-1 ..6x03:mt-0 -mt-0.5 cursor-pointer .5x01:pr-2  pr-86px ..5x2:flex ..5x1:pl-5">
			<div
				className="..5x2:hidden opacity-20"
			// onClick={show}
			>
				<svg
					width="26"
					height="26"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3.75 11C3.75 6.99594 6.99594 3.75 11 3.75C15.0041 3.75 18.25 6.99594 18.25 11C18.25 15.0041 15.0041 18.25 11 18.25C6.99594 18.25 3.75 15.0041 3.75 11ZM11 2.25C6.16751 2.25 2.25 6.16751 2.25 11C2.25 15.8325 6.16751 19.75 11 19.75C13.1462 19.75 15.112 18.9773 16.6342 17.6949L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L17.6949 16.6342C18.9773 15.112 19.75 13.1462 19.75 11C19.75 6.16751 15.8325 2.25 11 2.25Z"
						fill="black"
					/>
				</svg>
			</div>
			<div
				className="..5x2:block hidden  "
			//  onClick={show}
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3.75 11C3.75 6.99594 6.99594 3.75 11 3.75C15.0041 3.75 18.25 6.99594 18.25 11C18.25 15.0041 15.0041 18.25 11 18.25C6.99594 18.25 3.75 15.0041 3.75 11ZM11 2.25C6.16751 2.25 2.25 6.16751 2.25 11C2.25 15.8325 6.16751 19.75 11 19.75C13.1462 19.75 15.112 18.9773 16.6342 17.6949L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L17.6949 16.6342C18.9773 15.112 19.75 13.1462 19.75 11C19.75 6.16751 15.8325 2.25 11 2.25Z"
						fill="#DBDCDA"
					/>
				</svg>
			</div>

			<svg
				className="hidden ..5x2:ml-4 ..5x2:block ..6x6:h-6 ..6x6:w-6"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11.8621 6.72414C12.8905 6.72414 13.7241 5.89046 13.7241 4.86207C13.7241 3.83368 12.8905 3 11.8621 3C10.8337 3 10 3.83368 10 4.86207C10 5.89046 10.8337 6.72414 11.8621 6.72414Z"
					fill="#DBDCDA"
				/>
				<path
					d="M11.8621 14.1724C12.8905 14.1724 13.7241 13.3387 13.7241 12.3103C13.7241 11.282 12.8905 10.4483 11.8621 10.4483C10.8337 10.4483 10 11.282 10 12.3103C10 13.3387 10.8337 14.1724 11.8621 14.1724Z"
					fill="#DBDCDA"
				/>
				<path
					d="M11.8621 21C12.8905 21 13.7241 20.1663 13.7241 19.1379C13.7241 18.1095 12.8905 17.2759 11.8621 17.2759C10.8337 17.2759 10 18.1095 10 19.1379C10 20.1663 10.8337 21 11.8621 21Z"
					fill="#DBDCDA"
				/>
			</svg>
			<SearchWindow
				setCloseHover={setCloseHover}
				setIsHover={setIsHover}
				isHoverBasket={isHoverBasket}
				scrollMenu={scrollMenu}
			/>
		</article>
	);
}
