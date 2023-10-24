import React, { useState } from 'react';
import { useRef } from 'react';
import Anchor from '../components/Anchor/Anchor';
import Buyers from '../components/Buyers/Buyers';
import Clubs from '../components/Clubs/Clubs';
import ConfirmLocationModalWindow from '../components/ConfirmLocationModalWindow/ConfirmLocationModalWIndow';
import DiscountsSlider from '../components/DiscountsSlider/DiscountsSlider';
import Footer from '../components/Footer/Footer';
import Funds from '../components/Funds/Funds';
import Header from '../components/Header/Header';
import Health from '../components/Health/Health';
import Instrumensts from '../components/Instruments/Instruments';
import Layout from '../components/Layout/Layout';
import News from '../components/News/News';
import Partners from '../components/Partners/Partners';
import PhoneNavigation from '../components/PhoneNavigation/PhoneNavigation';
import Products from '../components/Products/Products';
import Promo from '../components/Promo/Promo';
import SeaAct from '../components/SeaAct/SeaAct';
import SpecialOffers from '../components/SpecialOffers/SpecialOffers';
import Stories from '../components/Stories/Stories';
import Support from '../components/Support/Support';
import Trands from '../components/Trands/Trands';
import ButtonTop from '../components/ButtonTop/ButtonTop';
import SearchResult from '../components/SearchResult/SearchResult';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import previewBurger from '../images/templates/previewBurger.jpg';
import WindowInfoPlusMobile from '../components/WindowInfoPlusMobile/WindowInfoPlusMobile';
import MenuPhone from '../components/MenuPhone/MenuPhone';

function Home() {
	const [showSearch, setShowSearch] = useState(false),
		[showBurger, setShowBurger] = useState(false);
	const [windowInfo, setWindowInfo] = useState(false);
	const [showMenu, setShowMenu] = useState(false)

	const close = () => setShowBurgerI(false),
		setShow = () => setShowMenu(!showMenu)


	const discount = useRef(null),
		special = useRef(null),
		buyers = useRef(null),
		products = useRef(null),
		sea = useRef(null),
		promo = useRef(null),
		Instruments = useRef(null),
		funds = useRef(null),
		partners = useRef(null),
		health = useRef(null),
		news = useRef(null),
		stories = useRef(null),
		clubs = useRef(null),
		trands = useRef(null);

	const [showProducts, setShowProducts] = useState({
		central: false,
		promo: false,
	});

	const showCentral = () => {
		if (window.innerWidth > 1000) return;
		setShowProducts({ ...showProducts, central: !showProducts.central });
	},
		showPromo = () => {
			if (window.innerWidth > 1000) return;
			setShowProducts({ ...showProducts, promo: !showProducts.promo });
		};



	return (
		<>
			<>

				<BurgerMenu showBurger={showBurger} close={close} setShowBurger={setShowBurger} src={previewBurger} title={'Категории'} />

				< MenuPhone showMenu={showMenu} showBurger={showBurger} setShowBurger={setShowBurger} />


			</>
			<Header
				showBurger={showBurger}
				setShowBurger={setShowBurger}
				showSearch={showSearch}
				setShowSearch={setShowSearch}
			/>
			<section className="container-base relative bg-white">
				<BurgerMenu
					showBurger={showBurger}
					setShowBurger={setShowBurger}
					src={previewBurger}
					title={'Категории'}
				/>
				<ButtonTop />
				<SearchResult isShow={showSearch} />
				<ConfirmLocationModalWindow />
				<DiscountsSlider refL={discount} setWindowInfo={setWindowInfo} />
				<SpecialOffers refL={special} />
				<Buyers refL={buyers} />
				<Products refL={products} />
				<News refL={news} />
				<SeaAct refL={sea} />
				<Promo refL={promo} showPromo={showPromo} />
				<Instrumensts refL={Instruments} />
				<Funds refL={funds} />
				<Partners refL={partners} />
				<Health refL={health} />
				<Stories refL={stories} />
				<Clubs refL={clubs} />
				<Trands refL={trands} />
				<Support />

				{windowInfo && (
					<WindowInfoPlusMobile
						windowInfo={windowInfo}
						setWindowInfo={setWindowInfo}
					/>
				)}
				<PhoneNavigation setShow={setShow} />
				<Anchor
					elements={[
						discount,
						special,
						buyers,
						products,
						news,
						sea,
						promo,
						Instruments,
						funds,
						partners,
						health,
						stories,
						clubs,
						trands,
					]}
				/>
			</section>

		</>
	);
}

export default Home;

Home.getLayout = function getLayout(page) {
	return (
		<Layout title="Главная" description="Описание главной страницы">
			{page}
			<Footer />
		</Layout>
	);
};
