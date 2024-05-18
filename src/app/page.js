import Hero from '@/components/hero/Hero';
import Nav from '@/components/nav/Nav';

export default function Home() {
	return (
		<main className='w-full h-full relative'>
			{/* <div className='w-[95%] md:w-[90%]'> */}
			<Nav />
			<Hero />
			{/* </div> */}
		</main>
	);
}
