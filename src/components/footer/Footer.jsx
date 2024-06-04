import React from 'react';

import { MdArrowForwardIos } from 'react-icons/md';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='bg-gray w-full'>
			<section className='flex items-start justify-center gap-4 w-[90%] mx-auto py-8 '>
				<div className='w-[40%]'>
					<h3>Jia</h3>
					<p className='text-sm'>
						We are a firm of Estate Surveyors and Valuers carrying on business
						Wunder the name and style of JOHN ISANGEDIGHI & ASSOCIATES. We
						formally commenced operation in November 2007 as an indigenous
						company, registered with Corporate Affairs Commission, Abuja and
						recognized as a professional firm of Estate Surveyors and Valuers.
						We are also registered with the Nigerian Institution of Estate
						Surveyors and Valuers (NIESV) and Estate Surveyors and Valuers
						Registration Board of Nigeria (ESVARBON) to practice the profession
						throughout the Federal Republic of Nigeria.
					</p>
				</div>
				<section className='flex flex-col items-center justify-center  w-[20%]'>
					<h4 className='font-bold text-blue mb-2'>Helpful Links</h4>
					<ul className='flex flex-col items-start justify-center text-black text-sm cursor-pointer gap-2 '>
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

				<section className='w-[40%] '>
					<h4 className='text-blue font-bold mb-2'>Contact info</h4>

					<div className=''>
						<h5 className='font-bold text-red'>Our Offices:</h5>
						<div className='flex items-center justify-between gap-4'>
							<p className=' text-xs'>
								<b className='text-blue'>Corporate Head Office:</b> Block A5-
								Suite 75 New Sura Complex Simpson Street, Lagos Tel:
								08023034248. Email: admin@johnisangedighi.ng
							</p>

							<p className='text-xs'>
								<b className='text-blue'>Regional Office:</b> Abasiene Court:
								No. 65 Obio Imo Street, Uyo, Akwa Ibom State.Email:
								admin@johnisangedighi.ng
							</p>
							<p className='text-xs'>
								<b className='text-blue'>Abuja Office:</b> C/o Okon Enoyoh &
								Partners, Suite 29, 2nd Floor, Shalom Plaza, Gudu Junction, Gudu
								District, Abuja, FCT.
							</p>
						</div>
					</div>

					<div className='flex items-center justify-between gap-2 w-1/2  mt-3 font-bold'>
						Follow Us:
						<span className='text-2xl flex items-center justify-between gap-4 text-blue cursor-pointer'>
							<FaFacebookSquare /> <FaInstagramSquare /> <FaTwitterSquare />
						</span>
					</div>
				</section>
			</section>
		</footer>
	);
}
