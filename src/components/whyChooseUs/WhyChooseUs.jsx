'use client';
import { motion } from 'framer-motion';

import old from '../../../public/images/old.webp';
import Image from 'next/image';

export default function WhyChooseUs() {
	return (
		<motion.section
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.2, duration: 0.5 }}
			className='w-full flex flex-col-reverse md:flex-row justify-between  bg-secondary relative mb-[10%]'>
			{/* 
			<div className='absolute p-4  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-[20rem] md:w-[30rem]  z-10'>
				<h3 className='text-center text-white text-xl font-bold'>
					OUR UNIQUENESS
				</h3>
				<ul className='text-white text-sm list-none flex flex-col items-start gap-2 '>
					<li>We render fast, timely and efficient services.</li>
					<li>We operate based on reliable market information.</li>
					<li>We have strong integrity and run an integrity-based practice.</li>
					<li>
						We give customers value for their money and offer best bargains.
					</li>
					<li>
						We are a socially responsible and responsive organization that seeks
						to give back to the society, from the gains and support we received
						over the years, by way of employment and empowerment.
					</li>
				</ul>
			</div> */}

			<div className='basis-1/2 text-start p-4 '>
				<h1 className='text-4xl font-semibold mb-4 '>OUR MISSION</h1>

				<motion.ul
					className='text-black text-base list-none flex flex-col items-start gap-2'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}>
					<li>
						To be a world-class real estate solution provider, delivering
						services with excellence, integrity and value.
					</li>
					<li>
						To deliver excellent and quality services above ordinary standard to
						our clients while upholding ethical and professional values in the
						conduct of our business.
					</li>
					<li>
						To be a model professional firm of estate surveyors and valuers
						rendering quality and satisfactory real estate and related services
						through highly trained and motivated staff, with modern technology.
					</li>
					<li>
						To establish a high and reputable standard of professional conduct
						and practice in the real estate business.
					</li>
					<li>
						To promote and protect the integrity and core value of estate
						profession in our dealings with the general public, international
						communities, companies, institutions, government bodies,
						multinationals, world bodies, associations etc.
					</li>
				</motion.ul>
			</div>

			<div className='basis-1/2'>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					className=''>
					<Image
						src={old}
						alt='value image'
						width={0}
						height={0}
						sizes='100%'
						style={{ width: '100%', height: '100%' }}
					/>
				</motion.div>
			</div>
			{/* </div> */}
		</motion.section>
	);
}
