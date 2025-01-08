'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
	const images = [
		'/images/old.webp',
		'/images/old1.webp',
		'/images/old3.webp',
		'/images/old1.webp',
		// '/images/old1.webp',
		// '/images/old3.webp',
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 2000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className='relative w-full h-screen overflow-hidden'>
			{/* Image Slider */}
			<div
				className='flex transition-transform duration-1000 ease-in-out h-full'
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{images.map((image, index) => (
					<div
						key={index}
						className='w-full h-full flex-shrink-0 relative'>
						<Image
							src={image}
							alt={`Slide ${index + 1}`}
							fill
							style={{ objectFit: 'cover' }}
							priority={index === 0}
						/>
						<div className='absolute inset-0 bg-black/50 z-10'></div>
					</div>
				))}
			</div>

			{/* Overlay Text */}
			<div className='absolute inset-0 flex items-center justify-center'>
				<h1 className='text-white text-4xl md:text-6xl font-bold'>About Us</h1>
			</div>

			{/* Navigation Dots */}
			<div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full ${
							currentIndex === index ? 'bg-white' : 'bg-gray-500'
						}`}
					/>
				))}
			</div>
		</div>
	);
}
