import Carousel from '../../components/carousel/Carousel';
import Nav from '../../components/nav/Nav';

export default function About() {
	return (
		<section className='w-full flex flex-col justify-between h-dvh bg-secondary'>
			<Nav />
			<Carousel />
		</section>
	);
}
