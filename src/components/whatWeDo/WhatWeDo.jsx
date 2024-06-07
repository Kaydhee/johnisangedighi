import Image from 'next/image';
import React from 'react';

import HQ from '../../assets/background.jpg';

export default function WhatWeDo() {
	return (
		<section className='w-[90%] mx-auto'>
			<section className='flex flex-col md:flex-row items-center justify-center'>
				<div className='bg-white text-black p-4 font-bold w-full text-center md:text-start md:w-1/2'>
					<h2 className='text-blue  text-3xl mb-2'>What we do</h2>
					<p className='text-sm'>
						We are a firm of Estate Surveyors and Valuers carrying on business
						Wunder the name and style of JOHN ISANGEDIGHI & ASSOCIATES. We
						formally commenced operation in November 2007 as an indigenous
						company, registered with Corporate Affairs Commission, Abuja and
						recognized as a professional firm of Estate Surveyors and Valuers.
						{/* We are also registered with the Nigerian Institution of Estate
						Surveyors and Valuers (NIESV) and Estate Surveyors and Valuers
						Registration Board of Nigeria (ESVARBON) to practice the profession
						throughout the Federal Republic of Nigeria. */}
					</p>
				</div>

				<div className='bg-royalblue text-white p-4 font-bold w-full text-center md:text-start md:w-1/2'>
					<h2 className='text-3xl mb-2'>What you are assured</h2>

					<p className='text-sm'>
						We provide real estate consultancy services to private and public
						sector organizations. Prior to 2007, the Firm concentrated on what
						could be called the down stream aspect of real estate sector. Having
						built confidence in the market over the years, the Firm was
						strategically re- positioned and we expanded our services to include
						properties and compensation valuation and packaging real estate
						developments cross the country, among other core services.
					</p>
				</div>
			</section>
			<section className='flex flex-col md:flex-row items-center justify-center md:mt-[-.2%]'>
				<div className='w-full  md:w-1/2 h-[24rem]'>
					<Image
						src={HQ}
						alt='property image'
						width={0}
						height={0}
						sizes='100%'
						style={{ width: '100%', height: '100%' }}
					/>
				</div>

				<div className='bg-white text-black p-4 font-bold w-full text-center md:text-start md:w-1/2'>
					<h2 className='text-blue  text-3xl mb-2'>What we promise</h2>

					<p className='text-sm'>
						It is our company policy to transact business at top level of
						ethical considerations. Hence, we encourage our staff to be guided
						by integrity in their dealings with clients and the public in
						general. Also, we strongly believe that one way of attracting and
						growing clientele is through first class service delivery.
						Consequently, we go to great length to render satisfactory service
						to our clients. These are the guiding philosophy behind the fast
						pace of growth and expansion of John Isangedighi & Associates within
						the short period of our existence.
					</p>

					<button>About Us</button>
				</div>
			</section>
		</section>
	);
}
