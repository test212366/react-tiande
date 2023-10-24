import Image from 'next/image'
import freshBg from '../../images/templates/FreshImg.jpg'
import DiscSubItem from './DiscSubItem'

const DiscountSliderFresh = () => {
	return (
		<>
			<section className="w-full   h-800px discSlider">
				<div className="flex h-full ..5x2:flex-col">
					<div className="discountImgWrap w-50%  h-full ..5x2:w-full ..5x2:bg-no-repeat ..5x2:bg-cover relative flex justify-center">


						<div className='absolute overflow-hidden ..5x2:w-475px  ..5x2:top-3 left-1/2 ..6x5:w-full ..6x5:p-3 ability .2x1.0:w-full w-60% top-80px '>
							<p className='font-montserrat font-medium text-26px ..6x5:text-base text-center text-primary'>NEW</p>
							<p className='font-montserrat italic text-52px tracking-tighter font-medium ..6x5:text-22px ..6x5:-mt-1 .2x10:text-5xl .2x10:text-center .5x1:text-3xl'>CЕРИЯ «FRESH CLICK»</p>
							<p className='font-montserrat text-22px leading-140% text-black-70pe text-center my-6 .5x1:my-3 ..6x5:text-13px ..6x5:mt-1 .5x1:text-base'>Шампунь, маска, сыворотка, бальзам, пенка, лосьон</p>
							<p className='font-montserrat mb-2 text-gray-quick-silver text-center .5x1:text-sm ..6x5:text-13px ..6x5:mt-8'>Эффекты:</p>
							<div className='flex overflow-x-auto scrol whitespace-nowrap ..6x5:pl-96  ..6x5:w-full ..5x2:w-475px ..5x2:pl-56 ..5x2:flex-nowrap flex-wrap justify-center'>
								<DiscSubItem title='против перхоти' />
								<DiscSubItem title='против седины' />
								<DiscSubItem title='против выпадения' />
								<DiscSubItem title='еще эффект' />
								<DiscSubItem title='еще эффект' />
								<DiscSubItem title='еще эффект' />
								<DiscSubItem title='еще эффект' />
								<DiscSubItem title='еще эффект' />

							</div>
						</div>
					</div>
					<div className="discountImgWrap cartI cartinka ..5x2:w-full w-50%   ">
						<Image
							className=" object-cover "
							src={freshBg}

							alt="discountImg"
							quality={100}
						/>
					</div>
				</div>
			</section>


		</>
	)
}
export default DiscountSliderFresh