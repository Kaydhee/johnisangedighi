import Image from 'next/image';
import Nav from '../nav/Nav';
import './hero.css';

import heroImage from '../../assets/heroImage.png';
import { IoIosAdd } from 'react-icons/io';

export default function Hero() {
	return (
		<section className='h-full w-full mx-auto  bg-secondary hero-section '>
			<Nav />
			<div className='w-[90%] h-full mx-auto mt:8 sm:mt-16 text-black flex items-center justify-between '>
				<div className='flex items-start justify-center flex-col gap-4 py-4'>
					<h1 className='text-5xl sm:text-3xl md:text-5xl font-bold mb-4'>
						Find A Property <br /> That Suits You
					</h1>

					<p className='text-base text-black sm:text-gray2 sm:w-[24.625rem]'>
						Want to find a home? We are ready to help you find one that suits
						your lifestyle and needs
					</p>

					<button className=' bg-black text-white px-4 py-2 rounded'>
						Get started
					</button>

					<div className='flex items-center justify-between gap-4'>
						<div className=''>
							<span className='flex items-center text-[1.75rem] font-semibold'>
								1200 <IoIosAdd className='icon-blue text-base' />
							</span>
							<small className='text-black sm:text-gray2 text-sm'>
								Listed Properties
							</small>
						</div>

						<div className=''>
							<span className='flex items-center text-[1.75rem] font-semibold'>
								4500 <IoIosAdd className='icon-blue text-base' />
							</span>
							<small className='text-black sm:text-gray2 text-sm'>
								Happy Customers
							</small>
						</div>

						<div className=''>
							<span className='flex items-center text-[1.75rem] font-semibold'>
								100 <IoIosAdd className='icon-blue text-base' />
							</span>
							<small className='text-black sm:text-gray2 text-sm'>awards</small>
						</div>
					</div>
				</div>

				<div className='hidden sm:block'>
					<Image
						src={heroImage}
						alt='hero image'
						width={0}
						height={0}
						sizes='100%'
						style={{ width: '100%', height: '100%' }}
					/>
				</div>
			</div>
		</section>
	);
}
