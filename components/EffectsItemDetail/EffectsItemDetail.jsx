const EffectsItemDetail = ({ title, mb, arrow, showComp, showComponents }) => {
	return (
		<>


			<p onClick={showComp} className={`font-noto-sans ${mb ? 'mb-2 ..5x2:!px-2 ' : ""} bg-white hover:border-solid transition-all cursor-pointer text-xs font-light py-2.5 h-9 px-4 .1x1:py-1.5 .1x1:h-8 text-black border border-dotted mr-2 rounded border-primary ${arrow ? `flex items-center ${showComponents ? "" : "w-70px"}` : ""}`}>{title} {arrow && <svg className={`ml-0.5 ${showComponents ? '-rotate-90' : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.75 8.8625L6.62409 6L3.75 3.13125L4.63482 2.25L8.4 6L4.63482 9.75L3.75 8.8625Z" fill="#949792" />
			</svg>

			}</p>

		</>
	)
}
export default EffectsItemDetail