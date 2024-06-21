'use client';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
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

	// const pathname = usePathname();

	return (
		<nav className='mx-auto  fixed mt-8 z-50 w-full nav '>
			{/* <div className='mx-auto w-[90%] backdrop-blur-md bg-white/70 shadow-md rounded-full flex items-center justify-between px-3'> */}
			<div className='mx-auto w-[90%] bg-primary shadow rounded-2xl flex items-center justify-between px-3'>
				<div className='w-[10rem] py-3'>
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
						<Link href='#'>find a property</Link>
						{/* <a href='#link3'></a> */}
					</li>
					<li>
						<Link href='/services'>services</Link>
						{/* <a href='#link1'></a> */}
					</li>
					<li>
						<Link href='/about'>about us</Link>

						{/* <a href='#link2'></a> */}
					</li>
					<li>
						<Link href='/projects'>projects</Link>

						{/* <a href='#link3'></a> */}
					</li>
				</ul>

				<button
					className='md:hidden'
					onClick={handleShowMenu}>
					{isExpanded ? (
						<MdOutlineClose className='text-secondary text-2xl' />
					) : (
						<MdMenu className='text-secondary text-2xl' />
					)}
				</button>
			</div>

			{showMenu && (
				<ul className='flex flex-col items-center  justify-center gap-2 cursor-pointer navItems z-10'>
					<li>
						<Link
							className='bg-primary text-secondary'
							href='/'>
							find a property
						</Link>
					</li>
					<li>
						<Link
							className='bg-primary text-secondary'
							href='/services'>
							services
						</Link>
					</li>
					<li>
						<Link
							className='bg-primary text-secondary'
							href='/about'>
							about us
						</Link>
					</li>
					<li>
						<Link
							className='bg-primary text-secondary'
							href='/projects'>
							projects
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
}
