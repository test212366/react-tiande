import Image from 'next/image';
import Slider from 'react-slick';
import twoStories from '../../images/templates/2stories.jpg';
import treeStories from '../../images/templates/3stories.jpg';
import fourStories from '../../images/templates/4stories.jpg';
import oneStories from '../../images/templates/1stories.jpg';
import StoriesItem from '../StoriesItem/StoriesItem';
import StoriesNext from './StoriesNext';
import StoriesPrev from './StoriesPrev';
import useWindowSize from '../utils/useWindowSize';
import { useEffect, useRef, useState } from 'react';

const Stories = ({ refL }) => {
	const divBlock = useRef(null),
		slider = useRef(null)
	const size = useWindowSize();

	const [kol, setKol] = useState();
	const [widthDot, setWidthDot] = useState();

	useEffect(() => {
		setWidthDot(divBlock?.current?.getBoundingClientRect()?.width / kol);
		if (slider.current) setKol(slider?.current.props?.children?.length);
	}, [size.width, slider?.current]);

	const settings = {
		dots: false,
		Infinity: true,
		speed: 500,
		className: 'center',

		centerMode: true,
		variableWidth: true,



		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: <StoriesPrev />,
		nextArrow: <StoriesNext />,
		dotsClass: 'slick-dots slick-thumb',

		responsive: [
			{

				breakpoint: 1810,

				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,


					prevArrow: <StoriesPrev />,
					nextArrow: <StoriesNext />,
				},
			},
			{

				breakpoint: 1650,

				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,

					prevArrow: <StoriesPrev />,
					nextArrow: <StoriesNext />,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,

					centerMode: false,
					variableWidth: false,
					focusOnSelect: false,
					infinite: true,
					dots: true,
					prevArrow: false,
					nextArrow: false,
					appendDots: (dots) => {

						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -30,
								}}
							>
								<div
									ref={divBlock}
									style={{
										width: 200,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<ul
										style={{
											margin: '0px',
											display: 'flex',
											alignItems: 'flex-end',
											justifyContent: 'center',
										}}
									>
										{dots}
									</ul>
								</div>
							</div>
						);
					},
					customPaging: (i) => (
						<div
							style={{
								backgroundColor: ' rgb(218, 218, 218)',
								width: `${widthDot}px`,
								height: 4,
							}}
						/>
					),
				},
			},

			{
				breakpoint: 850,

				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					className: 'center',
					centerMode: false,
					variableWidth: false,
					focusOnSelect: false,
					infinite: true,
					dots: true,
					prevArrow: false,
					nextArrow: false,
					appendDots: (dots) => {

						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -30,
								}}
							>
								<div
									ref={divBlock}
									style={{
										width: 150,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<ul
										style={{
											margin: '0px',
											display: 'flex',
											alignItems: 'flex-end',
											justifyContent: 'center',
										}}
									>
										{dots}
									</ul>
								</div>
							</div>
						);
					},
					customPaging: (i) => (
						<div
							style={{
								backgroundColor: ' rgb(218, 218, 218)',
								width: `${widthDot}px`,
								height: 4,
							}}
						/>
					),
				},
			},
			{
				breakpoint: 600,

				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					className: 'center',
					centerMode: false,
					variableWidth: false,
					focusOnSelect: false,
					infinite: true,
					dots: true,
					prevArrow: false,
					nextArrow: false,
					appendDots: (dots) => {

						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -30,
								}}
							>
								<div
									ref={divBlock}
									style={{
										width: 150,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<ul
										style={{
											margin: '0px',
											display: 'flex',
											alignItems: 'flex-end',
											justifyContent: 'center',
										}}
									>
										{dots}
									</ul>
								</div>
							</div>
						);
					},
					customPaging: (i) => (
						<div
							style={{
								backgroundColor: ' rgb(218, 218, 218)',
								width: `${widthDot}px`,
								height: 4,
							}}
						/>
					),
				},
			},

		],
	}
	return (

		<section ref={refL} className="pt-16 my-0 mx-auto relative" id='sec-12'>

			<p className="ability ..5x2:text-22px left-1/2 top-14 font-montserrat font-medium flex items-center text-3xl italic absolute">
				<svg
					className="mr-3"
					width="44"
					height="44"
					viewBox="0 0 44 44"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M19 15.072C19.3094 14.8933 19.6906 14.8933 20 15.072L30.5 21.1342C30.8094 21.3128 31 21.6429 31 22.0002C31 22.3575 30.8094 22.6876 30.5 22.8662L20 28.9284C19.6906 29.107 19.3094 29.107 19 28.9284C18.6906 28.7498 18.5 28.4197 18.5 28.0624V15.938C18.5 15.5807 18.6906 15.2506 19 15.072ZM20.5 17.67V26.3303L28 22.0002L20.5 17.67Z"
						fill="#337202"
					/>
					<circle cx="22" cy="22" r="21.5" stroke="#337202" />
				</svg>
				ИСТОРИИ
			</p>
			<div className="mt-16 ..5x2:h-64 ..5x4:h-auto">
				<Slider {...settings} ref={slider} className='storiesOpacity'>
					<StoriesItem text="Reels" photo={oneStories} />
					<StoriesItem text="LiveShop" photo={twoStories} />
					<StoriesItem text="Бесплатная доставка" photo={treeStories} />
					<StoriesItem text="Скидки" photo={fourStories} />
					<StoriesItem text="Reels" photo={oneStories} />
					<StoriesItem text="LiveShop" photo={twoStories} />
					<StoriesItem text="Бесплатная доставка" photo={treeStories} />
					<StoriesItem text="Скидки" photo={fourStories} />
				</Slider>
			</div>
		</section>
	);
};
export default Stories;
