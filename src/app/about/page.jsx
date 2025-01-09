import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import MoreInfo from '../../components/moreInfo/MoreInfo';
import Nav from '../../components/nav/Nav';
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs';

export default function About() {
	return (
		<section className='w-full flex flex-col justify-between  bg-secondary'>
			<Nav />
			<Carousel />
			<MoreInfo />
			<WhyChooseUs />
			<Footer />
		</section>
	);
}
