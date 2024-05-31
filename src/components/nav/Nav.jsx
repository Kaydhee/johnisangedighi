'use client';
// import Image from 'next/image';
// import logo from '../../assets/logo.svg';

import { useState } from 'react';
import { MdMenu, MdOutlineClose } from 'react-icons/md';

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	// function that handles the navbar toggles.
	function handleShowMenu() {
		setShowMenu(!showMenu);
		setIsExpanded(!isExpanded);
	}

	return (
		<nav className='mx-auto fixed mt-8 z-50 w-full nav'>
			<div className='mx-auto w-[90%] backdrop-blur-md bg-white/70 shadow-md rounded-full flex items-center justify-between'>
				<div className='w-[10rem] p-4 '>
					{/* <Image
						src={logo}
						alt='company logo'
						width={0}
						height={0}
						sizes='100%'
						style={{ width: '100%', height: 'auto' }}
					/> */}
					<h1>Jia</h1>
				</div>

				<ul className='hidden md:flex items-center justify-center gap-2 cursor-pointer'>
					<li>
						<a href='#link3'>find a property</a>
					</li>
					<li>
						<a href='#link1'>services</a>
					</li>
					<li>
						<a href='#link2'>about us</a>
					</li>
					<li>
						<a href='#link3'>projects</a>
					</li>
				</ul>

				<button
					className='md:hidden'
					onClick={handleShowMenu}>
					{isExpanded ? (
						<MdOutlineClose className='text-blue text-2xl' />
					) : (
						<MdMenu className='text-blue text-2xl' />
					)}
				</button>
			</div>

			{showMenu && (
				<ul className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
					<li>
						<a href='#link3'>find a property</a>
					</li>
					<li>
						<a href='#link1'>services</a>
					</li>
					<li>
						<a href='#link2'>about us</a>
					</li>
					<li>
						<a href='#link3'>projects</a>
					</li>
				</ul>
			)}
		</nav>
	);
}
