import { useState } from "react"

const LeftComment = ({ show, setShow }) => {
	const [starsLength, setStarsLength] = useState(0)

	const setStars = (len) => {
		setStarsLength(len)
	}

	return (
		<>
			<div onClick={setShow} className={`fixed top-0 right-0 left-0 bottom-0 z-100 bg-white opacity-80 cursor-pointer ${show ? 'block' : "hidden"}`} ></div>
			<div className={`fixed  bottom-0 top-0 right-0   z-100 ${show ? "block" : "hidden"}`}>
				<div className="container__base relative h-full">
					<section className={`p-8 w-448px bg-white dropDownShadow bottom-0  h-full left-0 top-0 `}>
						<div className="relative h-full">
							<p className="font-montserrat text-22px mb-4">Оставить отзыв</p>
							<p className="font-noto-sans mb-6px text-11px text-black-70pe ">Ваша оценка *</p>
							<div className="flex mb-18px">
								{starsLength > 0 ? <svg onClick={() => setStars(1)} class="mt-3px mr-1" width="19" height="19" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1945_1209386)"><path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202"></path></g><defs><clipPath id="clip0_1945_1209386"><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg>
									: <svg onClick={() => setStars(1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z" fill="#DBDCDA" />
									</svg>
								}
								{starsLength >= 2 ? <svg onClick={() => setStars(2)} class="mt-3px mr-1" width="19" height="19" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1945_1209386)"><path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202"></path></g><defs><clipPath id="clip0_1945_1209386"><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg>
									: <svg onClick={() => setStars(2)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z" fill="#DBDCDA" />
									</svg>
								}
								{starsLength >= 3 ? <svg onClick={() => setStars(3)} class="mt-3px mr-1" width="19" height="19" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1945_1209386)"><path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202"></path></g><defs><clipPath id="clip0_1945_1209386"><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg>
									: <svg onClick={() => setStars(3)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z" fill="#DBDCDA" />
									</svg>
								}
								{starsLength >= 4 ? <svg onClick={() => setStars(4)} class="mt-3px mr-1" width="19" height="19" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1945_1209386)"><path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202"></path></g><defs><clipPath id="clip0_1945_1209386"><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg>
									: <svg onClick={() => setStars(4)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z" fill="#DBDCDA" />
									</svg>
								}

								{starsLength >= 5 ? <svg onClick={() => setStars(5)} class="mt-3px mr-1" width="19" height="19" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1945_1209386)"><path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202"></path></g><defs><clipPath id="clip0_1945_1209386"><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg>
									: <svg onClick={() => setStars(5)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z" fill="#DBDCDA" />
									</svg>
								}
							</div>
							<p className="font-noto-sans  text-11px text-black-70pe mb-1">Комментарий *</p>
							<textarea className="border border-gray w-full h-100px mb-4 outline-none">

							</textarea>
							<input type="file" className="hidden" id="file" />
							<label htmlFor="file" className="flex cursor-pointer mb-6 border-gray px-14px border items-center h-11">
								<svg className="mr-10px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.6517 3.98536C13.9534 2.68359 16.0639 2.68359 17.3657 3.98535C18.6241 5.24369 18.666 7.25782 17.4916 8.56659L17.3657 8.69941L10 16.0651C8.21012 17.855 5.30811 17.855 3.51821 16.0651C1.77802 14.3249 1.72969 11.5335 3.37319 9.73495L3.51821 9.58327L9.70538 3.39609C10.0308 3.07065 10.5585 3.07065 10.8839 3.39608C11.1843 3.69649 11.2074 4.16918 10.9532 4.49609L10.8839 4.57459L4.69672 10.7618C3.55769 11.9008 3.55769 13.7475 4.69672 14.8866C5.79507 15.9849 7.55148 16.0241 8.69683 15.0042L8.82151 14.8866L16.1872 7.52091C16.8381 6.87001 16.8381 5.81472 16.1872 5.16387C15.5706 4.54724 14.591 4.51478 13.9362 5.0665L13.8302 5.16386L6.4645 12.5295C6.30178 12.6922 6.30178 12.9561 6.46447 13.1188C6.60912 13.2635 6.83365 13.2795 6.99604 13.167L7.05375 13.1188L13.2409 6.9316C13.5664 6.60617 14.094 6.60616 14.4194 6.9316C14.7198 7.232 14.7429 7.70469 14.4888 8.0316L14.4194 8.11011L8.23227 14.2973C7.41866 15.1109 6.09957 15.1109 5.28594 14.2973C4.50778 13.5191 4.47395 12.2784 5.18446 11.4599L5.28596 11.351L12.6517 3.98536Z" fill="#DBDCDA" />
								</svg>

								<p className="font-noto-sans text-11px text-black-70pe">
									Прикрепить изображение (не более 1 мб)
								</p>
							</label>
							<div className="p-3 border border-gray mb-38px">
								<p className="font-montserrat font-medium text-13px mb-2">Программа лояльности «De-отзыв»</p>
								<div className="flex justify-between">
									<p className="font-montserrat w-60% text-13px text-black-70pe">от 350 DeCoins на счёт за отправленный отзыв!</p>
									<button className="font-montserrat font-medium text-13px px-4 rounded-2xl h-30px bg-gray-light2">
										De-отзыв
									</button>
								</div>

							</div>


							<div className="flex mb-6">
								<button className="font-montserrat text-white transition-all hover:bg-primary-hover bg-primary h-11 mr-3 flex-1 font-medium text-12px">
									Опубликовать отзыв
								</button>
								<button className="font-montserrat border border-primary h-11 flex-1 transition-all hover:bg-primary hover:text-white font-medium text-12px text-primary">
									Отменить
								</button>
							</div>


							<p className="font-montserrat text-9px p-2 bg-nude-1 leading-140%">
								Оставляя отзыв на сайте www.tiande.ru, Вы даёте ООО «Развитие» (ИНН 7723839344), согласие на обработку Ваших персональных данных, а также их передачу третьим лицам (в том числе, изготовителям/поставщикам приобретенного Вами товара) для обработки и хранения с целью предоставления Вам обратной связи по Вашему запросу/претензии и выяснения обстоятельств возникшей ситуации.
							</p>












							<button onClick={setShow} className="transition-all hover:bg-primary-hover p-3 h-9 rounded-l-56px top-5 absolute pl-26px -left-20 bg-primary ">
								<svg className="transform10px" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 1L9 9M9 1L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
								</svg>

							</button>
						</div>

					</section>
				</div>
			</div>


		</>
	)
}
export default LeftComment