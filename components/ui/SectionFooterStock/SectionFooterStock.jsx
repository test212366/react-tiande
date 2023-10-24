import React from 'react';

export default function SectionFooterStock(props) {
	return (
		<>
			{props.text ? (
				<article className={`..5x2:pb-24   ..5x4:px-10 ..6x5:px-2 ..6x5:pb-28 ..6x6:pb-20 ..5x4:text-center  bg-label-bg px-20 flex flex-col justify-center items-center ${props.isDetail ? '..5x2:!pb-44' : ""}`}>
					{props.text.map((el, index) => (

						<p key={index}
							className={`..6x1:text-11px ..5x2:flex leading-140% ..6x5:h-10 ..5x2:h-14 ..6x03:h-12 ..5x2:flex-wrap ${index === 0 ? 'pb-16' : ''} ..6x5:text-9px mt-4   container-base  ..6x6:items-start ..6x6:mt-2  h-20 font-noto-sans font-normal text-13px ${index + 1 < props.text.length ? 'border-b border-stroke' : ''
								}`}
						>
							{el}
						</p>

					))}
				</article>
			) : (
				<></>
			)}
		</>
	);
}
