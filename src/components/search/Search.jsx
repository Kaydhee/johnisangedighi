'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	filterByPurpose,
	filterByRooms,
	filterByStatus,
	filterByTitle,
	filterProperties,
	setSelectedProperty,
	toggleModal,
} from '@//propertySlice';
import Image from 'next/image';

export default function Search() {
	const [filter, setFilter] = useState('');
	const [titleFilter, setTitleFilter] = useState('');
	const [roomsFilter, setRoomsFilter] = useState('');
	const dispatch = useDispatch();
	const properties = useSelector(
		(state) => state.property.filteredProperties || state.property.properties
	);

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
		dispatch(filterProperties(e.target.value));
	};

	const handleTitleFilterChange = (e) => {
		setTitleFilter(e.target.value);
		dispatch(filterByTitle(e.target.value));
	};

	const handleRoomsFilterChange = (e) => {
		const rooms = e.target.value === '' ? '' : parseInt(e.target.value, 10);
		setRoomsFilter(rooms);
		dispatch(filterByRooms(rooms));
	};

	const handlePropertySelect = (property) => {
		dispatch(setSelectedProperty(property));
		dispatch(toggleModal());
	};

	const handlePurposeFilter = (purpose) => {
		dispatch(filterByPurpose(purpose));
	};

	const handleStatusFilter = (status) => {
		dispatch(filterByStatus(status));
	};

	return (
		<main className='flex items-center justify-start gap-4 h-full'>
			<section className='flex flex-col items-start justify-between gap-4 basis-[30%]'>
				<input
					type='text'
					value={filter}
					onChange={handleFilterChange}
					placeholder='Enter street name'
					className='text-secondary shadow bg-primary outline-none p-2'
				/>

				<input
					type='text'
					value={titleFilter}
					onChange={handleTitleFilterChange}
					placeholder='Enter title'
					className='text-secondary shadow bg-primary outline-none p-2'
				/>

				<div className='flex items-start justify-start flex-wrap gap-2 w-1/2'>
					<button
						onClick={() => handlePurposeFilter('residential')}
						className='flex items-center justify-center bg-secondary text-white text-base cursor-pointer py-2 px-4 '>
						Residential
					</button>
					<button
						onClick={() => handlePurposeFilter('commercial')}
						className='flex items-center justify-center bg-secondary text-white text-base cursor-pointer py-2 px-4 '>
						Commercial
					</button>
					<button
						onClick={() => handleStatusFilter('for sale')}
						className='flex items-center justify-center bg-secondary text-white text-base cursor-pointer py-2 px-4 '>
						For Sale
					</button>
					<button
						onClick={() => handleStatusFilter('for lease')}
						className='flex items-center justify-center bg-secondary text-white text-base cursor-pointer py-2 px-4 '>
						For Lease
					</button>
					<button
						onClick={() => handleStatusFilter('for letting')}
						className='flex items-center justify-center bg-secondary text-white text-base cursor-pointer py-2 px-4 '>
						For Letting
					</button>
				</div>

				<select
					value={roomsFilter}
					onChange={handleRoomsFilterChange}
					className='text-white shadow bg-primary outline-none p-2 cursor-pointer'>
					<option value=''>Select number of rooms</option>
					<option value='1'>1 Room</option>
					<option value='2'>2 Rooms</option>
					<option value='3'>3 Rooms</option>
					<option value='4'>4 Rooms</option>
					<option value='5'>5 Rooms</option>
					<option value='6'>6+ Rooms</option>
				</select>
			</section>

			<article className='basis-[70%]'>
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
			</article>
		</main>
	);
}
