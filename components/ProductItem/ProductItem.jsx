import Image from 'next/image';
import * as icons from '../../images/constsIcons';

export default function ProductItem({ title, photo, lastItem }) {
	return (
		<>
			{lastItem ? (
				<>
					<div className="flex flex-col hover:!bg-primary hoverWhiteCat items-center justify-center w-full max-w-228px max-h-228px bg-gray-light cursor-pointer   transition-all .3x1:hidden">
						<p className="text-2xl text-primary font-medium">Каталог</p>
						<p className="flex justify-center items-center text-sm text-primary cursor-pointer">
							Перейти{' '}
							<svg
								className="ml-1"
								width="13"
								height="8"
								viewBox="0 0 13 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.52529 0.935913L7.58469 1.70374L9.76485 3.46684L0.694824 3.47426L0.696166 4.55759L9.74134 4.5502L7.59791 6.2999L8.54292 7.06414L12.3053 3.99286L8.52529 0.935913Z"
									fill="#337202"
								/>
							</svg>
						</p>
					</div>

					<div className="hidden max-w-228px w-95  max-h-262px cursor-pointer hover:opacity-90 hover:text-primary transition-all .3x1:flex .3x1:flex-row-reverse .3x1:border .3x1:border-gray-light2 .3x1:m-1 h-full">
						<div className="cartinka .3x1:w-35%  ..6x5:h-full">
							<div className='DEC w-full flex justify-center items-center h-full bg-nude-2'>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M1.66667 3.33341C1.66667 2.41294 2.41286 1.66675 3.33334 1.66675H7.5C8.42048 1.66675 9.16667 2.41294 9.16667 3.33341V7.50008C9.16667 8.42056 8.42048 9.16675 7.5 9.16675H3.33334C2.41286 9.16675 1.66667 8.42056 1.66667 7.50008V3.33341ZM7.5 3.33341H3.33334V7.50008H7.5V3.33341ZM10.8333 5.41675C10.8333 3.34568 12.5123 1.66675 14.5833 1.66675C16.6544 1.66675 18.3333 3.34568 18.3333 5.41675C18.3333 7.48782 16.6544 9.16675 14.5833 9.16675C12.5123 9.16675 10.8333 7.48782 10.8333 5.41675ZM14.5833 3.33341C13.4327 3.33341 12.5 4.26616 12.5 5.41675C12.5 6.56734 13.4327 7.50008 14.5833 7.50008C15.7339 7.50008 16.6667 6.56734 16.6667 5.41675C16.6667 4.26616 15.7339 3.33341 14.5833 3.33341ZM1.66667 12.5001C1.66667 11.5796 2.41286 10.8334 3.33334 10.8334H7.5C8.42048 10.8334 9.16667 11.5796 9.16667 12.5001V16.6667C9.16667 17.5872 8.42048 18.3334 7.5 18.3334H3.33334C2.41286 18.3334 1.66667 17.5872 1.66667 16.6667V12.5001ZM7.5 12.5001H3.33334V16.6667H7.5V12.5001ZM10.8333 12.5001C10.8333 11.5796 11.5795 10.8334 12.5 10.8334H16.6667C17.5871 10.8334 18.3333 11.5796 18.3333 12.5001V16.6667C18.3333 17.5872 17.5871 18.3334 16.6667 18.3334H12.5C11.5795 18.3334 10.8333 17.5872 10.8333 16.6667V12.5001ZM12.5 12.5001V16.6667H16.6667V12.5001H12.5Z" fill="#337202" stroke="#FEEFDF" strokeWidth="0.5" strokeLinejoin="round" />
								</svg>

							</div>

						</div>
						<div className=".3x1:flex .3x1:items-center .3x1:w-65% .3x1:h-full .3x1:p-2">
							<p className="text-center font-semibold text-13px font-montserrat .3x1:flex .3x1:justify-center .3x1:items-center .3x1:whitespace-nowrap .3x1:text-black-70pe .3x1:font-normal ..7x1:text-13px ..7x002:text-10px">
								DE-КАТАЛОГ
							</p>
						</div>
					</div>
				</>
			) : (
				<div className=" max-w-228px max-h-262px cursor-pointer hover:opacity-90 hover:text-primary transition-all .3x1:flex .3x1:flex-row-reverse .3x1:border .3x1:border-gray-light2 .3x1:m-1 ..6x3:h-16">
					<div className="cartinka .3x1:w-35% ..6x5:h-full">
						<Image
							className="object-cover "
							src={photo}
							alt="productsPhoto"
							width={228}
							height={228}
						/>
					</div>
					<div className=".3x1:flex mt-3 .3x1:mt-0  .3x1:items-center .3x1:w-65% .3x1:h-full .3x1:pl-2">
						<p className="text-center font-semibold text-13px font-montserrat .3x1:flex .3x1:justify-center .3x1:items-center .3x1:whitespace-nowrap .3x1:text-black-70pe .3x1:font-normal ..7x1:text-13px ..7x002:text-10px">
							{title}
						</p>
					</div>
				</div>
			)}
		</>
	);
}
