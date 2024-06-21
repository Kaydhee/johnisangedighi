import Hero from '../components/hero/Hero';
import Nav from '../components/nav/Nav';
import PropertyList from '../components/properties/PropertyList';
import PropertyModal from '../components/properties/PropertyModal';
import Slider from '../components/slider/Slider';
import WhatWeDo from '../components/whatWeDo/WhatWeDo';

export default function Home() {
	return (
		<main className='w-full h-full relative bg-primary'>
			<Hero />
			<PropertyList />
			<PropertyModal />
			<Slider />
			<WhatWeDo />
		</main>
	);
}
