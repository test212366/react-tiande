import Image from "next/image"
import { useEffect } from "react"
import { useRef, useState } from "react"

const MaterialsVideoItem = ({ setVideo, selectedAll, deleteItem, src, setCurrent }) => {
	const [hoverDownload, setHoverDownload] = useState(false)
	const [isUse, setIsUse] = useState(false),
		download = useRef(null)
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

	const downloadImage = () => {

		download.current && download.current.click()
	}

	const selectedInput = useRef(null)
	useEffect(() => {
		selectedInput.current.checked = selectedAll
	}, [selectedAll])


	return (
		<div className={`px-60px .1x1:px-10 border mr-10px mb-10px relative hoverI h-52 transition-all border-white bg-white-BG_FILTER hover:border-gray-light2  ${selectedAll ? '!border-gray-light2' : ""}`}>
			<div className={`hidden items-center absolute left-14px top-14px hoverShowI ${selectedAll ? '!block' : ""}`}>
				<input ref={selectedInput} className='hidden checkSearchAll' type="checkbox" />
				<label onClick={setUse} htmlFor="checkSearchAll" className={`w-5 h-5 border-gray-deNum cursor-pointer border ${selectedAll ? '!block' : ""}`}></label>
			</div>
			<a href={src.src} download={'custom.mp4'} className="hidden" ref={download} />
			<svg onClick={downloadImage} onMouseEnter={hover} onMouseLeave={hover} className={`absolute cursor-pointer hidden hoverShowI left-3 top-11 ${selectedAll ? '!block' : ""}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill={`${hoverDownload ? '#337202' : "#DBDCDA"}`} />
			</svg>

			<div onClick={setVideo} className="pb-3 cursor-pointer relative ..5x1:w-56 ">
				<div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex items-center justify-center">
					<svg className="-mt-4" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M38.8635 30.8286C39.4964 30.4632 40.2761 30.4632 40.909 30.8286L62.3863 43.2286C63.0191 43.594 63.409 44.2692 63.409 45C63.409 45.7308 63.0191 46.406 62.3863 46.7714L40.909 59.1714C40.2761 59.5368 39.4964 59.5368 38.8635 59.1714C38.2307 58.806 37.8408 58.1307 37.8408 57.4V32.6001C37.8408 31.8693 38.2307 31.194 38.8635 30.8286ZM41.9317 36.1429V53.8571L57.2726 45L41.9317 36.1429Z" fill="white" />
						<path d="M89.4999 45C89.4999 69.5767 69.5766 89.5 45 89.5C20.4233 89.5 0.5 69.5767 0.5 45C0.5 20.4233 20.4233 0.5 45 0.5C69.5766 0.5 89.4999 20.4233 89.4999 45Z" stroke="white" stroke-opacity="0.8" />
					</svg>
				</div>


				<Image src={src} />
			</div>
		</div>
	)
}
export default MaterialsVideoItem