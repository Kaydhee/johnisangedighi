import Search from '../../components/search/Search';

export const metadata = {
	title: 'Our Services',
};

export default function page() {
	return (
		<section className='w-full h-full bg-primary'>
			<section className=' w-[90%] pt-[25%] sm:pt-[15%] md:pt-[6%] service mx-auto text-white'>
				<div className=''>
					<h3 className='mb-4'>Property search filter</h3>
					<Search />
				</div>
			</section>
		</section>
	);
}
