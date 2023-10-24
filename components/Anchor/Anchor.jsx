import { useEffect, useState } from 'react';

const Anchor = ({ elements }) => {
	const [currentElement, setCurrentElement] = useState([
		{ 'sec-1': true },
		{ 'sec-2': false },
		{ 'sec-3': false },
		{ 'sec-4': false },
		{ 'sec-5': false },
		{ 'sec-6': false },
		{ 'sec-7': false },
		{ 'sec-8': false },
		{ 'sec-9': false },
		{ 'sec-10': false },
		{ 'sec-11': false },
		{ 'sec-12': false },
		{ 'sec-13': false },
		{ 'sec-14': false }
	]),
		[currentLenght, setCurrentLenght] = useState('01')


	useEffect(() => {
		//функция onEntry срабатывает тогда, когда в полевидимости пользователя попадается какой либо из ref, далее сеттится сейчас просматриваемый блок

		const onEntry = entry => entry.forEach(change => {
			change.isIntersecting && currentElement.forEach((elem, i) => {
				if (change.target.id in elem) {
					const newms = [
						{ 'sec-1': false },
						{ 'sec-2': false },
						{ 'sec-3': false },
						{ 'sec-4': false },
						{ 'sec-5': false },
						{ 'sec-6': false },
						{ 'sec-7': false },
						{ 'sec-8': false },
						{ 'sec-9': false },
						{ 'sec-10': false },
						{ 'sec-11': false },
						{ 'sec-12': false },
						{ 'sec-13': false },
						{ 'sec-14': false }
					]
					newms[i][`${change.target.id}`] = true
					setCurrentElement(newms)
					setCurrentLenght(i + 1 > 9 ? i + 1 : `0${i + 1}`)
				}
			})
		})

		const observer = new IntersectionObserver(onEntry, { threshold: [0.5] })

		// устанавливает слежку за элементом 
		for (const elm of elements) observer.observe(elm.current)
	}, [elements])

	const sections = [
		'sec-2',
		'sec-3',
		'sec-4',
		'sec-5',
		'sec-6',
		'sec-7',
		'sec-8',
		'sec-9',
		'sec-10',
		'sec-11',
		'sec-12',
		'sec-13',
		'sec-14'
	]

	const scroll = (i) => {

		switch (i + 1) {
			case (0):
				return window.scrollTo({ top: 0 })
			case (1):
				return window.scrollTo({ top: elements[1].current.offsetTop })
			case (2):
				return window.scrollTo({ top: elements[2].current.offsetTop })
			case (3):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (4):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (5):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (6):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (7):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (8):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (9):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (10):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (11):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (12):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
			case (13):
				return window.scrollTo({ top: elements[i + 1].current.offsetTop })
		}


	}

	return (
		<section className="z-30 bg-red fixed ..5x1:left-4 left-8 top-56 ..5x2:hidden">
			<small className="text-13px">{currentLenght}</small>
			<div className=" w-full flex flex-col items-center">
				<a onClick={() => scroll(-1)} href="#stock" className={`${currentElement[0]["sec-1"] ? 'activeAnchor' : ""} w-1 h-6 mt-1 cursor-pointer hover:bg-primary transition-all bg-gray-light2`}></a>

				{sections.map((sec, i) => <a onClick={() => scroll(i)} key={i} className={`${currentElement[i + 1][sec] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				)}



			</div>
			<small className="text-13px">14</small>
		</section>
	)
}
export default Anchor
