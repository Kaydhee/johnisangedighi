'use client';
// import Image from 'next/image';
import Nav from '../nav/Nav';
import './hero.css';

// import heroImage from '../../assets/heroImage.png';
// import { IoIosAdd } from 'react-icons/io';
import { useState, useEffect } from 'react';

export default function Hero() {
	const slides = [
		{
			text: 'Explore a variety of properties to suit your lifestyle.',
			description: 'Our professional services',
			bgImage: '/images/old.webp',
			textFade: 'fade-left',
		},
		{
			text: 'Secure your future with the right property today.',
			description: 'Our professional services',
			bgImage: '/images/old1.webp',
			textFade: 'fade-right',
		},
		{
			text: "Find a place you'll love to call home.",
			description: 'Our professional services',
			bgImage: '/images/old3.webp',
			textFade: 'fade-up',
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [triggerAnimation, setTriggerAnimation] = useState(false);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	useEffect(() => {
		const autoSlide = setInterval(() => {
			if (!isHovered) nextSlide();
		}, 5000);

		return () => clearInterval(autoSlide);
	}, [isHovered]);

	useEffect(() => {
		setTriggerAnimation(true);

		const timeout = setTimeout(() => {
			setTriggerAnimation(false);
		}, 1000); // Duration matches animation time

		return () => clearTimeout(timeout);
	}, [currentSlide]);

	return (
		<section
			className='relative h-screen w-full bg-secondary overflow-hidden'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			{/* Navbar */}
			<div className='absolute top-0 left-0 w-full z-50'>
				<Nav />
			</div>

			{/* Background Images */}
			<div className='absolute inset-0'>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
							currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
						}`}
						style={{
							backgroundImage: `url(${slide.bgImage})`,
						}}>
						{/* Dark Overlay */}
						<div className='absolute inset-0 bg-black/50 z-10'></div>
					</div>
				))}
			</div>

			{/* Darker Overlay */}
			<div className='absolute inset-0 bg-black/10'></div>

			{/* Content */}
			<div className='absolute inset-0 flex items-center justify-start px-12 text-white z-20'>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute flex flex-col items-start transition-all duration-[1000ms] ${
							currentSlide === index
								? `${slide.textFade} opacity-100`
								: 'opacity-0'
						}`}>
						{/* Slanted Background with Blur and Overlay */}
						<div className='relative bg-white text-black px-6 py-4 sm:px-12 sm:py-8 w-[90%] sm:w-fit mx-auto before:absolute before:top-0 before:left-0 before:w-full before:h-full before:skew-y-[-5deg] before:bg-white before:opacity-90 before:backdrop-blur-sm before:z-[-1]'>
							{/* Paragraph with Slide Up Animation */}
							<p
								className={`text-base sm:text-2xl font-medium mb-2 sm:mb-4 text-center sm:text-left ${
									triggerAnimation ? 'animate-slideUp' : ''
								}`}>
								{slides[currentSlide].description}
							</p>

							{/* Heading with Slide In Right Animation */}
							<h1
								className={`text-2xl sm:text-5xl font-bold text-center sm:text-left ${
									triggerAnimation ? 'animate-slideInRight' : ''
								}`}>
								{slides[currentSlide].text}
							</h1>
						</div>
					</div>
				))}
			</div>

			{/* Navigation Buttons */}
			{isHovered && (
				<>
					<button
						onClick={prevSlide}
						className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 text-black px-4 py-2 rounded-full z-20'>
						&#8592;
					</button>
					<button
						onClick={nextSlide}
						className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 text-black px-4 py-2 rounded-full z-20'>
						&#8594;
					</button>
				</>
			)}
		</section>
		// <section className='h-full w-full mx-auto  bg-secondary hero-section '>
		// 	<Nav />
		// 	<div className='w-[90%] h-full mx-auto mt:8 sm:mt-16 text-black flex items-center justify-between '>
		// 		<div className='flex items-start justify-center flex-col gap-4 py-4'>
		// 			<h1 className='text-5xl sm:text-3xl md:text-5xl font-bold mb-4'>
		// 				Find A Property <br /> That Suits You
		// 			</h1>

		// 			<p className='text-base text-black sm:text-gray2 sm:w-[24.625rem]'>
		// 				Want to find a home? We are ready to help you find one that suits
		// 				your lifestyle and needs
		// 			</p>

		// 			<button className=' bg-black text-white px-4 py-2 rounded'>
		// 				Get started
		// 			</button>

		// 			<div className='flex items-center justify-between gap-4'>
		// 				<div className=''>
		// 					<span className='flex items-center text-[1.75rem] font-semibold'>
		// 						1200 <IoIosAdd className='icon-blue text-base' />
		// 					</span>
		// 					<small className='text-black sm:text-gray2 text-sm'>
		// 						Listed Properties
		// 					</small>
		// 				</div>

		// 				<div className=''>
		// 					<span className='flex items-center text-[1.75rem] font-semibold'>
		// 						4500 <IoIosAdd className='icon-blue text-base' />
		// 					</span>
		// 					<small className='text-black sm:text-gray2 text-sm'>
		// 						Happy Customers
		// 					</small>
		// 				</div>

		// 				<div className=''>
		// 					<span className='flex items-center text-[1.75rem] font-semibold'>
		// 						100 <IoIosAdd className='icon-blue text-base' />
		// 					</span>
		// 					<small className='text-black sm:text-gray2 text-sm'>awards</small>
		// 				</div>
		// 			</div>
		// 		</div>

		// 		<div className='hidden sm:block'>
		// 			<Image
		// 				src={heroImage}
		// 				alt='hero image'
		// 				width={0}
		// 				height={0}
		// 				sizes='100%'
		// 				style={{ width: '100%', height: '100%' }}
		// 			/>
		// 		</div>
		// 	</div>
		// </section>
	);
}
