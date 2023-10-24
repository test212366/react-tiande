import { useState } from 'react';
import useWindowSize from '../utils/useWindowSize';

const FundsNext = ({ onClick, kolichestvo }) => {
	let size = useWindowSize();
	let perc = '47.5%';

	if (size.width <= 1600 && size.width > 1350) {
		perc = '47%';
	} else if (size.width <= 1350 && size.width > 1100) {
		perc = '46.5%';
	} else if (size.width <= 1100 && size.width > 990) {
		perc = '46%';
	} else if (size.width <= 990 && size.width > 780) {
		perc = '45%';
	} else if (size.width <= 780 && size.width > 650) {
		perc = '44%';
	} else if (size.width <= 650 && size.width > 500) {
		perc = '42%';
	} else if (size.width <= 500 && size.width > 400) {
		perc = '40%';
	} else if (size.width <= 400) {
		perc = '38%';
	} else if (size.width > 1600) {
		perc = '47.5%';
	}

	let styleR = {
		right: `calc(${perc} - 12.5px * ${kolichestvo})`,
		zIndex: 1,
		borderRadius: 20,
		bottom: 25,
	};

	const [hoverButton, setHover] = useState(false)

	const setHoverB = () => setHover(!hoverButton)

	return (
		<button onMouseEnter={setHoverB} onMouseLeave={setHoverB}
			className={` absolute transition-all hover:bg-black bg-white py-2 px-3 `}
			onClick={onClick}
			style={styleR}
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
export default FundsNext;
