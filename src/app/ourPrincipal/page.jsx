import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
import Principal from '../../components/principal/Principal';

export default function page() {
	return (
		<section>
			<Nav />
			<Carousel />
			<Principal />
			<Footer />
		</section>
	);
}
