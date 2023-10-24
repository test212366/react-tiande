import prod1 from '../../images/templates/1product.jpg'
import serviceCenter from '../../images/templates/serviceCenter.jpg'
import img2 from '../../images/templates/service2.jpg'
import img3 from '../../images/templates/service3.jpg'

import DropItemDown from '../DropItemDown/DropItemDown'

const DropCompany = ({ show, setShow, showDrop, scrollMenu }) => {
	return (
		<>
			<div onMouseEnter={showDrop} onMouseLeave={setShow} className={`${show.showCompany ? 'active' : "hiddenCustom"} absolute top-70 ${scrollMenu ? 'top-10 !fixed' : ""} left-0 right-0 bg-red h-10 z-30`}></div>

			<section onMouseLeave={setShow} onMouseEnter={showDrop} className={`absolute dropDownShadow .2x1:pt-2 border-t border-gray flex z-20 right-0 left-0 h-56 .3x1:pt-0 .3x1:h-44 .3x1:items-start .3x1:pt-5  transition-all bg-white ${scrollMenu ? '!mt-7' : ""} mt-9 ${show.showCompany ? 'active' : "hiddenCustom"}`}>
				<div className="w-1816px  px-2 my-0 mx-auto flex items-center justify-center">

					<DropItemDown src={prod1} title="НОВОСТИ" />
					<DropItemDown src={serviceCenter} title="СЕРВЕСНЫЕ ЦЕНТРЫ" />
					<DropItemDown src={img2} title="КОНТАКТЫ" />
					<DropItemDown src={img3} title="TIANDESHOPPING" />
					<DropItemDown src={img2} title='БЛАГОТВОРИТЕЛЬНАЯ' title2='ДЕЯТЕЛЬНОСТЬ' />
					<DropItemDown src={img2} title='КОЛОГИЧЕСКАЯ' title2='ПРОГРАММА' />
					<DropItemDown src={img2} title='БРЕНДБУК' />


				</div>
			</section >

		</>

	)
}
export default DropCompany