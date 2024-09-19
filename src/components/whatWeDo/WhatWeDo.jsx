import Image from 'next/image';
import React from 'react';

import HQ from '../../assets/background.jpg';
import { Ri24HoursFill } from 'react-icons/ri';
import { IoIosDocument } from 'react-icons/io';
import { MdVerifiedUser } from 'react-icons/md';
import { FaNairaSign, FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

export default function WhatWeDo() {
	return (
		<section className='w-[90%] mx-auto '>
			<section className='flex flex-col md:flex-row items-center justify-center mt-[2%] pb-8'>
				<div className=' basis-2/4 flex items-center justify-center '>
					<div className='w-full  md:w-1/2 h-[30rem] rounded-xl relative'>
						<Image
							src={HQ}
							alt='property image'
							width={0}
							height={0}
							sizes='100%'
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								borderRadius: '2rem',
							}}
						/>

						<button className='bg-secondary p-4 sm:p-6 rounded-full bottom-[-1rem] right-[-1rem] sm:bottom-[-1.5rem] sm:right-[-2rem] absolute text-2xl text-black z-10'>
							<Link href='/about'>
								<FaArrowRightLong />
							</Link>
						</button>
					</div>
				</div>

				<div className='mt-[3%] sm:mt-0 basis-2/4 text-white'>
					<h3 className='text-secondary text-2xl sm:text-3xl md:text-5xl font-bold mb-4'>
						What We Do
					</h3>
					<p className='font-medium text-2xl sm:text-4xl mb-2'>
						Why you should choose us?
					</p>

					<p className='mb-2 text-sm'>
						We provide real estate consultancy services to private and public
						sector organizations. Prior to 2007, the Firm concentrated on what
						could be called the down stream aspect of real estate sector.
					</p>

					<div className='flex items-center gap-2 mb-4 text-xl  sm:text-2xl font-medium '>
						<Ri24HoursFill /> <p>Find your next home in 24hours</p>
					</div>
					<div className='flex items-center gap-2 mb-4 text-xl  sm:text-2xl font-medium'>
						<IoIosDocument /> <p>Rental agreements</p>
					</div>
					<div className='flex items-center gap-2 mb-4 text-xl  sm:text-2xl font-medium'>
						<MdVerifiedUser /> <p>Life-time guarantee</p>
					</div>
					<div className='flex items-center gap-2 mb-4 text-xl  sm:text-2xl font-medium'>
						<FaNairaSign /> <p>House within your budget</p>
					</div>
				</div>
			</section>
		</section>
	);
}

{
	/* <div className=' p-4 w-full text-center md:text-start md:w-1/2'>
<h2 className='text-white  text-3xl mb-2'>What we do</h2>
<p className='text-sm text-white'>
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

<div className='bg-primary text-white p-4 w-full text-center md:text-start md:w-1/2'>
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


<div className=' text-white p-4 w-full text-center md:text-start md:w-1/2'>
<h2 className='text-white  text-3xl mb-2'>What we promise</h2>

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
</div> */
}
