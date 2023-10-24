import { useState } from "react"
import { useEffect } from "react"

const ButtonTop = () => {
	const [visible, setVisible] = useState(false)



	useEffect(() => {
		window.addEventListener('scroll', () => {

			if (window.visualViewport.pageTop >= 50) setVisible(true)
			else setVisible(false)
		})


	}, [])


	return (
		<a href="#stock" className={`${visible ? 'flex' : 'hidden'} ..5x2:!hidden bg-white w-11 h-11 pt-1 fixed font-montserrat tracking-wide bottom-20 right-12 z-40 items-center text-13px font-medium flex-col`}><svg className="mr-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11.8167 12.2L8 8.36788L4.175 12.2L3 11.0202L8 6L13 11.0202L11.8167 12.2Z" fill="#18202B" />
		</svg>
			TOP</a>
	)
}
export default ButtonTop