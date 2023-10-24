



import Image from "next/image"

const VideoMaterials = ({ src, logoItem, isDesc, text, time, lengthTime, isHidden }) => {
	return (
		<>
			{isDesc ? <div className="mt-3 mx-5px hoverCus .5x01:w-300px relative">
				<Image src={src} />
				<div className="absolute hov hidden left-0 right-0 bottom-77px flex .5x01:bottom-100px items-center h-16 justify-end  bg-white-80pe">
					<button className="flex items-center font-montserrat font-medium text-xs text-white bg-primary hover:bg-primary-hover transition-all h-8 px-5 mr-4 ">
						Перейти <svg className="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.75033 4.66683L11.0837 7.00016M11.0837 7.00016L8.75033 9.3335M11.0837 7.00016H2.91699" stroke="white" stroke-width="1.5" stroke-linecap="round" />
						</svg>

					</button>
				</div>
				<div>
					<p className="font-montserrat font-semibold text-18px">{text}</p>
					<p className="font-montserrat font-medium text-sm text-gray-quick-silver mt-2 mb-4">{time}</p>
				</div>
				<div className="absolute top-1.5 flex items-center left-2">
					{logoItem}


					<p className="ml-1.5 font-montserrat font-medium text-white">
						{lengthTime}
					</p>
				</div>

				<svg className="absolute right-2 top-2 z-10" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M31.296 8.472C31.504 9.224 31.648 10.232 31.744 11.512C31.856 12.792 31.904 13.896 31.904 14.856L32 16.2C32 19.704 31.744 22.28 31.296 23.928C30.896 25.368 29.968 26.296 28.528 26.696C27.776 26.904 26.4 27.048 24.288 27.144C22.208 27.256 20.304 27.304 18.544 27.304L16 27.4C9.296 27.4 5.12 27.144 3.472 26.696C2.032 26.296 1.104 25.368 0.704 23.928C0.496 23.176 0.352 22.168 0.256 20.888C0.144 19.608 0.0959999 18.504 0.0959999 17.544L0 16.2C0 12.696 0.256 10.12 0.704 8.472C1.104 7.032 2.032 6.104 3.472 5.704C4.224 5.496 5.6 5.352 7.712 5.256C9.792 5.144 11.696 5.096 13.456 5.096L16 5C22.704 5 26.88 5.256 28.528 5.704C29.968 6.104 30.896 7.032 31.296 8.472Z" fill="white" fill-opacity="0.3" />
					<path d="M13 20.6L21.304 15.8L13 11V20.6Z" fill="white" />
				</svg>



			</div> : <div className={`mt-3 mx-5px ..5x2:mt-1 ${isHidden ? "..6x04:hidden" : ""}  ..5x2:w-272px .5x01:w-300px relative`}>
				<Image src={src} />
				<div className="absolute left-0 right-0 bottom-77px ..5x2:bottom-20 flex .5x01:bottom-100px items-center h-16 justify-end  bg-white-80pe">
					<button className="flex items-center font-montserrat font-medium text-xs text-white bg-primary hover:bg-primary-hover transition-all h-8 px-5 mr-4 ">
						Перейти <svg className="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.75033 4.66683L11.0837 7.00016M11.0837 7.00016L8.75033 9.3335M11.0837 7.00016H2.91699" stroke="white" stroke-width="1.5" stroke-linecap="round" />
						</svg>

					</button>
				</div>
				<div>
					<p className="font-montserrat font-semibold text-18px ..5x2:text-13px">{text}</p>
					<p className="font-montserrat font-medium text-sm ..5x2:text-11px ..5x2:mt-1 text-gray-quick-silver mt-2 mb-4">{time}</p>
				</div>
				<div className="absolute top-1.5 flex items-center left-2">
					{logoItem}

					<p className="ml-1.5 ..5x2:text-11px font-montserrat font-medium text-white">
						{lengthTime}
					</p>
				</div>

				<svg className="absolute right-2 top-2 z-10" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M31.296 8.472C31.504 9.224 31.648 10.232 31.744 11.512C31.856 12.792 31.904 13.896 31.904 14.856L32 16.2C32 19.704 31.744 22.28 31.296 23.928C30.896 25.368 29.968 26.296 28.528 26.696C27.776 26.904 26.4 27.048 24.288 27.144C22.208 27.256 20.304 27.304 18.544 27.304L16 27.4C9.296 27.4 5.12 27.144 3.472 26.696C2.032 26.296 1.104 25.368 0.704 23.928C0.496 23.176 0.352 22.168 0.256 20.888C0.144 19.608 0.0959999 18.504 0.0959999 17.544L0 16.2C0 12.696 0.256 10.12 0.704 8.472C1.104 7.032 2.032 6.104 3.472 5.704C4.224 5.496 5.6 5.352 7.712 5.256C9.792 5.144 11.696 5.096 13.456 5.096L16 5C22.704 5 26.88 5.256 28.528 5.704C29.968 6.104 30.896 7.032 31.296 8.472Z" fill="white" fill-opacity="0.3" />
					<path d="M13 20.6L21.304 15.8L13 11V20.6Z" fill="white" />
				</svg>



			</div>}
		</>


	)
}
export default VideoMaterials