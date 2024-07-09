import Search from '../search/Search';
import './hero.css';

export default function Hero() {
	return (
		<section className='min-h-svh w-full mx-auto my-0 hero-section'>
			<div className='w-[80%] text-white text-center text-box'>
				<h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4'>
					Find your desired property
				</h1>

				<div>
					<Search />
					<button>Any status</button>
					<button>For Let/Lease</button>
					<button>For sale</button>
				</div>
			</div>
		</section>
	);
}
