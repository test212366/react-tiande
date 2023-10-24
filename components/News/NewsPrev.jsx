import { useState } from "react";

const NewsPrev = ({ onClick, kolichestvo, isDetail }) => {
	let styleL = {
		left: isDetail ? -25 : 0,
		top: !isDetail ? '60%' : '50%',
		zIndex: 20,
		borderRadius: 25,
	}


	const [hoverButton, setHover] = useState(false)

	const setHoverB = () => setHover(!hoverButton)

	return (
		<button
			onMouseEnter={setHoverB} onMouseLeave={setHoverB}
			className={`prev_rotate absolute w-11 h-11 flex items-center justify-center  rounded-56px transition-all hover:!bg-black bg-white py-3 px-4 ${isDetail ? '!bg-white-80pe ' : ""}`}

			onClick={onClick}
			style={styleL}
		>
			<svg
				width="10"
				className="fill-black transition-all arrowAdapt"
				height="16"
				viewBox="0 0 10 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.33 8L1.03 16L0 15L4 9L4.7 8L4 7L0 1L1.03 0L9.33 8Z"
					fill={`${hoverButton ? 'white' : "black"}`}
				/>
			</svg>
		</button>
	);
};
export default NewsPrev;
