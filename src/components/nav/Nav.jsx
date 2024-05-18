'use client';
// import Image from 'next/image';
// import logo from '../../assets/logo.svg';

import { useCallback, useEffect, useRef, useState } from 'react';
import { MdMenu, MdOutlineClose } from 'react-icons/md';

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	const navRef = useRef(null);
	const supportsAnchorPos = 'anchorName' in document.documentElement.style;

	const sync = useCallback(
		(nav, anchors) => () => {
			for (let i = 0; i < anchors.length; i++) {
				anchors[i].style.setProperty('view-transition-name', `item-${i + 1}`);
				if (!supportsAnchorPos) {
					const bounds = anchors[i].getBoundingClientRect();
					nav.style.setProperty(`--item-${i + 1}-x`, `${bounds.left}px`);
					nav.style.setProperty(`--item-${i + 1}-y`, `${bounds.top}px`);
					nav.style.setProperty(`--item-${i + 1}-width`, `${bounds.width}px`);
					nav.style.setProperty(`--item-${i + 1}-height`, `${bounds.height}px`);
				}
			}
		},
		[supportsAnchorPos]
	);

	useEffect(() => {
		const nav = navRef.current;
		if (!nav) return;
		const anchors = nav.querySelectorAll('a');

		const calibrate = sync(nav, anchors);
		if (!supportsAnchorPos) {
			document.documentElement.dataset.noAnchor = 'true';
			calibrate();
			window.addEventListener('resize', calibrate);
		}

		const falloff = (index) => () => {
			if (supportsAnchorPos) {
				nav.style.setProperty('--item-active', `--item-${index + 1}`);
			} else {
				nav.style.setProperty('--item-active-x', `var(--item-${index + 1}-x)`);
				nav.style.setProperty('--item-active-y', `var(--item-${index + 1}-y)`);
				nav.style.setProperty(
					'--item-active-width',
					`var(--item-${index + 1}-width)`
				);
				nav.style.setProperty(
					'--item-active-height',
					`var(--item-${index + 1}-height)`
				);
			}
		};

		for (let i = 0; i < anchors.length; i++) {
			anchors[i].addEventListener('pointerenter', falloff(i));
		}

		const deactivate = async () => {
			const transitions = document.getAnimations();
			if (transitions.length) {
				const fade = transitions.find(
					(t) =>
						t.effect.target === nav.firstElementChild &&
						t.transitionProperty === 'opacity'
				);
				if (fade) {
					await fade.finished;
				}
				if (supportsAnchorPos) {
					nav.style.removeProperty('--item-active');
				} else {
					nav.style.removeProperty('--item-active-x');
					nav.style.removeProperty('--item-active-y');
					nav.style.removeProperty('--item-active-width');
					nav.style.removeProperty('--item-active-height');
				}
			}
		};

		nav.addEventListener('pointerleave', deactivate);
		nav.addEventListener('blur', deactivate);

		return () => {
			if (!supportsAnchorPos) {
				window.removeEventListener('resize', calibrate);
			}
			for (let i = 0; i < anchors.length; i++) {
				anchors[i].removeEventListener('pointerenter', falloff(i));
			}
			nav.removeEventListener('pointerleave', deactivate);
			nav.removeEventListener('blur', deactivate);
		};
	}, [sync, supportsAnchorPos]);

	// function that handles the navbar toggles.
	function handleShowMenu() {
		setShowMenu(!showMenu);
		setIsExpanded(!isExpanded);
	}

	return (
		<nav
			ref={navRef}
			data-magnetic
			className='mx-auto fixed mt-8 z-50 w-full nav'>
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
