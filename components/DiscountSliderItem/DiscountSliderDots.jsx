import Image from "next/image"
import DiscSubItem from "./DiscSubItem"
import imgProduct from '../../images/templates/productOneDiscSl.png';

import imgDiscount from '../../images/templates/discountImg.jpg';
const DiscounstSliderDots = ({ title, imgSix, imgTen, imgEight, rightImg, imgFive, imgTree, discSubs, imgOne, isOneIMG, subTitle, one, two, tree, four, five, six, seven, eight, nine, ten }) => {
	return (
		<>
			<section className="w-full   h-800px discSlider">
				<div className="flex h-full ..5x2:flex-col">
					<div className="discountImgWrap w-50%  h-full ..5x2:w-full ..5x2:bg-no-repeat ..5x2:bg-cover relative flex justify-center">
						{isOneIMG && <div className="..5x2:!bottom-5 imgDiscount absolute !bottom-0">
							<Image
								className="object-cover"
								src={isOneIMG}
								alt="discountImg"
							/>
						</div>}


						<div className='absolute left-1/2 ..6x6:w-full ..5x2:top-5 ability  top-80px w-650'>
							<p className="font-montserrat ..5x2:hidden font-medium text-26px text-center mb-6 .2x1:mb-1">{title}</p>
							<p className="mb-2 font-montserrat ..5x2:hidden text-gray-quick-silver text-center">{subTitle}</p>
							<div className='flex flex-wrap ..5x2:hidden .2x1:m-auto w-550 justify-center'>
								{discSubs && discSubs.map((titleSub, i) => <DiscSubItem key={i} title={titleSub} />)}


							</div>

							<div className=" mt-7   .2x1:-mt-6  absolute ..5x2:justify-center  w-full flex-wrap     flex">
								<div className="w-52 ..7x01:w-86px ..7x01:h-86px ..6x6:mr-0 ..6x6:ml-0 ..6x4:mr-10 ..5x2:w-112px ..5x2:mr-16 ..5x2:h-112px relative h-52  flex items-center justify-center">
									{one && <div className="bg-white-80pe ..5x2:h-8 ..5x2:w-8 z-10 rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{two && <div className="absolute ..5x2:h-8 ..5x2:w-8  z-10 -right-6 bg-white-80pe   rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>

									}
									{imgOne && <div className="absolute z-0 ..7x01:w-86px ..7x01:h-86px ..6x6:mr-0 ..6x6:ml-0 ..5x2:w-112px ..5x2:h-112px .3x1:h-40 .3x1:w-40">
										<Image src={imgOne} />
									</div>
									}

								</div>
								<div className="w-52 ..7x01:w-86px ..7x01:h-86px ..6x6:mr-0 ..6x6:ml-0 ..6x4:mr-10 ..5x2:mr-16 ..5x2:w-112px ..5x2:h-112px relative h-52 flex items-center justify-center">
									{tree && <div className="bg-white-80pe ..5x2:h-8 ..5x2:w-8 z-10  rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgTree && <div className="absolute z-0 ..7x01:w-86px ..7x01:h-86px  ..5x2:w-112px ..5x2:h-112px .3x1:h-40 .3x1:w-40">
										<Image src={imgTree} />
									</div>
									}
									{four && <div className="absolute z-10  ..5x2:h-8 ..5x2:w-8  -right-6 bg-white-80pe rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}


								</div>
								<div className="w-52 ..7x01:w-86px ..7x01:h-86px ..6x6:mr-0 ..6x6:ml-0 ..6x4:mr-10 ..5x2:mr-16 ..5x2:w-112px ..5x2:h-112px relative h-52 flex items-center justify-center">
									{five && <div className="bg-white-80pe ..5x2:h-8 ..5x2:w-8 z-10  rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgFive && <div className="absolute ..7x01:w-86px ..7x01:h-86px ..5x2:w-112px ..5x2:h-112px z-0 .3x1:h-40 .3x1:w-40">
										<Image src={imgFive} />
									</div>
									}

								</div>
								<div className="w-52 ..7x01:w-86px ..7x01:h-86px  ..6x6:mr-0 ..6x6:ml-0 ..6x4:mr-10 ..6x4:ml-6 ..5x2:mr-16 relative ..5x2:w-112px ..5x2:h-112px h-52 flex items-center justify-center">
									{six && <div className="bg-white-80pe ..5x2:h-8 ..5x2:w-8 z-10  rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgSix && <div className="absolute ..7x01:w-86px ..7x01:h-86px  ..5x2:w-112px ..5x2:h-112px z-0 .3x1:h-40 .3x1:w-40">
										<Image src={imgSix} />
									</div>
									}
									{seven && <div className="absolute z-10 ..5x2:h-8 ..5x2:w-8  -right-6 bg-white-80pe rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}

								</div>
								<div className="w-52 ..7x01:w-86px ..7x01:h-86px   ..6x6:mr-0 ..6x6:ml-0 ..5x2:mr-16 relative ..5x2:w-112px ..5x2:h-112px h-52 flex items-center justify-center">
									{eight && <div className="bg-white-80pe ..5x2:h-8 ..5x2:w-8 z-10  rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgEight && <div className="absolute ..7x01:w-86px ..7x01:h-86px  ..5x2:w-112px ..5x2:h-112px z-0 .3x1:h-40 .3x1:w-40">
										<Image src={imgEight} />
									</div>
									}
									{nine && <div className="absolute  ..5x2:h-8 ..5x2:w-8 z-10  -right-6 bg-white-80pe rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}


								</div>
								<div className="w-52 ..7x01:w-86px ..7x01:h-86px  ..6x4:-ml-5 ..6x4:mr-20 ..6x6:mr-0 ..6x6:ml-0 ..5x2:mr-16 ..5x2:w-112px ..5x2:h-112px h-52 flex items-center justify-center">
									{ten && <div className="bg-white-80pe ..5x2:h-8 ..5x2:w-8 z-10 rounded-full h-12 w-12 flex items-center justify-center">
										<svg className='..5x2:h-2 ..5x2:w-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgTen && <div className="absolute ..7x01:w-86px ..7x01:h-86px  z-0 ..5x2:w-112px ..5x2:h-112px .3x1:h-40 .3x1:w-40">
										<Image src={imgTen} />
									</div>
									}

								</div>

							</div>
						</div>

					</div>

					<div className="discountImgWrap  ..5x2:w-full cartI z-20 cartinka w-50%  ">
						<Image
							className=" object-cover imgDiscount absolute !bottom-0-cover "
							src={rightImg}

							alt="discountImg"
							quality={100}
						/>
					</div>
				</div>
			</section>


		</>
	)
}
export default DiscounstSliderDots