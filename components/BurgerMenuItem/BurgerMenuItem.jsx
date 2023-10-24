import { useState } from "react"

const BurgerMenuItem = ({ title }) => {
	const [show, setShow] = useState(false),
		[showSub, setShowSub] = useState({
			anti: false,
			ns: false,
			mask: false,
			toniz: false,
			probl: false
		})


	const setShowB = () => {
		setShow(!show)
		setShowSub({
			anti: false,
			ns: false,
			mask: false,
			toniz: false,
			probl: false
		})
	},
		setShowSubS = (title) => {
			switch (title) {
				case 'anti':
					return setShowSub({
						anti: !showSub.anti,
						ns: false,
						mask: false,
						toniz: false,
						probl: false
					})
				case 'ns':
					return setShowSub({
						anti: false,
						ns: !showSub.ns,
						mask: false,
						toniz: false,
						probl: false
					})
				case 'mask':
					return setShowSub({
						anti: false,
						ns: false,
						mask: !showSub.mask,
						toniz: false,
						probl: false
					})
				case 'toniz':
					return setShowSub({
						anti: false,
						ns: false,
						mask: false,
						toniz: !showSub.toniz,
						probl: false
					})
				case 'probl':
					return setShowSub({
						anti: false,
						ns: false,
						mask: false,
						toniz: false,
						probl: !showSub.probl
					})

			}
		}


	return (
		<div className={`p-3 border-b border-gray-light2  overflow-hidden bg-white transitionCustom  ${showSub.anti || showSub.ns || showSub.mask || showSub.toniz || showSub.probl ? 'customDrop' : ''} ${show ? 'activeDropBurgerMenu bg-white-BG_FILTER' : "h-11   "}`}>
			<div onClick={setShowB} className=" flex justify-between items-center">
				<p className="font-montserrat text-15px">{title}</p>
				<svg className="arrowItem transitionCustom " width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.2937 6.525L9 10.8361L4.69687 6.525L3.375 7.85223L9 13.5L14.625 7.85223L13.2937 6.525Z" fill={show ? 'black' : `#DBDCDA`} />
				</svg>
			</div>
			<div className="pl-3 pt-6 -mb-4 ">
				<div className="overflow-auto ">
					<div className="flex pb-6 items-center font-montserrat text-13px font-medium text-primary">Все товары <svg className="ml-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.375 10.3396L7.7281 7L4.375 3.65312L5.40729 2.625L9.8 7L5.40729 11.375L4.375 10.3396Z" fill="#337202" />
					</svg>
					</div>


					<div className={`transitionCustom overflow-hidden ${showSub.anti ? 'activeSubDrop' : ' h-5 mb-6'}`}>
						<div onClick={() => setShowSubS('anti')} className="flex items-center justify-between">
							<p className="font-montserrat text-13px">Антивозрастной уход</p>
							<svg className="subDr transitionCustom" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.2937 6.525L9 10.8361L4.69687 6.525L3.375 7.85223L9 13.5L14.625 7.85223L13.2937 6.525Z" fill={showSub.anti ? 'black' : "#DBDCDA"} />
							</svg>
						</div>
						<div className="pl-3">
							<p className="flex pt-7 pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Все товары
							</p>
							<p className="flex   pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">День
							</p>
							<p className="flex pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Ночь
							</p>
							<p className="flex  pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Экстра-уход
							</p>
						</div>


					</div>
					<div className={`transitionCustom overflow-hidden ${showSub.ns ? 'activeSubDrop' : '  mb-6 h-5'}`}>
						<div onClick={() => setShowSubS('ns')} className="flex items-center justify-between">
							<p className="font-montserrat text-13px">Глубокое очищение</p>
							<svg className="subDr transitionCustom" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.2937 6.525L9 10.8361L4.69687 6.525L3.375 7.85223L9 13.5L14.625 7.85223L13.2937 6.525Z" fill={showSub.ns ? 'black' : "#DBDCDA"} />
							</svg>
						</div>
						<div className="pl-3">
							<p className="flex pt-7 pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Все товары
							</p>
							<p className="flex   pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">День
							</p>
							<p className="flex pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Ночь
							</p>
							<p className="flex  pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Экстра-уход
							</p>
						</div>


					</div>
					<div className={`transitionCustom  overflow-hidden ${showSub.mask ? 'activeSubDrop' : '  mb-6 h-5'}`}>
						<div onClick={() => setShowSubS('mask')} className="flex items-center justify-between">
							<p className="font-montserrat text-13px">Маски</p>
							<svg className="subDr transitionCustom" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.2937 6.525L9 10.8361L4.69687 6.525L3.375 7.85223L9 13.5L14.625 7.85223L13.2937 6.525Z" fill={showSub.mask ? 'black' : "#DBDCDA"} />
							</svg>
						</div>
						<div className="pl-3">
							<p className="flex pt-7 pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Все товары
							</p>
							<p className="flex   pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">День
							</p>
							<p className="flex pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Ночь
							</p>
							<p className="flex  pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Экстра-уход
							</p>
						</div>


					</div>
					<div className={`transitionCustom overflow-hidden  ${showSub.toniz ? 'activeSubDrop' : '  mb-6 h-5'}`}>
						<div onClick={() => setShowSubS('toniz')} className="flex items-center justify-between">
							<p className="font-montserrat text-13px">Очищение и тонизирование</p>
							<svg className="subDr transitionCustom" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.2937 6.525L9 10.8361L4.69687 6.525L3.375 7.85223L9 13.5L14.625 7.85223L13.2937 6.525Z" fill={showSub.toniz ? 'black' : "#DBDCDA"} />
							</svg>
						</div>
						<div className="pl-3">
							<p className="flex pt-7 pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Все товары
							</p>
							<p className="flex   pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">День
							</p>
							<p className="flex pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Ночь
							</p>
							<p className="flex  pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Экстра-уход
							</p>
						</div>


					</div>
					<div className={`transitionCustom  overflow-hidden ${showSub.probl ? 'activeSubDrop' : ' mb-6 h-5'}`}>
						<div onClick={() => setShowSubS('probl')} className="flex items-center justify-between">
							<p className="font-montserrat text-13px">Проблемная кожа</p>
							<svg className="subDr transitionCustom" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.2937 6.525L9 10.8361L4.69687 6.525L3.375 7.85223L9 13.5L14.625 7.85223L13.2937 6.525Z" fill={showSub.probl ? 'black' : "#DBDCDA"} />
							</svg>
						</div>
						<div className="pl-3">
							<p className="flex pt-7 pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Все товары
							</p>
							<p className="flex   pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">День
							</p>
							<p className="flex pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Ночь
							</p>
							<p className="flex  pb-7 items-center font-montserrat text-11px font-medium text-black-70pe">Экстра-уход
							</p>
						</div>


					</div>
				</div>
			</div>




		</div>
	)
}
export default BurgerMenuItem