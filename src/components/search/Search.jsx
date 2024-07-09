'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	filterProperties,
	setSelectedProperty,
	toggleModal,
} from '@//propertySlice';
import Image from 'next/image';
// import PropertyList from '../properties/PropertyList';

export default function Search() {
	const [filter, setFilter] = useState('');
	const dispatch = useDispatch();
	const properties = useSelector(
		(state) => state.property.filteredProperties || state.property.properties
	);

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
		dispatch(filterProperties(e.target.value));
	};

	const handlePropertySelect = (property) => {
		dispatch(setSelectedProperty(property));
		dispatch(toggleModal());
	};

	return (
		<div>
			<input
				type='text'
				value={filter}
				onChange={handleFilterChange}
				placeholder='Enter street name'
				className='text-black'
			/>
			<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  w-[90%]  mx-auto '>
				{properties.map((property) => (
					<li
						key={property.id}
						className='p-4  rounded shadow cursor-pointer bg-primaryVariant'
						onClick={() => handlePropertySelect(property)}>
						<div className='flex flex-col'>
							<div className='w-[10rem] h-[10rem] basis-2/4 '>
								<Image
									src={property.image}
									alt='property image'
									width={0}
									height={0}
									sizes='100%'
									style={{ width: '100%', height: '100%' }}
								/>
							</div>

							<p className='text-white text-base'>
								{property.name} - {property.address}
							</p>
						</div>
					</li>
				))}
			</ul>

			{/* <PropertyList /> */}
		</div>
	);
}
