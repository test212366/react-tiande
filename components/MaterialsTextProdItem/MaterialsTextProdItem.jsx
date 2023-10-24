import Image from "next/image"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import filtOne from '../../images/templates/filtOne.jpg'
const MaterialsTextProdItem = ({ selectedAll, deleteItem, src, setCurrent }) => {

	const [isUse, setIsUse] = useState(false),
		download = useRef(null)


	const [hoverDownload, setHoverDownload] = useState(false)

	const hover = () => setHoverDownload(!hoverDownload)

	const selectedInput = useRef(null)
	useEffect(() => {
		selectedInput.current.checked = selectedAll
		setIsUse(false)




	}, [selectedAll])




	const downloadImage = () => {

		download.current && download.current.click()
	}


	const setUse = () => {

		selectedInput.current.checked = !isUse
		setIsUse(!isUse)



		if (selectedInput.current.checked) {
			setCurrent({ src, type: 'pdf' })
		} else {
			deleteItem({ src })
		}

	}
	return (
		<div className={`px-60px .1x1:px-10 border mr-10px mb-10px relative hoverI transition-all border-white hover:bg-white-BG_FILTER hover:border-gray-light2  ${isUse || selectedAll ? '!border-gray-light2' : ""}`}>
			<div className={`hidden items-center absolute left-14px top-14px hoverShowI ${isUse || selectedAll ? '!block' : ""}`}>
				<input ref={selectedInput} className='hidden checkSearchAll' type="checkbox" />
				<label onClick={setUse} htmlFor="checkSearchAll" className={`w-5 h-5 border-gray-deNum cursor-pointer border ${isUse || selectedAll ? '!block' : ""}`}></label>
			</div>
			<a href={src.src} download={'custom.pdf'} className="hidden" ref={download} />
			<svg onClick={downloadImage} onMouseEnter={hover} onMouseLeave={hover} className={`absolute cursor-pointer hidden hoverShowI left-3 top-11 ${isUse || selectedAll ? '!block' : ""}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill={`${hoverDownload ? '#337202' : "#DBDCDA"}`} />
			</svg>

			<div className=" ..5x1:w-56 ">

				<Image src={src} />
			</div>
			<p className="text-center font-montserrat pb-4 font-medium text-13px text-gray-quick-silver">PDF</p>
		</div>
	)
}
export default MaterialsTextProdItem