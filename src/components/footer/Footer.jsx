import React from 'react';

import { MdArrowForwardIos } from 'react-icons/md';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='bg-black text-white w-full'>
			<section className='flex flex-col md:flex-row items-start justify-center gap-4 w-[90%] mx-auto py-8 '>
				<div className=' '>
					<h3>Jia</h3>

					{/* <div className='flex  items-center justify-between gap-2 w-full md:w-1/2  mt-3 font-bold'> */}

					<div className='text-2xl flex items-center justify-between gap-4 text-white cursor-pointer'>
						<FaFacebookSquare /> <FaInstagramSquare /> <FaTwitterSquare />
					</div>
					{/* </div> */}
				</div>
				<section className='flex flex-col items-start md:items-center justify-center w-full '>
					<h4 className='font-bold text-white mb-2'>Quick Links</h4>
					<ul className='flex flex-col items-start justify-center text-white text-sm cursor-pointer gap-2 '>
						<li className='hover:font-bold flex items-center justify-between gap-2'>
							{' '}
							<MdArrowForwardIos /> About us
						</li>
						<li className='hover:font-bold flex items-center justify-between gap-2'>
							{' '}
							<MdArrowForwardIos /> Contact us
						</li>
						<li className='hover:font-bold flex items-center justify-between gap-2'>
							<MdArrowForwardIos /> Projects
						</li>
						<li className='hover:font-bold flex items-center justify-between gap-2'>
							<MdArrowForwardIos /> Find a property
						</li>
					</ul>
				</section>

				<section className=''>
					{/* <h4 className='text-white font-bold mb-2'>Contact info</h4> */}

					<div className=''>
						<h5 className='font-bold text-white'>Our Offices:</h5>
						<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
							<p className=' text-xs'>
								<b className='text-white'>Corporate Head Office:</b> Block A5-
								Suite 75 New Sura Complex Simpson Street, Lagos Tel:
								08023034248. Email: admin@johnisangedighi.ng
							</p>

							<p className='text-xs'>
								<b className='text-white'>Regional Office:</b> Abasiene Court:
								No. 65 Obio Imo Street, Uyo, Akwa Ibom State.Email:
								admin@johnisangedighi.ng
							</p>
							<p className='text-xs'>
								<b className='text-white'>Abuja Office:</b> C/o Okon Enoyoh &
								Partners, Suite 29, 2nd Floor, Shalom Plaza, Gudu Junction, Gudu
								District, Abuja, FCT.
							</p>
						</div>
					</div>
				</section>
			</section>
		</footer>
	);
}
