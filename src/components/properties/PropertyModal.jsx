'use client';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../lib/features/properties/propertySlice';

export default function PropertyModal() {
	const dispatch = useDispatch();
	const { selectedProperty, isModalOpen } = useSelector(
		(state) => state.property
	);

	if (!isModalOpen || !selectedProperty) return null;

	return (
		<section className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
			<div className='bg-white p-6 rounded shadow-lg max-w-lg w-full'>
				<h2 className='text-xl font-bold mb-4'>{selectedProperty.name}</h2>
				<p>
					<strong>Address:</strong> {selectedProperty.address}
				</p>
				<p>
					<strong>Location:</strong> {selectedProperty.location}
				</p>
				<p>
					<strong>Rooms:</strong> {selectedProperty.rooms}
				</p>
				<button
					className='mt-4 bg-red-500 text-white px-4 py-2 rounded'
					onClick={() => dispatch(toggleModal())}>
					Close
				</button>
			</div>
		</section>
	);
}
