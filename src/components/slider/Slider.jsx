'use client';

import './slider.css';
import { motion } from 'framer-motion';

import Image from 'next/image';

import forSale from '../../assets/forSale.jpg';
// import toLet from '../../assets/toLet.jpg';
import forRent from '../../assets/forRent.jpg';
import lease from '../../assets/lease.jpg';
import insurance from '../../assets/insurance.jpg';
import valuation from '../../assets/valuation.jpg';
import realEstate from '../../assets/realEstate.jpg';

export default function Slider() {
	return (
		<motion.section
			initial={{ opacity: 0, x: 100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.2, duration: 0.8 }}
			className='my-[5%]'>
			<h2 className='text-center font-bold text-5xl text-white my-8'>
				Our Services
			</h2>
			<section className='slider'>
				<div className='textSlide'>
					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={forSale}
								alt='for sale'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Sales</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={forRent}
								alt='to Let'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Letting</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={lease}
								alt='Lease'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Leasing</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={insurance}
								alt='insurance'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									// objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Insurance</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={valuation}
								alt='valuation'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									// objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Valuation</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={realEstate}
								alt='real Estate'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									// objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Real Estate</p>
					</div>
				</div>

				<div className='textSlide'>
					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={forSale}
								alt='for sale'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Sales</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={forRent}
								alt='to Let'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Letting</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={lease}
								alt='Lease'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Leasing</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={insurance}
								alt='insurance'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									// objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Insurance</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={valuation}
								alt='valuation'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									// objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Valuation</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='h-[25rem] w-[20rem] mx-4 my-0 '>
							<Image
								src={realEstate}
								alt='real Estate'
								width={0}
								height={0}
								sizes='100%'
								style={{
									width: '100%',
									height: '100%',
									// objectFit: 'cover',
									borderRadius: '1rem',
								}}
							/>
						</div>

						<p>Real Estate</p>
					</div>
				</div>
			</section>
		</motion.section>
	);
}
