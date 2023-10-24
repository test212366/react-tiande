const NewsDate = ({ title, svg }) => {
	return (
		<>
			<p className={`${svg ? 'flex items-center !font-medium' : ""} absolute dateNews left-3 text-black-70pe ..6x3:text-11px ..6x4:left-4 ..6x4:top-4 text-13px top-3 ..6x5:text-13px font-medium z-10 px-3 py-1 rounded-32px`}>{svg && svg} {title}</p>

		</>
	)
}
export default NewsDate