'use client';

import { useDispatch, useSelector } from 'react-redux';
import {
	setSelectedProperty,
	toggleModal,
} from '../../lib/features/properties/propertySlice';
import Image from 'next/image';

import { FaBed, FaBath } from 'react-icons/fa';
import { GiHomeGarage } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';

export default function PropertyList() {
	const dispatch = useDispatch();
	const properties = useSelector((state) => state.property.properties);

	const handlePropertyClick = (property) => {
		dispatch(setSelectedProperty(property));
		dispatch(toggleModal());
	};

	return (
		<section className='flex flex-col  my-[2%] w-full relative listing'>
			<h2 className='text-center font-bold text-2xl sm:text-3xl md:text-5xl mb-4 text-blue'>
				Featured Properties
			</h2>

			<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  w-[90%] md:w-[80%] mx-auto '>
				{properties.map((property) => (
					<div
						key={property.id}
						className='p-4 border border-blue rounded shadow cursor-pointer bg-white'
						onClick={() => handlePropertyClick(property)}>
						<div className='flex items-start flex-col md:flex-row justify-between gap-4 '>
							<div className='w-[20rem] h-[20rem] basis-2/4 '>
								<Image
									src={property.image}
									alt='property image'
									width={0}
									height={0}
									sizes='100%'
									style={{ width: '100%', height: '100%' }}
								/>
							</div>

							<div className='items-start basis-2/4'>
								<h2 className='text-lg md:text-2xl text-blue font-bold'>
									{property.name}
								</h2>
								<p className='text-black2 text-base'>{property.address}</p>
								<p className='text-black2 text-base flex items-center justify-start gap-2'>
									{' '}
									<MdLocationOn /> {property.location}
								</p>
								<p className='font-bold text-red text-2xl sm:text-3xl'>
									{' '}
									{property.price}
								</p>
							</div>
						</div>

						<div className='flex items-center justify-between my-3 bg-blue p-4 rounded text-white'>
							<p className='flex items-center justify-between gap-2 text-xs sm:text-base'>
								<FaBed /> {property.rooms} rooms
							</p>
							<p className='flex items-center justify-between gap-2 text-xs sm:text-base'>
								<GiHomeGarage /> {property.garage} parking space
							</p>
							<p className='flex items-center justify-between gap-2 text-xs sm:text-base'>
								<FaBath /> {property.bath} bathrooms
							</p>
						</div>
					</div>
				))}
			</section>
		</section>
	);
}
