import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const DetailMaterialsPhone = ({ deleteItem, src, setCurrent, selectedAll }) => {

	const [hoverDownload, setHoverDownload] = useState(false)
	const [isUse, setIsUse] = useState(false)
	const download = useRef(null)
	const hover = () => setHoverDownload(!hoverDownload)
	const setUse = () => {

		selectedInput.current.checked = !isUse
		setIsUse(!isUse)

		if (selectedInput.current.checked) {
			setCurrent({ src, type: 'jpg' })
		} else {
			deleteItem({ src })
		}
	}


	const downloadImage = () => {
		// const downloadTarget = document.createElement('a')
		// downloadTarget.setAttribute('download', '../../images/templates/1Offer.jpg')

		// downloadTarget.click()
		download.current && download.current.click()
	}

	const selectedInput = useRef(null)
	useEffect(() => {
		selectedInput.current.checked = selectedAll
	}, [selectedAll])

	return (
		<div className={`w-150px mr-3 ..7x2:mr-0 ..7x2:w-120px ..7x59:w-130px ..7x59:mr-1 ..7x59:mb-1 mb-3 relative flex justify-end bg-gray-light ${selectedAll ? '!border-gray-light2' : ""}`}>
			<svg onClick={downloadImage} className="absolute ..7x59:left-0.5 ..7x2:left-3 ..7x2:top-11 left-3 top-14 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
			</svg>
			<a href={src.src} download={'custom.jpg'} className="hidden" ref={download} />
			<div className=' flex items-center ..7x59:left-1 ..7x2:left-14px absolute left-14px top-14px '>
				<input ref={selectedInput} className='hidden inputRadio checkSearchAll' type="checkbox" />
				<label onClick={setUse} htmlFor="checkSearchAll" className='w-5 h-5 border-gray-quick-silver cursor-pointer border'></label>
			</div>
			<div className="relative ..7x2:w-20 ..7x2:h-20">

				<Image src={src} />

			</div>
		</div>
	)
}
export default DetailMaterialsPhone