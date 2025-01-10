'use client';
import { motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';
import {
	setSelectedProperty,
	toggleModal,
} from '../../lib/features/properties/propertySlice';
import Image from 'next/image';

import { FaBed, FaBath } from 'react-icons/fa';
import { GiHomeGarage } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { CgArrowLongRightR, CgArrowLongRight } from 'react-icons/cg';

export default function PropertyList() {
	const dispatch = useDispatch();
	const properties = useSelector((state) => state.property.properties);

	const handlePropertyClick = (property) => {
		dispatch(setSelectedProperty(property));
		dispatch(toggleModal());
	};

	return (
		<motion.section
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.2, duration: 0.8 }}
			className='w-full mx-auto flex linear flex-col py-8 relative listing overflow-hidden'>
			<div className='w-[90%] mx-auto flex flex-col'>
				<h2 className='flex items-center mb-4 gap-3 text-black'>
					<CgArrowLongRightR /> <span>POPULAR</span>
				</h2>

				<div className='flex items-center justify-between mb-4 sm:w-[90%]'>
					<h3 className='text-base sm:text-2xl font-semibold '>
						Our Popular Homes
					</h3>

					<h3 className=' text-base flex items-center gap-3 text-black'>
						<span>Explore All</span> <CgArrowLongRight />
					</h3>
				</div>

				<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  w-full   '>
					{properties.map((property) => (
						<div
							key={property.id}
							className='sm:p-4  rounded cursor-pointer bg-white'
							onClick={() => handlePropertyClick(property)}>
							<div className=''>
								<div className='w-full h-[10rem] sm:h-[20rem]  mb-4'>
									<Image
										src={property.image}
										alt='property image'
										width={0}
										height={0}
										sizes='100%'
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
										}}
									/>
								</div>

								<div className='items-start p-4 '>
									<h2 className='text-base text-black font-bold mb-2'>
										{property.name}
									</h2>

									<p className='text-black text-base flex items-center justify-start gap-2 mb-2'>
										{' '}
										<MdLocationOn /> {property.location}
									</p>
									<p className='font-bold text-black text-base mb-2'>
										{' '}
										{property.price}
									</p>
								</div>
							</div>

							<div className='flex items-center justify-between my-2 bg-ultramarine rounded text-black p-4'>
								<p className='flex items-center justify-between gap-2 text-xs md:text-sm'>
									<FaBed /> {property.rooms} rooms
								</p>
								<p className='flex items-center justify-between gap-2 text-xs md:text-sm'>
									<GiHomeGarage /> {property.garage} parking space
								</p>
								<p className='flex items-center justify-between gap-2 text-xs md:text-sm'>
									<FaBath /> {property.bath} bathrooms
								</p>
							</div>
						</div>
					))}
				</section>
			</div>
		</motion.section>
	);
}
