import { useState } from "react"

const SpecialOffersPrev = ({ onClick }) => {

	const [hoverButton, setHover] = useState(false)

	const setHoverB = () => setHover(!hoverButton)

	return (
		<button onMouseEnter={setHoverB} onMouseLeave={setHoverB} className="special__prev w-11 h-11 flex items-center justify-center rounded-56px  absolute transition-all hover:bg-black bg-white py-2 px-3" onClick={onClick}>
			<svg width="10" className="fill-black transition-all" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.33 8L1.03 16L0 15L4 9L4.7 8L4 7L0 1L1.03 0L9.33 8Z" fill={`${hoverButton ? 'white' : "black"}`} />
			</svg>
		</button>
	)
}
export default SpecialOffersPrev