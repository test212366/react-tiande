import { useState } from "react";

const NewsPrev = ({ onClick, kolichestvo }) => {
	let styleL = {
		left: '20px',
		top: '45%',
		zIndex: 20,
		borderRadius: 25,
	};


	const [hoverButton, setHover] = useState(false)

	const setHoverB = () => setHover(!hoverButton)

	return (
		<button
			onMouseEnter={setHoverB} onMouseLeave={setHoverB}
			className="prev_rotate prevStories absolute transition-all hover:bg-black bg-white py-3 px-4"

			onClick={onClick}
			style={styleL}
		>
			<svg
				width="10"
				className="fill-black transition-all"
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
