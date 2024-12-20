'use client';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../lib/features/properties/propertySlice';
import Image from 'next/image';

export default function PropertyModal() {
	const dispatch = useDispatch();
	const { selectedProperty, isModalOpen } = useSelector(
		(state) => state.property
	);

	if (!isModalOpen || !selectedProperty) return null;

	return (
		<section className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
			<div className='bg-white p-6 rounded shadow-lg max-w-lg w-full'>
				<h2 className='text-xl text-black font-bold mb-4'>
					{selectedProperty.name}
				</h2>

				<div className='h-[20rem] mb-2'>
					<Image
						src={selectedProperty.image}
						alt='property image'
						width={0}
						height={0}
						sizes='100%'
						style={{ width: '100%', height: '100%', borderRadius: '8px' }}
					/>
				</div>
				<p className='text-black'>
					<strong>Address:</strong> {selectedProperty.address}
				</p>
				<p className='text-black'>
					<strong>Location:</strong> {selectedProperty.location}
				</p>
				<p className='text-black'>
					<strong>Rooms:</strong> {selectedProperty.rooms}
				</p>
				<p className='text-black'>
					<strong>price:</strong> {selectedProperty.price}
				</p>
				<div className='flex gap-4'>
					<button
						className='mt-4 bg-black text-white px-4 py-2 rounded'
						onClick={() => dispatch(toggleModal())}>
						Close
					</button>

					<button
						className='mt-4 bg-transparent border border-black text-black px-4 py-2 rounded'
						onClick={() => dispatch(toggleModal())}>
						proceed{' '}
					</button>
				</div>
			</div>
		</section>
	);
}
