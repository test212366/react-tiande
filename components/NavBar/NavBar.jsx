import React, { useState } from 'react';
import LinksHeader from '../LinksNavBar/LinksNavBar';
import Logo from '../ui/Logo/Logo';
import Search from '../Search/Search';
import InputItemSearch from '../InputItemSearch/InputItemSearch';

export default function NavBar({
	scrollMenu,
	showSearch,
	setShowSearch,
	showBurger,
	setShowBurger,
	logIn,
	boolLogIn,
}) {
	const [isHoverBasket, setIsHoverBasket] = useState(false);

	const setIsHover = (isOverlay) => {
		if (isOverlay) return setIsHoverBasket(true);
		if (isHoverBasket) setIsHoverBasket(false);
		else setIsHoverBasket(true);
	},
		setCloseHover = () => {
			// console.log(32132);
			setIsHoverBasket(false);
		};

	return (
		<>
			<nav
				className={`h-100px transition-custom ${scrollMenu ? '!h-80px' : ''
					}   flex-nowrap  ..5x2:h-20 ..6x3:h-11 bg-white relative flex flex-row justify-between items-center`}
			>
				<svg
					onClick={() => setShowBurger(!showBurger)}
					className="hidden   ..7x1:ml-3 ..6x6:h-6 ..6x6:w-6 ..5x2:block ml-5 cursor-pointer"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 3.81818C2 2.81403 2.81403 2 3.81818 2H9.27273C10.2769 2 11.0909 2.81403 11.0909 3.81818V9.27273C11.0909 10.2769 10.2769 11.0909 9.27273 11.0909H3.81818C2.81403 11.0909 2 10.2769 2 9.27273V3.81818ZM9.27273 3.81818H3.81818V9.27273H9.27273V3.81818ZM12.9091 3.81818C12.9091 2.81403 13.7231 2 14.7273 2H20.1818C21.186 2 22 2.81403 22 3.81818V9.27273C22 10.2769 21.186 11.0909 20.1818 11.0909H14.7273C13.7231 11.0909 12.9091 10.2769 12.9091 9.27273V3.81818ZM20.1818 3.81818H14.7273V9.27273H20.1818V3.81818ZM2 14.7273C2 13.7231 2.81403 12.9091 3.81818 12.9091H9.27273C10.2769 12.9091 11.0909 13.7231 11.0909 14.7273V20.1818C11.0909 21.186 10.2769 22 9.27273 22H3.81818C2.81403 22 2 21.186 2 20.1818V14.7273ZM9.27273 14.7273H3.81818V20.1818H9.27273V14.7273ZM12.9091 13.8182C12.9091 13.3161 13.3161 12.9091 13.8182 12.9091H21.0909C21.593 12.9091 22 13.3161 22 13.8182C22 14.3203 21.593 14.7273 21.0909 14.7273H13.8182C13.3161 14.7273 12.9091 14.3203 12.9091 13.8182ZM16.5455 17.4545C16.5455 16.9525 16.9525 16.5455 17.4545 16.5455H21.0909C21.593 16.5455 22 16.9525 22 17.4545C22 17.9566 21.593 18.3636 21.0909 18.3636H17.4545C16.9525 18.3636 16.5455 17.9566 16.5455 17.4545ZM12.9091 21.0909C12.9091 20.5888 13.3161 20.1818 13.8182 20.1818H21.0909C21.593 20.1818 22 20.5888 22 21.0909C22 21.593 21.593 22 21.0909 22H13.8182C13.3161 22 12.9091 21.593 12.9091 21.0909Z"
						fill="#DBDCDA"
						stroke="white"
						strokeWidth="0.4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<Logo styles="top-5 ..6x3:mt-0 ..5x2:-mt-1 ..6x3:pl-0 pl-20 ..6x3:top-2 .5x01:pl-2 ..5x1:flex-1 headerAbility ..5x2:absolute " />

				{showSearch ? (
					<InputItemSearch
						setCloseHover={setCloseHover}
						scrollMenu={scrollMenu}
						setShowSearch={setShowSearch}
					/>
				) : (
					<>
						<LinksHeader
							setCloseHover={setCloseHover}
							isHoverBasket={isHoverBasket}
							setIsHover={setIsHover}
							scrollMenu={scrollMenu}
						/>

						{scrollMenu && (
							<>
								{boolLogIn ? (
									<div className="absolute right-32">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z"
												stroke="black"
												stroke-width="1.5"
											/>
											<path
												d="M5 19.5C5 15.9101 7.91015 13 11.5 13H12.5C16.0899 13 19 15.9101 19 19.5V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V19.5Z"
												stroke="black"
												stroke-width="1.5"
											/>
										</svg>
									</div>
								) : (
									<div className="absolute right-32 flex">
										<div
											onClick={logIn}
											className="flex justify-center items-center w-92px h-10 text-13px font-normal font-montserrat text-black-70pe border border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black"
										>
											<svg
												width="20"
												height="21"
												viewBox="0 0 20 21"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M10.8333 2.1665C8.53211 2.1665 6.66663 4.03198 6.66663 6.33317C6.66663 6.79341 7.03972 7.1665 7.49996 7.1665C7.9602 7.1665 8.33329 6.79341 8.33329 6.33317C8.33329 4.95246 9.45258 3.83317 10.8333 3.83317H14.1666C15.5473 3.83317 16.6666 4.95246 16.6666 6.33317V14.6665C16.6666 16.0472 15.5473 17.1665 14.1666 17.1665H10.8333C9.45258 17.1665 8.33329 16.0472 8.33329 14.6665C8.33329 14.2063 7.9602 13.8332 7.49996 13.8332C7.03972 13.8332 6.66663 14.2063 6.66663 14.6665C6.66663 16.9677 8.53211 18.8332 10.8333 18.8332H14.1666C16.4678 18.8332 18.3333 16.9677 18.3333 14.6665V6.33317C18.3333 4.03198 16.4678 2.1665 14.1666 2.1665H10.8333Z"
													fill="black"
												/>
												<path
													d="M2.49996 9.6665C2.03972 9.6665 1.66663 10.0396 1.66663 10.4998C1.66663 10.9601 2.03972 11.3332 2.49996 11.3332H9.40169C9.32751 11.4246 9.25643 11.5134 9.1892 11.5982C8.98462 11.8562 8.81142 12.0828 8.68912 12.2453C8.62792 12.3265 8.57932 12.392 8.54575 12.4374L8.50695 12.4902L8.49655 12.5044L8.49287 12.5094C8.49283 12.5095 8.49245 12.51 9.16663 12.9998L8.49287 12.5094C8.22235 12.8818 8.30447 13.4035 8.67681 13.674C9.04913 13.9445 9.57023 13.862 9.84076 13.4897L9.84312 13.4865L9.85165 13.4748L9.88645 13.4275C9.91724 13.3858 9.96275 13.3246 10.0206 13.2478C10.1364 13.094 10.3009 12.8787 10.4952 12.6337C10.8879 12.1384 11.3852 11.5431 11.8392 11.0891L12.4285 10.4998L11.8392 9.91058C11.3852 9.45659 10.8879 8.86125 10.4952 8.36598C10.3009 8.12102 10.1364 7.90569 10.0206 7.75192C9.96275 7.67511 9.91724 7.61385 9.88645 7.57216L9.85165 7.52485L9.84312 7.51319L9.84117 7.51052C9.57064 7.13822 9.04913 7.05515 8.67681 7.32566C8.30447 7.59618 8.22192 8.11732 8.49245 8.48966L9.16663 7.99984C8.49245 8.48966 8.49241 8.48961 8.49245 8.48966L8.49369 8.49138L8.49655 8.49529L8.50695 8.50952L8.54575 8.56227C8.57932 8.60772 8.62792 8.67313 8.68912 8.75442C8.81142 8.91685 8.98462 9.14346 9.1892 9.40147C9.25643 9.48626 9.32751 9.57503 9.40169 9.6665H2.49996Z"
													fill="black"
												/>
											</svg>

											<span className=".1x1:text-xs .1x1:ml-2 ml-2">Вход</span>
										</div>
										<div className="flex justify-center items-center w-146px h-10 text-13px font-normal font-montserrat text-black-70pe border border-l-0 border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
											<svg
												width="20"
												height="21"
												viewBox="0 0 20 21"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12.5 6.3335C12.5 7.71421 11.3807 8.8335 9.99996 8.8335C8.61925 8.8335 7.49996 7.71421 7.49996 6.3335C7.49996 4.95278 8.61925 3.8335 9.99996 3.8335C11.3807 3.8335 12.5 4.95278 12.5 6.3335Z"
													stroke="black"
													strokeWidth="1.5"
												/>
												<path
													d="M4.16663 16.7502C4.16663 13.7586 6.59175 11.3335 9.58329 11.3335H10.4166C13.4082 11.3335 15.8333 13.7586 15.8333 16.7502V17.1668C15.8333 17.6271 15.4602 18.0002 15 18.0002H4.99996C4.53972 18.0002 4.16663 17.6271 4.16663 17.1668V16.7502Z"
													stroke="black"
													strokeWidth="1.5"
												/>
											</svg>

											<span className=".1x1:text-xs .1x1:ml-2 ml-2">
												Регистрация
											</span>
										</div>
									</div>
								)}
							</>
						)}

						<Search
							setCloseHover={setCloseHover}
							isHoverBasket={isHoverBasket}
							setIsHover={setIsHover}
							scrollMenu={scrollMenu}
							setShowSearch={setShowSearch}
						/>
					</>
				)}
			</nav>
			{scrollMenu && (
				<div className="transition-all duration-500 bg-gray h-px w-91.7% .5x01:w-full mx-auto"></div>
			)}
		</>
	);
}
