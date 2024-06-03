import Hero from '../components/hero/Hero';
import Nav from '../components/nav/Nav';
import PropertyList from '../components/properties/PropertyList';
import PropertyModal from '../components/properties/PropertyModal';

export default function Home() {
	return (
		<main className='w-full h-full relative'>
			<Hero />
			<PropertyList />
			<PropertyModal />
		</main>
	);
}
