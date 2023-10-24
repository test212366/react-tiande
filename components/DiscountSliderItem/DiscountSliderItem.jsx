import Image from 'next/image';

export default function DiscountSliderItem({ imgProd, img, showCentral }) {
	return (
		<>
			<section className="w-full ..5x2:hidden h-800px discSlider">
				<div className="flex h-full ..5x2:flex-col">
					<div className="discountImgWrap w-50% h-full ..5x2:bg-trava ..5x2:bg-no-repeat ..5x2:bg-cover relative flex justify-center">
						<div className="relative flex h-full items-center">
							<div className="imgDiscount">
								<Image
									className="object-cover"
									src={imgProd}
									alt="discountImg"
								/>
							</div>

							<div onClick={showCentral} className=" blurButtons z-10 h-12 w-12 flex items-center justify-center ..5x2:h-auto ..5x2:w-auto bg-gray px-4 py-4 text-lg moreF rounded-full absolute cursor-pointer hover:text-white hover:bg-label-green">
								<svg className='plusDiscItem' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
								</svg>

								<section className="absolute ..5x2:top-0 ..5x2:-left-40 ..5x2:!hidden hidden flex-col justify-between text-black -top-40 font-montserrat rounded-lg w-390px h-200px p-4 info cursor-default">
									<span className="flex">
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
									</span>
									<div className="flex flex-row justify-between">
										<p className=" font-semibold text-sm leading-140% w-250px mt-3">
											Шампунь - активатор роста Bio Rehab
										</p>
										<div>
											<p className=" text-label-pink-2 font-medium text-base mt-3 whitespace-nowrap">
												₽ 764.00
											</p>
											<p className=" text-black font-medium text-base line-through whitespace-nowrap">
												₽ 764.00
											</p>
										</div>
									</div>
									<div className="flex justify-between">
										<p className=" text-gray-quick-silver font-normal leading-140% text-13px">
											Сила - в длине
										</p>
										<p className="font-lora  text-base font-normal leading-140% text-label-orange">
											64 De
										</p>
									</div>
									<div className="flex justify-between items-center mt-3 ">
										<button className="font-medium px-2 flex justify-center text-black text-13px leading-100% relative z-10 hover:text-primary transition-all">
											Подробнее
											<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
										</button>
										<button className="..7x01:w-40 font-medium text-xs leading-100% px-4 py-3 text-primary bg-gray flex items-center transition-all hover:opacity-50">
											<svg
												className="mr-2"
												width="16"
												height="20"
												viewBox="0 0 16 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z"
													fill="#337202"
												/>
											</svg>{' '}
											Добавить в корзину
										</button>
									</div>
								</section>
							</div>
							<div className="bg-gray z-10 blurButtons ..7x1:left-22% ..6x3:left-34% ..5x2:left-39.5%  px-4 h-12 w-12 flex items-center justify-center ..5x2:h-auto ..5x2:w-auto py-4 text-lg rounded-full absolute opacity-90 top-50% left-22% transition-all duration-300  hover:bg-label-green hover:text-white cursor-pointer">
								<svg width="10" className='plusDiscItem' height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
								</svg>
							</div>
							<div className=" bg-gray z-10 blurButtons ..6x6:left-64% px-4 py-4 text-lg rounded-full absolute h-12 w-12 flex items-center justify-center ..5x2:h-auto ..5x2:w-auto opacity-90 top-50% right-20% transition-all duration-300 hover:bg-label-green hover:text-white cursor-pointer">
								<svg width="10" className='plusDiscItem' height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
								</svg>
							</div>
						</div>
					</div>
					<div className="discountImgWrap cartI cartinka w-50% h-full ">
						<Image
							className=" object-cover "
							src={img}

							alt="discountImg"
							quality={100}
						/>
					</div>
				</div>
			</section>

			<section className="w-full hidden ..5x2:block   discSliderPhone">
				<div className="flex ..5x2:flex-col phoneOne">
					<div className="discountImgWrap w-50% ..5x2:w-full ..5x2:bg-trava ..5x2:bg-no-repeat ..5x2:bg-cover relative flex justify-center">
						<div className="relative flex items-center ..7x11:ml-3">
							<div className='imgDiscount'>
								<Image
									className="object-cover"

									src={imgProd}
									alt="discountImg"
								/>
							</div>


							<div onClick={showCentral} className=" bg-gray ..5x2:p-3 ..5x2:h-8 ..5x2:w-8   p-4 z-20 headerAbility text-lg moreF rounded-full absolute cursor-pointer  hover:bg-label-green">
								<svg className='plusDiscItem' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
								</svg>

								<section className="absolute ..5x2:top-0 ..5x2:-left-40 ..5x2:!hidden hidden flex-col justify-between text-black -top-40 font-montserrat rounded-lg w-390px h-200px p-4 info cursor-default">
									<span className="flex">
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
												stroke="#337202"
											/>
										</svg>
									</span>
									<div className="flex flex-row justify-between">
										<p className=" font-semibold text-sm leading-140% w-250px mt-3">
											Шампунь - активатор роста Bio Rehab
										</p>
										<div>
											<p className=" text-label-pink-2 font-medium text-base mt-3 whitespace-nowrap">
												₽ 764.00
											</p>
											<p className=" text-black font-medium text-base line-through whitespace-nowrap">
												₽ 764.00
											</p>
										</div>
									</div>
									<div className="flex justify-between">
										<p className=" text-gray-quick-silver font-normal leading-140% text-13px">
											Сила - в длине
										</p>
										<p className="font-lora  text-base font-normal leading-140% text-label-orange">
											64 De
										</p>
									</div>
									<div className="flex justify-between items-center mt-3 ">
										<button className="font-medium px-2 flex justify-center text-black text-13px leading-100% relative z-10 hover:text-primary transition-all">
											Подробнее
											<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
										</button>
										<button className="..7x01:w-40 font-medium text-xs leading-100% px-4 py-3 text-primary bg-gray flex items-center transition-all hover:opacity-50">
											<svg
												className="mr-2"
												width="16"
												height="20"
												viewBox="0 0 16 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z"
													fill="#337202"
												/>
											</svg>{' '}
											Добавить в корзину
										</button>
									</div>
								</section>
							</div>
							<div className="bg-gray onD moreF ..5x2:p-3 ..5x2:h-8 ..5x2:w-8 ..5x2:left-8     ..5x2:top-57.5%     p-4  text-lg rounded-full absolute opacity-90 top-50% left-24  transition-all duration-300  hover:bg-label-green   cursor-pointer">
								<svg width="10" className='plusDiscItem' height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
								</svg>

							</div>
							<div className="..5x2:p-3 ..5x2:h-8 ..5x2:w-8 bg-gray twD moreF ..5x2:right-8   p-4   ..5x2:top-57.5% left-auto text-lg rounded-full absolute opacity-90 top-50% right-20 transition-all duration-300 hover:bg-label-green   cursor-pointer">
								<svg className='plusDiscItem' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
								</svg>

							</div>
						</div>








					</div>
					<div className="discountImgWrap cartinka cartI  w-50% ..5x2:w-full ..5x2:flex ..5x2:justify-center">
						<Image
							className="object-cover"
							src={img}

							alt="discountImg"
						/>
					</div>
				</div>
			</section >
		</>
	);
}
