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
		<main className='flex flex-col md:flex-row items-center justify-start gap-4 md:gap-0 h-full pb-[10%]'>
			<section className='flex flex-col items-start justify-between gap-4  md:basis-[30%]'>
				<input
					type='text'
					value={filter}
					onChange={handleFilterChange}
					placeholder='Enter street name'
					className='text-black shadow bg-white outline-none p-1 sm:p-2'
				/>

				<input
					type='text'
					value={titleFilter}
					onChange={handleTitleFilterChange}
					placeholder='Enter title'
					className='text-black shadow bg-white outline-none p-1 sm:p-2'
				/>

				<select
					value={roomsFilter}
					onChange={handleRoomsFilterChange}
					className='text-white shadow bg-black outline-none p-1 sm:p-2 cursor-pointer'>
					<option value=''>Select number of rooms</option>
					<option value='1'>1 Room</option>
					<option value='2'>2 Rooms</option>
					<option value='3'>3 Rooms</option>
					<option value='4'>4 Rooms</option>
					<option value='5'>5 Rooms</option>
					<option value='6'>6+ Rooms</option>
				</select>

				<div className='flex  items-start justify-start flex-wrap gap-2 '>
					<button
						onClick={() => handlePurposeFilter('residential')}
						className='flex items-center justify-center bg-black text-white text-sm cursor-pointer py-1 sm:py-2 px-2 sm:px-4 '>
						Residential
					</button>

					<button
						onClick={() => handlePurposeFilter('commercial')}
						className='flex items-center justify-center bg-black text-white text-sm cursor-pointer py-1 sm:py-2 px-2 sm:px-4 '>
						Commercial
					</button>

					<button
						onClick={() => handleStatusFilter('for letting')}
						className='flex items-center justify-center bg-black text-white text-sm cursor-pointer py-1 sm:py-2 px-2 sm:px-4 '>
						For Letting
					</button>

					<button
						onClick={() => handleStatusFilter('for lease')}
						className='flex items-center justify-center bg-black text-white text-sm cursor-pointer py-1 sm:py-2 px-2 sm:px-4 '>
						For Lease
					</button>

					<button
						onClick={() => handleStatusFilter('for sale')}
						className='flex items-center justify-center bg-black text-white text-sm cursor-pointer py-1 sm:py-2 px-2 sm:px-4 '>
						For Sale
					</button>
				</div>
			</section>

			<article className='md:basis-[70%]'>
				<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mx-auto'>
					{properties.map((property) => (
						<li
							key={property.id}
							className='p-4  rounded shadow cursor-pointer bg-white'
							onClick={() => handlePropertySelect(property)}>
							<div className='flex flex-col '>
								<div className='w-full h-[10rem] sm:h-[15rem]  mb-4 '>
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

								<p className='text-black text-base'>
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
