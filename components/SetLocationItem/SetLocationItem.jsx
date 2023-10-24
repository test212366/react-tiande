import Image from 'next/image'


const SetLocationItem = ({ title, src, setCurrentCountry, setShow }) => {

	const setCurrentCountryHandle = () => {
		setCurrentCountry({ name: title, src })
		setShow(false)
	}

	return (
		<p onClick={setCurrentCountryHandle} className="flex cursor-pointer hover:bg-gray transition-colors items-center text-sm px-4 py-3">
			<Image
				src={src}
				className={`rounded-56px`}

				alt="no image"
			/>
			<span className="ml-1">{title}</span>

		</p>
	)
}
export default SetLocationItem