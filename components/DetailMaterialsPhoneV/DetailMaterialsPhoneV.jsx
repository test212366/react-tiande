import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const DetailMaterialsPhoneV = ({ src, selectedAll, setCurrent, deleteItem }) => {
	const download = useRef(null)
	const [hoverDownload, setHoverDownload] = useState(false)
	const [isUse, setIsUse] = useState(false)
	const hover = () => setHoverDownload(!hoverDownload)
	const setUse = () => {

		selectedInput.current.checked = !isUse
		setIsUse(!isUse)


		if (selectedInput.current.checked) {
			setCurrent({ src, type: 'mp4' })
		} else {
			deleteItem({ src })
		}
	}
	const selectedInput = useRef(null)

	const downloadImage = () => {
		// const downloadTarget = document.createElement('a')
		// downloadTarget.setAttribute('download', '../../images/templates/1Offer.jpg')

		// downloadTarget.click()
		download.current && download.current.click()
	}

	useEffect(() => {
		selectedInput.current.checked = selectedAll
	}, [selectedAll])

	return (
		<div className="w-150px mr-3 ..7x2:mr-0 ..7x2:w-120px ..7x59:w-130px ..7x59:mr-1 ..7x59:mb-1 mb-3 relative flex justify-end bg-gray-light">
			<svg onClick={downloadImage} className="absolute ..7x59:left-0.5 ..7x2:left-3 ..7x2:top-11 left-3 top-14 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
			</svg>
			<a href={src.src} download={'custom.mp4'} className="hidden" ref={download} />
			<div className=' flex items-center ..7x59:left-1 ..7x2:left-14px absolute left-14px top-14px '>
				<input ref={selectedInput} className='hidden checkSearchAll' type="checkbox" />
				<label onClick={setUse} htmlFor="checkSearchAll" className='w-5 h-5 border-gray-quick-silver cursor-pointer border'></label>
			</div>
			<div className="relative ..7x2:w-20 ..7x2:h-20">
				<div className="absolute left-0 z-10 flex items-center justify-center right-0 top-0 bottom-0">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8182 10.9613C14.0432 10.8314 14.3205 10.8314 14.5455 10.9613L22.1819 15.3702C22.4069 15.5001 22.5455 15.7402 22.5455 16C22.5455 16.2599 22.4069 16.5 22.1819 16.6299L14.5455 21.0387C14.3205 21.1687 14.0432 21.1687 13.8182 21.0387C13.5932 20.9088 13.4546 20.6687 13.4546 20.4089V11.5912C13.4546 11.3313 13.5932 11.0912 13.8182 10.9613ZM14.9091 12.8508V19.1492L20.3637 16L14.9091 12.8508Z" fill="white" />
						<path d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43958 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43958 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z" stroke="white" stroke-opacity="0.8" />
					</svg>

				</div>
				<Image src={src} />

			</div>
		</div>
	)
}
export default DetailMaterialsPhoneV