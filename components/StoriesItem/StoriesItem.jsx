import Image from 'next/image';
import { useState } from 'react';

export default function ({ photo, text }) {
	const [isSee, setIsSee] = useState(false)


	const setSeeItem = () => setIsSee(true)

	return (

		<div onClick={setSeeItem} className="temp   px-1 mx-auto  ">


			<div className="relative  p-1 flex items-center justify-center transition-all hover:opacity-80 cursor-pointer stories">
				{isSee && <section className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white-80pe z-10'>
					<div className='flex flex-col items-center'>
						<svg className='..7x001:w-16 ..7x001:h-16' width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M38.8635 30.8287C39.4964 30.4633 40.2761 30.4633 40.909 30.8287L62.3863 43.2287C63.0191 43.5941 63.409 44.2693 63.409 45.0001C63.409 45.7309 63.0191 46.4061 62.3863 46.7715L40.909 59.1715C40.2761 59.5369 39.4964 59.5369 38.8635 59.1715C38.2307 58.8061 37.8408 58.1308 37.8408 57.4001V32.6001C37.8408 31.8694 38.2307 31.1941 38.8635 30.8287ZM41.9317 36.143V53.8572L57.2726 45.0001L41.9317 36.143Z" fill="#337202" />
							<circle cx="45" cy="45" r="44.5" stroke="#337202" />
						</svg>
						<p className='text-22px ..7x001:text-sm font-medium mt-5 ..5x2:text-base'>Недавно смотрели</p>

					</div>

				</section>}

				<Image className="object-cover" src={photo} width={350} height={350} alt="newsImg" />
				<p className="absolute bottom-5 left-5 font-montserrat font-medium text-xl text-white ..6x4:text-base">{text}</p>
			</div>
		</div>
	);
}
