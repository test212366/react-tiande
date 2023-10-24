import Image from "next/image"

const MiniPhotoDots = ({ slider, length, snap, img }) => {
	return (
		<div onClick={() => slider.current.swiper.slideTo(length)} className={`border ..5x2:hidden hover:border-black  .3x1:h-9 .3x1:w-9  mb-2 border-white mr-5 w-60px h-60px ${snap === length ? '!border-black-70pe' : ''}`}>
			<Image src={img} />
		</div>
	)
}
export default MiniPhotoDots