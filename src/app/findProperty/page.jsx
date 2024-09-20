import Nav from '../../components/nav/Nav';
import Search from '../../components/search/Search';

import { FaSearchLocation } from 'react-icons/fa';

export const metadata = {
	title: 'Our Services',
};

export default function page() {
	return (
		<section className='w-full h-svh md:h-[75svh] pb-[2%] bg-secondary'>
			<Nav />
			<section className=' w-[90%] pt-4 service mx-auto text-black'>
				<div className=''>
					<h3 className='mb-2 flex items-center gap-2'>
						<FaSearchLocation /> <span>Property search filter</span>
					</h3>
					<Search />
				</div>
			</section>
		</section>
	);
}
