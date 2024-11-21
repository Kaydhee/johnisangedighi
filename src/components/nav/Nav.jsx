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
		<nav className='mx-auto w-full '>
			<div className='mx-auto w-[90%]  flex items-center justify-between px-3'>
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

				<ul className='hidden md:flex items-center justify-center gap-2 cursor-pointer '>
					<li className=' hover:font-bold '>
						<Link
							href='/findProperty'
							className='text-black'>
							find a property
						</Link>
					</li>
					<li className=' hover:font-bold '>
						<Link
							href='/services'
							className='text-black'>
							services
						</Link>
					</li>
					<li className=' hover:font-bold '>
						<Link
							href='/about'
							className='text-black'>
							about us
						</Link>
					</li>
					<li className=' hover:font-bold '>
						<Link
							href='/projects'
							className='text-black'>
							projects
						</Link>
					</li>
				</ul>

				<button
					className='md:hidden'
					onClick={handleShowMenu}>
					{isExpanded ? (
						<MdOutlineClose className='text-black text-2xl z-10' />
					) : (
						<MdMenu className='text-black text-2xl' />
					)}
				</button>
			</div>

			{showMenu && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-10'
					onClick={handleShowMenu}>
					<ul className='flex flex-col items-center  justify-center gap-2 cursor-pointer navItems w-[80%]  z-50'>
						<li>
							<Link
								className='bg-black text-white'
								href='/findProperty'>
								find a property
							</Link>
						</li>
						<li>
							<Link
								className='bg-black text-white'
								href='/services'>
								services
							</Link>
						</li>
						<li>
							<Link
								className='bg-black text-white'
								href='/about'>
								about us
							</Link>
						</li>
						<li>
							<Link
								className='bg-black text-white'
								href='/projects'>
								projects
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}
