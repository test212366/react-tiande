
import Image from "next/image"
import DropBusiness from "../DropBusiness/DropBusiness"
import DropBuyers from "../DropBuyers/DropBuyers"
import DropCompany from "../DropCompany/DropCompany"
import DropLoal from "../DropLoal/DropLoal"


const DropDownItem = ({ title, show, setShow, scrollMenu, showDrop }) => {
	switch (title) {
		case ('О компании'):
			return <DropCompany show={show} showDrop={showDrop} scrollMenu={scrollMenu} setShow={setShow} />
		case ('Бизнес-возможности'):
			return <DropBusiness show={show} showDrop={showDrop} scrollMenu={scrollMenu} setShow={setShow} />
		case ('Покупателям'):
			return <DropBuyers show={show} showDrop={showDrop} scrollMenu={scrollMenu} setShow={setShow} />
		case ('Программа лояльности'):
			return <DropLoal show={show} showDrop={showDrop} scrollMenu={scrollMenu} setShow={setShow} />
		default:
			return
	}
}
export default DropDownItem